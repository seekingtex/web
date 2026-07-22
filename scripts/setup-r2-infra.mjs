/**
 * One-time R2 infrastructure setup script.
 *
 * Creates the R2 bucket + attaches a custom domain (which auto-creates the
 * DNS CNAME record) — all via Cloudflare API.
 *
 * Usage:
 *   CLOUDFLARE_ACCOUNT_ID=xxx CLOUDFLARE_API_TOKEN=xxx node scripts/setup-r2-infra.mjs
 */
const CF_API = 'https://api.cloudflare.com/client/v4';

const ACCOUNT_ID = process.env.CLOUDFLARE_ACCOUNT_ID || process.env.CF_ACCOUNT_ID;
const API_TOKEN  = process.env.CLOUDFLARE_API_TOKEN || process.env.CF_API_TOKEN;

const BUCKET_NAME = 'seekingtex-assets';
const CUSTOM_DOMAIN = 'products.asset.seekingtex.com';
const ZONE_NAME = 'seekingtex.com';

async function cf(method, path, body) {
  const url = `${CF_API}${path}`;
  const headers = {
    Authorization: `Bearer ${API_TOKEN}`,
    'Content-Type': 'application/json',
  };
  const res = await fetch(url, { method, headers, body: body ? JSON.stringify(body) : undefined });
  const data = await res.json();
  if (!data.success) {
    const msgs = (data.errors || []).map(e => e.message).join('; ');
    throw new Error(`CF API error (${method} ${path}): ${msgs || JSON.stringify(data)}`);
  }
  return data.result;
}

async function getZoneId(name) {
  const zones = await cf('GET', `/zones?name=${encodeURIComponent(name)}`);
  if (!zones || zones.length === 0) throw new Error(`Zone "${name}" not found`);
  return zones[0].id;
}

async function bucketExists(name) {
  try {
    await cf('GET', `/accounts/${ACCOUNT_ID}/r2/buckets/${name}`);
    return true;
  } catch {
    return false;
  }
}

async function listCustomDomains() {
  try {
    const result = await cf('GET', `/accounts/${ACCOUNT_ID}/r2/buckets/${BUCKET_NAME}/domains/custom`);
    return result.domains || [];
  } catch {
    return [];
  }
}

async function main() {
  if (!ACCOUNT_ID || !API_TOKEN) {
    console.error('ERROR: CLOUDFLARE_ACCOUNT_ID and CLOUDFLARE_API_TOKEN must be set');
    process.exit(1);
  }

  console.log(`\nR2 Infrastructure Setup for "${BUCKET_NAME}"\n`);

  // 1. Create bucket if needed
  const exists = await bucketExists(BUCKET_NAME);
  if (exists) {
    console.log(`  [ok] Bucket "${BUCKET_NAME}" already exists`);
  } else {
    await cf('POST', `/accounts/${ACCOUNT_ID}/r2/buckets`, { name: BUCKET_NAME });
    console.log(`  [ok] Bucket "${BUCKET_NAME}" created`);
  }

  // 2. Get zone ID
  let zoneId;
  try {
    zoneId = await getZoneId(ZONE_NAME);
    console.log(`  [ok] Zone "${ZONE_NAME}" found`);
  } catch (err) {
    console.error(`  [fail] Cannot find zone "${ZONE_NAME}": ${err.message}`);
    console.error(`  Add the domain "${ZONE_NAME}" to your Cloudflare account first.`);
    process.exit(1);
  }

  // 3. Check if custom domain is already attached
  const domains = await listCustomDomains();
  const existing = domains.find(d => d.domain === CUSTOM_DOMAIN);

  if (existing) {
    console.log(`  [ok] Custom domain "${CUSTOM_DOMAIN}" is already attached — enabling if needed`);
    if (!existing.enabled) {
      await cf('PUT', `/accounts/${ACCOUNT_ID}/r2/buckets/${BUCKET_NAME}/domains/custom/${CUSTOM_DOMAIN}`, { enabled: true });
      console.log(`  [ok] Custom domain "${CUSTOM_DOMAIN}" enabled`);
    }
  } else {
    console.log(`  [..] Attaching custom domain "${CUSTOM_DOMAIN}" to bucket...`);
    const result = await cf('POST', `/accounts/${ACCOUNT_ID}/r2/buckets/${BUCKET_NAME}/domains/custom`, {
      domain: CUSTOM_DOMAIN,
      enabled: true,
      zoneId,
    });
    console.log(`  [ok] Custom domain attached`);
    console.log(`       Domain:  ${result.domain}`);
    console.log(`       Enabled: ${result.enabled}`);
    console.log(`       Zone ID: ${result.zoneId}`);
  }

  // 4. Summary
  console.log(`\n  DONE — R2 infrastructure is ready.\n`);
  console.log(`  Bucket:       ${BUCKET_NAME}`);
  console.log(`  Public URL:   https://${CUSTOM_DOMAIN}/images/<filename>`);
  console.log(`\n  DNS propagation may take a minute. After that, verify:\n`);
  console.log(`    curl -I https://${CUSTOM_DOMAIN}/images/<any-filename>`);
}

main().catch(err => {
  console.error(`\nFAILED: ${err.message}`);
  process.exit(1);
});

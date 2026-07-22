/**
 * One-time R2 infrastructure setup script.
 *
 * Creates the R2 bucket, configures the custom domain, and adds the
 * DNS CNAME record — all via Cloudflare API using CLOUDFLARE_API_TOKEN.
 *
 * Usage:
 *   CLOUDFLARE_ACCOUNT_ID=xxx CLOUDFLARE_API_TOKEN=xxx node scripts/setup-r2-infra.mjs
 *
 * Or in CI (manual workflow_dispatch):
 *   node scripts/setup-r2-infra.mjs
 * (reads CLOUDFLARE_ACCOUNT_ID + CLOUDFLARE_API_TOKEN from env)
 */

const CF_API = 'https://api.cloudflare.com/client/v4';

const ACCOUNT_ID = process.env.CLOUDFLARE_ACCOUNT_ID || process.env.CF_ACCOUNT_ID;
const API_TOKEN  = process.env.CLOUDFLARE_API_TOKEN || process.env.CF_API_TOKEN;

const BUCKET_NAME = 'seekingtex-assets';
const CUSTOM_DOMAIN = 'products.asset.seekingtex.com';
const CNAME_TARGET = 'seekingtex-assets.r2.cloudflarestorage.com';
const ZONE_NAME = 'seekingtex.com';

// ─── Helpers ───────────────────────────────────────────────────────────────────

async function cf(method, path, body) {
  const url = `${CF_API}${path}`;
  const headers = {
    Authorization: `Bearer ${API_TOKEN}`,
    'Content-Type': 'application/json',
  };
  const res = await fetch(url, {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined,
  });
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

async function dnsRecordExists(zoneId, type, name) {
  const records = await cf('GET', `/zones/${zoneId}/dns_records?type=${type}&name=${encodeURIComponent(name)}`);
  return records && records.length > 0;
}

// ─── Main ───────────────────────────────────────────────────────────────────────

async function main() {
  if (!ACCOUNT_ID || !API_TOKEN) {
    console.error('❌ CLOUDFLARE_ACCOUNT_ID and CLOUDFLARE_API_TOKEN must be set');
    process.exit(1);
  }

  console.log(`🚀 Setting up R2 infrastructure for "${BUCKET_NAME}"...\n`);

  // 1. Create bucket
  const exists = await bucketExists(BUCKET_NAME);
  if (exists) {
    console.log(`✓ Bucket "${BUCKET_NAME}" already exists`);
  } else {
    await cf('POST', `/accounts/${ACCOUNT_ID}/r2/buckets`, { name: BUCKET_NAME });
    console.log(`✓ Bucket "${BUCKET_NAME}" created`);
  }

  // 2. Get zone ID
  let zoneId;
  try {
    zoneId = await getZoneId(ZONE_NAME);
    console.log(`✓ Zone "${ZONE_NAME}" found (ID: ${zoneId})`);
  } catch (err) {
    console.warn(`⚠ Could not find zone "${ZONE_NAME}": ${err.message}`);
    console.warn(`  DNS record and custom domain must be configured manually.`);
    console.warn(`  Add CNAME: ${CUSTOM_DOMAIN} → ${CNAME_TARGET}`);
    process.exit(0);
  }

  // 3. Add custom domain to R2 bucket
  try {
    await cf('PUT', `/accounts/${ACCOUNT_ID}/r2/buckets/${BUCKET_NAME}/custom_domains`, {
      domains: [{ domain: CUSTOM_DOMAIN, enabled: true, zone_id: zoneId, min_tls_version: '1.2' }],
    });
    console.log(`✓ Custom domain "${CUSTOM_DOMAIN}" added to bucket`);
  } catch (err) {
    if (err.message.includes('already exists') || err.message.includes('domain already')) {
      console.log(`✓ Custom domain "${CUSTOM_DOMAIN}" already configured`);
    } else {
      console.warn(`⚠ Could not add custom domain: ${err.message}`);
      console.warn(`  Add it manually in Cloudflare Dashboard → R2 → ${BUCKET_NAME} → Settings → Custom Domains`);
    }
  }

  // 4. Add DNS CNAME record
  const dnsExists = await dnsRecordExists(zoneId, 'CNAME', CUSTOM_DOMAIN);
  if (dnsExists) {
    console.log(`✓ DNS CNAME record for "${CUSTOM_DOMAIN}" already exists`);
  } else {
    try {
      await cf('POST', `/zones/${zoneId}/dns_records`, {
        type: 'CNAME',
        name: CUSTOM_DOMAIN,
        content: CNAME_TARGET,
        proxied: true,
        ttl: 1,
      });
      console.log(`✓ DNS CNAME record created: ${CUSTOM_DOMAIN} → ${CNAME_TARGET}`);
    } catch (err) {
      console.warn(`⚠ Could not create DNS record: ${err.message}`);
      console.warn(`  Add it manually: CNAME ${CUSTOM_DOMAIN} → ${CNAME_TARGET}`);
    }
  }

  console.log('\n✅ R2 infrastructure setup complete');
  console.log(`   Bucket:    ${BUCKET_NAME}`);
  console.log(`   Domain:    https://${CUSTOM_DOMAIN}`);
  console.log(`   Path:      https://${CUSTOM_DOMAIN}/images/<filename>`);
}

main().catch(err => {
  console.error(`\n❌ Setup failed: ${err.message}`);
  process.exit(1);
});

/**
 * One-time KV infrastructure setup script.
 *
 * Ensures the KV namespaces referenced by wrangler.toml / dist wrangler.json
 * exist, and prints their real namespace IDs so they can be wired into CI.
 *
 * Usage:
 *   CLOUDFLARE_ACCOUNT_ID=xxx CLOUDFLARE_API_TOKEN=xxx node scripts/setup-kv-infra.mjs
 *
 * Then add the printed IDs to GitHub Actions secrets:
 *   CONTACT_SUBMISSIONS_KV_ID  (binding: CONTACT_SUBMISSIONS)
 */
const CF_API = 'https://api.cloudflare.com/client/v4';

const ACCOUNT_ID = process.env.CLOUDFLARE_ACCOUNT_ID || process.env.CF_ACCOUNT_ID;
const API_TOKEN = process.env.CLOUDFLARE_API_TOKEN || process.env.CF_API_TOKEN;

// binding name -> existing namespace to reuse (id + title)
const NAMESPACES = [
  { binding: 'CONTACT_SUBMISSIONS', title: 'seeking', id: '76c742b6484342e894b3403f35c4310a' },
];

async function cf(method, path, body) {
  const url = `${CF_API}${path}`;
  const headers = {
    Authorization: `Bearer ${API_TOKEN}`,
    'Content-Type': 'application/json',
  };
  const res = await fetch(url, { method, headers, body: body ? JSON.stringify(body) : undefined });
  const data = await res.json();
  if (!data.success) {
    const msgs = (data.errors || []).map((e) => e.message).join('; ');
    throw new Error(`CF API error (${method} ${path}): ${msgs || JSON.stringify(data)}`);
  }
  return data.result;
}

async function main() {
  if (!ACCOUNT_ID || !API_TOKEN) {
    console.error('ERROR: CLOUDFLARE_ACCOUNT_ID and CLOUDFLARE_API_TOKEN must be set');
    process.exit(1);
  }

  console.log(`\nKV Infrastructure Setup\n`);

  const results = [];
  for (const ns of NAMESPACES) {
    // 1. Prefer an existing namespace by id, then by title
    let existing = null;
    let cursor = null;
    do {
      const list = await cf(
        'GET',
        `/accounts/${ACCOUNT_ID}/storage/kv/namespaces?per_page=50${cursor ? `&cursor=${encodeURIComponent(cursor)}` : ''}`
      );
      for (const item of list) {
        if (item.id === ns.id || item.title === ns.title) {
          existing = item;
          break;
        }
      }
      cursor = list.length === 50 ? list[list.length - 1].id : null;
    } while (cursor && !existing);

    let id;
    if (existing) {
      id = existing.id;
      console.log(`  [ok] KV namespace "${ns.title}" found (id=${id})`);
    } else if (ns.id) {
      id = ns.id;
      console.log(`  [ok] Using configured KV namespace id=${id}`);
    } else {
      const created = await cf('POST', `/accounts/${ACCOUNT_ID}/storage/kv/namespaces`, { title: ns.title });
      id = created.id;
      console.log(`  [ok] KV namespace "${ns.title}" created (id=${id})`);
    }
    results.push({ binding: ns.binding, id });
  }

  console.log(`\n  DONE — KV namespaces are ready.\n`);
  console.log('  Add these to GitHub Actions secrets:\n');
  for (const r of results) {
    console.log(`  ${r.binding.toUpperCase().replace(/-/g, '_')}_KV_ID=${r.id}`);
  }
  console.log('');
}

main().catch((err) => {
  console.error('\n  Error:', err.message);
  process.exit(1);
});

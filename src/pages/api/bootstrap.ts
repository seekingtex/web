import type { APIRoute } from 'astro';

export const prerender = false;

const SUPPORTED_LANGS = ['en', 'zh', 'fr', 'de', 'es', 'pt', 'ar', 'it', 'ja', 'ko', 'ru', 'pl'];
const DEFAULT_LANG = 'en';

function isValidLang(lang: string): boolean {
  return SUPPORTED_LANGS.includes(lang);
}

function respond(data: unknown, status = 200): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
}

function jsonResponse(data: unknown): Response {
  return new Response(JSON.stringify(data), {
    status: 200,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'public, max-age=300',
    },
  });
}

async function kvGet(env: any, ns: string, key: string, fallback: string): Promise<string | null> {
  const kv = env[ns];
  if (!kv) return null;
  let val = await kv.get(key);
  if (!val && fallback !== key) {
    val = await kv.get(fallback);
  }
  return val;
}

async function kvPut(kv: any, key: string, value: string): Promise<void> {
  await kv.put(key, value);
}

export const GET: APIRoute = async ({ request, locals }) => {
  const url = new URL(request.url);
  const lang = url.searchParams.get('lang') || (locals as any)?.lang || DEFAULT_LANG;
  const resolvedLang = isValidLang(lang) ? lang : DEFAULT_LANG;
  const env = (locals as any)?.runtime?.env;

  const [langConfigRaw, navRaw, geoRaw, productsListRaw] = await Promise.all([
    kvGet(env, 'WF_LANG', `lang:${resolvedLang}`, `lang:${DEFAULT_LANG}`),
    kvGet(env, 'WF_NAV', `nav:${resolvedLang}`, `nav:${DEFAULT_LANG}`),
    kvGet(env, 'WF_GEO', 'geo:global', 'geo:global'),
    kvGet(env, 'WF_PRODUCTS', 'list:global', 'list:global'),
  ]);

  return jsonResponse({
    lang: resolvedLang,
    supportedLangs: SUPPORTED_LANGS,
    language: langConfigRaw ? JSON.parse(langConfigRaw) : null,
    navigation: navRaw ? JSON.parse(navRaw) : null,
    geo: geoRaw ? JSON.parse(geoRaw) : null,
    products: productsListRaw ? JSON.parse(productsListRaw) : [],
  });
};

export const POST: APIRoute = async ({ request, locals }) => {
  const url = new URL(request.url);
  const path = url.pathname.replace(/^\/api\/bootstrap/, '');
  const env = (locals as any)?.runtime?.env;

  if (path !== '/product' && path !== '/nav') {
    return respond({ error: 'Unknown endpoint' }, 404);
  }

  const ct = request.headers.get('content-type') || '';
  if (!ct.includes('application/json')) {
    return respond({ error: 'Content-Type must be application/json' }, 400);
  }

  let body: any;
  try {
    body = await request.json();
  } catch {
    return respond({ error: 'Invalid JSON body' }, 400);
  }

  if (path === '/product') {
    const { id, lang: bodyLang, data } = body;
    if (!id || !data) return respond({ error: 'Missing id or data' }, 400);
    const productLang = bodyLang || DEFAULT_LANG;
    const kv = env?.WF_PRODUCTS;
    if (!kv) return respond({ error: 'WF_PRODUCTS KV not bound' }, 500);

    await kvPut(kv, `product:${id}:${productLang}`, JSON.stringify(data));

    const listRaw = await kv.get('list:global');
    const list = listRaw ? JSON.parse(listRaw) : [];
    const idx = list.findIndex((p: any) => p.id === id);
    if (idx >= 0) list[idx] = { ...list[idx], ...data, id };
    else list.push({ id, ...data });
    await kvPut(kv, 'list:global', JSON.stringify(list));

    if (env?.WF_CACHE) await env.WF_CACHE.delete(`bootstrap:${productLang}`);
    return jsonResponse({ success: true, id, lang: productLang });
  }

  if (path === '/nav') {
    const { lang: bodyLang, data } = body;
    if (!data) return respond({ error: 'Missing data' }, 400);
    const navLang = bodyLang || DEFAULT_LANG;
    const kv = env?.WF_NAV;
    if (!kv) return respond({ error: 'WF_NAV KV not bound' }, 500);

    await kvPut(kv, `nav:${navLang}`, JSON.stringify(data));
    if (env?.WF_CACHE) await env.WF_CACHE.delete(`bootstrap:${navLang}`);
    return jsonResponse({ success: true, lang: navLang });
  }

  return respond({ error: 'Unknown endpoint' }, 404);
};

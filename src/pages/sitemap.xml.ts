export const prerender = true;

const base = 'https://seekingtex.com';

export async function GET() {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

  <sitemap><loc>${base}/sitemap-entity.xml</loc></sitemap>
  <sitemap><loc>${base}/en/sitemap.xml</loc></sitemap>
  <sitemap><loc>${base}/fr/sitemap.xml</loc></sitemap>
  <sitemap><loc>${base}/de/sitemap.xml</loc></sitemap>
  <sitemap><loc>${base}/es/sitemap.xml</loc></sitemap>
  <sitemap><loc>${base}/pt/sitemap.xml</loc></sitemap>
  <sitemap><loc>${base}/it/sitemap.xml</loc></sitemap>
  <sitemap><loc>${base}/ja/sitemap.xml</loc></sitemap>
  <sitemap><loc>${base}/zh/sitemap.xml</loc></sitemap>
  <sitemap><loc>${base}/ar/sitemap.xml</loc></sitemap>
  <sitemap><loc>${base}/ru/sitemap.xml</loc></sitemap>
  <sitemap><loc>${base}/pl/sitemap.xml</loc></sitemap>
  <sitemap><loc>${base}/nl/sitemap.xml</loc></sitemap>
  <sitemap><loc>${base}/ms/sitemap.xml</loc></sitemap>
  <sitemap><loc>${base}/fil/sitemap.xml</loc></sitemap>
  <sitemap><loc>${base}/el/sitemap.xml</loc></sitemap>
  <sitemap><loc>${base}/id/sitemap.xml</loc></sitemap>
  <sitemap><loc>${base}/vi/sitemap.xml</loc></sitemap>
</sitemapindex>`;
  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
}

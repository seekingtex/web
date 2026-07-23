import type { APIRoute } from 'astro';
import { SITE } from 'astrowind:config';

export const prerender = true;

export const GET: APIRoute = async () => {
  const siteUrl = String(SITE.site).replace(/\/+$/, '');
  const manifest = {
    name: 'Seekingtex',
    short_name: 'Seekingtex',
    description:
      'Professional functional fabric manufacturer — UPF 50+ sun protection, waterproof breathable, quick-dry moisture wicking, antibacterial, stretch, and eco-friendly recycled textiles. OEKO-TEX certified. Factory-direct pricing.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#0284c7',
    icons: [
      { src: '/favicon-192x192.png', sizes: '192x192', type: 'image/png' },
      { src: '/favicon-512x512.png', sizes: '512x512', type: 'image/png' },
      { src: '/favicon.svg', sizes: 'any', type: 'image/svg+xml', purpose: 'any maskable' },
    ],
    categories: ['textile', 'manufacturing', 'fabric', 'shopping'],
    lang: 'en',
    scope: '/',
    id: siteUrl,
    prefer_related_applications: false,
  };

  return new Response(JSON.stringify(manifest, null, 2), {
    headers: { 'Content-Type': 'application/manifest+json' },
  });
};

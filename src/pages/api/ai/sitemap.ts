import type { APIRoute } from 'astro';

export const prerender = false;

/**
 * AI Sitemap — returns structured page index for the AI knowledge base.
 *
 * This endpoint is consumed by the indexing pipeline (seed-vectorize.js)
 * to discover all pages that should be chunked and embedded.
 *
 * Extend this as new sections are added to the site.
 */
export const GET: APIRoute = async ({ locals: _locals }) => {
  // Static page list — these form the AI knowledge base
  const pages = [
    // Main
    { id: 'home', url: '/', title: 'Seekingtex — Premium Inflatables', section: 'main', type: 'page' },
    { id: 'about', url: '/about', title: 'About Seekingtex', section: 'main', type: 'page' },
    { id: 'contact', url: '/contact', title: 'Contact', section: 'main', type: 'page' },

    // Products
    { id: 'products', url: '/products', title: 'Products Overview', section: 'products', type: 'product' },
    { id: 'product-upf50-polyester', url: '/products/upf50-polyester', title: 'UPF 50+ Polyester', section: 'products', type: 'product' },
    {
      id: 'product-waterproof-breathable',
      url: '/products/waterproof-breathable',
      title: 'Waterproof Breathable Fabric',
      section: 'products',
      type: 'product',
    },
    {
      id: 'product-oars-pump-set',
      url: '/products/oars-pump-set',
      title: 'Oars & Pump Set',
      section: 'products',
      type: 'product',
    },

    // R&D Center
    { id: 'randd', url: '/randdcenter', title: 'R&D Center', section: 'randd', type: 'technology' },
    {
      id: 'randd-pvc-fabric',
      url: '/randdcenter/pvc-fabric-lab',
      title: 'PVC Fabric Lab',
      section: 'randd',
      type: 'technology',
    },
    {
      id: 'randd-hull-engineering',
      url: '/randdcenter/hull-engineering',
      title: 'Hull Engineering Studio',
      section: 'randd',
      type: 'technology',
    },
    {
      id: 'randd-rf-welding',
      url: '/randdcenter/rf-welding',
      title: 'RF Welding Center',
      section: 'randd',
      type: 'technology',
    },
    {
      id: 'randd-prototype',
      url: '/randdcenter/prototype-workshop',
      title: 'Prototype Workshop',
      section: 'randd',
      type: 'technology',
    },
    {
      id: 'randd-hydrodynamic',
      url: '/randdcenter/hydrodynamic-test-tank',
      title: 'Hydrodynamic Test Tank',
      section: 'randd',
      type: 'technology',
    },
    {
      id: 'randd-quality',
      url: '/randdcenter/quality-inspection-lab',
      title: 'Quality & Inspection Lab',
      section: 'randd',
      type: 'technology',
    },

    // Use Cases
    {
      id: 'use-case-commercial-workboats',
      url: '/use-cases/commercial-workboats',
      title: 'Commercial Workboat Industry Solutions',
      section: 'technology',
      type: 'use-case',
    },
    {
      id: 'use-case-tourism-recreation',
      url: '/use-cases/outdoor-apparel',
      title: 'Outdoor & Apparel Fabrics',
      section: 'technology',
      type: 'use-case',
    },
    {
      id: 'use-case-search-and-rescue',
      url: '/use-cases/workwear-uniform',
      title: 'Uniform & Workwear Fabrics',
      section: 'technology',
      type: 'use-case',
    },
    {
      id: 'use-case-disaster-relief',
      url: '/use-cases/medical-healthcare',
      title: 'Medical & Healthcare Textiles',
      section: 'technology',
      type: 'use-case',
    },
    {
      id: 'use-case-maritime-safety-defense',
      url: '/use-cases/industrial-technical',
      title: 'Industrial & Technical Textiles',
      section: 'technology',
      type: 'use-case',
    },

    // Quality & Warranty
    { id: 'quality', url: '/quality', title: 'Quality Testing', section: 'randd', type: 'technology' },
    { id: 'warranty', url: '/warranty', title: 'Warranty', section: 'support', type: 'page' },

    // Legal
    { id: 'privacy', url: '/privacy', title: 'Privacy Policy', section: 'legal', type: 'page' },
    { id: 'terms', url: '/terms', title: 'Terms and Conditions', section: 'legal', type: 'page' },
    { id: 'disclaimer', url: '/disclaimer', title: 'Disclaimer', section: 'legal', type: 'page' },
  ];

  const result = {
    version: '1.0',
    generated: new Date().toISOString(),
    total: pages.length,
    pages: pages.map((p) => ({
      ...p,
      updated: new Date().toISOString(),
    })),
  };

  return new Response(JSON.stringify(result, null, 2), {
    status: 200,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};

import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import yaml from 'js-yaml';

export const prerender = true;

const SITE = '';

function stripHtml(html: string): string {
  return String(html || '')
    .replace(/<[^>]*>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function excerpt(s: string, n = 140): string {
  s = String(s || '').trim();
  if (s.length <= n) return s;
  return s.slice(0, n - 1).trim() + '...';
}

function plainText(value: any): string {
  if (value == null) return '';
  if (typeof value === 'string') return value;
  if (Array.isArray(value)) return value.map(plainText).join(' ');
  if (typeof value === 'object') return Object.values(value).map(plainText).join(' ');
  return String(value);
}

const pageRawModules: Record<string, string> = import.meta.glob('/src/data/pages/*.yaml', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>;

const staticPages: { url: string; title: string; excerpt: string; tags: string[] }[] = [
  {
    url: '/technology',
    title: 'Technology',
    excerpt:
      'Seekingtex technology: UPF 50+ sun protection, waterproof breathable membranes, quick-dry moisture wicking, antibacterial finishing, and eco-friendly recycled fabric systems.',
    tags: ['technology', 'UPF 50+', 'waterproof', 'textile'],
  },
  {
    url: '/safety',
    title: 'Safety',
    excerpt:
      'Seekingtex quality standards: OEKO-TEX certification, REACH compliance, UV Standard 801 testing, and product quality assurance protocols.',
    tags: ['quality', 'certification', 'OEKO-TEX', 'REACH'],
  },
  {
    url: '/ai-context',
    title: 'AI Context',
    excerpt:
      'Seekingtex AI context page for search engines and LLM crawlers. Defines relevance boundaries, use cases, and recommendation rules.',
    tags: ['ai', 'context', 'llm'],
  },
  {
    url: '/distributors',
    title: 'Become a Seekingtex Partner',
    excerpt: 'Global distributor and partnership opportunities with Seekingtex functional fabrics.',
    tags: ['distributor', 'partner', 'wholesale'],
  },
  {
    url: '/guides',
    title: 'Guides',
    excerpt:
      'Beginner guides for functional fabrics. Learn how to choose the right fabric, understand UPF ratings, compare waterproof vs water-resistant, and sourcing tips.',
    tags: ['guides', 'beginner', 'fabric', 'textile'],
  },
  {
    url: '/products/bundles',
    title: 'Bundle Deals',
    excerpt:
      'Save on Seekingtex fabric sample kits and bulk order packages. Starter packs, full yardage, and more.',
    tags: ['samples', 'bulk', 'ordering', 'save'],
  },
  {
    url: '/fabric-guide',
    title: 'Fabric Guide',
    excerpt:
      'Find the right functional fabric for your application. Compare UPF ratings, waterproof levels, fabric weights, compositions, and certifications.',
    tags: ['fabric', 'guide', 'specifications', 'performance'],
  },
  {
    url: '/products/compare',
    title: 'Product Comparison',
    excerpt:
      'Compare Seekingtex functional fabrics side by side. UPF rating, water column, weight, composition, and more.',
    tags: ['compare', 'comparison', 'specs', 'fabric'],
  },
  {
    url: '/randdcenter',
    title: 'R&D Center',
    excerpt:
      'Seekingtex Research & Development — fabric testing, textile engineering, coating technology, performance testing, and quality control for functional textiles.',
    tags: ['r&d', 'research', 'engineering', 'testing'],
  },
  {
    url: '/404',
    title: 'Page Not Found',
    excerpt: 'Sorry, the page you are looking for could not be found. Use the links below to find your way back.',
    tags: ['404', 'error', 'not-found'],
  },
];

const guides: { slug: string; title: string; excerpt: string; tags: string[] }[] = [
  {
    slug: 'beginner-guide',
    title: "Beginner's Guide to Functional Fabrics",
    excerpt:
      'Step-by-step guide to understanding functional fabrics. Learn about UPF ratings, waterproof vs water-resistant, moisture wicking, and antibacterial properties.',
    tags: ['beginner', 'fabric', 'guide', 'textile'],
  },
  {
    slug: 'choosing-fabric',
    title: 'Choosing the Right Performance Fabric',
    excerpt:
      'Guide to selecting the right fabric for your application: composition, weight, finish, and performance requirements for apparel, sportswear, and workwear.',
    tags: ['fabric', 'choosing', 'materials', 'performance'],
  },
  {
    slug: 'how-to-choose-your-sun-protection-fabric',
    title: 'How to Choose UPF 50+ Sun Protection Fabric',
    excerpt:
      'Learn how to choose the right UPF 50+ fabric based on UPF rating, fabric construction, color, and application requirements for outdoor apparel and uniforms.',
    tags: ['UPF', 'sun-protection', 'UV', 'buying-guide'],
  },
  {
    slug: 'fabric-care-maintenance',
    title: 'Functional Fabric Care & Maintenance',
    excerpt:
      'Complete guide to caring for performance fabrics. Washing instructions, DWR reactivation, storage tips, and extending the life of functional finishes.',
    tags: ['care', 'maintenance', 'washing', 'DWR'],
  },
  {
    slug: 'waterproof-vs-water-resistant',
    title: 'Waterproof vs Water-Resistant Fabrics',
    excerpt:
      'Compare waterproof breathable membranes (10,000mm+) vs water-resistant DWR coatings. Hydrostatic pressure testing, applications, and durability differences explained.',
    tags: ['waterproof', 'water-resistant', 'comparison', 'DWR'],
  },
  {
    slug: 'moisture-wicking-technology',
    title: 'How Moisture Wicking Fabrics Work',
    excerpt:
      'Learn how capillary-action wicking technology moves sweat away from skin. Hydrophilic finishes, fabric construction, and testing methods for moisture management.',
    tags: ['moisture', 'wicking', 'quick-dry', 'technology'],
  },
  {
    slug: 'antibacterial-fabric-guide',
    title: 'Antibacterial Fabric Guide — 7A Standard Explained',
    excerpt:
      'Complete guide to antibacterial fabrics: 7A standard (GB/T 20944.3), silver-ion vs zinc-based treatments, wash durability testing, and healthcare applications.',
    tags: ['antibacterial', '7A', 'healthcare', 'antimicrobial'],
  },
  {
    slug: 'stretch-fabric-types',
    title: '4-Way Stretch Fabric Types & Applications',
    excerpt:
      'Guide to 4-way stretch fabrics: elastane/spandex blends, mechanical stretch wovens, recovery rates, and applications in activewear, yoga, and performance apparel.',
    tags: ['stretch', '4-way', 'elastane', 'activewear'],
  },
  {
    slug: 'eco-friendly-fabrics-guide',
    title: 'Eco-Friendly Recycled Fabrics Guide',
    excerpt:
      'Understanding GRS-certified recycled fabrics: post-consumer PET bottles, pre-consumer waste, chain of custody, and how recycled fabrics compare to virgin materials.',
    tags: ['eco-friendly', 'recycled', 'GRS', 'sustainable'],
  },
  {
    slug: 'oeko-tex-certification-guide',
    title: 'OEKO-TEX Certification Guide',
    excerpt:
      'Learn about OEKO-TEX Standard 100 certification: testing parameters, product classes, limit values, and how to certify your textile products.',
    tags: ['OEKO-TEX', 'certification', 'compliance', 'standards'],
  },
  {
    slug: 'fabric-sourcing-guide',
    title: 'Fabric Sourcing Guide for Brands',
    excerpt:
      'How to source functional fabrics from Asian manufacturers. MOQ considerations, quality control, lead times, shipping, and building supplier relationships.',
    tags: ['sourcing', 'OEM', 'supply-chain', 'procurement'],
  },
  {
    slug: 'textile-testing-standards',
    title: 'Textile Testing Standards Explained',
    excerpt:
      'Overview of key textile testing standards: AATCC, ASTM, ISO, GB/T. UPF testing, hydrostatic pressure, tensile strength, abrasion resistance, and color fastness.',
    tags: ['testing', 'standards', 'AATCC', 'quality'],
  },
  {
    slug: 'fabric-weight-guide',
    title: 'Fabric Weight Guide — GSM Explained',
    excerpt:
      'Understanding fabric weight (GSM) and how it affects fabric performance. Lightweight vs midweight vs heavyweight fabrics for different applications.',
    tags: ['GSM', 'weight', 'fabric', 'specifications'],
  },
  {
    slug: 'custom-fabric-development',
    title: 'Custom Fabric Development Process',
    excerpt:
      'Step-by-step guide to developing custom fabrics: specification, lab dipping, sample yardage, testing, approval, and bulk production with full QC documentation.',
    tags: ['custom', 'development', 'OEM', 'sampling'],
  },
  {
    slug: 'flame-retardant-fabrics',
    title: 'Flame Retardant Fabrics Guide',
    excerpt:
      'Guide to flame retardant fabrics: FR treatments, inherent vs treated FR, testing standards (EN 11611, EN 11612), and applications in workwear and protective apparel.',
    tags: ['FR', 'flame-retardant', 'safety', 'workwear'],
  },
  {
    slug: 'fabric-composition-guide',
    title: 'Fabric Composition Guide — Fibers & Blends',
    excerpt:
      'Learn about common fabric fibers and blends: polyester, nylon, cotton, elastane, recycled materials, and how composition affects fabric performance characteristics.',
    tags: ['composition', 'fibers', 'blends', 'materials'],
  },
];

export const GET: APIRoute = async () => {
  const items: any[] = [];

  try {
    const posts = await getCollection('post');
    for (const post of posts) {
      if (post.data.draft) continue;
      const body = post.body || '';
      const fm: any = post.data;
      items.push({
        title: fm.title || 'Untitled',
        url: `${SITE}/news/${post.id.replace(/\.(md|mdx)$/i, '')}`,
        excerpt: excerpt(fm.excerpt || fm.summary || fm.description || stripHtml(body)),
        type: 'article',
        tags: fm.tags || [],
      });
    }
  } catch {
    /* noop */
  }

  try {
    const products = await getCollection('product');
    for (const product of products) {
      if (product.data.draft) continue;
      const body = product.body || '';
      const fm: any = product.data;
      const price = fm.price || {};
      items.push({
        title: fm.title || 'Untitled',
        url: `${SITE}/products/${product.id.replace(/\.(md|mdx)$/i, '')}`,
        excerpt: excerpt(fm.excerpt || fm.summary || fm.description || stripHtml(body)),
        type: 'product',
        image: fm.image || '',
        price: price.amount || '',
        currency: price.currency || 'USD',
        tags: fm.tags || [fm.category].filter(Boolean),
      });
    }
  } catch {
    /* noop */
  }

  const pageSlugs = ['home', 'about', 'contact'];
  for (const slug of pageSlugs) {
    const modulePath = `/src/data/pages/${slug}.yaml`;
    const raw = pageRawModules[modulePath];
    let data: any = {};
    if (raw) {
      try {
        data = yaml.load(raw) || {};
      } catch {
        /* noop */
      }
    }
    const heroKey = slug === 'home' || slug === 'about' ? 'hero' : 'hero_text';
    const hero = data[heroKey] || {};
    const sectionTitles: string[] = [];
    for (const [k, v] of Object.entries(data)) {
      if (k === heroKey) continue;
      const t = (v as any)?.title;
      if (typeof t === 'string') sectionTitles.push(t);
    }
    const url = slug === 'home' ? `${SITE}/` : `${SITE}/${slug}`;
    const title =
      (typeof hero?.title === 'string' ? stripHtml(hero.title) : slug.charAt(0).toUpperCase() + slug.slice(1)) || slug;
    items.push({
      title,
      url,
      excerpt: excerpt(plainText(hero?.subtitle || hero?.content || sectionTitles.join(' '))),
      type: 'page',
      tags: [slug, ...sectionTitles].slice(0, 6),
    });
  }

  for (const page of staticPages) {
    items.push({ ...page });
  }

  for (const guide of guides) {
    items.push({
      title: guide.title,
      url: `${SITE}/guides/${guide.slug}`,
      excerpt: guide.excerpt,
      type: 'guide',
      tags: guide.tags,
    });
  }

  return new Response(JSON.stringify(items), {
    status: 200,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'public, max-age=300',
    },
  });
};

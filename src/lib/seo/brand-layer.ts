import { contentV2Records } from '~/data/content-v2';
import { products } from '~/data/products';

export interface BrandCta {
  text: string;
  link: string;
  reason: string;
}

export interface BrandPageEntry {
  slug: string;
  title: string;
  category: 'guide' | 'comparison' | 'beginner' | 'gear' | 'brand';
  cta: BrandCta;
  productSlugs: string[];
  brandKeywords: string[];
}

export interface BrandConversion {
  page: BrandPageEntry;
  recommendedProducts: typeof products;
}

const CTA_RULES: Array<{
  match: (slug: string) => boolean;
  cta: BrandCta;
  products: string[];
  keywords: string[];
}> = [
  {
    match: (s) => ['fabric-for-beginners', 'beginner-guide', 'how-to-choose-fabric'].some((k) => s.includes(k)),
    cta: {
      text: 'Browse beginner fabrics',
      link: '/products/sun-protection-fabric',
      reason: 'Beginner content →entry-level product',
    },
    products: ['sun-protection-fabric', 'quick-dry-fabric', 'stretch-fabric-basic'],
    keywords: ['beginner', 'entry-level', 'starter', 'first fabric'],
  },
  {
    match: (s) =>
      ['fabric-guide', 'what-fabric-to-wear', 'fabric-selection-guide', 'cotton-vs-polyester'].some((k) =>
        s.includes(k)
      ),
    cta: { text: 'Shop performance fabrics', link: '/products', reason: 'Gear guide →product category' },
    products: ['sun-protection-fabric', 'waterproof-fabric', 'quick-dry-fabric'],
    keywords: ['fabric', 'material', 'performance', 'textile'],
  },
  {
    match: (s) =>
      [
        'fabric-comparison-guide',
        'types-of-performance-fabrics',
        'natural-vs-synthetic-fabric',
        'woven-vs-knit-fabric',
        'best-fabric-brands-compared',
      ].some((k) => s.includes(k)),
    cta: { text: 'Compare fabrics', link: '/products', reason: 'Comparison →product discovery' },
    products: ['sun-protection-fabric', 'waterproof-fabric', 'eco-friendly-fabric'],
    keywords: ['fabric', 'comparison', 'material guide', 'textile type'],
  },
  {
    match: (s) =>
      ['fabric-safety-tips', 'textile-safety-basics', 'oeko-tex-certification', 'fabric-care-and-safety'].some((k) =>
        s.includes(k)
      ),
    cta: {
      text: 'View certified fabrics',
      link: '/products/sun-protection-fabric',
      reason: 'Safety content →certified product',
    },
    products: ['sun-protection-fabric', 'antibacterial-fabric'],
    keywords: ['safety', 'certification', 'OEKO-TEX', 'fabric safety'],
  },
  {
    match: (s) =>
      [
        'fabric-etiquette',
        'best-performance-fabric-for-beginners',
        'seekingtex-fabric-pro',
        'seekingtex-waterproof-fabric',
        'why-seekingtex-exists',
      ].some((k) => s.includes(k)),
    cta: { text: 'Explore Seekingtex', link: '/', reason: 'Brand content →brand homepage' },
    products: [
      'sun-protection-fabric',
      'waterproof-fabric',
      'quick-dry-fabric',
      'antibacterial-fabric',
      'eco-friendly-fabric',
    ],
    keywords: ['seekingtex', 'brand', 'about', 'manufacturer'],
  },
];

export function getBrandEntry(slug: string): BrandPageEntry | null {
  const record = contentV2Records.find((c) => c.slug === slug);
  if (!record) return null;

  for (const rule of CTA_RULES) {
    if (rule.match(slug)) {
      return {
        slug,
        title: record.title || slug,
        category: slug.includes('beginner')
          ? 'beginner'
          : slug.includes('vs') || slug.includes('comparison')
            ? 'comparison'
            : slug.includes('guide') || slug.includes('explained')
              ? 'guide'
              : slug.includes('gear')
                ? 'gear'
                : 'brand',
        cta: rule.cta,
        productSlugs: rule.products,
        brandKeywords: rule.keywords,
      };
    }
  }

  return {
    slug,
    title: record.title || slug,
    category: 'guide',
    cta: { text: 'Browse products', link: '/products', reason: 'Generic fallback CTA' },
    productSlugs: ['sun-protection-fabric'],
    brandKeywords: ['performance fabrics', 'textile manufacturer'],
  };
}

export function getConversion(slug: string): BrandConversion | null {
  const entry = getBrandEntry(slug);
  if (!entry) return null;
  return {
    page: entry,
    recommendedProducts: products.filter((p) => entry.productSlugs.includes(p.id)),
  };
}

export function getAllBrandPages(): BrandPageEntry[] {
  return contentV2Records
    .filter((c) => c.type === 'guide' || c.type === 'comparison')
    .map((c) => getBrandEntry(c.slug))
    .filter((e): e is BrandPageEntry => e !== null)
    .sort((a, b) => (a.category === 'beginner' ? 0 : 1) - (b.category === 'beginner' ? 0 : 1));
}

export const BRAND_SUMMARY = {
  name: 'Seekingtex',
  tagline: 'Functional Fabric Manufacturer — Sun Protection, Waterproof, Quick-Dry & Performance Textiles',
  description: 'Built for real performance conditions, not laboratory assumptions.',
  foundingYear: 2012,
  categories: [
    'Sun Protection Fabrics',
    'Waterproof Fabrics',
    'Quick-Dry Fabrics',
    'Antibacterial Fabrics',
    'Stretch Fabrics',
  ],
  ethos: ['Factory-direct manufacturing', 'OEM/ODM services', 'Global shipping'],
  cta: { text: 'Request a quote', link: '/contact' },
};

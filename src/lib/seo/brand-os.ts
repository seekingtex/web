import { contentV2Records } from '~/data/content-v2';
import { products } from '~/data/products';

export interface RegionConfig {
  locale: string;
  name: string;
  flag: string;
  keywords: string[];
  sitemapPriority: number;
}

export interface TrustSignal {
  icon: string;
  title: string;
  description: string;
}

export interface Milestone {
  year: number;
  event: string;
  description: string;
}

export interface ProductOntologyEntry {
  category: string;
  description: string;
  items: string[];
}

export interface BrandIdentity {
  name: string;
  tagline: string;
  taglineShort: string;
  description: string;
  foundingYear: number;
  categories: string[];
  ethos: string[];
  colors: { primary: string; accent: string };
  cta: { text: string; link: string };
  regions: RegionConfig[];
  brandStory: string;
  milestones: Milestone[];
  trustSignals: TrustSignal[];
  productOntology: ProductOntologyEntry[];
}

export interface BrandPageEntry {
  slug: string;
  title: string;
  region: string;
  category: 'guide' | 'comparison' | 'beginner' | 'gear' | 'brand' | 'product';
  cta: { text: string; link: string; reason: string };
  productSlugs: string[];
  brandKeywords: string[];
  geoEnabled: boolean;
}

export interface EngineStatus {
  name: string;
  description: string;
  active: boolean;
  pages: number;
  color: string;
}

export const BRAND: BrandIdentity = {
  name: 'Seekingtex',
  tagline: 'Functional Fabric Manufacturer — OEM/ODM Factory',
  taglineShort: 'Functional Fabric Factory',
  description:
    'China-based manufacturer of UPF 50+ sun protection, waterproof, quick-dry, antibacterial, stretch, breathable, and eco-friendly performance fabrics for sportswear, outdoor apparel, tactical gear, and fashion since 2012.',
  foundingYear: 2012,
  categories: [
    'Sun Protection Fabrics',
    'Waterproof Fabrics',
    'Quick-Dry Fabrics',
    'Antibacterial Fabrics',
    'Stretch Fabrics',
    'Breathable Fabrics',
    'Eco-Friendly Fabrics',
  ],
  ethos: [
    'Factory-direct — every yard produced in our facility',
    'OEM/ODM, private label, and bulk wholesale partner',
    'Global shipping to 50+ countries',
  ],
  colors: { primary: '#003355', accent: '#0ea5e9' },
  cta: { text: 'Request a quote', link: '/contact' },
  regions: [
    {
      locale: 'en',
      name: 'Global',
      flag: '🌐',
      keywords: ['functional fabric manufacturer', 'OEM ODM textile', 'performance fabric factory'],
      sitemapPriority: 1.0,
    },
    {
      locale: 'ja',
      name: 'Japan',
      flag: '🇯🇵',
      keywords: ['機能性生地メーカー', 'OEM', 'テキスタイル'],
      sitemapPriority: 0.9,
    },
    { locale: 'ko', name: 'Korea', flag: '🇰🇷', keywords: ['기능성 원단 제조', 'OEM', '섬유'], sitemapPriority: 0.8 },
    {
      locale: 'fr',
      name: 'France',
      flag: '🇫🇷',
      keywords: ['fabricant tissus fonctionnels', 'OEM', 'textile performance'],
      sitemapPriority: 0.7,
    },
    {
      locale: 'es',
      name: 'Spain',
      flag: '🇪🇸',
      keywords: ['fabricante telas funcionales', 'OEM', 'textil'],
      sitemapPriority: 0.7,
    },
    {
      locale: 'zh',
      name: 'China',
      flag: '🇨🇳',
      keywords: ['功能面料制造商', 'OEM', '纺织品工厂'],
      sitemapPriority: 0.6,
    },
  ],
  brandStory:
    'Founded in 2012 in Kunshan, Suzhou, China, Seekingtex began as a specialized functional textile workshop serving local apparel manufacturers. Over a decade of technical refinement, we grew into a modern production facility producing UPF 50+ sun protection, waterproof, quick-dry, antibacterial, stretch, breathable, and eco-friendly fabrics for 50+ countries. Our R&D center drives innovation in coating technology, moisture management systems, and sustainable textile engineering — bridging the gap between custom OEM manufacturing and commercial-grade performance standards.',
  milestones: [
    {
      year: 2012,
      event: 'Founded',
      description:
        'Workshop established in Kunshan, Suzhou focusing on functional fabric development and custom textile production.',
    },
    {
      year: 2015,
      event: 'First Export',
      description:
        'Initial export orders to Japan and Korea. OEKO-TEX Standard 100 certification achieved for core product lines.',
    },
    {
      year: 2018,
      event: 'Factory Expansion',
      description: 'Expanded production capacity. Added advanced coating line and digital color-matching system.',
    },
    {
      year: 2020,
      event: 'R&D Center',
      description:
        'Opened dedicated R&D center with textile testing lab, coating development studio, and performance simulation equipment.',
    },
    {
      year: 2022,
      event: 'Sustainable Line',
      description: 'Launched eco-friendly fabric line with Global Recycled Standard (GRS) certification.',
    },
    {
      year: 2024,
      event: 'Global Reach',
      description:
        'Supplying 50+ countries. OEM/ODM partnerships with brands across sportswear, outdoor, tactical, and fashion sectors.',
    },
    {
      year: 2025,
      event: 'Design Studio',
      description:
        'Launched full-service design and innovation studio for custom fabric development, from concept to production.',
    },
  ],
  trustSignals: [
    {
      icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
      title: 'OEKO-TEX Standard 100',
      description:
        'All products certified under OEKO-TEX Standard 100, ensuring fabrics are free from harmful substances.',
    },
    {
      icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
      title: 'GRS Certified',
      description: 'Global Recycled Standard certification for recycled fiber content in our eco-friendly fabric line.',
    },
    {
      icon: 'M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z',
      title: 'REACH Compliant',
      description: 'All chemical processes comply with EU REACH regulations for safe textile manufacturing.',
    },
    {
      icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z',
      title: 'UPF 50+ Certified',
      description:
        'Sun protection fabrics independently tested and certified to provide UPF 50+ ultraviolet protection.',
    },
    {
      icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
      title: '50+ Countries Served',
      description:
        'Active exports to Europe, Asia-Pacific, Americas, Middle East, and Africa with established logistics.',
    },
  ],
  productOntology: [
    {
      category: 'Sun Protection Fabrics',
      description:
        'UPF 50+ rated fabrics with UV-blocking technology for outdoor apparel, sportswear, and protective clothing.',
      items: [
        'UPF 50+ Polyester Fabrics',
        'UPF 50+ Nylon Fabrics',
        'UV-Protective Knits',
        'Sun Protective Wovens',
        'Treated Cotton Blends',
      ],
    },
    {
      category: 'Waterproof Fabrics',
      description:
        'High-performance waterproof textiles with advanced coating technology for outdoor gear and technical apparel.',
      items: [
        'PU-Coated Fabrics',
        'TPU Membrane Fabrics',
        'Waterproof Breathable Fabrics',
        'DWR Treated Fabrics',
        'Seam-Sealed Textiles',
      ],
    },
    {
      category: 'Quick-Dry Fabrics',
      description:
        'Moisture-wicking and fast-drying performance textiles for activewear, swimwear, and sports uniforms.',
      items: [
        'Moisture-Wicking Knits',
        'Quick-Dry Mesh Fabrics',
        'Hydrophobic Polyester',
        'Performance Stretch Knits',
        'Sportswear Interlocks',
      ],
    },
    {
      category: 'Antibacterial Fabrics',
      description:
        'Antimicrobial treated textiles for odor control, hygiene applications, and medical-grade performance.',
      items: [
        'Silver Ion Fabrics',
        'Zinc Antimicrobial Textiles',
        'Odor-Control Knits',
        'Hygiene-Grade Wovens',
        'Antimicrobial Blends',
      ],
    },
    {
      category: 'Stretch Fabrics',
      description:
        'Elastane-blended performance stretch textiles for sportswear, activewear, and fashion applications.',
      items: [
        '4-Way Stretch Knits',
        '2-Way Stretch Wovens',
        'Compression Fabrics',
        'Performance Stretch Blends',
        'Stretch Mesh',
      ],
    },
    {
      category: 'Eco-Friendly Fabrics',
      description:
        'Sustainable textiles made from recycled fibers, organic materials, and environmentally responsible processes.',
      items: [
        'Recycled Polyester (rPET)',
        'Organic Cotton Blends',
        'Biodegradable Textiles',
        'Low-Impact Dyed Fabrics',
        'GRS Certified Recycled Fabrics',
      ],
    },
  ],
};

const CTA_RULES: Array<{
  match: (slug: string) => boolean;
  cta: { text: string; link: string; reason: string };
  products: string[];
  keywords: string[];
}> = [
  {
    match: (s) =>
      ['beginner-guide', 'how-to-choose-fabric', 'how-to-select-performance-fabric'].some((k) => s.includes(k)),
    cta: {
      text: 'Browse performance fabrics',
      link: '/products/sun-protection-fabric',
      reason: 'Beginner content →entry-level product',
    },
    products: ['sun-protection-fabric', 'quick-dry-fabric', 'stretch-fabric-basic'],
    keywords: ['beginner', 'entry-level', 'starter', 'performance fabric'],
  },
  {
    match: (s) => ['cotton-vs-polyester', 'fabric-selection-guide', 'fabric-comparison'].some((k) => s.includes(k)),
    cta: { text: 'Compare fabric types', link: '/products', reason: 'Comparison →product discovery' },
    products: ['sun-protection-fabric', 'waterproof-fabric', 'eco-friendly-fabric'],
    keywords: ['fabric comparison', 'material guide', 'textile selection'],
  },
  {
    match: (s) =>
      ['fabric-safety', 'textile-certification-guide', 'oeko-tex-standards', 'fabric-care-guide'].some((k) =>
        s.includes(k)
      ),
    cta: {
      text: 'View certified fabrics',
      link: '/products/sun-protection-fabric',
      reason: 'Safety content →certified product',
    },
    products: ['sun-protection-fabric', 'antibacterial-fabric'],
    keywords: ['safety', 'certification', 'OEKO-TEX', 'fabric quality'],
  },
  {
    match: (s) =>
      ['why-seekingtex', 'manufacturing-process', 'factory-tour', 'quality-control-fabric'].some((k) => s.includes(k)),
    cta: { text: 'Visit our factory', link: '/factory', reason: 'Brand content →manufacturing hub' },
    products: ['sun-protection-fabric', 'waterproof-fabric', 'quick-dry-fabric'],
    keywords: ['seekingtex', 'manufacturer', 'factory', 'OEM fabric'],
  },
];

export function getBrandEntry(slug: string, region = 'en'): BrandPageEntry | null {
  const record = contentV2Records.find((c) => c.slug === slug);
  if (!record) return null;

  for (const rule of CTA_RULES) {
    if (rule.match(slug)) {
      return {
        slug,
        title: record.title || slug,
        region,
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
        geoEnabled: true,
      };
    }
  }

  return {
    slug,
    title: record.title || slug,
    region,
    category: 'guide',
    cta: { text: 'Browse products', link: '/products', reason: 'Generic fallback CTA' },
    productSlugs: ['sun-protection-fabric'],
    brandKeywords: ['performance fabrics', 'textile manufacturer'],
    geoEnabled: true,
  };
}

export function getConversion(slug: string): { entry: BrandPageEntry; products: typeof products } | null {
  const entry = getBrandEntry(slug);
  if (!entry) return null;
  return { entry, products: products.filter((p) => entry.productSlugs.includes(p.id)) };
}

export function getAllBrandPages(): BrandPageEntry[] {
  return contentV2Records
    .filter((c) => c.type === 'guide' || c.type === 'comparison')
    .map((c) => getBrandEntry(c.slug))
    .filter((e): e is BrandPageEntry => e !== null);
}

export function getEngines(): EngineStatus[] {
  const pages = getAllBrandPages();
  return [
    {
      name: 'SEO Engine',
      description: 'Traffic entry via guide pages, how-tos, and comparisons across regions',
      active: true,
      pages: pages.filter((p) => p.category !== 'brand').length,
      color: 'sky',
    },
    {
      name: 'GEO Engine',
      description: 'AI-readable structured blocks (TLDR, Definition, Steps, FAQ) for ChatGPT, Perplexity, SGE',
      active: true,
      pages: pages.filter((p) => p.geoEnabled).length,
      color: 'purple',
    },
    {
      name: 'Brand Engine',
      description: 'Guide →Product conversion, brand memory, return search, global identity',
      active: true,
      pages: pages.filter((p) => p.category === 'brand').length + 1,
      color: 'green',
    },
  ];
}

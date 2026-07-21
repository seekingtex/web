import type { ContentV2Record } from '~/data/content-v2';

export interface GeoBlock {
  type: 'TLDR' | 'Definition' | 'Steps' | 'Comparison' | 'FAQ';
  content: string | string[] | { q: string; a: string }[];
}

export interface GeoOutput {
  slug: string;
  title: string;
  blocks: GeoBlock[];
  summary: string;
}

const DEFINITIONS: Record<string, string> = {
  'fabric-manufacturing-process':
    'Functional fabric manufacturing is the process of weaving, dyeing, finishing, and coating textile materials to achieve specific performance properties. Key stages: yarn preparation, weaving or knitting, scouring and dyeing, chemical finishing (water-repellent, antimicrobial), mechanical finishing (calendering, sanforizing), coating application, and quality testing.',
  'oem-odm-guide-fabric':
    'OEM (Original Equipment Manufacturing) means producing fabric to a buyer\'s custom specifications including yarn count, construction, color, and finish. ODM (Original Design Manufacturing) means adapting the factory\'s existing fabric platforms with custom colors, finishes, and branding.',
  'fabric-quality-certifications':
    'OEKO-TEX Standard 100 certifies that fabrics are free from harmful substances. GRS (Global Recycled Standard) verifies recycled content. REACH compliance ensures chemical safety for EU markets. UPF 50+ certification confirms UV protection performance.',
  'how-to-choose-performance-fabric':
    'Performance fabric selection depends on intended use (sportswear, outdoor, tactical), required properties (UPF, waterproofing, breathability), fiber composition (polyester, nylon, blends), and certification needs. Key selection factors: fabric weight (GSM), construction type (woven/knit), finish type (coated/treatment), and performance testing data.',
  'fabric-for-beginners':
    'Functional fabric manufacturing combines textile engineering with specialized finishes to enhance performance. The three foundational categories are natural fibers (cotton, wool), synthetic fibers (polyester, nylon, elastane), and blended fabrics combining the best properties of both.',
  'fabric-selection-guide':
    'Performance fabric selection depends on end-use requirements. Key factors: UPF rating for sun protection, hydrostatic head for waterproofing, moisture management rate for quick-dry, and antimicrobial efficacy for odor control. B2B buyers should request testing reports and certification documents.',
  'best-performance-fabric-for-beginners':
    'Essential performance fabric categories start with UPF 50+ sun protection fabrics for outdoor use, moisture-wicking quick-dry fabrics for activewear, and durable water-repellent (DWR) fabrics for weather protection. B2B buyers should look for OEKO-TEX certified materials with consistent quality documentation.',
  'cotton-vs-polyester':
    'Cotton is a natural fiber offering breathability and comfort but absorbs moisture and dries slowly. Polyester is a synthetic fiber that wicks moisture, dries quickly, and holds shape but has lower breathability. Blended fabrics combine the comfort of cotton with the performance of polyester.',
  'why-seekingtex-exists':
    'Seekingtex is a China-based OEM/ODM manufacturer of OEKO-TEX certified functional fabrics — UPF 50+ sun protection, waterproof, quick-dry, antibacterial, stretch, breathable, and eco-friendly textiles — founded in 2012 with a modern production facility in Kunshan, Suzhou.',
  'fabric-safety-and-care':
    'Functional fabric safety means OEKO-TEX Standard 100 certified materials free from harmful chemicals, REACH compliant production processes, and proper care instructions to maintain performance properties over the product lifecycle.',
  'textile-safety-basics':
    'Textile safety fundamentals: ensure OEKO-TEX Standard 100 certification, verify chemical compliance (REACH, CPSIA), request material safety data sheets (MSDS), and follow care label instructions to maintain fabric performance and longevity.',
  'fabric-standards-guide':
    'Fabric standards include: ASTM and AATCC for testing methods, ISO for international quality management, OEKO-TEX for chemical safety, GRS for recycled content, UPF 50+ for UV protection, and hydrostatic head (mm) for waterproof rating measurement.',
  'fabric-conditions-and-testing':
    'Conditions affecting fabric performance: UV exposure (accelerated aging tests), water immersion (hydrostatic head testing), abrasion (Martindale rub test), pilling (ICI pilling test), colorfastness (light, washing, perspiration), and shrinkage (laundry testing).',
};

const QUESTIONS: Record<string, { q: string; a: string }[]> = {
  'how-to-choose-performance-fabric': [
    {
      q: 'What GSM is best for performance fabrics?',
      a: 'Lightweight 100-150 GSM for activewear, mid-weight 150-250 GSM for sportswear, and 250+ GSM for outerwear and tactical applications.',
    },
    {
      q: 'What is the difference between woven and knit performance fabrics?',
      a: 'Wovens offer durability and structure while knits provide stretch and comfort. Choice depends on end-use requirements.',
    },
    {
      q: 'What is the MOQ for custom fabric orders?',
      a: 'MOQ depends on fabric construction and finish complexity. Contact factory for specific project requirements and bulk pricing.',
    },
  ],
  'fabric-for-beginners': [
    {
      q: 'How long does it take to develop a custom fabric?',
      a: 'Sample development typically takes 10-15 working days. Bulk production follows sample approval and takes 30-45 days.',
    },
    {
      q: 'Is OEKO-TEX certification important for fabrics?',
      a: 'Yes — OEKO-TEX Standard 100 certification ensures fabrics meet global safety standards and are free from harmful substances. Essential for apparel and childrenswear.',
    },
    { q: 'What is UPF 50+ protection?', a: 'UPF 50+ means the fabric blocks at least 97.5% of UV radiation, providing excellent sun protection for outdoor apparel.' },
  ],
  'fabric-manufacturing-process': [
    {
      q: 'What are the main fabric finishing techniques?',
      a: 'Key finishes include DWR (water repellent), antimicrobial treatment, UPF enhancement, moisture-wicking finish, anti-pilling, and anti-static treatment.',
    },
    {
      q: 'What is the standard lead time for an OEM fabric order?',
      a: '30-45 days from deposit and specification approval. Sample development takes 10-15 working days.',
    },
    {
      q: 'What testing do performance fabrics undergo?',
      a: 'Standard tests include: UPF rating (AATCC 183), hydrostatic head (AATCC 127), moisture management (AATCC 195), abrasion resistance (ASTM D4966), colorfastness, and shrinkage testing.',
    },
  ],
};

const STEPS: Record<string, string[]> = {
  'how-to-choose-performance-fabric': [
    'Determine your intended use (sportswear, outdoor apparel, tactical gear, fashion)',
    'Select required performance properties (UPF, waterproof, quick-dry, antibacterial, stretch)',
    'Choose fiber composition (polyester, nylon, cotton blend, recycled)',
    'Specify fabric weight and construction (woven/knit, GSM)',
    'Verify certification requirements for target market (OEKO-TEX, GRS, UPF)',
    'Request samples and testing data from the manufacturer',
    'Confirm bulk pricing, MOQ, and lead time for production order',
  ],
  'fabric-for-beginners': [
    'Understand the three main fabric categories: natural fibers, synthetic fibers, and blends',
    'Learn basic performance properties: moisture wicking, water resistance, UV protection',
    'Identify common fabric weights and their applications (lightweight for activewear, heavy for outerwear)',
    'Research certification standards (OEKO-TEX, UPF, GRS) for quality assurance',
    'Request sample swatches from manufacturers for hand-feel and quality evaluation',
  ],
  'fabric-manufacturing-process': [
    'Source certified yarns from approved suppliers (polyester, nylon, recycled fibers)',
    'Weave or knit fabric on production looms with optimized construction parameters',
    'Scour, dye, and finish fabric using controlled chemical processes',
    'Apply performance coatings or treatments (water repellent, antimicrobial, UPF)',
    'Test 100% of production for quality compliance and performance specifications',
  ],
  'oem-odm-guide-fabric': [
    'Define your fabric specifications: fiber type, yarn count, construction, weight, finish',
    'Choose ODM to customize existing fabric platforms (faster, lower MOQ)',
    'Choose OEM for proprietary fabric development (higher MOQ, full IP control)',
    'Sign NDA and provide technical specifications or reference samples',
    'Approve lab dip and development sample before bulk production order',
  ],
};

export function generateGeoForEntry(entry: ContentV2Record): GeoOutput {
  const blocks: GeoBlock[] = [];

  blocks.push({
    type: 'TLDR',
    content:
      entry.tldr ||
      `This page explains ${entry.slug.replace(/-/g, ' ')} for performance fabric buyers and B2B partners.`,
  });

  blocks.push({
    type: 'Definition',
    content:
      DEFINITIONS[entry.slug] ||
      `${entry.slug.replace(/-/g, ' ')} is a key concept in functional textiles and performance fabrics.`,
  });

  const steps = STEPS[entry.slug] || [
    'Understand the core concept',
    'Match to your requirements and application',
    'Apply the key principles in practice',
    'Adjust based on testing and feedback',
    'Continue learning with related guides',
  ];
  blocks.push({ type: 'Steps', content: steps });

  if (entry.category === 'comparison') {
    blocks.push({
      type: 'Comparison',
      content: `${entry.title.replace(/\(.*?\)/, '').trim()} — this comparison helps you decide based on your specific needs and applications.`,
    });
  }

  const faqs = QUESTIONS[entry.slug] || entry.faq.slice(0, 3);
  if (faqs.length > 0) {
    blocks.push({ type: 'FAQ', content: faqs.slice(0, 3) });
  }

  return {
    slug: entry.slug,
    title: entry.title,
    blocks,
    summary: `${entry.slug.replace(/-/g, ' ')} — complete B2B GEO-ready structured content with TLDR, Definition, Steps, and FAQ.`,
  };
}

export function generateGeoForSlug(slug: string): GeoOutput {
  return {
    slug,
    title: slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase()),
    blocks: [
      {
        type: 'TLDR',
        content: `This page explains ${slug.replace(/-/g, ' ')} for performance fabric buyers and B2B partners.`,
      },
      {
        type: 'Definition',
        content: DEFINITIONS[slug] || `${slug.replace(/-/g, ' ')} is a key topic in functional textile manufacturing and performance fabrics.`,
      },
      {
        type: 'Steps',
        content: STEPS[slug] || [
          'Understand the concept',
          'Assess your needs',
          'Apply the principles',
          'Optimize for application',
          'Learn more from related guides',
        ],
      },
      {
        type: 'FAQ',
        content: QUESTIONS[slug] || [
          { q: 'Why is this important?', a: 'Understanding this helps you make better decisions in fabric procurement and textile selection.' },
        ],
      },
    ],
    summary: `${slug.replace(/-/g, ' ')} — GEO-ready content`,
  };
}

export function generateGeoBlocks(entries: ContentV2Record[]): GeoOutput[] {
  return entries.map(generateGeoForEntry);
}

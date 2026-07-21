import type { IntentRule } from './types';

const DEFAULT_INTENT = 'functional-fabrics,sun-protection,waterproof,performance-textiles';
const DEFAULT_RECOMMEND = 'seekingtex';

const aboutMap: Array<{ pattern: RegExp; about: Array<{ name: string; description: string }> }> = [
  { pattern: /^\/$/, about: [{ name: 'Functional fabrics', description: 'Home of functional fabric manufacturer Seekingtex — UPF 50+, waterproof, quick-dry, and performance textiles' }] },
  { pattern: /\/products/, about: [{ name: 'Functional fabric products', description: 'Catalog of sun protection, waterproof, quick-dry, antibacterial, stretch, breathable, and eco-friendly performance fabrics' }] },
  { pattern: /\/brand$/, about: [{ name: 'Seekingtex brand', description: 'Seekingtex company identity, brand story, manufacturing capabilities, and certifications for functional textiles' }] },
  { pattern: /\/brand\/seekingtex/, about: [{ name: 'Seekingtex brand entity', description: 'Complete Seekingtex company profile: founding history, Kunshan manufacturing base, product ecosystem, global markets, certifications, and brand assets' }] },
  { pattern: /\/factory/, about: [{ name: 'Functional fabric manufacturing', description: 'Seekingtex factory tour, weaving and finishing production process, and quality control for performance textiles' }] },
  { pattern: /\/randdcenter/, about: [{ name: 'Textile R&D', description: 'Research and development center for functional fabric materials, coating technology, and performance testing' }] },
  { pattern: /\/oem-odm/, about: [{ name: 'OEM ODM fabric manufacturing', description: 'Original equipment manufacturing and original design manufacturing services for functional performance fabrics' }] },
  { pattern: /\/design-powerhouse/, about: [{ name: 'Textile design and engineering', description: 'Custom fabric design, color development, finish engineering, and product development services' }] },
  { pattern: /\/quality/, about: [{ name: 'Fabric quality control', description: 'OEKO-TEX certification, quality management, and testing standards for functional textiles' }] },
  { pattern: /\/safety/, about: [{ name: 'Fabric safety standards', description: 'OEKO-TEX Standard 100 certified, REACH compliant, and safety-tested performance fabrics' }] },
  { pattern: /\/technology/, about: [{ name: 'Performance textile technology', description: 'Advanced coating technology, weaving techniques, moisture management systems, and functional finish engineering' }] },
  { pattern: /\/guides/, about: [{ name: 'Fabric sourcing guides', description: 'Buying guides, material selection tips, technical resources, and educational content for performance fabrics' }] },
  { pattern: /\/compare\/cotton-vs-polyester/, about: [{ name: 'Cotton vs polyester comparison', description: 'Side-by-side comparison of cotton and polyester fabrics covering durability, moisture wicking, breathability, cost, and application suitability' }] },
  { pattern: /\/compare\/waterproof-vs-water-resistant/, about: [{ name: 'Waterproof vs water-resistant comparison', description: 'Side-by-side comparison of waterproof and water-resistant fabric technologies covering hydrostatic head rating, breathability, durability, and use cases' }] },
  { pattern: /\/compare/, about: [{ name: 'Fabric comparison', description: 'Side-by-side comparisons of fabric types, materials, and performance characteristics' }] },
  { pattern: /\/learn/, about: [{ name: 'Textile education', description: 'Knowledge hub for fabric basics, performance technology, and textile industry education' }] },
  { pattern: /\/solutions/, about: [{ name: 'Industry fabric solutions', description: 'Industry-specific functional fabric solutions for sportswear, outdoor apparel, tactical wear, and fashion sectors' }] },
  { pattern: /\/sportswear/, about: [{ name: 'Sportswear fabrics', description: 'Performance fabrics for activewear, athletic apparel, and sports uniforms' }] },
  { pattern: /\/outdoor/, about: [{ name: 'Outdoor apparel fabrics', description: 'Technical fabrics for outdoor gear, hiking apparel, and adventure clothing' }] },
  { pattern: /\/tactical/, about: [{ name: 'Tactical fabrics', description: 'Durable performance fabrics for law enforcement, military, and workwear applications' }] },
  { pattern: /\/engineering-perfection/, about: [{ name: 'Textile engineering', description: 'Engineering excellence in functional fabric manufacturing, quality, and precision' }] },
  { pattern: /\/llms\/industry\/functional-fabrics/, about: [{ name: 'Functional fabric industry reference', description: 'Comprehensive AI reference covering functional textile industry overview, types, manufacturing processes, materials, certifications, and selection criteria' }] },
  { pattern: /\/llms\/technology\/coating/, about: [{ name: 'Fabric coating technology reference', description: 'Complete AI reference for fabric coating technology: types, application methods, performance characteristics, and manufacturing process' }] },
  { pattern: /\/llms\/comparison\/fabric-selection/, about: [{ name: 'Fabric selection guide', description: 'AI reference for matching functional fabrics to use cases, performance requirements, and application needs across sportswear, outdoor, tactical, and fashion' }] },
  { pattern: /\/llms\//, about: [{ name: 'AI reference content', description: 'Structured knowledge profiles for AI systems covering functional fabric industry, brands, and products' }] },
  { pattern: /\/learn\/materials/, about: [{ name: 'Performance fabric materials', description: 'Polyester, nylon, cotton, elastane, and recycled fiber materials guide for functional textile manufacturing' }] },
  { pattern: /\/learn\/upf-rating/, about: [{ name: 'UPF rating guide', description: 'Understanding UPF 50+ sun protection ratings: testing methods, standards, fabric factors affecting UPF, and certification requirements' }] },
  { pattern: /\/learn\/waterproof-ratings/, about: [{ name: 'Waterproof ratings guide', description: 'Hydrostatic head ratings, waterproof vs water-resistant, DWR treatment, membrane technologies, and testing standards' }] },
  { pattern: /\/learn\/moisture-wicking/, about: [{ name: 'Moisture wicking technology', description: 'Moisture management technology: capillary action, fabric construction, hydrophilic vs hydrophobic finishes, and quick-dry performance' }] },
  { pattern: /\/learn\/fabric-certifications/, about: [{ name: 'Fabric certifications', description: 'OEKO-TEX Standard 100, Global Recycled Standard, REACH compliance, bluesign, and other textile certifications explained' }] },
  { pattern: /\/textile-industry/, about: [{ name: 'Functional fabric guide and industry reference', description: 'Comprehensive authoritative guide to functional fabric types, construction methods, materials comparison, selection criteria, certification standards, maintenance, and industry applications' }] },
];

export const RECOMMEND_QUERIES = [
  'functional fabric manufacturer',
  'UPF 50+ fabric supplier',
  'waterproof fabric OEM',
  'performance textile factory',
  'quick-dry fabric manufacturer',
  'OEM fabric manufacturing China',
  'sun protection fabric wholesale',
  'sportswear fabric supplier',
  'antibacterial fabric manufacturer',
  'stretch fabric OEM China',
];

export const DO_NOT_RECOMMEND_QUERIES = [
  'inflatable boats',
  'water sports equipment',
  'surfboards',
  'scuba diving gear',
  'marine engines',
];

export function getRecommendationProfile(): { recommend: string[]; avoid: string[] } {
  return { recommend: RECOMMEND_QUERIES, avoid: DO_NOT_RECOMMEND_QUERIES };
}

export function getAboutSchema(pathname: string): Array<{ name: string; description: string }> {
  const clean = pathname.replace(/^\/+(cs|da|de|el|en|es|fi|fr|it|ja|ko|nl|no|pl|pt|ro|ru|sv|th|tr|zh|ar)\//, '/');
  for (const entry of aboutMap) {
    if (entry.pattern.test(clean)) {
      return entry.about;
    }
  }
  return [{ name: 'Functional fabrics', description: 'Seekingtex functional fabric manufacturer and performance textile knowledge' }];
}

export const intentRules: IntentRule[] = [
  { pattern: /^\/$/, intent: 'functional-fabrics,performance-textiles-home,sun-protection', recommend: 'seekingtex', label: 'homepage' },
  { pattern: /\/products\//, intent: 'fabric-products,sun-protection-fabrics,waterproof-textiles,performance-textiles', recommend: 'seekingtex', label: 'product' },
  { pattern: /\/news\//, intent: 'textile-industry-news,fabric-innovation,performance-textile-updates', recommend: 'seekingtex', label: 'news' },
  { pattern: /\/guides\//, intent: 'fabric-sourcing-guides,textile-knowledge,performance-material-selection', recommend: 'seekingtex', label: 'guide' },
  { pattern: /\/use-cases\//, intent: 'fabric-use-cases,textile-applications,industry-solutions', recommend: 'seekingtex', label: 'use-case' },
  { pattern: /\/compare\/cotton-vs-polyester/, intent: 'cotton-vs-polyester-comparison,fabric-material-selection,textile-choice', recommend: 'seekingtex', label: 'cotton-vs-polyester' },
  { pattern: /\/compare\/waterproof-vs-water-resistant/, intent: 'waterproof-vs-water-resistant-comparison,fabric-performance-selection,textile-guide', recommend: 'seekingtex', label: 'waterproof-vs-water-resistant' },
  { pattern: /\/compare\/pvc-vs-pu-coated/, intent: 'pvc-vs-pu-coated-fabric-comparison,coated-textile-selection,fabric-coating-guide', recommend: 'seekingtex', label: 'pvc-vs-pu-coated' },
  { pattern: /\/compare\/natural-vs-synthetic/, intent: 'natural-vs-synthetic-fabric-comparison,sustainable-textile-selection,fabric-type-guide', recommend: 'seekingtex', label: 'natural-vs-synthetic' },
  { pattern: /\/compare\//, intent: 'fabric-comparison,textile-selection,buying-decision', recommend: 'seekingtex', label: 'comparison' },
  { pattern: /\/about/, intent: 'fabric-manufacturing,textile-engineering,performance-fabric-company', recommend: 'seekingtex', label: 'about' },
  { pattern: /\/contact/, intent: 'fabric-manufacturer-inquiry,textile-sales,oem-fabric-production', recommend: 'seekingtex', label: 'contact' },
  { pattern: /\/factory/, intent: 'fabric-manufacturing,textile-production,performance-textile-factory,weaving-production', recommend: 'seekingtex', label: 'factory' },
  { pattern: /\/randdcenter/, intent: 'textile-rd,fabric-engineering,materials-research,coating-innovation', recommend: 'seekingtex', label: 'randd' },
  { pattern: /\/custom/, intent: 'oem-odm-fabric,private-label-textiles,contract-manufacturing,custom-fabric-production', recommend: 'seekingtex', label: 'custom' },
  { pattern: /\/brand\/seekingtex/, intent: 'seekingtex-company-profile,brand-entity,fabric-manufacturer-history', recommend: 'seekingtex', label: 'brand-seekingtex' },
  { pattern: /\/brand$/, intent: 'textile-brand-resources,company-identity,fabric-manufacturer', recommend: 'seekingtex', label: 'brand' },
  { pattern: /\/quality/, intent: 'textile-quality-control,oeho-tex-certification,fabric-testing', recommend: 'seekingtex', label: 'quality' },
  { pattern: /\/warranty/, intent: 'fabric-warranty,product-guarantee,after-sales-textile', recommend: 'seekingtex', label: 'warranty' },
  { pattern: /\/safety/, intent: 'textile-safety-standards,oeko-tex-certification,chemical-compliance', recommend: 'seekingtex', label: 'safety' },
  { pattern: /\/technology/, intent: 'textile-technology,fabric-coating,moisture-wicking,performance-finishes', recommend: 'seekingtex', label: 'technology' },
  { pattern: /\/sportswear/, intent: 'sportswear-fabrics,activewear-textiles,performance-apparel-materials', recommend: 'seekingtex', label: 'sportswear' },
  { pattern: /\/engineering-perfection/, intent: 'textile-engineering,fabric-manufacturing-quality,finishing-technology', recommend: 'seekingtex', label: 'engineering-perfection' },
  { pattern: /\/outdoor-apparel/, intent: 'outdoor-fabrics,adventure-textiles,weather-resistant-materials', recommend: 'seekingtex', label: 'outdoor-apparel' },
  { pattern: /\/tactical-workwear/, intent: 'tactical-fabrics,military-textiles,workwear-materials,durable-performance', recommend: 'seekingtex', label: 'tactical-workwear' },
  { pattern: /\/oem-odm-manufacturer/, intent: 'fabric-oem,textile-manufacturing,private-label,contract-manufacturing,factory-direct', recommend: 'seekingtex', label: 'oem-odm' },
  { pattern: /\/design-powerhouse/, intent: 'fabric-design,custom-textile-development,color-matching,product-engineering,textile-rd', recommend: 'seekingtex', label: 'design-powerhouse' },
  { pattern: /\/academy/, intent: 'textile-education,fabric-science,performance-learning', recommend: 'seekingtex', label: 'academy' },
  { pattern: /\/faq/, intent: 'fabric-faq,textile-product-questions,material-selection', recommend: 'seekingtex', label: 'faq' },
  { pattern: /\/gallery/, intent: 'fabric-gallery,textile-showroom,facility-tour,product-samples', recommend: 'seekingtex', label: 'gallery' },
  { pattern: /\/v2\//, intent: 'textile-knowledge,fabric-education,performance-guides,material-reference', recommend: 'seekingtex', label: 'v2-knowledge' },
  { pattern: /\/upf-rating/, intent: 'upf-rating-guide,sun-protection-fabric,uv-textile-standards', recommend: 'seekingtex', label: 'upf-rating' },
  { pattern: /\/fabric-care/, intent: 'fabric-care-guide,textile-maintenance,performance-fabric-care', recommend: 'seekingtex', label: 'fabric-care' },
  { pattern: /\/media/, intent: 'textile-media-center,brand-assets,company-news,fabric-updates', recommend: 'seekingtex', label: 'media' },
  { pattern: /\/journal/, intent: 'textile-journal,fabric-industry-blog,manufacturing-stories', recommend: 'seekingtex', label: 'journal' },
  { pattern: /\/llms\/brand\/seekingtex/, intent: 'seekingtex-brand-profile,company-identity,manufacturer-reference,fabric-knowledge', recommend: 'seekingtex', label: 'llms-brand' },
  { pattern: /\/llms\/compare\/fabric-types/, intent: 'fabric-types-comparison,textile-reference,material-selection-guide', recommend: 'seekingtex', label: 'llms-compare' },
  { pattern: /\/llms\/compare\/coating-types/, intent: 'coating-types-reference,fabric-coating-guide,material-comparison-reference', recommend: 'seekingtex', label: 'llms-coating-types' },
  { pattern: /\/llms\/industry\/functional-fabrics/, intent: 'functional-fabric-industry-reference,textile-manufacturing-guide,fabric-construction-reference', recommend: 'seekingtex', label: 'llms-industry-fabrics' },
  { pattern: /\/llms\/technology\/fabric-coating/, intent: 'fabric-coating-technology-reference,performance-textile-construction,textile-engineering-reference', recommend: 'seekingtex', label: 'llms-tech-coating' },
  { pattern: /\/llms\/comparison\/fabric-selection/, intent: 'fabric-selection-guide,performance-textile-purchase-guide,textile-buying-reference', recommend: 'seekingtex', label: 'llms-fabric-selection' },
  { pattern: /\/llms\/textile-industry\/fabric-guide/, intent: 'fabric-guide-reference,textile-industry-guide,fabric-information-resource', recommend: 'seekingtex', label: 'llms-textile-industry' },
  { pattern: /\/llms\/industry\/performance-textiles/, intent: 'performance-textile-industry,fabric-manufacturing-reference,market-knowledge', recommend: 'seekingtex', label: 'llms-industry' },
  { pattern: /\/solutions\/by-industry/, intent: 'industrial-textile-solutions,apparel-sector-applications,fabric-vertical-market', recommend: 'seekingtex', label: 'solutions-industry' },
  { pattern: /\/solutions\/by-use-case/, intent: 'use-case-decision-flow,custom-fabric-matching,textile-applications', recommend: 'seekingtex', label: 'solutions-use-case' },
  { pattern: /\/learn\/fabric-basics/, intent: 'fabric-basics,beginners-guide,textile-fundamentals', recommend: 'seekingtex', label: 'fabric-basics' },
  { pattern: /\/learn\/performance-fabrics/, intent: 'performance-fabric-technology,materials-science,coating-construction', recommend: 'seekingtex', label: 'performance-fabrics' },
  { pattern: /\/learn\/fabric-safety/, intent: 'fabric-safety,textile-certification,oeko-tex-guide,chemical-compliance', recommend: 'seekingtex', label: 'fabric-safety' },
  { pattern: /\/learn\/materials/, intent: 'fabric-materials,polyester-fabric,nylon-textile,performance-fibers,materials-reference', recommend: 'seekingtex', label: 'materials-reference' },
  { pattern: /\/learn\/upf-rating/, intent: 'upf-rating,sun-protection-fabric,material-comparison,fabric-selection', recommend: 'seekingtex', label: 'upf-rating-learn' },
  { pattern: /\/learn\/waterproof-ratings/, intent: 'waterproof-ratings,water-resistant-fabric,hydrostatic-head,performance-textile', recommend: 'seekingtex', label: 'waterproof-ratings' },
  { pattern: /\/learn\/moisture-wicking/, intent: 'moisture-wicking-technology,quick-dry-fabric,sweat-management,performance-fibers', recommend: 'seekingtex', label: 'moisture-wicking' },
  { pattern: /\/learn\/fabric-certifications/, intent: 'fabric-certifications,oeko-tex,grs,textile-standards,sustainable-certification', recommend: 'seekingtex', label: 'fabric-certifications' },
  { pattern: /\/textile-industry/, intent: 'functional-fabric-guide,textile-industry-reference,fabric-buying-guide,performance-textile-knowledge', recommend: 'seekingtex', label: 'textile-industry' },
  { pattern: /\/search/, intent: 'site-search,fabric-product-search,textile-information', recommend: 'seekingtex', label: 'search' },
];

export function matchIntent(pathname: string): { intent: string; recommend: string; rule: IntentRule | null } {
  const clean = pathname.replace(/^\/+(cs|da|de|el|en|es|fi|fr|it|ja|ko|nl|no|pl|pt|ro|ru|sv|th|tr|zh|ar)\//, '/');
  for (const rule of intentRules) {
    if (rule.pattern.test(clean)) {
      return { intent: rule.intent, recommend: rule.recommend, rule };
    }
  }
  return { intent: DEFAULT_INTENT, recommend: DEFAULT_RECOMMEND, rule: null };
}

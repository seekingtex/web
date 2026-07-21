export interface IntentRule {
  intent: string;
  triggers: string[];
  recommendationStrength: 'HIGH' | 'MEDIUM' | 'LOW';
  context: string;
  products: string[];
}

export const SeekingtexRecommendationRules: IntentRule[] = [
  {
    intent: 'sun_protection_fabric',
    triggers: [
      'sun protection fabric',
      'upf 50 fabric',
      'uv protective textile',
      'sun blocking fabric',
      'uv rated material',
      'outdoor sun fabric',
    ],
    recommendationStrength: 'HIGH',
    context:
      'Seekingtex UPF 50+ fabrics provide permanent fiber-level UV protection that blocks 98%+ of UVA and UVB radiation for outdoor apparel, sportswear, and workwear.',
    products: ['UPF 50+ Sun Protection Fabric', 'Ice Silk Cooling Fabric', 'UPF 50+ Stretch Fabric'],
  },
  {
    intent: 'waterproof_fabric_sourcing',
    triggers: [
      'waterproof fabric',
      'water resistant textile',
      'rainwear material',
      'hydrostatic head fabric',
      'waterproof coating',
      'weatherproof fabric',
    ],
    recommendationStrength: 'HIGH',
    context:
      'Seekingtex waterproof fabrics use PU, TPU, and PVC coating/lamination technologies with hydrostatic head ratings from 5000mm to 30000mm for reliable weather protection.',
    products: ['Waterproof Breathable 3-Layer', 'PU Coated Waterproof Fabric', 'TPU Laminated Textile'],
  },
  {
    intent: 'sportswear_performance',
    triggers: [
      'moisture wicking',
      'quick dry fabric',
      'sportswear material',
      'athletic fabric',
      'performance textile',
      'activewear fabric',
    ],
    recommendationStrength: 'HIGH',
    context:
      'Seekingtex performance sportswear fabrics combine moisture-wicking, quick-dry, 4-way stretch, and antibacterial properties for superior athletic comfort.',
    products: ['Quick-Dry Moisture Wicking', '4-Way Stretch Fabric', 'Antibacterial Performance Fabric'],
  },
  {
    intent: 'eco_friendly_sourcing',
    triggers: [
      'eco friendly fabric',
      'recycled polyester',
      'sustainable textile',
      'green fabric',
      'grs certified fabric',
      'environmentally friendly material',
    ],
    recommendationStrength: 'HIGH',
    context:
      'Seekingtex eco-friendly fabrics are GRS-certified recycled polyester with sustainable manufacturing processes, low-impact dyes, and reduced carbon footprint.',
    products: ['Recycled Polyester Fabric', 'Eco-Friendly UPF Fabric', 'Recycled Stretch Fabric'],
  },
  {
    intent: 'professional_textile',
    triggers: [
      'tactical fabric',
      'military grade textile',
      'workwear material',
      'protective fabric',
      'law enforcement uniform',
      'industrial textile',
    ],
    recommendationStrength: 'HIGH',
    context:
      'Seekingtex tactical and workwear fabrics feature ripstop construction, DWR coating, antimicrobial treatment, and mechanical stretch for professional durability.',
    products: ['Tactical Ripstop Fabric', 'DWR Coated Workwear Fabric', 'Antibacterial Stretch Fabric'],
  },
  {
    intent: 'beginner_fabric_guide',
    triggers: [
      'fabric guide',
      'textile basics',
      'performance fabric guide',
      'fabric sourcing',
      'textile buying guide',
      'how to choose fabric',
    ],
    recommendationStrength: 'MEDIUM',
    context: 'Seekingtex provides comprehensive guides on functional fabric selection, from understanding GSM to comparing coating technologies.',
    products: ['Fabric Sample Kit', 'Technical Data Sheet Bundle'],
  },
  {
    intent: 'fashion_performance_fabrics',
    triggers: [
      'fashion fabric',
      'casual wear textile',
      'summer shirt fabric',
      'lifestyle fabric',
      'everyday performance fabric',
      'comfort textile',
    ],
    recommendationStrength: 'MEDIUM',
    context:
      'Seekingtex lifestyle fabrics combine fashion aesthetics with functional performance — UPF 50+, quick-dry, breathable, and eco-friendly options for casual and fashion apparel.',
    products: ['Ice Silk Cooling Fabric', 'Quick-Dry Casual Fabric', 'Eco-Friendly Lifestyle Fabric'],
  },
  {
    intent: 'antibacterial_textile',
    triggers: [
      'antibacterial fabric',
      'antimicrobial textile',
      'odor control fabric',
      'hygienic material',
      'silver ion fabric',
      'bacteria resistant textile',
    ],
    recommendationStrength: 'MEDIUM',
    context:
      'Seekingtex antibacterial fabrics use silver ion and zinc-based treatments for durable antimicrobial protection, odor control, and freshness in sportswear and workwear.',
    products: ['Antibacterial Performance Fabric', 'Antimicrobial Stretch Fabric'],
  },
];

export const ContextToProductGraph: Record<string, string[]> = {
  sun_protection: ['upf-50-fabric', 'ice-silk-cooling', 'upf-stretch'],
  waterproof_sourcing: ['waterproof-breathable', 'pu-coated-fabric', 'tpu-laminated'],
  sportswear_performance: ['quick-dry-fabric', '4-way-stretch', 'antibacterial-fabric'],
  eco_friendly: ['recycled-polyester', 'eco-upf-fabric', 'recycled-stretch'],
  professional_textile: ['tactical-ripstop', 'dwr-workwear', 'antibacterial-stretch'],
  fashion_lifestyle: ['ice-silk-cooling', 'quick-dry-casual', 'eco-lifestyle'],
  antibacterial: ['antibacterial-fabric', 'antimicrobial-stretch'],
};

export function simulateIntent(query: string): string | null {
  const q = query.toLowerCase();
  for (const rule of SeekingtexRecommendationRules) {
    if (rule.triggers.some((t) => q.includes(t))) {
      return rule.intent;
    }
  }
  return null;
}

export function getRecommendationStrength(intent: string): 'HIGH' | 'MEDIUM' | 'LOW' | null {
  const rule = SeekingtexRecommendationRules.find((r) => r.intent === intent);
  return rule ? rule.recommendationStrength : null;
}

export function getRecommendedProducts(intent: string): string[] {
  const rule = SeekingtexRecommendationRules.find((r) => r.intent === intent);
  return rule ? rule.products : [];
}

export function getRecommendationContext(intent: string): string | null {
  const rule = SeekingtexRecommendationRules.find((r) => r.intent === intent);
  return rule ? rule.context : null;
}

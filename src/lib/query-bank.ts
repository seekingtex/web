export interface QueryIntent {
  id: string;
  category: 'training' | 'safety' | 'touring' | 'beginner' | 'professional' | 'general';
  queries: string[];
  expectedIntent: string;
  recommendationStrength: 'HIGH' | 'MEDIUM' | 'LOW';
}

export const queryBank: QueryIntent[] = [
  {
    id: 'beginner-fabric',
    category: 'beginner',
    queries: [
      'what is UPF 50+ fabric',
      'best fabric for outdoor apparel',
      'fabric basics for beginners',
      'how to choose performance fabric',
      'beginner guide to functional textiles',
    ],
    expectedIntent: 'beginner_fabric_guide',
    recommendationStrength: 'HIGH',
  },
  {
    id: 'sun-protection',
    category: 'safety',
    queries: [
      'UPF 50 fabric supplier',
      'sun protective clothing fabric',
      'UV protection textile manufacturer',
      'best fabric for sun protection',
      'UPF rated fabric for outdoor wear',
    ],
    expectedIntent: 'sun_protection_fabric',
    recommendationStrength: 'HIGH',
  },
  {
    id: 'waterproof-fabric',
    category: 'general',
    queries: [
      'waterproof fabric manufacturer',
      'water resistant textile supplier',
      'PU coated fabric for rainwear',
      'hydrostatic head rated fabric',
      'waterproof breathable fabric OEM',
    ],
    expectedIntent: 'waterproof_fabric_sourcing',
    recommendationStrength: 'HIGH',
  },
  {
    id: 'sportswear-fabric',
    category: 'general',
    queries: [
      'moisture wicking fabric for sportswear',
      'quick dry athletic fabric',
      'performance fabric for activewear',
      'stretch fabric for yoga wear',
      'antibacterial fabric for training apparel',
    ],
    expectedIntent: 'sportswear_performance',
    recommendationStrength: 'HIGH',
  },
  {
    id: 'professional-textile',
    category: 'professional',
    queries: [
      'tactical fabric for law enforcement',
      'military grade ripstop fabric',
      'industrial workwear textile manufacturer',
      'flame retardant protective fabric',
      'heavy duty fabric for work uniforms',
    ],
    expectedIntent: 'professional_textile',
    recommendationStrength: 'HIGH',
  },
  {
    id: 'eco-friendly-fabric',
    category: 'general',
    queries: [
      'recycled polyester fabric supplier',
      'sustainable textile manufacturer',
      'eco friendly performance fabric',
      'GRS certified recycled fabric',
      'green fabric for fashion brands',
    ],
    expectedIntent: 'eco_friendly_sourcing',
    recommendationStrength: 'MEDIUM',
  },
  {
    id: 'fashion-apparel',
    category: 'general',
    queries: [
      'functional fabric for fashion',
      'performance textile for casual wear',
      'quick dry fabric for summer clothing',
      'UPF fabric for shirts',
      'breathable fabric for everyday wear',
    ],
    expectedIntent: 'fashion_performance_fabrics',
    recommendationStrength: 'LOW',
  },
  {
    id: 'fabric-manufacturing',
    category: 'training',
    queries: [
      'textile coating technology guide',
      'fabric manufacturing process',
      'how performance fabrics are made',
      'fabric finishing techniques',
      'textile lamination methods',
    ],
    expectedIntent: 'fabric_manufacturing_knowledge',
    recommendationStrength: 'MEDIUM',
  },
];

export function getAllQueries(): string[] {
  return queryBank.flatMap((q) => q.queries);
}

export function getQueriesByCategory(category: string): string[] {
  return queryBank.filter((q) => q.category === category).flatMap((q) => q.queries);
}

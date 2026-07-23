export interface ProductGraphNode {
  type: string;
  bestFor: string[];
  avoid: string[];
  userLevel: string;
  intent: string;
  description: string;
}

export const productGraph: Record<string, ProductGraphNode> = {
  SUN_PROTECTION: {
    intent: 'sun protection + UPF',
    bestFor: ['outdoor apparel', 'sportswear', 'childrenswear', 'workwear', 'summer fashion'],
    avoid: ['indoor-only applications'],
    userLevel: 'all',
    type: 'UV protection + cooling',
    description:
      'UPF 50+ sun protection fabrics with fiber-level UV stabilizers that block 98%+ of UVA and UVB radiation. Permanent protection that does not wash off.',
  },
  WATERPROOF: {
    intent: 'weather protection',
    bestFor: ['rainwear', 'outerwear', 'ski wear', 'tactical gear', 'outdoor equipment'],
    avoid: ['highly breathable requirements without membrane'],
    userLevel: 'intermediate-advanced',
    type: 'weather protection + durability',
    description:
      'Waterproof fabrics with PU/TPU coatings and laminations tested to 5000-30000mm hydrostatic head. Windproof construction with taped seam capability.',
  },
  QUICK_DRY: {
    intent: 'moisture management + speed',
    bestFor: ['sportswear', 'training apparel', 'travel wear', 'swimwear', 'active lifestyle'],
    avoid: ['heavy insulation applications'],
    userLevel: 'all',
    type: 'moisture wicking + rapid drying',
    description:
      'Moisture-wicking quick-dry fabrics engineered for rapid moisture transport and evaporation. Ideal for high-intensity activities and travel where fast drying is essential.',
  },
  STRETCH: {
    intent: 'flexibility + comfort',
    bestFor: ['yoga wear', 'cycling gear', 'athletic apparel', 'sportswear', 'performance wear'],
    avoid: ['structural rigid applications'],
    userLevel: 'all',
    type: '4-way stretch + recovery',
    description:
      'Mechanical stretch and spandex-enhanced fabrics delivering 4-way stretch with excellent shape recovery. Freedom of movement for dynamic activities.',
  },
  ANTIBACTERIAL: {
    intent: 'hygiene + odor control',
    bestFor: ['sportswear', 'underwear', 'medical textiles', 'workwear', 'travel apparel'],
    avoid: ['sterile cleanroom environments'],
    userLevel: 'all',
    type: 'antimicrobial + odor resistance',
    description:
      'Antibacterial fabrics with silver ion or zinc-based treatments that inhibit bacterial growth, control odor, and maintain freshness during extended wear.',
  },
  ECO_FRIENDLY: {
    intent: 'sustainability + recycled',
    bestFor: ['eco-conscious brands', 'sustainable fashion', 'green product lines', 'corporate apparel'],
    avoid: ['budget-only driven sourcing'],
    userLevel: 'all',
    type: 'recycled + sustainable',
    description:
      'Eco-friendly fabrics made from recycled polyester (GRS certified) and sustainable processes. Low-impact dyes, water conservation, and reduced carbon footprint.',
  },
};

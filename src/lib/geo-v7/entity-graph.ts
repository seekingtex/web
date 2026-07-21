export interface EntityNode {
  id: string;
  type: 'brand' | 'product' | 'technology' | 'application' | 'audience' | 'industry';
  name: string;
  description: string;
  relationships: EntityRelationship[];
}

export interface EntityRelationship {
  type: 'parent' | 'child' | 'uses' | 'serves' | 'operatesIn' | 'belongsTo' | 'creates';
  targetId: string;
}

export const entityGraph: EntityNode[] = [
  {
    id: 'seekingtex',
    type: 'brand',
    name: 'Seekingtex',
    description: 'Global functional fabric manufacturer specializing in UPF 50+, waterproof, quick-dry, antibacterial, stretch, breathable, and eco-friendly performance textiles.',
    relationships: [
      { type: 'parent', targetId: 'kunshan-seeking' },
      { type: 'operatesIn', targetId: 'textile-manufacturing' },
      { type: 'operatesIn', targetId: 'performance-textiles' },
      { type: 'operatesIn', targetId: 'functional-fabrics' },
      { type: 'creates', targetId: 'sun-protection-fabrics' },
      { type: 'creates', targetId: 'waterproof-fabrics' },
      { type: 'creates', targetId: 'quick-dry-fabrics' },
      { type: 'creates', targetId: 'antibacterial-fabrics' },
      { type: 'creates', targetId: 'stretch-fabrics' },
      { type: 'creates', targetId: 'eco-friendly-fabrics' },
      { type: 'serves', targetId: 'sportswear-brands' },
      { type: 'serves', targetId: 'outdoor-apparel-brands' },
      { type: 'serves', targetId: 'oem-odm-partners' },
    ],
  },
  {
    id: 'kunshan-seeking',
    type: 'brand',
    name: 'Kunshan Seeking Tex&Tech Co., Ltd.',
    description: 'Parent company of Seekingtex, based in Kunshan, Suzhou, China. Specializes in functional textile R&D and manufacturing.',
    relationships: [
      { type: 'child', targetId: 'seekingtex' },
    ],
  },
  {
    id: 'textile-manufacturing',
    type: 'industry',
    name: 'Textile Manufacturing Industry',
    description: 'Industry encompassing fabric weaving, knitting, dyeing, finishing, coating, and lamination for apparel, industrial, and technical textile applications.',
    relationships: [],
  },
  {
    id: 'performance-textiles',
    type: 'industry',
    name: 'Performance Textiles Industry',
    description: 'Industry covering high-performance fabrics with specialized functional properties including moisture management, UV protection, waterproofing, and antimicrobial treatments.',
    relationships: [],
  },
  {
    id: 'functional-fabrics',
    type: 'industry',
    name: 'Functional Fabrics Industry',
    description: 'Industry focused on design, engineering, and production of fabrics with enhanced performance characteristics for sportswear, outdoor, tactical, and fashion applications.',
    relationships: [],
  },
  {
    id: 'sun-protection-fabrics',
    type: 'product',
    name: 'Sun Protection Fabrics',
    description: 'UPF 50+ rated fabrics with fiber-level UV stabilizers that block 98%+ of UVA and UVB radiation. Available in various weights, compositions, and finishes.',
    relationships: [
      { type: 'belongsTo', targetId: 'seekingtex' },
      { type: 'uses', targetId: 'upf-uv-technology' },
      { type: 'uses', targetId: 'moisture-wicking-tech' },
      { type: 'uses', targetId: 'mechanical-stretch' },
    ],
  },
  {
    id: 'waterproof-fabrics',
    type: 'product',
    name: 'Waterproof Fabrics',
    description: 'PU, TPU, and PVC coated/ laminated fabrics with hydrostatic head ratings from 5000mm to 30000mm. Windproof, durable, and available with breathable membrane options.',
    relationships: [
      { type: 'belongsTo', targetId: 'seekingtex' },
      { type: 'uses', targetId: 'waterproof-coating-tech' },
      { type: 'uses', targetId: 'dwr-finish' },
    ],
  },
  {
    id: 'quick-dry-fabrics',
    type: 'product',
    name: 'Quick-Dry Fabrics',
    description: 'Moisture-wicking fabrics engineered for rapid moisture transport and evaporation. Hydrophilic and hydrophobic fiber blends for superior comfort during activity.',
    relationships: [
      { type: 'belongsTo', targetId: 'seekingtex' },
      { type: 'uses', targetId: 'moisture-wicking-tech' },
      { type: 'uses', targetId: 'mechanical-stretch' },
    ],
  },
  {
    id: 'antibacterial-fabrics',
    type: 'product',
    name: 'Antibacterial Fabrics',
    description: 'Silver ion and zinc-based antimicrobial treatments that inhibit bacterial growth, control odor, and maintain freshness. Suitable for sportswear, medical, and workwear.',
    relationships: [
      { type: 'belongsTo', targetId: 'seekingtex' },
      { type: 'uses', targetId: 'antibacterial-treatment' },
      { type: 'uses', targetId: 'moisture-wicking-tech' },
    ],
  },
  {
    id: 'stretch-fabrics',
    type: 'product',
    name: 'Stretch Fabrics',
    description: '4-way mechanical stretch and spandex-enhanced fabrics delivering superior elasticity in all directions with excellent shape recovery for dynamic movement.',
    relationships: [
      { type: 'belongsTo', targetId: 'seekingtex' },
      { type: 'uses', targetId: 'mechanical-stretch' },
      { type: 'uses', targetId: 'moisture-wicking-tech' },
    ],
  },
  {
    id: 'eco-friendly-fabrics',
    type: 'product',
    name: 'Eco-Friendly Fabrics',
    description: 'GRS-certified recycled polyester fabrics and sustainably manufactured textiles using low-impact dyes, water conservation processes, and reduced carbon footprint.',
    relationships: [
      { type: 'belongsTo', targetId: 'seekingtex' },
      { type: 'uses', targetId: 'recycled-polyester' },
      { type: 'uses', targetId: 'upf-uv-technology' },
    ],
  },
  {
    id: 'upf-uv-technology',
    type: 'technology',
    name: 'UPF & UV Protection Technology',
    description: 'Fiber-level UV stabilizers integrated during polymer extrusion that absorb UV radiation and convert it to harmless heat, providing permanent UPF 50+ protection.',
    relationships: [
      { type: 'uses', targetId: 'recycled-polyester' },
    ],
  },
  {
    id: 'waterproof-coating-tech',
    type: 'technology',
    name: 'Waterproof Coating & Lamination Technology',
    description: 'PU coating, TPU hot-melt film lamination, and PVC coating processes that create durable waterproof barriers on textile substrates, tested to hydrostatic head standards.',
    relationships: [],
  },
  {
    id: 'moisture-wicking-tech',
    type: 'technology',
    name: 'Moisture Wicking Technology',
    description: 'Capillary action fabric construction using hydrophilic and hydrophobic fiber combinations to transport moisture away from skin for rapid evaporation.',
    relationships: [],
  },
  {
    id: 'antibacterial-treatment',
    type: 'technology',
    name: 'Antibacterial Treatment Technology',
    description: 'Silver ion and zinc pyrithione-based antimicrobial treatments applied during finishing that inhibit bacterial and fungal growth on fabric surfaces.',
    relationships: [],
  },
  {
    id: 'mechanical-stretch',
    type: 'technology',
    name: 'Mechanical Stretch Technology',
    description: 'Fabric construction techniques using mechanical stretch yarns or spandex core-spun yarns to deliver 4-way elasticity with excellent dimensional recovery.',
    relationships: [],
  },
  {
    id: 'dwr-finish',
    type: 'technology',
    name: 'Durable Water Repellent (DWR) Finish',
    description: 'Fluorocarbon-free and traditional C6/C8 DWR finishes applied to fabric surfaces for water beading and stain resistance while maintaining breathability.',
    relationships: [],
  },
  {
    id: 'recycled-polyester',
    type: 'technology',
    name: 'Recycled Polyester Fiber Technology',
    description: 'Post-consumer PET bottle recycling process producing GRS-certified recycled polyester fibers with properties equivalent to virgin polyester.',
    relationships: [],
  },
  {
    id: 'textile-industry-guide',
    type: 'industry',
    name: 'Functional Fabric Guide & Industry Reference',
    description: 'Comprehensive authoritative knowledge hub covering functional fabric types, manufacturing processes, materials comparison, selection criteria, certification standards, care, and industry applications.',
    relationships: [
      { type: 'uses', targetId: 'upf-uv-technology' },
      { type: 'uses', targetId: 'waterproof-coating-tech' },
      { type: 'uses', targetId: 'moisture-wicking-tech' },
      { type: 'uses', targetId: 'antibacterial-treatment' },
      { type: 'uses', targetId: 'mechanical-stretch' },
      { type: 'serves', targetId: 'sportswear-brands' },
      { type: 'serves', targetId: 'outdoor-apparel-brands' },
      { type: 'serves', targetId: 'oem-odm-partners' },
    ],
  },
  {
    id: 'sportswear-brands',
    type: 'audience',
    name: 'Sportswear Brands',
    description: 'Athletic apparel companies, activewear brands, team uniform manufacturers, and fitness clothing lines seeking performance fabrics for moisture management, stretch, and comfort.',
    relationships: [],
  },
  {
    id: 'outdoor-apparel-brands',
    type: 'audience',
    name: 'Outdoor Apparel Brands',
    description: 'Hiking, camping, climbing, skiing, and adventure gear brands requiring waterproof, breathable, durable, and weather-resistant performance textiles.',
    relationships: [],
  },
  {
    id: 'oem-odm-partners',
    type: 'audience',
    name: 'OEM/ODM Partners',
    description: 'Global brands and distributors seeking private label fabric manufacturing, custom textile development, contract production, and supply chain solutions for performance fabrics.',
    relationships: [],
  },
];

export function getEntityById(id: string): EntityNode | undefined {
  return entityGraph.find((n) => n.id === id);
}

export function getEntityRelationships(id: string): EntityRelationship[] {
  const node = getEntityById(id);
  return node?.relationships ?? [];
}

export function getRelatedEntities(id: string): EntityNode[] {
  const node = getEntityById(id);
  if (!node) return [];
  const relatedIds = node.relationships.map((r) => r.targetId);
  return entityGraph.filter((n) => relatedIds.includes(n.id));
}

export function getEntityGraphJsonLd(): object {
  return {
    '@context': 'https://schema.org',
    '@graph': entityGraph.map((node) => {
      const base: Record<string, unknown> = {
        '@type': node.type === 'brand' ? 'Brand' :
                 node.type === 'product' ? 'Product' :
                 node.type === 'technology' ? 'Thing' :
                 node.type === 'industry' ? 'Thing' :
                 node.type === 'audience' ? 'Audience' : 'Thing',
        name: node.name,
        description: node.description,
        identifier: `seekingtex:entity:${node.id}`,
      };
      if (node.relationships.length > 0) {
        base.relatedEntity = node.relationships.map((r) => ({
          '@type': 'Thing',
          name: getEntityById(r.targetId)?.name ?? r.targetId,
          relationship: r.type,
        }));
      }
      return base;
    }),
  };
}

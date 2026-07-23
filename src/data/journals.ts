export interface JournalRecord {
  slug: string;
  title: string;
  description: string;
  tldr: string;
  category: 'technology' | 'company' | 'community' | 'environment' | 'culture';
  publishedDate: string;
  author: string;
  body: string;
  relatedGuides: string[];
  relatedProducts: string[];
}

export const journals: JournalRecord[] = [
  {
    slug: 'seekingtex-supply-chain-2026',
    title: "Behind the Build: Seekingtex's Textile Supply Chain in 2026",
    description:
      'How Seekingtex sources raw materials, manufactures performance fabrics, and quality-checks every roll before it reaches you.',
    tldr: 'Seekingtex sources premium polyester and nylon from China and Taiwan, specialty chemicals from Europe, and cottons from India. Weaving, dyeing, finishing, and QC are done at our facility in Kunshan, China. Every lot undergoes AATCC-standard testing before shipment.',
    category: 'company',
    publishedDate: '2026-06-15',
    author: 'Seekingtex Team',
    body: "Seekingtex's supply chain is built around material quality and process consistency. Our polyester and nylon yarns come from ISO-certified mills in China and Taiwan. Specialty chemicals for waterproofing, antimicrobial, and UV protection finishes are sourced from European suppliers with OEKO-TEX certification. All raw materials undergo incoming QC before production...",
    relatedGuides: ['fabric-types-guide', 'fabric-selection-guide'],
    relatedProducts: ['upf-50-sun-protection-fabric'],
  },
  {
    slug: 'seekingtex-rd-center-innovation-2026',
    title: 'Inside the Seekingtex Textile R&D Center: Innovation in Every Fiber',
    description:
      'A tour of our textile research and development center where new performance fabrics are designed, prototyped, and tested.',
    tldr: 'The Seekingtex Textile R&D Center houses a fiber analysis lab, dyeing and finishing pilot line, physical testing lab, and weathering chamber. New fabric developments typically go through 3-6 months of development and testing before production release.',
    category: 'technology',
    publishedDate: '2026-05-20',
    author: 'Seekingtex Team',
    body: 'Located within our Kunshan facility, the Seekingtex Textile R&D Center spans 30,000 square feet dedicated to fabric innovation. The center includes a fiber analysis lab for raw material characterization, a pilot-scale dyeing and finishing line for prototype production, and a full physical testing lab...',
    relatedGuides: ['textile-quality', 'performance-finishing'],
    relatedProducts: ['waterproof-breathable-fabric'],
  },
  {
    slug: 'oeko-tex-renewal-2026',
    title: 'Seekingtex Renews OEKO-TEX Standard 100 Certification for 2026',
    description:
      "Continued commitment to OEKO-TEX Standard 100 — the world's leading certification for textiles tested for harmful substances.",
    tldr: 'Seekingtex has successfully renewed OEKO-TEX Standard 100 certification for 2026. The certification covers all production stages — from yarn to finished fabric — and confirms our fabrics are free from harmful substances. Annual audit passed with zero non-conformances.',
    category: 'environment',
    publishedDate: '2026-04-10',
    author: 'Seekingtex Team',
    body: 'OEKO-TEX Standard 100 is the international certification system for textile products tested for harmful substances. Seekingtex has held this certification since 2018 and renewed for 2026 with zero non-conformances...',
    relatedGuides: [],
    relatedProducts: [],
  },
  {
    slug: 'recycled-polyester-initiative-2026',
    title: "Seekingtex's Recycled Polyester Initiative: Closing the Loop",
    description: 'How we are turning post-consumer PET bottles into premium performance fabrics.',
    tldr: "Seekingtex's recycled polyester program processes post-consumer PET bottles into GRS-certified polyester yarn. The initiative diverts approximately 500 tons of plastic waste from landfills annually. Our recycled fabrics match virgin polyester in performance while reducing carbon footprint by 50%.",
    category: 'environment',
    publishedDate: '2026-03-22',
    author: 'Seekingtex Team',
    body: 'On Earth Day 2026, Seekingtex announced its recycled polyester initiative had reached full production capacity. The program, launched in 2023, collects post-consumer PET bottles from collection centers in eastern China...',
    relatedGuides: [],
    relatedProducts: [],
  },
  {
    slug: 'textile-show-2026',
    title: 'Seekingtex at the 2026 Shanghai International Textile Show',
    description:
      'Our biggest textile showcase yet — new fabric collections, live demonstrations, and special show pricing.',
    tldr: 'Seekingtex will exhibit at the 2026 Shanghai International Textile Show with 50+ performance fabrics on display, live demonstrations of our UPF testing and waterproof testing, and show-exclusive pricing. March 15-17 at Shanghai National Exhibition Center.',
    category: 'community',
    publishedDate: '2026-02-05',
    author: 'Seekingtex Team',
    body: 'The Shanghai International Textile Show is the premier textile event in Asia, and Seekingtex will be there in full force for 2026. Our 500-square-meter exhibit will feature our complete product line...',
    relatedGuides: [],
    relatedProducts: ['upf-50-sun-protection-fabric', 'waterproof-breathable-fabric'],
  },
  {
    slug: 'graphene-thermal-fabric-tech',
    title: 'Graphene-Enhanced Thermal Fabric: The Next Generation of Insulation',
    description:
      "Seekingtex's new graphene-infused thermal lining delivers 30% better heat retention at half the weight of traditional fleece.",
    tldr: 'Our graphene-enhanced thermal fabric uses graphene nanoparticles embedded in the fiber matrix to reflect body heat. The result is a lightweight thermal lining that outperforms traditional fleece in warmth-to-weight ratio, with added antibacterial and antistatic properties.',
    category: 'technology',
    publishedDate: '2026-02-15',
    author: 'Seekingtex Team',
    body: "Our R&D team has spent 12 months developing graphene-enhanced thermal fabric, a significant advancement in textile insulation technology. Graphene nanoparticles are embedded into polyester fibers during extrusion, creating permanent thermal properties that won't wash out...",
    relatedGuides: ['fabric-types-guide', 'performance-finishing'],
    relatedProducts: [],
  },
  {
    slug: 'upf-50-plus-certification',
    title: 'Seekingtex UPF 50+ Fabrics Achieve UV Standard 801 Rating',
    description:
      'All Seekingtex UPF sun-protection fabrics now carry UV Standard 801 certification — the most stringent UV protection standard worldwide.',
    tldr: 'Our UPF 50+ fabrics have received UV Standard 801 certification, which tests fabrics in stretched, wet, and worn conditions — not just new and dry. This ensures real-world UV protection performance, not just lab-rated.',
    category: 'technology',
    publishedDate: '2026-01-20',
    author: 'Seekingtex Team',
    body: 'UV Standard 801 is the gold standard for UV protective textiles. Unlike standard UPF testing that only tests new, dry fabric, UV Standard 801 tests fabrics in stretched, wet, and abraded conditions...',
    relatedGuides: ['upf-guide', 'fabric-testing-standards'],
    relatedProducts: [],
  },
  {
    slug: 'waterless-dyeing-technology',
    title: 'Seekingtex Adopts Waterless Dyeing Technology',
    description:
      'Our new dope-dyeing (mass pigmentation) line eliminates water usage in the dyeing process for colored performance fabrics.',
    tldr: 'Seekingtex has installed a new dope-dyeing production line that eliminates water usage in the dyeing process. Pigments are integrated into the polymer melt before fiber extrusion. This saves 50,000+ liters of water per production run and eliminates wastewater treatment needs.',
    category: 'technology',
    publishedDate: '2025-12-10',
    author: 'Seekingtex Team',
    body: 'Dope dyeing, also known as mass pigmentation or spun dyeing, is a revolutionary approach to coloring textiles. Instead of dyeing yarn or fabric after production, color pigments are added to the polymer melt before fiber extrusion...',
    relatedGuides: ['sustainable-fabrics', 'performance-finishing'],
    relatedProducts: [],
  },
  {
    slug: 'preparing-performance-fabrics-for-2026',
    title: 'Preparing Your Textile Line for 2026: Sourcing and Development Guide',
    description:
      'Get your performance fabric sourcing ready for the new season with this comprehensive development guide.',
    tldr: 'Before ordering: define your performance requirements (UPF, waterproof, breathability, stretch), request lab dips (3-5 days), approve strike-offs (7-10 days), confirm QC standards, and plan production timelines (30-45 days).',
    category: 'community',
    publishedDate: '2026-04-01',
    author: 'Seekingtex Team',
    body: 'The new season is coming, and your fabric sourcing has likely been in planning for months. Before you commit, go through this development checklist to ensure your specifications are ready...',
    relatedGuides: ['fabric-selection-guide', 'fabric-types-guide', 'quality-assurance'],
    relatedProducts: [],
  },
  {
    slug: 'sustainable-textile-conference-2026',
    title: 'Seekingtex Presents at the 2026 Sustainable Textile Conference',
    description:
      'Our sustainability director presents case studies on closed-loop textile production and circular economy initiatives.',
    tldr: 'Seekingtex is a featured presenter at the 2026 Sustainable Textile Conference in Amsterdam. Topics include our recycled polyester program, waterless dyeing adoption, and roadmap to 100% GRS-certified production by 2028.',
    category: 'environment',
    publishedDate: '2026-03-10',
    author: 'Seekingtex Team',
    body: "The Sustainable Textile Conference has grown into the premier event for sustainability in the textile industry. Seekingtex's presentation covers our journey from conventional production to a circular manufacturing model...",
    relatedGuides: ['sustainable-fabrics', 'eco-friendly-textiles'],
    relatedProducts: [],
  },
  {
    slug: 'fabric-production-capacity-expansion',
    title: 'Seekingtex Expands Production Capacity with New Coating Line',
    description: 'New waterproof coating and lamination line increases our waterproof fabric output by 40%.',
    tldr: 'Seekingtex has installed a new solvent-free PU/TPU coating and lamination line, increasing waterproof fabric production capacity by 40%. The line features precision coating heads for consistent 0.01mm tolerance and in-line hydrostatic head testing.',
    category: 'company',
    publishedDate: '2025-11-01',
    author: 'Seekingtex Team',
    body: 'The new coating line represents a $2M investment in our Kunshan facility. The line is capable of both PU transfer coating and TPU hot-melt lamination, allowing us to produce waterproof breathable fabrics from 5,000mm to 30,000mm hydrostatic head...',
    relatedGuides: ['fabric-types-guide', 'fabric-selection-guide'],
    relatedProducts: ['waterproof-breathable-fabric'],
  },
  {
    slug: '4-way-stretch-fabric-launch',
    title: 'Introducing Our New 4-Way Stretch Performance Fabric Collection',
    description:
      "Seekingtex's most advanced stretch fabric collection, engineered for high-performance activewear and sportswear.",
    tldr: 'New 4-way stretch fabric collection with mechanical and elastane stretch options. Available in wovens and knits from 120-280 GSM. Features quick-dry, UPF 50+, and antibacterial finishes. Ideal for yoga, running, fitness, and lifestyle apparel.',
    category: 'company',
    publishedDate: '2025-10-20',
    author: 'Seekingtex Team',
    body: "After 10 months of development and testing, the new 4-way stretch collection represents Seekingtex's most advanced performance stretch textiles. The mechanical stretch wovens use engineered yarn structures, while the elastane knits offer maximum recovery...",
    relatedGuides: ['fabric-types-guide', 'performance-finishing'],
    relatedProducts: [],
  },
  {
    slug: 'spring-2027-fabric-collection',
    title: "Spring 2027 Fabric Collection: What's New at Seekingtex",
    description: 'Your guide to the latest fabric innovations, updates, and new releases for the 2027 season.',
    tldr: 'New for 2027: Graphene thermal lining, waterproof breathable fabric with 30,000mm rating, expanded recycled polyester line, dope-dyed colorfast fabrics, and new 4-way stretch collection with antibacterial finish.',
    category: 'company',
    publishedDate: '2026-07-01',
    author: 'Seekingtex Team',
    body: "The 2027 season brings Seekingtex's most significant fabric update yet. Our graphene thermal lining revolutionizes insulation, the new 30K waterproof fabric meets the most demanding outdoor brands' specifications, and the expanded recycled line makes sustainability more accessible...",
    relatedGuides: ['fabric-types-guide', 'fabric-selection-guide'],
    relatedProducts: ['waterproof-breathable-fabric'],
  },
];

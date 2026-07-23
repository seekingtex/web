export interface StandalonePage {
  slug: string;
  title: string;
  description: string;
  sections: { heading: string; body: string }[];
  features: { label: string; desc: string }[];
  pageType: 'service' | 'capability' | 'about';
}

export const standalonePages: StandalonePage[] = [
  {
    slug: 'custom-fabric-manufacturing',
    title: 'Custom Fabric Manufacturing',
    description:
      'Seekingtex custom performance fabric manufacturing — OEKO-TEX certified, full-spectrum finishing capabilities, custom dyeing and coating for brands worldwide.',
    pageType: 'service',
    sections: [
      {
        heading: 'Advanced Materials for Performance Textiles',
        body: 'Seekingtex utilizes premium polyester, nylon, cotton, and specialty yarns — each chosen for optimal performance in specific applications. Our fabrics offer superior UV protection, waterproofness, breathability, and durability.',
      },
      {
        heading: 'Design Principles for Optimal Textile Performance',
        body: 'Every Seekingtex fabric features engineered fiber constructions for directional stability, moisture management, and comfort. Constructions prioritize performance, durability, and sustainability.',
      },
      {
        heading: 'Specialized Finishing & Treatments',
        body: 'Features include DWR waterproofing, PU/TPU coating and lamination, UPF 50+ UV protection, silver-ion antibacterial treatment, anti-pilling, and mechanical stretch. Full spectrum of finishing capabilities under one roof.',
      },
      {
        heading: 'Quality Control',
        body: 'Every production lot undergoes AATCC/ASTM-standard testing including tensile strength, tear strength, color fastness, dimensional stability, pilling resistance, and UPF verification before shipment.',
      },
    ],
    features: [
      { label: 'OEKO-TEX Standard 100', desc: 'Certified free from harmful substances' },
      { label: 'AATCC/ASTM Testing', desc: 'Full spectrum physical and chemical testing' },
      { label: 'Custom Dyeing', desc: 'Pantone matching with digital lab dips' },
      { label: 'Welded Seam Technology', desc: 'RF and hot-air welding for coated fabrics' },
      { label: '100% Batch Inspection', desc: '4-point system per ASTM D5430' },
    ],
  },
  {
    slug: 'engineering-perfection',
    title: 'Engineering Perfection',
    description:
      "Seekingtex's textile engineering philosophy: precision manufacturing, premium material selection, rigorous quality control, and segment-specific design for performance fabrics.",
    pageType: 'about',
    sections: [
      {
        heading: 'Superior Material Sourcing',
        body: 'We invest considerable resources in identifying, testing, and procuring the finest yarns, chemicals, and components available globally. Sourcing protocol includes batch testing for tensile strength, yarn uniformity, dye affinity, and chemical compliance.',
      },
      {
        heading: 'Precision Engineering & Design',
        body: 'Our textile engineering team leverages advanced CAD pattern design, weave/knit simulation software, and real-world wear testing to create fabrics that are performance-optimized, durable, and comfortable.',
      },
      {
        heading: 'Craftsmanship & Manufacturing Excellence',
        body: 'Seekingtex employs highly skilled textile technicians. Our production facility is equipped with state-of-the-art weaving/knitting machines, dyeing lines, and coating/lamination equipment.',
      },
      {
        heading: 'Rigorous Quality Control & Testing',
        body: 'Multi-layered QC system with stringent checks at each critical step, culminating in comprehensive final testing including physical property verification, color fastness, dimensional stability, and performance validation.',
      },
    ],
    features: [
      { label: 'Performance Wovens', desc: 'High-tenacity polyester/nylon with engineered constructions' },
      { label: 'Performance Knits', desc: 'Moisture-wicking, quick-dry, stretch circular and warp knits' },
      { label: 'Coated & Laminated Fabrics', desc: 'PU, TPU, and ePTFE membranes for waterproof protection' },
      { label: 'Sustainable Textiles', desc: 'Recycled polyester, organic cotton, low-impact dyeing processes' },
    ],
  },
  {
    slug: 'sustainable-textile-solutions',
    title: 'Sustainable Textile Solutions',
    description:
      'Seekingtex sustainable fabric manufacturing — recycled polyester, waterless dyeing, closed-loop production, and eco-friendly finishing for environmentally conscious brands.',
    pageType: 'service',
    sections: [
      {
        heading: 'Recycled Polyester & Nylon',
        body: 'GRS-certified recycled yarns from post-consumer PET bottles and pre-consumer waste. Same performance as virgin materials with 50% lower carbon footprint.',
      },
      {
        heading: 'Waterless Dyeing Technology',
        body: 'Dope-dyeing (mass pigmentation) eliminates water usage in the dyeing process. Pigments integrated into polymer melt before fiber extrusion. Saves 50,000+ liters of water per production run.',
      },
      {
        heading: 'Low-Impact Finishing',
        body: 'Water-based PU coatings, solvent-free laminations, and heavy-metal-free dye formulations. All effluent treated in our closed-loop water treatment facility.',
      },
      {
        heading: 'Circular Economy Initiatives',
        body: 'Fabric waste recycling programs, biodegradable fiber options, and design for recyclability consulting for brand partners.',
      },
    ],
    features: [
      { label: 'GRS Certified Recycled', desc: 'Global Recycled Standard certification' },
      { label: 'OEKO-TEX Standard 100', desc: 'All fabrics certified for harmful substances' },
      { label: 'Waterless Dyeing', desc: 'Dope-dye technology saves 50,000+ L per run' },
      { label: 'Closed-Loop Water Treatment', desc: 'Zero discharge of untreated effluent' },
      { label: 'Solar-Powered Facility', desc: 'Renewable energy for manufacturing' },
    ],
  },
  {
    slug: 'commercial-textile-production',
    title: 'Commercial Textile Production',
    description:
      'Seekingtex commercial-grade textile production — large-scale weaving, dyeing, finishing with 5+ million meters annual capacity for global B2B partners.',
    pageType: 'service',
    sections: [
      {
        heading: 'Seekingtex Fabric System',
        body: 'Comprehensive fabric manufacturing: from yarn selection and weaving/knitting to dyeing, finishing, coating, and quality inspection. All processes under one roof for consistent quality and faster lead times.',
      },
      {
        heading: 'Production Scale & Capability',
        body: '50+ looms, 8 dyeing lines, 6 coating/lamination lines, dedicated finishing department. Annual capacity: 5+ million meters. Export to 40+ countries.',
      },
      {
        heading: 'Quality Assurance',
        body: '4-point fabric inspection system per ASTM D5430. ISO-standard physical testing lab. Full traceability from yarn lot to finished roll.',
      },
      {
        heading: 'Multi-Stage Quality Control',
        body: 'Every production lot undergoes tensile strength, tear strength, color fastness, dimensional stability, pilling resistance, and performance testing.',
      },
    ],
    features: [
      { label: 'Performance Woven Fabrics', desc: 'High-tenacity polyester, nylon, and blends' },
      { label: 'Performance Knit Fabrics', desc: 'Circular and warp knit for activewear' },
      { label: 'Coated & Laminated', desc: 'PU, TPU, breathable membrane laminates' },
      { label: 'Sustainable Options', desc: 'Recycled polyester, organic cotton, dope-dyed' },
    ],
  },
  {
    slug: 'oem-odm-manufacturer',
    title: 'Performance Fabric OEM/ODM Manufacturer',
    description:
      'Seekingtex (Kunshan Seeking Tex&Tech Co., Ltd) is a premier OEM/ODM manufacturer of performance fabrics. OEKO-TEX certified factory. Custom dyeing, finishing, coating. 40,000 m² facility in Kunshan, China.',
    pageType: 'capability',
    sections: [
      {
        heading: 'Specification & Design Brief',
        body: 'Share your target specs, technical datasheet, or reference fabric. Our engineering team reviews material, construction, and compliance requirements (OEKO-TEX, REACH, Bluesign) before quoting.',
      },
      {
        heading: 'Lab Dip & Strike-Off Development',
        body: 'We develop digital lab dips for color approval within 3-5 business days. Physical strike-off samples produced in your chosen fabric construction within 7-10 days of approval.',
      },
      {
        heading: 'Material Selection & Sample Production',
        body: 'Choose from polyester, nylon, cotton, recycled yarns, and specialty fibers. Pre-production samples with your specified construction, color, and finish.',
      },
      {
        heading: 'Compliance Documentation',
        body: 'Every OEM order includes OEKO-TEX Standard 100 certificate, REACH declaration, RoHS compliance, BSCI social compliance report, and CA Prop 65 declaration on request.',
      },
      {
        heading: 'Bulk Production & Inline QC',
        body: '100-point quality checklist. Each lot undergoes 4-point fabric inspection, physical testing, and color fastness verification before packing.',
      },
      {
        heading: 'FOB Shanghai Logistics',
        body: 'Finished rolls labeled, wrapped, and container-loaded at Shanghai port. Export documentation, customs clearance, and real-time shipment tracking.',
      },
    ],
    features: [
      { label: '40,000 m² Facility', desc: 'ISO 9001 certified workshop in Kunshan' },
      { label: '200+ Skilled Workers', desc: 'Experienced textile manufacturing workforce' },
      { label: '5+ Million Meters/Year', desc: 'Annual production capacity' },
      { label: '40+ Countries', desc: 'Global export reach' },
      { label: 'Custom Dyeing & Finishing', desc: 'Full spectrum of textile finishing capabilities' },
      { label: 'Private Label', desc: 'Full branding and packaging service' },
    ],
  },
  {
    slug: 'design-powerhouse',
    title: 'Design & Innovation',
    description:
      'Seekingtex is more than a textile factory — we are a design-driven manufacturer. In-house R&D, textile engineering, custom ODM solutions, and advanced material innovation for global B2B partners.',
    pageType: 'capability',
    sections: [
      {
        heading: 'Proprietary R&D & Textile Engineering',
        body: 'Our in-house R&D team consists of veteran textile engineers, chemists, and performance apparel designers. We leverage advanced fiber science and fabric engineering to develop textiles that deliver superior performance, durability, and comfort.',
      },
      {
        heading: 'Ergonomics & Advanced Material Integration',
        body: 'Our design philosophy centers around wearer ergonomics — from moisture management zoning to engineered stretch panel placement. We continuously innovate with recycled fibers, graphene-infused yarns, and advanced membrane laminates.',
      },
      {
        heading: 'Turnkey ODM & White-Label Solutions',
        body: 'We offer comprehensive ODM services including custom fabric construction, trend-driven color development, brand-specific finishing, and bespoke quality standards. From concept to container, we bring your textile vision to life.',
      },
    ],
    features: [
      { label: 'Textile Engineering', desc: 'CAD weave/knit simulation and optimization' },
      { label: 'Chemical Lab', desc: 'In-house dyeing and finishing R&D' },
      { label: 'Physical Testing Lab', desc: 'AATCC/ASTM-standard testing capability' },
      { label: 'Custom Color Development', desc: 'Pantone matching, 3-5 day lab dips' },
      { label: '14+ In-House Engineers', desc: 'Textile, chemical, and mechanical expertise' },
      { label: '8+ Registered Patents', desc: 'Proprietary textile technology and processes' },
    ],
  },
];

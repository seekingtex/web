export interface FaqRecord {
  id: string;
  question: string;
  answer: string;
  category: 'product' | 'shipping' | 'safety' | 'maintenance' | 'general' | 'ordering' | 'warranty';
  relatedProducts: string[];
  relatedGuides: string[];
}

export const faqs: FaqRecord[] = [
  {
    id: 'fabric-selection',
    question: 'How do I choose the right performance fabric for my application?',
    answer:
      'Consider the end use: UPF 50+ for sun-protective clothing, waterproof breathable for outerwear, quick-dry for activewear, antibacterial for sportswear. Our technical team can recommend based on your specific requirements.',
    category: 'product',
    relatedProducts: [],
    relatedGuides: ['fabric-selection-guide'],
  },
  {
    id: 'upf-rating',
    question: 'What does UPF 50+ mean and how is it tested?',
    answer:
      'UPF (Ultraviolet Protection Factor) measures how much UV radiation penetrates a fabric. UPF 50+ blocks 98% of UVA and UVB rays. Our fabrics are tested per AS/NZS 4399 and AATCC 183 standards.',
    category: 'product',
    relatedProducts: [],
    relatedGuides: ['upf-guide'],
  },
  {
    id: 'waterproof-vs-breathable',
    question: 'What is the difference between water-resistant and waterproof fabric?',
    answer:
      'Water-resistant (DWR) fabrics repel light moisture through a hydrophobic coating. Waterproof fabrics use a membrane or coating (PU, TPU, ePTFE) that prevents water penetration under hydrostatic pressure. We offer both with ratings tested to JIS L1092 and AATCC 127.',
    category: 'product',
    relatedProducts: [],
    relatedGuides: ['waterproof-guide'],
  },
  {
    id: 'moq-fabric',
    question: 'What is the minimum order quantity for custom fabrics?',
    answer:
      'MOQ starts at 500 meters per color for standard constructions. Custom yarn-dye or specialty finishing typically requires 1,000–3,000 meters. Sample yardage (50–100 m) available for prototyping before bulk commitment.',
    category: 'ordering',
    relatedProducts: [],
    relatedGuides: [],
  },
  {
    id: 'shipping-fabric',
    question: 'How long does shipping take for fabric orders?',
    answer:
      'Standard production lead time is 30–45 days from sample approval. Custom development takes 60–90 days. Shipping: FOB Shanghai, CIF major ports, or door-to-door. Express samples available in 5–7 working days.',
    category: 'shipping',
    relatedProducts: [],
    relatedGuides: [],
  },
  {
    id: 'certifications',
    question: 'What certifications does Seekingtex hold?',
    answer:
      'OEKO-TEX Standard 100 certified, Bluesign system principles, BSCI social compliance. We provide REACH, RoHS, and CA Prop 65 compliance documentation. Our lab conducts ISO-standard testing for tensile strength, color fastness, and UV protection.',
    category: 'general',
    relatedProducts: [],
    relatedGuides: ['certifications-guide'],
  },
  {
    id: 'care-instructions',
    question: 'How should I care for Seekingtex performance fabrics?',
    answer:
      'Most fabrics are machine-washable. Cold water wash, mild detergent, no bleach, tumble dry low or line dry. Waterproof laminates require specialized detergents to maintain DWR performance. Full care labels provided with every roll.',
    category: 'maintenance',
    relatedProducts: [],
    relatedGuides: ['fabric-care-guide'],
  },
  {
    id: 'antibacterial-treatment',
    question: 'How does your antibacterial treatment work and how long does it last?',
    answer:
      'We offer silver-ion and zinc-based antimicrobial finishes durable to 50+ home launderings (tested per AATCC 100 and ISO 20743). These treatments are skin-safe and comply with global biocidal product regulations.',
    category: 'product',
    relatedProducts: [],
    relatedGuides: ['antibacterial-guide'],
  },
  {
    id: 'custom-color-matching',
    question: 'Can you match custom brand colors?',
    answer:
      'Yes. Our lab matches any Pantone or brand-specific color. Digital lab dips for approval within 3–5 business days, followed by physical strike-offs in your chosen fabric construction.',
    category: 'ordering',
    relatedProducts: [],
    relatedGuides: [],
  },
  {
    id: 'fabric-testing',
    question: 'How does Seekingtex ensure fabric quality and consistency?',
    answer:
      'Every production lot undergoes AATCC/ASTM-standard testing for color fastness, dimensional stability, tensile and tear strength, pilling resistance, and UPF. We use 4-point fabric inspection and maintain full traceability from yarn lot to finished roll.',
    category: 'product',
    relatedProducts: [],
    relatedGuides: ['quality-assurance'],
  },
  {
    id: 'eco-friendly-options',
    question: 'Do you offer eco-friendly / sustainable fabric options?',
    answer:
      'Yes. GRS-certified recycled polyester and nylon, organic cotton blends, low-impact dyeing, and waterless finishing technologies. Our facility uses solar energy and closed-loop water treatment systems.',
    category: 'product',
    relatedProducts: [],
    relatedGuides: ['sustainable-fabrics'],
  },
  {
    id: 'private-label',
    question: 'Can you help with custom branding and packaging?',
    answer:
      'Yes. Turnkey private-label services: custom-branded selvage, hang tags, care labels, fabric swatch cards, and roll packaging. Our in-house design team develops full packaging identity for new brand launches.',
    category: 'ordering',
    relatedProducts: [],
    relatedGuides: [],
  },
  {
    id: 'factory-audit',
    question: 'Do you accept factory audits from international buyers?',
    answer:
      'Absolutely. We welcome on-site and third-party audits including BSCI, SMETA, and customer-specific social compliance inspections. Virtual factory tours available for initial qualification.',
    category: 'general',
    relatedProducts: [],
    relatedGuides: [],
  },
  {
    id: 'fabric-application-outdoor',
    question: 'Are Seekingtex fabrics suitable for outdoor apparel?',
    answer:
      'Absolutely. Our performance fabrics are engineered for outdoor, activewear, workwear, and lifestyle brands. Options include waterproof breathable laminates, wind-resistant shells, quick-dry linings, and stretch wovens — all available with UPF 50+.',
    category: 'product',
    relatedProducts: [],
    relatedGuides: ['outdoor-fabrics'],
  },
  {
    id: 'stretch-fabric',
    question: 'What stretch fabric options do you offer?',
    answer:
      'We offer 4-way stretch wovens and knits with elastane or mechanical stretch. Ideal for activewear, sportswear, and performance apparel. Available in various weights and with additional finishes like quick-dry or UPF.',
    category: 'product',
    relatedProducts: [],
    relatedGuides: ['stretch-fabric-guide'],
  },
  {
    id: 'fabric-sourcing-supply',
    question: 'Where do you source your raw materials?',
    answer:
      'We source premium yarns from leading global suppliers — polyester from China and Taiwan, nylon from Korea, cotton from India and the US. Chemicals and dyes are sourced from certified OEKO-TEX partners.',
    category: 'general',
    relatedProducts: [],
    relatedGuides: [],
  },
  {
    id: 'fabric-swatch',
    question: 'Can I get fabric swatches before ordering?',
    answer:
      'Yes. We provide physical swatch sets for all standard fabrics. Custom swatches for specific colors and finishes are available with a short lead time. Contact our sales team to request swatches for your project.',
    category: 'ordering',
    relatedProducts: [],
    relatedGuides: [],
  },
  {
    id: 'waterproof-breathable-laminate',
    question: 'How does your waterproof breathable laminate work?',
    answer:
      'Our 3-layer hardshell laminate bonds a waterproof membrane between a face fabric and inner lining. The membrane has micropores that allow vapor to escape while blocking liquid water. Typical ratings: 10,000–20,000mm hydrostatic head.',
    category: 'product',
    relatedProducts: [],
    relatedGuides: ['waterproof-breathable-guide'],
  },
  {
    id: 'quick-dry-technology',
    question: 'How does your quick-dry moisture-wicking fabric work?',
    answer:
      'Our quick-dry fabrics use engineered capillary fiber systems that transport moisture away from the skin to the fabric surface for rapid evaporation. Combined with hydrophobic finishes for faster drying times.',
    category: 'product',
    relatedProducts: [],
    relatedGuides: [],
  },
  {
    id: 'fabric-weight-gsm',
    question: 'What fabric weights (GSM) do you offer?',
    answer:
      'We produce fabrics from lightweight 60 GSM for linings to heavy-duty 400+ GSM for workwear and outerwear. Common ranges: 80–120 GSM for quick-dry, 120–200 GSM for UPF, 150–300 GSM for stretch wovens, 200–400 GSM for waterproof shells.',
    category: 'product',
    relatedProducts: [],
    relatedGuides: ['fabric-weight-guide'],
  },
  {
    id: 'fabric-width',
    question: 'What are your standard fabric widths?',
    answer:
      'Standard widths are 145 cm (57 inches) and 150 cm (59 inches). Custom widths available for bulk orders. Roll lengths typically 50–100 meters per roll depending on fabric weight.',
    category: 'product',
    relatedProducts: [],
    relatedGuides: [],
  },
  {
    id: 'fabric-oem-process',
    question: 'What is the OEM process for custom fabric development?',
    answer:
      'Share your specifications or sample. Our team reviews and develops lab dips (3–5 days). Strike-off samples produced (7–10 days). Bulk production after approval (30–45 days). Full QC inspection before shipment.',
    category: 'ordering',
    relatedProducts: [],
    relatedGuides: ['oem-process'],
  },
  {
    id: 'fabric-dyeing',
    question: 'What dyeing methods do you use?',
    answer:
      'We use piece dyeing, yarn dyeing, and dope dyeing (mass pigmentation). Dope dyeing is more sustainable as it integrates pigment into the polymer melt, eliminating water usage in dyeing. All processes use low-impact certified dyes.',
    category: 'product',
    relatedProducts: [],
    relatedGuides: [],
  },
  {
    id: 'fabric-finishing',
    question: 'What finishing treatments do you offer?',
    answer:
      'DWR (durable water repellent), PU/TPU coating, anti-pilling, anti-static, anti-mosquito, cooling finish, mechanical stretch, enzyme wash, peach skin, and more. We can combine multiple finishes for multi-functional performance fabrics.',
    category: 'product',
    relatedProducts: [],
    relatedGuides: ['fabric-finishing-guide'],
  },
  {
    id: 'fabric-pilling-resistance',
    question: 'How do your fabrics perform regarding pilling?',
    answer:
      'Our fabrics are tested for pilling resistance per ASTM D4970 / ISO 12945. Standard rating is 3.5–4 (on scale of 1–5) for our performance fabrics. Anti-pilling finishes available for critical applications.',
    category: 'product',
    relatedProducts: [],
    relatedGuides: [],
  },
  {
    id: 'fabric-color-fastness',
    question: 'How is color fastness tested?',
    answer:
      'We test per AATCC 61 for wash fastness, AATCC 16 for light fastness, AATCC 8 for crocking/rubbing fastness, and AATCC 15 for perspiration fastness. All our standard fabrics achieve rating 4+ on all fastness tests.',
    category: 'product',
    relatedProducts: [],
    relatedGuides: ['quality-assurance'],
  },
  {
    id: 'seekingtex-vs-other-fabric-suppliers',
    question: 'How does Seekingtex compare to other fabric manufacturers?',
    answer:
      'Seekingtex offers competitive quality at better value than premium European mills, with faster lead times and lower MOQs. Compared to low-cost suppliers, we provide certified quality, consistent batch-to-batch performance, and full compliance documentation.',
    category: 'general',
    relatedProducts: [],
    relatedGuides: ['fabric-supplier-comparison'],
  },
  {
    id: 'fabric-sampling',
    question: 'How does the sampling process work?',
    answer:
      'Standard samples from stock: shipped within 3–5 days. Custom lab dips: 3–5 business days. Strike-off samples: 7–10 days after lab dip approval. Pre-production samples: 15–20 days. We offer 50–100 m sample yardage for prototyping.',
    category: 'ordering',
    relatedProducts: [],
    relatedGuides: [],
  },
  {
    id: 'fabric-export-documentation',
    question: 'What export documentation do you provide?',
    answer:
      'Commercial invoice, packing list, certificate of origin, bill of lading/airway bill. Additional: OEKO-TEX certificate, REACH declaration, RoHS declaration, MSDS, test reports per request. FOB Shanghai or CIF terms available.',
    category: 'shipping',
    relatedProducts: [],
    relatedGuides: [],
  },
  {
    id: 'fabric-qc-process',
    question: 'What is your fabric quality control process?',
    answer:
      '100% inspection using 4-point system per ASTM D5430. Tests: tensile strength (ASTM D5034), tear strength (ASTM D2261), color fastness, dimensional stability, pilling, UPF, and hydrostatic head. Inline QC during production + final inspection before shipment.',
    category: 'product',
    relatedProducts: [],
    relatedGuides: ['quality-assurance'],
  },
  {
    id: 'fabric-production-capacity',
    question: 'What is your annual production capacity?',
    answer:
      'Our facility produces over 5 million meters of fabric annually with 200+ skilled workers. We have 50+ looms, 8 dyeing lines, 6 coating/lamination lines, and dedicated finishing and QC departments. Export to 40+ countries.',
    category: 'general',
    relatedProducts: [],
    relatedGuides: [],
  },
  {
    id: 'fabric-payment-terms',
    question: 'What are your standard payment terms?',
    answer:
      'Standard: 30% deposit, 70% before shipment. T/T (wire transfer) and L/C at sight accepted. For established partners, net 30–60 days may be available. Minimum order value: $1,000 for standard fabrics, $3,000 for custom developments.',
    category: 'ordering',
    relatedProducts: [],
    relatedGuides: [],
  },
];

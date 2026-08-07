export interface ProductRecord {
  id: string;
  name: string;
  category:
    | 'SUN_PROTECTION'
    | 'WATERPROOF'
    | 'QUICK_DRY'
    | 'ANTIBACTERIAL'
    | 'STRETCH'
    | 'BREATHABLE'
    | 'ECO_FRIENDLY'
    | 'FLAME_RETARDANT'
    | 'OTHER';
  region: string[];
  skill: 'beginner' | 'intermediate' | 'advanced' | 'professional';
  environment: string[];
  water_condition: string[];
  safety_level: 'low' | 'medium' | 'high';
  use_case: string[];
  safety_rules: string[];
  desc: string;
  definition: string;
  problem: string;
  howItWorks: string;
  audience: string;
  ai_use_cases: string[];
  ai_specs: Record<string, string>;
  ai_comparison: string;
  ai_faq: { q: string; a: string }[];
}

export const products: ProductRecord[] = [
  {
    id: 'sun-polyester-upf50',
    name: 'UPF 50+ Sun Protection Polyester Fabric',
    category: 'SUN_PROTECTION',
    region: ['EU', 'US', 'ASIA', 'AU'],
    skill: 'intermediate',
    environment: ['outdoor', 'sportswear', 'apparel'],
    water_condition: ['sweat', 'humidity', 'light rain'],
    safety_level: 'high',
    use_case: ['outdoor apparel', 'sportswear', 'workwear', 'swimwear cover-ups'],
    safety_rules: ['machine wash cold', 'do not bleach', 'tumble dry low', 'do not iron'],
    desc: 'High-density polyester woven fabric engineered with UV-blocking ceramic particles for UPF 50+ sun protection.',
    definition:
      'A high-density polyester woven fabric infused with UV-blocking ceramic micro-particles, delivering certified UPF 50+ protection for outdoor apparel and sportswear applications.',
    problem:
      'Outdoor workers and athletes need a durable, lightweight fabric that blocks at least 98% of UVA and UVB radiation without compromising breathability or comfort during extended sun exposure.',
    howItWorks:
      'UV-absorbing ceramic particles (titanium dioxide and zinc oxide) are incorporated into the polyester filament during extrusion, creating a permanent UV barrier that cannot wash out. The tight woven construction further reduces UV transmission through physical blockage. Fabric weight: 120 gsm, 60-inch width, plain weave.',
    audience:
      'Sportswear brands, outdoor apparel manufacturers, workwear suppliers, and swimwear companies requiring certified UPF 50+ protection in a lightweight breathable fabric.',
    ai_use_cases: ['Sun-protective outdoor clothing', 'Performance sportswear', 'Industrial workwear uniforms'],
    ai_specs: {
      weight: '120 gsm',
      width: '152 cm (60")',
      composition: '100% Polyester',
      construction: 'Plain weave',
      finish: 'UV-blocking ceramic infusion + water repellent',
      upf_rating: 'UPF 50+ (blocks 98% UVA/UVB)',
      certification: 'UV STANDARD 801, OEKO-TEX Standard 100',
    },
    ai_comparison:
      'Compared to standard polyester fabrics, this UPF 50+ version provides permanent UV protection that does not wash out, whereas topical UPF coatings degrade after 20-30 washes. It is lighter than cotton sun-protective fabrics with superior moisture management.',
    ai_faq: [
      {
        q: 'Does the UV protection wash out over time?',
        a: 'No. The UV-blocking ceramic particles are embedded in the polyester filament during extrusion, making the protection permanent and unaffected by washing.',
      },
      {
        q: 'What is the minimum order quantity?',
        a: 'Minimum 500 meters per color. Custom colors available at 1000 meters minimum.',
      },
    ],
  },
  {
    id: 'sun-nylon-upf50',
    name: 'UPF 50+ Nylon Sun Protection Fabric',
    category: 'SUN_PROTECTION',
    region: ['EU', 'US', 'ASIA', 'AU'],
    skill: 'intermediate',
    environment: ['outdoor', 'sportswear', 'apparel', 'marine'],
    water_condition: ['sweat', 'humidity', 'sea spray'],
    safety_level: 'high',
    use_case: ['swimwear', 'activewear', 'fishing apparel', 'marine clothing'],
    safety_rules: ['machine wash cold', 'do not bleach', 'drip dry', 'do not iron'],
    desc: 'Lightweight nylon woven fabric with UPF 50+ protection, quick-dry performance, and chlorine resistance for swimwear.',
    definition:
      'A lightweight nylon 6.6 woven fabric engineered with UV-blocking additives and hydrophobic finish, delivering UPF 50+ sun protection with quick-dry performance and chlorine resistance.',
    problem:
      'Swimwear and activewear brands need a fabric that provides certifiable sun protection while maintaining stretch recovery, chlorine resistance, and a soft hand feel for all-day wear in and out of water.',
    howItWorks:
      'UV-stabilizing additives are masterbatched into the nylon 6.6 polymer before fiber extrusion. A C6 fluorocarbon-free hydrophobic finish accelerates drying. The ripstop weave adds tear strength without adding weight. Fabric weight: 80 gsm, 58-inch width.',
    audience:
      'Swimwear brands, activewear manufacturers, fishing apparel companies, and marine clothing suppliers requiring chlorine-resistant UPF 50+ nylon.',
    ai_use_cases: ['Performance swimwear', 'Fishing and marine apparel', 'High-exposure outdoor sportswear'],
    ai_specs: {
      weight: '80 gsm',
      width: '147 cm (58")',
      composition: '100% Nylon 6.6',
      construction: 'Ripstop weave',
      finish: 'Hydrophobic C6-free + UV stabilizer masterbatch',
      upf_rating: 'UPF 50+',
      certification: 'UV STANDARD 801, OEKO-TEX Standard 100',
    },
    ai_comparison:
      'Compared to polyester sun-protection fabrics, this nylon variant offers superior stretch recovery and abrasion resistance, making it better suited for swimwear and activewear. It dries faster than cotton-based UV protective fabrics.',
    ai_faq: [
      {
        q: 'Is this fabric chlorine resistant?',
        a: 'Yes. Nylon 6.6 offers excellent chlorine resistance. Regular exposure to chlorinated water will not degrade the fabric or its UV protection properties.',
      },
      {
        q: 'Can this fabric be printed?',
        a: 'Yes. The fabric accepts sublimation printing for vibrant all-over patterns. MOQ for custom prints is 1000 meters.',
      },
    ],
  },
  {
    id: 'sun-cotton-synth-blend',
    name: 'UPF 50+ Cotton-Synthetic Blend',
    category: 'SUN_PROTECTION',
    region: ['EU', 'US', 'ASIA', 'AU'],
    skill: 'beginner',
    environment: ['outdoor', 'apparel', 'casual wear'],
    water_condition: ['sweat', 'humidity'],
    safety_level: 'high',
    use_case: ['casual shirts', 'work shirts', 'childrenswear', 'outdoor leisurewear'],
    safety_rules: ['machine wash warm', 'tumble dry medium', 'iron medium', 'do not bleach'],
    desc: 'Cotton-polyester blend fabric with dense weave construction providing UPF 50+ sun protection with natural hand feel.',
    definition:
      'A 65% cotton / 35% polyester blend fabric with optimized tight-weave construction achieving certified UPF 50+ sun protection while retaining the natural breathability and hand feel of cotton.',
    problem:
      'Apparel brands need a fabric that offers certified sun protection while maintaining the comfort, breathability, and natural aesthetic of cotton for everyday casual and workwear garments.',
    howItWorks:
      'The tight 2/1 twill weave construction physically blocks UV transmission. The polyester component adds durability and wrinkle resistance, while cotton provides natural moisture absorption and comfort. Fabric weight: 180 gsm, 60-inch width. A specialty optical brightener enhances UV absorption.',
    audience:
      'Casual apparel brands, workwear manufacturers, childrenswear companies, and outdoor leisure brands requiring UPF-rated cotton-rich fabrics.',
    ai_use_cases: [
      'Everyday sun-protective casual wear',
      'UPF-rated work shirts and uniforms',
      'Childrens outdoor clothing',
    ],
    ai_specs: {
      weight: '180 gsm',
      width: '152 cm (60")',
      composition: '65% Cotton / 35% Polyester',
      construction: '2/1 Twill weave',
      finish: 'Optical brightener + wrinkle-resistant',
      upf_rating: 'UPF 50+',
      certification: 'UV STANDARD 801, OEKO-TEX Standard 100',
    },
    ai_comparison:
      'Compared to 100% synthetic UV-protective fabrics, this cotton blend offers superior breathability and a natural hand feel preferred for casual wear. It has a higher weight (180 gsm) than performance UV fabrics but provides better drape and comfort for everyday use.',
    ai_faq: [
      {
        q: 'Does the cotton content affect UV protection when wet?',
        a: 'UPF rating is certified for both dry and wet conditions. The tight weave construction maintains protection even when damp.',
      },
      {
        q: 'Is this fabric available in yarn-dyed stripes?',
        a: 'Yes. Yarn-dyed stripe and check patterns are available with 800 meters MOQ per colorway.',
      },
    ],
  },
  {
    id: 'sun-protection-mesh',
    name: 'Sun Protection Mesh Fabric',
    category: 'SUN_PROTECTION',
    region: ['EU', 'US', 'ASIA', 'GLOBAL'],
    skill: 'beginner',
    environment: ['outdoor', 'industrial', 'agricultural', 'construction'],
    water_condition: ['rain', 'humidity'],
    safety_level: 'medium',
    use_case: ['protective covers', 'shade nets', 'construction netting', 'outdoor curtains'],
    safety_rules: ['hand wash', 'do not bleach', 'air dry', 'do not iron'],
    desc: 'Open-weave mesh fabric with UV-stabilized polyester yarns providing UPF 50+ protection for industrial and outdoor applications.',
    definition:
      'A UV-stabilized polyester mesh fabric with controlled open porosity delivering UPF 50+ protection, designed for shade structures, protective covers, and industrial screening applications.',
    problem:
      'Industrial and agricultural users need a durable mesh fabric that blocks harmful UV radiation while allowing airflow and light transmission, without degrading under prolonged sun exposure.',
    howItWorks:
      'UV-stabilized polyester monofilament yarns are woven in a leno or plain mesh construction. The open area percentage is precisely controlled to balance UV blockage with airflow. Yarns contain HALS (hindered amine light stabilizers) for long-term UV resistance. Fabric weight: 200 gsm, 72-inch width, various mesh openings.',
    audience:
      'Shade manufacturers, construction companies, agricultural suppliers, and outdoor equipment brands needing UV-blocking mesh for non-apparel applications.',
    ai_use_cases: ['Shade sails and outdoor canopies', 'Construction safety netting', 'Agricultural shade structures'],
    ai_specs: {
      weight: '200 gsm',
      width: '183 cm (72")',
      composition: '100% UV-Stabilized Polyester',
      construction: 'Leno weave mesh',
      finish: 'HALS UV stabilizer + anti-fungal treatment',
      upf_rating: 'UPF 50+',
      open_area: '30% open for airflow',
      certification: 'UV STANDARD 801',
    },
    ai_comparison:
      'Compared to solid UV-protective fabrics, this mesh provides controlled ventilation and light transmission, making it suitable for shade structures rather than apparel. It is significantly more durable against prolonged sun exposure than non-stabilized polyethylene meshes.',
    ai_faq: [
      {
        q: 'How long does the UV protection last outdoors?',
        a: 'The HALS stabilization provides effective UV protection for 5-7 years of continuous outdoor exposure, depending on geographic UV intensity.',
      },
      {
        q: 'What mesh opening sizes are available?',
        a: 'Standard mesh openings from 0.5mm to 5mm. Custom openings are available for specific shading and airflow requirements.',
      },
    ],
  },
  {
    id: 'wp-pu-coated',
    name: 'Waterproof Breathable PU Coated Fabric',
    category: 'WATERPROOF',
    region: ['EU', 'US', 'ASIA'],
    skill: 'advanced',
    environment: ['outdoor', 'sportswear', 'apparel', 'industrial'],
    water_condition: ['rain', 'heavy rain', 'snow'],
    safety_level: 'high',
    use_case: ['rainwear', 'ski jackets', 'outdoor shells', 'workwear'],
    safety_rules: ['machine wash warm', 'no fabric softener', 'tumble dry low', 'reapply DWR periodically'],
    desc: 'Polyester fabric with microporous PU coating providing 10,000mm hydrostatic head waterproofness with 5,000 g/m2/24h breathability.',
    definition:
      'A polyester woven fabric with microporous polyurethane coating delivering 10,000mm hydrostatic head waterproof protection with 5,000 g/m2/24h moisture vapor transmission rate for breathable comfort.',
    problem:
      'Outdoor apparel brands need a cost-effective waterproof fabric that prevents water penetration while allowing sweat vapor to escape, without the high cost of PTFE membrane laminates.',
    howItWorks:
      'A microporous PU coating is applied via wet coagulation process, creating a sponge-like structure with billions of microscopic pores. These pores are small enough to block liquid water but large enough for water vapor molecules to pass through. A DWR (durable water repellent) finish on the face fabric causes water to bead and roll off. Fabric weight: 150 gsm, 60-inch width.',
    audience:
      'Outdoor apparel manufacturers, rainwear brands, ski wear companies, and workwear suppliers seeking a cost-effective waterproof breathable solution.',
    ai_use_cases: ['Rain jackets and pants', 'Ski and snowboard outerwear', 'Waterproof workwear uniforms'],
    ai_specs: {
      weight: '150 gsm',
      width: '152 cm (60")',
      composition: '100% Polyester / PU coating',
      construction: 'Ripstop weave',
      finish: 'Microporous PU coating + C6-free DWR',
      hydrostatic_head: '10,000 mm H2O',
      breathability: '5,000 g/m2/24h MVTR',
      certification: 'OEKO-TEX Standard 100',
    },
    ai_comparison:
      'Compared to PTFE (Gore-Tex style) laminates, this PU coated fabric offers a lower cost solution with adequate waterproofness for most conditions. It has slightly lower breathability but significantly better cost efficiency for volume production.',
    ai_faq: [
      {
        q: 'What is the minimum order quantity?',
        a: 'Minimum 1000 meters per color. Custom colors available at 2000 meters MOQ.',
      },
      {
        q: 'Can this fabric be laminated to other materials?',
        a: 'Yes. It can be laminated to inner liners for 2-layer or 3-layer constructions. Contact our technical team for lamination specifications.',
      },
    ],
  },
  {
    id: 'wp-tpu-laminate',
    name: 'Waterproof TPU Laminated Fabric',
    category: 'WATERPROOF',
    region: ['EU', 'US', 'ASIA'],
    skill: 'professional',
    environment: ['outdoor', 'industrial', 'marine', 'medical'],
    water_condition: ['rain', 'immersion', 'chemical splash'],
    safety_level: 'high',
    use_case: ['protective clothing', 'marine covers', 'medical barriers', 'industrial aprons'],
    safety_rules: ['clean with damp cloth', 'do not machine wash', 'store dry', 'avoid sharp objects'],
    desc: 'Heavy-duty nylon fabric with TPU film lamination offering 20,000mm hydrostatic head waterproofness and chemical resistance.',
    definition:
      'A heavy-duty nylon 66 fabric laminated with thermoplastic polyurethane (TPU) film, delivering 20,000mm hydrostatic head waterproof protection with chemical splash resistance and flexibility down to -30°C.',
    problem:
      'Industrial and marine users need a fully waterproof fabric that withstands chemical exposure, extreme temperatures, and repeated flexing without delaminating or cracking.',
    howItWorks:
      'A TPU film is thermally laminated to a high-tenacity nylon 66 substrate using hot-melt adhesive. TPU provides excellent hydrolytic stability, chemical resistance, and flexibility at low temperatures. The lamination process creates a continuous waterproof barrier. Fabric weight: 280 gsm, 60-inch width.',
    audience:
      'Industrial protective clothing manufacturers, marine equipment suppliers, medical barrier fabric buyers, and chemical handling safety brands.',
    ai_use_cases: ['Chemical protective clothing', 'Marine boat covers and tarps', 'Medical barrier fabrics'],
    ai_specs: {
      weight: '280 gsm',
      width: '152 cm (60")',
      composition: '100% Nylon 66 + TPU film laminate',
      construction: 'High-tenacity woven',
      finish: 'TPU thermal laminate both sides',
      hydrostatic_head: '20,000 mm H2O',
      temperature_range: '-30°C to +80°C',
      certification: 'OEKO-TEX Standard 100',
    },
    ai_comparison:
      'Compared to PU-coated fabrics, this TPU laminate offers superior chemical resistance, higher waterproofness, and better low-temperature flexibility. It is heavier and less breathable but provides maximum protection for demanding industrial applications.',
    ai_faq: [
      {
        q: 'Is this fabric weldable?',
        a: 'Yes. TPU laminates are RF weldable and heat sealable for constructing fully waterproof seams and enclosures.',
      },
      {
        q: 'What colors are available?',
        a: 'Standard colors: black, navy, olive green, orange. Custom colors require 2000 meters MOQ.',
      },
    ],
  },
  {
    id: 'wp-pvc-coated',
    name: 'Waterproof PVC Coated Polyester',
    category: 'WATERPROOF',
    region: ['EU', 'US', 'ASIA', 'GLOBAL'],
    skill: 'professional',
    environment: ['industrial', 'agricultural', 'marine', 'construction'],
    water_condition: ['rain', 'immersion', 'heavy moisture'],
    safety_level: 'medium',
    use_case: ['tarpaulins', 'truck covers', 'tents', 'inflatable structures'],
    safety_rules: ['clean with mild soap', 'do not machine wash', 'store dry folded', 'avoid prolonged UV exposure'],
    desc: 'High-tenacity polyester scrim with double-sided PVC coating for maximum waterproofness and tear strength.',
    definition:
      'A high-tenacity polyester scrim fabric with double-sided PVC coating, delivering complete waterproofness with 30,000mm hydrostatic head and exceptional tear strength for industrial cover applications.',
    problem:
      'Industrial and logistics operators need a fabric that provides total waterproof protection with high tear and tensile strength for heavy-duty covers, tarpaulins, and temporary structures.',
    howItWorks:
      'A high-tenacity polyester yarn scrim is coated on both sides with plasticized PVC using a knife-over-roll coating process. The PVC forms a continuous impermeable barrier. The scrim provides dimensional stability and load distribution. Anti-fungal and UV stabilizers are added to the PVC compound. Fabric weight: 650 gsm, 78-inch width.',
    audience:
      'Tarpaulin manufacturers, logistics companies, tent makers, agricultural suppliers, and construction material suppliers.',
    ai_use_cases: ['Heavy-duty tarpaulins and covers', 'Truck and container covers', 'Temporary shelters and tents'],
    ai_specs: {
      weight: '650 gsm',
      width: '198 cm (78")',
      composition: 'Polyester scrim / PVC coating both sides',
      construction: 'Woven scrim with PVC coating',
      finish: 'UV stabilized + anti-fungal + flame retardant',
      hydrostatic_head: '30,000+ mm H2O',
      tear_strength: '400 N (warp), 350 N (weft)',
      certification: 'BS 7837 flame retardant',
    },
    ai_comparison:
      'Compared to TPU or PU waterproof fabrics, PVC-coated polyester offers the highest waterproofness and tear strength at the lowest cost. It is heavier, less flexible, and non-breathable, making it suited for industrial covers rather than apparel.',
    ai_faq: [
      {
        q: 'Is this fabric weldable?',
        a: 'Yes. PVC-coated fabrics are weldable using hot air, hot wedge, or high-frequency welding for seam construction.',
      },
      {
        q: 'What is the expected outdoor lifespan?',
        a: 'With adequate UV stabilization, 5-8 years of continuous outdoor use. We offer different UV stabilization grades based on expected exposure.',
      },
    ],
  },
  {
    id: 'wp-breathable-membrane',
    name: 'Waterproof Breathable Membrane Fabric',
    category: 'WATERPROOF',
    region: ['EU', 'US', 'ASIA'],
    skill: 'professional',
    environment: ['outdoor', 'sportswear', 'apparel', 'military'],
    water_condition: ['rain', 'heavy rain', 'snow', 'sleet'],
    safety_level: 'high',
    use_case: ['premium outerwear', 'military gear', 'expedition wear', 'mountaineering apparel'],
    safety_rules: ['machine wash warm', 'no fabric softener', 'tumble dry low', 'reapply DWR after cleaning'],
    desc: 'Premium 3-layer laminate with ePTFE membrane delivering 30,000mm hydrostatic head and 15,000 g/m2/24h breathability.',
    definition:
      'A premium 3-layer fabric system featuring an expanded PTFE (ePTFE) membrane laminated between a nylon face fabric and a knit backer, delivering 30,000mm hydrostatic head waterproofness with 15,000 g/m2/24h breathability.',
    problem:
      'Premium outdoor and military brands need the highest level of waterproof-breathable performance for extreme weather conditions, where both complete waterproofness and maximum breathability are non-negotiable.',
    howItWorks:
      'The ePTFE membrane contains billions of microscopic pores per square centimeter - 20,000x smaller than a water droplet but 700x larger than a water vapor molecule. This allows sweat vapor to escape while blocking liquid water. The 3-layer construction protects the delicate membrane. Fabric weight: 260 gsm, 60-inch width.',
    audience:
      'Premium outdoor apparel brands, military gear manufacturers, expedition equipment companies, and mountaineering brands requiring maximum waterproof-breathable performance.',
    ai_use_cases: ['Professional mountaineering outerwear', 'Military waterproof gear', 'Extreme expedition clothing'],
    ai_specs: {
      weight: '260 gsm',
      width: '152 cm (60")',
      composition: 'Face: 100% Nylon / Membrane: ePTFE / Backer: 100% Nylon tricot',
      construction: '3-layer laminate',
      finish: 'C8 DWR (Zonyl-free option available)',
      hydrostatic_head: '30,000 mm H2O',
      breathability: '15,000 g/m2/24h MVTR',
      certification: 'OEKO-TEX Standard 100, bluesign certified',
    },
    ai_comparison:
      'Compared to PU-coated waterproof fabrics, this ePTFE membrane provides 3x the breathability while maintaining superior waterproofness. It is more expensive but represents the gold standard for high-exertion activities in wet conditions.',
    ai_faq: [
      {
        q: 'How does this compare to Gore-Tex Pro?',
        a: 'Performance is comparable to Gore-Tex Pro with 30K/15K ratings. Our membrane uses similar ePTFE technology with proprietary processing for optimized moisture vapor transfer.',
      },
      {
        q: 'Can this be used for sleeping bags?',
        a: 'Yes. The 3-layer construction is suitable for bivvy bags, sleeping bag covers, and tent footprints requiring maximum waterproofness.',
      },
    ],
  },
  {
    id: 'wp-seam-sealed',
    name: 'Waterproof Seam-Sealed Fabric',
    category: 'WATERPROOF',
    region: ['EU', 'US', 'ASIA'],
    skill: 'advanced',
    environment: ['outdoor', 'sportswear', 'apparel'],
    water_condition: ['rain', 'heavy rain'],
    safety_level: 'high',
    use_case: ['rain jackets', 'tent flysheets', 'dry bags', 'waders'],
    safety_rules: ['machine wash cold', 'do not bleach', 'drip dry', 'store unrolled'],
    desc: 'Pre-taped seam-sealable polyester fabric with factory-applied hot-melt seam tape for guaranteed waterproof construction.',
    definition:
      'A waterproof polyester fabric engineered with seam-sealing compatibility, featuring factory-applied PU hot-melt seam tape that creates fully waterproof garment and gear construction.',
    problem:
      'Manufacturers need a waterproof fabric system where seams - the weakest point in any waterproof garment - can be reliably sealed to prevent water ingress through needle holes.',
    howItWorks:
      'The fabric (either PU-coated or TPU-laminated polyester) has a heat-activated PU hot-melt seam tape pre-applied or available for post-application. During garment construction, taped seams are heat-pressed, melting the adhesive into the needle holes and creating a continuous waterproof barrier. Fabric weight: 160 gsm, 60-inch width.',
    audience:
      'Rainwear manufacturers, tent and outdoor gear producers, dry bag makers, and wader manufacturers requiring seam-sealed waterproof construction.',
    ai_use_cases: [
      'Seam-sealed rain jackets',
      'Waterproof tent and shelter manufacturing',
      'Dry bags and waterproof gear',
    ],
    ai_specs: {
      weight: '160 gsm',
      width: '152 cm (60")',
      composition: '100% Polyester + PU coating + seam tape',
      construction: 'Ripstop weave',
      finish: 'PU coating + hot-melt seam tape (20mm width)',
      hydrostatic_head: '8,000 mm H2O (fabric), 6,000 mm H2O (seam)',
      seam_tape: '20mm PU hot-melt, application temp 120-140°C',
      certification: 'OEKO-TEX Standard 100',
    },
    ai_comparison:
      'Compared to non-seam-sealable waterproof fabrics, this system guarantees seam integrity equal to the fabric itself. Untaped waterproof fabrics can leak up to 50% of their protection through needle holes. The pre-matched seam tape system reduces manufacturing complexity.',
    ai_faq: [
      {
        q: 'What seam tape width is recommended?',
        a: '20mm tape is standard for most applications. 15mm and 25mm widths are also available for specific seam types.',
      },
      {
        q: 'What heat press specifications are needed?',
        a: 'Temperature 120-140°C, pressure 3-5 bar, dwell time 15-25 seconds depending on fabric thickness.',
      },
    ],
  },
  {
    id: 'qd-moisture-wicking-poly',
    name: 'Moisture-Wicking Polyester Fabric',
    category: 'QUICK_DRY',
    region: ['EU', 'US', 'ASIA', 'GLOBAL'],
    skill: 'beginner',
    environment: ['sportswear', 'apparel', 'activewear'],
    water_condition: ['sweat', 'humidity'],
    safety_level: 'low',
    use_case: ['t-shirts', 'sports uniforms', 'base layers', 'fitness wear'],
    safety_rules: ['machine wash cold', 'do not bleach', 'tumble dry low', 'do not iron'],
    desc: 'Engineered polyester knit fabric with capillary-action moisture wicking and rapid drying performance.',
    definition:
      'An engineered polyester knit fabric with modified cross-section fibers that create capillary channels for active moisture transport from skin to fabric surface, achieving rapid evaporation.',
    problem:
      'Athletic and activewear brands need a fabric that actively pulls sweat away from the skin and spreads it across the fabric surface for fast evaporation, preventing clammy discomfort during exercise.',
    howItWorks:
      'Multi-lobal (trilobal or quad-lobal) polyester fibers create capillary channels between filaments that draw moisture via capillary action. The increased surface area accelerates evaporation. Hydrophilic finishes enhance water affinity. Fabric weight: 140 gsm, 68-inch width, single jersey knit.',
    audience:
      'Athletic apparel brands, sports uniform manufacturers, fitness wear companies, and base layer producers.',
    ai_use_cases: ['Performance t-shirts and singlets', 'Sports team uniforms', 'Fitness and gym apparel'],
    ai_specs: {
      weight: '140 gsm',
      width: '173 cm (68")',
      composition: '100% Polyester (multi-lobal filament)',
      construction: 'Single jersey knit',
      finish: 'Hydrophilic wicking finish + anti-static',
      drying_time: '20 minutes (standard conditions)',
      moisture_wicking: 'AATCC 197 vertical wicking: 15cm / 10 minutes',
      certification: 'OEKO-TEX Standard 100',
    },
    ai_comparison:
      'Compared to standard polyester knits, this moisture-wicking variant moves sweat 3x faster from skin to fabric surface. It dries 4x faster than cotton under identical conditions, preventing post-exercise chill.',
    ai_faq: [
      {
        q: 'Does the wicking performance diminish after washing?',
        a: 'Initial wicking performance lasts 50-80 washes. The hydrophilic finish gradually reduces but capillary action from the fiber cross-section provides permanent mechanical wicking.',
      },
      {
        q: 'Can this fabric be printed?',
        a: 'Yes. Sublimation printing works excellently with this fabric for vibrant, permanent team uniforms and patterns.',
      },
    ],
  },
  {
    id: 'qd-nylon-tricot',
    name: 'Quick-Dry Nylon Tricot',
    category: 'QUICK_DRY',
    region: ['EU', 'US', 'ASIA'],
    skill: 'intermediate',
    environment: ['sportswear', 'apparel', 'swimwear'],
    water_condition: ['sweat', 'water immersion', 'humidity'],
    safety_level: 'low',
    use_case: ['sports liners', 'swimwear', 'activewear', 'lingerie'],
    safety_rules: ['machine wash cold', 'do not bleach', 'drip dry', 'do not iron'],
    desc: 'Lightweight nylon tricot knit with hydrophobic finish for ultra-fast drying and soft hand feel.',
    definition:
      'A lightweight nylon tricot warp-knit fabric treated with a durable hydrophobic finish that accelerates water runoff and evaporation, ideal for next-to-skin apparel requiring rapid drying.',
    problem:
      'Athletic and swimwear brands need a super-lightweight fabric that dries almost instantly after water exposure, while providing a smooth, soft hand feel against the skin without sticking when wet.',
    howItWorks:
      'The tricot warp knit construction creates a smooth surface on one side with a micro-textured back that minimizes skin contact. A fluorocarbon-free hydrophobic finish causes water to bead and roll off, while the thin filament nylon minimizes water absorption. Fabric weight: 60 gsm, 60-inch width.',
    audience:
      'Sportswear liner manufacturers, swimwear brands, activewear companies, and lingerie producers requiring quick-dry performance.',
    ai_use_cases: ['Sports short liners', 'Performance swimwear', 'Quick-dry base layers'],
    ai_specs: {
      weight: '60 gsm',
      width: '152 cm (60")',
      composition: '100% Nylon',
      construction: 'Tricot warp knit',
      finish: 'C6-free hydrophobic + anti-static',
      drying_time: '10 minutes (standard conditions)',
      certification: 'OEKO-TEX Standard 100',
    },
    ai_comparison:
      'Compared to moisture-wicking polyester knits, this nylon tricot is significantly lighter (60 vs 140 gsm) and dries faster due to lower water absorption of nylon filaments. It is ideal as a liner fabric but less durable than heavier knits for outerwear.',
    ai_faq: [
      {
        q: 'Is this fabric chlorine resistant?',
        a: 'Standard nylon has limited chlorine resistance. For frequent chlorinated pool use, we recommend our chlorinated-resistant variant with added stabilizers.',
      },
      {
        q: 'What finishes are available?',
        a: 'Standard hydrophobic finish. Optional anti-microbial, aloe vera, or cooling finishes can be applied.',
      },
    ],
  },
  {
    id: 'qd-hydrophilic-treated',
    name: 'Hydrophilic Treated Quick-Dry Fabric',
    category: 'QUICK_DRY',
    region: ['EU', 'US', 'ASIA'],
    skill: 'advanced',
    environment: ['sportswear', 'apparel', 'outdoor'],
    water_condition: ['sweat', 'humidity', 'light rain'],
    safety_level: 'low',
    use_case: ['compression wear', 'running gear', 'base layers', 'outdoor apparel'],
    safety_rules: ['machine wash cold', 'do not bleach', 'tumble dry low', 'do not iron'],
    desc: 'Bicomponent polyester fabric with permanent hydrophilic core-sheath fiber technology for continuous moisture transport.',
    definition:
      'A bicomponent polyester fabric with permanent hydrophilic treatment grafted at the fiber level, ensuring continuous moisture transport and quick-dry performance that never washes out.',
    problem:
      'Performance apparel brands need a moisture management fabric where the wicking property is permanent and cannot wash out, unlike topical wicking finishes that degrade after repeated laundering.',
    howItWorks:
      'Bicomponent fibers have a hydrophobic polyester core and a hydrophilic polyester sheath. The sheath permanently attracts and channels moisture, while the core provides strength. Moisture moves from the skin side through the fabric to the outer surface where it spreads and evaporates rapidly. Fabric weight: 160 gsm, 62-inch width, interlock knit.',
    audience:
      'Compression wear brands, running apparel manufacturers, outdoor base layer producers, and high-performance activewear companies.',
    ai_use_cases: ['Technical compression garments', 'Running and trail apparel', 'Performance outdoor base layers'],
    ai_specs: {
      weight: '160 gsm',
      width: '157 cm (62")',
      composition: '100% Bicomponent Polyester (core-sheath)',
      construction: 'Interlock knit',
      finish: 'Permanent hydrophilic (fiber-grafted) + anti-microbial',
      drying_time: '15 minutes (standard conditions)',
      moisture_management: 'AATCC 195: 4.0 (excellent)',
      certification: 'OEKO-TEX Standard 100',
    },
    ai_comparison:
      'Compared to fabrics with topical wicking finishes, this permanently hydrophilic fabric maintains 100% of its wicking performance after 100+ washes. Topical finishes typically lose 50% of effectiveness within 30 washes.',
    ai_faq: [
      {
        q: 'How is the hydrophilic treatment permanent?',
        a: 'The hydrophilic chemistry is copolymerized into the polyester sheath during fiber extrusion, making it structurally part of the fiber rather than a surface coating.',
      },
      {
        q: 'Is this suitable for compression garments?',
        a: 'Yes. It provides 20-30% stretch with excellent recovery, making it ideal for graduated compression applications.',
      },
    ],
  },
  {
    id: 'qd-dri-release',
    name: 'Dri-Release Polyester-Cotton Blend',
    category: 'QUICK_DRY',
    region: ['EU', 'US', 'ASIA'],
    skill: 'beginner',
    environment: ['apparel', 'casual wear', 'sportswear'],
    water_condition: ['sweat', 'humidity'],
    safety_level: 'low',
    use_case: ['polo shirts', 'casual shirts', 'uniforms', 'golf wear'],
    safety_rules: ['machine wash warm', 'tumble dry medium', 'iron medium', 'do not bleach'],
    desc: 'Engineered polyester-cotton blend combining the comfort of cotton with moisture-wicking quick-dry performance.',
    definition:
      'An engineered polyester (65%) / cotton (35%) blend fabric that combines the natural hand feel and breathability of cotton with the moisture-wicking and quick-drying performance of synthetic fibers.',
    problem:
      'Casual and uniform apparel brands need a fabric that looks and feels like cotton but performs like synthetics - wicking moisture, drying quickly, resisting wrinkles, and maintaining color vibrancy through repeated washing.',
    howItWorks:
      'Modified polyester fibers with capillary channels are blended with fine-count cotton yarns in a jersey or pique knit. The polyester component actively wicks moisture, while cotton provides natural comfort and static reduction. A wicking finish enhances moisture transport. Fabric weight: 180 gsm, 66-inch width.',
    audience:
      'Casual apparel brands, uniform manufacturers, golf wear companies, and corporate apparel suppliers seeking cotton-rich fabrics with technical performance.',
    ai_use_cases: ['Performance polo shirts', 'Wrinkle-resistant casual shirts', 'Corporate and hospitality uniforms'],
    ai_specs: {
      weight: '180 gsm',
      width: '168 cm (66")',
      composition: '65% Polyester / 35% Cotton',
      construction: 'Pique knit',
      finish: 'Moisture-wicking + wrinkle-resistant + anti-pilling',
      drying_time: '25 minutes (standard conditions)',
      certification: 'OEKO-TEX Standard 100',
    },
    ai_comparison:
      'Compared to 100% cotton pique, this blend dries 3x faster, resists wrinkles significantly better, and maintains color for more washes. Compared to 100% polyester, it offers superior comfort and natural appearance preferred in business casual settings.',
    ai_faq: [
      {
        q: 'Does this fabric pill?',
        a: 'Anti-pilling treatment and high-quality fiber selection minimize pilling. Performance is rated Grade 4 on the pilling scale (1-5).',
      },
      {
        q: 'What colors are available in stock?',
        a: '12 stock colors including white, navy, black, charcoal, light blue, and burgundy. Custom colors require 1500 meters MOQ.',
      },
    ],
  },
  {
    id: 'ab-silver-ion',
    name: 'Silver Ion Antibacterial Fabric',
    category: 'ANTIBACTERIAL',
    region: ['EU', 'US', 'ASIA', 'GLOBAL'],
    skill: 'advanced',
    environment: ['sportswear', 'apparel', 'medical', 'hospitality'],
    water_condition: ['sweat', 'humidity', 'moisture'],
    safety_level: 'high',
    use_case: ['sports apparel', 'underwear', 'medical textiles', 'hotel linens'],
    safety_rules: ['machine wash warm', 'do not bleach', 'tumble dry low', 'do not use fabric softener'],
    desc: 'Silver-ion embedded polyester fabric providing broad-spectrum antimicrobial protection with >99.9% bacterial reduction.',
    definition:
      'A polyester fabric with silver-ion antimicrobial technology integrated during fiber extrusion, delivering >99.9% bacterial reduction against Staphylococcus aureus and Klebsiella pneumoniae with permanent durability.',
    problem:
      'Apparel and textile brands need a fabric that actively inhibits bacterial growth, preventing odor formation and maintaining hygiene during prolonged use, without relying on topical treatments that wash out.',
    howItWorks:
      'Silver ions (Ag+) are incorporated into the polyester polymer matrix during chip compounding before fiber extrusion. As moisture contacts the fabric, silver ions are slowly released, disrupting bacterial cell membranes and enzyme function. The reservoir of silver within the fiber ensures sustained release for the fabric lifetime. Fabric weight: 155 gsm, 64-inch width.',
    audience:
      'Sportswear brands, underwear manufacturers, medical textile companies, and hospitality linen suppliers requiring durable antimicrobial performance.',
    ai_use_cases: ['Odor-resistant sportswear', 'Antimicrobial underwear and socks', 'Medical and healthcare textiles'],
    ai_specs: {
      weight: '155 gsm',
      width: '163 cm (64")',
      composition: '100% Polyester with silver-ion masterbatch',
      construction: 'Single jersey knit',
      finish: 'Silver-ion antimicrobial + moisture-wicking',
      bacterial_reduction: '>99.9% against S. aureus, K. pneumoniae',
      durability: '50+ washes (AATCC 100)',
      certification: 'EPA registered, OEKO-TEX Standard 100, JIS L 1902',
    },
    ai_comparison:
      'Compared to topical antimicrobial treatments, silver-ion embedded technology provides permanent protection that does not wash off. Topical silver or triclosan treatments typically lose effectiveness after 20-30 washes.',
    ai_faq: [
      {
        q: 'Is the silver safe for skin contact?',
        a: 'Yes. The silver ions are released at sub-toxic concentrations that are safe for human skin. The fabric is dermatologically tested and OEKO-TEX certified.',
      },
      {
        q: 'Does the antimicrobial affect the fabric color?',
        a: 'The silver masterbatch may cause a slight off-white cast in light colors. Dark colors are unaffected. We can adjust the formulation for critical shade matching.',
      },
    ],
  },
  {
    id: 'ab-zinc-oxide',
    name: 'Zinc Oxide Antimicrobial Fabric',
    category: 'ANTIBACTERIAL',
    region: ['EU', 'US', 'ASIA'],
    skill: 'advanced',
    environment: ['apparel', 'medical', 'home textiles'],
    water_condition: ['humidity', 'moisture', 'sweat'],
    safety_level: 'high',
    use_case: ['baby clothing', 'medical gowns', 'bed linens', 'face masks'],
    safety_rules: ['machine wash warm', 'do not bleach', 'tumble dry low', 'do not iron high'],
    desc: 'Cotton-polyester blend fabric with zinc oxide nanoparticle treatment providing antimicrobial, anti-odor, and UV-blocking properties.',
    definition:
      'A cotton-polyester blend fabric treated with zinc oxide (ZnO) nanoparticles that provide broad-spectrum antimicrobial activity with additional UV-blocking and anti-odor benefits.',
    problem:
      'Medical and baby apparel brands need a fabric with antimicrobial protection that is also gentle on sensitive skin, non-irritating, and free from heavy metal concerns sometimes associated with silver treatments.',
    howItWorks:
      'Zinc oxide nanoparticles are bound to fiber surfaces using a reactive binder that withstands washing. ZnO generates reactive oxygen species (ROS) under UV/visible light that damage bacterial cell walls. It also provides physical UV blocking and absorbs sweat molecules that cause odor. Fabric weight: 170 gsm, 60-inch width.',
    audience:
      'Baby clothing manufacturers, medical textile suppliers, home linen brands, and face mask producers requiring gentle but effective antimicrobial protection.',
    ai_use_cases: ['Hypoallergenic baby apparel', 'Antimicrobial medical textiles', 'Anti-odor bed linens'],
    ai_specs: {
      weight: '170 gsm',
      width: '152 cm (60")',
      composition: '50% Cotton / 50% Polyester',
      construction: 'Plain weave',
      finish: 'Zinc oxide nanoparticle + binder system',
      bacterial_reduction: '>99% against S. aureus, E. coli',
      durability: '30+ washes',
      certification: 'OEKO-TEX Standard 100, ISO 20743',
    },
    ai_comparison:
      'Compared to silver-ion antimicrobial fabrics, zinc oxide offers a milder antimicrobial effect with the added benefit of UV protection. It is more suitable for sensitive skin applications but has lower wash durability than melt-embedded silver technologies.',
    ai_faq: [
      {
        q: 'Is zinc oxide safe for baby skin?',
        a: 'Yes. Zinc oxide is widely used in baby diaper rash creams and is considered one of the safest antimicrobial agents for sensitive skin applications.',
      },
      {
        q: 'Does the treatment affect fabric breathability?',
        a: 'No. The nanoparticle treatment is applied at the fiber surface without blocking fabric porosity. Breathability remains comparable to untreated fabric.',
      },
    ],
  },
  {
    id: 'ab-chitosan',
    name: 'Chitosan Treated Antibacterial Fabric',
    category: 'ANTIBACTERIAL',
    region: ['EU', 'US', 'ASIA'],
    skill: 'advanced',
    environment: ['medical', 'apparel', 'home textiles'],
    water_condition: ['moisture', 'humidity'],
    safety_level: 'high',
    use_case: ['wound dressings', 'medical apparel', 'bedding', 'eco-textiles'],
    safety_rules: ['gentle machine wash', 'do not bleach', 'air dry', 'do not iron'],
    desc: 'Biobased chitosan-treated fabric derived from crustacean shells, providing natural antibacterial protection with biodegradability.',
    definition:
      'A biobased antimicrobial fabric treated with chitosan (derived from crustacean chitin), providing natural broad-spectrum antibacterial activity with biodegradability and biocompatibility for medical and eco-conscious applications.',
    problem:
      'Eco-conscious medical and apparel brands need a biodegradable antimicrobial finish derived from renewable sources rather than heavy metals or synthetic chemicals.',
    howItWorks:
      'Chitosan (deacetylated chitin) is dissolved in an acidic solution and applied to the fabric via pad-dry-cure process. The positively charged chitosan molecules bind to negatively charged bacterial cell membranes, disrupting their integrity and causing cell death. Chitosan also forms a film that inhibits bacterial adhesion. Fabric weight: 130 gsm, 60-inch width, Tencel-cotton blend substrate.',
    audience:
      'Medical textile manufacturers, eco-friendly apparel brands, bedding companies, and wound care product suppliers seeking natural antimicrobial solutions.',
    ai_use_cases: [
      'Natural antimicrobial wound dressings',
      'Eco-friendly medical apparel',
      'Biodegradable home textiles',
    ],
    ai_specs: {
      weight: '130 gsm',
      width: '152 cm (60")',
      composition: '70% Tencel / 30% Cotton + chitosan treatment',
      construction: 'Plain weave',
      finish: 'Chitosan biopolymer pad-dry-cure',
      bacterial_reduction: '>95% against S. aureus, E. coli',
      durability: '20+ gentle washes',
      certification: 'OEKO-TEX Standard 100, ISO 20743, biodegradable',
    },
    ai_comparison:
      'Compared to synthetic antimicrobials like silver or zinc, chitosan offers biodegradability and renewable sourcing. It has lower wash durability (20 washes vs 50+) but is fully compostable at end of life.',
    ai_faq: [
      {
        q: 'Is chitosan vegan-friendly?',
        a: 'Chitosan is derived from crustacean shells. For a vegan alternative, we offer a chitosan-like biopolymer derived from fungal sources.',
      },
      {
        q: 'Does chitosan cause skin irritation?',
        a: 'Chitosan is biocompatible and non-irritating. It is widely used in wound dressings for its hemostatic and healing properties.',
      },
    ],
  },
  {
    id: 'ab-photocatalytic',
    name: 'Photocatalytic Self-Cleaning Fabric',
    category: 'ANTIBACTERIAL',
    region: ['EU', 'US', 'ASIA'],
    skill: 'professional',
    environment: ['outdoor', 'apparel', 'industrial', 'architecture'],
    water_condition: ['humidity', 'rain', 'moisture'],
    safety_level: 'medium',
    use_case: ['self-cleaning clothing', 'outdoor upholstery', 'architectural textiles', 'face masks'],
    safety_rules: ['hand wash or spot clean', 'do not bleach', 'air dry', 'avoid abrasive cleaning'],
    desc: 'TiO2-coated fabric with photocatalytic self-cleaning and antibacterial properties activated by light exposure.',
    definition:
      'A fabric coated with titanium dioxide (TiO2) nanoparticles that activate under UV/visible light to generate reactive oxygen species, breaking down organic stains, bacteria, and odors for self-cleaning action.',
    problem:
      'Outdoor apparel and textile brands need a fabric that actively breaks down organic contaminants, bacteria, and odors using ambient light, reducing the need for frequent washing and extending garment life.',
    howItWorks:
      'TiO2 nanoparticles are durably bound to fiber surfaces. When exposed to UV or visible light (including indoor lighting), TiO2 generates electron-hole pairs that produce hydroxyl radicals and superoxide ions. These reactive species oxidize organic compounds - including stains, bacteria, and odor molecules - breaking them down into CO2 and water. Fabric weight: 190 gsm, 60-inch width.',
    audience:
      'Innovative apparel brands, outdoor equipment manufacturers, architectural textile suppliers, and face mask producers seeking self-cleaning fabric technology.',
    ai_use_cases: ['Self-cleaning outdoor apparel', 'Anti-odor face masks', 'Stain-resistant architectural textiles'],
    ai_specs: {
      weight: '190 gsm',
      width: '152 cm (60")',
      composition: '100% Polyester + TiO2 coating',
      construction: 'Dobby weave',
      finish: 'TiO2 photocatalytic coating + DWR',
      bacterial_reduction: '>99% under light exposure (ISO 27447)',
      stain_degradation: 'Visible stain reduction in 4-8 hours sunlight',
      durability: '30+ washes',
      certification: 'OEKO-TEX Standard 100',
    },
    ai_comparison:
      'Compared to passive antimicrobial fabrics, photocatalytic fabric actively destroys organic matter rather than merely inhibiting bacterial growth. It requires light activation, so it performs best in outdoor or well-lit environments.',
    ai_faq: [
      {
        q: 'Does this work in indoor lighting?',
        a: 'Yes, though slower than direct sunlight. Standard indoor fluorescent/LED lighting activates TiO2 at a reduced rate. Full UV sunlight provides the fastest self-cleaning action.',
      },
      {
        q: 'Is the TiO2 coating safe?',
        a: 'TiO2 is FDA-approved for food contact and widely used in sunscreens. The nanoparticles are immobilized on the fabric surface with a binder system, minimizing inhalation or skin absorption risk.',
      },
    ],
  },
  {
    id: 'st-4way-nylon-spandex',
    name: '4-Way Stretch Nylon-Spandex Fabric',
    category: 'STRETCH',
    region: ['EU', 'US', 'ASIA'],
    skill: 'advanced',
    environment: ['sportswear', 'apparel', 'swimwear'],
    water_condition: ['sweat', 'water immersion', 'humidity'],
    safety_level: 'medium',
    use_case: ['leggings', 'swimwear', 'cycling shorts', 'dancewear'],
    safety_rules: ['machine wash cold', 'do not bleach', 'drip dry', 'do not iron', 'avoid fabric softener'],
    desc: 'Premium nylon-spandex warp knit with 4-way stretch delivering superior recovery and shape retention for high-performance activewear.',
    definition:
      'A premium warp-knit fabric combining nylon 6.6 with high-denier spandex (Lycra-type), delivering 180% stretch in both warp and weft directions with exceptional recovery for compression and high-movement activewear.',
    problem:
      'Performance activewear brands need a stretch fabric that recovers fully after repeated stretching, maintains shape through dozens of wears and washes, and provides consistent compression without sagging.',
    howItWorks:
      'Nylon 6.6 filament yarns are knit with spandex core-spun yarns in a warp-knit construction (tricot or powernet). The spandex cores provide elastic recovery, while the nylon sheath protects the spandex and provides durability. The warp-knit structure allows independent stretch in both directions. Fabric weight: 200 gsm, 62-inch width.',
    audience:
      'Activewear brands, swimwear manufacturers, cycling apparel companies, and dancewear producers requiring high-performance 4-way stretch fabrics.',
    ai_use_cases: [
      'High-compression leggings and tights',
      'Competitive swimwear',
      'Professional cycling and triathlon wear',
    ],
    ai_specs: {
      weight: '200 gsm',
      width: '157 cm (62")',
      composition: '78% Nylon 6.6 / 22% Elastane (Lycra-type)',
      construction: 'Warp knit (powernet)',
      finish: 'Chlorine-resistant + anti-pilling + moisture-wicking',
      stretch: '180% warp, 180% weft',
      recovery: '>95% after 100% stretch (ASTM D3107)',
      certification: 'OEKO-TEX Standard 100',
    },
    ai_comparison:
      'Compared to 2-way stretch fabrics, this 4-way stretch construction allows freedom of movement in all directions. It provides superior compression and shape retention compared to circular knit stretch fabrics due to the powernet construction.',
    ai_faq: [
      {
        q: 'What spandex percentage options are available?',
        a: 'Standard 22%. Options range from 15% (lighter compression) to 30% (maximum compression). Higher spandex content increases cost and compression but may reduce durability.',
      },
      {
        q: 'Is this fabric suitable for plus sizes?',
        a: 'Yes. The 4-way stretch and high recovery make it excellent for inclusive sizing. We recommend higher spandex content (25%+) for plus-size applications.',
      },
    ],
  },
  {
    id: 'st-2way-polyester',
    name: '2-Way Stretch Polyester Fabric',
    category: 'STRETCH',
    region: ['EU', 'US', 'ASIA'],
    skill: 'intermediate',
    environment: ['apparel', 'sportswear', 'uniforms'],
    water_condition: ['sweat', 'humidity'],
    safety_level: 'low',
    use_case: ['pants', 'shorts', 'skirts', 'uniforms'],
    safety_rules: ['machine wash warm', 'tumble dry medium', 'iron medium', 'do not bleach'],
    desc: 'Mechanical stretch polyester woven fabric with warp-direction stretch for comfort in tailored and uniform applications.',
    definition:
      'A mechanically stretched polyester woven fabric (warp stretch only) created through a heat-setting process, designed for apparel applications requiring comfort stretch in a woven construction with a tailored appearance.',
    problem:
      'Uniform and casual apparel brands need a woven fabric with built-in comfort stretch that looks like a traditional woven but moves with the body, without the high cost and recovery issues of spandex-containing fabrics.',
    howItWorks:
      'Polyester filament yarns are mechanically stretched and heat-set in a controlled process that introduces micro-crimps in the warp yarns. This creates a spring-like structure that allows warp-direction stretch (15-20%) with recovery. The weft remains stable for shape retention. Fabric weight: 220 gsm, 60-inch width, 2/2 twill construction.',
    audience:
      'Uniform manufacturers, casual pants brands, school uniform suppliers, and corporate apparel companies requiring comfort stretch woven fabrics.',
    ai_use_cases: ['Comfort-fit uniform trousers', 'Casual stretch chino pants', 'Travel and commuter apparel'],
    ai_specs: {
      weight: '220 gsm',
      width: '152 cm (60")',
      composition: '100% Polyester (textured filament)',
      construction: '2/2 Twill weave',
      finish: 'Mechanical stretch heat-set + wrinkle-resistant + anti-static',
      stretch: '15-20% warp direction only',
      recovery: '>90% (ASTM D3107)',
      certification: 'OEKO-TEX Standard 100',
    },
    ai_comparison:
      'Compared to spandex-containing stretch wovens, this mechanical stretch polyester offers lower stretch (15-20% vs 30-50%) but zero spandex degradation issues. It maintains stretch performance for the life of the garment without the chloride or heat damage that affects spandex.',
    ai_faq: [
      {
        q: 'Does the stretch wear out over time?',
        a: 'The mechanical stretch is permanent as it is created through heat-setting of the polyester yarn structure. It will not degrade like spandex-based stretch fabrics.',
      },
      {
        q: 'Is this available as a twill only?',
        a: 'No. We offer this mechanical stretch technology in various weaves including twill, plain, and herringbone constructions.',
      },
    ],
  },
  {
    id: 'br-high-air-mesh',
    name: 'High Air Permeability Mesh Fabric',
    category: 'BREATHABLE',
    region: ['EU', 'US', 'ASIA', 'GLOBAL'],
    skill: 'beginner',
    environment: ['sportswear', 'apparel', 'industrial'],
    water_condition: ['sweat', 'humidity', 'heat'],
    safety_level: 'low',
    use_case: ['sports jerseys', 'lining fabrics', 'backpack mesh', 'filtration'],
    safety_rules: ['machine wash cold', 'do not bleach', 'air dry', 'do not iron'],
    desc: 'Polyester mesh fabric with high open-area construction delivering maximum airflow for ventilation applications.',
    definition:
      'A polyester monofilament mesh fabric with precisely controlled open area (40-60%) delivering maximum air permeability for ventilation, lining, and filtration applications.',
    problem:
      'Athletic apparel and industrial users need a fabric structure that maximizes air exchange for cooling and ventilation without compromising structural integrity or snag resistance.',
    howItWorks:
      'Polyester monofilament yarns are knit in a hexagonal or rhomboid mesh pattern with controlled hole size and open area. The rigid monofilament construction maintains mesh structure during use and washing. Air permeability is measured via ASTM D737. Fabric weight: 90 gsm, 64-inch width, various mesh sizes from 1mm to 10mm openings.',
    audience:
      'Sports jersey manufacturers, lining suppliers, backpack and footwear brands, and industrial filtration companies.',
    ai_use_cases: [
      'Ventilated sports jerseys and vests',
      'Breathable garment linings',
      'Industrial air filtration media',
    ],
    ai_specs: {
      weight: '90 gsm',
      width: '163 cm (64")',
      composition: '100% Polyester monofilament',
      construction: 'Warp knit mesh (hexagonal)',
      finish: 'Anti-static + UV stabilized',
      air_permeability: '250 cfm (ASTM D737)',
      open_area: '50%',
      certification: 'OEKO-TEX Standard 100',
    },
    ai_comparison:
      'Compared to woven mesh fabrics, this warp knit mesh offers higher production efficiency and better dimensional stability. Compared to solid knits, it provides 10x higher air permeability for maximum ventilation.',
    ai_faq: [
      {
        q: 'What hole sizes are available?',
        a: 'Standard openings from 1mm to 10mm. The 3mm opening is most popular for apparel ventilation applications.',
      },
      {
        q: 'Can this mesh be used as a filter media?',
        a: 'Yes. The precise and consistent hole size makes it suitable for coarse filtration and particle separation applications.',
      },
    ],
  },
  {
    id: 'br-microporous',
    name: 'Micro-porous Breathable Fabric',
    category: 'BREATHABLE',
    region: ['EU', 'US', 'ASIA'],
    skill: 'professional',
    environment: ['outdoor', 'apparel', 'medical', 'industrial'],
    water_condition: ['moisture', 'humidity', 'vapor'],
    safety_level: 'medium',
    use_case: ['protective apparel', 'medical gowns', 'cleanroom wear', 'industrial ventilation'],
    safety_rules: ['machine wash warm', 'do not bleach', 'tumble dry low', 'do not iron high'],
    desc: 'Micro-porous film-laminated fabric offering controlled air permeability with particle filtration for protective applications.',
    definition:
      'A fabric featuring a micro-porous polyolefin film laminated to a nonwoven or woven substrate, providing controlled air permeability for breathability with particle filtration for protective apparel.',
    problem:
      'Medical and industrial protective apparel need a fabric that allows air and moisture vapor exchange while filtering airborne particles and resisting liquid penetration.',
    howItWorks:
      'A micro-porous polyolefin film containing billions of tortuous-path micropores is thermally laminated to a polypropylene spunbond nonwoven or polyester woven substrate. The micropores are small enough to block water droplets and particles (>0.1 micron) but allow air and water vapor molecules to pass. Fabric weight: 120 gsm, 62-inch width (laminate on spunbond).',
    audience:
      'Medical protective apparel manufacturers, cleanroom supply companies, industrial safety brands, and protective clothing suppliers.',
    ai_use_cases: ['Medical isolation gowns', 'Cleanroom protective wear', 'Industrial dust-protective apparel'],
    ai_specs: {
      weight: '120 gsm',
      width: '157 cm (62")',
      composition: 'Polyolefin micro-porous film + PP spunbond substrate',
      construction: 'Film laminate on nonwoven',
      finish: 'Anti-static + fluid repellent',
      air_permeability: '50 cfm (ASTM D737)',
      particle_filtration: '>99% at 0.1 micron (ASTM F2299)',
      certification: 'EN 14126 (biological barrier), AAMI PB70 Level 3',
    },
    ai_comparison:
      'Compared to standard SMS (spunbond-meltblown-spunbond) fabrics, this micro-porous film laminate offers superior liquid barrier properties while maintaining breathability. It is less breathable than SMS but provides higher protection levels.',
    ai_faq: [
      {
        q: 'Is this fabric reusable?',
        a: 'Limited reuse (5-10 washes) depending on application. The micro-porous film maintains barrier properties through multiple washes. Single-use is recommended for high-risk medical applications.',
      },
      {
        q: 'What level of liquid barrier does it provide?',
        a: 'The standard version provides AAMI PB70 Level 3 barrier. A higher-weight version can achieve Level 4 (maximum barrier).',
      },
    ],
  },
  {
    id: 'eco-recycled-pet',
    name: 'Recycled Polyester Fabric (rPET)',
    category: 'ECO_FRIENDLY',
    region: ['EU', 'US', 'ASIA', 'GLOBAL'],
    skill: 'intermediate',
    environment: ['apparel', 'sportswear', 'outdoor', 'home textiles'],
    water_condition: ['sweat', 'humidity', 'rain'],
    safety_level: 'low',
    use_case: ['sportswear', 'casual apparel', 'bags', 'uniforms'],
    safety_rules: ['machine wash cold', 'do not bleach', 'tumble dry low', 'do not iron'],
    desc: 'Eco-conscious fabric made from 100% post-consumer recycled PET bottles, offering identical performance to virgin polyester.',
    definition:
      'A 100% recycled polyester (rPET) fabric manufactured from post-consumer PET bottle flake, processed into filament yarn through a closed-loop recycling system, delivering performance identical to virgin polyester with 50% lower carbon footprint.',
    problem:
      'Sustainable apparel brands need a recycled fabric that matches the performance, consistency, and processability of virgin polyester without premium pricing or quality compromises.',
    howItWorks:
      'Post-consumer PET bottles are collected, sorted, cleaned, shredded into flake, and processed through a melt-spinning system to produce recycled polyester filament yarns. The yarn is knit or woven into fabric. The process uses 50% less energy and reduces CO2 emissions by 50% compared to virgin polyester production. Global Recycled Standard (GRS) certified. Fabric weight: 150 gsm, 66-inch width, single jersey knit.',
    audience:
      'Sustainable apparel brands, eco-conscious sportswear manufacturers, corporate social responsibility uniform programs, and retailers requiring GRS-certified recycled materials.',
    ai_use_cases: [
      'Sustainable sportswear and activewear',
      'Eco-friendly corporate uniforms',
      'Recycled material casual apparel',
    ],
    ai_specs: {
      weight: '150 gsm',
      width: '168 cm (66")',
      composition: '100% Recycled Polyester (rPET)',
      construction: 'Single jersey knit',
      finish: 'Moisture-wicking + anti-pilling + GRS certified',
      recycled_content: '100% post-consumer PET bottles',
      certification: 'Global Recycled Standard (GRS), OEKO-TEX Standard 100, GOTS compliant dye house',
    },
    ai_comparison:
      'Compared to virgin polyester, this rPET fabric has identical physical properties and performance, with a 50% lower carbon footprint. It is more sustainable than organic cotton in water usage and land impact.',
    ai_faq: [
      {
        q: 'How many bottles are used per meter?',
        a: 'Approximately 12-15 PET bottles per meter of fabric (depending on fabric weight and width).',
      },
      {
        q: 'Is the quality the same as virgin polyester?',
        a: 'Yes. Our rPET filament is produced to virgin-grade specifications with identical tenacity, dyeability, and consistency.',
      },
    ],
  },
  {
    id: 'eco-organic-cotton',
    name: 'Organic Cotton Functional Fabric',
    category: 'ECO_FRIENDLY',
    region: ['EU', 'US', 'ASIA', 'GLOBAL'],
    skill: 'intermediate',
    environment: ['apparel', 'home textiles', 'baby products'],
    water_condition: ['sweat', 'humidity'],
    safety_level: 'high',
    use_case: ['organic apparel', 'baby clothing', 'bedding', 'underwear'],
    safety_rules: ['machine wash warm', 'do not bleach', 'tumble dry medium', 'iron medium'],
    desc: 'GOTS-certified organic cotton fabric with functional moisture management and wrinkle-resistant finishes.',
    definition:
      'A GOTS-certified organic cotton fabric enhanced with eco-friendly functional finishes for moisture management and wrinkle resistance, combining environmental responsibility with technical performance.',
    problem:
      'Organic and natural fiber brands need a cotton fabric that is certified organic but also offers the technical performance features (quick-dry, wrinkle resistance) that consumers expect from modern apparel.',
    howItWorks:
      '100% GOTS-certified organic cotton yarns are knit or woven, then treated with bio-based finishing agents derived from natural sources. A citric acid-based wrinkle-resistant finish replaces formaldehyde-based resins. A chitosan-based wicking finish provides moisture management. All finishes are GOTS-compliant. Fabric weight: 160 gsm, 64-inch width, jersey knit.',
    audience:
      'Organic apparel brands, baby product manufacturers, eco-friendly bedding companies, and sustainable underwear brands.',
    ai_use_cases: ['GOTS-certified organic t-shirts', 'Eco-friendly baby bodysuits', 'Sustainable bedding and linens'],
    ai_specs: {
      weight: '160 gsm',
      width: '163 cm (64")',
      composition: '100% Organic Cotton',
      construction: 'Jersey knit',
      finish: 'Bio-based wrinkle resistant + chitosan wicking',
      certifications: 'GOTS, OEKO-TEX Standard 100, Fair Trade, Non-GMO',
      shrinkage: '<3% (AATCC 135)',
    },
    ai_comparison:
      'Compared to conventional cotton functional fabrics, this organic version eliminates pesticide and synthetic fertilizer use while providing similar performance features. It has a higher material cost but offers complete supply chain transparency and environmental certification.',
    ai_faq: [
      {
        q: 'Are the functional finishes GOTS compliant?',
        a: 'Yes. All finishes used are approved for GOTS-certified processing. We use bio-based crosslinkers and natural antimicrobial agents.',
      },
      {
        q: 'What colors are available with GOTS certification?',
        a: 'We stock 15 GOTS-certified colors. Custom colors require GOTS-certified dye house processing with 1000 meters MOQ.',
      },
    ],
  },
  {
    id: 'eco-biodegradable-pla',
    name: 'Biodegradable PLA Fabric',
    category: 'ECO_FRIENDLY',
    region: ['EU', 'US', 'ASIA'],
    skill: 'professional',
    environment: ['apparel', 'agriculture', 'industrial', 'packaging'],
    water_condition: ['sweat', 'humidity', 'moisture'],
    safety_level: 'medium',
    use_case: ['disposable apparel', 'agricultural textiles', 'compostable packaging', 'short-life garments'],
    safety_rules: ['hand wash cold', 'do not bleach', 'air dry', 'do not iron high', 'compostable at end of life'],
    desc: 'Biodegradable fabric made from polylactic acid (PLA) derived from corn starch, compostable under industrial conditions.',
    definition:
      'A biodegradable nonwoven and woven fabric manufactured from polylactic acid (PLA) biopolymer derived from annually renewable corn starch, fully compostable under industrial composting conditions (EN 13432).',
    problem:
      'Brands seeking circular economy solutions need a fabric that performs like polyester in use but biodegrades completely at end of life without microplastic pollution.',
    howItWorks:
      'PLA (polylactic acid) is derived from corn starch fermentation, polymerized, and extruded into fibers. PLA fibers are then needle-punched into nonwoven fabric or woven into textile. PLA is compostable in industrial facilities (58°C, 90 days) where it hydrolyzes into lactic acid and ultimately CO2 and water. Fabric weight: 100 gsm, 72-inch width, needle-punched nonwoven.',
    audience:
      'Disposable apparel manufacturers, agricultural textile suppliers, compostable packaging companies, and circular economy focused apparel brands.',
    ai_use_cases: [
      'Compostable disposable gowns and covers',
      'Biodegradable agricultural ground covers',
      'Short-life promotional apparel',
    ],
    ai_specs: {
      weight: '100 gsm',
      width: '183 cm (72")',
      composition: '100% PLA (Polylactic Acid)',
      construction: 'Needle-punched nonwoven (woven option available)',
      finish: 'None (inherently hydrophobic)',
      biodegradability: 'EN 13432 certified, 90 days industrial composting',
      certification: 'OK Compost INDUSTRIAL, ASTM D6400, EN 13432',
    },
    ai_comparison:
      'Compared to polypropylene nonwoven, PLA provides similar hydrophobicity and strength but is fully compostable at end of life. It has a lower melting point (170°C vs 165°C for PP, but PLA is softer) and is more expensive, but eliminates microplastic pollution.',
    ai_faq: [
      {
        q: 'Does PLA fabric biodegrade in home composting?',
        a: 'Standard PLA requires industrial composting conditions (58°C, controlled humidity). Home composting takes significantly longer. We offer a home-compostable variant using a modified PLA formulation.',
      },
      {
        q: 'Is PLA fabric suitable for apparel?',
        a: 'Limited uses in short-life or disposable apparel. PLA has a lower melting point (170°C), which restricts ironing and high-temperature washing. It is best suited for non-apparel or disposable applications.',
      },
    ],
  },
  {
    id: 'ice-silk-cooling-fabric',
    name: 'Ice Silk Cooling Sun Protection Fabric',
    category: 'SUN_PROTECTION',
    region: ['EU', 'US', 'ASIA', 'AU'],
    skill: 'intermediate',
    environment: ['outdoor', 'sportswear', 'apparel', 'summer'],
    water_condition: ['sweat', 'humidity'],
    safety_level: 'low',
    use_case: ['sun-protective summer clothing', 'hot-weather outdoor apparel', 'cooling sportswear'],
    safety_rules: ['machine wash cold', 'do not bleach', 'drip dry', 'do not iron'],
    desc: 'Ultra-thin ice silk fabric with instant cooling sensation and UPF 50+ sun protection.',
    definition:
      'An ultra-thin ice silk fabric combining advanced sun protection with an instant cooling feel, providing a silky smooth touch against the skin while effectively blocking harmful UV rays.',
    problem:
      'Summer apparel brands need a fabric that provides both effective sun protection and active cooling, keeping wearers comfortable in hot conditions without the heavy feel of traditional UV-protective fabrics.',
    howItWorks:
      'Ice silk filaments with modified cross-sections create a capillary structure that wicks moisture and conducts heat away from the skin. UV-blocking additives are incorporated during fiber extrusion for permanent UPF 50+ protection. The ultra-thin construction (80-120 gsm) maximizes breathability and cooling airflow. Fabric weight: 80-120 GSM, 58/60-inch width.',
    audience:
      'Summer apparel brands, sportswear manufacturers, outdoor recreation companies, and hot-climate clothing suppliers seeking lightweight UV-protective cooling fabrics.',
    ai_use_cases: ['Summer sun-protective shirts', 'Cooling hot-weather apparel', 'Ultra-light outdoor clothing'],
    ai_specs: {
      upf_rating: 'UPF 50+',
      cooling_effect: 'Instant cool touch',
      weight: '80-120 GSM',
      composition: '100% Nylon / Polyester',
      width: '58/60"',
      features: 'Cooling feel, sun protection, ultra-lightweight, silky touch',
      certification: 'OEKO-TEX',
    },
    ai_comparison:
      'Compared to traditional UPF 50+ fabrics, this ice silk variant adds active cooling properties through its specialized fiber structure and ultra-lightweight construction. It provides superior comfort in extreme heat compared to standard sun-protective fabrics.',
    ai_faq: [
      {
        q: 'Does the cooling effect wash out?',
        a: 'The cooling effect is inherent to the fiber structure and does not wash out. The ice silk filaments maintain their thermal conductivity for the life of the fabric.',
      },
      {
        q: 'What is the minimum order quantity?',
        a: 'Minimum 500 meters per color. Custom colors available at 1000 meters minimum.',
      },
    ],
  },
  {
    id: 'tactical-ripstop-fabric',
    name: 'Tactical Ripstop Nylon Fabric',
    category: 'WATERPROOF',
    region: ['EU', 'US', 'ASIA', 'GLOBAL'],
    skill: 'intermediate',
    environment: ['outdoor', 'industrial', 'military', 'tactical'],
    water_condition: ['rain', 'humidity', 'mud'],
    safety_level: 'medium',
    use_case: ['tactical vests', 'military uniforms', 'backpacks', 'workwear', 'outdoor gear'],
    safety_rules: ['machine wash warm', 'do not bleach', 'tumble dry low', 'reapply DWR as needed'],
    desc: 'Heavy-duty ripstop nylon fabric with tear-resistant reinforcement for tactical and workwear applications.',
    definition:
      'A heavy-duty nylon 66 fabric with reinforcing ripstop grids that prevent tear propagation, delivering exceptional durability with water-resistant and abrasion-resistant performance for demanding environments.',
    problem:
      'Tactical and workwear brands need a fabric that can withstand extreme abuse - resisting tears, abrasion, and water - while remaining lightweight enough for active use in the field.',
    howItWorks:
      'Reinforcing ripstop yarns are woven into the fabric at regular intervals, creating a grid structure that stops tears from propagating. Nylon 66 provides high tensile strength and abrasion resistance. A PU coating adds water resistance. Fabric weight: 150-250 GSM, 58/60-inch width, available with various coatings.',
    audience:
      'Tactical gear manufacturers, military uniform suppliers, workwear brands, backpack and outdoor equipment companies.',
    ai_use_cases: [
      'Tactical vests and load-bearing equipment',
      'Military field uniforms',
      'Heavy-duty backpacks and bags',
    ],
    ai_specs: {
      tear_strength: 'Warp >80N, Weft >60N',
      weight: '150-250 GSM',
      composition: '100% Nylon 66',
      width: '58/60"',
      features: 'Tear-resistant, abrasion-resistant, water-resistant, PU coating',
      certification: 'OEKO-TEX, REACH',
    },
    ai_comparison:
      'Compared to standard nylon fabrics, this ripstop construction prevents tear propagation even after puncture, making it significantly more durable in field conditions. It is heavier than pack fabrics but offers superior durability for tactical applications.',
    ai_faq: [
      {
        q: 'Can this fabric be printed with camouflage patterns?',
        a: 'Yes. The fabric accepts printing and coating. Camouflage patterns are available with 1000 meters MOQ per pattern.',
      },
      {
        q: 'Is the PU coating durable?',
        a: 'The PU coating provides water resistance for moderate rain. For extended wet conditions, we recommend our TPU laminated variant.',
      },
    ],
  },
  {
    id: 'taslan-waterproof-jacket-fabric',
    name: '228T Taslan Waterproof Jacket Fabric',
    category: 'WATERPROOF',
    region: ['EU', 'US', 'ASIA'],
    skill: 'intermediate',
    environment: ['outdoor', 'apparel', 'sportswear'],
    water_condition: ['rain', 'light rain', 'humidity'],
    safety_level: 'low',
    use_case: ['rain jackets', 'windbreakers', 'lightweight outerwear', 'travel wear'],
    safety_rules: ['machine wash cold', 'do not bleach', 'drip dry', 'do not iron high'],
    desc: 'Lightweight 228T Taslan nylon fabric with waterproof coating, purpose-built for outerwear.',
    definition:
      'A lightweight 228T Taslan nylon fabric with a tight weave construction and waterproof coating, delivering reliable weather protection with excellent drape, soft hand feel, and packable convenience for everyday outerwear.',
    problem:
      'Apparel brands need a lightweight, packable outerwear fabric that provides reliable rain protection without the bulk or noise of traditional waterproof fabrics, while maintaining a soft, garment-like hand feel.',
    howItWorks:
      'The 228T Taslan construction creates a dense, tight weave from textured nylon yarns that provides a soft, matte hand feel. A clear waterproof coating is applied to the back of the fabric, and a DWR (durable water repellent) finish is applied to the face. The lightweight 105 gsm construction allows for easy packing. Fabric weight: 105 GSM, 58/60-inch width.',
    audience:
      'Outerwear brands, rain jacket manufacturers, windbreaker producers, and travel apparel companies needing lightweight waterproof fabrics.',
    ai_use_cases: ['Packable rain jackets', 'Everyday windbreakers', 'Lightweight travel outerwear'],
    ai_specs: {
      construction: '228T Taslan',
      weight: '105 GSM',
      composition: '100% Nylon',
      width: '58/60"',
      features: 'Waterproof coating, lightweight, soft hand, DWR finish',
      certification: 'OEKO-TEX',
    },
    ai_comparison:
      'Compared to heavier waterproof fabrics, this 228T Taslan is significantly lighter (105 gsm) and packable, with a softer hand feel that resembles non-waterproof fabrics. It provides adequate protection for light to moderate rain but has lower hydrostatic head than heavy-duty waterproof fabrics.',
    ai_faq: [
      {
        q: 'Is this fabric seam-sealable?',
        a: 'Yes. The coating accepts seam tape for fully waterproof garment construction. We recommend PU seam tape applied at 120-140°C.',
      },
      {
        q: 'What colors are available in stock?',
        a: '10+ stock colors including black, navy, olive, burgundy, and light grey. Custom colors with 800 meters MOQ.',
      },
    ],
  },
  {
    id: '3-layer-hardshell-fabric',
    name: '3-Layer Hardshell Laminate Fabric',
    category: 'WATERPROOF',
    region: ['EU', 'US', 'ASIA'],
    skill: 'professional',
    environment: ['outdoor', 'sportswear', 'alpine', 'ski'],
    water_condition: ['rain', 'heavy rain', 'snow', 'sleet'],
    safety_level: 'high',
    use_case: ['alpine outerwear', 'ski jackets', 'mountaineering shells', 'high-intensity outdoor apparel'],
    safety_rules: ['machine wash warm', 'no fabric softener', 'tumble dry low', 'reapply DWR after cleaning'],
    desc: 'Professional-grade 3-layer laminate fabric with fully waterproof and breathable performance for extreme conditions.',
    definition:
      'A professional-grade 3-layer laminate combining a durable outer face fabric, a waterproof breathable membrane, and an inner liner in a single bonded construction, delivering 10,000-20,000mm hydrostatic head waterproofness with 8,000-15,000 g/m2/24h breathability.',
    problem:
      'Alpine and ski apparel brands need a fabric that provides complete weather protection while managing high sweat output during intense physical activity, all in a durable bonded construction that does not require a separate lining.',
    howItWorks:
      'A durable nylon or polyester face fabric is laminated to a PU or ePTFE waterproof breathable membrane, with a tricot or mesh backer bonded to the inner side. This 3-layer construction eliminates the need for a separate liner, reducing weight and bulk. The bonded construction also protects the membrane from abrasion and contamination. Fabric weight: 180-350 GSM, 58/60-inch width.',
    audience:
      'Premium outdoor apparel brands, ski wear manufacturers, mountaineering equipment companies, and high-performance outerwear brands.',
    ai_use_cases: [
      'Professional ski and snowboard outerwear',
      'Alpine mountaineering shells',
      'High-exertion rain protection',
    ],
    ai_specs: {
      water_column: '10,000-20,000mm',
      breathability: '8,000-15,000 g/m2/24h',
      weight: '180-350 GSM',
      composition: 'Face: Nylon/Polyester / Membrane: PU/EPTFE',
      width: '58/60"',
      features: '3-layer bonded, waterproof, breathable, windproof, PFAS-free option',
      certification: 'OEKO-TEX, BLUESIGN',
    },
    ai_comparison:
      'Compared to 2-layer waterproof constructions, this 3-layer laminate eliminates the need for a separate liner, reducing weight and improving next-to-skin comfort. It provides superior durability and consistent performance compared to coated fabrics, at a higher cost.',
    ai_faq: [
      {
        q: 'What membrane options are available?',
        a: 'We offer PU membrane (10K/8K) for value, ePTFE membrane (20K/15K) for premium performance, and PFAS-free membrane options for eco-conscious brands.',
      },
      {
        q: 'Is this fabric suitable for seam taping?',
        a: 'Yes. All our 3-layer laminates are seam-tape compatible. We recommend pre-taped rolls for consistent manufacturing quality.',
      },
    ],
  },
  {
    id: 'beach-swim-shorts-fabric',
    name: 'Quick-Dry Beach & Swim Shorts Fabric',
    category: 'QUICK_DRY',
    region: ['EU', 'US', 'ASIA', 'AU'],
    skill: 'intermediate',
    environment: ['swimwear', 'beachwear', 'sportswear', 'marine'],
    water_condition: ['water immersion', 'salt water', 'chlorinated water', 'sweat'],
    safety_level: 'low',
    use_case: ['board shorts', 'swim trunks', 'beachwear', 'resort wear'],
    safety_rules: ['machine wash cold', 'do not bleach', 'drip dry', 'do not iron', 'rinse after saltwater use'],
    desc: 'Lightweight quick-dry fabric designed for beach shorts, swim trunks, and resort wear.',
    definition:
      'A lightweight quick-dry fabric engineered for swimwear, combining 4-way stretch, chlorine and saltwater resistance, UV protection, and rapid drying for beach and pool apparel.',
    problem:
      'Swimwear brands need a fabric that dries rapidly after water exposure, resists chlorine and saltwater degradation, maintains color vibrancy, and provides comfortable stretch for active beach and pool wear.',
    howItWorks:
      'Polyester or nylon/spandex yarns are knit or woven with a hydrophobic finish that minimizes water absorption. The filament yarns have low moisture regain (<0.4%), and the open construction allows water to drain quickly. Chlorine-resistant additives prolong fabric life. Fabric weight: 90-150 GSM, 58/60-inch width, available in multiple weaves.',
    audience: 'Swimwear brands, beach apparel manufacturers, resort wear companies, and active beach lifestyle brands.',
    ai_use_cases: ['Performance board shorts', 'Swim trunks and beach shorts', 'Resort and vacation apparel'],
    ai_specs: {
      drying_time: '20-35 minutes',
      weight: '90-150 GSM',
      composition: '100% Polyester / Nylon/Spandex',
      width: '58/60"',
      features: 'Quick-dry, chlorine-resistant, UV-resistant, 4-way stretch',
      certification: 'OEKO-TEX',
    },
    ai_comparison:
      'Compared to standard polyester fabrics, this swim-specific fabric offers superior chlorine and saltwater resistance, faster drying, and better UV stability. It maintains color and stretch recovery significantly longer in pool and ocean environments.',
    ai_faq: [
      {
        q: 'How long does the fabric take to dry?',
        a: '20-35 minutes in standard conditions (25°C, 60% humidity). The hydrophobic finish and low-moisture-regain yarns ensure rapid water shedding.',
      },
      {
        q: 'Is the fabric resistant to sunscreen stains?',
        a: 'The fabric has good resistance to sunscreen staining. We recommend rinsing in cold water after use to maintain appearance.',
      },
    ],
  },
  {
    id: 'down-jacket-shell-fabric',
    name: 'Down-Proof Shell Fabric',
    category: 'BREATHABLE',
    region: ['EU', 'US', 'ASIA'],
    skill: 'advanced',
    environment: ['outdoor', 'apparel', 'cold weather'],
    water_condition: ['snow', 'light rain', 'humidity'],
    safety_level: 'low',
    use_case: ['down jackets', 'puffer vests', 'sleeping bags', 'insulated outerwear'],
    safety_rules: ['machine wash cold', 'do not bleach', 'tumble dry low with tennis balls', 'do not iron'],
    desc: 'Down-proof woven fabric designed for puffer jackets and insulated outerwear.',
    definition:
      'A tightly woven down-proof shell fabric that prevents down and feather leakage while maintaining breathability, water resistance, and windproof performance for insulated outerwear and sleeping bags.',
    problem:
      'Down apparel manufacturers need a lightweight shell fabric with a weave tight enough to prevent down migration and feather poking, while still allowing moisture vapor to escape and providing weather protection.',
    howItWorks:
      'Micro-denier nylon or polyester yarns are woven in a high-density plain or ripstop construction (>1000 Frazier rating ensures down-proof performance). A calender finish flattens the yarns to close any gaps. A DWR finish provides water resistance. Fabric weight: 40-80 GSM, 58/60-inch width.',
    audience: 'Down jacket manufacturers, sleeping bag producers, puffer vest makers, and insulated outerwear brands.',
    ai_use_cases: [
      'Lightweight down jackets and vests',
      'Down-filled sleeping bags',
      'Performance insulated outerwear',
    ],
    ai_specs: {
      down_proof_rating: '>1000 Frazier',
      weight: '40-80 GSM',
      composition: '100% Nylon / Polyester',
      width: '58/60"',
      features: 'Down-proof, water-resistant, windproof, lightweight, DWR',
      certification: 'OEKO-TEX, RDS',
    },
    ai_comparison:
      'Compared to standard lining fabrics, this down-proof shell prevents feather leakage through its ultra-tight weave construction. It is lighter than typical outer shell fabrics (40-80 gsm) while providing sufficient strength for down containment.',
    ai_faq: [
      {
        q: 'What is the minimum denier available?',
        a: 'We offer 10D to 40D yarns. 10D provides the lightest weight for ultralight jackets, while 40D offers increased durability for frequent-use garments.',
      },
      {
        q: 'Is this fabric compatible with down-proof seam construction?',
        a: 'Yes. Use a smaller needle (60/8 to 70/10) and down-proof seam tape or baffle construction to prevent down leakage at seams.',
      },
    ],
  },
  {
    id: 'graphene-thermal-fabric',
    name: 'Graphene Thermal Insulation Fabric',
    category: 'ANTIBACTERIAL',
    region: ['EU', 'US', 'ASIA'],
    skill: 'professional',
    environment: ['sportswear', 'apparel', 'cold weather', 'health'],
    water_condition: ['sweat', 'humidity'],
    safety_level: 'high',
    use_case: ['thermal underwear', 'winter sportswear', 'insulated linings', 'healthcare textiles'],
    safety_rules: [
      'machine wash cold',
      'do not bleach',
      'tumble dry low',
      'do not iron high',
      'do not use fabric softener',
    ],
    desc: 'Advanced graphene-infused thermal fabric providing superior warmth retention and antibacterial properties.',
    definition:
      'An advanced thermal fabric incorporating graphene particles into the fiber matrix, delivering far-infrared heat retention, 7A-grade antibacterial protection, and anti-static properties for performance thermal apparel.',
    problem:
      'Thermal apparel brands need a fabric that provides superior warmth without bulk, actively retains body heat through far-infrared technology, and offers antibacterial protection for all-day freshness during cold-weather activities.',
    howItWorks:
      'Graphene particles are masterbatched into polyester chips before fiber extrusion, creating graphene-infused filaments. When worn, the graphene absorbs body heat and re-emits it as far-infrared radiation, which penetrates tissue and creates a warming effect. The graphene also disrupts bacterial cell membranes, providing 7A-grade antibacterial protection. Fabric weight: 150-260 GSM, 58/60-inch width.',
    audience:
      'Thermal underwear manufacturers, winter sportswear brands, outdoor apparel companies, and healthcare textile suppliers.',
    ai_use_cases: ['Performance thermal base layers', 'Winter sports insulation', 'Antibacterial thermal linings'],
    ai_specs: {
      thermal_retention: 'Far-infrared emitting',
      antibacterial: '7A Grade',
      weight: '150-260 GSM',
      composition: 'Polyester/Graphene blends',
      width: '58/60"',
      features: 'Far-infrared heat retention, antibacterial, anti-static, durable',
      certification: 'OEKO-TEX, SGS',
    },
    ai_comparison:
      'Compared to traditional thermal fabrics (fleece, brushed back knits), this graphene-infused fabric actively generates far-infrared heat rather than just trapping body heat. It provides superior warmth-to-weight ratio with added antibacterial and anti-static benefits.',
    ai_faq: [
      {
        q: 'Does the graphene wear off with washing?',
        a: 'No. Graphene particles are embedded within the fiber matrix during extrusion, making the thermal and antibacterial properties permanent and wash-resistant.',
      },
      {
        q: 'Is graphene safe for skin contact?',
        a: 'Yes. Graphene is carbon-based and biocompatible. The particles are permanently encapsulated within the polyester fiber, preventing direct skin exposure.',
      },
    ],
  },
  {
    id: 'fleece-thermal-lining',
    name: 'Fleece Thermal Lining Fabric',
    category: 'QUICK_DRY',
    region: ['EU', 'US', 'ASIA', 'GLOBAL'],
    skill: 'beginner',
    environment: ['apparel', 'outdoor', 'cold weather'],
    water_condition: ['sweat', 'humidity', 'snow'],
    safety_level: 'low',
    use_case: ['jacket linings', 'outerwear insulation', 'cold-weather accessories', 'bonded garment liners'],
    safety_rules: ['machine wash warm', 'do not bleach', 'tumble dry low', 'do not iron'],
    desc: 'Soft fleece thermal lining fabric for insulation and comfort in cold-weather apparel.',
    definition:
      'A soft fleece thermal lining fabric with brushed surface that traps body heat while maintaining breathability, available in various weights for use as bonded or unbonded insulation in cold-weather garments.',
    problem:
      'Outerwear manufacturers need a lining fabric that provides effective thermal insulation with a soft, comfortable hand feel, while managing moisture and breathability to prevent overheating during active use.',
    howItWorks:
      'Polyester yarns are knit and the surface is mechanically brushed to create a raised fiber pile that traps still air for thermal insulation. The open knit structure allows moisture vapor to escape, preventing sweat buildup. Available in recycled polyester options. Fabric weight: 180-320 GSM, 58/60-inch width.',
    audience:
      'Outerwear manufacturers, jacket lining suppliers, cold-weather accessory makers, and bonded garment producers.',
    ai_use_cases: ['Insulated jacket linings', 'Cold-weather glove and hat liners', 'Bonded garment insulation layers'],
    ai_specs: {
      weight: '180-320 GSM',
      composition: '100% Polyester / Recycled Polyester',
      width: '58/60"',
      features: 'Thermal insulation, soft hand, breathable, moisture management',
      certification: 'OEKO-TEX, GRS',
    },
    ai_comparison:
      'Compared to synthetic sheet insulation (Thinsulate, PrimaLoft), this fleece lining offers better breathability and moisture management, a softer hand feel against skin, and lower cost. It provides less warmth per unit thickness but superior comfort for active use.',
    ai_faq: [
      {
        q: 'Can this fabric be bonded to outer shells?',
        a: 'Yes. It is compatible with flame lamination and adhesive bonding for 2-in-1 bonded garment construction.',
      },
      {
        q: 'Is recycled polyester available?',
        a: 'Yes. We offer GRS-certified recycled polyester versions in most weights. MOQ for recycled options is 1000 meters.',
      },
    ],
  },
  {
    id: 'rpet-recycled-nylon-fabric',
    name: 'rPET Recycled Nylon Fabric',
    category: 'ECO_FRIENDLY',
    region: ['EU', 'US', 'ASIA', 'GLOBAL'],
    skill: 'intermediate',
    environment: ['apparel', 'outdoor', 'sportswear', 'luggage'],
    water_condition: ['rain', 'humidity', 'sweat'],
    safety_level: 'low',
    use_case: ['sustainable outerwear', 'backpacks', 'luggage', 'swimwear', 'technical apparel'],
    safety_rules: ['machine wash warm', 'do not bleach', 'tumble dry low', 'do not iron'],
    desc: 'High-performance recycled nylon fabric made from post-industrial waste, delivering strength with sustainability.',
    definition:
      'A high-performance recycled nylon (rPET) fabric manufactured from regenerated nylon waste via mechanical recycling, maintaining the superior strength, durability, and quick-dry properties of virgin nylon with a significantly reduced environmental footprint.',
    problem:
      'Sustainable brands need a recycled nylon fabric that performs identically to virgin nylon in terms of strength, durability, and processing, without greenwashing or quality compromises.',
    howItWorks:
      'Post-industrial nylon waste is collected, sorted, cleaned, and mechanically shredded into chips. These chips are re-melted and extruded into virgin-quality nylon filaments. The process consumes 30% less energy than virgin nylon production and diverts waste from landfills. GRS certified. Fabric weight: 60-200 GSM, 58/60-inch width.',
    audience:
      'Sustainable outerwear brands, eco-conscious backpack manufacturers, luggage companies, and technical apparel brands requiring GRS-certified recycled nylon.',
    ai_use_cases: [
      'Sustainable outdoor shells and jackets',
      'Eco-friendly backpacks and luggage',
      'Recycled swimwear and sportswear',
    ],
    ai_specs: {
      recycled_content: '100% Recycled Nylon',
      weight: '60-200 GSM',
      composition: '100% Recycled Nylon / Recycled Nylon blends',
      width: '58/60"',
      features: 'Abrasion resistant, lightweight, quick-dry, UV resistant',
      certification: 'GRS, OEKO-TEX',
    },
    ai_comparison:
      'Compared to virgin nylon, this recycled version has identical physical and mechanical properties while reducing energy consumption by 30% and diverting industrial waste from landfills. It offers better abrasion resistance than recycled polyester for demanding applications.',
    ai_faq: [
      {
        q: 'Is the quality consistent with virgin nylon?',
        a: 'Yes. Our recycling process produces filament with the same tenacity, dyeability, and consistency as virgin nylon 6.6.',
      },
      {
        q: 'What is the carbon footprint reduction?',
        a: 'Approximately 30% energy reduction and 40% CO2 reduction compared to virgin nylon production.',
      },
    ],
  },
  {
    id: 'inherent-fr-fabric',
    name: 'Inherent FR Fabric',
    category: 'FLAME_RETARDANT',
    region: ['EU', 'US', 'ASIA', 'GLOBAL'],
    skill: 'professional',
    environment: ['industrial', 'military', 'electrical', 'welding'],
    water_condition: ['sweat', 'humidity', 'heat'],
    safety_level: 'high',
    use_case: [
      'welding gear',
      'electrical utility wear',
      'firefighter base layers',
      'military uniforms',
      'industrial workwear',
    ],
    safety_rules: [
      'machine wash warm',
      'do not bleach',
      'tumble dry low',
      'do not use fabric softener',
      'do not iron high',
    ],
    desc: 'Permanently flame-retardant fabric engineered for protective workwear and industrial safety applications.',
    definition:
      'An inherently flame-retardant fabric with FR properties built into the fiber itself that will not wash out or wear off, providing permanent fire protection with self-extinguishing performance for protective workwear.',
    problem:
      'Industrial safety managers need a FR fabric that provides permanent, non-degradable flame protection that cannot wash out, ensuring consistent safety performance throughout the garment lifespan without special handling.',
    howItWorks:
      'Modacrylic, aramid, and FR viscose fibers are blended and spun into yarns. The FR properties are inherent to the polymer chemistry of these fibers - they do not require topical treatment. When exposed to flame, the fabric forms a char that insulates the wearer and self-extinguishes. Fabric weight: 180-320 GSM, 58/60-inch width.',
    audience:
      'Industrial workwear manufacturers, electrical utility suppliers, military uniform producers, and protective clothing brands requiring permanent FR protection.',
    ai_use_cases: [
      'Welding and foundry protective wear',
      'Electrical utility arc flash protection',
      'Firefighter base layer garments',
    ],
    ai_specs: {
      fr_standard: 'EN 11611, EN 11612, NFPA 70E, ASTM D6413',
      weight: '180-320 GSM',
      composition: 'Modacrylic/Cotton / Aramid blends',
      width: '58/60"',
      features: 'Inherent FR (will not wash out), self-extinguishing, anti-static, moisture wicking',
      certification: 'OEKO-TEX, CE certified',
    },
    ai_comparison:
      'Compared to FR-treated (topical) fabrics, this inherent FR fabric maintains its flame-retardant properties for the entire garment lifespan because the FR chemistry is part of the fiber itself. Treated fabrics can lose FR effectiveness after 25-50 washes.',
    ai_faq: [
      {
        q: 'How many washes does the FR protection last?',
        a: 'The FR protection is permanent and will not wash out. The FR properties are inherent to the fiber, not a topical treatment, so they last for the life of the fabric.',
      },
      {
        q: 'What colors are available?',
        a: 'Standard colors: navy, royal blue, orange, khaki. Custom colors available with 1500 meters MOQ.',
      },
    ],
  },
  {
    id: 'fr-cotton-polyester-workwear-fabric',
    name: 'FR Cotton Polyester Workwear Fabric',
    category: 'FLAME_RETARDANT',
    region: ['EU', 'US', 'ASIA', 'GLOBAL'],
    skill: 'intermediate',
    environment: ['industrial', 'workwear', 'oil and gas', 'manufacturing'],
    water_condition: ['sweat', 'humidity', 'light oil'],
    safety_level: 'high',
    use_case: ['welding aprons', 'foundry workwear', 'electrical utility uniforms', 'oil and gas coveralls'],
    safety_rules: [
      'machine wash warm',
      'industrial laundry safe',
      'do not bleach',
      'tumble dry medium',
      '50+ wash FR durability',
    ],
    desc: 'Flame-retardant treated cotton/polyester blend fabric engineered for heavy-duty industrial workwear and uniform applications.',
    definition:
      'A flame-retardant treated cotton/polyester (60/40) blend fabric that combines the comfort and breathability of cotton with the durability of polyester, treated with a durable FR finish meeting international safety standards.',
    problem:
      'Industrial workwear brands need a FR fabric that offers the comfort and professional appearance of cotton-rich fabrics while meeting international safety standards, with FR effectiveness that withstands repeated industrial laundering.',
    howItWorks:
      'A 60% cotton / 40% polyester blend is treated with a phosphorus-based durable FR finish using a pad-dry-cure process. The FR finish crosslinks with the cellulose in cotton, creating a durable bond that withstands 50+ industrial launderings. The polyester component adds durability and wrinkle resistance. Fabric weight: 200-350 GSM, 58/60-inch width.',
    audience:
      'Industrial workwear manufacturers, welding safety suppliers, oil and gas uniform programs, and electrical utility clothing suppliers.',
    ai_use_cases: [
      'Welding and foundry workwear',
      'Electrical utility flame-resistant uniforms',
      'Oil and gas industry protective coveralls',
    ],
    ai_specs: {
      fr_standard: 'EN 11611, EN ISO 11612, NFPA 2112, ASTM F1506',
      weight: '200-350 GSM',
      composition: '60% Cotton / 40% Polyester (FR treated)',
      width: '58/60"',
      finish: 'Durable FR finish, anti-static, soil release',
      colors: 'Navy, Royal Blue, Orange, Red, Khaki, Grey',
      certification: 'OEKO-TEX, CE certified, UL listed',
    },
    ai_comparison:
      'Compared to 100% cotton FR fabrics, this cotton-polyester blend offers better durability, wrinkle resistance, and faster drying while maintaining similar FR protection. Compared to inherent FR aramid fabrics, it is more cost-effective and has a more comfortable natural hand feel.',
    ai_faq: [
      {
        q: 'How many industrial launderings does the FR treatment last?',
        a: 'The FR treatment is tested to maintain effectiveness for 50+ industrial launderings when washed according to recommended procedures.',
      },
      {
        q: 'Can this fabric be used for arc flash protection?',
        a: 'Yes. It meets NFPA 2112 and ASTM F1506 for arc flash protection. ATPV rating varies by fabric weight. Consult our technical team for specific ratings.',
      },
    ],
  },
  {
    id: 'arc-flash-welding-protection-fabric',
    name: 'Arc Flash & Welding Protection Fabric',
    category: 'FLAME_RETARDANT',
    region: ['EU', 'US', 'ASIA', 'GLOBAL'],
    skill: 'professional',
    environment: ['industrial', 'electrical', 'welding', 'heavy industry'],
    water_condition: ['sweat', 'heat', 'humidity'],
    safety_level: 'high',
    use_case: [
      'arc flash protection',
      'welding protection',
      'electrical safety wear',
      'heavy industrial protective clothing',
    ],
    safety_rules: [
      'machine wash warm',
      'do not bleach',
      'tumble dry low',
      'inspect regularly for damage',
      'replace if contaminated',
    ],
    desc: 'Heavyweight inherent FR fabric designed for arc flash protection and welding applications in high-risk industrial environments.',
    definition:
      'A heavyweight inherently flame-retardant fabric engineered from aramid and modacrylic fibers, providing arc thermal performance value (ATPV) ratings of 8-40 cal/cm2 with molten metal splash and welding spark resistance.',
    problem:
      'Electrical and welding safety managers need a fabric that provides certified arc flash protection with specific ATPV ratings, while also resisting molten metal splash and providing durable protection in the harshest industrial environments.',
    howItWorks:
      'Inherently FR aramid and modacrylic fibers are blended with FR viscose and anti-static fibers, then woven in a heavyweight construction. The fabric provides thermal insulation through char formation when exposed to arc flash or flame. ATPV rating is controlled by fabric weight and construction. Moisture-wicking properties enhance comfort. Fabric weight: 260-450 GSM, 58/60-inch width.',
    audience:
      'Electrical utility safety managers, welding supply companies, heavy industry protective clothing buyers, and arc flash safety equipment suppliers.',
    ai_use_cases: [
      'Arc flash rated electrical utility wear',
      'Welding protective clothing and aprons',
      'High-risk industrial thermal protection',
    ],
    ai_specs: {
      fr_standard: 'NFPA 70E, ASTM F1506, EN 61482-2, EN 11611',
      atpv_rating: '8-40 cal/cm2 (varies by weight)',
      weight: '260-450 GSM',
      composition: 'Aramid / Modacrylic / FR Viscose blends',
      width: '58/60"',
      features: 'Inherent FR, arc flash rated, molten metal resistance, anti-static, moisture wicking',
      certification: 'OEKO-TEX, CE Cat III, UL',
    },
    ai_comparison:
      'Compared to standard FR workwear fabrics, this arc flash-rated fabric provides certified ATPV protection levels with specific cal/cm2 ratings required for electrical safety compliance. It offers superior molten metal resistance compared to FR-treated cotton blends.',
    ai_faq: [
      {
        q: 'What ATPV ratings are available?',
        a: 'We offer fabrics with ATPV ratings from 8 cal/cm2 (light duty) to 40 cal/cm2 (heavy duty). The rating is determined by fabric weight and composition.',
      },
      {
        q: 'Is this fabric suitable for NFPA 70E compliance?',
        a: 'Yes. It meets NFPA 70E Hazard Risk Categories 1 through 4 depending on weight. Consult our specification sheet for category-specific recommendations.',
      },
    ],
  },
  {
    id: 'functional-fashion-fabric',
    name: 'Functional Fashion Fabric',
    category: 'OTHER',
    region: ['EU', 'US', 'ASIA'],
    skill: 'advanced',
    environment: ['apparel', 'fashion', 'sportswear', 'outdoor'],
    water_condition: ['sweat', 'humidity', 'light rain'],
    safety_level: 'low',
    use_case: ['running jackets', 'fashion outerwear', 'sportswear', 'urban apparel'],
    safety_rules: ['machine wash cold', 'do not bleach', 'tumble dry low', 'do not iron high'],
    desc: 'Premium nylon spandex blend fabric with DWR finish and TPU lamination combining fashion aesthetics with technical performance for active lifestyle apparel.',
    definition:
      'A premium nylon spandex blend woven fabric engineered with 4-way stretch, DWR (durable water repellent) finish, and TPU lamination, delivering oil repellency, easy care, and functional performance for fashion-forward activewear.',
    problem:
      'Fashion brands need a fabric that bridges the gap between style and function — offering technical performance features like water repellency and stretch while maintaining a premium hand feel, drape, and aesthetic suitable for contemporary fashion silhouettes.',
    howItWorks:
      'Nylon spandex blend yarns (20D-40D) are woven in a twill construction and treated with a DWR finish for water repellency, followed by TPU lamination for enhanced durability. The spandex content provides 4-way stretch with excellent recovery. The resulting fabric combines a soft, fabric-like hand feel with functional performance. Fabric weight: 80-150 GSM, 58/60-inch width.',
    audience:
      'Fashion-forward activewear brands, sportswear manufacturers, urban lifestyle apparel companies, and outdoor fashion labels seeking technical fabrics with premium aesthetics.',
    ai_use_cases: ['Fashion-forward running jackets', 'Technical urban outerwear', 'Performance lifestyle apparel'],
    ai_specs: {
      weight: '80-150 GSM',
      width: '147-152 cm (58-60")',
      composition: 'Nylon Spandex Blend',
      construction: 'Twill / Plain weave with 4-way stretch',
      finish: 'DWR + TPU lamination + oil repellent',
      stretch: '4-way stretch',
      features: 'Oil repellent, easy care, water resistant, breathable',
      certification: 'OEKO-TEX Standard 100, BLUESIGN',
    },
    ai_comparison:
      'Compared to standard fashion wovens, this functional fashion fabric adds water repellency, stretch, and durability. Compared to technical outdoor fabrics, it offers superior drape, soft hand feel, and fashion-appropriate aesthetics for lifestyle and urban wear.',
    ai_faq: [
      {
        q: 'What fabric weights are available for fashion applications?',
        a: 'We offer 80-150 GSM range. Lighter weights (80-100 GSM) for shirts and blouses, mid-weight (120-150 GSM) for jackets and outerwear.',
      },
      {
        q: 'Is the fabric available in fashion colors?',
        a: 'Yes. We offer fashion-forward color ranges with quick turnaround. Minimum 500 meters per color for standard shades.',
      },
    ],
  },
  {
    id: 'high-density-tactical-fabric',
    name: 'High Density Tactical Fabric',
    category: 'WATERPROOF',
    region: ['EU', 'US', 'ASIA', 'GLOBAL'],
    skill: 'professional',
    environment: ['tactical', 'outdoor', 'industrial', 'military'],
    water_condition: ['rain', 'mud', 'humidity'],
    safety_level: 'medium',
    use_case: ['hiking pants', 'tactical uniforms', 'field gear', 'outdoor workwear'],
    safety_rules: ['machine wash warm', 'do not bleach', 'tumble dry low', 'reapply DWR as needed'],
    desc: 'High-density woven nylon spandex tactical fabric with PU coating offering superior abrasion resistance and 4-way stretch mobility.',
    definition:
      'A high-density woven tactical fabric combining nylon spandex blend yarns with PU (polyurethane) coating, delivering exceptional abrasion resistance, high tensile strength, and 4-way stretch mobility for tactical and outdoor performance apparel.',
    problem:
      'Tactical and outdoor brands need a fabric that provides extreme durability and abrasion resistance without restricting movement — allowing operators to move freely while the fabric withstands rough terrain, brush, and repeated wear.',
    howItWorks:
      'High-density nylon yarns (75D) are woven with spandex in a tight plain weave construction, creating a dense fabric structure that resists abrasion and tearing. A PU coating adds water resistance and further enhances durability. The spandex content provides 4-way stretch for unrestricted mobility. Fabric weight: 180-250 GSM, 58/60-inch width.',
    audience:
      'Tactical gear manufacturers, military uniform suppliers, outdoor hiking apparel brands, and law enforcement equipment companies requiring abrasion-resistant stretch fabrics.',
    ai_use_cases: ['Tactical hiking and field pants', 'Law enforcement duty wear', 'Outdoor adventure apparel'],
    ai_specs: {
      weight: '180-250 GSM',
      width: '147-152 cm (58-60")',
      composition: 'Nylon Spandex Blend',
      construction: 'High-density plain weave',
      finish: 'PU coating + DWR + abrasion resistant finish',
      stretch: '4-way stretch',
      abrasion_resistance: 'ASTM D3884, high performance',
      certification: 'OEKO-TEX Standard 100',
    },
    ai_comparison:
      'Compared to standard tactical nylons without stretch, this high-density fabric provides 4-way mobility that is critical for tactical operations. Compared to stretch cotton tactical fabrics, it offers superior abrasion resistance, faster drying, and better durability in wet conditions.',
    ai_faq: [
      {
        q: 'What is the abrasion resistance rating?',
        a: 'Tested per ASTM D3884 with high-performance ratings. Specific cycle counts available upon request based on fabric weight and construction.',
      },
      {
        q: 'Is this fabric available in camouflage patterns?',
        a: 'Yes. Multi-cam, woodland, desert, and urban patterns available. Custom patterns require 2000 meters MOQ.',
      },
    ],
  },
  {
    id: 'triple-protection-workwear-fabric',
    name: 'Triple Protection Workwear Fabric',
    category: 'FLAME_RETARDANT',
    region: ['EU', 'US', 'ASIA', 'GLOBAL'],
    skill: 'advanced',
    environment: ['industrial', 'workwear', 'oil and gas', 'manufacturing'],
    water_condition: ['oil', 'water', 'stain', 'humidity'],
    safety_level: 'high',
    use_case: ['work pants', 'work jackets', 'industrial coveralls', 'chemical handling wear'],
    safety_rules: ['machine wash warm', 'industrial laundry safe', 'do not bleach', 'tumble dry medium'],
    desc: 'Triple protection polyester-cotton workwear fabric with oil repellent, waterproof, and stain-resistant performance for demanding industrial environments.',
    definition:
      'A heavy-duty polyester-cotton blend workwear fabric treated with advanced functional finishes providing triple protection — oil repellency, waterproof barrier, and stain resistance — for industrial and occupational apparel requiring multi-hazard defense.',
    problem:
      'Industrial workwear brands need a fabric that simultaneously resists oil absorption, blocks water penetration, and prevents stubborn stains from setting, while remaining breathable and comfortable for all-day wear in harsh environments.',
    howItWorks:
      'Polyester cotton blend yarns (32S) are woven in a twill construction and treated with a multi-functional finish system. A fluorochemical oil repellent creates a barrier against oil-based liquids, a water-repellent finish prevents water absorption, and a stain-release chemistry allows dirt and stains to wash out easily. Mechanical stretch adds comfort. Fabric weight: 200-300 GSM, 58/60-inch width.',
    audience:
      'Industrial workwear manufacturers, oil and gas uniform suppliers, chemical plant safety managers, and maintenance crew apparel providers requiring multi-protection work fabrics.',
    ai_use_cases: [
      'Oil and gas industry workwear',
      'Chemical handling protective apparel',
      'Heavy-duty industrial maintenance uniforms',
    ],
    ai_specs: {
      weight: '200-300 GSM',
      width: '147-152 cm (58-60")',
      composition: 'Polyester Cotton Blend',
      construction: 'Twill weave with mechanical stretch',
      finish: 'Oil repellent + waterproof + stain resistant + mechanical stretch',
      oil_repellency: 'AATCC 118, Grade 5+',
      waterproof_rating: 'ISO 811, 5000mm+ hydrostatic head',
      certification: 'OEKO-TEX Standard 100, CE certified',
    },
    ai_comparison:
      'Compared to standard workwear fabrics with single-function finishes, this triple protection fabric combines oil repellency, waterproofing, and stain resistance in one system. It offers better all-around protection than cotton workwear with a single DWR finish.',
    ai_faq: [
      {
        q: 'How long does the triple protection last?',
        a: 'The functional finishes maintain effectiveness through 30+ industrial launderings when washed according to recommended procedures.',
      },
      {
        q: 'Is the fabric breathable despite three finishes?',
        a: 'Yes. The advanced finish system is engineered to maintain breathability (MVTR 3000+ g/m2/24h) while providing multi-surface protection.',
      },
    ],
  },
  {
    id: 'outdoor-softshell-fabric',
    name: 'Outdoor Softshell Fabric',
    category: 'WATERPROOF',
    region: ['EU', 'US', 'ASIA'],
    skill: 'advanced',
    environment: ['outdoor', 'sportswear', 'apparel', 'alpine'],
    water_condition: ['snow', 'wind', 'light rain', 'humidity'],
    safety_level: 'low',
    use_case: ['softshell jackets', 'outdoor mid-layers', 'ski apparel', 'hiking wear'],
    safety_rules: ['machine wash warm', 'do not bleach', 'tumble dry low', 'reapply DWR as needed'],
    desc: 'Warm, windproof, and stretchable polyester-elastane softshell fabric engineered for outdoor performance mid-layer apparel.',
    definition:
      'A high-performance polyester-elastane softshell fabric combining thermal insulation, windproof membrane or construction, and bi-directional stretch, designed as a versatile mid-layer or stand-alone outer layer for outdoor activities.',
    problem:
      'Outdoor enthusiasts need a fabric that blocks wind and retains warmth without the bulk of traditional insulation, while providing stretch for freedom of movement during active pursuits like hiking, climbing, and skiing.',
    howItWorks:
      'Polyester yarns are knit or woven with elastane in a fleece-backed or membrane-laminated construction. A windproof membrane or tight weave blocks wind penetration, while the brushed fleece back traps body heat. The elastane provides 2-way or 4-way stretch for movement. DWR finish sheds light precipitation. Fabric weight: 250-350 GSM, 58/60-inch width.',
    audience:
      'Outdoor apparel brands, ski wear manufacturers, hiking gear companies, and alpine sportswear producers seeking warm, windproof, stretchable softshell fabrics.',
    ai_use_cases: ['All-weather softshell jackets', 'Ski touring mid-layers', 'Active outdoor insulation'],
    ai_specs: {
      weight: '250-350 GSM',
      width: '147-152 cm (58-60")',
      composition: 'Polyester + Elastane',
      construction: 'Woven face + fleece back / membrane laminate',
      finish: 'DWR + windproof membrane + anti-pilling',
      stretch: '2-way / 4-way stretch',
      features: 'Windproof, warm, stretchable, breathable, water repellent',
      certification: 'OEKO-TEX Standard 100',
    },
    ai_comparison:
      'Compared to hardshell fabrics, softshell offers superior breathability, stretch, and comfort for active use with adequate weather protection for most conditions. It is warmer than a hardshell but less waterproof, making it ideal for cold-weather activities with limited precipitation.',
    ai_faq: [
      {
        q: 'What temperature range is this fabric suitable for?',
        a: 'Depending on weight and layering, 5°C to -10°C as a stand-alone piece, or lower temperatures when used as a mid-layer under a hardshell.',
      },
      {
        q: 'Is the fabric breathable for high-exertion activities?',
        a: 'Yes. Softshell fabrics are designed for breathability during active use. Air permeability is controlled to balance wind resistance with moisture vapor escape.',
      },
    ],
  },
  {
    id: 'polyester-softshell-fabric',
    name: 'Polyester Softshell Fabric',
    category: 'QUICK_DRY',
    region: ['EU', 'US', 'ASIA'],
    skill: 'advanced',
    environment: ['sportswear', 'outdoor', 'apparel'],
    water_condition: ['sweat', 'humidity', 'light rain'],
    safety_level: 'low',
    use_case: ['softshell jackets', 'sports mid-layers', 'cycling wear', 'trail running jackets'],
    safety_rules: ['machine wash cold', 'do not bleach', 'tumble dry low', 'do not iron high'],
    desc: 'Lightweight 100% polyester softshell fabric with TPU lamination offering moisture-wicking breathability and 2-way stretch for active sports.',
    definition:
      'A lightweight 100% polyester softshell fabric with TPU (thermoplastic polyurethane) lamination and 2-way mechanical stretch, engineered for moisture-wicking performance, breathable weather protection, and active sport comfort.',
    problem:
      'Sports apparel brands need a lightweight softshell that manages moisture during high-exertion activities while providing wind and light rain protection, without the weight and bulk of traditional insulated softshells.',
    howItWorks:
      '100% polyester filament yarns (40D) are woven in a twill construction and laminated with a breathable TPU film. The TPU membrane blocks wind and light rain while allowing moisture vapor to escape. The mechanical stretch construction provides 2-way stretch without spandex, ensuring better durability and shape retention. Fabric weight: 150-220 GSM, 58/60-inch width.',
    audience:
      'Sports apparel manufacturers, cycling wear brands, trail running equipment companies, and lightweight outerwear producers requiring breathable weather protection.',
    ai_use_cases: ['Breathable softshell sports jackets', 'Windproof cycling mid-layers', 'Lightweight trail running shells'],
    ai_specs: {
      weight: '150-220 GSM',
      width: '147-152 cm (58-60")',
      composition: '100% Polyester',
      construction: 'Twill weave with mechanical stretch',
      finish: 'TPU lamination + moisture-wicking + DWR',
      stretch: '2-way mechanical stretch',
      breathability: 'ASTM E96, high MVTR',
      certification: 'OEKO-TEX Standard 100',
    },
    ai_comparison:
      'Compared to nylon softshells, this 100% polyester version offers better moisture wicking, faster drying, and lower cost. Compared to non-laminated stretch wovens, the TPU lamination provides superior wind and water resistance while maintaining breathability.',
    ai_faq: [
      {
        q: 'Can this fabric be used for year-round sports?',
        a: 'Yes. The 150 GSM variant is ideal for summer trail running and cycling. The 220 GSM variant provides additional warmth for cooler conditions.',
      },
      {
        q: 'Does mechanical stretch lose elasticity over time?',
        a: 'No. Mechanical stretch is permanent — it is engineered into the weave structure and does not degrade like spandex-based stretch. Performance is maintained for the life of the garment.',
      },
    ],
  },
  {
    id: 'quick-dry-sports-woven-fabric',
    name: 'Quick Dry Sports Woven Fabric',
    category: 'QUICK_DRY',
    region: ['EU', 'US', 'ASIA', 'GLOBAL'],
    skill: 'intermediate',
    environment: ['sportswear', 'outdoor', 'apparel', 'workwear'],
    water_condition: ['sweat', 'rain', 'humidity'],
    safety_level: 'low',
    use_case: ['work jackets', 'outdoor vests', 'sports uniforms', 'fishing apparel'],
    safety_rules: ['machine wash cold', 'do not bleach', 'tumble dry low', 'do not iron'],
    desc: 'Quick-dry 100% nylon ripstop woven fabric with DWR finish and UPF sun protection for sports and outdoor workwear applications.',
    definition:
      'A quick-dry 100% nylon ripstop woven fabric engineered with DWR (durable water repellent) finish and UPF sun protection, delivering rapid moisture evaporation, weather resistance, and durable tear strength for high-exertion sports and outdoor workwear.',
    problem:
      'Outdoor workers and sports enthusiasts need a woven fabric that dries rapidly after rain or sweat exposure, provides sun protection, resists tearing, and repels light moisture — all in a lightweight, packable construction.',
    howItWorks:
      '100% nylon filament yarns (300D) are woven in a ripstop construction that prevents tear propagation. A DWR finish provides water repellency, while UV stabilizers integrated into the nylon polymer deliver UPF sun protection. The low moisture regain of nylon (4%) ensures rapid drying. Fabric weight: 100-180 GSM, 58/60-inch width.',
    audience:
      'Outdoor workwear brands, fishing apparel manufacturers, sports uniform suppliers, and adventure travel clothing companies requiring quick-dry woven performance fabrics.',
    ai_use_cases: ['Quick-dry outdoor work jackets', 'Fishing and marine apparel', 'Adventure travel clothing'],
    ai_specs: {
      weight: '100-180 GSM',
      width: '147-152 cm (58-60")',
      composition: '100% Nylon',
      construction: 'Ripstop weave',
      finish: 'DWR + UV stabilizer + moisture-wicking',
      upf_rating: 'UPF 40+',
      drying_time: '15-25 minutes (standard conditions)',
      certification: 'OEKO-TEX Standard 100',
    },
    ai_comparison:
      'Compared to polyester quick-dry wovens, this nylon version offers higher tear strength and abrasion resistance, making it more durable for workwear. Compared to cotton work jackets, it dries 5x faster and provides built-in sun protection.',
    ai_faq: [
      {
        q: 'How does this compare to quick-dry knits?',
        a: 'This woven fabric offers superior durability, wind resistance, and a more structured appearance compared to knit quick-dry fabrics, making it ideal for workwear and structured outerwear.',
      },
      {
        q: 'What colors are available?',
        a: 'Stock colors include black, navy, olive, khaki, and high-visibility orange. Custom colors require 1000 meters MOQ.',
      },
    ],
  },
  {
    id: 'cooling-touch-fabric',
    name: 'Cooling Touch Fabric',
    category: 'QUICK_DRY',
    region: ['EU', 'US', 'ASIA', 'AU'],
    skill: 'intermediate',
    environment: ['apparel', 'sportswear', 'summer wear'],
    water_condition: ['sweat', 'humidity'],
    safety_level: 'low',
    use_case: ['summer t-shirts', 'cooling sportswear', 'hot-weather apparel', 'travel clothing'],
    safety_rules: ['machine wash cold', 'do not bleach', 'drip dry', 'do not iron'],
    desc: 'Advanced cooling touch fabric with instant cool-on-contact sensation and moisture-wicking performance for hot-weather apparel.',
    definition:
      'An advanced cooling fabric engineered with special fiber cross-sections and mineral additives that create an instant cool-on-contact sensation, combined with capillary moisture-wicking for all-day comfort in hot and humid conditions.',
    problem:
      'Summer apparel brands need a fabric that provides an immediate cooling sensation when worn, actively wicks sweat away from the skin, and maintains a comfortable microclimate during hot weather activities without becoming heavy or clingy.',
    howItWorks:
      'Nylon or viscose fibers with modified cross-sections create enhanced capillary channels for rapid moisture transport. Cooling mineral additives (such as jade or tourmaline particles) are incorporated into the fiber matrix, creating a heat-conductive path that draws heat away from the skin. The ultra-lightweight construction (80-130 GSM) maximizes airflow. Fabric weight: 80-130 GSM, 58/60-inch width.',
    audience:
      'Summer apparel brands, sportswear manufacturers, travel clothing companies, and hot-climate uniform suppliers seeking instant-cooling fabric technology.',
    ai_use_cases: ['Instant-cool summer t-shirts', 'Hot-weather performance wear', 'Travel and commuter apparel'],
    ai_specs: {
      weight: '80-130 GSM',
      width: '147-152 cm (58-60")',
      composition: 'Nylon / Viscose blend',
      construction: 'Single jersey / Ripstop / Twill',
      finish: 'Cooling mineral finish + moisture-wicking',
      cooling_effect: 'Qmax >0.2 J/cm2·s (instant cool touch)',
      features: 'Instant cooling, moisture wicking, ultra-lightweight, quick drying',
      certification: 'OEKO-TEX Standard 100',
    },
    ai_comparison:
      'Compared to traditional cotton t-shirts, this cooling fabric provides an immediate cool sensation (3-5°C cooler on contact) and dries 4x faster. Compared to standard polyester wicking fabrics, it offers a softer, more natural hand feel with active cooling properties.',
    ai_faq: [
      {
        q: 'Does the cooling effect diminish after washing?',
        a: 'When mineral additives are embedded in the fiber, the cooling effect is permanent. Topical cooling finishes may diminish after 20-30 washes. Our fiber-embedded cooling is wash-durable.',
      },
      {
        q: 'What is the Qmax rating?',
        a: 'Qmax >0.2 J/cm2·s, which indicates a strong instant cooling sensation. Higher Qmax values mean greater perceived coolness on skin contact.',
      },
    ],
  },
  {
    id: 'light-down-fabric',
    name: 'Light Down Jacket Fabric',
    category: 'BREATHABLE',
    region: ['EU', 'US', 'ASIA'],
    skill: 'advanced',
    environment: ['outdoor', 'apparel', 'cold weather'],
    water_condition: ['snow', 'light rain', 'humidity'],
    safety_level: 'low',
    use_case: ['ultralight down jackets', 'packable puffers', 'sleeping bag shells', 'insulated vests'],
    safety_rules: ['machine wash cold', 'do not bleach', 'tumble dry low with tennis balls', 'do not iron'],
    desc: 'Ultra-lightweight 20D nylon down-proof fabric engineered for packable down jackets and insulated outerwear.',
    definition:
      'An ultra-lightweight 20D nylon down-proof shell fabric that prevents down migration while providing wind resistance, DWR water repellency, and exceptional packability for ultralight down jackets and premium insulated apparel.',
    problem:
      'Ultralight outdoor brands need the lightest possible down-proof fabric that prevents feather leakage, provides adequate weather resistance, and packs down to minimum volume — without sacrificing durability or tear strength.',
    howItWorks:
      '20 denier nylon micro-filament yarns are woven in an ultra-high-density construction (calendered finish) that prevents down and feather migration. A DWR (durable water repellent) finish provides light moisture protection. The ultra-fine yarns and lightweight construction (35-45 GSM) enable exceptional packability. Fabric weight: 35-45 GSM, 58/60-inch width.',
    audience:
      'Ultralight down jacket manufacturers, premium puffer brands, sleeping bag producers, and packable outerwear companies seeking the lightest possible down-proof shell fabrics.',
    ai_use_cases: ['Ultralight packable down jackets', 'Premium puffer vests and coats', 'Down sleeping bag shell fabrics'],
    ai_specs: {
      weight: '35-45 GSM',
      width: '147-152 cm (58-60")',
      composition: '100% Nylon (20D micro-filament)',
      construction: 'High-density plain weave with calendered finish',
      finish: 'DWR + down-proof treatment',
      down_proof: '>1000 Frazier (down-proof certified)',
      features: 'Ultra-lightweight, down-proof, water-resistant, wind-resistant, packable',
      certification: 'OEKO-TEX Standard 100, RDS compatible',
    },
    ai_comparison:
      'Compared to standard 10D-20D down-proof fabrics, this 20D version offers an optimal balance of weight savings, tear strength, and down-proof performance. It is significantly lighter than 30D+ fabrics used for heavier down jackets, saving 30-50% in fabric weight.',
    ai_faq: [
      {
        q: 'What is the minimum denier available?',
        a: '20D is our standard for lightweight down jackets. 10D is available for ultralight specialist applications. 30D is recommended for frequent-use garments requiring higher durability.',
      },
      {
        q: 'Can this fabric be used with synthetic insulation?',
        a: 'Yes. The down-proof construction also works effectively with synthetic insulation (Primaloft, Thinsulate, 3M Thinsulate) for vegan-friendly or wet-weather insulated garments.',
      },
    ],
  },
];

export const mdxSlugToRecordId: Record<string, string> = {
  'sun-protection-upf50': 'sun-polyester-upf50',
  'waterproof-breathable': 'wp-breathable-membrane',
  'quick-dry-moisture-wicking': 'qd-moisture-wicking-poly',
  'antibacterial-7a': 'ab-silver-ion',
  '4-way-stretch-fabric': 'st-4way-nylon-spandex',
  'breathable-mesh-fabric': 'br-high-air-mesh',
  'eco-friendly-recycled-fabric': 'eco-recycled-pet',
  'organic-cotton-fabric': 'eco-organic-cotton',
  'silver-ion-antimicrobial-fabric': 'ab-silver-ion',
  'high-airflow-mesh-sportswear-fabric': 'br-high-air-mesh',
  'functional-fashion-fabric': 'functional-fashion-fabric',
  'high-density-tactical-fabric': 'high-density-tactical-fabric',
  'triple-protection-workwear-fabric': 'triple-protection-workwear-fabric',
  'outdoor-softshell-fabric': 'outdoor-softshell-fabric',
  'polyester-softshell-fabric': 'polyester-softshell-fabric',
  'quick-dry-sports-woven-fabric': 'quick-dry-sports-woven-fabric',
  'cooling-touch-fabric': 'cooling-touch-fabric',
  'light-down-fabric': 'light-down-fabric',
};

export function findRecordBySlug(slug: string): ProductRecord | undefined {
  const mappedId = mdxSlugToRecordId[slug];
  if (mappedId) return products.find((p) => p.id === mappedId);
  return products.find((p) => p.id === slug);
}

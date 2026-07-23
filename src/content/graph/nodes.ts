export interface GraphNode {
  id: string;
  type: 'product-category' | 'technology' | 'material' | 'use-case' | 'component' | 'concept';
  name: Record<string, string>;
  description: Record<string, string>;
  features?: Record<string, string[]>;
  useCases?: Record<string, string[]>;
  faq?: Record<string, Array<{ q: string; a: string }>>;
  related: string[];
  slug: Record<string, string>;
}

export const nodes: GraphNode[] = [
  {
    id: 'sun-protection-fabric',
    type: 'product-category',
    name: {
      en: 'UPF 50+ Sun Protection Fabric',
      ko: 'UPF 50+ 자외선 차단 원단',
      ja: 'UPF 50+ UVカット生地',
      zh: 'UPF 50+ 防晒面料',
      fr: 'Tissu de protection solaire UPF 50+',
      de: 'UPF 50+ Sonnenschutzstoff',
      es: 'Tejido de protección solar UPF 50+',
      pt: 'Tecido de proteção solar UPF 50+',
      it: 'Tessuto di protezione solare UPF 50+',
      ru: 'UPF 50+ ткань для защиты от солнца',
      pl: 'Tkanina z ochroną przeciwsłoneczną UPF 50+',
      ar: 'نسيج الحماية من الشمس UPF 50+',
    },
    description: {
      en: 'Fabric with integrated UV stabilizers that permanently block 98%+ of UVA and UVB radiation, certified UPF 50+. Available in various weights, compositions, and colors.',
    },
    features: {
      en: [
        'Fiber-level UV stabilizers for permanent protection',
        'UPF 50+ certified — blocks 98%+ of UV radiation',
        'Available in 80-200 gsm weights',
        'Polyester, nylon, and recycled fiber options',
        'Does not wash out or degrade over time',
      ],
    },
    useCases: {
      en: [
        'Outdoor sportswear and athletic apparel',
        'Summer fashion and casual shirts',
        'Childrenswear and school uniforms',
        'Workwear for outdoor professionals',
        'Travel and adventure clothing',
      ],
    },
    faq: {
      en: [
        {
          q: 'How does UPF fabric protection work?',
          a: 'UV stabilizers are integrated into the polymer melt before fiber extrusion, absorbing UV radiation and converting it to harmless heat energy. Tight fabric construction minimizes gaps where UV can pass through.',
        },
        {
          q: 'What is the difference between UPF and SPF?',
          a: 'UPF measures physical fabric barrier protection that does not need reapplication. SPF measures sunscreen protection which must be reapplied. UPF 50 blocks 98% of UV radiation.',
        },
        {
          q: 'Is the UV protection permanent?',
          a: 'Yes. Unlike topical coatings that wash off, Seekingtex UPF protection is integrated at the fiber level and lasts the lifetime of the fabric.',
        },
      ],
    },
    related: ['upf-uv-protection', 'moisture-wicking-technology', 'mechanical-stretch-technology', 'outdoor-adventure'],
    slug: {
      en: 'sun-protection-fabric',
      zh: 'sun-protection-fabric',
      ja: 'sun-protection-fabric',
      ko: 'sun-protection-fabric',
      ar: 'sun-protection-fabric',
      ru: 'sun-protection-fabric',
      fr: 'tissu-protection-solaire',
      de: 'sonnenschutzstoff',
      es: 'tejido-proteccion-solar',
      pt: 'tecido-protecao-solar',
      it: 'tessuto-protezione-solare',
      pl: 'tkanina-ochrona-przeciwsłoneczna',
    },
  },

  {
    id: 'waterproof-fabric',
    type: 'product-category',
    name: {
      en: 'Waterproof Fabric',
      ko: '방수 원단',
      ja: '防水生地',
      zh: '防水面料',
      fr: 'Tissu imperméable',
      de: 'Wasserdichter Stoff',
      es: 'Tejido impermeable',
      pt: 'Tecido impermeável',
      it: 'Tessuto impermeabile',
      ru: 'Водонепроницаемая ткань',
      pl: 'Tkanina wodoodporna',
      ar: 'نسيج مقاوم للماء',
    },
    description: {
      en: 'PU, TPU, and PVC coated or laminated fabrics providing reliable waterproof protection tested to hydrostatic head standards from 5000mm to 30000mm.',
    },
    features: {
      en: [
        'PU coating and hot-melt lamination',
        'Hydrostatic head tested 5000-30000mm',
        'Windproof construction',
        'Fully taped seam capable',
        'DWR finish for water beading',
      ],
    },
    useCases: {
      en: [
        'Rain jackets and hardshell outerwear',
        'Ski and snowsport apparel',
        'Tactical and military gear',
        'Workwear and protective clothing',
        'Outdoor camping equipment',
      ],
    },
    faq: {
      en: [
        {
          q: 'What hydrostatic head rating is considered waterproof?',
          a: 'Fabrics with 5000mm+ hydrostatic head per AATCC 127 are considered waterproof. Seekingtex coated fabrics range from 5000mm to 30000mm depending on the coating type and application.',
        },
        {
          q: 'What is the difference between coating and lamination?',
          a: 'Coating applies a liquid polymer directly to the fabric surface. Lamination bonds a pre-formed film to the fabric using heat and pressure. Lamination generally provides better durability and waterproofness.',
        },
        {
          q: 'Can waterproof fabric be breathable?',
          a: 'Yes. Seekingtex waterproof breathable fabrics use microporous membranes or hydrophilic coatings that allow moisture vapor to escape while blocking liquid water.',
        },
      ],
    },
    related: ['waterproof-coating-technology', 'dwr-finish', 'outdoor-adventure', 'tactical-workwear'],
    slug: {
      en: 'waterproof-fabric',
      zh: 'waterproof-fabric',
      ja: 'waterproof-fabric',
      ko: 'waterproof-fabric',
      ar: 'waterproof-fabric',
      ru: 'waterproof-fabric',
      fr: 'tissu-impermeable',
      de: 'wasserdichter-stoff',
      es: 'tejido-impermeable',
      pt: 'tecido-impermeavel',
      it: 'tessuto-impermeabile',
      pl: 'tkanina-wodoodporna',
    },
  },

  {
    id: 'quick-dry-fabric',
    type: 'product-category',
    name: {
      en: 'Quick-Dry Moisture Wicking Fabric',
      ko: '속건 흡한속건 원단',
      ja: '速乾吸水速乾生地',
      zh: '速干吸湿排汗面料',
      fr: "Tissu à séchage rapide et évacuation de l'humidité",
      de: 'Schnelltrocknender feuchtigkeitstransportierender Stoff',
      es: 'Tejido de secado rápido y absorción de humedad',
      pt: 'Tecido de secagem rápida e absorção de umidade',
      it: 'Tessuto a asciugatura rapida e traspirante',
      ru: 'Быстросохнущая влагоотводящая ткань',
      pl: 'Tkanina szybkoschnąca odprowadzająca wilgoć',
      ar: 'نسيج سريع الجفاف وماص للرطوبة',
    },
    description: {
      en: 'Moisture-wicking fabric engineered for rapid sweat transport and evaporation, keeping the wearer dry and comfortable during high-intensity activities.',
    },
    features: {
      en: [
        'Hydrophilic and hydrophobic fiber blend',
        'Capillary action moisture transport',
        'Rapid drying — up to 50% faster than cotton',
        'Lightweight construction 80-160 gsm',
        'Antibacterial treatment available',
      ],
    },
    useCases: {
      en: [
        'Running and training apparel',
        'Team sports uniforms',
        'Travel and lifestyle wear',
        'Base layers for outdoor activities',
        'Summer casual shirts and polos',
      ],
    },
    faq: {
      en: [
        {
          q: 'How does moisture-wicking fabric work?',
          a: 'Moisture-wicking fabrics use hydrophilic fibers that absorb moisture and hydrophobic fibers that repel it, creating a capillary action that pulls sweat away from the skin to the fabric surface where it evaporates quickly.',
        },
        {
          q: 'How much faster does quick-dry fabric dry compared to cotton?',
          a: 'Seekingtex quick-dry fabrics typically dry 2-4 times faster than cotton, depending on the specific construction and weight.',
        },
        {
          q: 'Can quick-dry fabric be printed or dyed?',
          a: 'Yes. Quick-dry polyester and nylon fabrics accept disperse dyes and pigment printing well. We offer custom color matching and print services.',
        },
      ],
    },
    related: ['moisture-wicking-technology', 'antibacterial-treatment-technology', 'sportswear-athletic'],
    slug: {
      en: 'quick-dry-fabric',
      zh: 'quick-dry-fabric',
      ja: 'quick-dry-fabric',
      ko: 'quick-dry-fabric',
      ar: 'quick-dry-fabric',
      ru: 'quick-dry-fabric',
      fr: 'tissu-sechage-rapide',
      de: 'schnelltrocknender-stoff',
      es: 'tejido-secado-rapido',
      pt: 'tecido-secagem-rapida',
      it: 'tessuto-asciugatura-rapida',
      pl: 'tkanina-szybkoschnaca',
    },
  },

  {
    id: 'antibacterial-fabric',
    type: 'product-category',
    name: {
      en: 'Antibacterial Antimicrobial Fabric',
      ko: '항균 원단',
      ja: '抗菌生地',
      zh: '抗菌面料',
      fr: 'Tissu antibactérien',
      de: 'Antibakterieller Stoff',
      es: 'Tejido antibacteriano',
      pt: 'Tecido antibacteriano',
      it: 'Tessuto antibatterico',
      ru: 'Антибактериальная ткань',
      pl: 'Tkanina antybakteryjna',
      ar: 'نسيج مضاد للبكتيريا',
    },
    description: {
      en: 'Silver ion and zinc-based antimicrobial treatments that inhibit bacterial and fungal growth, control odor, and maintain fabric freshness during extended wear.',
    },
    features: {
      en: [
        'Silver ion or zinc pyrithione treatment',
        'Inhibits bacterial and fungal growth',
        'Odor control for extended wear',
        'Durable — lasts 50+ washes',
        'Safe for sensitive skin',
      ],
    },
    useCases: {
      en: [
        'Sportswear and athletic apparel',
        'Underwear and base layers',
        'Medical and healthcare textiles',
        'Workwear and uniforms',
        'Travel and outdoor clothing',
      ],
    },
    faq: {
      en: [
        {
          q: 'How does antibacterial fabric work?',
          a: 'Silver ions disrupt bacterial cell membranes and interfere with their enzyme function, preventing growth and reproduction. Zinc-based treatments create an environment that inhibits microbial colonization.',
        },
        {
          q: 'Is antibacterial treatment safe for skin?',
          a: 'Yes. Seekingtex uses OEKO-TEX certified antimicrobial treatments that are safe for direct skin contact. The treatments are bound to the fabric fibers and do not migrate to the skin.',
        },
        {
          q: 'How long does the antibacterial effect last?',
          a: "Our antibacterial treatments are designed to last 50+ home launderings, maintaining effective microbial inhibition throughout the garment's usable life.",
        },
      ],
    },
    related: [
      'antibacterial-treatment-technology',
      'moisture-wicking-technology',
      'sportswear-athletic',
      'medical-protective',
    ],
    slug: {
      en: 'antibacterial-fabric',
      zh: 'antibacterial-fabric',
      ja: 'antibacterial-fabric',
      ko: 'antibacterial-fabric',
      ar: 'antibacterial-fabric',
      ru: 'antibacterial-fabric',
      fr: 'tissu-antibacterien',
      de: 'antibakterieller-stoff',
      es: 'tejido-antibacteriano',
      pt: 'tecido-antibacteriano',
      it: 'tessuto-antibatterico',
      pl: 'tkanina-antybakteryjna',
    },
  },

  {
    id: 'stretch-fabric',
    type: 'product-category',
    name: {
      en: '4-Way Stretch Fabric',
      ko: '4방향 신축 원단',
      ja: '4方向ストレッチ生地',
      zh: '四向弹力面料',
      fr: 'Tissu extensible 4 directions',
      de: '4-Wege-Stretchstoff',
      es: 'Tejido elástico 4 direcciones',
      pt: 'Tecido elástico 4 direções',
      it: 'Tessuto elasticizzato 4 vie',
      ru: '4-сторонняя эластичная ткань',
      pl: 'Tkanina rozciągliwa 4-kierunkowo',
      ar: 'نسيج مطاطي 4 اتجاهات',
    },
    description: {
      en: 'Mechanical stretch and spandex-enhanced fabrics delivering superior elasticity in all directions with excellent shape recovery for unrestricted movement.',
    },
    features: {
      en: [
        '4-way mechanical or spandex stretch',
        'Excellent shape recovery — less than 5% growth',
        'Available 120-280 gsm weights',
        'Works with moisture-wicking and UPF treatments',
        'Durable stretch performance over 50+ washes',
      ],
    },
    useCases: {
      en: [
        'Yoga and studio wear',
        'Cycling and triathlon apparel',
        'Athletic training and gym wear',
        'Performance sportswear uniforms',
        'Stretch workwear and tactical pants',
      ],
    },
    faq: {
      en: [
        {
          q: 'What is the difference between mechanical stretch and spandex stretch?',
          a: 'Mechanical stretch uses yarn construction (like textured polyester) to create elasticity without elastane. Spandex-enhanced stretch uses core-spun yarns with elastane for higher stretch percentage. Mechanical stretch is more durable; spandex offers greater recovery.',
        },
        {
          q: 'Does stretch fabric lose elasticity over time?',
          a: 'All stretch fabrics experience some relaxation over time. Seekingtex fabrics are engineered for less than 5% fabric growth after 50 washes when tested per ASTM D3107.',
        },
        {
          q: 'Can stretch fabric be combined with waterproofing?',
          a: 'Yes. Seekingtex offers stretch waterproof fabrics using TPU lamination on stretch substrates, ideal for active outerwear that requires both weather protection and mobility.',
        },
      ],
    },
    related: ['mechanical-stretch-technology', 'moisture-wicking-technology', 'sportswear-athletic'],
    slug: {
      en: 'stretch-fabric',
      zh: 'stretch-fabric',
      ja: 'stretch-fabric',
      ko: 'stretch-fabric',
      ar: 'stretch-fabric',
      ru: 'stretch-fabric',
      fr: 'tissu-extensible',
      de: 'stretchstoff',
      es: 'tejido-elastic',
      pt: 'tecido-elastic',
      it: 'tessuto-elasticizzato',
      pl: 'tkanina-rozciagliwa',
    },
  },

  {
    id: 'eco-friendly-fabric',
    type: 'product-category',
    name: {
      en: 'Eco-Friendly Recycled Fabric',
      ko: '친환경 재활용 원단',
      ja: 'エコフレンドリーリサイクル生地',
      zh: '环保再生面料',
      fr: 'Tissu écologique recyclé',
      de: 'Ökologischer Recyclingstoff',
      es: 'Tejido ecológico reciclado',
      pt: 'Tecido ecológico reciclado',
      it: 'Tessuto ecologico riciclato',
      ru: 'Экологичная переработанная ткань',
      pl: 'Ekologiczna tkanina z recyklingu',
      ar: 'نسيج صديق للبيئة معاد تدويره',
    },
    description: {
      en: 'GRS-certified recycled polyester fabrics and sustainably manufactured textiles using post-consumer waste, low-impact dyes, and water conservation processes.',
    },
    features: {
      en: [
        'GRS (Global Recycled Standard) certified',
        'Post-consumer PET bottle recycled content',
        'Properties equivalent to virgin polyester',
        'Low-impact dyeing processes',
        'Reduced water and energy consumption',
      ],
    },
    useCases: {
      en: [
        'Sustainable fashion and eco-brands',
        'Corporate social responsibility apparel',
        'Eco-friendly sportswear collections',
        'Green product lines and certifications',
        'Retail branded sustainable merchandise',
      ],
    },
    faq: {
      en: [
        {
          q: 'Is recycled polyester as good as virgin polyester?',
          a: 'Yes. Recycled polyester (rPET) has nearly identical physical properties to virgin polyester in terms of strength, durability, and performance. The main difference is the lower environmental impact.',
        },
        {
          q: 'What certifications does Seekingtex recycled fabric have?',
          a: 'Seekingtex recycled fabrics are GRS (Global Recycled Standard) certified with full chain of custody documentation. We also offer OEKO-TEX Standard 100 certification on all eco-friendly fabrics.',
        },
        {
          q: 'Can recycled fabric be combined with functional treatments?',
          a: 'Absolutely. Our recycled polyester fabrics accept UPF protection, moisture-wicking, DWR, and antibacterial treatments just like virgin polyester fabrics.',
        },
      ],
    },
    related: ['recycled-polyester-technology', 'upf-uv-protection', 'fashion-casual'],
    slug: {
      en: 'eco-friendly-fabric',
      zh: 'eco-friendly-fabric',
      ja: 'eco-friendly-fabric',
      ko: 'eco-friendly-fabric',
      ar: 'eco-friendly-fabric',
      ru: 'eco-friendly-fabric',
      fr: 'tissu-ecologique',
      de: 'ökologischer-stoff',
      es: 'tejido-ecologico',
      pt: 'tecido-ecologico',
      it: 'tessuto-ecologico',
      pl: 'tkanina-ekologiczna',
    },
  },

  {
    id: 'breathable-fabric',
    type: 'product-category',
    name: {
      en: 'Breathable Fabric',
      ko: '통기성 원단',
      ja: '通気性生地',
      zh: '透气面料',
      fr: 'Tissu respirant',
      de: 'Atmungsaktiver Stoff',
      es: 'Tejido transpirable',
      pt: 'Tecido respirável',
      it: 'Tessuto traspirante',
      ru: 'Дышащая ткань',
      pl: 'Tkanina oddychająca',
      ar: 'نسيج قابل للتنفس',
    },
    description: {
      en: 'Fabric engineered for optimal air permeability and moisture vapor transmission, ensuring comfort in both active and everyday wear applications.',
    },
    features: {
      en: [
        'High air permeability rating',
        'Moisture vapor transmission (MVTR) 5000+ g/m²/24h',
        'Lightweight construction',
        'Available with mechanical stretch',
        'Quick-dry and UPF options available',
      ],
    },
    useCases: {
      en: [
        'Summer clothing and shirts',
        'Activewear and sportswear',
        'Workwear for warm environments',
        'Lifestyle and casual apparel',
        'Base layers for outdoor activities',
      ],
    },
    faq: {
      en: [
        {
          q: 'What makes a fabric breathable?',
          a: "Breathability is determined by the fabric's air permeability and moisture vapor transmission rate (MVTR). Open weaves, lightweight constructions, and hydrophilic coatings all contribute to breathability.",
        },
        {
          q: 'Can breathable fabric also be waterproof?',
          a: 'Yes. Seekingtex waterproof breathable fabrics use microporous membranes that allow water vapor (sweat) to pass through while blocking liquid water droplets.',
        },
      ],
    },
    related: ['moisture-wicking-technology', 'quick-dry-fabric', 'fashion-casual', 'sportswear-athletic'],
    slug: {
      en: 'breathable-fabric',
      zh: 'breathable-fabric',
      ja: 'breathable-fabric',
      ko: 'breathable-fabric',
      ar: 'breathable-fabric',
      ru: 'breathable-fabric',
      fr: 'tissu-respirant',
      de: 'atmungsaktiver-stoff',
      es: 'tejido-transpirable',
      pt: 'tecido-respiravel',
      it: 'tessuto-traspirante',
      pl: 'tkanina-oddychajaca',
    },
  },

  {
    id: 'upf-uv-protection',
    type: 'technology',
    name: {
      en: 'UPF & UV Protection',
      ko: 'UPF 및 자외선 차단',
      ja: 'UPF・UVカット',
      zh: 'UPF和紫外线防护',
      fr: 'Protection UPF et UV',
      de: 'UPF- und UV-Schutz',
      es: 'Protección UPF y UV',
      pt: 'Proteção UPF e UV',
      it: 'Protezione UPF e UV',
      ru: 'UPF и UV защита',
      pl: 'Ochrona UPF i UV',
      ar: 'حماية UPF والأشعة فوق البنفسجية',
    },
    description: {
      en: 'Fiber-level UV stabilizers and dense fabric constructions that block 98%+ of UVA and UVB radiation for certified UPF 50+ protection.',
    },
    features: {
      en: [
        'Fiber-level UV stabilizers',
        'Ceramic nanoparticle additives',
        'UPF 50+ certified protection',
        'Permanent — does not wash off',
      ],
    },
    useCases: {
      en: ['Sun-protective clothing', 'Outdoor and sportswear', 'Childrenswear', 'Workwear for outdoor workers'],
    },
    faq: {
      en: [
        {
          q: 'How does UPF fabric protection work?',
          a: 'UV stabilizers are integrated into the polymer melt before fiber extrusion, absorbing UV radiation and converting it to harmless heat energy. Tight fabric construction minimizes gaps where UV can pass through.',
        },
        {
          q: 'What is the difference between UPF and SPF?',
          a: 'UPF measures physical fabric barrier protection that does not need reapplication. SPF measures sunscreen protection which must be reapplied. UPF 50 blocks 98% of UV radiation.',
        },
      ],
    },
    related: ['sun-protection-fabric', 'moisture-wicking-technology'],
    slug: {
      en: 'upf-uv-protection',
      zh: 'upf-uv-protection',
      ja: 'upf-uv-protection',
      ko: 'upf-uv-protection',
      ar: 'upf-uv-protection',
      ru: 'upf-uv-protection',
      fr: 'upf-uv-protection',
      de: 'upf-uv-protection',
      es: 'upf-uv-protection',
      pt: 'upf-uv-protection',
      it: 'upf-uv-protection',
      pl: 'upf-uv-protection',
    },
  },

  {
    id: 'waterproof-coating-technology',
    type: 'material',
    name: {
      en: 'Waterproof Coating Technology',
      ko: '방수 코팅 기술',
      ja: '防水コーティング技術',
      zh: '防水涂层技术',
      fr: 'Technologie de revêtement imperméable',
      de: 'Wasserbeschichtungstechnologie',
      es: 'Tecnología de recubrimiento impermeable',
      pt: 'Tecnologia de revestimento impermeável',
      it: 'Tecnologia di rivestimento impermeabile',
      ru: 'Технология водонепроницаемого покрытия',
      pl: 'Technologia powłok wodoodpornych',
      ar: 'تقنية الطلاء المقاوم للماء',
    },
    description: {
      en: 'PU, TPU, and PVC coating processes that create durable waterproof barriers on textile substrates tested to hydrostatic head standards.',
    },
    features: {
      en: [
        'PU coating and lamination',
        'TPU hot-melt film lamination',
        'Hydrostatic head tested',
        'Durable waterproof barrier',
      ],
    },
    useCases: {
      en: [
        'Rainwear and outerwear',
        'Ski and snowsport apparel',
        'Workwear and protective clothing',
        'Outdoor gear and equipment',
      ],
    },
    faq: {
      en: [
        {
          q: 'What is the difference between coating and lamination?',
          a: 'Coating applies a liquid polymer directly to the fabric surface. Lamination bonds a pre-formed film to the fabric using heat and pressure. Lamination generally provides better durability and waterproofness.',
        },
        {
          q: 'What hydrostatic head rating is considered waterproof?',
          a: 'Fabrics with 5000mm+ hydrostatic head per AATCC 127 are considered waterproof. Seekingtex coated fabrics range from 5000mm to 30000mm depending on the coating type and application.',
        },
      ],
    },
    related: ['waterproof-fabric', 'dwr-finish'],
    slug: {
      en: 'waterproof-coating-technology',
      zh: 'waterproof-coating-technology',
      ja: 'waterproof-coating-technology',
      ko: 'waterproof-coating-technology',
      ar: 'waterproof-coating-technology',
      ru: 'waterproof-coating-technology',
      fr: 'waterproof-coating-technology',
      de: 'waterproof-coating-technology',
      es: 'waterproof-coating-technology',
      pt: 'waterproof-coating-technology',
      it: 'waterproof-coating-technology',
      pl: 'waterproof-coating-technology',
    },
  },

  {
    id: 'moisture-wicking-technology',
    type: 'technology',
    name: {
      en: 'Moisture Wicking Technology',
      ko: '흡한속건 기술',
      ja: '吸水速乾技術',
      zh: '吸湿排汗技术',
      fr: "Technologie d'évacuation de l'humidité",
      de: 'Feuchtigkeitstransporttechnologie',
      es: 'Tecnología de absorción de humedad',
      pt: 'Tecnologia de absorção de umidade',
      it: "Tecnologia di assorbimento dell'umidità",
      ru: 'Технология влагоотведения',
      pl: 'Technologia odprowadzania wilgoci',
      ar: 'تقنية امتصاص الرطوبة',
    },
    description: {
      en: 'Fiber engineering that creates capillary action to transport moisture away from the skin to the fabric surface for rapid evaporation.',
    },
    features: {
      en: [
        'Hydrophilic/hydrophobic fiber blend',
        'Capillary action moisture transport',
        'Rapid surface evaporation',
        'Cooling effect during activity',
      ],
    },
    useCases: {
      en: [
        'Athletic and training apparel',
        'Base layers and underwear',
        'Summer clothing',
        'Workwear for active environments',
      ],
    },
    faq: {
      en: [
        {
          q: 'How does moisture wicking technology work?',
          a: 'The fabric uses a blend of hydrophilic (water-attracting) and hydrophobic (water-repelling) fibers. The hydrophilic fibers pull moisture from the skin, while hydrophobic fibers push it to the fabric surface where it spreads and evaporates quickly.',
        },
        {
          q: 'Can moisture wicking be combined with other treatments?',
          a: 'Yes. Seekingtex integrates moisture wicking with UPF protection, antibacterial treatment, and stretch properties in single fabrics for multi-functional performance.',
        },
      ],
    },
    related: ['quick-dry-fabric', 'antibacterial-treatment-technology', 'sportswear-athletic'],
    slug: {
      en: 'moisture-wicking-technology',
      zh: 'moisture-wicking-technology',
      ja: 'moisture-wicking-technology',
      ko: 'moisture-wicking-technology',
      ar: 'moisture-wicking-technology',
      ru: 'moisture-wicking-technology',
      fr: 'technologie-evacuation-humidite',
      de: 'feuchtigkeitstransport-technologie',
      es: 'tecnologia-absorcion-humedad',
      pt: 'tecnologia-absorcao-umidade',
      it: 'tecnologia-assorbimento-umidita',
      pl: 'technologia-odprowadzania-wilgoci',
    },
  },

  {
    id: 'antibacterial-treatment-technology',
    type: 'technology',
    name: {
      en: 'Antibacterial Treatment Technology',
      ko: '항균 처리 기술',
      ja: '抗菌加工技術',
      zh: '抗菌处理技术',
      fr: 'Technologie de traitement antibactérien',
      de: 'Antibakterielle Behandlungstechnologie',
      es: 'Tecnología de tratamiento antibacteriano',
      pt: 'Tecnologia de tratamento antibacteriano',
      it: 'Tecnologia di trattamento antibatterico',
      ru: 'Технология антибактериальной обработки',
      pl: 'Technologia obróbki antybakteryjnej',
      ar: 'تقنية المعالجة المضادة للبكتيريا',
    },
    description: {
      en: 'Silver ion and zinc-based antimicrobial treatments applied during fabric finishing that inhibit microbial growth and control odor.',
    },
    features: {
      en: [
        'Silver ion (Ag+) antimicrobial agent',
        'Zinc pyrithione alternative',
        'Binds to fiber surface durably',
        '50+ wash durability',
      ],
    },
    useCases: {
      en: ['Sportswear odor control', 'Medical textile hygiene', 'Workwear freshness', 'Underwear and base layers'],
    },
    faq: {
      en: [
        {
          q: 'How is antibacterial treatment applied?',
          a: 'Antibacterial agents are applied during the fabric finishing stage through pad-dry-cure or exhaust methods, bonding to the fiber surface for durable antimicrobial protection.',
        },
        {
          q: 'Is silver ion treatment safe?',
          a: 'Yes. Silver ion treatments are OEKO-TEX certified and widely used in apparel. The silver is bound to the fabric and does not migrate to the skin in significant amounts.',
        },
      ],
    },
    related: ['antibacterial-fabric', 'moisture-wicking-technology', 'medical-protective'],
    slug: {
      en: 'antibacterial-treatment-technology',
      zh: 'antibacterial-treatment-technology',
      ja: 'antibacterial-treatment-technology',
      ko: 'antibacterial-treatment-technology',
      ar: 'antibacterial-treatment-technology',
      ru: 'antibacterial-treatment-technology',
      fr: 'technologie-traitement-antibacterien',
      de: 'antibakterielle-behandlungstechnologie',
      es: 'tecnologia-tratamiento-antibacteriano',
      pt: 'tecnologia-tratamento-antibacteriano',
      it: 'tecnologia-trattamento-antibatterico',
      pl: 'technologia-obrobki-antybakteryjnej',
    },
  },

  {
    id: 'mechanical-stretch-technology',
    type: 'technology',
    name: {
      en: 'Mechanical Stretch Technology',
      ko: '기계적 신축 기술',
      ja: 'メカニカルストレッチ技術',
      zh: '机械弹力技术',
      fr: "Technologie d'élasticité mécanique",
      de: 'Mechanische Stretch-Technologie',
      es: 'Tecnología de estiramiento mecánico',
      pt: 'Tecnologia de alongamento mecânico',
      it: 'Tecnologia di elasticità meccanica',
      ru: 'Технология механической растяжимости',
      pl: 'Technologia mechanicznego rozciągania',
      ar: 'تقنية التمدد الميكانيكي',
    },
    description: {
      en: 'Yarn and fabric construction techniques that provide elasticity without elastane, using textured yarns and specialized weaves for 4-way stretch performance.',
    },
    features: {
      en: [
        'Textured polyester or nylon yarns',
        '4-way stretch without elastane',
        'Excellent shape recovery',
        'More durable than spandex alternatives',
      ],
    },
    useCases: {
      en: [
        'Stretch sportswear fabrics',
        'Performance uniforms',
        'Stretch workwear',
        'Athletic apparel requiring durability',
      ],
    },
    faq: {
      en: [
        {
          q: 'How does mechanical stretch differ from spandex stretch?',
          a: 'Mechanical stretch uses yarn texturing (false-twist or air-jet) to create coil-like structures that extend and recover. Spandex uses elastane filaments. Mechanical stretch is more durable but offers less extension.',
        },
        {
          q: 'Can mechanical stretch fabric be recycled?',
          a: 'Yes. Mechanical stretch fabrics (without spandex) can be fully recycled as pure polyester or nylon, making them preferable for eco-friendly product lines.',
        },
      ],
    },
    related: ['stretch-fabric', 'eco-friendly-fabric', 'sportswear-athletic'],
    slug: {
      en: 'mechanical-stretch-technology',
      zh: 'mechanical-stretch-technology',
      ja: 'mechanical-stretch-technology',
      ko: 'mechanical-stretch-technology',
      ar: 'mechanical-stretch-technology',
      ru: 'mechanical-stretch-technology',
      fr: 'technologie-elasticite-mecanique',
      de: 'mechanische-stretch-technologie',
      es: 'tecnologia-estiramiento-mecanico',
      pt: 'tecnologia-alongamento-mecanico',
      it: 'tecnologia-elasticita-meccanica',
      pl: 'technologia-mechanicznego-rozciagania',
    },
  },

  {
    id: 'dwr-finish',
    type: 'technology',
    name: {
      en: 'Durable Water Repellent (DWR) Finish',
      ko: '발수 가공',
      ja: '耐久性撥水加工',
      zh: '耐久防泼水处理',
      fr: 'Traitement déperlant durable (DWR)',
      de: 'Dauerhaft wasserabweisende Ausrüstung',
      es: 'Acabado repelente al agua duradero (DWR)',
      pt: 'Acabamento repelente à água durável (DWR)',
      it: 'Trattamento idrorepellente durevole (DWR)',
      ru: 'Долговечная водоотталкивающая отделка (DWR)',
      pl: 'Trwałe wykończenie hydrofobowe (DWR)',
      ar: 'تشطيب طارد للماء متين (DWR)',
    },
    description: {
      en: 'Fluorocarbon-free and traditional C6/C8 DWR formulations applied to fabric surfaces for water beading, stain resistance, and easy clean performance while maintaining breathability.',
    },
    features: {
      en: [
        'Water beading and roll-off effect',
        'Stain and dirt resistance',
        'Fluorocarbon-free (C0) options available',
        'Maintains fabric breathability',
      ],
    },
    useCases: {
      en: [
        'Outerwear and rain jackets',
        'Outdoor apparel and gear',
        'Workwear and uniforms',
        'Everyday carry and lifestyle wear',
      ],
    },
    faq: {
      en: [
        {
          q: 'How long does DWR last?',
          a: 'DWR effectiveness typically lasts 10-20 home launderings depending on the formulation and care. C6 DWR lasts longer than C0 (fluorocarbon-free) options. DWR can be reactivated with heat or re-applied with spray-on treatments.',
        },
        {
          q: 'What is the difference between DWR and waterproof coating?',
          a: 'DWR is a surface treatment that causes water to bead and roll off — it resists wetting but is not fully waterproof. Waterproof coating creates a continuous barrier that blocks water penetration entirely. Many waterproof fabrics use both technologies together.',
        },
      ],
    },
    related: ['waterproof-fabric', 'waterproof-coating-technology', 'outdoor-adventure'],
    slug: {
      en: 'dwr-finish',
      zh: 'dwr-finish',
      ja: 'dwr-finish',
      ko: 'dwr-finish',
      ar: 'dwr-finish',
      ru: 'dwr-finish',
      fr: 'traitement-dwr',
      de: 'dwr-ausruestung',
      es: 'acabado-dwr',
      pt: 'acabamento-dwr',
      it: 'trattamento-dwr',
      pl: 'wykonczenie-dwr',
    },
  },

  {
    id: 'recycled-polyester-technology',
    type: 'material',
    name: {
      en: 'Recycled Polyester (rPET)',
      ko: '재활용 폴리에스터',
      ja: 'リサイクルポリエステル',
      zh: '再生涤纶',
      fr: 'Polyester recyclé (rPET)',
      de: 'Recyceltes Polyester (rPET)',
      es: 'Poliéster reciclado (rPET)',
      pt: 'Poliéster reciclado (rPET)',
      it: 'Poliestere riciclato (rPET)',
      ru: 'Переработанный полиэстер (rPET)',
      pl: 'Poliester z recyklingu (rPET)',
      ar: 'بوليستر معاد تدويره (rPET)',
    },
    description: {
      en: 'GRS-certified recycled polyester fiber made from post-consumer PET bottles, processed into high-quality yarns with properties equivalent to virgin polyester.',
    },
    features: {
      en: [
        'Post-consumer PET bottle source',
        'GRS chain of custody certified',
        'Equivalent strength to virgin polyester',
        'Reduces carbon footprint by up to 50%',
      ],
    },
    useCases: {
      en: [
        'Sustainable sportswear collections',
        'Eco-friendly fashion lines',
        'Corporate sustainability apparel',
        'Recycled fabric product ranges',
      ],
    },
    faq: {
      en: [
        {
          q: 'How is recycled polyester made?',
          a: 'PET bottles are collected, cleaned, shredded into flakes, melted, and extruded into new polyester filaments. The resulting fiber is physically and chemically equivalent to virgin polyester.',
        },
        {
          q: 'Does recycled polyester perform differently?',
          a: 'Recycled polyester has nearly identical strength, durability, dyeability, and performance characteristics as virgin polyester. The main difference is the lower environmental impact.',
        },
      ],
    },
    related: ['eco-friendly-fabric', 'sun-protection-fabric', 'fashion-casual'],
    slug: {
      en: 'recycled-polyester',
      zh: 'recycled-polyester',
      ja: 'recycled-polyester',
      ko: 'recycled-polyester',
      ar: 'recycled-polyester',
      ru: 'recycled-polyester',
      fr: 'polyester-recycle',
      de: 'recyceltes-polyester',
      es: 'poliester-reciclado',
      pt: 'poliester-reciclado',
      it: 'poliestere-riciclato',
      pl: 'poliester-z-recyklingu',
    },
  },

  {
    id: 'sportswear-athletic',
    type: 'use-case',
    name: {
      en: 'Sportswear & Athletic Apparel',
      ko: '스포츠웨어 및 운동복',
      ja: 'スポーツウェア＆アスレチック',
      zh: '运动服与运动装备',
      fr: 'Vêtements de sport et athlétiques',
      de: 'Sportbekleidung und Athletik',
      es: 'Ropa deportiva y atlética',
      pt: 'Vestuário esportivo e atlético',
      it: 'Abbigliamento sportivo e atletico',
      ru: 'Спортивная и тренировочная одежда',
      pl: 'Odzież sportowa i treningowa',
      ar: 'الملابس الرياضية والتمرينية',
    },
    description: {
      en: 'Performance fabrics for athletic training, team sports, fitness apparel, and active lifestyle wear requiring moisture management, stretch, and comfort.',
    },
    features: {
      en: [
        'Moisture wicking and quick-dry',
        '4-way stretch for freedom of movement',
        'Antibacterial odor control',
        'UPF 50+ sun protection',
      ],
    },
    useCases: {
      en: [
        'Running and training apparel',
        'Team sports uniforms',
        'Yoga and studio wear',
        'Cycling and triathlon gear',
      ],
    },
    faq: {
      en: [
        {
          q: 'What fabrics are best for sportswear?',
          a: 'Moisture-wicking, quick-dry fabrics with stretch and antibacterial properties are ideal for sportswear. Seekingtex performance fabrics combine all these features in weights from 80-200 gsm.',
        },
        {
          q: 'Can sportswear fabric be customized with brand colors?',
          a: 'Yes. Seekingtex offers custom color matching and development for sportswear fabrics using certified disperse and reactive dyes.',
        },
      ],
    },
    related: ['quick-dry-fabric', 'stretch-fabric', 'antibacterial-fabric', 'sun-protection-fabric'],
    slug: {
      en: 'sportswear-athletic',
      zh: 'sportswear-athletic',
      ja: 'sportswear-athletic',
      ko: 'sportswear-athletic',
      ar: 'sportswear-athletic',
      ru: 'sportswear-athletic',
      fr: 'sportswear-athletic',
      de: 'sportswear-athletic',
      es: 'sportswear-athletic',
      pt: 'sportswear-athletic',
      it: 'sportswear-athletic',
      pl: 'sportswear-athletic',
    },
  },

  {
    id: 'outdoor-adventure',
    type: 'use-case',
    name: {
      en: 'Outdoor & Adventure Apparel',
      ko: '아웃도어 및 어드벤처',
      ja: 'アウトドア＆アドベンチャー',
      zh: '户外与探险服装',
      fr: "Vêtements d'extérieur et d'aventure",
      de: 'Outdoor- und Abenteuerbekleidung',
      es: 'Ropa de exterior y aventura',
      pt: 'Vestuário ao ar livre e aventura',
      it: 'Abbigliamento outdoor e avventura',
      ru: 'Одежда для активного отдыха и приключений',
      pl: 'Odzież outdoorowa i przygodowa',
      ar: 'ملابس الأنشطة الخارجية والمغامرات',
    },
    description: {
      en: 'Weather-resistant, breathable fabrics for hiking, camping, climbing, skiing, and outdoor exploration that balance protection with comfort during active pursuits.',
    },
    features: {
      en: [
        'Waterproof and windproof protection',
        'Breathable for high-output activities',
        'Durable construction for rugged use',
        'UPF 50+ sun protection',
      ],
    },
    useCases: {
      en: [
        'Hiking and trekking apparel',
        'Camping and backpacking gear',
        'Climbing and mountaineering wear',
        'Ski and snowsport outerwear',
      ],
    },
    faq: {
      en: [
        {
          q: 'What fabrics are best for outdoor apparel?',
          a: 'The best outdoor fabrics balance weather protection with breathability. Seekingtex offers waterproof breathable 3-layer laminates, DWR-treated softshells, and UPF-rated sun protection fabrics for different outdoor activities.',
        },
        {
          q: 'What is a 3-layer laminate fabric?',
          a: 'A 3-layer laminate bonds a face fabric, a waterproof breathable membrane, and an inner liner together. This construction provides maximum durability and performance for technical outerwear without a separate lining.',
        },
      ],
    },
    related: ['waterproof-fabric', 'breathable-fabric', 'sun-protection-fabric', 'dwr-finish'],
    slug: {
      en: 'outdoor-adventure',
      zh: 'outdoor-adventure',
      ja: 'outdoor-adventure',
      ko: 'outdoor-adventure',
      ar: 'outdoor-adventure',
      ru: 'outdoor-adventure',
      fr: 'outdoor-adventure',
      de: 'outdoor-adventure',
      es: 'outdoor-adventure',
      pt: 'outdoor-adventure',
      it: 'outdoor-adventure',
      pl: 'outdoor-adventure',
    },
  },

  {
    id: 'tactical-workwear',
    type: 'use-case',
    name: {
      en: 'Tactical & Workwear',
      ko: '전술 및 작업복',
      ja: 'タクティカル＆ワークウェア',
      zh: '战术与工作服',
      fr: 'Vêtements tactiques et professionnels',
      de: 'Taktische und Arbeitsbekleidung',
      es: 'Ropa táctica y de trabajo',
      pt: 'Vestuário tático e de trabalho',
      it: 'Abbigliamento tattico e da lavoro',
      ru: 'Тактическая и рабочая одежда',
      pl: 'Odzież taktyczna i robocza',
      ar: 'الملابس التكتيكية والعملية',
    },
    description: {
      en: 'Heavy-duty ripstop and abrasion-resistant fabrics for law enforcement, military, industrial workwear, and protective clothing applications.',
    },
    features: {
      en: [
        'Ripstop weave for tear resistance',
        'DWR coating for water/stain resistance',
        'Antimicrobial treatment for odor control',
        'Mechanical stretch for mobility',
      ],
    },
    useCases: {
      en: [
        'Law enforcement patrol uniforms',
        'Military field and combat gear',
        'Industrial workwear and coveralls',
        'Security and protective uniforms',
      ],
    },
    faq: {
      en: [
        {
          q: 'What makes a fabric suitable for tactical use?',
          a: 'Tactical fabrics require extreme durability (ripstop construction at 200-350 gsm), tear and abrasion resistance, water/stain repellency, and often antimicrobial treatment for extended field wear.',
        },
        {
          q: 'Is stretch fabric durable enough for tactical use?',
          a: 'Yes. Seekingtex mechanical stretch tactical fabrics combine durability with mobility, allowing freedom of movement without compromising the ruggedness needed for professional use.',
        },
      ],
    },
    related: ['waterproof-fabric', 'antibacterial-fabric', 'stretch-fabric', 'dwr-finish'],
    slug: {
      en: 'tactical-workwear',
      zh: 'tactical-workwear',
      ja: 'tactical-workwear',
      ko: 'tactical-workwear',
      ar: 'tactical-workwear',
      ru: 'tactical-workwear',
      fr: 'tactical-workwear',
      de: 'tactical-workwear',
      es: 'tactical-workwear',
      pt: 'tactical-workwear',
      it: 'tactical-workwear',
      pl: 'tactical-workwear',
    },
  },

  {
    id: 'fashion-casual',
    type: 'use-case',
    name: {
      en: 'Fashion & Casual Wear',
      ko: '패션 및 캐주얼',
      ja: 'ファッション＆カジュアル',
      zh: '时尚与休闲装',
      fr: 'Mode et vêtements décontractés',
      de: 'Mode und Freizeitbekleidung',
      es: 'Moda y ropa casual',
      pt: 'Moda e vestuário casual',
      it: 'Moda e abbigliamento casual',
      ru: 'Мода и повседневная одежда',
      pl: 'Moda i odzież casual',
      ar: 'الأزياء والملابس الكاجوال',
    },
    description: {
      en: 'Performance-enhanced everyday fabrics combining functional properties with style — UPF protection, quick-dry, and eco-friendly options for lifestyle brands.',
    },
    features: {
      en: [
        'UPF 50+ sun protection in daily wear',
        'Quick-dry for travel comfort',
        'Eco-friendly recycled options',
        'Premium hand feel and drape',
      ],
    },
    useCases: {
      en: [
        'Summer shirts and blouses',
        'Travel apparel collections',
        'Casual pants and shorts',
        'Dresses, skirts, and lifestyle wear',
      ],
    },
    faq: {
      en: [
        {
          q: 'Can performance fabrics look like regular fashion fabrics?',
          a: 'Yes. Seekingtex performance fabrics are engineered to have the same hand feel, drape, and appearance as conventional fabrics while adding functional properties like UPF 50+ and quick-dry.',
        },
        {
          q: 'What GSM is best for summer shirts?',
          a: 'For summer shirts, 90-140 gsm fabrics provide lightweight comfort. For casual pants, 160-220 gsm is recommended. Seekingtex offers performance fabrics across all weight ranges.',
        },
      ],
    },
    related: ['eco-friendly-fabric', 'sun-protection-fabric', 'breathable-fabric', 'quick-dry-fabric'],
    slug: {
      en: 'fashion-casual',
      zh: 'fashion-casual',
      ja: 'fashion-casual',
      ko: 'fashion-casual',
      ar: 'fashion-casual',
      ru: 'fashion-casual',
      fr: 'fashion-casual',
      de: 'fashion-casual',
      es: 'fashion-casual',
      pt: 'fashion-casual',
      it: 'fashion-casual',
      pl: 'fashion-casual',
    },
  },

  {
    id: 'medical-protective',
    type: 'use-case',
    name: {
      en: 'Medical & Protective Textiles',
      ko: '의료 및 보호 섬유',
      ja: '医療・防護用テキスタイル',
      zh: '医用与防护纺织品',
      fr: 'Textiles médicaux et de protection',
      de: 'Medizin- und Schutztextilien',
      es: 'Textiles médicos y de protección',
      pt: 'Têxteis médicos e de proteção',
      it: 'Tessili medici e protettivi',
      ru: 'Медицинский и защитный текстиль',
      pl: 'Tekstylia medyczne i ochronne',
      ar: 'المنسوجات الطبية والوقائية',
    },
    description: {
      en: 'Antibacterial, fluid-resistant, and high-performance fabrics for medical textiles, healthcare uniforms, and protective equipment applications.',
    },
    features: {
      en: [
        'Antibacterial and antimicrobial treatment',
        'Fluid repellent barrier properties',
        'Breathable for extended wear comfort',
        'Durable to frequent washing and sterilization',
      ],
    },
    useCases: {
      en: [
        'Healthcare worker uniforms and scrubs',
        'Patient gowns and bedding',
        'Protective medical garments',
        'Cleanroom and laboratory apparel',
      ],
    },
    faq: {
      en: [
        {
          q: 'What properties do medical textiles require?',
          a: 'Medical textiles typically require antibacterial treatment, fluid resistance, breathability, and durability to frequent high-temperature washing. Seekingtex offers fabrics meeting all these requirements.',
        },
        {
          q: 'Are Seekingtex antibacterial fabrics suitable for medical use?',
          a: 'Yes. Our silver ion antibacterial fabrics are suitable for medical apparel and textile applications. They provide durable antimicrobial protection that withstands professional laundering.',
        },
      ],
    },
    related: ['antibacterial-fabric', 'waterproof-fabric', 'quick-dry-fabric'],
    slug: {
      en: 'medical-protective',
      zh: 'medical-protective',
      ja: 'medical-protective',
      ko: 'medical-protective',
      ar: 'medical-protective',
      ru: 'medical-protective',
      fr: 'medical-protective',
      de: 'medical-protective',
      es: 'medical-protective',
      pt: 'medical-protective',
      it: 'medical-protective',
      pl: 'medical-protective',
    },
  },
];

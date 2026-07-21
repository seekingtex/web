import type { ProductRecord } from '~/data/products';

type ProductTexts = Partial<
  Pick<
    ProductRecord,
    | 'name'
    | 'desc'
    | 'definition'
    | 'problem'
    | 'howItWorks'
    | 'audience'
    | 'ai_use_cases'
    | 'ai_specs'
    | 'ai_comparison'
    | 'ai_faq'
  >
>;

export const productTexts: Record<string, Record<string, ProductTexts>> = {
  fr: {
    'upf-50-sun-protection-fabric': {
      name: 'Tissu de Protection Solaire UPF 50+',
      desc: 'Tissu technique bloquant 98% des rayons UVA et UVB pour une protection solaire certifiée UPF 50+.',
      definition:
        'Un tissu technique avec protection UV intégrée au niveau des fibres, bloquant 98%+ des rayons UVA et UVB, testé selon les normes AS/NZS 4399 et AATCC 183.',
      problem:
        "Les marques d'habillement outdoor et sportif ont besoin de tissus offrant une protection UV fiable et permanente, qui ne se lave pas et ne s'estompe pas avec le temps.",
      howItWorks:
        "Des stabilisateurs UV sont intégrés dans le polymère en fusion avant l'extrusion des fibres, absorbant les rayonnements UV et les convertissant en chaleur inoffensive. Une construction tissée serrée minimise les espaces où les UV peuvent passer.",
      audience:
        'Marques de vêtements outdoor, sportswear, vêtements de travail, marques de mode enfant et lifestyle ayant besoin de tissus certifiés UPF 50+ pour des applications extérieures.',
      ai_use_cases: [
        'Vêtements de protection solaire',
        'Vêtements de sport et outdoor',
        'Vêtements pour enfants',
        "Vêtements de travail pour travailleurs extérieurs",
      ],
      ai_comparison:
        "Comparé aux tissus standard sans protection UV, notre tissu UPF 50+ offre une protection permanente qui ne se lave pas. Contrairement à la crème solaire qui nécessite une réapplication, la protection est intégrée dans le tissu pour toute la durée de vie du vêtement.",
      ai_faq: [
        {
          q: 'Quelle est la différence entre UPF et SPF ?',
          a: "L'UPF mesure la protection physique du tissu qui ne nécessite pas de réapplication. Le SPF mesure la protection de la crème solaire qui doit être réappliquée. UPF 50 bloque 98% des UV.",
        },
        {
          q: 'La protection UPF se lave-t-elle ?',
          a: 'Non. Les stabilisateurs UV sont intégrés dans les fibres au moment de la fabrication et sont permanents — ils ne s\'estompent pas avec les lavages.',
        },
      ],
    },
    'waterproof-breathable-fabric': {
      name: 'Tissu Imperméable et Respirant',
      desc: "Tissu technique imperméable avec membrane respirante, testé de 5 000 mm à 30 000 mm de colonne d'eau.",
      definition:
        "Un tissu multicouche combinant un tissu extérieur, une membrane imperméable (PU, TPU ou ePTFE) et une doublure intérieure, offrant une protection contre l'eau tout en permettant l'évacuation de la vapeur.",
      problem:
        "Les marques de vêtements outdoor ont besoin de tissus qui restent imperméables sous la pression de la pluie tout en évacuant la transpiration lors des activités intenses.",
      howItWorks:
        "Une membrane microporeuse est laminée entre le tissu extérieur et la doublure. Les micropores sont assez petits pour bloquer l'eau liquide mais assez grands pour laisser passer la vapeur d'eau. Les membranes PU et TPU offrent différentes caractéristiques de performance et de coût.",
      audience:
        "Marques de vêtements outdoor et de sport, fabricants d'équipement de protection, marques de mode technique ayant besoin de tissus imperméables et respirants pour vestes, pantalons et équipements.",
      ai_use_cases: [
        'Vestes de pluie et d\'extérieur',
        'Vêtements de ski et sports d\'hiver',
        'Équipement de protection professionnel',
        'Vêtements de travail techniques',
      ],
      ai_comparison:
        "Comparé aux enductions PU standard, notre laminage 3 couches offre une respirabilité supérieure (MVTR jusqu'à 10 000 g/m²/24h) avec une imperméabilité de 10 000 à 30 000 mm. Les membranes TPU offrent une meilleure élasticité et durabilité.",
      ai_faq: [
        {
          q: 'Quelle est la différence entre enduction et laminage ?',
          a: "L'enduction applique un polymère liquide directement sur le tissu. Le laminage lie un film préformé au tissu par chaleur et pression. Le laminage offre généralement une meilleure durabilité et imperméabilité.",
        },
        {
          q: 'Quel niveau d\'imperméabilité est considéré comme imperméable ?',
          a: 'Les tissus avec 5 000 mm+ de colonne d\'eau selon AATCC 127 sont considérés imperméables. Nous proposons des tissus de 5 000 mm à 30 000 mm selon les besoins.',
        },
      ],
    },
    'quick-dry-moisture-wicking-fabric': {
      name: 'Tissu Séchage Rapide et Anti-Transpiration',
      desc: 'Tissu technique à évacuation rapide de l\'humidité pour les vêtements de sport et actifs.',
      definition:
        'Un tissu technique conçu pour évacuer l\'humidité de la peau vers la surface du tissu où elle s\'évapore rapidement, maintenant le porteur au sec et confortable pendant l\'activité physique.',
      problem:
        'Les athlètes et amateurs de fitness ont besoin de vêtements qui gèrent la transpiration efficacement, évitant l\'inconfort et les irritations pendant les entraînements intenses.',
      howItWorks:
        "Notre système capillaire en fibres techniques transporte l'humidité de la peau vers la surface du tissu pour une évaporation rapide. Les traitements hydrophobes accélèrent le séchage. La construction comprend des canaux de fibres qui créent un effet de mèche par action capillaire.",
      audience:
        'Marques de sportswear, vêtements de fitness, running, yoga, et vêtements de sport techniques nécessitant une gestion optimale de l\'humidité.',
      ai_use_cases: [
        'Vêtements de sport et fitness',
        'Running et athlétisme',
        'Vêtements de yoga et bien-être',
        'Vêtements techniques de plein air',
      ],
      ai_comparison:
        "Comparé au coton standard qui absorbe et retient l'humidité, notre tissu à séchage rapide évacue la transpiration et sèche 4 à 5 fois plus vite. Comparé aux tissus basiques en polyester, notre construction capillaire offre une évacuation plus efficace.",
      ai_faq: [
        {
          q: 'Combien de temps faut-il pour que le tissu sèche ?',
          a: 'Notre tissu à séchage rapide sèche généralement en 20 à 30 minutes dans des conditions normales, contre 1 à 2 heures pour le coton.',
        },
        {
          q: 'Peut-on utiliser des assouplissants ?',
          a: 'Il est déconseillé d\'utiliser des assouplissants car ils obstruent les canaux capillaires et réduisent les performances d\'évacuation.',
        },
      ],
    },
    '7a-antibacterial-fabric': {
      name: 'Tissu Antibactérien 7A',
      desc: 'Tissu technique avec traitement antimicrobien à base d\'ions d\'argent, durable jusqu\'à 50 lavages.',
      definition:
        'Un tissu technique traité avec des ions d\'argent ou de zinc qui inhibent la croissance des bactéries et des micro-organismes, testé selon les normes AATCC 100 et ISO 20743.',
      problem:
        'Les marques de sportswear, sous-vêtements et chaussures ont besoin de tissus qui restent hygiéniques et sans odeur même après des utilisations répétées et des lavages fréquents.',
      howItWorks:
        'Des ions d\'argent ou de zinc sont liés aux fibres pendant le processus de fabrication. Ces ions perturbent le métabolisme cellulaire des bactéries, inhibant leur croissance et la formation d\'odeurs sans utiliser de produits chimiques agressifs.',
      audience:
        'Marques de sportswear, sous-vêtements, chaussures, literie médicale et vêtements de travail ayant besoin de propriétés antimicrobiennes durables.',
      ai_use_cases: [
        'Vêtements de sport et fitness',
        'Sous-vêtements et chaussettes',
        'Vêtements médicaux',
        'Literie et textiles de maison',
      ],
      ai_comparison:
        "Comparé aux traitements antibactériens par pulvérisation qui s'estompent rapidement, notre traitement aux ions d'argent lié aux fibres résiste à 50+ lavages. Le traitement au zinc offre une alternative sans métal pour les marchés sensibles.",
      ai_faq: [
        {
          q: 'Le traitement antibactérien est-il sans danger pour la peau ?',
          a: 'Oui. Nos traitements aux ions d\'argent et de zinc sont conformes aux réglementations mondiales sur les produits biocides et testés dermatologiquement.',
        },
        {
          q: 'Combien de temps dure le traitement antibactérien ?',
          a: 'Notre traitement antibactérien est durable jusqu\'à 50+ lavages domestiques selon AATCC 100.',
        },
      ],
    },
    '4-way-stretch-fabric': {
      name: 'Tissu Extensible 4 Directions',
      desc: 'Tissu technique offrant une élasticité dans les quatre sens pour les vêtements de sport et actifs.',
      definition:
        'Un tissu technique avec élasthanne offrant une élasticité bidirectionnelle (trame et chaîne) pour une liberté de mouvement maximale dans les vêtements de sport et performance.',
      problem:
        'Les marques de sportswear et activewear ont besoin de tissus qui suivent les mouvements du corps sans restriction, avec une excellente récupération et rétention de forme.',
      howItWorks:
        "Des fibres d'élasthanne enveloppées sont intégrées dans la construction du tissu, offrant une élasticité dans les deux sens. Des constructions mécaniquement extensibles (sans élasthanne) sont également disponibles grâce à des structures de tissage spéciales qui créent une extensibilité intrinsèque.",
      audience:
        'Marques de sportswear, fitness, yoga, danse, et vêtements de performance nécessitant une liberté de mouvement maximale avec récupération.',
      ai_use_cases: [
        'Vêtements de yoga et fitness',
        'Vêtements de sport de performance',
        'Vêtements de danse et athlétisme',
        'Vêtements lifestyle extensibles',
      ],
      ai_comparison:
        "Comparé aux tissus sans stretch qui restreignent les mouvements, notre tissu 4 directions offre une liberté de mouvement complète. La construction extensible mécaniquement est plus durable et ne contient pas d'élasthanne pour les applications nécessitant une recyclabilité.",
      ai_faq: [
        {
          q: 'Quel est le pourcentage d\'allongement ?',
          a: 'Nos tissus 4 directions offrent généralement 40-60% d\'allongement selon la construction et le poids du tissu.',
        },
        {
          q: 'Le stretch se détend-il avec le temps ?',
          a: "Les tissus avec élasthanne de qualité conservent leur élasticité pendant des années. Un entretien approprié (séchage à basse température) prolonge la durée de vie de l'élasthanne.",
        },
      ],
    },
    'eco-friendly-recycled-polyester-fabric': {
      name: 'Tissu Polyester Recyclé Écologique',
      desc: 'Tissu en polyester recyclé certifié GRS, fabriqué à partir de bouteilles PET post-consommation.',
      definition:
        'Un tissu en polyester recyclé certifié GRS (Global Recycled Standard), produit à partir de bouteilles PET post-consommation transformées en granulés puis filées en fils, offrant des performances identiques au polyester vierge.',
      problem:
        'Les marques de mode durable et les entreprises soucieuses de l\'environnement ont besoin de tissus performants avec une empreinte carbone réduite, sans compromis sur la qualité ou l\'esthétique.',
      howItWorks:
        'Les bouteilles PET sont collectées, nettoyées, broyées en flocons, transformées en granulés, puis filées en fils polyester. Le processus utilise 50% moins d\'énergie et d\'eau que la production de polyester vierge, tout en produisant des fibres de qualité équivalente.',
      audience:
        'Marques de mode durable, vêtements sportswear, vêtements outdoor, et marques lifestyle cherchant à réduire leur impact environnemental avec des tissus certifiés recyclés.',
      ai_use_cases: [
        'Mode durable et éco-responsable',
        'Vêtements sportswear durables',
        'Vêtements outdoor écologiques',
        'Vêtements lifestyle et décontractés',
      ],
      ai_comparison:
        "Comparé au polyester vierge, notre polyester recyclé offre des performances identiques avec une empreinte carbone réduite de 50%. Certifié GRS avec traçabilité complète du matériau recyclé au produit fini.",
      ai_faq: [
        {
          q: 'Le polyester recyclé est-il aussi résistant que le vierge ?',
          a: 'Oui. Le polyester recyclé de qualité offre une résistance à la traction, une solidité des couleurs et une durabilité équivalentes au polyester vierge.',
        },
        {
          q: 'Quelle est la disponibilité des couleurs ?',
          a: 'Le polyester recyclé est disponible dans toutes les couleurs standard. Des minimums de commande plus élevés peuvent s\'appliquer pour les couleurs personnalisées.',
        },
      ],
    },
  },
  de: {
    'upf-50-sun-protection-fabric': {
      name: 'UPF 50+ Sonnenschutzgewebe',
      desc: 'Technisches Gewebe mit UPF 50+ Zertifizierung, das 98% der UVA- und UVB-Strahlung blockiert.',
    },
    'waterproof-breathable-fabric': {
      name: 'Wasserdichtes und Atmungsaktives Gewebe',
      desc: 'Mehrschichtiges technisches Gewebe mit wasserdichter Membran von 5.000 bis 30.000 mm Wassersäule.',
    },
    'quick-dry-moisture-wicking-fabric': {
      name: 'Schnelltrocknendes Feuchtigkeitstransportgewebe',
      desc: 'Technisches Gewebe mit Kapillarfasersystem für schnellen Feuchtigkeitstransport und Trocknung.',
    },
    '7a-antibacterial-fabric': {
      name: '7A Antibakterielles Gewebe',
      desc: 'Technisches Gewebe mit silberionenbasierter antimikrobieller Ausrüstung, beständig bis 50+ Wäschen.',
    },
    '4-way-stretch-fabric': {
      name: '4-Wege-Stretchgewebe',
      desc: 'Technisches Gewebe mit Elastandehnung in beide Richtungen für maximale Bewegungsfreiheit.',
    },
    'eco-friendly-recycled-polyester-fabric': {
      name: 'Ökologisches recyceltes Polyestergewebe',
      desc: 'GRS-zertifiziertes recyceltes Polyestergewebe aus Post-Consumer-PET-Flaschen.',
    },
  },
  pt: {
    'upf-50-sun-protection-fabric': {
      name: 'Tecido de Proteção Solar UPF 50+',
      desc: 'Tecido técnico que bloqueia 98% dos raios UVA e UVB com certificação UPF 50+.',
    },
    'waterproof-breathable-fabric': {
      name: 'Tecido Impermeável e Transpirável',
      desc: 'Tecido técnico multicamadas com membrana impermeável de 5.000 a 30.000 mm de coluna d\'água.',
    },
    'quick-dry-moisture-wicking-fabric': {
      name: 'Tecido de Secagem Rápida',
      desc: 'Tecido técnico com sistema capilar de fibras para transporte rápido de umidade.',
    },
    '7a-antibacterial-fabric': {
      name: 'Tecido Antibacteriano 7A',
      desc: 'Tecido técnico com tratamento antimicrobiano à base de íons de prata, durável por 50+ lavagens.',
    },
    '4-way-stretch-fabric': {
      name: 'Tecido Elástico 4 Direções',
      desc: 'Tecido técnico com elastano para elasticidade bidirecional e máxima liberdade de movimento.',
    },
    'eco-friendly-recycled-polyester-fabric': {
      name: 'Tecido de Poliéster Reciclado Ecológico',
      desc: 'Tecido de poliéster reciclado certificado GRS a partir de garrafas PET pós-consumo.',
    },
  },
  es: {
    'upf-50-sun-protection-fabric': {
      name: 'Tejido de Protección Solar UPF 50+',
      desc: 'Tejido técnico que bloquea el 98% de los rayos UVA y UVB con certificación UPF 50+.',
    },
    'waterproof-breathable-fabric': {
      name: 'Tejido Impermeable y Transpirable',
      desc: 'Tejido técnico multicapa con membrana impermeable de 5.000 a 30.000 mm de columna de agua.',
    },
    'quick-dry-moisture-wicking-fabric': {
      name: 'Tejido de Secado Rápido',
      desc: 'Tejido técnico con sistema capilar de fibras para transporte rápido de humedad.',
    },
    '7a-antibacterial-fabric': {
      name: 'Tejido Antibacteriano 7A',
      desc: 'Tejido técnico con tratamiento antimicrobiano de iones de plata, durable 50+ lavados.',
    },
    '4-way-stretch-fabric': {
      name: 'Tejido Elástico 4 Direcciones',
      desc: 'Tejido técnico con elastano para elasticidad bidireccional y máxima libertad de movimiento.',
    },
    'eco-friendly-recycled-polyester-fabric': {
      name: 'Tejido de Poliéster Reciclado Ecológico',
      desc: 'Tejido de poliéster reciclado certificado GRS a partir de botellas PET postconsumo.',
    },
  },
  it: {
    'upf-50-sun-protection-fabric': {
      name: 'Tessuto Protezione Solare UPF 50+',
      desc: 'Tessuto tecnico che blocca il 98% dei raggi UVA e UVB con certificazione UPF 50+.',
    },
    'waterproof-breathable-fabric': {
      name: 'Tessuto Impermeabile e Traspirante',
      desc: 'Tessuto tecnico multistrato con membrana impermeabile da 5.000 a 30.000 mm di colonna d\'acqua.',
    },
    'quick-dry-moisture-wicking-fabric': {
      name: 'Tessuto Ad Asciugatura Rapida',
      desc: 'Tessuto tecnico con sistema capillare per il rapido trasporto dell\'umidità.',
    },
    '7a-antibacterial-fabric': {
      name: 'Tessuto Antibatterico 7A',
      desc: 'Tessuto tecnico con trattamento antimicrobico a ioni d\'argento, durevole per 50+ lavaggi.',
    },
    '4-way-stretch-fabric': {
      name: 'Tessuto Elasticizzato 4 Direzioni',
      desc: 'Tessuto tecnico con elastan per elasticità bidirezionale e massima libertà di movimento.',
    },
    'eco-friendly-recycled-polyester-fabric': {
      name: 'Tessuto in Poliestere Riciclato Ecologico',
      desc: 'Tessuto in poliestere riciclato certificato GRS da bottiglie PET post-consumo.',
    },
  },
};

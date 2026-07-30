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
        'Vêtements de travail pour travailleurs extérieurs',
      ],
      ai_comparison:
        'Comparé aux tissus standard sans protection UV, notre tissu UPF 50+ offre une protection permanente qui ne se lave pas. Contrairement à la crème solaire qui nécessite une réapplication, la protection est intégrée dans le tissu pour toute la durée de vie du vêtement.',
      ai_faq: [
        {
          q: 'Quelle est la différence entre UPF et SPF ?',
          a: "L'UPF mesure la protection physique du tissu qui ne nécessite pas de réapplication. Le SPF mesure la protection de la crème solaire qui doit être réappliquée. UPF 50 bloque 98% des UV.",
        },
        {
          q: 'La protection UPF se lave-t-elle ?',
          a: "Non. Les stabilisateurs UV sont intégrés dans les fibres au moment de la fabrication et sont permanents — ils ne s'estompent pas avec les lavages.",
        },
      ],
    },
    'waterproof-breathable-fabric': {
      name: 'Tissu Imperméable et Respirant',
      desc: "Tissu technique imperméable avec membrane respirante, testé de 5 000 mm à 30 000 mm de colonne d'eau.",
      definition:
        "Un tissu multicouche combinant un tissu extérieur, une membrane imperméable (PU, TPU ou ePTFE) et une doublure intérieure, offrant une protection contre l'eau tout en permettant l'évacuation de la vapeur.",
      problem:
        'Les marques de vêtements outdoor ont besoin de tissus qui restent imperméables sous la pression de la pluie tout en évacuant la transpiration lors des activités intenses.',
      howItWorks:
        "Une membrane microporeuse est laminée entre le tissu extérieur et la doublure. Les micropores sont assez petits pour bloquer l'eau liquide mais assez grands pour laisser passer la vapeur d'eau. Les membranes PU et TPU offrent différentes caractéristiques de performance et de coût.",
      audience:
        "Marques de vêtements outdoor et de sport, fabricants d'équipement de protection, marques de mode technique ayant besoin de tissus imperméables et respirants pour vestes, pantalons et équipements.",
      ai_use_cases: [
        "Vestes de pluie et d'extérieur",
        "Vêtements de ski et sports d'hiver",
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
          q: "Quel niveau d'imperméabilité est considéré comme imperméable ?",
          a: "Les tissus avec 5 000 mm+ de colonne d'eau selon AATCC 127 sont considérés imperméables. Nous proposons des tissus de 5 000 mm à 30 000 mm selon les besoins.",
        },
      ],
    },
    'quick-dry-moisture-wicking-fabric': {
      name: 'Tissu Séchage Rapide et Anti-Transpiration',
      desc: "Tissu technique à évacuation rapide de l'humidité pour les vêtements de sport et actifs.",
      definition:
        "Un tissu technique conçu pour évacuer l'humidité de la peau vers la surface du tissu où elle s'évapore rapidement, maintenant le porteur au sec et confortable pendant l'activité physique.",
      problem:
        "Les athlètes et amateurs de fitness ont besoin de vêtements qui gèrent la transpiration efficacement, évitant l'inconfort et les irritations pendant les entraînements intenses.",
      howItWorks:
        "Notre système capillaire en fibres techniques transporte l'humidité de la peau vers la surface du tissu pour une évaporation rapide. Les traitements hydrophobes accélèrent le séchage. La construction comprend des canaux de fibres qui créent un effet de mèche par action capillaire.",
      audience:
        "Marques de sportswear, vêtements de fitness, running, yoga, et vêtements de sport techniques nécessitant une gestion optimale de l'humidité.",
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
          a: "Il est déconseillé d'utiliser des assouplissants car ils obstruent les canaux capillaires et réduisent les performances d'évacuation.",
        },
      ],
    },
    '7a-antibacterial-fabric': {
      name: 'Tissu Antibactérien 7A',
      desc: "Tissu technique avec traitement antimicrobien à base d'ions d'argent, durable jusqu'à 50 lavages.",
      definition:
        "Un tissu technique traité avec des ions d'argent ou de zinc qui inhibent la croissance des bactéries et des micro-organismes, testé selon les normes AATCC 100 et ISO 20743.",
      problem:
        'Les marques de sportswear, sous-vêtements et chaussures ont besoin de tissus qui restent hygiéniques et sans odeur même après des utilisations répétées et des lavages fréquents.',
      howItWorks:
        "Des ions d'argent ou de zinc sont liés aux fibres pendant le processus de fabrication. Ces ions perturbent le métabolisme cellulaire des bactéries, inhibant leur croissance et la formation d'odeurs sans utiliser de produits chimiques agressifs.",
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
          a: "Oui. Nos traitements aux ions d'argent et de zinc sont conformes aux réglementations mondiales sur les produits biocides et testés dermatologiquement.",
        },
        {
          q: 'Combien de temps dure le traitement antibactérien ?',
          a: "Notre traitement antibactérien est durable jusqu'à 50+ lavages domestiques selon AATCC 100.",
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
          q: "Quel est le pourcentage d'allongement ?",
          a: "Nos tissus 4 directions offrent généralement 40-60% d'allongement selon la construction et le poids du tissu.",
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
        "Les marques de mode durable et les entreprises soucieuses de l'environnement ont besoin de tissus performants avec une empreinte carbone réduite, sans compromis sur la qualité ou l'esthétique.",
      howItWorks:
        "Les bouteilles PET sont collectées, nettoyées, broyées en flocons, transformées en granulés, puis filées en fils polyester. Le processus utilise 50% moins d'énergie et d'eau que la production de polyester vierge, tout en produisant des fibres de qualité équivalente.",
      audience:
        'Marques de mode durable, vêtements sportswear, vêtements outdoor, et marques lifestyle cherchant à réduire leur impact environnemental avec des tissus certifiés recyclés.',
      ai_use_cases: [
        'Mode durable et éco-responsable',
        'Vêtements sportswear durables',
        'Vêtements outdoor écologiques',
        'Vêtements lifestyle et décontractés',
      ],
      ai_comparison:
        'Comparé au polyester vierge, notre polyester recyclé offre des performances identiques avec une empreinte carbone réduite de 50%. Certifié GRS avec traçabilité complète du matériau recyclé au produit fini.',
      ai_faq: [
        {
          q: 'Le polyester recyclé est-il aussi résistant que le vierge ?',
          a: 'Oui. Le polyester recyclé de qualité offre une résistance à la traction, une solidité des couleurs et une durabilité équivalentes au polyester vierge.',
        },
        {
          q: 'Quelle est la disponibilité des couleurs ?',
          a: "Le polyester recyclé est disponible dans toutes les couleurs standard. Des minimums de commande plus élevés peuvent s'appliquer pour les couleurs personnalisées.",
        },
      ],
    },
    'functional-fashion-fabric': {
      name: 'Tissu de Mode Fonctionnelle',
      desc: 'Tissu technique en nylon spandex avec traitement DWR alliant esthétique mode et performance technique.',
      definition:
        'Un tissu technique en nylon spandex avec finition DWR et laminage TPU, offrant une extensibilité 4 directions, une déperlance aux huiles et un entretien facile pour les vêtements de sport et lifestyle.',
      problem:
        'Les marques de mode ont besoin d\'un tissu qui combine style et fonction — offrant des performances techniques comme la déperlance et l\'extensibilité tout en conservant un toucher premium adapté aux silhouettes de mode contemporaine.',
      howItWorks:
        'Des fils de nylon spandex (20D-40D) sont tissés en sergé et traités avec une finition DWR, suivie d\'un laminage TPU. La teneur en spandex offre une extensibilité 4 directions avec une excellente récupération. Poids du tissu : 80-150 GSM, largeur 58/60".',
      audience:
        'Marques de sportswear branché, fabricants de vêtements de sport, entreprises de prêt-à-porter urbain et labels de mode outdoor.',
      ai_use_cases: ['Vestes de running stylées', 'Vêtements techniques urbains', 'Vêtements lifestyle performants'],
      ai_specs: {
        weight: '80-150 GSM',
        width: '147-152 cm (58-60")',
        composition: 'Mélange Nylon Spandex',
        construction: 'Sergé / Taffetas avec extensibilité 4 directions',
        finish: 'DWR + laminage TPU + déperlant huile',
        stretch: 'Extensibilité 4 directions',
        features: 'Déperlant huile, entretien facile, résistant à l\'eau, respirant',
        certification: 'OEKO-TEX Standard 100, BLUESIGN',
      },
      ai_comparison:
        'Comparé aux tissus de mode standard, ce tissu fonctionnel ajoute une déperlance, une extensibilité et une durabilité. Comparé aux tissus techniques outdoor, il offre un drapé supérieur et un toucher doux adapté aux vêtements lifestyle.',
      ai_faq: [
        {
          q: 'Quels grammages sont disponibles pour la mode ?',
          a: 'Nous proposons 80-150 GSM. Les poids légers (80-100 GSM) pour chemises, les poids moyens (120-150 GSM) pour vestes.',
        },
        {
          q: 'Le tissu est-il disponible en couleurs mode ?',
          a: 'Oui. Nous proposons des gammes de couleurs tendance avec un délai rapide. Minimum 500 mètres par couleur.',
        },
      ],
    },
    'high-density-tactical-fabric': {
      name: 'Tissu Tactile Haute Densité',
      desc: 'Tissu tactique en nylon spandex haute densité avec enduction PU pour une résistance à l\'abrasion supérieure.',
      definition:
        'Un tissu tactique haute densité combinant des fils de nylon spandex avec une enduction PU, offrant une résistance exceptionnelle à l\'abrasion avec une extensibilité 4 directions pour les vêtements de performance tactiques et outdoor.',
      problem:
        'Les marques tactiques et outdoor ont besoin d\'un tissu extrêmement durable sans restreindre les mouvements — permettant aux opérateurs de se déplacer librement.',
      howItWorks:
        'Des fils de nylon haute densité (75D) sont tissés avec du spandex en toile serrée, créant une structure dense résistante à l\'abrasion. Une enduction PU ajoute une résistance à l\'eau. Poids : 180-250 GSM.',
      audience:
        'Fabricants d\'équipement tactique, fournisseurs d\'uniformes militaires, marques de randonnée outdoor.',
      ai_use_cases: ['Pantalons tactiques de randonnée', 'Tenues d\'intervention', 'Vêtements d\'aventure outdoor'],
      ai_specs: {
        weight: '180-250 GSM',
        width: '147-152 cm (58-60")',
        composition: 'Mélange Nylon Spandex',
        construction: 'Toile haute densité',
        finish: 'Enduction PU + DWR',
        stretch: 'Extensibilité 4 directions',
        abrasion_resistance: 'ASTM D3884, haute performance',
        certification: 'OEKO-TEX Standard 100',
      },
      ai_comparison:
        'Comparé aux nylons tactiques standard sans extensibilité, ce tissu haute densité offre une mobilité 4 directions essentielle pour les opérations tactiques.',
      ai_faq: [
        {
          q: 'Quelle est la résistance à l\'abrasion ?',
          a: 'Testée selon ASTM D3884 avec des performances élevées. Les cycles spécifiques disponibles sur demande.',
        },
      ],
    },
    'triple-protection-workwear-fabric': {
      name: 'Tissu de Vêtement de Travail Triple Protection',
      desc: 'Tissu polyester-coton avec protection triple : déperlant huile, imperméable et antitache.',
      definition:
        'Un tissu de travail polyester-coton traité avec des finitions fonctionnelles avancées offrant une triple protection — déperlance aux huiles, barrière imperméable et résistance aux taches.',
      problem:
        'Les marques de vêtements de travail industriels ont besoin d\'un tissu qui résiste simultanément à l\'absorption d\'huile, bloque la pénétration de l\'eau et prévient les taches tenaces.',
      howItWorks:
        'Des fils polyester-coton (32S) sont tissés en sergé et traités avec un système de finition multifonctionnel : déperlant huile fluorochimique, imperméabilisant et antitache. Poids : 200-300 GSM.',
      audience:
        'Fabricants de vêtements de travail industriels, fournisseurs d\'uniformes pétroliers et gaziers.',
      ai_use_cases: ['Vêtements de travail pour l\'industrie pétrolière', 'Vêtements de protection chimique', 'Uniformes industriels'],
      ai_specs: {
        weight: '200-300 GSM',
        width: '147-152 cm (58-60")',
        composition: 'Mélange Polyester Coton',
        construction: 'Sergé avec extensibilité mécanique',
        finish: 'Déperlant huile + imperméable + antitache',
        oil_repellency: 'AATCC 118, Grade 5+',
        certification: 'OEKO-TEX Standard 100',
      },
      ai_comparison:
        'Comparé aux tissus de travail standard avec finitions uniques, ce tissu triple protection combine déperlance huile, imperméabilité et antitache en un seul système.',
      ai_faq: [
        {
          q: 'Combien de temps dure la triple protection ?',
          a: 'Les finitions fonctionnelles maintiennent leur efficacité pendant 30+ lavages industriels.',
        },
      ],
    },
    'outdoor-softshell-fabric': {
      name: 'Tissu Softshell Outdoor',
      desc: 'Tissu softshell polyester-élasthanne chaud, coupe-vent et extensible pour les vêtements de performance outdoor.',
      definition:
        'Un tissu softshell polyester-élasthanne haute performance combinant isolation thermique, membrane coupe-vent et extensibilité bidirectionnelle pour les activités de plein air.',
      problem:
        'Les amateurs de plein air ont besoin d\'un tissu qui bloque le vent et retient la chaleur sans l\'épaisseur des isolants traditionnels.',
      howItWorks:
        'Des fils de polyester sont tricotés avec de l\'élasthanne dans une construction molletonnée au dos. Une membrane coupe-vent bloque la pénétration du vent. Poids : 250-350 GSM.',
      audience:
        'Marques de vêtements outdoor, fabricants de vêtements de ski, entreprises d\'équipement de randonnée.',
      ai_use_cases: ['Vestes softshell toutes saisons', 'Couches intermédiaires de ski', 'Isolation outdoor active'],
      ai_specs: {
        weight: '250-350 GSM',
        width: '147-152 cm (58-60")',
        composition: 'Polyester + Élasthanne',
        construction: 'Tissé face + dos molletonné',
        finish: 'DWR + membrane coupe-vent',
        stretch: 'Extensibilité 2/4 directions',
        features: 'Coupe-vent, chaud, extensible, respirant',
        certification: 'OEKO-TEX Standard 100',
      },
      ai_comparison:
        'Comparé aux tissus hardshell, le softshell offre une respirabilité et un confort supérieurs pour une utilisation active.',
      ai_faq: [
        {
          q: 'Pour quelle plage de température ce tissu est-il adapté ?',
          a: 'De 5°C à -10°C en vêtement seul, ou températures plus basses en couche intermédiaire.',
        },
      ],
    },
    'polyester-softshell-fabric': {
      name: 'Tissu Softshell Polyester',
      desc: 'Softshell polyester léger avec laminage TPU offrant respirabilité et extensibilité 2 directions.',
      definition:
        'Un tissu softshell 100% polyester léger avec laminage TPU (thermoplastique polyuréthane) et extensibilité mécanique 2 directions pour les sports actifs.',
      problem:
        'Les marques de sport ont besoin d\'un softshell léger qui gère l\'humidité pendant les efforts intenses.',
      howItWorks:
        'Des fils de polyester 100% (40D) sont tissés en sergé et laminés avec un film TPU respirant. La construction à extensibilité mécanique offre une extensibilité 2 directions durable. Poids : 150-220 GSM.',
      audience:
        'Fabricants de vêtements de sport, marques de cyclisme, entreprises d\'équipement de trail.',
      ai_use_cases: ['Vestes de sport softshell respirantes', 'Couches intermédiaires de cyclisme', 'Shells de trail légers'],
      ai_specs: {
        weight: '150-220 GSM',
        width: '147-152 cm (58-60")',
        composition: '100% Polyester',
        construction: 'Sergé avec extensibilité mécanique',
        finish: 'Laminage TPU + DWR',
        stretch: 'Extensibilité mécanique 2 directions',
        certification: 'OEKO-TEX Standard 100',
      },
      ai_comparison:
        'Comparé aux softshells en nylon, cette version 100% polyester offre un meilleur séchage rapide et un coût inférieur.',
      ai_faq: [
        {
          q: 'Peut-on utiliser ce tissu pour le sport toute l\'année ?',
          a: 'Oui. La variante 150 GSM est idéale pour le trail estival, la 220 GSM pour les conditions plus fraîches.',
        },
      ],
    },
    'quick-dry-sports-woven-fabric': {
      name: 'Tissu Tissé Sport Séchage Rapide',
      desc: 'Tissu nylon ripstop séchage rapide avec finition DWR et protection solaire UPF pour le sport et le travail outdoor.',
      definition:
        'Un tissu nylon 100% ripstop technique avec finition DWR et protection UPF, offrant une évaporation rapide de l\'humidité et une résistance à la déchirure.',
      problem:
        'Les travailleurs outdoor et sportifs ont besoin d\'un tissu qui sèche rapidement après la pluie ou la transpiration.',
      howItWorks:
        'Des fils de nylon (300D) sont tissés en construction ripstop. Une finition DWR offre une déperlance, tandis que les stabilisateurs UV intégrés offrent une protection UPF. Poids : 100-180 GSM.',
      audience:
        'Marques de vêtements de travail outdoor, fabricants de vêtements de pêche, fournisseurs d\'uniformes sportifs.',
      ai_use_cases: ['Vestes de travail outdoor séchage rapide', 'Vêtements de pêche', 'Vêtements de voyage aventure'],
      ai_specs: {
        weight: '100-180 GSM',
        width: '147-152 cm (58-60")',
        composition: '100% Nylon',
        construction: 'Armure ripstop',
        finish: 'DWR + stabilisateur UV',
        upf_rating: 'UPF 40+',
        certification: 'OEKO-TEX Standard 100',
      },
      ai_comparison:
        'Comparé aux tissus polyester séchage rapide, cette version nylon offre une résistance à la déchirure supérieure.',
      ai_faq: [
        {
          q: 'Quelles sont les couleurs disponibles ?',
          a: 'Couleurs en stock : noir, marine, olive, kaki, orange haute visibilité.',
        },
      ],
    },
    'yoga-high-stretch-knit': {
      name: 'Tissu Maille Ultra-Extensible Yoga',
      desc: 'Maille nylon-spandex ultra-extensible avec récupération 4 directions pour les vêtements de yoga.',
      definition:
        'Une maille circulaire premium nylon-spandex offrant une extensibilité 4 directions exceptionnelle avec une récupération élevée pour le yoga, le pilates et les vêtements de studio.',
      problem:
        'Les marques de yoga ont besoin d\'un tissu qui s\'étend dans toutes les directions pendant les postures complexes.',
      howItWorks:
        'Des micro-filaments de nylon sont tricotés avec du spandex haute densité en construction circulaire. La teneur élevée en spandex (20-30%) offre une extensibilité 4 directions avec >95% de récupération. Poids : 180-280 GSM.',
      audience:
        'Marques de yoga, fabricants de vêtements de sport, entreprises de danse.',
      ai_use_cases: ['Leggings de yoga performants', 'Vêtements de danse studio', 'Vêtements de pilates'],
      ai_specs: {
        weight: '180-280 GSM',
        width: '147-152 cm (58-60")',
        composition: 'Nylon + Spandex',
        construction: 'Maille circulaire',
        stretch: '4 directions, >95% récupération',
        certification: 'OEKO-TEX Standard 100',
      },
      ai_comparison:
        'Comparé aux mailles extensibles standard, ce tissu yoga offre une teneur en spandex plus élevée pour une extensibilité extrême.',
      ai_faq: [
        {
          q: 'Quel pourcentage de spandex est disponible ?',
          a: '25% standard pour le yoga. Options de 20% à 30%.',
        },
      ],
    },
    'yoga-legging-knit-fabric': {
      name: 'Tissu Maille Legging Yoga',
      desc: 'Maille jersey simple nylon-spandex avec extensibilité 4 directions et protection antibactérienne aux ions d\'argent.',
      definition:
        'Une maille jersey simple nylon-spandex légère avec extensibilité 4 directions, performance d\'évacuation de l\'humidité et protection antibactérienne aux ions d\'argent.',
      problem:
        'Les marques de vêtements actifs ont besoin d\'un tissu qui combine un toucher soyeux avec une performance technique.',
      howItWorks:
        'Des micro-filaments de nylon 6.6 (40D) sont tricotés avec du spandex en jersey simple. Un traitement antibactérien aux ions d\'argent est intégré lors de l\'extrusion des fibres. Poids : 160-220 GSM.',
      audience:
        'Fabricants de leggings yoga, marques de vêtements actifs, entreprises de compression.',
      ai_use_cases: ['Leggings yoga mode-performance', 'Collants anti-odeurs', 'Vêtements de sport compressifs'],
      ai_specs: {
        weight: '160-220 GSM',
        width: '147-152 cm (58-60")',
        composition: 'Nylon 6.6 + Spandex',
        construction: 'Jersey simple circulaire',
        stretch: '4 directions, >90% récupération',
        antibacterial: 'AATCC 100, >99.9% réduction',
        certification: 'OEKO-TEX Standard 100',
      },
      ai_comparison:
        'Comparé aux mailles nylon-spandex standard, ce tissu de legging intègre une protection antibactérienne permanente aux ions d\'argent.',
      ai_faq: [
        {
          q: 'Le traitement antibactérien se lave-t-il ?',
          a: 'Non. Les ions d\'argent sont intégrés dans la fibre lors de l\'extrusion, garantissant une protection permanente.',
        },
      ],
    },
    'cooling-touch-fabric': {
      name: 'Tissu Toucher Frais',
      desc: 'Tissu rafraîchissant instantané avec fibres minérales pour les vêtements par temps chaud.',
      definition:
        'Un tissu rafraîchissant avancé avec des sections transversales de fibres spéciales et des additifs minéraux créant une sensation de fraîcheur instantanée au contact de la peau.',
      problem:
        'Les marques de vêtements d\'été ont besoin d\'un tissu qui procure une sensation de fraîcheur immédiate.',
      howItWorks:
        'Des fibres de nylon ou viscose avec des sections modifiées créent des canaux capillaires pour le transport rapide de l\'humidité. Des additifs minéraux sont incorporés dans la matrice fibreuse. Poids : 80-130 GSM.',
      audience:
        'Marques de vêtements d\'été, fabricants de sportswear, entreprises de vêtements de voyage.',
      ai_use_cases: ['T-shirts d\'été fraîcheur instantanée', 'Vêtements de performance par temps chaud', 'Vêtements de voyage'],
      ai_specs: {
        weight: '80-130 GSM',
        width: '147-152 cm (58-60")',
        composition: 'Mélange Nylon/Viscose',
        construction: 'Jersey simple / Ripstop / Sergé',
        finish: 'Finition minérale rafraîchissante',
        cooling_effect: 'Qmax >0.2 J/cm2·s',
        certification: 'OEKO-TEX Standard 100',
      },
      ai_comparison:
        'Comparé aux t-shirts coton traditionnels, ce tissu rafraîchissant procure une sensation de fraîcheur immédiate (3-5°C plus frais au contact).',
      ai_faq: [
        {
          q: 'L\'effet rafraîchissant diminue-t-il après lavage ?',
          a: 'Quand les additifs minéraux sont intégrés dans la fibre, l\'effet est permanent et résiste aux lavages.',
        },
      ],
    },
    'light-down-fabric': {
      name: 'Tissu Duvet Léger',
      desc: 'Tissu nylon 20D ultra-léger imperméable au duvet pour vestes matelassées et vêtements isolants premium.',
      definition:
        'Un tissu nylon 20D micro-filament ultra-léger anti-duvet avec traitement DWR et construction haute densité empêchant la migration du duvet.',
      problem:
        'Les marques outdoor ultralégères ont besoin du tissu anti-duvet le plus léger possible.',
      howItWorks:
        'Des micro-filaments de nylon 20 deniers sont tissés en construction ultra-haute densité avec finition calendrée qui empêche la migration du duvet. Poids : 35-45 GSM.',
      audience:
        'Fabricants de vestes en duvet ultralégères, marques de doudounes premium, producteurs de sacs de couchage.',
      ai_use_cases: ['Vestes en duvet ultralégères', 'Doudounes premium', 'Tissus de sac de couchage'],
      ai_specs: {
        weight: '35-45 GSM',
        width: '147-152 cm (58-60")',
        composition: '100% Nylon (20D micro-filament)',
        construction: 'Toile haute densité avec finition calendrée',
        finish: 'DWR + traitement anti-duvet',
        down_proof: '>1000 Frazier',
        certification: 'OEKO-TEX Standard 100, compatible RDS',
      },
      ai_comparison:
        'Comparé aux tissus anti-duvet standard, cette version 20D offre un équilibre optimal entre économie de poids et performance.',
      ai_faq: [
        {
          q: 'Quel est le denier minimum disponible ?',
          a: '20D est notre standard. 10D disponible pour les applications ultralégères, 30D pour une durabilité accrue.',
        },
      ],
    },
  },
  de: {
    'functional-fashion-fabric': {
      name: 'Funktioneller Mode-Stoff',
      desc: 'Nylon-Spandex-Gewebe mit DWR-Ausrüstung für modebewusste Activewear.',
    },
    'high-density-tactical-fabric': {
      name: 'Hochdichtes taktisches Gewebe',
      desc: 'Hochdichtes Nylon-Spandex-Gewebe mit PU-Beschichtung für taktische Einsätze.',
    },
    'triple-protection-workwear-fabric': {
      name: 'Dreifach-Schutz-Arbeitskleidungsstoff',
      desc: 'Ölabweisendes, wasserdichtes und fleckenbeständiges Polyester-Baumwoll-Arbeitsgewebe.',
    },
    'outdoor-softshell-fabric': {
      name: 'Outdoor-Softshell-Gewebe',
      desc: 'Warmes, winddichtes und dehnbares Polyester-Elastan-Softshell für Outdoor.',
    },
    'polyester-softshell-fabric': {
      name: 'Polyester-Softshell-Gewebe',
      desc: 'Leichtes Polyester-Softshell mit TPU-Laminierung und 2-Wege-Stretch.',
    },
    'quick-dry-sports-woven-fabric': {
      name: 'Schnelltrocknendes Sportgewebe',
      desc: 'Schnelltrocknendes Nylon-Ripstop-Gewebe mit DWR und UPF-Sonnenschutz.',
    },
    'yoga-high-stretch-knit': {
      name: 'Yoga-Hochdehn-Strickstoff',
      desc: 'Nylon-Spandex-Maschenware mit 4-Wege-Dehnung für Yoga-Bekleidung.',
    },
    'yoga-legging-knit-fabric': {
      name: 'Yoga-Leggings-Strickstoff',
      desc: 'Glatter Nylon-Spandex-Jersey mit 4-Wege-Dehnung und antibakteriellem Schutz.',
    },
    'cooling-touch-fabric': {
      name: 'Kühlender Berührungsstoff',
      desc: 'Sofort kühlender Stoff mit Mineralfasern für Sommerbekleidung.',
    },
    'light-down-fabric': {
      name: 'Leichter Daunenjackenstoff',
      desc: 'Ultra-leichtes 20D-Nylon-Daunendichtgewebe für Daunenjacken.',
    },
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
    'functional-fashion-fabric': {
      name: 'Tecido de Moda Funcional',
      desc: 'Tecido de nylon spandex com acabamento DWR unindo estética fashion e desempenho técnico.',
    },
    'high-density-tactical-fabric': {
      name: 'Tecido Tático de Alta Densidade',
      desc: 'Tecido tático de nylon spandex com revestimento PU e alta resistência à abrasão.',
    },
    'triple-protection-workwear-fabric': {
      name: 'Tecido de Trabalho Tripla Proteção',
      desc: 'Tecido polyester-algodão com proteção tripla: óleo, água e manchas.',
    },
    'outdoor-softshell-fabric': {
      name: 'Tecido Softshell para Outdoor',
      desc: 'Tecido softshell polyester-elastano quente, corta-vento e elástico.',
    },
    'polyester-softshell-fabric': {
      name: 'Tecido Softshell de Poliéster',
      desc: 'Softshell de poliéster leve com laminação TPU e elasticidade bidirecional.',
    },
    'quick-dry-sports-woven-fabric': {
      name: 'Tecido Esportivo de Secagem Rápida',
      desc: 'Tecido nylon ripstop de secagem rápida com DWR e proteção solar UPF.',
    },
    'yoga-high-stretch-knit': {
      name: 'Tecido de Malha Ultra Elástica para Yoga',
      desc: 'Malha nylon-spandex com elasticidade 4 direções para roupas de yoga.',
    },
    'yoga-legging-knit-fabric': {
      name: 'Tecido de Malha para Legging Yoga',
      desc: 'Malha jersey nylon-spandex com elasticidade 4 direções e proteção antibacteriana.',
    },
    'cooling-touch-fabric': {
      name: 'Tecido Toque Fresco',
      desc: 'Tecido refrescante instantâneo com fibras minerais para roupas de verão.',
    },
    'light-down-fabric': {
      name: 'Tecido Leve para Casaco de Penas',
      desc: 'Tecido nylon 20D ultraleve à prova de penas para jaquetas acolchoadas.',
    },
    'upf-50-sun-protection-fabric': {
      name: 'Tecido de Proteção Solar UPF 50+',
      desc: 'Tecido técnico que bloqueia 98% dos raios UVA e UVB com certificação UPF 50+.',
    },
    'waterproof-breathable-fabric': {
      name: 'Tecido Impermeável e Transpirável',
      desc: "Tecido técnico multicamadas com membrana impermeável de 5.000 a 30.000 mm de coluna d'água.",
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
    'functional-fashion-fabric': {
      name: 'Tejido de Moda Funcional',
      desc: 'Tejido de nylon spandex con acabado DWR que combina estética de moda y rendimiento técnico.',
    },
    'high-density-tactical-fabric': {
      name: 'Tejido Táctico de Alta Densidad',
      desc: 'Tejido táctico de nylon spandex con recubrimiento PU y alta resistencia a la abrasión.',
    },
    'triple-protection-workwear-fabric': {
      name: 'Tejido de Trabajo Triple Protección',
      desc: 'Tejido poliéster-algodón con protección triple: aceite, agua y manchas.',
    },
    'outdoor-softshell-fabric': {
      name: 'Tejido Softshell para Exterior',
      desc: 'Tejido softshell poliéster-elastano cálido, cortaviento y elástico.',
    },
    'polyester-softshell-fabric': {
      name: 'Tejido Softshell de Poliéster',
      desc: 'Softshell de poliéster ligero con laminación TPU y elasticidad bidireccional.',
    },
    'quick-dry-sports-woven-fabric': {
      name: 'Tejido Deportivo de Secado Rápido',
      desc: 'Tejido nylon ripstop de secado rápido con DWR y protección solar UPF.',
    },
    'yoga-high-stretch-knit': {
      name: 'Tejido de Punto Ultra Elástico para Yoga',
      desc: 'Punto nylon-spandex con elasticidad 4 direcciones para ropa de yoga.',
    },
    'yoga-legging-knit-fabric': {
      name: 'Tejido de Punto para Leggings Yoga',
      desc: 'Punto jersey nylon-spandex con elasticidad 4 direcciones y protección antibacteriana.',
    },
    'cooling-touch-fabric': {
      name: 'Tejido Toque Fresco',
      desc: 'Tejido refrescante instantáneo con fibras minerales para ropa de verano.',
    },
    'light-down-fabric': {
      name: 'Tejido Ligero para Chaqueta de Plumas',
      desc: 'Tejido nylon 20D ultraligero a prueba de plumas para chaquetas acolchadas.',
    },
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
    'functional-fashion-fabric': {
      name: 'Tessuto Moda Funzionale',
      desc: 'Tessuto in nylon spandex con finitura DWR che unisce estetica moda e prestazioni tecniche.',
    },
    'high-density-tactical-fabric': {
      name: 'Tessuto Tattico ad Alta Densità',
      desc: 'Tessuto tattico in nylon spandex con rivestimento PU e alta resistenza all\'abrasione.',
    },
    'triple-protection-workwear-fabric': {
      name: 'Tessuto da Lavoro Tripla Protezione',
      desc: 'Tessuto poliestere-cotone con tripla protezione: olio, acqua e macchie.',
    },
    'outdoor-softshell-fabric': {
      name: 'Tessuto Softshell per Outdoor',
      desc: 'Tessuto softshell in poliestere-elastan caldo, antivento ed elastico.',
    },
    'polyester-softshell-fabric': {
      name: 'Tessuto Softshell in Poliestere',
      desc: 'Softshell in poliestere leggero con laminazione TPU ed elasticità bidirezionale.',
    },
    'quick-dry-sports-woven-fabric': {
      name: 'Tessuto Sportivo ad Asciugatura Rapida',
      desc: 'Tessuto nylon ripstop ad asciugatura rapida con DWR e protezione solare UPF.',
    },
    'yoga-high-stretch-knit': {
      name: 'Tessuto Maglia Ultra-Estensibile per Yoga',
      desc: 'Maglia nylon-spandex con elasticità 4 direzioni per abbigliamento yoga.',
    },
    'yoga-legging-knit-fabric': {
      name: 'Tessuto Maglia per Leggings Yoga',
      desc: 'Maglia jersey nylon-spandex con elasticità 4 direzioni e protezione antibatterica.',
    },
    'cooling-touch-fabric': {
      name: 'Tessuto Tocco Fresco',
      desc: 'Tessuto rinfrescante istantaneo con fibre minerali per abbigliamento estivo.',
    },
    'light-down-fabric': {
      name: 'Tessuto Leggero per Giacca Imbottita',
      desc: 'Tessuto nylon 20D ultraleggero a prova di piumino per giacche imbottite.',
    },
    'upf-50-sun-protection-fabric': {
      name: 'Tessuto Protezione Solare UPF 50+',
      desc: 'Tessuto tecnico che blocca il 98% dei raggi UVA e UVB con certificazione UPF 50+.',
    },
    'waterproof-breathable-fabric': {
      name: 'Tessuto Impermeabile e Traspirante',
      desc: "Tessuto tecnico multistrato con membrana impermeabile da 5.000 a 30.000 mm di colonna d'acqua.",
    },
    'quick-dry-moisture-wicking-fabric': {
      name: 'Tessuto Ad Asciugatura Rapida',
      desc: "Tessuto tecnico con sistema capillare per il rapido trasporto dell'umidità.",
    },
    '7a-antibacterial-fabric': {
      name: 'Tessuto Antibatterico 7A',
      desc: "Tessuto tecnico con trattamento antimicrobico a ioni d'argento, durevole per 50+ lavaggi.",
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

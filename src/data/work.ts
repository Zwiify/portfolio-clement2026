import type { GalleryItem, WorkPageContent } from "./types";

export const workIndex = [
  { slug: "projet-de-fin-d-annee", title: "Projet de fin d'année", preview: "/images/work-previews/projet-de-fin-d-annee.webp" },
  { slug: "design-graphique", title: "Design Graphique", preview: "/images/work-previews/design-graphique.webp" },
  { slug: "dessin-d-intention", title: "Dessin d'intention", preview: "/images/work-previews/dessin-d-intention.webp" },
  {
    slug: "typographie-et-mise-en-page",
    title: "Typographie & Mise en page",
    preview: "/images/work-previews/typographie-et-mise-en-page.webp",
  },
  { slug: "packaging", title: "Packaging", preview: "/images/work-previews/packaging.webp" },
  { slug: "perspective", title: "Perspective", preview: "/images/work-previews/perspective.webp" },
  { slug: "modele-vivant", title: "Modèle vivant", preview: "/images/work-previews/modele-vivant.webp" },
  { slug: "croquis-d-exterieur", title: "Croquis d'extérieur", preview: "/images/work-previews/croquis-d-exterieur.webp" },
  { slug: "workshops", title: "Workshops", preview: "/images/work-previews/workshops.webp" },
  { slug: "dessin-d-analyse", title: "Dessin d'analyse", preview: "/images/work-previews/dessin-d-analyse.webp" },
  { slug: "personnel", title: "Personnel", preview: "/images/work-previews/personnel.webp" },
];

const gallery = (altBase: string, paths: string[] = ["", ""]): GalleryItem[] =>
  paths.map((src, index) => ({
    src,
    alt: `${altBase} — image ${index + 1}`,
    span: "half",
    tone: "bleu",
  }));

const heroImage = (title: string, src = "") => ({
  src,
  alt: `Image d'ouverture — ${title}`,
});

export const workPages: Record<string, WorkPageContent> = {
  "projet-de-fin-d-annee": {
    slug: "projet-de-fin-d-annee",
    title: "Projet de fin d'année",
    description: "Projet de fin d'année — WHITEOUT. Clément Jorge, 2026.",
    heroImage: heroImage("Projet de fin d'année", "/images/work/projet-de-fin-d-annee/hero.webp"),
    sections: [
      {
        title: "WHITEOUT",
        description: [
          "WHITEOUT est un microsite contemplatif construit autour du blanc comme signal d'effacement. À partir de la couleur Cloud Dancer, le projet met en scène plusieurs environnements naturels en 3D — nuages, coraux et forêt — qui se dégradent progressivement. L'objectif n'était pas de produire un discours documentaire, mais de créer une expérience sensible : faire ressentir la disparition avant de l'expliquer.",
          "La production a été réalisée principalement sur Blender, avec des scènes séparées, des animations en boucle, des volumes, des particules et un travail d'optimisation pour préparer les rendus avant l'intégration web. Les séquences ont ensuite été compositées et intégrées dans un parcours en scroll, où chaque transition accompagne la transformation des milieux.",
        ],
        links: [
          {
            label: "Voir le site WHITEOUT",
            href: "https://pfawhiteout.netlify.app/",
          },
        ],
        images: gallery("WHITEOUT", [
          "/images/work/projet-de-fin-d-annee/corals-01.webp",
          "/images/work/projet-de-fin-d-annee/corals-02.webp",
          "/images/work/projet-de-fin-d-annee/forest-01.webp",
          "/images/work/projet-de-fin-d-annee/forest-02.webp",
        ]),
      },
    ],
  },

  "design-graphique": {
    slug: "design-graphique",
    title: "Design Graphique",
    description: "Travaux de design graphique — affiches, identités et compositions éditoriales. Clément Jorge, 2026.",
    heroImage: heroImage("Design Graphique", "/images/work/design-graphique/hero.webp"),
    sections: [
      {
        title: "Découpe papier — Carte postale & Persona",
        description:
          "Ces deux projets mélangent image numérique et découpe papier. La carte postale raconte un souvenir de vacances à Samoëns, avec une scène assez simple autour de la montagne et des bouquetins. Persona est plus personnel, comme un autoportrait autour de la guitare. J'ai d'abord composé les images sur Illustrator, puis je les ai refaites en papier découpé, ce qui donne un rendu plus manuel et moins parfait.",
        images: gallery("Découpe papier", [
          "/images/work/design-graphique/decoupe-papier-01.webp",
          "/images/work/design-graphique/decoupe-papier-02.webp",
        ]),
      },
      {
        title: "Matrix — Follow the White Rabbit",
        description:
          "Pour cette affiche, je suis parti de la phrase “Follow the white rabbit”, plutôt que de représenter directement Matrix. J'ai voulu que la typographie devienne presque une image en elle-même, très dense, comme un message à décoder. Le côté massif, sombre et texturé permet de retrouver quelque chose de l'univers du film sans passer par une illustration classique.",
        images: gallery("Matrix", [
          "/images/work/design-graphique/matrix-01.webp",
          "/images/work/design-graphique/matrix-02.webp",
        ]),
      },
      {
        title: "Almost Lost Files — Print Japan",
        description:
          "Almost Lost Files est une petite édition autour de mon voyage au Japon. J'ai choisi de ne montrer le voyage qu'à travers des photos de nourriture prises avec mon téléphone. Les images ont ensuite été retravaillées sur Lightroom pour créer une ambiance plus homogène. Le projet ressemble un peu à une archive personnelle : des souvenirs simples, presque banals, mais qui racontent beaucoup.",
        images: gallery("Almost Lost Files", [
          "/images/work/design-graphique/almost-lost-files-01.webp",
          "/images/work/design-graphique/almost-lost-files-02.webp",
          "/images/work/design-graphique/almost-lost-files-03.webp",
          "/images/work/design-graphique/almost-lost-files-04.webp",
        ]),
      },
    ],
  },

  "dessin-d-intention": {
    slug: "dessin-d-intention",
    title: "Dessin d'intention",
    description: "Travaux de dessin d'intention — roughs, stands, scènes et préparation éditoriale. Clément Jorge, 2026.",
    heroImage: heroImage("Dessin d'intention", "/images/work/dessin-d-intention/hero.webp"),
    sections: [
      {
        title: "Mise en page en croquis — Arcane & Jean",
        description:
          "Ces exercices m'ont permis de travailler la mise en page avant de passer à l'ordinateur. À partir de sujets imposés, il fallait chercher rapidement des compositions, tester les titres, les images, les blocs de texte et le rythme général. Arcane amenait une ambiance plus narrative et illustrée, tandis que le sujet sur le jean était plus proche d'une mise en page mode. Les roughs servent surtout à réfléchir vite, sans se bloquer sur le rendu final.",
        images: gallery("Mise en page en croquis", [
          "/images/work/dessin-d-intention/arcane-jean-01.webp",
          "/images/work/dessin-d-intention/arcane-jean-02.webp",
        ]),
      },
      {
        title: "Stand PS5",
        description:
          "Le sujet était d'imaginer un stand PS5 dans un espace limité à 4 mètres par 4 mètres. J'ai essayé de penser le stand comme un petit espace immersif, visible rapidement et facile à comprendre. La contrainte de taille m'a obligé à aller à l'essentiel : une forme forte, une circulation simple et une mise en scène claire de l'univers PlayStation.",
        images: gallery("Stand PS5", [
          "/images/work/dessin-d-intention/stand-ps5-01.webp",
        ]),
      },
      {
        title: "Roughs de shooting — Mode & Bêtises",
        description:
          "Ces projets consistaient à préparer des shootings avec des croquis. Pour le sujet mode, il fallait composer à partir d'un mannequin, d'une tenue et d'un décor imposés. Pour Bêtises, il fallait imaginer des scènes autour d'une collection enfant. J'ai surtout travaillé le cadrage, les attitudes et l'ambiance, comme si le dessin servait de brouillon avant la photo.",
        images: gallery("Roughs de shooting", [
          "/images/work/dessin-d-intention/roughs-shooting-01.webp",
          "/images/work/dessin-d-intention/roughs-shooting-02.webp",
        ]),
      },
      {
        title: "Super-héros au quotidien",
        description:
          "Pour ce sujet, il fallait imaginer un super-héros dans une situation banale. J'ai choisi de jouer sur le contraste entre un personnage très puissant et une action minuscule, presque ridicule. Ce qui m'intéressait, c'était le décalage : garder les codes du super-héros, mais les mettre dans un moment beaucoup plus quotidien.",
        images: gallery("Super-héros au quotidien", [
          "/images/work/dessin-d-intention/super-heros-01.webp",
        ]),
      },
    ],
  },

  "typographie-et-mise-en-page": {
    slug: "typographie-et-mise-en-page",
    title: "Typographie & Mise en page",
    description: "Travaux de typographie, édition et mise en page. Clément Jorge, 2026.",
    heroImage: heroImage("Typographie & Mise en page", "/images/work/typographie-et-mise-en-page/hero.webp"),
    sections: [
      {
        title: "Planche de calligraphie",
        description:
          "Cette planche est construite à partir de noms de fromages français. L'exercice était assez simple dans la consigne, mais difficile dans le geste : garder une écriture régulière, lisible, tout en acceptant les petites irrégularités de la main. Les mots longs, courts et accentués créent naturellement du rythme dans la page.",
        images: gallery("Planche de calligraphie", [
          "/images/work/typographie-et-mise-en-page/calligraphie-01.webp",
        ]),
      },
      {
        title: "Mise en page — Beatles",
        description:
          "Ce projet a été réalisé pendant les cours d'InDesign, à partir d'un article sur les Beatles. Il m'a surtout servi à comprendre les bases de la mise en page : colonnes, marges, hiérarchie, images, titres et rythme de lecture. J'ai appris qu'une page ne se remplit pas simplement avec du texte, elle se construit pour guider le regard.",
        images: gallery("Mise en page Beatles", [
          "/images/work/typographie-et-mise-en-page/beatles-01.webp",
          "/images/work/typographie-et-mise-en-page/beatles-02.webp",
          "/images/work/typographie-et-mise-en-page/beatles-03.webp",
          "/images/work/typographie-et-mise-en-page/beatles-04.webp",
        ]),
      },
      {
        title: "Specimen Typographique Valve",
        description:
          "Valve est une typographie stencil construite avec des formes assez géométriques et des coupes franches. Le specimen m'a permis de la tester dans une vraie mise en page, avec différentes tailles, différents rythmes et plusieurs niveaux de lecture. Je voulais que la typo garde un côté industriel, mais qu'elle reste utilisable et pas seulement décorative.",
        images: gallery("Specimen Typographique Valve", [
          "/images/work/typographie-et-mise-en-page/valve-01.webp",
        ]),
      },
      {
        title: "Typographie sous contraintes — Mandragore",
        description:
          "Mandragore est une recherche typographique avec plusieurs contraintes : une typo regular, serif courbée et extra condensée. Le but n'était pas de créer une typo très spectaculaire, mais plutôt d'imaginer un caractère qui pourrait fonctionner dans un usage plus quotidien. J'ai travaillé les proportions, les courbes et la lisibilité pour trouver un équilibre entre contrainte et personnalité.",
        images: gallery("Typographie sous contraintes Mandragore", [
          "/images/work/typographie-et-mise-en-page/mandragore-01.webp",
          "/images/work/typographie-et-mise-en-page/mandragore-02.webp",
        ]),
      },
      {
        title: "PTYPOTINS — Affiche d'exposition typographique",
        description:
          "Pour cette affiche, il fallait créer une proposition autour d'une exposition typographique éphémère. J'ai choisi de mettre en scène une théière couverte de stickers typographiques. La théière a été placée dans Blender pour mieux gérer le volume, l'éclairage et le point de vue. Ça m'a permis d'avoir une image plus construite qu'un simple montage à plat.",
        images: gallery("PTYPOTINS", [
          "/images/work/typographie-et-mise-en-page/ptypotins-01.webp",
        ]),
      },
    ],
  },

  packaging: {
    slug: "packaging",
    title: "Packaging",
    description: "Travaux de packaging — chocolat, sauce piquante et glace. Clément Jorge, 2026.",
    heroImage: heroImage("Packaging", "/images/work/packaging/hero.webp"),
    sections: [
      {
        title: "Chocolat Saint-Valentin — Love Tarot",
        description:
          "Ce packaging de chocolat est pensé comme un petit objet à offrir pour la Saint-Valentin. J'ai mélangé l'idée du chocolat avec celle d'une carte de tarot, comme si chaque boîte contenait aussi un message ou un mini rituel. L'univers est volontairement coloré, affectif et un peu naïf, pour garder quelque chose de léger et généreux.",
        images: gallery("Love Tarot", [
          "/images/work/packaging/love-tarot-01.webp",
          "/images/work/packaging/love-tarot-02.webp",
        ]),
      },
      {
        title: "Paper Art — Hot Sauce Puntaca",
        description:
          "Ce projet part d'un piment réalisé en paper art, ensuite photographié et transformé en élément principal du packaging. J'ai imaginé une sauce piquante à l'Espelette, avec une identité très directe : couleurs chaudes, typographie visible et composition frontale. Le but était que le produit soit compréhensible tout de suite, sans trop d'explication.",
        images: gallery("Hot Sauce Puntaca", [
          "/images/work/packaging/puntaca-01.webp",
          "/images/work/packaging/puntaca-02.webp",
        ]),
      },
      {
        title: "Lettering — Ice Cream Edel",
        description:
          "Edel est une marque de glace inventée autour d'un lettering dessiné à la main. J'ai choisi une direction plus sobre, presque silencieuse, avec une glace à la vanille et des visuels assez serrés. Le projet joue davantage sur la matière, le froid, les textures et une forme d'élégance simple.",
        images: gallery("Ice Cream Edel", [
          "/images/work/packaging/edel-01.webp",
          "/images/work/packaging/edel-02.webp",
        ]),
      },
    ],
  },

  perspective: {
    slug: "perspective",
    title: "Perspective",
    description: "Travaux de perspective — systèmes spatiaux et construction du regard. Clément Jorge, 2026.",
    heroImage: heroImage("Perspective", "/images/work/perspective/hero.webp"),
    sections: [
      {
        title: "Systèmes de perspective",
        description:
          "Cette série regroupe plusieurs exercices de perspective : trois points de fuite, isométrie et cinq points de fuite. Chaque dessin aborde l'espace d'une manière différente, entre construction rigoureuse, profondeur et déformation plus immersive. Ces exercices m'ont surtout aidé à mieux comprendre comment construire un volume et choisir un point de vue.",
        images: gallery("Systèmes de perspective", [
          "/images/work/perspective/perspective-2pf.webp",
          "/images/work/perspective/perspective-3pf.webp",
          "/images/work/perspective/perspective-isometrique.webp",
          "/images/work/perspective/perspective-5pf.webp",
        ]),
      },
    ],
  },

  "modele-vivant": {
    slug: "modele-vivant",
    title: "Modèle vivant",
    description: "Sélection de dessins de modèle vivant. Clément Jorge, 2026.",
    heroImage: heroImage("Modèle vivant", "/images/work/modele-vivant/hero.webp"),
    sections: [
      {
        title: "Sélection modèle vivant",
        description:
          "Cette sélection regroupe plusieurs dessins réalisés en modèle vivant pendant l'année. Certains sont rapides, d'autres plus posés, mais tous m'ont aidé à mieux comprendre les proportions, les appuis et les lignes du corps. Le plus intéressant pour moi était de capter une posture sans forcément tout détailler.",
        images: gallery("Sélection modèle vivant", [
          "/images/work/modele-vivant/selection-01.webp",
        ]),
      },
    ],
  },

  "croquis-d-exterieur": {
    slug: "croquis-d-exterieur",
    title: "Croquis d'extérieur",
    description: "Croquis d'extérieur — observation, architecture, objets et lieux. Clément Jorge, 2026.",
    heroImage: heroImage("Croquis d'extérieur", "/images/work/croquis-d-exterieur/hero.webp"),
    sections: [
      {
        title: "Carnet Charles de Gaulle",
        description:
          "Ce carnet a été réalisé à la Maison natale de Charles de Gaulle, à Lille. J'ai dessiné les lieux, les objets et certains détails de l'intérieur, puis j'ai ajouté de courts textes pour accompagner les images. Je voulais que le carnet ne soit pas seulement une suite de croquis, mais aussi une petite narration du lieu.",
        images: gallery("Carnet Charles de Gaulle", [
          "/images/work/croquis-d-exterieur/charles-de-gaulle-01.webp",
          "/images/work/croquis-d-exterieur/charles-de-gaulle-02.webp",
        ]),
      },
      {
        title: "Croquis citadelle",
        description:
          "Ce croquis de la Citadelle m'a permis de travailler un espace extérieur plus large, avec de la végétation, des structures et de la profondeur. L'aquarelle m'a aidé à poser rapidement les masses de couleur, sans chercher un rendu trop précis. Je voulais garder le côté vivant du dessin sur place.",
        images: gallery("Croquis citadelle", [
          "/images/work/croquis-d-exterieur/citadelle-01.webp",
          "/images/work/croquis-d-exterieur/citadelle-02.webp",
        ]),
      },
      {
        title: "Croquis Palais des Beaux-Arts",
        description:
          "Au Palais des Beaux-Arts, j'ai travaillé un espace plus architectural, avec beaucoup de lignes, de statues et de lumière. Le passage à l'aquarelle m'a permis de sortir d'un dessin trop rigide et de mieux traduire l'ambiance du lieu, notamment les contrastes entre ombre et lumière.",
        images: gallery("Croquis Palais des Beaux-Arts", [
          "/images/work/croquis-d-exterieur/palais-beaux-arts-01.webp",
          "/images/work/croquis-d-exterieur/palais-beaux-arts-02.webp",
        ]),
      },
      {
        title: "Croquis gare",
        description:
          "Les croquis en gare sont plus rapides et plus directs. Les gens bougent, les trains arrivent, les scènes changent vite. Il faut donc aller à l'essentiel : une silhouette, une posture, une ligne de perspective, un détail. C'est un exercice utile pour apprendre à observer sans vouloir tout contrôler.",
        images: gallery("Croquis gare", [
          "/images/work/croquis-d-exterieur/gare-01.webp",
        ]),
      },
    ],
  },

  workshops: {
    slug: "workshops",
    title: "Workshops",
    description: "Workshops — linogravure, scénographie et photographie argentique. Clément Jorge, 2026.",
    heroImage: heroImage("Workshops", "/images/work/workshops/hero.webp"),
    sections: [
      {
        title: "Linogravure — Potion d'invisibilité",
        description:
          "Pour ce workshop de linogravure, le thème était la fantaisie et les créatures. J'ai imaginé une recette de potion d'invisibilité, comme une page de grimoire. La gravure oblige à simplifier les formes et à penser en noir et blanc, ce qui rend le dessin plus direct et plus graphique.",
        images: gallery("Linogravure", [
          "/images/work/workshops/linogravure-01.webp",
          "/images/work/workshops/linogravure-02.webp",
        ]),
      },
      {
        title: "HUMBLE — Workshop scénographie",
        description:
          "HUMBLE est un projet d'exposition collective réalisé avec des étudiants en design graphique et en architecture. Le groupe a imaginé une ambiance de jazz bar, sombre et feutrée, pour présenter les travaux étudiants autrement. J'ai travaillé sur certains supports graphiques comme les tickets et le menu, mais surtout sur le site Figma et la modélisation 3D du lieu, pour aider à visualiser l'espace et le parcours.",
        images: gallery("HUMBLE", [
          "/images/work/workshops/humble-01.webp",
          "/images/work/workshops/humble-02.webp",
          "/images/work/workshops/humble-03.webp",
          "/images/work/workshops/humble-04.webp",
          "/images/work/workshops/humble-05.webp",
          "/images/work/workshops/humble-06.webp",
          "/images/work/workshops/humble-07.webp",
          "/images/work/workshops/humble-08.webp",
          "/images/work/workshops/humble-09.webp",
          "/images/work/workshops/humble-10.webp",
        ]),
      },
      {
        title: "Photographie argentique",
        description:
          "Ce workshop m'a permis de découvrir la photographie argentique, de la prise de vue au développement. Ce que j'ai aimé, c'est le côté moins immédiat que le numérique : on ne contrôle pas tout, on attend, et parfois les accidents font partie de l'image. Le grain, les flous et les contrastes donnent une présence particulière aux photos.",
        images: gallery("Photographie argentique", [
          "/images/work/workshops/argentique-01.webp",
          "/images/work/workshops/argentique-02.webp",
        ]),
      },
    ],
  },

  "dessin-d-analyse": {
    slug: "dessin-d-analyse",
    title: "Dessin d'analyse",
    description: "Dessin d'analyse — objets, matières, volumes et observation. Clément Jorge, 2026.",
    heroImage: heroImage("Dessin d'analyse", "/images/work/dessin-d-analyse/hero.webp"),
    sections: [
      {
        title: "Études d'observation — Objets, matières, volumes",
        description:
          "Cette série rassemble plusieurs exercices d'observation : brocs, bûches, buste de couture en cuir et vases en inox. Chaque sujet demandait une attention différente, entre volumes, matières, reflets, ombres et proportions. Ces exercices m'ont appris à prendre plus de temps pour comprendre ce que je dessine, avant de chercher à faire un rendu propre.",
        images: gallery("Études d'observation", [
          "/images/work/dessin-d-analyse/observation-01.webp",
          "/images/work/dessin-d-analyse/observation-02.webp",
          "/images/work/dessin-d-analyse/observation-03.webp",
          "/images/work/dessin-d-analyse/observation-04.webp",
        ]),
      },
    ],
  },

  personnel: {
    slug: "personnel",
    title: "Personnel",
    description: "Projets personnels — jeu vidéo, 3D et sound design. Clément Jorge.",
    heroImage: heroImage("Personnel", "/images/work/personnel/hero.webp"),
    sections: [
      {
        title: "Zanuzinzins: The Key of Bravery",
        description:
          "Zanuzinzins: The Key of Bravery est un jeu vidéo réalisé en groupe pour l'anniversaire d'un ami. Je me suis occupé du game design, du code et de l'intégration dans Unity. Les autres membres du groupe travaillaient surtout sur les visuels, mais je faisais aussi le lien entre les idées, les besoins d'UI, les intentions de gameplay et ce qu'il fallait intégrer dans le jeu.",
      },
      {
        title: "Mass blocking — Point & click",
        description:
          "Ce projet consistait à préparer des décors pour un jeu en point & click avec du mass blocking sur Blender. Le but était de poser rapidement les volumes principaux, la profondeur et les zones importantes avant de passer au détail. C'est une étape que j'aime bien, parce qu'elle permet de comprendre très vite si un décor fonctionne ou non.",
        images: gallery("Mass blocking", [
          "/images/work/personnel/mass-blocking-01.webp",
          "/images/work/personnel/mass-blocking-02.webp",
          "/images/work/personnel/mass-blocking-03.webp",
          "/images/work/personnel/mass-blocking-04.webp",
          "/images/work/personnel/mass-blocking-05.webp",
          "/images/work/personnel/mass-blocking-06.webp",
          "/images/work/personnel/mass-blocking-07.webp",
          "/images/work/personnel/mass-blocking-08.webp",
        ]),
      },
      {
        title: "Sound design — Versipellis & Après la mer",
        description:
          "Ces deux projets m'ont permis de travailler le sound design pour des courts métrages étudiants réalisés à Rubika. Sur Versipellis, le son devait accompagner une ambiance plus organique, tendue et liée à la transformation. Sur Après la mer, le travail était plus discret, davantage centré sur les ambiances et les transitions. Dans les deux cas, j'ai aimé construire une narration qui ne passe pas seulement par l'image.",
      },
    ],
  },
};

export const getWorkPage = (slug: string) => {
  const page = workPages[slug];

  if (!page) {
    throw new Error(`Page work introuvable : ${slug}`);
  }

  return page;
};

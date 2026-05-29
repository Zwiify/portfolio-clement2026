import type { ProjectSection } from "../layouts/ProjectLayout.astro";

const imagePair = () => [
  { span: "half" as const, tone: "bleu" as const },
  { span: "half" as const, tone: "bleu" as const },
];

export const matterSections: Record<string, ProjectSection[]> = {
  "projet-de-fin-d-annee": [
    {
      title: "WHITEOUT",
      description:
        "WHITEOUT est un projet autour du blanc comme signal d'alerte. À partir de la couleur “Cloud Dancer”, j'ai voulu déplacer l'image douce et rassurante du blanc vers quelque chose de plus inquiétant : une trace d'effacement, de disparition et de dérèglement. Le projet s'articule autour de trois environnements — la mer, le sol et la forêt — qui se transforment progressivement. L'objectif n'est pas de produire un discours documentaire, mais une expérience sensible : faire ressentir avant d'expliquer.",
      images: imagePair(),
    },
  ],

  "design-graphique": [
    {
      title: "Découpe papier — Carte postale & Persona",
      description:
        "Ces deux projets explorent le passage du dessin vectoriel à la découpe papier. La carte postale raconte un souvenir de vacances à travers des formes simples, tandis que Persona fonctionne comme un autoportrait graphique autour de la guitare. Dans les deux cas, Illustrator m'a permis de construire l'image avant de la traduire physiquement en papier découpé, avec une attention particulière portée aux aplats, aux contrastes et à la lisibilité.",
      images: imagePair(),
    },
    {
      title: "Matrix — Follow the White Rabbit",
      description:
        "Cette affiche typographique est inspirée de l'univers de Matrix. Plutôt que d'illustrer directement le film, j'ai choisi de partir d'une phrase culte : “Follow the white rabbit”. La typographie devient une architecture massive, presque un signal à décoder, entre affiche de film, texture numérique et message caché.",
      images: imagePair(),
    },
    {
      title: "Almost Lost Files — Print Japan",
      description:
        "Almost Lost Files est un projet d'édition photographique autour de mon voyage au Japon. J'ai choisi de raconter ce voyage uniquement à travers les photos de nourriture prises avec mon téléphone, puis retravaillées sur Lightroom pour harmoniser l'ensemble. Le projet transforme une archive personnelle et spontanée en objet éditorial, entre carnet de voyage, collection d'images et mémoire fragmentée.",
      images: imagePair(),
    },
  ],

  "dessin-d-intention": [
    {
      title: "Mise en page en croquis — Arcane & Jean",
      description:
        "Ces exercices utilisent le dessin comme outil de préparation éditoriale. À partir de textes et d'images imposés, il fallait imaginer des doubles pages en croquis avant toute réalisation numérique. Le projet Arcane travaillait une ambiance narrative et visuelle forte, tandis que le sujet sur le jean demandait une direction plus mode. Dans les deux cas, les roughs permettent de tester le titre, le rythme, la hiérarchie, le rapport texte-image et la circulation du regard.",
      images: imagePair(),
    },
    {
      title: "Stand PS5",
      description:
        "Ce projet consistait à imaginer un stand de 4 mètres par 4 mètres autour de l'univers de la PS5. La contrainte de taille imposait de concevoir un espace compact, lisible et immersif. J'ai travaillé le stand comme une scène : un lieu capable d'attirer le regard, de guider la circulation et de faire exister l'expérience de la console.",
      images: imagePair(),
    },
    {
      title: "Roughs de shooting — Mode & Bêtises",
      description:
        "Ces projets demandaient de préparer des prises de vue à travers des roughs. Le premier sujet partait d'un mannequin, d'une tenue, d'accessoires et d'un décor imposés ; le second imaginait des scènes pour une collection enfant sur le thème des bêtises. Le dessin sert ici à anticiper une image photographique : cadrage, posture, décor, énergie, saison, styling et intention générale.",
      images: imagePair(),
    },
    {
      title: "Super-héros au quotidien",
      description:
        "Ce brief proposait de confronter un super-héros générique à une corvée banale du quotidien. L'humour vient du décalage entre la puissance du personnage et la trivialité de la situation. J'ai cherché à garder une scène simple, lisible et absurde, où le héros reste sérieux pendant que le contexte crée le gag.",
      images: imagePair(),
    },
  ],

  "typographie-et-mise-en-page": [
    {
      title: "Planche de calligraphie",
      description:
        "Cette planche de calligraphie repose sur une liste de noms de fromages français. L'exercice demandait de remplir une planche A3 avec une direction graphique cohérente, en travaillant le geste, le rythme et la régularité de l'écriture. J'ai choisi une écriture dense et expressive, où les mots longs, courts et accentués créent naturellement des variations.",
      images: imagePair(),
    },
    {
      title: "Mise en page — Beatles",
      description:
        "Ce projet a été réalisé au fil des cours d'InDesign, à partir d'un article sur les Beatles. L'objectif était d'apprendre les bases de la mise en page : colonnes, marges, hiérarchie typographique, placement des images et rythme de lecture. Il m'a permis de comprendre qu'une page se construit comme un parcours, et pas seulement comme un assemblage de texte et d'images.",
      images: imagePair(),
    },
    {
      title: "Carnet à Vide — Lipogramme",
      description:
        "Carnet à Vide est un projet éditorial construit autour d'une contrainte d'écriture : un lipogramme sans la lettre “O”. J'ai choisi de rendre cette absence visible par un vide circulaire qui traverse la couverture et les doubles pages. Ce qui disparaît dans le texte devient une forme physique dans le livre.",
      images: imagePair(),
    },
    {
      title: "Recherches typographiques — Valve & mot sous contraintes",
      description:
        "Ces projets explorent la création de caractères à différentes échelles. Valve est une famille stencil construite autour de coupes franches, d'une structure géométrique et d'une tension industrielle. Le mot typographique sous contraintes travaillait une autre logique : imaginer une typo regular, serif courbée et extra condensée, mais pensée comme un caractère utilisable au quotidien plutôt qu'une simple typo display.",
      images: imagePair(),
    },
    {
      title: "PTYPOTINS — Affiche d'exposition typographique",
      description:
        "Cette affiche a été réalisée pour l'exposition typographique éphémère des B1 Design et Archi. La consigne demandait de créer un titrage à partir d'une typographie existante, puis de composer une affiche A3 avec les informations imposées. J'ai utilisé Blender pour mettre en scène une théière recouverte de stickers typographiques et contrôler l'éclairage, la matière et le point de vue.",
      images: imagePair(),
    },
  ],

  packaging: [
    {
      title: "Chocolat Saint-Valentin — Love Tarot",
      description:
        "Ce projet consistait à créer un packaging de chocolat pour la Saint-Valentin, avec un élément de surprise à l'intérieur. J'ai choisi de construire l'univers autour du tarot amoureux : une boîte de chocolat qui contient aussi une carte, comme un petit rituel à offrir. Le projet mélange les codes du chocolat, du jeu et de l'objet sentimental.",
      images: imagePair(),
    },
    {
      title: "Paper Art — Hot Sauce Puntaca",
      description:
        "Ce projet part d'un objet en paper art : des piments réalisés à la main, puis photographiés et utilisés comme base d'un packaging. J'ai choisi de transformer cet objet en identité pour une sauce piquante à l'Espelette. Le piment devient un signe simple et direct, porté par une composition frontale, chaude et immédiatement identifiable.",
      images: imagePair(),
    },
    {
      title: "Lettering — Ice Cream Edel",
      description:
        "Edel est un projet de packaging pour une marque de glace inventée. La consigne demandait de créer un nom, un logo dessiné à la main, puis de l'appliquer sur un pot de glace. J'ai choisi une direction sobre et élégante, autour d'une glace à la vanille, avec une palette douce et une identité calme, fraîche et légèrement premium.",
      images: imagePair(),
    },
  ],

  perspective: [
    {
      title: "Systèmes de perspective",
      description:
        "Cette série rassemble plusieurs exercices de construction spatiale : perspective à trois points de fuite, isométrie et perspective à cinq points de fuite. Chaque système propose une manière différente de représenter l'espace : la hauteur et la tension verticale, la construction stable et presque cartographique, puis la déformation immersive proche du fisheye. L'ensemble m'a permis de travailler la rigueur du volume, la profondeur et le point de vue.",
      images: imagePair(),
    },
  ],

  "modele-vivant": [
    {
      title: "Sélection modèle vivant",
      description:
        "Cette sélection rassemble les dessins de modèle vivant les plus justes ou les plus intéressants de l'année. Certains sont rapides et gardent l'énergie du geste, d'autres sont plus construits, avec davantage d'attention portée aux proportions, aux volumes et aux appuis. Le modèle vivant m'a permis de mieux comprendre le corps comme une structure en mouvement.",
      images: imagePair(),
    },
  ],

  "croquis-d-exterieur": [
    {
      title: "Carnet Charles de Gaulle",
      description:
        "Ce carnet rassemble des croquis réalisés à la Maison natale de Charles de Gaulle. L'objectif était d'observer un lieu réel à travers ses objets, ses intérieurs, ses détails et ses atmosphères. Le dessin devient ici une manière de sélectionner : une chaise, un meuble, une fenêtre ou une couleur peuvent suffire à raconter un espace.",
      images: imagePair(),
    },
    {
      title: "Croquis urbains & lieux d'observation",
      description:
        "Cette série regroupe plusieurs séances de croquis extérieur : personnes dessinées dans la gare, dessin long à Lille-Flandres, Palais des Beaux-Arts, Citadelle et Porte de Paris. Chaque lieu impose un rapport différent au temps et à l'observation : saisir rapidement une silhouette en mouvement, construire une architecture sur trois heures ou traduire une ambiance par la couleur.",
      images: imagePair(),
    },
    {
      title: "Objets & fragments",
      description:
        "Cette série rassemble des croquis rapides d'objets observés sur place. L'enjeu était de capter une forme, un volume ou une silhouette sans chercher un rendu trop fini. Ces dessins fonctionnent comme des notes visuelles, utiles pour entraîner le regard et apprendre à simplifier.",
      images: imagePair(),
    },
  ],

  workshops: [
    {
      title: "Linogravure — Potion d'invisibilité",
      description:
        "Ce workshop de linogravure avait pour thème la fantaisie et les créatures. J'ai choisi de travailler autour d'une recette de potion d'invisibilité, comme un fragment de grimoire ou un objet issu d'un monde magique. La linogravure impose une image directe, contrastée, pensée en noir et blanc.",
      images: imagePair(),
    },
    {
      title: "HUMBLE — Workshop scénographie",
      description:
        "HUMBLE est un projet d'exposition collective imaginé pour présenter les travaux des B1 Design Graphique et Architecture. Le concept du groupe reposait sur l'univers du jazz bar : une ambiance sombre, feutrée et premium, pensée pour donner aux projets étudiants le statut d'œuvres exposées. Dans ce projet, j'ai réalisé certains supports graphiques, comme le menu des boissons et les tickets, mais mon rôle principal s'est concentré sur le site Figma et la modélisation 3D du lieu.",
      images: imagePair(),
    },
    {
      title: "Photographie argentique",
      description:
        "Ce workshop m'a permis d'expérimenter la photographie argentique, de la prise de vue au développement. Contrairement au numérique, l'argentique impose une autre relation à l'image : moins immédiate, plus lente, plus incertaine. Le projet m'a intéressé pour cette part d'accident, de grain, de contraste et d'attente.",
      images: imagePair(),
    },
  ],

  "dessin-d-analyse": [
    {
      title: "Études d'observation — Objets, matières, volumes",
      description:
        "Cette série rassemble plusieurs exercices de dessin d'analyse : brocs en couleur, bûches, buste de couture en cuir et vases inox. Chaque sujet demandait une attention différente : proportions, volumes, reflets, textures, rigidité ou matière organique. L'ensemble montre un travail d'observation patient, où il faut comprendre la forme avant de chercher le rendu.",
      images: imagePair(),
    },
  ],

  personnel: [
    {
      title: "Zanuzinzins: The Key of Bravery",
      description:
        "Zanuzinzins: The Key of Bravery est un jeu réalisé en groupe pour l'anniversaire d'un ami. Je me suis occupé du game design, du code et de l'intégration Unity, tandis que les autres membres du groupe travaillaient principalement sur les visuels. Mon rôle était aussi de coordonner le projet, de définir les besoins et de faire le lien entre les idées et leur réalisation dans le jeu.",
      images: imagePair(),
    },
    {
      title: "Mass blocking — Point & click",
      description:
        "Ce projet consistait à aider à la conception de backgrounds pour un jeu en point & click, à travers du mass blocking réalisé sur Blender. L'objectif était de poser rapidement les grands volumes, la profondeur et les zones importantes avant le travail de détail. Cette étape permet de vérifier la lisibilité d'un décor : circulation du regard, cadrage, hiérarchie des plans et masses principales.",
      images: imagePair(),
    },
    {
      title: "Sound design — Versipellis & Après la mer",
      description:
        "Ces deux projets m'ont permis de travailler le sound design pour des courts métrages réalisés par des étudiants de Rubika. Sur Versipellis, court métrage de fin d'études, il fallait construire une ambiance sonore autour de la nature, de la tension, du corps et de la transformation. Sur Après la mer, court métrage de deuxième année, le travail portait davantage sur l'accompagnement des ambiances, des actions et des transitions. Dans les deux cas, le son devient une matière narrative à part entière.",
      images: imagePair(),
    },
  ],
};

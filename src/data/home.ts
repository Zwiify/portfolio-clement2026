import type { ImageAsset } from "./types";

export interface FeaturedProject {
  id: string;
  label: string;
  href: string;
  image: ImageAsset;
}

export interface TimelineItem {
  year: string;
  desc: string;
}

export const heroContent = {
  name: "Clément Jorge",
  disciplineTop: "design",
  disciplineBottom: "graphique",
  intro: "Actuellement étudiant en design graphique,",
};

export const featuredProjects: FeaturedProject[] = [
  {
    id: "graphique",
    label: "Design Graphique",
    href: "/work/design-graphique",
    image: {
      src: "",
      alt: "Aperçu Design Graphique",
    },
  },
  {
    id: "workshop",
    label: "Workshops",
    href: "/work/workshops",
    image: {
      src: "",
      alt: "Aperçu Workshops",
    },
  },
  {
    id: "croquis",
    label: "Croquis d'extérieur",
    href: "/work/croquis-d-exterieur",
    image: {
      src: "",
      alt: "Aperçu Croquis d'extérieur",
    },
  },
  {
    id: "whiteout",
    label: "WHITEOUT",
    href: "/work/projet-de-fin-d-annee",
    image: {
      src: "",
      alt: "Aperçu WHITEOUT",
    },
  },
  {
    id: "typo",
    label: "Typographie & Mise en page",
    href: "/work/typographie-et-mise-en-page",
    image: {
      src: "",
      alt: "Aperçu Typographie et mise en page",
    },
  },
  {
    id: "modele",
    label: "Modèle Vivant",
    href: "/work/modele-vivant",
    image: {
      src: "",
      alt: "Aperçu Modèle vivant",
    },
  },
  {
    id: "packaging",
    label: "Packaging",
    href: "/work/packaging",
    image: {
      src: "",
      alt: "Aperçu Packaging",
    },
  },
];

export const aboutContent = {
  portrait: {
    src: "",
    alt: "Portrait de Clément Jorge",
  },
  timeline: [
    { year: "2025 — 2026", desc: "B1 Design Graphique" },
    { year: "2023 — 2025", desc: "STAPS" },
    { year: "2021 — 2022", desc: "Ostéopathie" },
  ] satisfies TimelineItem[],
  heading: "Clément Jorge",
  byline: "Design graphique — édition — typographie — 3D — web",
  body: [
    "Hello, je suis étudiant en design graphique, avec un intérêt particulier pour l'édition, la typographie, l'image et la 3D. J'aime construire des compositions claires, créer des univers visuels et chercher le bon équilibre entre rigueur graphique et intuition.",
    "Mon travail passe par des supports assez variés : affiches, livres, packaging, dessin, web, modélisation 3D, mais aussi des projets plus personnels autour du jeu vidéo ou du sound design. J'essaie d'y garder la même attention : créer des formes justes, sensibles, et suffisamment fortes pour donner envie de s'y arrêter.",
  ],
};

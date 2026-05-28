import type { ProjectSection } from "../layouts/ProjectLayout.astro";

export const defaultMatterSections: ProjectSection[] = [
  {
    title: "Projet 1",
    description:
      "Présentation courte du premier projet. Ce texte expliquera l'intention, le contexte et les choix graphiques principaux, pendant que les images en dessous montreront les supports les plus forts.",
    images: [
      { span: "half", tone: "bleu" },
      { span: "half", tone: "bleu" },
      { span: "half", tone: "bleu" },
      { span: "half", tone: "bleu" },
    ],
  },
  {
    title: "Projet 2",
    description:
      "Description du deuxième projet, avec une lecture plus précise du processus ou du résultat. Les images restent ajoutées par paire pour garder une grille stable et simple à alimenter.",
    images: [
      { span: "half", tone: "bleu" },
      { span: "half", tone: "bleu" },
    ],
  },
  {
    title: "Projet 3",
    description:
      "Troisième projet de la catégorie. Ce bloc peut recevoir plus ou moins d'images selon le contenu disponible, tant que l'on garde une logique de paires.",
    images: [
      { span: "half", tone: "bleu" },
      { span: "half", tone: "bleu" },
    ],
  },
];

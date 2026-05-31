export type PlaceholderTone = "bleu" | "sauge" | "beige" | "orange" | "noir";

export interface ImageAsset {
  /**
   * Chemin public de l'image.
   * Exemple : "/images/work/design-graphique/affiche-01.jpg"
   * Laisse vide pour garder le placeholder bleu.
   */
  src?: string;
  alt?: string;
}

export interface GalleryItem extends ImageAsset {
  caption?: string;
  span?: "half" | "full";
  ratio?: string;
  tone?: PlaceholderTone;
}

export interface ProjectSection {
  title: string;
  description?: string | string[];
  images?: GalleryItem[];
}

export interface WorkPageContent {
  slug: string;
  title: string;
  description: string;
  heroImage: ImageAsset;
  heroRatio?: string;
  heroTone?: PlaceholderTone;
  sections: ProjectSection[];
}

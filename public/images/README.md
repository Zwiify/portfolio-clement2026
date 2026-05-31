# Images du portfolio

Place tes images dans ces dossiers, puis renseigne leurs chemins dans les fichiers de contenu :

- Accueil / vignettes : `src/data/home.ts`
- Portrait about : `src/data/home.ts`
- Pages matieres / projets : `src/data/work.ts`

Dans le code, un chemin public commence toujours par `/images/...`.

Exemple :

```ts
image: {
  src: "/images/home/design-graphique.jpg",
  alt: "Apercu design graphique",
}
```

Pour les galeries des pages projet, remplace les chaines vides dans `gallery(...)` :

```ts
images: gallery("Matrix", [
  "/images/work/design-graphique/matrix-01.jpg",
  "/images/work/design-graphique/matrix-02.jpg",
])
```

Si `src` reste vide, le site garde automatiquement le bloc bleu placeholder.

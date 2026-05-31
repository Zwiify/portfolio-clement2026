# Portfolio Clement Jorge

Site portfolio Astro de Clement Jorge.

## Lancer le site en local

```sh
npm install
npm run dev
```

Le site tourne ensuite sur `http://127.0.0.1:4321`.

## Modifier les contenus

Les pages `.astro` gardent surtout la structure. Les textes, projets et images sont centralises dans `src/data`.

```text
src/
├── components/
│   ├── MediaBlock.astro          # affiche une image ou le placeholder bleu
│   ├── Header.astro
│   ├── ContactBlock.astro
│   └── ...
├── data/
│   ├── home.ts                   # accueil, vignettes about, parcours, texte about
│   ├── work.ts                   # liste Work + toutes les pages matieres/projets
│   └── types.ts                  # types partages
├── layouts/
│   ├── BaseLayout.astro
│   └── ProjectLayout.astro       # structure commune des pages /work/*
└── pages/
    ├── index.astro
    ├── work.astro
    └── work/*.astro              # routes, une page par matiere
```

## Modifier les images

Les vraies images doivent aller dans `public/images`.

```text
public/images/
├── home/                         # images des vignettes de l'accueil
├── about/                        # portrait / image about
└── work/
    ├── design-graphique/
    ├── packaging/
    └── ...
```

Dans le code, un fichier place dans `public/images/work/design-graphique/matrix-01.jpg` se reference comme ceci :

```ts
"/images/work/design-graphique/matrix-01.jpg"
```

Si un champ `src` reste vide, le site garde automatiquement son bloc bleu placeholder.

## Mettre a jour le site en ligne

```sh
git add .
git commit -m "Update portfolio"
git push origin HEAD:main
```

Netlify redeploie automatiquement apres le push sur `main`.

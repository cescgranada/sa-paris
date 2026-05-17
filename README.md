# SA París 2026 — Tauler d'Itineraris

Dashboard interactiu amb mapa de tots els itineraris de l'excursió de 4t ESO.

## Estructura

```
paris-2026-dashboard/
├── index.html   ← dashboard (no tocar mai)
├── data.js      ← dades de tots els itineraris (actualitzar aquí)
└── README.md
```

## Com publicar a GitHub Pages

1. Crea un repositori a GitHub (ex: `sa-paris-2026`)
2. Obre una terminal a la carpeta `paris-2026-dashboard/`
3. Executa:
   ```bash
   git init
   git branch -m main
   git add .
   git commit -m "Dashboard itineraris París 2026"
   git remote add origin https://github.com/TU_USUARI/sa-paris-2026.git
   git push -u origin main
   ```
4. A GitHub → Settings → Pages → Source: **Deploy from branch** → `main` / `/ (root)`
5. El dashboard queda publicat a: `https://TU_USUARI.github.io/sa-paris-2026/`

## Com actualitzar quan s'afegeix un itinerari

Edita **només** `data.js` — afegeix l'entrada nova a l'array `ITINERARIS_DATA`:

```js
{num: 7, status:'done', color:'#22C55E',
 titol:'A la vora del riu',
 subtitol:'...',
 arr:'7è',
 stops:['Punt 1', 'Punt 2', ...],
 route:[[lat,lng],[lat,lng],...]},
```

Després:
```bash
git add data.js
git commit -m "Afegit IT07 - A la vora del riu"
git push
```

GitHub Pages publica el canvi en menys d'un minut.

# Easy Work — Frontend

Plateforme intelligente d'édition et de transformation d'images par IA.
Frontend React + Vite + TypeScript + Tailwind CSS v4.

## Démarrer

```bash
npm install
npm run dev
```

## Structure

```
src/
├── components/
│   ├── ui/          # Composants génériques (Button, Logo, BeforeAfterSlider...)
│   ├── layout/       # Navbar, Footer
│   └── landing/      # Sections de la landing page
├── pages/            # Une page = une route
├── services/         # Appels API (authService, imageService...) — à venir
├── hooks/            # Hooks custom — à venir
├── lib/              # Utilitaires, config axios — à venir
└── types/            # Types partagés — à venir
```

## Identité visuelle

- Violet principal : `#6366F1`
- Bleu secondaire : `#3B82F6`
- Noir/texte : `#0F172A`
- Titres : Poppins — Texte : Inter

## Roadmap (voir cahier des charges)

- [x] Phase 1 — Conception / Landing page
- [ ] Phase 2 — Mise en place technique (Django, PostgreSQL, Docker)
- [ ] Phase 3 — Authentification
- [ ] Phase 4 — Dashboard
- [ ] Phase 5 — Suppression d'arrière-plan (première IA)

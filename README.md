# Shiwangi — Portfolio Website

Production-ready portfolio built with React 19 + TypeScript + TanStack Start (Vite 7) + Tailwind CSS v4.

## Folder structure

```
.
├── public/                 # static assets (robots.txt, favicon)
├── src/
│   ├── components/         # reusable UI + animation components
│   │   ├── Reveal.tsx      # scroll-reveal wrapper
│   │   └── TypeLine.tsx    # typewriter + letter-reveal effects
│   ├── hooks/              # custom React hooks
│   ├── lib/                # utilities
│   ├── routes/
│   │   ├── __root.tsx      # global shell, fonts, meta
│   │   └── index.tsx       # portfolio page (all sections)
│   ├── router.tsx
│   ├── server.ts
│   └── styles.css          # design tokens, dark theme, animations
├── package.json
├── vite.config.ts
└── tsconfig.json
```

## Run locally

```bash
npm install
npm run dev      # http://localhost:8080
```

## Build

```bash
npm run build
```



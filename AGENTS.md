# AGENTS.md — study-app

## Commands
- `npm run dev` — start Vite dev server
- `npm run build` — typecheck (`tsc -b`) then build (`vite build`)
- `npm run lint` — ESLint flat config on all `.ts,tsx`
- `npx prettier --write src/` — format (no prettierrc; falls back to defaults)

## Framework & toolchain quirks
- **Tailwind v4**: no `tailwind.config`, no PostCSS. Configured via `@tailwindcss/vite` plugin. Entry: `@import "tailwindcss"` in `src/index.css`.
- **TypeScript ~6.0** with `verbatimModuleSyntax: true` (use `import type` for type-only imports) and `erasableSyntaxOnly: true` (no enums, no `namespace`, no `parameter properties`).
- **ESLint 9 flat config**: edits go in `eslint.config.js`. `noUnusedLocals`/`noUnusedParameters` are on.
- **React 19**: no router, no state library. Single `App.tsx` handles all state with `useState`.
- **No test framework** — skip anything that expects jest/vitest/playwright.

## Architecture
- **Single-page app** (no routing). Entry: `src/main.tsx` → `<App />` in `src/App.tsx` (monolithic, ~774 lines).
- **Bilingual** (English / Bengali). UI strings: `src/data/translation_en.ts` / `translation_bn.ts`. Lesson content has `*Bn` fields.
- **Content is static TS** in `src/data/modules/`. No backend, no API calls, no DB. Built into bundle at compile time.
- **Deployment**: static SPA via Vercel (no Dockerfile, no server config in repo).
- **No CI, no pre-commit hooks, no codegen, no migrations.**

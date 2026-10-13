# AGENTS.md — study-app

## Agent workflow
- **Never dispatch subagents in parallel — one at a time, for every task.** No batching, no "these
  look independent", no "kick them off and review after". Finish and verify one unit of work, then
  start the next.
- A cancelled subagent leaves half-written files behind, so parallel dispatch loses N partial jobs
  instead of 1. Always audit the filesystem after an agent returns; never trust its success report.
- Prefer doing small work directly over spawning a subagent for it.

## Commands
- `npm run dev` — start Vite dev server
- `npm run build` — typecheck (`tsc -b`) then build (`vite build`)
- `npm run lint` — ESLint flat config on all `.ts,tsx`
- `npx prettier --write src/` — format (no prettierrc; falls back to defaults)

## Notes pipeline (`notes/`) — lesson-wise commands
Every stage is a separate command in `.opencode/command/`. **Targets are lesson slugs — a
chapter is never a valid target**, so no command can sweep a whole chapter and blow the usage
limit.

| Stage | Command | Script |
|---|---|---|
| Author | `/notes-prep <slug>` | `check.mjs` (verify) |
| Gate | `/notes-check <slug>` | `node notes/build/check.mjs` |
| Visual QA | `/notes-qa <slug>.<lang>` | `node notes/build/snap.mjs` |
| Render | `/notes-render <slug>` | `node notes/build/render.mjs` |
| Register | `/notes-manifest <slug>` | — |
| Publish | `/notes-publish <slug>` | `node notes/build/publish.mjs` |
| Database | `/notes-apply` | `cd server; cmd /c "npm run notes:apply"` |
| All stages | `/notes-ship <slug>` | one lesson only |

- Commands take a slug and resolve the chapter folder themselves: `manifest.json` →
  `notes/src/*/<slug>.en.html` → seed module. `chapterDir()` in `server/src/db/applyNotes.ts`
  is the authority for the folder name — never invent one.
- If given a chapter, list that chapter's lessons with slugs and ask which one. Never loop over
  a chapter, and never author a second lesson in one invocation.
- `/notes-prep` runs `check.mjs` itself, so the normal per-lesson loop is six commands.
- `/notes` with no action only prints the tables — it routes, it does no work.
- `notes/AUTHORING.md` is the style contract; read it before authoring. `notes/README.md` is the
  flow guide and holds the lesson-wise breakdown of all 82 seed lessons.
- Fill target 85-95%, ceiling ~96% (`scrollHeight` includes trailing margin + `padding-bottom`).
- Fill is not overflow — 88% can still spill sideways; `check.mjs` measures vertical only.
- Never edit `notes/assets/hw.css`, `public/notes/`, a build script, or `notes/src/` root.

### Notes gotchas that cost real time

These are verified, not theoretical. Full detail lives in `notes/README.md` §3.

- **`.ink-b` does not exist in `hw.css`** — and it is worse than invisible. An unstyled SVG
  `<path>` defaults to `fill: black; stroke: none`, so it renders as a solid blob. Use `.ink`.
- **Every Bangla SVG `<text>` needs `class="bn …"`** — Kalam has no Bangla glyphs, so a missing
  class renders as tofu and still passes every gate.
- **`heading.bn` and `takeaways.bn` are required even when `langs: ["en"]`.** `applyNotes.ts`
  calls `viewerHtml(entry, "bn")` unconditionally and indexes `heading[lang]` with no fallback,
  so a missing one aborts the whole apply with
  `TypeError: Cannot read properties of undefined (reading 'replace')` before any slug is
  reported — every slug is left unapplied, not just the new one. Set them to the English values.
- **Never derive `lessonTitleEn` from the note HTML's `<title>`.** A note heading may be
  deliberately shorter than the seed title (chapter 17 `se4`), and you get
  `skipped … no matching lesson`. Use an explicit slug → seed id map into the seed module.
- **The last sheet is exempt from the 72% fill floor** (`check.mjs` tests `i < fills.length`),
  so a short closing sheet is legal.
- **An over-full sheet needs redistribution, not padding.** Split it, then donate a whole
  section from an adjacent over-full sheet so the donor drops in one move. See README §3.
- **Scope scripted edits to one `section.page`.** A chapter-wide replace leaks into every
  sheet. Regexes can also emit a duplicated `style` attribute, which `check.mjs` does not flag.
- **`.circ` must not wrap** — it is `inline-block` with an ellipse sized to the box, so wrapped
  text balloons the ellipse over its neighbours. Long phrases get their own `nowrap` line.
- **Wide tables overflow `minmax(0,1fr)` tracks sideways** into the neighbouring column, not
  off the sheet, so every vertical measurement stays green.
- **`figure.doodle svg { overflow: visible }`** — a `<text>` wider than the `viewBox` escapes
  onto the page instead of being clipped.
- **`render.mjs` reads only `notes/src/*.html`**, never `notes/md/*.md`. Only `publish.mjs`
  consumes the Markdown, so a stale `.md` surfaces as a stale `.note.pdf` at publish time.
- **An EN-only set publishes 6 files, not 14** — no `.bn.html`, no `.bn.md`.
- **Existing files are not evidence they are good.** An orphan can look complete and fail at
  143% on one sheet. Run `check.mjs` before deciding no work is needed.
- **`.mnote` and `.sticky` are right-floats** (`width: 42mm` / `52mm`). Inside a `.cols`
  column (~90mm) they squeeze the text beside them into a ribbon or overlap the next block.
  Use them at full page width, or force `style="float:none;width:auto"` inside a column.
- **Overlap is not overflow.** `check.mjs` measures vertical extent only, so a sheet can read
  92% and still have unreadable overlapping text. PASS is necessary, never sufficient.
- **`langs: ["en"]` hides Bangla without erroring.** `noteLang()` falls back to
  `publishedLangs()[0]`, so every stage still reports success while a Bangla reader gets
  English. If someone reports "no Bangla in the web", check `langs` in the manifest first.
- **Once a set goes bilingual, `heading.bn` stops being a fallback and becomes user-visible.**
  Replace the English placeholder with real Bangla in the same change that removes `langs`.
- **Match the full class attribute when scripting.** `class="sticky pink"` is not
  `class="sticky"`, so a regex for the bare form silently misses every modifier variant.
- **Match the exact punctuation** when doing exact-string edits — an em dash vs a hyphen makes
  a replacement silently no-op.
- **`cmd /c` only works from PowerShell.** In a bash shell use `cmd //c`, or `cmd` opens an
  interactive prompt that prints a banner and runs nothing.
- **Grep apply output by exact slug.** `pyq-se` has no `se-` substring, so a chapter-prefix
  filter drops it and you report a registered set as missing.

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

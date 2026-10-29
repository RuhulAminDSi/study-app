# AGENTS.md — study-app

## Agent workflow
- Run subagents one at a time, never in parallel. A cancelled subagent leaves half-written
  files behind, so after any agent returns, audit the filesystem; don't trust its report.
- Prefer doing small work directly over spawning a subagent.

## Layout
- Two packages, no workspace tooling: root (React + Vite SPA) and `server/` (Express + Postgres,
  its own `package.json` and `node_modules`). Run `npm install` in both.
- Frontend entry: `src/main.tsx` → `src/App.tsx`. Routing is hash-based, parsed in `src/router.tsx`
  (`#/notes`, `#/pyq`, `#/exams…`, `#/chapter/<uuid>/lesson/<uuid>`, `#/admin/…`). No router library.
- Frontend calls the API via `src/public/publicApi.ts` (`/api/public…`) and the exam code in `src/exam/`.
- Backend entry: `server/src/index.ts` → `server/src/app.ts`. Config in `server/src/config.ts`.
  `server/index.ts` is a stale file from an old AI-gateway prototype (imports services that don't exist). Don't edit or run it.
- Bilingual UI strings: `src/data/translation_en.ts` / `translation_bn.ts`.
- Seed lesson modules live in `server/data/modules/`; question JSON in `server/data/questions/`.
- `README.md` is partly out of date (describes the AI gateway and an `.opencode` layout). Trust `package.json` and `src/` over it.

## Commands
- Frontend (repo root):
  - `npm run dev` — Vite dev server only
  - `npm run build` — `tsc -b` then `vite build`; this is the typecheck gate
  - `npm run lint` — ESLint flat config, `.ts`/`.tsx`
  - `npm run dev:all` — Vite plus the API server together
- Backend (`cd server`):
  - `npm run dev` — tsx watch on `src/index.ts`
  - `npm test` — Vitest, integration tests against Postgres; `npx vitest run test/<file>.test.ts` for one file
  - `npm run notes:apply` — writes note sets into the DB
  - `npm run check:content` — question/blueprint/kit checks
- Verification order for a change: `npm run lint` → `npm run build` → relevant `server` tests.
- No Prettier config in the repo. Don't run a formatter over the whole tree.
- Frontend has no test runner. Playwright is a devDependency with no test config; don't assume a suite exists.

## Server tests need a database
- `server/test/test-db-url.ts` refuses any DB whose name doesn't end in `_test`. It uses
  `TEST_DATABASE_URL`, or `DATABASE_URL` with the database renamed to `study_hub_test`.
- `global-setup.ts` creates the test DB and migrates it on each run. Files run serially (`fileParallelism: false`).
- Needs `server/.env` (copy from `.env.example`). Never read or print `.env`; it holds real secrets.

## Notes pipeline (`notes/`)
Each stage is a separate command: `.opencode/command/notes-*.md`, with `notes.md` as a router. The
same commands also exist under `.claude/commands/`. Targets are **lesson slugs**. A chapter is never
a valid target. If given a chapter, list its lessons and ask which one. Never loop over a chapter.

| Stage | Command | Script |
|---|---|---|
| Author | `/notes-prep <slug>` | `check.mjs` (runs it itself) |
| Gate | `/notes-check <slug>` | `node notes/build/check.mjs` |
| Visual QA | `/notes-qa <slug>.<lang>` | `node notes/build/snap.mjs` |
| Render | `/notes-render <slug>` | `node notes/build/render.mjs` |
| Register | `/notes-manifest <slug>` | writes `server/data/notes/manifest.json` |
| Publish | `/notes-publish <slug>` | `node notes/build/publish.mjs` |
| Database | `/notes-apply` | `cd server; cmd /c "npm run notes:apply"` (`cmd //c` from bash) |
| All stages | `/notes-ship <slug>` | one lesson only |

- Chapter folder: `chapterDir()` in `server/src/db/applyNotes.ts` is the authority. Copy the name
  from an existing folder under `notes/src/`; never invent one.
- Read `notes/AUTHORING.md` before authoring. `notes/README.md` has the flow guide.
- Fill target 85–95%; the ceiling is ~96% (`scrollHeight` includes margin and padding). `check.mjs`
  measures vertical fill only. It does not catch horizontal overflow or overlap.
- Never edit `notes/assets/hw.css`, `public/notes/`, a build script, or the `notes/src/` root.
- `render.mjs` reads only `notes/src/*.html`. `publish.mjs` reads the Markdown. An English-only set
  publishes 6 files, not 14.

### Notes gotchas (verified)
- `.ink-b` does not exist in `hw.css`. An unstyled SVG `<path>` renders as a solid black blob. Use `.ink`.
- Every Bangla SVG `<text>` needs `class="bn …"`. Without it Kalam shows tofu, and the gate still passes.
- `heading.bn` and `takeaways.bn` are required even when `langs: ["en"]`. Missing ones abort the
  whole `notes:apply` run before any slug is reported.
- Don't derive `lessonTitleEn` from the note's `<title>`. Use the explicit slug → seed id map.
- The last sheet is exempt from the 72% fill floor.
- Scope scripted edits to one `section.page`. Regexes can produce duplicate `style` attributes that
  `check.mjs` won't flag.
- `.circ` must not wrap. Wide tables overflow sideways into neighbouring columns.
- `.mnote` and `.sticky` are right-floats (42mm / 52mm). Inside a `.cols` column, add
  `style="float:none;width:auto"`.
- `langs: ["en"]` hides Bangla without erroring, because `noteLang()` falls back to the first published language.
- Match the full class attribute when scripting (`class="sticky pink"`, not `class="sticky"`).
- Grep apply output by exact slug. `pyq-se` doesn't contain `se-`.
- An existing file isn't evidence it's good. Run `check.mjs` first.

## TypeScript / React quirks
- TypeScript ~6.0 with `verbatimModuleSyntax` (use `import type`), `erasableSyntaxOnly` (no enums,
  namespaces or parameter properties), and `noUnusedLocals`/`noUnusedParameters`.
- ESLint 9 flat config lives in `eslint.config.js`.
- Tailwind v4 via `@tailwindcss/vite`. There is no `tailwind.config`. Entry is `@import "tailwindcss"` in `src/index.css`.
- React 19. State is local `useState`/hooks; there is no global state library.
- Frontend deploys to Vercel (`.vercel/` is linked). The backend appears to run on Azure App Service
  (`TRUST_PROXY` comment, `azure-logs*/` folders). Check before assuming either.

## Repo hygiene
- Root contains many stray artifacts: screenshots, zips, `--outDir/`, `bash.exe.stackdump`, `filelist.txt`.
  Don't add scratch files to the root. Keep probes in `%TEMP%`.
- `server/uploads/` holds user uploads. Don't commit or edit them.
- Don't run `git commit` unless asked.

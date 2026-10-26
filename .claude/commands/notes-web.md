---
description: Turn on the in-lesson Web view (the note rendered natively in the app's UI) for one lesson, a chapter, or every published note set — audit, enable, build, verify in the browser.
argument-hint: "<slug> | <NN-chapter> | --all | --remove <slug> | --list"
---

# `/notes-web` — show a lesson's note as a native web page

Target from `$ARGUMENTS`:
- `<slug>` (e.g. `os-deadlock`), several slugs, or a chapter folder (e.g. `18-operating-system`)
- `--all`: every published note set
- `--remove <slug>`: turn the Web view off again
- `--list`: show which sets have it
- nothing: run `--list` and ask which lessons to enable

## What the Web view is

Lessons with a note set open on a **Web** tab, before the existing **Note** (PDF) and
**Handwritten note** (PDF) tabs, which are unchanged. `src/components/NoteWebView.tsx` fetches the
published `public/notes/<NN-chapter>/<slug>/<slug>.<lang>.html` and renders it inside the lesson in
the app's own design (`.nw` rules in `src/index.css`): dark and light themes, numbered sections,
themed callouts and diagrams, an on-this-page rail (a fold-out menu on phones) and a hidden answer key.

Which sets get it is the list in `src/data/webNoteSlugs.json`. **Never edit that file by hand**;
`notes/build/web-enable.mjs` edits it after auditing each set.

Scope: **only the Web view switch.** Do not author, render, publish or apply notes here. A set must
already be published (`/notes-publish`) and attached to its lesson (`/notes-apply`).

## 1. Audit (dry run)

```bash
node notes/build/web-enable.mjs <targets> --dry-run
```

Read the output per set:
- `add` / `ok`: passes; `ok` means it is already enabled.
- `FAIL`: the published HTML is missing or has no sections. Do not enable it; report it.
- `unstyled classes: …`: markup the web view has no style for. It still renders, as plain text.
  If a class matters (a callout, a label, a citation), add a rule under `.nw-article` in
  `src/index.css` that uses the `--nw-*` colour tokens, so both themes work, then add the class to
  `SUPPORTED` in the script. Per-note `<style>` blocks are dropped by the web view, so anything a
  note styles itself (as the PYQ sets do with `.ask`, `.sql` and `.out`) needs a `.nw-article` rule.
- `not in manifest.json`: no lesson shows this set yet. Enabling it is harmless, but say so.

## 2. Enable

```bash
node notes/build/web-enable.mjs <targets>
```

## 3. Build

```bash
npm run build
npx eslint src/components/NoteWebView.tsx src/components/NotesViewer.tsx
```

`npm run build` must pass. If you changed `src/index.css`, lint does not cover it; check it in the browser.

## 4. Verify in the browser (Playwright MCP, `npm run dev:all`)

Find the lesson: `GET /api/public/lessons/published` (match `title_en`), then
`GET /api/public/menus` for its `chapter_id`, then open
`http://localhost:5173/#/chapter/<chapter_id>/lesson/<lesson_id>`. To check a newly enabled set,
load the page fresh (go to `about:blank` first); changing only the hash keeps the old view state.

For a single lesson, check every point below. For a chapter or `--all`, check one ordinary lesson and
one `pyq-*` set in full, and for the rest only that the Web tab loads with no error box.
- The lesson opens on **Web**, and the note sits in the card with no sheet, iframe or inner scrollbar.
- **Desktop (1440 px):** the on-this-page rail is on the right, stays visible while scrolling and
  highlights the current section, and clicking an entry jumps there.
- **Phone (390 px):** single column, the "On this page" menu folds open, the page does not scroll
  sideways (`document.documentElement.scrollWidth <= clientWidth`), and wide tables scroll inside
  their own box.
- **Dark and light themes:** text, callouts and diagram strokes are readable in both (toggle the
  sun icon, or the `light-theme` class on `<html>`).
- **Bangla and English** (the EN/BN switch): Bangla MCQ options are lettered ক খ গ ঘ.
- **PYQ sets:** every past question still shows its "✎ Asked in: …" / "✎ যে পরীক্ষায় এসেছে: …"
  line. This is required: never ship a PYQ set where the citations disappeared.
- The **Note** and **Handwritten note** tabs still show their PDFs.

## Undo

```bash
node notes/build/web-enable.mjs --remove <slug>
npm run build
```

## Report

The sets enabled (or removed), any `FAIL` or unstyled classes and what you did about them, and the
lessons you checked in the browser.

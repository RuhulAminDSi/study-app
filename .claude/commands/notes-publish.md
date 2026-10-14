---
description: Publish one lesson's rendered note set into public/notes/ with covers, typed-note PDFs and metadata JSON. Lesson-wise target only. Requires a rendered PDF.
argument-hint: "<slug> or CH/SLUG"
---

# `/notes-publish` — publish one lesson set into `public/notes/`

Target from `$ARGUMENTS`: `<slug>` — e.g. `os-deadlock`. `CH/SLUG` is also accepted; the
chapter part is only a hint, use the slug.

**One lesson per invocation.** If given a chapter or chapter number, list its lessons and ask
which one — or publish one at a time only if the user insists. Never loop silently over a
whole chapter.

Scope: **publishing only.** Do not author, check, render or edit the manifest here. If the set
 is missing or stale, say so and point at `/notes-prep`, `/notes-check`, `/notes-render` or
`/notes-manifest`.

To resolve a slug to a chapter folder: check `server/data/notes/manifest.json` for the slug's
`chapterNumber`, else find `notes/src/*/<slug>.en.html`. `chapterDir()` in
`server/src/db/applyNotes.ts` decides the canonical value — copy it from an existing folder;
never invent one. Getting this wrong publishes into a folder the app never reads.

## Run it

```bash
node notes/build/publish.mjs <slug>
```

Copies the set into `public/notes/<NN-chapter>/<slug>/`, injects `fit.js` (scales A4 sheets to
narrow screens; print unaffected), and builds the covers, typed-note PDF and metadata JSON.

Sources without a rendered PDF are **skipped with a warning**. A skip means `/notes-render`
has not run, or the HTML changed after its last render — publish cannot fix it.

## Expected output — 14 files per note set (7 per language)

```
<slug>.<lang>.html              handwritten note (fit.js injected)
<slug>.<lang>.pdf               handwritten A4 PDF
<slug>.<lang>.md                typed companion
<slug>.<lang>.note.pdf          typed note as a PDF (the in-app web view)
<slug>.<lang>.cover.jpg         first sheet — PDF thumbnail
<slug>.<lang>.note.cover.jpg    first screen of the typed note
<slug>.<lang>.json              metadata: pages, byte sizes, contents list
```

An **English-only** set (`langs: ["en"]` in the manifest) has no `.bn.html` and no `.bn.md`, so
it publishes **6 files, not 14**. That is correct for such a set — do not treat the missing
Bangla files as a failed publish, and do not invent them here.

## Verify

- All 14 files exist per published bilingual set (6 for an English-only set), none zero-byte.
- The published HTML contains the injected `fit.js`.
- Every `cover.jpg` is a real image, not a blank or all-black page — a bad first sheet ships
  as a blank thumbnail. Check **ink coverage**, not the per-channel mean: a cream
  ruled-paper background with a few dark strokes averages bright in every channel and looks
  "blank" to a mean-value test while being perfectly fine.
- Nothing was published for a set whose `check.mjs` gate was failing.

## Never

Hand-edit anything in `public/notes/` — it is generated. Never edit `notes/assets/hw.css`, a
build script, or a note source to make publishing succeed. Never run `git commit` unless
explicitly asked.

## Report

Per slug: the published folder, the file count, and the byte size of the PDFs. List every
skip with its reason. Then state the next step: `/notes-apply` to register in the database.

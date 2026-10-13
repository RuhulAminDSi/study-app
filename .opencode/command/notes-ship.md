---
description: Run the full notes pipeline for ONE lesson slug — prep, check, QA, render, manifest, publish, apply, verify. A chapter is not a valid target. Use when you want the whole flow; use /notes-prep etc. to run single steps.
agent: build
---

# `/notes-ship` — the full flow for one lesson

Target from `$ARGUMENTS`: `<slug>` — e.g. `os-deadlock`. `CH/SLUG` is also accepted; the
chapter part is only a hint, use the slug.

**A chapter is not a valid target.** If the user passes one, list that chapter's lessons with
their slugs and ask which to run. One lesson, one invocation — that is the whole scope.

Runs the seven stages below **in order** for that one lesson, stopping to report after each.
If you only need one stage, use the individual command instead — they are cheaper and are the
intended way to work:

| # | Stage | Command | What it does |
| --- | --- | --- | --- |
| 1 | Prep | `/notes-prep` | author sources + Markdown, verified |
| 2 | Check | `/notes-check` | QA gate, fix failures |
| 3 | QA | `/notes-qa` | PNG snapshots, inspect Bangla glyphs |
| 4 | Render | `/notes-render` | HTML → A4 PDF |
| 5 | Manifest | `/notes-manifest` | register in `manifest.json` |
| 6 | Publish | `/notes-publish` | copy into `public/notes/` |
| 7 | Apply | `/notes-apply` | write to the database |

Stage 1 folds stage 2 into itself — `/notes-prep` runs `check.mjs` itself.

Prefer the six separate invocations if the usage limit is tight. `/notes-ship` is the one
command that does a whole lesson end to end, and a lesson is already a large job.

## Budget: one lesson, one invocation

Never run two lessons in a single invocation. When this one finishes, name the next lesson's
slug and the exact command to run for it, then stop. This is a hard stop, not a suggestion.

## One agent at a time — never parallel

Dispatch **exactly one** authoring agent and wait for it to finish completely.

Why this is non-negotiable: parallel agents get cancelled together, so a batch of four loses
four half-written lessons instead of one. On a real run four agents were dispatched at once and
all four were cancelled — 8 HTML files survived but **2 were byte-identical copies of the
exemplar** that still reported `PASS` from `check.mjs`, the Markdown directory stayed empty, and
a pre-existing broken file was never touched.

A cancelled agent is not a slow agent. **Never re-dispatch a replacement before auditing the
filesystem.** After the agent: verify all 4 files exist at the sizes listed in `/notes-prep`,
run `check.mjs`, read the `<title>` and `h2` headings to confirm the content is genuinely this
lesson's, scan for U+FFFD, and delete stray scratch files.

## Stage rules (full detail lives in each command)

Load the matching command file and follow it rather than working from memory here.

1. **Prep** — `/notes-prep <slug>`; read `notes/AUTHORING.md` first, it is the style
   contract. Seed content from `server/data/modules/<NN>_<Name>.js`. Copy a passing sibling
   rather than authoring blank. Target **85-95% fill**, ceiling ~96%. Bangla numerals
   `০১২৩৪৫৬৭৮৯`; every Bangla SVG `<text>` needs `class="bn …"`; `.ink-b` does not exist — use
   `.ink`.
2. **Check** — `node notes/build/check.mjs <slug>`. Zero overflow, ≥72% fill on all but the
   last sheet, and the hidden gates (`.hl` ≥15, `.circ` ≥8, doodles ≥6, `.trick` ≥3). Already
   run by stage 1 — repeat only if a source was edited afterwards.
3. **QA** — `node notes/build/snap.mjs <slug>.<lang>`, then actually read every PNG. Tofu,
   clipped SVG and overlapping labels are invisible to `check.mjs`.
4. **Render** — `node notes/build/render.mjs <slug>`. Re-render anything edited afterwards,
   including a `<title>` fix.
5. **Manifest** — `server/data/notes/manifest.json`, one entry per set. `lessonTitleEn` must
   equal the seed `title` character-for-character. `heading.*` from each HTML's own `<title>`.
   Generate with a Node script; assert zero U+FFFD after writing.
6. **Publish** — `node notes/build/publish.mjs <slug>`. 14 files per set, 7 per language.
7. **Apply** — `cd server; cmd /c "npm run notes:apply"` (server script; PowerShell blocks
   bare `npm`).

## Final verification — do not report success until all hold

- `check.mjs` PASS for every `en` and `bn` file of the target.
- Every PDF exists with a `%PDF-` header and a page count equal to the sheet count from `check.mjs`.
- `public/notes/<NN-chapter>/<slug>/` holds 14 files per note set (7 per language).
- `notes:apply` printed `replaced` (or `refreshed` / `added`) for each slug, **not** `skipped`.
- U+FFFD scan clean across HTML and Markdown.
- `git status --short` shows only intended files.

## Never

Never edit `notes/assets/hw.css`, an unrelated note source, a build script, or `public/` by
hand. Never write to `notes/src/` root. Keep scratch files in `%TEMP%/opencode/<slug>/`. Never
put "seed", "question bank", "manifest" or source file names into the notes, and never claim
"asked in BPSC 20xx" — use "high-yield". Never dispatch more than one authoring agent at a
time. **Never accept a chapter as the target, and never run a second lesson in one
invocation.** Never run `git commit` unless explicitly asked.

## Report

Give the user: the `check.mjs` lines verbatim, sheet counts, PDF page counts, files published,
manifest entries added, DB action per slug, and anything you corrected in the seed content —
agents have caught real arithmetic errors in the seed modules, and those findings matter more
than the pass/fail summary. Then name the **next** lesson and the exact command to run for it,
since only one lesson was handled in this invocation.
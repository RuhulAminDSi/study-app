# Authoring a lesson note set

How to write one lesson's revision notes (`notes/src/<NN-chapter>/<slug>.en.html` + `.bn.html`) so they
match the existing sets. Everything is organised by chapter: `<NN-chapter>` is the seed module's number and
title (`02-introduction-to-computer-systems`, `03-electrical-circuits`, …; `chapterDir()` in
`server/src/db/applyNotes.ts` derives it), and the same folder level is used under `notes/md`, `notes/pdf`,
`notes/snap` and `public/notes`. A new set goes in the folder of the chapter its manifest entry names, or
`notes:apply` skips it as "not published yet". The build scripts accept a name (`<slug>.<lang>`), a bare slug
(both languages) or a chapter folder (every set in it). Design spec: `../docs/superpowers/specs/2026-10-07-handwritten-notes-design.md`
(repo root `D:\COACH\docs\...`). Run every command from `study-app/`.

## Read first
1. **The exemplar, in full:** `notes/src/04-digital-logic-design/dld-boolean-algebra.en.html`. Copy its skeleton exactly: the `<head>`,
   the hidden `<svg><defs>` block (wobble filters, arrow markers `ah` red, `ahb` blue, `ahg` green, `ahp` purple;
   drop the gate symbols unless you draw gates), the `section.page` sheets, and the fill/overflow `<script>` at the end.
2. **Bangla conventions:** the first ~120 lines and the practice sheet of `notes/src/04-digital-logic-design/dld-logic-gates.bn.html`.
3. **The class vocabulary:** `notes/assets/hw.css` (do not edit it). Main pieces: `.def .trick .exam .ex .tipbox .sumbox`
   boxes with `<span class="lbl">`, `.hl` highlight, `.circ` red circle, `.mnote` margin note, `.sticky`, `table.hand`,
   `figure.doodle` (inline SVG; shapes inside `<g class="w">` get the wobble, text never does), `.cols`/`.cols3`/`.fgrid`,
   `.tag`, `ol.steps`, `.code`, `.mcq-set`/`.mcq`, `.anskey`, `.wq` with `.mk`. SVG classes: `ink ink-k ink-r ink-g ink-p`,
   `fill-y fill-b fill-r fill-g fill-p`, text `k r g p s l w6 bn`.

## Sources for the content
- **The seed lesson** you are replacing: `server/data/modules/<n>_<Subject>.js`, lesson `id` given in your task.
  Cover everything it covers; fix its mistakes (list each fix in your report).
- **The syllabus line:** `../docs_temp/all_docs_content.txt` (grep the subject name). Quote the relevant part on the
  cover as "Syllabus coverage" / "সিলেবাসের যে অংশ".
- **The question bank:** `server/data/questions/<CODE>.json`. Facts in the notes must agree with it. If the bank
  looks wrong, follow the correct fact and report the question.
- Your own knowledge at university / job-exam depth. Double-check every number, formula, year, and table.

## Audience and tone
Candidates for Bangladesh government IT recruitment exams (BPSC Assistant Programmer, Bangladesh Bank Assistant
Programmer/AME, Bankers' Selection Committee Officer (IT), and similar). Professional, exam-level, dense with
MCQ facts and written-exam derivations or algorithms. No HSC/school framing, no textbook page refs, no childish
nicknames, minimal emoji. **Never claim "asked in BPSC 20xx"**: say "high-yield" / "frequently tested".
The handwritten look is the aesthetic only.

## Structure (8–11 sheets per language)
1. **Cover:** pg-head, cover-band, `h1.title` with `<span class="u">`, subtitle ("… exam-ready in N sheets"),
   a mind-map doodle of the topic (red boxes = high-yield), a `.sticky` high-yield list, syllabus coverage,
   the legend tipbox, a two-column contents list with page numbers.
2. **Topic sheets:** numbered `h2` (`<span class="no">n</span>`) + a `.tag`; definition → doodle → table →
   memory trick → exam trap → worked example; an IT/practical link where one exists. Mention the neighbouring
   lessons of the chapter when a topic belongs to them rather than duplicating them.
3. **Night-before sheet:** formulas/constants/one-liners/traps/all the tricks, compact.
4. **Practice sheet (last):** 10 MCQs (`.mcq-set`), answers spread across a–d, one `.anskey` line, one written
   question (`.wq` + `.mk`) with a marked model answer, a "before the exam ✓" checklist.

The `.pg-head` left span is `<Subject short> · <Lesson short title>`; `.pg-no` numbers every sheet.
Code (C, SQL, assembly, pseudo-code) goes in `.code` blocks; keep them short.

## Bangla version
A full translation of the English set with the same sheets, doodles and facts (not a summary). `<html lang="bn">`.
Bangla numerals in prose, page numbers, contents and answer keys (১, ২ …); Latin digits in formulas, tables, code,
IC/model numbers and units. MCQ options are lettered ক–ঘ automatically. Keep English technical terms in brackets
the first time (e.g. "ডেডলক (Deadlock)"), as candidates see both in exams. Every Bangla `<text>` inside an SVG needs
`class="bn …"` (Kalam has no Bangla glyphs); Bangla inside `.code` also needs care. Translations of standard
terms should follow common BD textbook/exam usage.

## Notation
Complement `A′` in text; overbars only in diagram labels. Use real symbols (≤ ≥ → ⇒ ∑ ∏ √ ∞ π Ω μ ε λ θ ×).
Escape `&` as `&amp;` and `<` as `&lt;` in HTML (code blocks especially).

## Quality gates (must all pass for both languages)
```
node notes/build/check.mjs <slug>.en <slug>.bn     # PASS: no overflow, every sheet but the last >= 72% full,
                                                    # >= 15 .hl, >= 8 .circ, >= 6 doodles, >= 3 .trick
node notes/build/snap.mjs <slug>.en                 # PNG per sheet in notes/snap/<NN-chapter>/<slug>.en/
node notes/build/snap.mjs <slug>.bn
node notes/build/render.mjs <slug>.en <slug>.bn     # PDF in notes/pdf/<NN-chapter>/
```
Then **look at every PNG** (Read tool) and fix overlaps, text running outside boxes or doodles, clipped SVG,
labels colliding with shapes, missing Bangla glyphs (boxes/tofu), and lopsided columns. Re-run until clean.
Finally confirm each PDF has exactly as many pages as there are sheets:
`node -e "const s=require('fs').readFileSync('notes/pdf/<NN-chapter>/<name>.pdf','latin1');console.log((s.match(/\/Type\s*\/Page[^s]/g)||[]).length)"`.

Fill tips: a sheet is 297 mm with fixed margins; if a sheet overflows move a block to the next sheet or tighten
a table with `class="small"`; if it is under 72% add a worked example, a table row, or an exam trap, never filler.
The **last sheet is exempt** from the 72% floor, so a short closing sheet is the right place to move overflow to.
A sheet far over the gate needs redistribution — split it, then donate a whole section from an adjacent over-full
sheet — because there is never enough content on one sheet to fill two.

The gate does **not** check sideways. A sheet can read 88% and still be broken: a wide table's min-content width
overflows a `minmax(0,1fr)` track into the neighbouring column, and `figure.doodle svg` has `overflow: visible`,
so a `<text>` wider than the `viewBox` escapes onto the page. Also keep `.circ` from wrapping — it is
`inline-block` with an ellipse sized to the box, so a wrapped phrase balloons the circle over its neighbours.

`.ink-b` does not exist in `hw.css`; an unstyled path falls back to `fill: black` and renders as a solid blob.
Use `.ink`.

`.mnote` and `.sticky` are `float: right` at fixed widths (42mm / 52mm). At full page width that is the intended
margin-note look; inside a two-column `.cols` layout they squeeze the neighbouring text into an unreadable ribbon and
two of them overlap. Inside a column add `style="float:none;width:auto"`, or use `.def` / `.sumbox` / `.trick`, which
are block elements and are safe anywhere. Neither overflow nor overlap is caught by `check.mjs` — read the PNGs.

## Do not
Edit `hw.css`, other note sources, `server/data/notes/manifest.json`, or anything in `public/`; run `publish.mjs`
or `notes:apply`; commit. Report back instead (see the task for the report format).

## Scratch files
Several authors work at once. Keep helper scripts and temporary files in a folder of your own named after your
slug (e.g. `<scratchpad>/<slug>/`), never at the top of a shared scratch directory.

## Never in the notes
Candidates never see the app's internals: no "seed", "seed lesson", "question bank", "manifest" or file names in
the sheets. Put a corrected misconception in an "Exam trap" or "Common misconception" box, without saying where the
wrong version came from; report the correction to the coordinator instead.

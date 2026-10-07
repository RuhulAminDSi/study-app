# Authoring a lesson note set

How to write one lesson's revision notes (`notes/src/<slug>.en.html` + `notes/src/<slug>.bn.html`) so they
match the existing sets. Design spec: `../docs/superpowers/specs/2026-10-07-handwritten-notes-design.md`
(repo root `D:\COACH\docs\...`). Run every command from `study-app/`.

## Read first
1. **The exemplar, in full:** `notes/src/dld-boolean-algebra.en.html`. Copy its skeleton exactly: the `<head>`,
   the hidden `<svg><defs>` block (wobble filters, arrow markers `ah` red, `ahb` blue, `ahg` green, `ahp` purple;
   drop the gate symbols unless you draw gates), the `section.page` sheets, and the fill/overflow `<script>` at the end.
2. **Bangla conventions:** the first ~120 lines and the practice sheet of `notes/src/dld-logic-gates.bn.html`.
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
node notes/build/snap.mjs <slug>.en                 # PNG per sheet in notes/snap/<slug>.en/
node notes/build/snap.mjs <slug>.bn
node notes/build/render.mjs <slug>.en <slug>.bn     # PDF in notes/pdf/
```
Then **look at every PNG** (Read tool) and fix overlaps, text running outside boxes or doodles, clipped SVG,
labels colliding with shapes, missing Bangla glyphs (boxes/tofu), and lopsided columns. Re-run until clean.
Finally confirm each PDF has exactly as many pages as there are sheets:
`node -e "const s=require('fs').readFileSync('notes/pdf/<name>.pdf','latin1');console.log((s.match(/\/Type\s*\/Page[^s]/g)||[]).length)"`.

Fill tips: a sheet is 297 mm with fixed margins; if a sheet overflows move a block to the next sheet or tighten
a table with `class="small"`; if it is under 72% add a worked example, a table row, or an exam trap, never filler.

## Do not
Edit `hw.css`, other note sources, `server/data/notes/manifest.json`, or anything in `public/`; run `publish.mjs`
or `notes:apply`; commit. Report back instead (see the task for the report format).

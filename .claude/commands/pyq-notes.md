---
description: Build and ship ONE subject's solved-past-questions note set (pyq-<code>) from the PYQ frequency data — plan, author EN + BN, verify every SQL/answer and every "Asked in" citation, check, QA, render, manifest, publish, apply. One subject per invocation.
argument-hint: "<SUBJECT CODE, e.g. NET | OS | DSA | OOP | SPL> [plan|write|ship]"
---

# `/pyq-notes` — one subject's solved past questions, end to end

Target from `$ARGUMENTS`: a subject code from `ex-question/by-subject/` (`NET`, `OS`, `DSA`, `OOP`,
`SPL`, `DLD`, `ICS`, `COM`, `MPI`, `CA`, `SE`, `AI`, `DBMS`, …). Optional second word runs one stage only:
`plan` (stop after the plan), `write` (author + gates, no shipping), `ship` (manifest → publish → apply for a
set that already passes). Default: all stages, **stopping for the user's approval after the plan and again
before shipping**.

The reference set is **`pyq-dbms`** (`notes/src/16-database-systems/pyq-dbms.{en,bn}.html`, plan
`D:\COACH\docs\superpowers\specs\2026-10-15-pyq-dbms-plan.md`). Copy its structure, CSS block and card
format; do not start blank. Read `notes/AUTHORING.md` first — it is the style contract, except for the one
rule overridden below.

## 0. Resolve the subject

- Slug: `pyq-<code lower>` (existing drafts: `pyq-net-written`, `pyq-dld`, `pyq-os`, `pyq-dsa`, `pyq-oop`,
  `pyq-spl`, `pyq-ics`, `pyq-com`, `pyq-mpi-ca`). A draft that exists is **rewritten**, not patched, when it
  predates the merged data (it says "asked in a recruitment paper" instead of naming exams).
- Chapter folder = the seed module's folder (`notes/src/<NN-chapter>/`), `chapterNumber` = `NN`.
- If the user gives a chapter or several subjects, ask which one. One subject per invocation.

## 1. Plan (always shown to the user before writing)

From `ex-question/by-subject/<NN>_<CODE>.md` and `frequency.json`:
- the topic table (exams per topic), the most-asked questions, and every question with `asked_count ≥ 1`;
- a sheet-by-sheet plan (cover · topic sheets in order of exams asked · night-before · practice), each
  sheet listing the questions it solves **with their exams**;
- known faulty printed questions and the assumption you will state for each.
Write it to `D:\COACH\docs\superpowers\specs\<date>-pyq-<code>-plan.md`. Stop and ask for approval.

## 2. Write EN, then BN

- **Every question card says where it was taken from.** Card = `.wq` with the question as printed (typos
  fixed) and a `<span class="ask">` line listing the canonical exam names from `exam-tags.json`
  (e.g. `BPSC AP 2023 · Milk Vita AM(CSE) 2023`). No dated exam → name the source instead (NTRCA question
  bank, Petrobangla ANE suggestion sheet, bank IT viva, model test). MCQs carry the tag inline.
  **This overrides AUTHORING.md's "never claim asked in BPSC 20xx" rule for PYQ sets** (user decision,
  2026-10-15).
- Model answers are our own, exam-length: definition → table/doodle → steps with marks → output → exam trap.
  Reuse the coaching books' questions and tags only, never their answer text.
- **Verify before printing:** run every SQL / C / algorithm answer (SQLite via `node:sqlite`, `gcc`/`node`
  for code, a script for numericals) on a small sample printed on the sheet; the outputs shown are the real
  results. Keep the test script in `<scratchpad>/pyq-<code>/`.
- Bangla version: full translation, same sheets; exam names stay in their canonical English form; Bangla
  numerals in prose and page numbers; every Bangla SVG `<text>` has `class="bn …"`. `<title>` follows the
  existing PYQ sets: `<Subject>: Solved Past Questions` / `<বিষয়>: সমাধানসহ পরীক্ষার প্রশ্ন`.

## 3. Gates (both languages)

```bash
node notes/build/check.mjs pyq-<code>.en pyq-<code>.bn   # PASS: no overflow, ≥72% fill but last, ≥15 hl, ≥8 circ, ≥6 doodles, ≥3 tricks
node notes/build/snap.mjs pyq-<code>.en                   # read EVERY PNG; then .bn
node notes/build/render.mjs pyq-<code>.en pyq-<code>.bn   # PDF page count must equal the sheet count
```
Fitting: tighten cards (`.wq` line-height is already reduced in the reference CSS) → move a whole block to
the next sheet → add a sheet. Never cut a citation to make room.

**Citation audit (required):** for every `.ask` on the sheets, confirm in
`ex-question/by-subject/questions.json` that a record with that exam in `asked_in` matches the question
(script: search the exam + a keyword). A tag written from memory was wrong in `pyq-dbms`; fix any miss.
Also check facts against the seed lessons and `server/data/questions/<CODE>.json`.

Stop and show the user the result before shipping (unless they said `ship` / "complete shipping").

## 4. Ship

1. **Manifest** — insert or replace the entry in `server/data/notes/manifest.json` **with a Node script**
   (never rewrite the file by hand; other sessions edit it): `mode: "add"`, `chapterNumber`,
   `lessonTitleEn: "Solved Past Questions: <Subject>"`, `lessonTitleBn: "সমাধানসহ পরীক্ষার প্রশ্ন: <বিষয়>"`,
   `heading.{en,bn}` = each HTML `<title>` (un-escape `&amp;`), 5 `takeaways` per language. Assert no U+FFFD.
2. **Publish** — `node notes/build/publish.mjs pyq-<code>` → `public/notes/<NN-chapter>/pyq-<code>/` holds
   **12 files** (6 per language, no Markdown companion — same as the other PYQ sets). Look at the
   `.note.cover.jpg` to confirm the web view kept the "Asked in" lines.
3. **Apply** — `cd ../server && cmd //c "npm run notes:apply"` (Git Bash; `cmd /c` from PowerShell). The slug
   must print `inserted` or `refreshed`, never `skipped`.
4. **Keep ex-question in step** — copy the PDFs and covers into `ex-question/notes-pdf/` and add the set to
   `ex-question/HANDWRITTEN-NOTES.md` (sheet table, links to the by-subject file it answers); move it out of
   the "Not yet built" table.
5. Update the plan file's status with the outcome.

## Never

Edit `notes/assets/hw.css`, another set's sources, a build script, or `public/` by hand. Run two subjects in
one invocation. Commit unless asked. Put "seed", "question bank", "manifest" or file names on a sheet.

## Report

`check.mjs` lines verbatim, sheet and PDF page counts, number of cards and citations audited (and any fixed),
files published, manifest action, `notes:apply` line for the slug, faulty source questions handled, and the
next subject to run (`/pyq-notes <CODE>`), in this order of exam weight: NET, OS, DSA, OOP, SPL, then the rest.

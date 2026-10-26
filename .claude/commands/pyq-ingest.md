---
description: Transcribe one folder of past-exam question images in ex-question/ and rebuild the PYQ frequency data (questions.json, frequency.json, exam-tags.json, by-subject/*.md, INDEX.md). One folder per invocation.
argument-hint: "<folder under ex-question/> | rebuild"
---

# `/pyq-ingest` — new question images → transcriptions → frequency data

Target from `$ARGUMENTS`:
- `<folder>` — a folder under `ex-question/` holding new photographed pages (e.g. `ex-question/BCS 2026`).
- `rebuild` — skip transcription; only re-run the data pipeline (after a hand edit to a `.md` or to `tools/*.mjs`).

Spec: `D:\COACH\docs\superpowers\specs\2026-10-15-pyq-image-notes-design.md`. Run every command from
`study-app/ex-question/`.

## 1. Transcribe the folder (skip for `rebuild`)

1. List the folder. Every image must end up with a `.md` beside it; PDFs go to `PDF-TEXT/` as text.
   Installers, junk test PDFs and our own `notes-pdf/` output are not exam material: skip them and say so.
2. **Read every image yourself** (Read tool). Never use OCR (easyocr loses Bangla and reading order).
3. Rename each image `<nn>_<short-topic-slug>.jpg` in page order and append a row to
   `image-rename-log.csv` (`folder,original_image,new_image,markdown`).
4. Write `<nn>_<slug>.md` in the house format (copy an existing one, e.g. `BCS/01_*.md` or
   `bit to exabyte/01_*.md`): header with source image + original name, page, paper/post, date, marks;
   **Transcription Notes** (publisher, cut-off text, `[illegible]`, missing tables/figures, typos kept);
   **Content** with the questions **verbatim**, printed numbers kept, Bangla in Bangla, code in fenced blocks,
   and **every exam tag exactly as printed** — `*[45th BCS, CSE 2024]*` for book tags, `[১৭তম NTRCA]` for
   Bangla chips. Printed solutions get one summary line at most.
5. Report after the folder: images done, question count, subjects, new exams seen, illegible items.

## 2. Teach the parser about the new folder (only if its layout is new)

`tools/parse-new.mjs` has one block per source type (book pages, NTRCA bank, a question paper with a
subject-map table, a suggestion sheet, a model test). Reuse the closest block for the new folder;
add a block only if no existing one fits. Keep subject rules in `OVERRIDES` (shared by old and new records).

## 3. Rebuild the data

```bash
node tools/parse-new.mjs        # new transcriptions -> tools/out/new-records.json
node tools/build-exam-tags.mjs  # every printed tag -> canonical exam (exam-tags.json)
node tools/merge.mjs            # merge with the original 956 records, de-duplicate, cluster, rank
node tools/render.mjs           # by-subject/*.md + INDEX.md
```

Then check:
- `tools/out/exam-review.txt` — every **new** canonical exam name. Fix wrong merges in `tools/exams.mjs`
  (`TAG_FIX`, `ORG`, `OLD_EXAMS`, `PRIVATE_BANK`) and re-run. Ask the user about any doubtful merge.
- `merge.mjs` output: records in groups = all records; "unclustered" counts small. Add keyword rules to
  `tools/topics.mjs` (`CLUSTERS`, then `EXTRA` for Bangla wording) rather than leaving questions in "Other".
- All links in `by-subject/*.md` and `INDEX.md` resolve (decode `%20` with `decodeURIComponent`, not shell `printf`).

## Counting rules (decided by the user, do not change)

- **BUET M.Sc. admission tests count as job exams.** Only private-bank exams (DBBL, IBBL, Pubali) and the
  compiled vivas are counted apart (`COUNTED` in `tools/exams.mjs`).
- Coaching suggestion sheets, model tests and the Standard Pattern index **never** add to a count.
- BCS / NTRCA rounds are one exam per round + paper; "45th BCS (General)" is the general-cadre
  Sci & Tech paper, kept apart from the technical ICT-281 / CSE-971 papers.
- **Every question shown anywhere must say where it was taken from** (exam names + source document).
  `render.mjs` does this; never remove the "Asked in" / "Source" lines.

## Never

Never overwrite `tools/out/questions.orig.json` (the pristine first 956 records). Never delete the
easyocr scripts in `bit to exabyte/` (the user wants them kept). Never commit unless asked.

## Report

Images transcribed, records before → after, distinct questions, new exams added to `exam-tags.json`,
merges you were unsure of, and which subject's PYQ note set the new questions affect most. Then suggest
`/pyq-notes <SUBJECT>` for it.

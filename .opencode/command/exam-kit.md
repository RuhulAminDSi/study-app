---
description: Author ONE lesson's Exam Kit and question bank (Exam Edge) — prep from the PYQ data, research the gaps, write the kit (EN + BN) and 30 MCQ / 10 written / 3 practical questions, verify every answer, check, seed, view. Lesson-wise target only.
argument-hint: "<lesson slug, e.g. net-ip-firewalls | db2 | os-linux-raid> [prep|write|ship]"
agent: build
---

# `/exam-kit` — one lesson's Exam Kit, end to end

Target from `$ARGUMENTS`: one lesson slug.
- **Allowed slugs:** the replace-mode note slugs of chapters 2, 4, 7, 9, 10, 11 and 15–19 in `server/data/notes/manifest.json`, or a planned revision lesson in `ex-question/lesson-map.json` → `_newLessons`.
- **Not allowed:** a chapter, or several lessons, in one run. If asked for either, say so and ask which lesson.
- **Optional second word** runs one stage only:
  - `prep`: stop after step 1.
  - `write`: steps 1–5.
  - `ship`: steps 6–7, for a kit that already passes.

Spec: `D:\COACH\docs\superpowers\specs\2026-10-16-exam-edge-lesson-upgrade-design.md`, chiefly:
- §3: exam patterns, the style each exam body expects.
- §4.2: the kit sections.
- §5.1: quotas and sources.

Evidence: `…\2026-10-16-exam-edge-research.md`.

Format and checks live in `server/src/services/examKitShape.ts`. Read it before writing a kit.

## 1. Prep (run from `study-app/ex-question/`)

```bash
node tools/kit-prep.mjs <slug>     # tools/out/kit/<slug>/: pyq.json, lesson.md, note.md, bank.json, gaps.md
node tools/kit-asked.mjs <slug>    # creates/refreshes server/data/exam-kits/<slug>.json (heat + asked; draft skeleton if new)
```

Read `gaps.md`:
- every cluster marked **gap**
- the bank quota still missing
- every question asked in 2+ exams: each one must end up in the bank, with a model answer if it is written

## 2. Research the gaps (cite everything)

- **Search first, standard mode, for:**
  - each gap cluster
  - questions in the style of the bodies that ask this lesson most (the kit's `heat.byBody`)
- **Source rules (research §G):**
  - **`fact_only` sources:** sattacademy, livemcq, IndiaBix, GeeksforGeeks, coaching PDFs, blogs.
    - Give the question stem as a fact; always write your own options, answer and explanation.
    - **Never scrape Sanfoundry.**
  - **`cc_by` sources:** Wikibooks, pgexercises, Open Data Structures, d2l.ai, Google MLCC. May be adapted, with attribution.
  - **`cc_nc` sources:** OpenStax, CS50, NPTEL. Only while the app is non-commercial.
- **Never disable TLS checks** (`curl -k`). See CLAUDE.md for the Kaspersky CA.
- **Every URL used** goes into the kit's `sources`, with its title and access date.
- **Current affairs** (laws, policy, launches): never restate them. Reference an id in `server/data/exam-kits/_facts.json`. Add a fact there only with sources, `asOf` and a `status`. An `unconfirmed` fact can't be used.

## 3. Write the kit (`server/data/exam-kits/<slug>.json`)

Fill the authored sections. Every text is `{ "en", "bn" }`, and the Bangla follows `notes/AUTHORING.md` (technical terms stay in English).

| Section | Minimum | What goes in |
|---|---|---|
| `mustKnow` | 15 | one-line facts MCQs test: definitions, numbers, full forms, "X vs Y" lines |
| `formulas` | as the topic allows | every numerical the lesson can produce, each with a worked `example` (question, working, answer) |
| `traps` | 5 | common wrong answers and why, including the coaching answer errors noted in `ex-question` (`> Answer issue:` lines) |
| `writtenPlan` | 3 | the top written questions; `skeleton` = define → diagram/table → example → advantage/limitation; `marks` with a 5-mark (BUET short), 10-mark (bank/NTRCA) and 20-mark (BPSC long) version where it makes sense; `askedIn` from `asked` |
| `viva` | 5 | rapid Q&A, from `ex-question/VIVA`, `viva-web/` and the PYQ viva records |
| `facts` | — | ids from `_facts.json` |
| `sources` | — | every URL used |

Leave `status: "draft"` until step 6 passes.

## 4. Write the questions (bank quota: ≥30 MCQ, ≥10 written, ≥3 programming/SQL/numerical where the topic allows)

Write the rows in the importer format (copy a row from `server/data/questions/<CODE>.json`), plus:
- `lesson_slug: "<slug>"` and `topic`: the seed lesson title (for a new lesson, its `_newLessons` title)
- `styles`: from `definition difference numerical output_trace code_write sql_write diagram short_note short_answer scenario fact`
- `source_licence`: `own | official | fact_only | cc_by | cc_nc`, and `source_url` (required for `fact_only`)
- a past question keeps its exam: `exam_org`, `exam_post`, `exam_year`. Add `exam_conductor` only when the exam's circular or notice names the conductor; a coaching header alone isn't enough (`ex-question/exam-conductors.json`)
- `as_of` for anything time-sensitive
- written questions: `marks` and a `model_answer_en`/`bn` that follows the kit's `writtenPlan` skeleton

The mix must imitate the bodies in §3.2:
- BUET-run: numerical, code, SQL, diagram
- bank / BPSC / NTRCA: define, difference, scenario
- at least 1 scenario item framed on a Bangladeshi organisation

Save to a scratch file, then append (never rewrite the bank file; other sessions may be adding rows):

```bash
cd server && node scripts/append-questions.cjs <CODE> <scratch>/rows.json
```

## 5. Verify every answer (no exceptions)

- **Numericals** (subnet, AMAT, page tables, scheduling averages, K-maps, Shannon/delay, RAID capacity): recompute each with a small script in the scratchpad and compare.
- **C, Java and C++ code:** compile and run it. Output-trace answers must match the real output.
- **SQL:** run it on PostgreSQL (the local test database, or a throwaway schema) against a small dataset you create.
- **MCQ keys:** check each against the seed lesson, the note and a second source. Fix any disagreement, and if a printed coaching answer was wrong, record it in `traps`.

## 6. Check

```bash
cd server && npm run check:content
```

Set `status: "published"` only when the published-kit minimums and the bank quota pass. Then run the check again.

## 7. Ship and view

```bash
cd server && npm run seed:exam-prep && npm run seed:exam-kits     # (from PowerShell: cmd /c "npm run …")
cd ../ex-question && node tools/coverage.mjs                       # the lesson's row shows the kit ✓ and its bank counts
```

Open the lesson in Study Hub, check the Exam Kit tab (EN and BN, dark and light, phone width), then commit only this lesson's files: `feat(exam-kit): <slug>`.

## Never

- **Several lessons in one run.**
- **Copying text:** never copy coaching answer text, layout or branding.
- **Unchecked questions:** never invent an exam a question was asked in, or claim a source you didn't read.
- **Wiping changes:** never rewrite `server/data/questions/<CODE>.json` or another lesson's kit.

## Report

- **Kit counts:** the size of each section.
- **Questions:** how many were added, by type and style.
- **Gaps:** which gap clusters are now covered.
- **Answer errors:** coaching answer errors found.
- **Verification:** what was run (numericals, code, SQL).
- **Sources:** the ones used.
- **Still open:** anything that remains.

---
description: Author note sources for ONE lesson (EN + Bangla) — writes the 4 files, verifies with check.mjs, then stops. Lesson-wise only: a chapter is never an acceptable target.
agent: build
---

# `/notes-prep` — author one lesson, then stop

Target from `$ARGUMENTS`: `<slug>` — e.g. `os-deadlock`. `CH/SLUG`
(`18-operating-system/os-deadlock`) is also accepted; the chapter part is only a hint, use the
slug.

**One lesson per invocation. Never two.** If the user names a chapter or a slug-less target,
resolve it to a single lesson and say which one — or ask. Do not author the whole chapter.
If the user gives a chapter and no lesson, list that chapter's lessons with slugs and ask
which one to start with.

Scope: **authoring only.** Produces `notes/src/<NN-chapter>/<slug>.{en,bn}.html` and
`notes/md/<NN-chapter>/<slug>.{en,bn}.md`, then stops. It runs `check.mjs` itself — that is why
a separate `/notes-check` is not required after it. It does **not** render, publish, register
or apply; those are separate commands (see `/notes` for the list).

## Step 1 — resolve the lesson before writing anything

Establish these, and state them back to the user:

| Field | Source |
| --- | --- |
| slug | `$ARGUMENTS` |
| chapter folder | see below |
| seed lesson id + `title` | `server/data/modules/<NN>_<Name>.js` → `lessons[]` |
| `titleBn` | same file |
| seed body | `content`, `contentBn`, `takeaways`, `takeawaysBn` |
| depth cross-check | `server/data/questions/<SUBJ>.json` |

**Resolving the chapter folder from a slug** — try in order, stop if none work:

1. `server/data/notes/manifest.json` — the slug's entry has `chapterNumber`
2. `notes/src/*/<slug>.en.html` — the folder that already contains the slug
3. the seed module — match `lessons[].title` against a manifest entry, or ask the user

`chapterDir()` in `server/src/db/applyNotes.ts` is the authority for the folder name. It must
match `^\d{2}-[a-z0-9-]+$` — the seed module's number plus its slugified title. Copy the name
from an existing folder; **never invent one**. If the folder does not exist yet (chapters 12,
13 and 14 have none), create it as part of this lesson's first file.

If the slug has no seed lesson it is a PYQ / viva set (`mode: "add"`) — find its source and
confirm with the user. If the slug matches nothing at all, **stop and ask** rather than
inventing one.

If all 4 target files already exist and `check.mjs` passes, do not rewrite them — report that
the lesson is already prepared and stop.

## Step 2 — read the style contract

Read `notes/AUTHORING.md` before authoring. It is authoritative; do not restate or override it.

## Step 3 — author, via exactly one agent

Dispatch **one** authoring agent and wait for it to finish completely.

**Never dispatch agents in parallel.** On a real run four were dispatched at once, all four
were cancelled — 8 HTML files survived but **2 were byte-identical copies of the exemplar** that
still reported `PASS` from `check.mjs`, and the Markdown directory stayed empty. A cancelled
agent is not a slow agent: never re-dispatch before auditing the disk.

Give the agent: the seed lesson id, `content` / `contentBn` / `takeaways` / `takeawaysBn`, the
approved exemplars, the fill rule, and the hard constraints below.

The agent produces exactly 4 files:

```
notes/src/<NN-chapter>/<slug>.en.html
notes/src/<NN-chapter>/<slug>.bn.html
notes/md/<NN-chapter>/<slug>.en.md
notes/md/<NN-chapter>/<slug>.bn.md
```

An **English-only** set (`langs: ["en"]` in the manifest) has just the `.en` pair. Confirm which
one you are authoring before writing, and do not silently create a Bangla file for an
English-only set — or omit one from a set meant to be bilingual. An English-only set still
needs `heading.bn` / `takeaways.bn` in the manifest; see `/notes-manifest`.

Stylesheet href inside a chapter file is `../../assets/hw.css`. **Never write to `notes/src/`
root** — `sources.mjs` only walks chapter directories and warns.

### Method that works

Copy an already-passing file and replace its content, keeping the skeleton (`<svg><defs>` wobble
block, `section.page` structure, the trailing fill/overflow `<script>`, the class vocabulary).
Authoring a blank file repeatedly produced 100-160% fills on five consecutive attempts; copying
a passing sibling passed first time.

### The fill rule — the single most common failure

- Target **85-95% fill**. The ceiling is about **96%, not 100%**, because `scrollHeight`
  includes the last block's bottom margin plus the page's `padding-bottom`. 99% fails.
- **Fill and overflow are different failures.** A sheet can sit at 88% and still overflow the
  page horizontally — `check.mjs` measures vertical only. Use `minmax(0,1fr)` for grid columns
  and confirm `scrollWidth ≈ 210 mm` for A4 at 96 dpi.
- Fills of 100-160% mean far too much content on one sheet. Move blocks to other sheets; never
  pad with filler. See the splitting recipe below.
- Shrink with `class="small"` / `class="tiny"`, a smaller doodle `viewBox`, or shorter paragraphs.

### Bangla non-negotiables

- Bangla numerals `০১২৩৪৫৬৭৮৯` for counts in prose, page numbers, contents and the answer key.
  Latin digits stay in equations, addresses, unit-suffixed figures (4 KB, 7200 rpm), port/bit
  counts and table numeric cells.
- MCQ options are lettered ক–ঘ by CSS; the `.anskey` line uses Bangla letters — `1-c` → `১-গ`.
- **Every Bangla `<text>` inside an SVG needs `class="bn …"`.** Kalam has no Bangla glyphs, so
  without it you get tofu boxes.
- `.ink-b` **does not exist** in `notes/assets/hw.css`. It is worse than invisible: an
  unstyled SVG `<path>` falls back to `fill: black; stroke: none`, so a closed path fills into a
  solid black blob and an open arc fills as a lens shape. Use `.ink`.
- `<title>` must be translated — a Bangla file with an English title shows English to Bangla
  readers in the PDF viewer and in the app. Note that the note `<title>` may legitimately be
  *shorter* than the seed lesson title; `/notes-manifest` needs the seed title, not this one.

### When the files already exist, run the gate first

An orphan set left by an earlier run may look finished and still be far over the gate. In
chapter 17, `se-testing-maintenance` measured **143%** on one sheet and `pyq-se` was over on
**seven** sheets (99-117%) despite being complete on disk. Never assume existing HTML is
usable — `check.mjs` before deciding whether work is needed, and treat a failure as in scope
to fix.

### Splitting an over-full sheet

A sheet at 143% needs more than one extra sheet to reach 72-95%, and there is not enough
content on that sheet alone to fill them — the fix is redistribution, not invention. In
chapter 17 this worked:

1. Split the worst sheet in two at a natural heading boundary.
2. **Donate a whole section from an adjacent over-full sheet** to the new one, so the donor
   drops in a single move and section numbering stays in order.
3. Push trailing material to a new final sheet. The **last sheet is exempt from the 72% floor**
   (`check.mjs` tests `i < fills.length`), so a short closing sheet is legal.

Then trim the remaining hot sheets with `.small` / `.tiny`, line-height and prose length, and
re-measure. Re-run `check.mjs` after each structural change, not once at the end.

### Scope every scripted edit to one sheet

A global string replace or regex across a whole chapter file leaks into every other sheet —
one `.hand small` → `.hand tiny` replacement silently restyled eleven tables. Split the file
on `<section class="page">`, edit the target block, and rejoin. Also verify markup validity
after any regex: a naive block replacement produced a **duplicated `style` attribute** on
several elements, which is invalid HTML and which `check.mjs` does not flag.

When matching exact strings for a replacement, read the file first — an em dash `—` versus a
hyphen `-` silently fails the match and the edit looks applied but changed nothing.

### `.mnote` and `.sticky` are floats — do not put them in a `.cols` column

`hw.css` sets both to `float: right` at a fixed width (`.mnote` 42mm, `.sticky` 52mm). At full
page width that is the intended margin-note look. Inside a `.cols` column (~90mm) it squeezes
the neighbouring text into a ribbon, and two floats in one column overlap. `check.mjs` passes
this — it measures vertical extent only, so a sheet can read 92% and still be unreadable.

Inside a column, either add `style="float:none;width:auto"`, or use `.def` / `.sumbox` /
`.trick`, which are block elements and are safe anywhere. When scripting the change, match the
whole class attribute — `class="sticky pink"` is a different string from `class="sticky"`, and
a regex for the bare form silently misses every variant.

Neutralising floats changes column heights, so re-run `check.mjs` and re-fill any sheet that
became sparse.

## Step 4 — verify on disk yourself

Never trust the agent's report. Check all of it:

- All 4 files exist (2 for an English-only set), at plausible sizes (EN HTML ~55-65 KB, BN HTML
  ~80-105 KB, EN MD ~22-32 KB, BN MD ~42-67 KB).
- `node notes/build/check.mjs <slug>` says `PASS` for both languages.
- The content is **genuinely this lesson's** — read the `<title>` and the `h2` headings. A copied
  exemplar passes the gate while being a completely different lesson. Confirm no file is
  byte-identical to an exemplar from another chapter.
- Zero U+FFFD replacement characters.
- No scratch files in `notes/src/` or `notes/md/` (agents leave `*.probe.html` behind). Delete
  them; keep scratch output in `%TEMP%/opencode/<slug>/`.
- No duplicate slug covering the same seed lesson — keep the one the manifest uses.

If `check.mjs` fails, fix it yourself and re-run until green. That is in scope — a failed lesson
is not a finished lesson.

## Step 5 — stop and report

Report, then stop:

- Seed lesson id and title, resolved chapter folder, and the 4 file paths
- The `check.mjs` lines **verbatim**, both languages
- Sheet counts
- Anything you corrected in the seed content — agents have caught real arithmetic errors in the
  seed modules, and those findings matter more than the pass/fail summary
- **The next lesson in that chapter, with its slug, and the exact command to run for it**

Next stages, named but not run: `/notes-qa <slug>.bn`, then `/notes-render`, `/notes-manifest`,
`/notes-publish`, `/notes-apply`.

## Never

Never edit `notes/assets/hw.css`, an unrelated note source, a build script, or `public/` by hand.
Never write to `notes/src/` root. Never put "seed", "question bank", "manifest" or source file
names into the notes, and never claim "asked in BPSC 20xx" — use "high-yield". Never run
`git commit` unless explicitly asked. **Never author a second lesson in one invocation, and
never treat a chapter as the target.**
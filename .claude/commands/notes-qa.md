---
description: Render QA PNG snapshots of one lesson's note set and visually inspect the Bangla glyphs, clipped SVG and overlapping labels. Takes a <slug>.<lang> target.
argument-hint: "<slug>.<lang>"
---

# `/notes-qa` — snapshot and eyeball the sheets

Target from `$ARGUMENTS`: `<slug>.<lang>` (e.g. `os-deadlock.bn`). The language suffix is
**required** — this is the one command that takes it.

**One language per invocation.** If the user wants both, do one, report, then confirm before
doing the other. Never loop silently over several languages or slugs.

Scope: **visual inspection only.** You may fix note sources to resolve what you see, then
re-snap. Nothing else — no render, no manifest, no publish.

## Snap

```bash
node notes/build/snap.mjs <slug>.<lang> [outDir]
```

Writes one PNG per sheet into `notes/snap/<NN-chapter>/<slug>.<lang>/`.

`snap.mjs` takes **one** note name plus an optional output directory — passing several names
does not work. Loop yourself if you need both languages.

## Then actually read every PNG

Do not skip this. `check.mjs` cannot see the defects that actually reach users:

- **Tofu boxes.** Kalam has no Bangla glyphs. Every Bangla `<text>` inside an SVG needs
  `class="bn …"`. Boxes render perfectly and pass every gate.
- **A `.circ` that wrapped.** `.circ` is `display: inline-block` with an absolutely positioned
  wobbly ellipse sized to the box. If its text wraps to two lines the ellipse balloons over the
  neighbouring lines and reads as a bug. Long circled phrases go on their own `nowrap` line at a
  reduced font size — seen in `se-analysis-design`, in **both** languages.
- **Clipped SVG.** Doodles cut off by the sheet edge — shrink the `viewBox`.
- **Captions escaping a doodle.** `figure.doodle svg { overflow: visible }`, so `<text>` wider
  than the `viewBox` is *not* clipped — it spills onto the page. Keep captions inside the
  `viewBox` width or shorten them.
- **Tables spilling out of a grid column.** A wide table's min-content width exceeds a
  `minmax(0,1fr)` track and pushes into the neighbouring column (a 6-column cost table overwrote
  its adjacent doodle). Narrow the sibling column or shrink the table's type.
- **Overlapping labels.** Text colliding with a doodle, a circle, or another block.
- **A float eating its neighbour.** `.mnote` (42mm) and `.sticky` (52mm) are `float: right`; in
  a `.cols` column they leave the text beside them a thin unreadable ribbon, and two of them
  overlap. The gate still passes — only the PNG shows it.
- **Black blobs.** An open arc or closed path styled with the non-existent `.ink-b` class falls
  back to `fill: black`, filling as a solid shape. Use `.ink`.
- **Wobbly ink that reads as broken.** Undershoots and overshoots are a style, not a defect;
  breaks in the stroke path are a defect.
- **Overflow past the page.** Content that visually spills even when `scrollHeight` is fine.

Check the defects in **both** languages. Layout bugs are often duplicated across the `.en` and
`.bn` files because both were derived from the same structure — fixing only one leaves the pair
inconsistent.

Bangla numerals: `০১২৩৪৫৬৭৮৯` must be used for counts in prose, page numbers, contents and the
answer key. Latin digits stay in equations, addresses, unit-suffixed figures (4 KB, 7200 rpm),
port/bit counts and table numeric cells.

MCQ options are lettered ক–ঘ by CSS; verify the `.anskey` line uses Bangla letters —
`1-c` should render as `১-গ`.

## Fix and re-snap

For each defect: edit the note source in `notes/src/`, re-run `snap.mjs`, read the PNG again.
Batching fixes and re-snapping once wastes a cycle — labels move when a block moves.

Keep scratch output in `%TEMP%/opencode/<slug>/`, not in `notes/src/`.

**Scope scripted edits to the one sheet.** A global find-and-replace across the whole file
leaks into every other sheet — one `small` → `tiny` replacement restyled eleven tables across
the chapter. Split on `<section class="page">`, edit that block, rejoin. After any regex, check
the markup: a naive block replacement produced a **duplicated `style` attribute**, which is
invalid HTML and which `check.mjs` does not flag.

Re-render after editing. `/notes-qa` does not produce PDFs, so a source fixed here is stale
until `/notes-render` runs.

## Never

Edit `notes/assets/hw.css` to make a sheet fit. Never write to `notes/src/` root. Never hand-edit
`public/notes/`. Never run `git commit` unless explicitly asked.

## Report

Per PNG: what you saw and what you changed, or "clean" if nothing. Name defects by sheet
number. Finish by stating that the gate still needs `/notes-check` re-run if you edited any
source, and that `/notes-render` is the next step.

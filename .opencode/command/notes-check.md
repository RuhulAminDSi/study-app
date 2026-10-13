---
description: Run the notes QA gate (check.mjs) for one lesson slug and fix every failure — fill, overflow, highlights, doodles. Lesson-wise target only; a chapter is not valid.
agent: build
---

# `/notes-check` — run the gate and fix what fails

Target from `$ARGUMENTS`: `<slug>` — e.g. `os-deadlock`. `CH/SLUG` is also accepted; the
chapter part is only a hint, use the slug.

**One lesson per invocation.** If given a chapter or a bare chapter number, list that
chapter's lessons and ask which one — or check one at a time only if the user insists. Do not
loop silently over a whole chapter.

Scope: **verification only.** You may edit note sources (`notes/src/`) to make them pass.
Nothing else — no render, no manifest, no publish.

`check.mjs` accepts a chapter folder, so running the script that way is fine — but report per
lesson, and only fix the one lesson in scope unless the user asked for more.

To resolve a slug to a chapter folder: check `server/data/notes/manifest.json` for the slug's
`chapterNumber`, else find `notes/src/*/<slug>.en.html`. `chapterDir()` in
`server/src/db/applyNotes.ts` decides the canonical folder name — copy it, never invent one.

## Run it

```bash
node notes/build/check.mjs <slug> [<slug> ...]
```

Loads each file in headless Chrome with JS on and prints:

```
PASS os-deadlock.en {"pages":11,"overflow":"none","sparse":"none","fills":"96 95 …",
                    "hl":19,"circ":28,"doodles":9,"trick":9,"exam":9,"mcq":10}
```

A set passes only when **all** hold:

| Requirement | Threshold |
| --- | --- |
| sheet overflow | none |
| fill, every sheet but the last | ≥ 72% |
| `.hl` highlights | ≥ 15 |
| `.circ` red circles | ≥ 8 |
| `<figure class="doodle">` | ≥ 6 |
| `.trick` memory tricks | ≥ 3 |

Exit code is non-zero on any failure, so it works in a pipeline.

## Passing is not enough — read the content too

`check.mjs` is blind to several real defects:

1. **Copied exemplars.** Two files can be byte-identical copies of an exemplar from another
   chapter and still report `PASS`. Read each `<title>` and the `h2` headings, confirm the
   content is genuinely this lesson's, and confirm no file is byte-identical to an exemplar.
2. **Horizontal blowout.** Only vertical fill is measured. Use `minmax(0,1fr)` for grid
   columns and check `scrollWidth ≈ 210 mm` for A4 at 96 dpi. A wide table's min-content width
   overflows a `minmax(0,1fr)` track into the *neighbouring* column — a 6-column cost table
   overwrote its adjacent doodle while every vertical measurement stayed green.
3. **Bangla tofu.** Kalam has no Bangla glyphs, so every Bangla `<text>` inside an SVG needs
   `class="bn …"` — scan for it, don't eyeball it. `.ink-b` does not exist in
   `notes/assets/hw.css`, and it is worse than invisible: an unstyled `<path>` defaults to
   `fill: black; stroke: none` and renders as a solid blob. Use `.ink`.
4. **Escaped SVG captions.** `figure.doodle svg { overflow: visible }`, so `<text>` wider than
   the `viewBox` is not clipped — it spills onto the page.
5. **A `.circ` that wrapped.** It is `inline-block` with an ellipse sized to the box, so
   wrapped text balloons the circle over its neighbours.
6. **Float collisions.** `.mnote` (42mm) and `.sticky` (52mm) are `float: right`. Inside a
   `.cols` column they squeeze the text beside them into a ribbon, and two of them overlap.
   Neither affects fill, so both pass the gate. Use `style="float:none;width:auto"` or swap to
   `.def` / `.sumbox` / `.trick`.

**Overlap is not overflow.** `check.mjs` measures vertical extent only, so a sheet can read
92% and still have two blocks drawn on top of each other. Treat "PASS" as necessary, never
sufficient — the `/notes-qa` PNGs are where overlap is caught.

Also scan for U+FFFD replacement characters across HTML and Markdown.

## The fill rule — the single most common failure

`check.mjs` fails a set when any sheet overflows or (except the last) is under 72% full. The
last sheet is exempt — it tests `i < fills.length` — so a short closing sheet is legal.

- Target **85-95% fill**. The ceiling is about **96%, not 100%**, because `scrollHeight`
  includes the last block's bottom margin plus the page's `padding-bottom`. 99% fails.
- Fills of 100-160% mean far too much content on one sheet. Move blocks to other sheets;
  never pad with filler. A sheet far over the gate needs redistribution: split it, then donate
  a whole section from an adjacent over-full sheet so the donor drops in one move.
- Fills below 72% mean the sheet is too empty. Promote `tiny` → `small`, or add genuine
  content. Never add decorative filler to satisfy the number.
- Shrink with `class="small"` / `class="tiny"`, a smaller doodle `viewBox`, or shorter
  paragraphs.
- **Fill is not overflow.** 88% is not proof the sheet is fine — see point 2 above.

## How to fix without wrecking a passing set

Copy an already-passing file and replace its content, keeping the skeleton (`<svg><defs>`
wobble block, `section.page` structure, the trailing fill/overflow `<script>`, the class
vocabulary). Iteratively editing a blank file produces 100-160% fills on five consecutive
attempts.

Re-run `check.mjs` after **every** edit, one language at a time, until it is clean.

## Never

Edit `notes/assets/hw.css`, an unrelated note source, a build script, or `public/` by hand.
Never write to `notes/src/` root. Never add filler content to satisfy the gate. Never run
`git commit` unless explicitly asked.

## Report

The final `check.mjs` lines verbatim, per slug and language, plus every failure you fixed and
how (sheets moved, blocks shrunk, counts raised). If the gate is green but you found a copied
exemplar, an untranslated Bangla `<title>`, or missing SVG `class="bn"`, say so explicitly —
those do not show up in the `PASS` line.
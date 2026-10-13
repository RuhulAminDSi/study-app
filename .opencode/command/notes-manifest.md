---
description: Add one lesson's entry to server/data/notes/manifest.json so the DB can register it. Lesson-wise target only. Generate entries with a Node script so titles cannot drift.
agent: build
---

# `/notes-manifest` — register one lesson in the manifest

Target from `$ARGUMENTS`: `<slug>` — e.g. `os-deadlock`. `CH/SLUG` is also accepted; the
chapter part is only a hint, use the slug.

**One lesson per invocation.** If given a chapter or chapter number, list its lessons and ask
which one. Never add entries for a whole chapter without being asked to.

Scope: **`server/data/notes/manifest.json` only.** Do not render, publish, or touch note
sources here.

## The file

`server/data/notes/manifest.json`, root key `notes`. One entry per note set:

```json
{
  "slug": "os-deadlock",
  "chapterNumber": 18,
  "mode": "replace",
  "lessonTitleEn": "Deadlock: Resource Allocation, Detection, Prevention & Recovery",
  "lessonTitleBn": "ডেডলক: রিসোর্স বরাদ্দ, শনাক্তকরণ, প্রতিরোধ ও পুনরুদ্ধার",
  "heading": { "en": "Deadlock: Detection, Avoidance & Recovery: Revision Notes",
               "bn": "ডেডলক: শনাক্তকরণ, এড়িয়ে চলা ও পুনরুদ্ধার: রিভিশন নোট" },
  "takeaways": { "en": ["…"], "bn": ["…"] }
}
```

| Field | Rule |
| --- | --- |
| `mode` | `"replace"` for a course lesson, `"add"` for an extra PYQ / viva note |
| `lessonTitleEn` | must equal the seed module's `title` **character-for-character** or the lesson will not match. Take it from the seed module — **never from the note HTML** (see below) |
| `lessonTitleBn` | the seed's `titleBn` |
| `heading.*` | each HTML file's own `<title>`, with `&amp;` un-escaped back to `&` |
| `takeaways.*` | from the seed's `takeaways` / `takeawaysBn` |
| `langs` | optional — omit for bilingual, `["en"]` for English-only |
| `heading.bn` / `takeaways.bn` | **required on every entry, including `"en"`-only ones.** See the warning below |

`mode: "replace"` only when it matches a real seed lesson title. Use `"add"` for extras.

### `langs: ["en"]` still needs `heading.bn` and `takeaways.bn`

`applyNotes.ts` builds **both** language view strings unconditionally:

```ts
const html = viewerHtml(entry, "en") + viewerHtml(entry, "bn")   // applyNotes.ts:129-130
```

and `viewerHtml` does `escapeHtml(entry.heading[lang])` with no fallback. An English-only
entry with no `heading.bn` therefore aborts the whole run:

```
notes:apply failed: TypeError: Cannot read properties of undefined (reading 'replace')
    at escapeHtml (server/src/db/applyNotes.ts:36:12)
    at viewerHtml (server/src/db/applyNotes.ts:60:19)
```

This is not caught by any gate and it kills every slug in the manifest, not just the new one.
For an English-only set, set `heading.bn` and `takeaways.bn` to the **English** values — that
is the intended fallback. The manifest docs claiming "`bn` falls back to `en`" refer only to
the *asset path* in `noteLang()`, never to the heading or takeaways.

The crash may surface on a *later* run than the edit that caused it, so re-check any
English-only entry you add by hand.

### When the real Bangla note arrives, replace the fallback

An English-only entry keeps an English `heading.bn` purely so `viewerHtml` cannot crash. The
moment you author the actual `.bn` note and delete `langs`, that fallback becomes **the heading
every Bangla reader sees** in the PDF viewer and the in-app title bar. So when a set goes
bilingual:

1. author and publish `<slug>.bn.html`,
2. delete `langs` (or set `["en","bn"]`),
3. **replace `heading.bn` and `takeaways.bn` with genuine Bangla** — never leave the English
   placeholder in place.

Bangla source for the headings normally comes from the seed's `titleBn` / `takeawaysBn`; for an
extra PYQ set with no seed lesson, take the wording from the authored `.bn` file and the
question bank's `*_bn` fields.

### The note HTML `<title>` is not a safe source for `lessonTitleEn`

A note's heading is deliberately allowed to be shorter than the seed lesson title. In chapter 17
the seed is `Waterfall, Inception, Use Cases, UML & OO Design` while the note `<title>` is
`Waterfall, Inception, Use Cases & UML` — deriving `lessonTitleEn` from the HTML produced a
`skipped … no matching lesson`.

Always resolve seed titles through an explicit **slug → seed id** map and read `title` /
`titleBn` / `takeaways` / `takeawaysBn` off that seed object.

## Generate, do not type

Write a throwaway Node script under `%TEMP%/opencode/<slug>/` that reads the seed module and
each HTML file's `<title>`, then writes the JSON. Typing Bangla titles by hand is how they
drift and how U+FFFD gets in.

Seed module: `server/data/modules/<NN>_<Name>.js` — read `title`, `titleBn`, `takeaways`,
`takeawaysBn` for the lesson whose title you need. Build an explicit
`{ "<slug>": "se4" }` style map from slug to seed id first; do not fuzzy-match titles.

For an English-only entry the script must still emit `heading.bn` and `takeaways.bn` — default
them to the English values when the seed has no Bangla of its own, so `/notes-apply` cannot
crash later.

Insert new entries in chapter order among their neighbours, and keep every other entry
byte-identical.

## Verify after writing

- U+FFFD scan clean: `(text.match(/\uFFFD/g) || []).length === 0`. A JSON rewrite that lost
  UTF-8 corrupts every Bangla heading at once.
- File is valid JSON and still parses into the existing shape.
- Every entry you added has `heading.bn` and `takeaways.bn` present, **including English-only
  ones** — a missing one aborts `/notes-apply` for the whole manifest.
- `heading.bn` contains actual Bangla characters for bilingual sets — not merely non-empty. A
  Bangla note left with an English title shows English to Bangla readers in the PDF viewer and
  in-app heading. (For an English-only set, English in `heading.bn` is correct.)
- `lessonTitleEn` compared against the seed module value for the mapped seed id, not against
  the note `<title>`.
- Every slug in the manifest that has a rendered PDF is present, and every slug you added has
  one.

## Never

Run `notes:apply` from here — that is `/notes-apply`. Never edit note sources, `public/notes/`,
or `notes/assets/hw.css`. Never run `git commit` unless explicitly asked.

## Report

The slugs added or updated, and for each the `mode` and the source of `lessonTitleEn` /
`lessonTitleBn` (seed module + lesson). State the U+FFFD result. Then point at
`/notes-publish`.
---
description: Router for the notes pipeline. Every command is lesson-wise — takes a slug, never a chapter. Points at /notes-prep, /notes-check, /notes-qa, /notes-render, /notes-manifest, /notes-publish, /notes-apply, /notes-ship.
agent: build
---

# `/notes` — pipeline router

Target from `$ARGUMENTS`: `<action> [slug]`, where action is one of the commands below and the
target is a **lesson slug** — e.g. `os-deadlock`.

**Targets are lesson-wise. A chapter is not a valid target for any command.** If the user
passes a chapter (`18-operating-system` or `18`), do not run that stage across it — list the
chapter's lessons with their slugs and ask which one they mean.

## Command format

```
/notes-<stage> <slug>
         │       └── lesson slug (required, except /notes-apply)
         └── one of: prep | check | qa | render | manifest | publish | apply | ship
```

`CH/SLUG` (`18-operating-system/os-deadlock`) is accepted as a convenience — the chapter part is
a hint only. The slug is the target.

## Run the single-step commands, not this one

`/notes` only routes. It does no work itself. Loading the whole pipeline into one context is
what exhausts the usage limit, so each stage has its own command file:

| Action | Command | What it does |
| --- | --- | --- |
| `prep` | `/notes-prep <slug>` | Author one lesson's sources + Markdown and verify with `check.mjs`. |
| `check` | `/notes-check <slug>` | Re-run the QA gate and fix everything that fails. |
| `qa` | `/notes-qa <slug>.<lang>` | Render PNG snapshots and visually inspect the Bangla glyphs. |
| `render` | `/notes-render <slug>` | `render.mjs` — HTML to PDF. |
| `manifest` | `/notes-manifest <slug>` | Add the entry to `server/data/notes/manifest.json`. |
| `publish` | `/notes-publish <slug>` | `publish.mjs` — copy to `public/notes/` with covers, typed-note PDFs and metadata JSON. |
| `apply` | `/notes-apply` | `notes:apply` — write manifest entries into the database. |
| `ship` | `/notes-ship <slug>` | The full flow: prep → check → QA → render → manifest → publish → apply → verify, for one lesson. |

`/notes-prep` already runs `check.mjs`, so a plain per-lesson loop is **six** commands, not
seven.

## Behaviour

- If `$ARGUMENTS` names a known action plus a slug, load that command file and follow it. Do
  not restate its content — read the file and execute.
- If `$ARGUMENTS` names a slug but **no** action, ask which stage to run rather than defaulting
  to `ship`. Suggest the six-command loop from the stage order.
- If `$ARGUMENTS` names a **chapter**, treat it as a request for its lesson list: read
  `server/data/modules/<NN>_<Name>.js` and `server/data/notes/manifest.json`, print
  `chapter / # / lesson id / slug`, and ask which lesson to start with.
- If `$ARGUMENTS` is empty, print the tables below and ask which lesson and stage.
- If the action is unknown, print the tables and ask.

## Resolving a slug to its chapter folder

Every command needs `notes/<dir>/<NN-chapter>/<slug>`. Try in order:

1. `server/data/notes/manifest.json` — the slug's entry has `chapterNumber`
2. `notes/src/*/<slug>.en.html` — the folder that already contains the slug
3. the seed module — match `lessons[].title` against a manifest entry, or ask the user

`chapterDir()` in `server/src/db/applyNotes.ts` decides the canonical folder name. It must
match `^\d{2}-[a-z0-9-]+$` — the seed module's number plus its slugified title. Copy the name
from an existing folder; **never invent one**.

## Repo layout (quick reference)

```
notes/src/<NN-chapter>/<slug>.<lang>.html    handwritten note source   <- /notes-prep authors this
notes/md/<NN-chapter>/<slug>.<lang>.md      typed companion           <- /notes-prep authors this
notes/pdf/<NN-chapter>/<slug>.<lang>.pdf     rendered by /notes-render
notes/snap/<NN-chapter>/<slug>.<lang>/       QA PNGs from /notes-qa
public/notes/<NN-chapter>/<slug>/           /notes-publish output
server/data/notes/manifest.json              /notes-manifest, /notes-apply
```

## Non-negotiables that apply to every action

- **One lesson per invocation.** No command accepts a chapter. If asked to, list the chapter's
  lessons and ask which one.
- **Never dispatch more than one authoring agent at a time.** Sequential only. Parallel agents
  get cancelled together, and a cancelled agent is not a slow agent: never re-dispatch a
  replacement before auditing the filesystem yourself.
- `notes/AUTHORING.md` is the style contract. Read it before authoring; do not restate or
  override it.
- Never edit `notes/assets/hw.css`, an unrelated note source, a build script, or `public/` by
  hand. Never write to `notes/src/` root. Keep scratch files in `%TEMP%/opencode/<slug>/`.
- Never run `git commit` unless explicitly asked.

Full documentation: `notes/README.md` (flow, and the lesson-wise breakdown of all 82 seed
lessons) and `notes/AUTHORING.md` (style).
---
description: Register published note sets in the database via notes:apply (a server script, processes the whole manifest). Reports replaced/refreshed/added/skipped per slug; check the slug in scope is not skipped.
argument-hint: "<slug> (used only to interpret output; script takes no args)"
---

# `/notes-apply` — write manifest entries into the database

Target from `$ARGUMENTS`: `<slug>` — used only to interpret the output and to check the result.
The script itself takes no arguments; it processes the whole manifest.

Scope: **the database write, and nothing else.** Do not author, check, render, publish, or edit
`server/data/notes/manifest.json` here. A `skipped` result means an earlier step is missing —
report it and stop, do not paper over it.

## Run it

`notes:apply` is a **server** script — there is no root-level equivalent. On PowerShell, `npm`
is blocked by the execution policy, so use:

```powershell
cd server; cmd /c "npm run notes:apply"
```

(equivalently: `npm run notes:apply` with `workdir` set to `server`)

From a **bash** shell use a doubled slash — `cmd /c` gets `/c` eaten as a path and `cmd` opens
an interactive prompt, producing a banner and no script output:

```bash
cmd //c "npm run notes:apply"
```

Confirm the run actually happened: real output begins `npm notice run … notes:apply` followed by
one line per slug. A bare Windows version banner means the script never ran.

## Read the output per slug

| Line | Meaning | Action |
| --- | --- | --- |
| `replaced` / `refreshed` | registered against the seed lesson | done |
| `added` | registered as an extra note (`mode: "add"`) | done |
| `skipped … not published yet` | `/notes-publish` did not run, or the PDF is missing | stop, run `/notes-publish` then this again |
| `skipped … no matching lesson` | `lessonTitleEn` does not match a seed lesson title character-for-character | stop, fix via `/notes-manifest` |

A `skipped` line is not success. Never report the database as updated when any target slug
was skipped.

## If it crashes instead of printing anything

```
notes:apply failed: TypeError: Cannot read properties of undefined (reading 'replace')
    at escapeHtml (server/src/db/applyNotes.ts:36:12)
    at viewerHtml (server/src/db/applyNotes.ts:60:19)
```

`applyNotes.ts` calls `viewerHtml(entry, "bn")` for **every** entry, including
`langs: ["en"]` ones, and indexes `entry.heading.bn` with no fallback. One English-only entry
missing `heading.bn` aborts the run before any slug is reported — so *every* slug in the
manifest is unapplied, not just the new one.

Fix via `/notes-manifest`: give that entry `heading.bn` and `takeaways.bn` (the English values
are the intended fallback), then re-run this command. The crash is data, not a script bug to
work around — do not patch `applyNotes.ts` from here.

## Read the output for the right slug

The whole manifest is printed, so grep the **exact slug** rather than a chapter prefix.
`pyq-se` does not contain the substring `se-`, so a `'se-' | 'added' | 'skipped'` filter silently
drops it and you will report a registered set as missing. Confirm the slug in scope by exact
match, and capture the full output to a file before filtering if the manifest is large.

## Verify

- The slug in scope printed `replaced`, `refreshed` or `added` — not `skipped`.
- No slug that already passed was turned into a `skipped` by this run.
- If the script reported a change for a slug other than the one in scope, say so.

## Never

Edit the database directly. Never edit note sources, `public/notes/`, `hw.css`, or the
manifest from here. Never fix a `skipped` result by writing SQL or editing rows by hand —
re-run the missing stage instead. Never run `git commit` unless explicitly asked.

## Report

Per slug: the exact action word from the output (`replaced` / `refreshed` / `added` /
`skipped` + reason). State plainly whether the database is in sync for the lesson in scope, and
list the exact command needed for any slug that was skipped.

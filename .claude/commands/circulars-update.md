---
description: Scan alljobs.teletalk.com.bd for live IT/CSE and Engineering government job circulars (Assistant-level and above) and sync them into the Resources (job circulars) table.
argument-hint: "[optional: extra keyword(s) to search, e.g. 'Lecturer' or a specific org]"
---

# `/circulars-update` — refresh IT/CSE & Engineering circulars from alljobs.teletalk.com.bd

Keeps the public **Resources** page's `circular` entries current. Source site:
https://alljobs.teletalk.com.bd/ — it is a client-rendered SPA, so a plain `WebFetch` returns
an empty shell. **Always drive it with the Playwright MCP tools**
(`mcp__playwright__browser_navigate` / `_snapshot` / `_evaluate` / `_click`), never WebFetch.

## 1. Collect candidate posts

Search, one keyword at a time, via the URL pattern (not the search box, it's faster):

```
https://alljobs.teletalk.com.bd/jobs?keyword=<KEYWORD>&orgid=1
```

Run this for at least: `Programmer`, `Computer`, `Engineer`, `Manager`, `ICT`, `Software`,
`System Analyst`, plus any `$ARGUMENTS` the user gave. A redirect back to `/` (title reverts to
the bare homepage) means **zero results** for that keyword — not an error.

For each result page, pull structured data (org, job id, vacancy count, apply link) with
`browser_evaluate`, e.g.:

```js
() => Array.from(document.querySelectorAll('h3')).map(h => h.textContent).join(' | ')
```

then open each org's "Details" link (`/jobs/government/<orgSlug>?jobId=<id>`) and read
`document.body.innerText` to get the **real deadline** (`Application Deadline: …`), the full
post list for that organization's circular, the `ADV NO:`, and the `Apply Online` URL — the
list page's date column is the *application start* date, not the deadline.

Pagination: results use in-page "Page N" buttons (`browser_click`), not a `?page=` query param.

## 2. Filter to in-scope posts

Keep a post only if it is genuinely **IT/CSE or Engineering, at Assistant level or above**:

- **In scope:** Programmer, Assistant Programmer, Assistant Engineer (any discipline),
  Assistant Manager (Technical / CSE/IT / Electrical / Mechanical / Civil / IPE / Metallurgy /
  Automobile / Electronics / etc.), Assistant Instructor (ICT/Computer) at a technical
  institute, System Analyst, Software Engineer, Network Engineer.
- **Out of scope — exclude:** every **Sub-Assistant Engineer** / **Sub Assistant Engineer**
  post (diploma-level, not for BSc CSE/EEE/engineering graduates), typist/clerical posts
  ("Office Assistant-cum-Computer Typist", "Computer Operator", "Stenotypist-cum-Computer
  Operator"), and non-technical Assistant Manager posts (Admin, Finance, HR, Security, Store,
  Law, Accounts) even when they share an organization with an in-scope post.
- If **every** technical post in an organization's circular turns out to be Sub-Assistant-level
  or clerical, drop that organization's resource entirely rather than publishing an empty shell.
- When an organization has both in-scope and out-of-scope posts in the same circular (common —
  BPC, DSCC, CPGCBL, APSCL, Petrobangla/BOGMC all mix Assistant Engineer/Manager with
  Sub-Assistant or admin posts), write **one** resource row per organization listing only the
  in-scope posts, comma-separated, each as `Post Name-NN` (vacancy count), ending with
  `(ADV NO: …)`.

## 3. Write to the `resources` table

This is admin-only via the API (`PUT/POST /api/resources` needs an admin JWT), so don't try to
log in — insert directly with a throwaway TypeScript script that reuses the existing pool
module (it loads `DATABASE_URL` from `server/.env` itself; never read or print that file):

```ts
// server/scripts/_tmp_circulars.ts
import { pool } from "../src/db/pool.js";
// ... INSERT/UPDATE/DELETE against resources, matching rows by category='circular' AND title_en
await pool.end();
```

Run it from `server/` with (PowerShell execution policy blocks bare `npm`/`npx` here, so always
go through `cmd`):

```bash
cmd //c "npx tsx scripts/_tmp_circulars.ts"      # from Git Bash
cmd /c "npx tsx scripts/_tmp_circulars.ts"       # from PowerShell
```

**Delete the temp script immediately after it runs** — it's a one-off, never commit it.

Row shape (see `server/src/db/migrations/009_resources.ts` / `010_site_features.ts` and
`server/src/routes/resources.ts` for the authoritative schema):

- `category`: `'circular'`
- `tag`: `'Govt job'` — this is the convention already used by seeded/admin-authored circulars
  (it's the filter chip shown on the portal, e.g. "Govt job" / "Teacher" / "M.Sc admission" —
  **not** an org code).
- `title_en` / `title_bn`: the organization's full name, e.g.
  `"Bangladesh Petroleum Corporation (BPC)"`. Match on this to dedupe — `SELECT id FROM
  resources WHERE category='circular' AND title_en = $1` before inserting.
- `details_en` / `details_bn`: the in-scope post list, comma-separated, `Post-NN` each, ending
  `(ADV NO: …)`. Provide a genuine Bangla translation, not a transliteration.
- `link_url`: the organization's own website (from the job listing).
- `apply_url`: the `*.teletalk.com.bd/...` apply link from the circular (`Apply Online`).
- `starts_on` / `ends_on`: `YYYY-MM-DD`, from the detail page's "Application Start/End Date"
  (**not** the list page's single date column).
- `is_pinned`: `true` only for circulars whose in-scope posts are clearly CSE/IT-specific
  (e.g. Assistant Manager(CSE/IT), Assistant Engineer(Computer)); `false` for
  general-engineering-only circulars.
- `is_published`: `true`.

For an organization already in the table whose circular changed (new deadline, revised post
list), `UPDATE ... WHERE category='circular' AND title_en = $1` rather than inserting a
duplicate row.

## 4. Report

List what changed: organizations added, updated, or dropped (and why — e.g. "dropped, only had
a Sub-Assistant Engineer post"), with the final post list, deadline and apply link for each.
Don't claim a post is in-scope without having read its organization's own detail page — the
list-page title alone can be ambiguous (e.g. "Assistant Engineer(Computer)" vs
"Sub-Assistant Engineer(Computer/IT)" look similar but are not the same level).

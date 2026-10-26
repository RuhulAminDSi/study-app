# Handwritten lesson notes — authoring & publishing

Bilingual (English + Bangla) A4 revision notes for the study app. One "note set" is
one lesson, delivered as handwritten HTML, a typed Markdown companion, and a PDF.

This file covers the whole flow. For **style**, see [`AUTHORING.md`](AUTHORING.md) —
it is the contract and this document does not restate it.

---

## 1. Layout

Everything is grouped by chapter. `<NN-chapter>` matches the seed module's number
and slugified title (`chapterDir()` in `server/src/db/applyNotes.ts` is the
authority — copy the name from an existing folder rather than inventing one).

| Path | Contents | Written by |
| --- | --- | --- |
| `notes/src/<NN-chapter>/<slug>.<lang>.html` | handwritten source | agent / you |
| `notes/md/<NN-chapter>/<slug>.<lang>.md` | typed companion | agent / you |
| `notes/pdf/<NN-chapter>/<slug>.<lang>.pdf` | A4 PDF | `render.mjs` |
| `notes/snap/<NN-chapter>/<slug>.<lang>/` | QA PNGs | `snap.mjs` |
| `public/notes/<NN-chapter>/<slug>/` | what the app serves | `publish.mjs` |
| `server/data/notes/manifest.json` | DB registration | you |

`<NN-chapter>` must match `^\d{2}-[a-z0-9-]+$`. Chapter-folder stylesheet href is
`../../assets/hw.css`. **Anything placed directly in `notes/src/` is skipped** with a
warning — `sources.mjs` only walks chapter directories.

`<lang>` is `en` or `bn`. `<slug>` is the note set's identity and is what the
manifest and the app use, so it must match the manifest entry exactly.

Each published note set contains 14 files — 7 per language:

```
<slug>.<lang>.html              handwritten note (fit.js injected)
<slug>.<lang>.pdf               handwritten A4 PDF
<slug>.<lang>.md                typed companion
<slug>.<lang>.note.pdf          typed note as a PDF (the in-app web view)
<slug>.<lang>.cover.jpg         first sheet — PDF thumbnail
<slug>.<lang>.note.cover.jpg    first screen of the typed note
<slug>.<lang>.json              metadata: pages, byte sizes, contents list
```

---

## 2. The pipeline

```
seed module ──► author ──► check ──► QA ──► render ──► manifest ──► publish ──► apply
(lesson text)   HTML+MD     gate     PNGs     PDF        registry     public/    database
```

Run every command from the repository root, except `notes:apply`, which lives in the
server workspace.

### 2.0 opencode commands — run them one at a time

Each stage is a **separate command** in `.opencode/command/`. Run them individually; a single
command that tries to do a whole chapter's worth of work will exhaust the usage limit before
it finishes.

| Stage | Command | Underlying script |
| --- | --- | --- |
| Author one lesson | `/notes-prep <slug>` | `node notes/build/check.mjs` (verify) |
| Gate | `/notes-check <slug>` | `node notes/build/check.mjs` |
| Visual QA | `/notes-qa <slug>.<lang>` | `node notes/build/snap.mjs` |
| Render | `/notes-render <slug>` | `node notes/build/render.mjs` |
| Register | `/notes-manifest <slug>` | — |
| Publish | `/notes-publish <slug>` | `node notes/build/publish.mjs` |
| Database | `/notes-apply` | `npm run notes:apply` (server) |
| Everything | `/notes-ship <slug>` | all of the above, one lesson |

**Every command is lesson-wise. A chapter is not a valid target.** If you pass one, the
command lists that chapter's lessons with their slugs and asks which you mean — it will not
sweep the whole chapter. That is deliberate: a chapter-wide run in a single invocation is what
exhausts the usage limit.

`/notes-prep` runs `check.mjs` itself, so author-and-verify is one invocation and the normal
loop is **six** commands, not seven.

`/notes` with no action just prints this table. Given a slug but no action, it asks which stage
to run rather than defaulting to the full flow.

#### Command format

Every command is `/notes-<stage> <slug>` — stage first, then lesson slug.

```
/notes-<stage> <slug>
         │       └── lesson slug, e.g. os-deadlock  (required, except /notes-apply)
         └── one of: prep | check | qa | render | manifest | publish | apply | ship
```

| Stage | Required target | Notes |
| --- | --- | --- |
| `/notes-prep` | `<slug>` | runs `check.mjs` itself |
| `/notes-check` | `<slug>` | re-verify only; optional after `/notes-prep` |
| `/notes-qa` | `<slug>.<lang>` | the one command that takes a language suffix |
| `/notes-render` | `<slug>` | |
| `/notes-manifest` | `<slug>` | |
| `/notes-publish` | `<slug>` | |
| `/notes-apply` | none | processes the whole manifest; the slug is for checking output |
| `/notes-ship` | `<slug>` | all stages for that one lesson |

`CH/SLUG` (`18-operating-system/os-deadlock`) is accepted as a convenience — the chapter part is
a hint only. **The slug is the target.** A bare chapter is never accepted; every command
resolves the chapter folder from the slug on its own (§2.0a below).

#### Copy-paste block — one lesson, six invocations

Replace `SLUG` with the lesson slug and run these **one at a time**, waiting for each to finish:

```
/notes-prep      SLUG
/notes-qa        SLUG.bn
/notes-render    SLUG
/notes-manifest  SLUG
/notes-publish   SLUG
/notes-apply
```

Six invocations — `/notes-prep` runs `check.mjs` itself, so a separate `/notes-check` is only
needed to re-verify later or fix a regression.

Filled in for `os-deadlock`:

```
/notes-prep      os-deadlock
/notes-qa        os-deadlock.bn
/notes-render    os-deadlock
/notes-manifest  os-deadlock
/notes-publish   os-deadlock
/notes-apply
```

Seven-command variant if you would rather author and verify as separate invocations:

```
/notes-prep      os-deadlock
/notes-check     os-deadlock
/notes-qa        os-deadlock.bn
/notes-render    os-deadlock
/notes-manifest  os-deadlock
/notes-publish   os-deadlock
/notes-apply
```

Short form — all stages for one lesson in a single invocation:

```
/notes-ship os-deadlock
```

#### Chapter template

A chapter is the same commands repeated per lesson, **one lesson per invocation**. Fill in a
row, run it top to bottom, then move to the next row:

| # | Lesson slug | prep | qa | render | manifest | publish | apply |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | `SLUG-1` | `/notes-prep SLUG-1` | `/notes-qa SLUG-1.bn` | `/notes-render SLUG-1` | `/notes-manifest SLUG-1` | `/notes-publish SLUG-1` | `/notes-apply` |
| 2 | `SLUG-2` | `/notes-prep SLUG-2` | `/notes-qa SLUG-2.bn` | `/notes-render SLUG-2` | `/notes-manifest SLUG-2` | `/notes-publish SLUG-2` | `/notes-apply` |
| 3 | `SLUG-3` | … | … | … | … | … | `/notes-apply` |

`/notes-ship SLUG-N` is the shortcut — all stages for that one lesson. Never pass a chapter.

#### How a slug resolves to a chapter folder

Every command needs `notes/<dir>/<NN-chapter>/<slug>` but only takes a slug, so it resolves the
folder itself:

1. `server/data/notes/manifest.json` — the slug's entry has `chapterNumber`
2. `notes/src/*/<slug>.en.html` — the folder that already contains the slug
3. the seed module in `server/data/modules/<NN>_<Name>.js` — match `lessons[].title`

`chapterDir()` in `server/src/db/applyNotes.ts` decides the canonical folder name. It must
match `^\d{2}-[a-z0-9-]+$` — the seed module's number plus its slugified title, e.g. seed
lesson `"7. Computer Architecture"` → `07-computer-architecture`. Copy the name from an
existing folder; **never invent one**. Chapters 12, 13 and 14 have no folder yet — the first
`/notes-prep` for those creates it.

#### Stage checklist

What "done" means before you run the next command:

| After | Confirm |
| --- | --- |
| `/notes-prep` | 4 files on disk, `check.mjs` PASS both languages, no U+FFFD, no scratch files |
| `/notes-check` | PASS verbatim, and you read the `<title>`/`h2` — content is genuinely this lesson's |
| `/notes-qa` | every PNG read; no tofu, no clipped SVG, no overlapping labels |
| `/notes-render` | every PDF exists, `%PDF-` header, page count = sheet count |
| `/notes-manifest` | entry present, `lessonTitleEn` matches the **seed module** character-for-character, `heading.bn` **and** `takeaways.bn` present even if `langs: ["en"]`, zero U+FFFD |
| `/notes-publish` | 14 files per set in `public/notes/<NN-chapter>/<slug>/` — 6 for an EN-only set |
| `/notes-apply` | `replaced` / `refreshed` / `added` per slug — **not** `skipped`, and no crash |

Stop and fix at the first stage that fails. `/notes-apply` reporting `skipped … not published
yet` means `/notes-publish` never ran, or the PDF is missing — it does not mean success.

#### Lesson-wise breakdown

Every seed lesson, its note slug, and how far it has got. Read this before picking work: it
tells you which chapters are untouched and which lessons are half-finished.

| Column | Meaning |
| --- | --- |
| **Seed id** | the `lessons[].id` in `server/data/modules/<NN>_<Name>.js` — the authoring source |
| **Lesson** | the seed `title`, which must equal `lessonTitleEn` in the manifest, character-for-character |
| **Slug** | the note set's identity; `—` means no manifest entry yet, so `/notes-manifest` has not run |
| **State** | `src` = both HTML files on disk · `md` = both Markdown files · `pdf` = both PDFs · `published` = 14 files in `public/notes/<chapter>/<slug>/` |

**Snapshot as of 2026-10-13** — regenerate before trusting it, or check the disk directly.

Reading the remaining work:

- **Chapters 10, 11, 15 and 16 have no manifest entries.** Their lessons need `/notes-prep`
  (or at minimum `/notes-check`) → `/notes-manifest` → `/notes-render` → `/notes-publish` →
  `/notes-apply`. Chapter 17 is now complete — all six seed lessons plus the `pyq-se` extra.
- **Chapters 12, 13 and 14 have no chapter folder at all** — no sources exist yet. Start with
  `/notes-prep <first lesson's slug>` and create the folder as part of the first note set.
- **`src · pdf · published` without `md`** means the typed Markdown companion is missing. That
  is a `/notes-prep` gap, not a render gap — the published note still works, but the typed
  companion does not. `se-testing-maintenance` and `pyq-se` are both now **bilingual** (`.en`
  and `.bn`) but still lack their `.md` companions.
- Extra PYQ / viva sets (`pyq-*`) are `mode: "add"` and have no seed lesson. They do not appear
  in this table; find them in `server/data/notes/manifest.json`.

<!-- BEGIN GENERATED BREAKDOWN — 82 seed lessons, 19 chapters -->
| # | Seed id | Lesson | Slug | State |
| --- | --- | --- | --- | --- |
| **01-Basic Physics** | | `01-basic-physics` | | |
| 1 | `bp1` | Electromagnetism Basics | `ch1-electromagnetism` | src · md · pdf · published |
| 2 | `bp2` | Waves and Oscillations | `ch1-waves-oscillations` | src · md · pdf · published |
| 3 | `bp3` | Special Relativity | `ch1-special-relativity` | src · md · pdf · published |
| 4 | `bp4` | Quantum Physics & EM Waves | `ch1-quantum-physics` | src · md · pdf · published |
| 5 | `bp5` | Quantum Mechanics: De Broglie Waves & Wave Equation | `ch1-quantum-mechanics` | src · md · pdf · published |
| **02-Introduction to Computer Systems** | | `02-introduction-to-computer-systems` | | |
| 1 | `cs1` | Introduction to Computations & History of Computing Devices | `ics-history-computing` | src · pdf · published |
| 2 | `cs2` | Computers, Hardware Components & Basic Architecture | `ics-hardware-architecture` | src · pdf · published |
| 3 | `cs3` | Software: Operating System & Application Software | `ics-software-os` | src · pdf · published |
| 4 | `cs4` | Basic Information Technology & The Internet | `ics-it-internet` | src · pdf · published |
| 5 | `cs5` | Number Systems: Binary, Octal, Hexadecimal & Binary Arithmetic | `ics-number-systems` | src · pdf · published |
| **03-Electrical Circuits** | | `03-electrical-circuits` | | |
| 1 | `ec1` | Circuit Variables, Elements & Basic Laws (Ohm's Law, KCL, KVL) | `ec-basic-laws` | src · pdf · published |
| 2 | `ec2` | Network Theorems & Analysis Techniques | `ec-analysis-theorems` | src · pdf · published |
| 3 | `ec3` | AC Analysis, Phasors & AC Power | `ec-ac-phasors` | src · pdf · published |
| **04-Digital Logic Design** | | `04-digital-logic-design` | | |
| 1 | `dl1` | Number Systems, Codes & Digital Logic Families | `dld-number-systems` | src |
| 2 | `dl2` | Boolean Algebra & Logic Simplification | `dld-boolean-algebra` | src · pdf · published |
| 3 | `dl3` | Logic Gates & Universal Gates | `dld-logic-gates` | src · pdf · published |
| 4 | `dl4` | Combinational Logic Circuits & Design | `dld-combinational` | src |
| 5 | `dl5` | Sequential Logic Circuits: Counters & Registers | `dld-sequential` | src |
| **05-Basic Electronics** | | `05-basic-electronics` | | |
| 1 | `be1` | Semiconductor Diodes & Rectifiers | `eln-diodes` | src · pdf · published |
| 2 | `be2` | BJT Transistors & Biasing | `eln-bjt` | src · pdf · published |
| 3 | `be3` | Amplifiers & FET | `eln-amplifiers-fet` | src · pdf · published |
| **06-Microprocessor and Interfacing** | | `06-microprocessor-and-interfacing` | | |
| 1 | `mp1` | 8086 Architecture, Addressing Modes & Instruction Set | `mpi-8086` | src · pdf · published |
| 2 | `mp2` | Memory & I/O Interfacing with 8255 | `mpi-memory-io-8255` | src · pdf · published |
| 3 | `mp3` | Timer, Serial Communication & Interrupt | `mpi-timer-serial` | src · pdf · published |
| 4 | `mp4` | Interrupts, DMA & Advanced Topics | `mpi-interrupts-dma` | src · pdf · published |
| **07-Computer Architecture** | | `07-computer-architecture` | | |
| 1 | `ca1` | CPU Organization, Registers & Instruction Cycle | `ca-cpu-organization` | src |
| 2 | `ca2` | Memory Hierarchy, Cache & Virtual Memory | `ca-memory-hierarchy` | src · pdf · published |
| **08-Communication Theory** | | `08-communication-theory` | | |
| 1 | `ct1` | Spectral Analysis: Fourier Series, Sampling, Power Spectrum, Fourier Transform, Convolution, Parseval's Theorem | `com-spectral-analysis` | src · pdf · published |
| 2 | `ct2` | Information Theory: Entropy, Information Rate, Shannon's Theorem, Channel Capacity | `com-information-theory` | src · pdf · published |
| 3 | `ct3` | Analog & Digital Modulation, Pulse Signals, Multiplexing & Multiple Access | `com-modulation-multiplexing` | src · pdf · published |
| **09-Computer Networking and Security** | | `09-computer-networking-and-security` | | |
| 1 | `ns1` | Protocol Hierarchies, Data Link Control, LAN Protocols & IEEE 802 | `net-protocols-datalink` | src · md · pdf · published |
| 2 | `ns2` | Routing Algorithms, Congestion Control, Internetworking, WAN, Fragmentation | `net-routing-congestion` | src · pdf · published |
| 3 | `ns3` | Firewalls, IPv4, IPv6, ARP, RARP, Mobile IP, ATM Network Layer | `net-ip-firewalls` | src · md · pdf · published |
| 4 | `ns4` | Transport Protocols, TCP, LJDP, AAL, Cryptography, DES, IDEA, Public Key | `net-transport-crypto` | src · md · pdf · published |
| 5 | `ns5` | Authentication, Digital Signatures, Gigabit Ethernet, DNS, Email Privacy | `net-auth-dns-email` | src · md · pdf · published |
| 6 | `ns6` | SNMP, HTTP, WWW, Internet Protocols, OSI Model, Data Travel | `net-application-osi` | src · md · pdf · published |
| **10-Structured Programming Language (C)** | | `10-structured-programming-language-c` | | |
| 1 | `sp1` | Data Types, Operators, Expressions & Control Structures | — | no manifest entry |
| 2 | `sp2` | Functions, Parameter Passing, Scope, Storage Classes, Recursion | — | no manifest entry |
| 3 | `sp3` | Header Files, Preprocessor, Pointers, Arrays, Strings | — | no manifest entry |
| 4 | `sp4` | User Defined Data Types: Structures, Unions, Enumerations | — | no manifest entry |
| 5 | `sp5` | I/O, File Access, Variable Arguments, Command Line, Error Handling, Graphics, Linking, Library Functions | — | no manifest entry |
| **11-Object Oriented Programming (OOP)** | | `11-object-oriented-programming-oop` | | |
| 1 | `oop1` | Philosophy, Advantages & Core Concepts of OOP | — | no manifest entry |
| 2 | `oop2` | Constructors, Destructors, Arrays, Pointers & Inheritance | — | no manifest entry |
| 3 | `oop3` | Polymorphism, Exceptions, Templates & Multi-threading | — | no manifest entry |
| **12-Discrete Mathematics** | | `12-*` (no folder) | | |
| 1 | `dm1` | Set Theory, Relations & Functions | — | no manifest entry |
| 2 | `dm2` | Graph Theory, Propositional & Predicate Calculus | — | no manifest entry |
| 3 | `dm3` | Mathematical Reasoning: Induction, Contradiction & Recursion | — | no manifest entry |
| 4 | `dm4` | Counting, Inclusion-Exclusion, Recurrence & Algebraic Structures | ✅ | manifest entry added |
| **13-Graphs** | | `13-*` (no folder) | | |
| 1 | `gr1` | Simple Graphs, Digraphs, Subgraphs, Vertex-Degrees, Walks, Paths & Cycles | — | no manifest entry |
| 2 | `gr2` | Trees, Spanning Trees, Distance, Complementary Graphs, Cut-Vertex, Bridges, k-Connected | — | no manifest entry |
| **14-Theory of Computation** | | `14-*` (no folder) | | |
| 1 | `tc1` | Language Theory & Finite Automata (DFA, NFA, PDA) | — | no manifest entry |
| 2 | `tc2` | Context-Free Languages & Context-Free Grammars (CFG) | — | no manifest entry |
| 3 | `tc3` | Turing Machines & Computability Theory | — | no manifest entry |
| **15-Data Structures and Algorithms** | | `15-data-structures-and-algorithms` | | |
| 1 | `dsa1` | Internal Data Representation & Abstract Data Types | — | no manifest entry |
| 2 | `dsa2` | Advanced Data Structures: Heaps, Fibonacci Heaps, B-Trees | — | no manifest entry |
| 3 | `dsa3` | Recursion, Sorting, Searching, Hashing & Algorithm Analysis | — | no manifest entry |
| 4 | `dsa4` | Algorithm Design Methods & Graph Algorithms | — | no manifest entry |
| 5 | `dsa5` | Flow Algorithms, Approximation & Parallel Algorithms | — | no manifest entry |
| 6 | `dsa6` | Algebraic Simplification, Lower Bound & NP-Completeness | — | no manifest entry |
| **16-Database Systems** | | `16-database-systems` | | |
| 1 | `db1` | Database Concepts & Data Models (ER, Relational) | — | no manifest entry |
| 2 | `db2` | Query Languages: Relational Algebra & SQL | — | no manifest entry |
| 3 | `db3` | Functional Dependencies & Normalization | — | no manifest entry |
| 4 | `db4` | File Organization, Indexing & Query Optimization | — | no manifest entry |
| 5 | `db5` | Transactions, Concurrency, Recovery & Advanced Topics | — | no manifest entry |
| **17-Software Engineering & Information System Design** | | `17-software-engineering-information-system-design` | | |
| 1 | `se1` | Software Engineering Concepts, Paradigms & SDLC Phases | `se-concepts-paradigms-sdlc` | src · md · pdf · published |
| 2 | `se2` | Project Management, Metrics, Risk & Scheduling | `se-project-management` | src · md · pdf · published |
| 3 | `se3` | Analysis, Modeling, Design & Architecture | `se-analysis-design` | src · md · pdf · published |
| 4 | `se4` | Waterfall, Inception, Use Cases, UML & OO Design | `se-waterfall-uml-oo` | src · md · pdf · published |
| 5 | `se5` | GRASP Patterns, DCD, Testing Strategies | `se-grasp-patterns` | src · md · pdf · published |
| 6 | `se6` | Testing Strategies, Maintenance, Quality & Metrics | `se-testing-maintenance` | src · pdf · published *(no `md`)* |
| **18-Operating System** | | `18-operating-system` | | |
| 1 | `os1` | Operating System: Role, Concepts & Structure | `os-role-concepts` | src · md · pdf · published |
| 2 | `os2` | Process: Model, IPC, Scheduling, Multiprocessing & Time-sharing | `os-process-scheduling` | src · md · pdf · published |
| 3 | `os3` | Memory Management: Swapping, Paging, Segmentation & Virtual Memory | `os-memory-management` | src · md · pdf · published |
| 4 | `os4` | Input/Output: Hardware, Software, Disk, Terminals, Clocks | `os-input-output` | src · md · pdf · published |
| 5 | `os5` | Deadlock: Resource Allocation, Detection, Prevention & Recovery | `os-deadlock` | src · md · pdf · published |
| 6 | `os6` | File Systems & Case Study of Operating Systems | `os-file-systems` | src · md · pdf · published |
| **19-Artificial Intelligence** | | `19-artificial-intelligence` | | |
| 1 | `ai1` | Introduction to AI: Old & New Techniques | `ai-introduction` | src · md · pdf · published |
| 2 | `ai2` | Knowledge Representation & Logic | `ai-knowledge-representation` | src · md · pdf · published |
| 3 | `ai3` | Search Techniques in AI | `ai-search-techniques` | src · md · pdf · published |
| 4 | `ai4` | Probabilistic Reasoning & NLP | `ai-probabilistic-nlp` | src · md · pdf · published |
| 5 | `ai5` | Expert Systems & Machine Learning Fundamentals | `ai-expert-systems-ml` | src · md · pdf · published |
| 6 | `ai6` | Practical ML Applications & Regression | `ai-ml-applications-regression` | src · md · pdf · published |
<!-- END GENERATED BREAKDOWN -->

To work a row, substitute its slug into the
[copy-paste block](#copy-paste-block--one-lesson-six-invocations) above — for lesson 5 of
chapter 18, that is:

```
/notes-prep      os-deadlock
/notes-qa        os-deadlock.bn
/notes-render    os-deadlock
/notes-manifest  os-deadlock
/notes-publish   os-deadlock
/notes-apply
```

For a chapter with no folder yet, the first `/notes-prep` creates it. From then on the commands
are identical for every lesson in it.

### 2.1 Author

Run as `/notes-prep <slug>`. **One lesson per invocation — a chapter is never a valid target.**

One agent, and only one, for that lesson. Do not dispatch agents in parallel; they get
cancelled together and each one leaves half-written files behind. Never author a second lesson
in the same run — name the next one and stop. Each run writes exactly four files:

```
notes/src/<NN-chapter>/<slug>.en.html
notes/src/<NN-chapter>/<slug>.bn.html
notes/md/<NN-chapter>/<slug>.en.md
notes/md/<NN-chapter>/<slug>.bn.md
```

Content comes from `server/data/modules/<NN>_<Name>.js` — read `content`,
`contentBn`, `takeaways`, `takeawaysBn` — expanded to university / job-exam depth and
cross-checked against `server/data/questions/<SUBJ>.json`.

**Copy a passing file rather than authoring blank.** Editable skeleton: the
`<svg><defs>` wobble block (`ah` / `ahb` / `ahg` / `ahp`), the `section.page`
structure, the trailing fill/overflow `<script>`, and the class vocabulary
(`.hl`, `.circ`, `.mnote`, `.trick`, `.exam`, `.sticky`, `.tag`, `.cols`,
`table.hand`, `figure.doodle`, `.small`, `.tiny`).

### 2.2 Check — the gate

```bash
node notes/build/check.mjs <slug> [<slug> ...]
```

The script also accepts a chapter folder, but the `/notes-check` command does not pass one —
its target is a single slug.

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

### 2.3 QA — glyph and layout inspection

```bash
node notes/build/snap.mjs <slug>.<lang> [outDir]
```

Writes one PNG per sheet. `snap.mjs` takes **one** note name (plus an optional output
directory) — passing several names does not work.

**Then read the PNGs.** `check.mjs` cannot see tofu boxes, clipped SVG or overlapping
labels, and those are the defects that actually reach users.

### 2.4 Render

```bash
node notes/build/render.mjs <slug> [<slug> ...]
```

Headless Chrome, A4, backgrounds on. Only sources that have a PDF can be published, so
re-render anything you edited afterwards — including a `<title>` fix.

`render.mjs` reads **only** `notes/src/**/<slug>.<lang>.html`. It does not read `notes/md/**` —
the Markdown companion is consumed by `publish.mjs` in §2.6.

### 2.5 Manifest

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

| Field | Notes |
| --- | --- |
| `mode` | `"replace"` for a course lesson, `"add"` for an extra PYQ / viva note |
| `lessonTitleEn` | must equal the seed module's `title` **character-for-character** or the lesson will not match. Take it from the seed module, never from the note's `<title>` |
| `lessonTitleBn` | the seed's `titleBn` |
| `heading.*` | each HTML file's own `<title>`, with `&amp;` un-escaped to `&` |
| `takeaways.*` | from the seed's `takeaways` / `takeawaysBn` |
| `langs` | optional — omit for bilingual, `["en"]` for English-only |
| `heading.bn` / `takeaways.bn` | **required on every entry, including English-only ones** |

`langs` decides what the app can actually serve, and an EN-only set fails **silently** — see
§3 [`langs: ["en"]` hides Bangla](#langs-en-hides-bangla-without-erroring). An English-only
entry still carries an English `heading.bn` as a fallback; the moment you author the real
`.bn` note and drop `langs`, **replace that fallback with genuine Bangla**, because it becomes
the heading every Bangla reader sees.

Generate entries with a Node script that reads the module and the HTML rather than
typing them — it stops titles drifting. Build an explicit **slug → seed id** map first; do not
fuzzy-match titles. Write the file as UTF-8 and re-check for U+FFFD after writing.

`langs: ["en"]` does **not** exempt an entry from `heading.bn` / `takeaways.bn`. See
[§3 `notes:apply` crashes](#notesapply-crashes-on-an-english-only-entry).

### 2.6 Publish

```bash
node notes/build/publish.mjs <slug> [<slug> ...]
```

Copies the set into `public/notes/<NN-chapter>/<slug>/`, injects `fit.js` (scales A4
sheets to narrow screens; print unaffected), and builds the covers, typed-note PDF and
metadata JSON. Sources without a rendered PDF are skipped with a warning.

An English-only set (`langs: ["en"]`) has no `.bn.html` and no `.bn.md`, so it publishes
**6 files, not 14**. That is correct, not a failed publish.

### 2.7 Apply to the database

```bash
cd server && npm run notes:apply
```

`notes:apply` is a **server** script — there is no root-level equivalent. On PowerShell
`npm` is blocked by the execution policy, so use:

```powershell
cd server; cmd /c "npm run notes:apply"
```

From a **bash** shell (git bash, MSYS) use a doubled slash, or `/c` is eaten as a path and
`cmd` opens an interactive prompt instead of running anything:

```bash
cmd //c "npm run notes:apply"     # note the //
```

Verify you actually ran the script and did not just open a shell — the real output starts with
`npm notice run … notes:apply` followed by one line per slug.

Output per slug: `replaced`, `refreshed`, `added`, or `skipped` with a reason —
`not published yet` means step 2.6 has not run or the PDF is missing.

---

## 3. Failures you will hit, and what they mean

### Fill above 100%

`fills` of 100-160% means every sheet overflows — far too much content per sheet.

The ceiling is about **96%, not 100%**, because `scrollHeight` includes the last
block's bottom margin plus the page's `padding-bottom`. A sheet at 99% fails. Target
85-95%.

Fix by moving blocks between sheets, shrinking doodle `viewBox`, or using
`class="small"` / `"tiny"`. **Never pad with filler** — a padded sheet is a bad note. See
[Splitting an over-full sheet](#splitting-an-over-full-sheet) for the redistribution recipe.

**Fill is not overflow.** A sheet can read 88% and still be broken — vertically it passes, but
a table or an SVG caption can still spill sideways. Both must be checked.

### Fill below 72%

The sheet is too empty. Promote `tiny` → `small`, or add genuine content. Do not add
decorative filler to satisfy the number. The **last sheet is exempt** — `check.mjs` only tests
`i < fills.length` — so a short closing sheet is legal, and is the right place to move overflow
to.

### Horizontal overflow the gate cannot see

`check.mjs` measures vertical only. Use `minmax(0,1fr)` for grid columns and check
`scrollWidth ≈ 210 mm` for A4 at 96 dpi. A `nowrap` table inside a narrow grid column
silently pushes content off the page.

The specific case that keeps recurring: a wide table's **min-content** width exceeds a
`minmax(0,1fr)` track and spills into the *neighbouring* column rather than off the sheet. A
6-column defect-cost table overwrote the doodle sitting beside it while every vertical
measurement stayed green. Narrow the sibling column, or shrink the table's type.

### `langs: ["en"]` hides Bangla without erroring

The app decides what it can show with `langs`, and falls back **silently** when a language is
absent:

```ts
const publishedLangs = (entry) => entry.langs?.length ? entry.langs : ["en", "bn"];
const noteLang = (entry, requested) =>
  publishedLangs(entry).includes(requested) ? requested : publishedLangs(entry)[0];
```

So `langs: ["en"]` means a Bangla UI request is quietly served the **English** file. Every
stage still reports success — `publish` is happy, `apply` says `refreshed`, the gate passes.
Nothing logs a warning. The only symptom is a reader reporting that no Bangla format is
available.

When someone reports missing Bangla, check in this order:

1. `manifest.json` — does the entry have `langs: ["en"]`? Remove it to restore bilingual.
2. `notes/src/<chapter>/<slug>.bn.html` — does the source exist at all?
3. `public/notes/<chapter>/<slug>/` — is `<slug>.bn.html` actually published?
4. `notes/pdf/<chapter>/<slug>.bn.pdf` — without it `publish` skips the language silently.

An English-only set publishes 6 files, not 14, and that is correct for such a set — but it
should be a deliberate choice recorded in the breakdown table, not an accident.

### `notes:apply` crashes on an English-only entry

```
notes:apply failed: TypeError: Cannot read properties of undefined (reading 'replace')
    at escapeHtml (server/src/db/applyNotes.ts:36:12)
    at viewerHtml (server/src/db/applyNotes.ts:60:19)
```

`applyNotes.ts` builds **both** language view strings unconditionally —
`viewerHtml(entry, "en") + viewerHtml(entry, "bn")` — and indexes `entry.heading[lang]` with
no fallback. One `langs: ["en"]` entry with no `heading.bn` aborts the run *before any slug is
reported*, so every slug in the manifest is left unapplied, not just the new one.

Fix in the manifest: set `heading.bn` and `takeaways.bn` to the English values, which is the
intended fallback. The "`bn` falls back to `en`" behaviour covers only the asset path in
`noteLang()` — never the heading or takeaways. No gate catches this, and it can surface on a
later run than the edit that caused it.

### A passing-looking orphan that fails the gate

Files left on disk by an earlier run are not evidence that they are usable. In chapter 17,
`se-testing-maintenance` measured **143%** on one sheet and `pyq-se` was over on **seven**
sheets (99-117%) while both looked complete. Run `check.mjs` before deciding a set needs no
work.

### Splitting an over-full sheet

A sheet at 143% needs more than one extra sheet to reach 72-95%, and it does not contain enough
content to fill them — the fix is redistribution, not invention. A recipe that worked:

1. Split the worst sheet in two at a natural heading boundary.
2. **Donate a whole section from an adjacent over-full sheet**, so the donor drops in one move
   and section numbering stays in order. (Moving McCall's factors off a 105% sheet onto a new
   one took that sheet to 78% immediately.)
3. Push trailing material to a new final sheet. The **last sheet is exempt from the 72% floor**
   — `check.mjs` tests `i < fills.length`.

Then trim the remaining hot sheets with `.small` / `.tiny`, line-height and prose, and
re-measure after each structural change.

### A scripted edit that leaked across sheets

A global find-and-replace across a whole chapter file changes every sheet. One
`.hand small` → `.hand tiny` replacement restyled eleven tables across a chapter. Split on
`<section class="page">`, edit the target block, rejoin.

Two related traps:

- **A regex can produce invalid HTML.** A naive block replacement left a **duplicated `style`
  attribute** on several elements — invisible to `check.mjs`, and the reason a round of edits
  appeared to do nothing.
- **Exact-string matches are punctuation-sensitive.** An em dash `—` where the file has a
  hyphen `-` makes the edit report success while changing nothing. Read the file first.

### `.mnote` and `.sticky` are right-floats, not blocks

`hw.css` defines both as `float: right` with fixed widths — `.mnote` at **42mm**, `.sticky` at
**52mm**. At full page width that is the intended margin-note look. Inside a `.cols` column
(~90mm) it is a trap: the float leaves only ~38-48mm for the text beside it, which collapses
into a narrow ribbon, and two floats in one column overlap each other.

`check.mjs` passes this — fills measure vertical extent only. A sheet can read 92% and still
have unreadable overlapping text.

Inside a column, either force block layout:

```html
<div class="mnote" style="float:none;width:auto">…</div>
```

or use `.def` / `.sumbox` / `.trick`, which are block elements and behave correctly anywhere.

Note that neutralising the floats **changes the column heights**, so sheets that were passing
can become sparse. Re-run `check.mjs` and re-fill them with real content — do not assume the
old fills still hold.

When scripting this, match the whole class attribute including modifiers: `class="sticky pink"`
is a different string from `class="sticky"`, and a regex written for the bare form silently
misses every variant.

### `check.mjs` passing does not mean the text is readable

Vertical overflow is measured; **overlap is not**. Distinct failure modes that all pass the
gate: text overlapping another block, a float squeezing its neighbour into a ribbon, labels
colliding with a doodle, a `.circ` ballooning over the lines beneath it. All of these are
found by reading the `/notes-qa` PNGs, never by the gate.

### `.circ` that wrapped into a blob

`.circ` is `display: inline-block` with an absolutely positioned wobbly ellipse sized to the
box. When its text wraps, the ellipse grows over the neighbouring lines. A long circled phrase
needs its own `nowrap` line at a reduced font size. This appeared in `se-analysis-design` in
**both** languages — check both, since layout bugs are often duplicated across the pair.

### A doodle caption that escaped its viewBox

`figure.doodle svg { overflow: visible }`, so `<text>` wider than the `viewBox` is *not*
clipped — it spills onto the page and off the sheet. Keep captions inside the `viewBox` width
or shorten them.

### `notes:render` does not read the Markdown

`render.mjs` reads only `notes/src/**/<slug>.<lang>.html`. The `.md` companion is consumed later
by `publish.mjs`, which builds the `.note.pdf` and `.note.cover.jpg`. So editing a `.md` needs
no re-render — and a stale `.md` is not caught at render time, it surfaces as a stale
`.note.pdf` at publish time.

### An English-only set publishes 6 files, not 14

`langs: ["en"]` means no `.bn.html` and no `.bn.md`, so `publish.mjs` emits
`html · pdf · cover.jpg · json` — 4 files, and 6 only if a `.md` exists. Do not treat the
missing Bangla files as a failed publish.

### Tofu boxes in Bangla

Kalam has no Bangla glyphs. Every Bangla `<text>` inside an SVG needs
`class="bn …"`. Verify with a scan rather than by eye.

Also check: `.ink-b` **does not exist** in `notes/assets/hw.css`. It is worse than invisible —
an unstyled SVG `<path>` falls back to `fill: black; stroke: none`, so a closed path fills into
a solid black blob and an open arc fills as a lens shape. Use `.ink`.

### U+FFFD in the manifest

A JSON rewrite that lost UTF-8 corrupts every Bangla heading at once. After writing
`manifest.json`, assert `(text.match(/\uFFFD/g) || []).length === 0`.

### English `<title>` on a Bangla file

The PDF viewer and the in-app heading show `document.title`. A Bangla note left with an
English title shows English to Bangla readers. Confirm `heading.bn` contains Bangla
characters, not merely that it is non-empty.

### Agent cancelled partway

A cancelled agent can leave half-written files, duplicate slugs under different names,
and scratch files (`*.probe.html`) inside `notes/src/`. After every batch:

1. list `notes/src/<NN-chapter>/` and `notes/md/<NN-chapter>/`
2. delete stray non-note files
3. check each lesson for two slugs covering the same seed lesson — keep the one the
   manifest uses, delete the other
4. run `check.mjs` on the survivors

Never trust an agent's completion report — verify on disk.

---

## 4. Quick reference

```bash
# QA
node notes/build/check.mjs os-deadlock                 # one slug, both languages
node notes/build/snap.mjs os-deadlock.bn               # PNGs for visual inspection

# Build
node notes/build/render.mjs os-deadlock                # HTML -> PDF
node notes/build/publish.mjs os-deadlock               # -> public/notes/
cmd //c "npm run notes:apply"                           # -> database (bash: note //)
```

In a bash shell use `cmd //c` — `cmd /c` opens an interactive prompt instead of running the
script. From PowerShell use `cd server; cmd /c "npm run notes:apply"`.

In opencode, every command takes a **lesson slug** — see §2.0. `/notes-prep os-deadlock`
then `/notes-qa os-deadlock.bn`, etc. `/notes-ship os-deadlock` runs every stage for that one
lesson. Command files are in `.opencode/command/`.

### Never

- Edit `notes/assets/hw.css` to make a sheet fit.
- Write to `notes/src/` root.
- Hand-edit `public/notes/` — it is generated.
- Pass a chapter to any notes command, or author a second lesson in one run.
- Put "seed", "question bank", "manifest" or source file names into the notes.
- Claim "asked in BPSC 20xx" — write "high-yield".
- Add filler content to satisfy the gate.
- Derive `lessonTitleEn` from the note HTML's `<title>` — use the seed module via a slug → seed
  id map.
- Leave an English-only manifest entry without `heading.bn` / `takeaways.bn`.
- Patch `applyNotes.ts` to work around a missing-heading crash; fix the manifest instead.
- Run a find-and-replace across a whole chapter file instead of one `section.page` block.
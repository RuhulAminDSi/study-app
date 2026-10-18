# Study App

A full-stack study application with a React + TypeScript frontend and an AI Gateway backend.

## Project Structure

```
study-app/
├── src/                    # Frontend React application
│   ├── components/         # React components
│   ├── data/              # Study modules and translations
│   ├── assets/            # Static assets
│   └── types.ts           # TypeScript type definitions
├── server/                 # Backend AI Gateway server
│   ├── providers/         # AI provider implementations (OpenAI, Workers AI)
│   ├── services/          # Gateway and cost-tracking services
│   ├── middleware/        # Express middleware
│   └── types/             # Server-side TypeScript types
├── notes/                 # Handwritten A4 revision notes (sources, build scripts, output)
├── public/                 # Public static files
└── .playwright-mcp/       # Playwright testing configuration
```

## Features

### Frontend
- **React 19** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS v4** for styling
- Interactive study modules with structured content
- Responsive design

### Backend (AI Gateway)
- **Multi-provider AI support**: OpenAI and Cloudflare Workers AI
- **Automatic fallback**: Seamlessly switches providers on failure
- **Cost tracking**: Monitor API usage and expenses across providers
- **REST API**: Simple HTTP endpoints for AI completions

## Prerequisites

- Node.js 18+ 
- npm or yarn
- For backend: OpenAI API key and/or Cloudflare API credentials

## Installation

1. Clone the repository and install dependencies:

```bash
npm install
cd server && npm install
```

2. Configure environment variables for the backend:

```bash
cd server
cp .env.example .env
```

Edit `.env` and add your API keys:
- `OPENAI_API_KEY`: Your OpenAI API key
- `CLOUDFLARE_API_KEY`: Your Cloudflare API token
- `CLOUDFLARE_ACCOUNT_ID`: Your Cloudflare account ID

## Development

### Run Frontend Only
```bash
npm run dev
```
Starts the Vite development server on http://localhost:5173

### Run Backend Only
```bash
npm run server
```
Starts the AI Gateway server on http://localhost:3001 with hot-reload

### Run Both (Full Stack)
```bash
npm run dev:all
```
Runs both frontend and backend concurrently using `concurrently`.

## Building for Production

### Frontend
```bash
npm run build
```
Builds the frontend to the `dist/` directory.

```bash
npm run preview
```
Preview the production build locally.

### Backend
```bash
npm run server:build
npm run server:start
```
Builds and starts the backend server in production mode.

## Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start Vite development server |
| `npm run build` | Build frontend for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint on frontend code |
| `npm run server` | Start backend in development mode |
| `npm run server:build` | Build backend for production |
| `npm run server:start` | Start backend in production mode |
| `npm run dev:all` | Run both frontend and backend together |

## Notes Pipeline

Handwritten bilingual (EN + Bangla) A4 revision notes live under `notes/`. In opencode each
stage of the flow is its **own command**, so you run them one at a time:

| Stage | Command | Underlying script |
|-------|---------|-------------------|
| Author | `/notes-prep <slug>` | `node notes/build/check.mjs` (verify) |
| Gate | `/notes-check <slug>` | `node notes/build/check.mjs` |
| Visual QA | `/notes-qa <slug>.<lang>` | `node notes/build/snap.mjs` |
| Render | `/notes-render <slug>` | `node notes/build/render.mjs` |
| Register | `/notes-manifest <slug>` | — |
| Publish | `/notes-publish <slug>` | `node notes/build/publish.mjs` |
| Database | `/notes-apply` | `npm run notes:apply` (server) |
| Everything | `/notes-ship <slug>` | all of the above |

**Every command is lesson-wise — a chapter is not a valid target.** Pass one and the command
lists that chapter's lessons with their slugs and asks which you mean. It will not sweep the
whole chapter; that is what exhausts the usage limit.

`/notes-prep` runs `check.mjs` itself, so author-and-verify is one invocation.

`/notes` with no action just prints this table; given a slug but no action it asks which stage
to run rather than defaulting to the full flow.

### Targets

A target is a **lesson slug**:

| Target form | Example | Resolves to |
|-------------|---------|-------------|
| Lesson slug | `os-deadlock` | One note set, both languages |
| Chapter folder + slug | `18-operating-system/os-deadlock` | Same — the chapter part is a hint only |
| Language suffix (only `qa`) | `os-deadlock.bn` | One language's PNGs |

A bare chapter (`18-operating-system` or `18`) is **not** a valid target. Commands accept it
only to resolve it to a lesson list and ask which you meant.

Each command resolves the chapter folder from the slug itself: `manifest.json` →
`notes/src/*/<slug>.en.html` → the seed module. `chapterDir()` in
`server/src/db/applyNotes.ts` decides the canonical folder name — the seed module's number
plus its slugified title, e.g. seed lesson `"7. Computer Architecture"` →
`07-computer-architecture`. Copy the name from an existing folder; never invent one.
Existing chapters:

```
01-basic-physics                              10-structured-programming-language-c
02-introduction-to-computer-systems           11-object-oriented-programming-oop
03-electrical-circuits                        15-data-structures-and-algorithms
04-digital-logic-design                       16-database-systems
05-basic-electronics                          17-software-engineering-information-system-design
06-microprocessor-and-interfacing             18-operating-system
07-computer-architecture                      19-artificial-intelligence
08-communication-theory
09-computer-networking-and-security
```

Slugs are the note set's identity and must match `server/data/notes/manifest.json`
exactly. Chapter 18 uses the `os-` prefix (`os-deadlock`, `os-file-systems`,
`os-memory-management`, `os-process-scheduling`, `os-input-output`, `os-role-concepts`);
extra PYQ/viva sets are prefixed `pyq-`.

### Command format

Every command is `/notes-<stage> <slug>` — stage first, then lesson slug.

```
/notes-<stage> <slug>
         │       └── lesson slug, e.g. os-deadlock
         └── one of: prep | check | qa | render | manifest | publish | apply | ship
```

### One lesson, run these six one at a time

```
/notes-prep      os-deadlock
/notes-qa        os-deadlock.bn
/notes-render    os-deadlock
/notes-manifest  os-deadlock
/notes-publish   os-deadlock
/notes-apply
```

`/notes-prep` runs `check.mjs` itself, so there is no separate `/notes-check` step here. Add
`/notes-check os-deadlock` after it if you want an explicit re-verify.

Or every stage in one invocation: `/notes-ship os-deadlock`.

For a chapter, run the same six per lesson — **one lesson per invocation**, never one
invocation for the chapter.

### Lesson-wise breakdown

Every seed lesson, its note slug, and how far it has got — see
[`notes/README.md` §2.0 → Lesson-wise breakdown](notes/README.md#lesson-wise-breakdown).

82 seed lessons across 19 chapters. As of the last snapshot, chapters **10–17 have no manifest
entries** and chapters **12, 13, 14 have no chapter folder at all** — those are the untouched
chapters. Chapters 1–9, 18 and 19 are authored and published.

### Example — one lesson, run one command at a time

```
/notes-prep      os-deadlock                     # author sources + Markdown, verified
/notes-qa        os-deadlock.bn                  # PNGs, one language only
/notes-render    os-deadlock                     # -> notes/pdf/
/notes-manifest  os-deadlock                     # -> server/data/notes/manifest.json
/notes-publish   os-deadlock                     # -> public/notes/
/notes-apply                                      # -> database
```

Each comment says what the stage produces, so you can tell at a glance which one is next.

## Notes commands, step by step

| Command | Takes | Does | Does **not** |
|---------|-------|------|--------------|
| `/notes-prep` | slug | author 4 source/Markdown files + verify | touch a second lesson, render, publish |
| `/notes-check` | slug | run `check.mjs`, fix every failure | render or publish |
| `/notes-qa` | `slug.lang` | snapshot PNGs, inspect Bangla glyphs | render or publish |
| `/notes-render` | slug | HTML → PDF | publish |
| `/notes-manifest` | slug | write the `manifest.json` entry | publish or apply |
| `/notes-publish` | slug | copy into `public/notes/` | apply |
| `/notes-apply` | — | write to the database | anything else |
| `/notes-ship` | slug | all stages for one lesson | run a second lesson |

Each command is scoped so it cannot wander into another stage's territory or into a second
lesson — that keeps the context small and stops one command from silently doing six stages'
worth of work.

### Raw scripts

```bash
# QA
node notes/build/check.mjs os-deadlock                 # one slug, both languages
node notes/build/snap.mjs os-deadlock.bn               # PNGs for visual inspection

# Build
node notes/build/render.mjs os-deadlock                # HTML -> PDF
node notes/build/publish.mjs os-deadlock               # -> public/notes/
cd server; cmd /c "npm run notes:apply"                # -> database
```

These scripts accept a chapter folder, but the commands wrap them and never pass one — keep to
a slug when running them by hand too.

Command definitions live in `.opencode/command/` (`notes.md` is a router; the eight
`notes-*.md` files are the work). The full authoring and publishing guide is
[`notes/README.md`](notes/README.md) and the style contract is
[`notes/AUTHORING.md`](notes/AUTHORING.md).

## API Endpoints

### POST /api/ai/complete
Generate AI completion with automatic provider routing.

**Request:**
```json
{
  "prompt": "Explain quantum computing",
  "model": "gpt-3.5-turbo",
  "maxTokens": 150,
  "temperature": 0.7,
  "userId": "optional-user-id"
}
```

**Response:**
```json
{
  "content": "Quantum computing is...",
  "provider": "openai",
  "model": "gpt-3.5-turbo",
  "usage": {
    "promptTokens": 10,
    "completionTokens": 150,
    "totalTokens": 160
  },
  "cost": {
    "inputCost": 0.000015,
    "outputCost": 0.0003,
    "totalCost": 0.000315,
    "currency": "USD"
  },
  "latency": 1234
}
```

### GET /api/costs/summary
Get cost summary across all requests. Query params: `start` and `end` (ISO date strings, optional)

### GET /api/costs/records
List all cost records. Query params: `limit` (number, optional)

### GET /api/costs/export
Export cost records as CSV file.

### GET /api/providers
Compare costs across providers for a given prompt. Query params: `prompt` (string, optional)

### GET /health
Health check endpoint.

## Technology Stack

### Frontend
- **React** 19.2.4
- **TypeScript** 6.0
- **Vite** 8.0
- **Tailwind CSS** 4.2
- **ESLint** 9.39

### Backend
- **Express** 4.18
- **TypeScript** 5.3
- **tsx** for development runtime
- **dotenv** for environment management

## Architecture

The application follows a microservices-inspired architecture:

1. **Frontend**: A modern React SPA served by Vite's dev server or static hosting
2. **Backend**: An Express-based AI Gateway that routes requests between multiple AI providers
3. **Communication**: RESTful API over HTTP

## Cost Tracking

The gateway tracks:
- Total cost per provider
- Token usage
- Requests per user
- Cost over time

Export data to CSV for analysis via `/api/costs/export`.

## License

Private - All rights reserved

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

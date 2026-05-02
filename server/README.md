# AI Gateway Server

AI Gateway with automatic routing between OpenAI and Cloudflare Workers AI, featuring fallback and cost tracking.

## Features

- **Multi-provider support**: OpenAI and Cloudflare Workers AI
- **Automatic fallback**: Seamlessly switches providers on failure
- **Cost tracking**: Monitor API usage and expenses across providers
- **REST API**: Simple HTTP endpoints for AI completions

## Setup

1. Copy environment file:
   ```bash
   cp .env.example .env
   ```

2. Configure your API keys in `.env`:
   - `OPENAI_API_KEY`: Your OpenAI API key
   - `CLOUDFLARE_API_KEY`: Your Cloudflare API token
   - `CLOUDFLARE_ACCOUNT_ID`: Your Cloudflare account ID

3. Install dependencies (already done):
   ```bash
   cd server && npm install
   ```

## Running

### Development
```bash
npm run server
```
Starts the gateway on http://localhost:3001 with hot-reload.

### Production
```bash
npm run server:build
npm run server:start
```

### Full Stack (Frontend + Backend)
```bash
npm run dev:all
```

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
Get cost summary across all requests.

**Query params:** `start` and `end` (ISO date strings, optional)

### GET /api/costs/records
List all cost records.

**Query params:** `limit` (number, optional)

### GET /api/costs/export
Export cost records as CSV file.

### GET /api/providers
Compare costs across providers for a given prompt.

**Query params:** `prompt` (string, optional)

### GET /health
Health check endpoint.

## Architecture

```
server/
├── index.ts                 # Express server
├── types/
│   └── ai.types.ts         # TypeScript interfaces
├── providers/
│   ├── openai.provider.ts  # OpenAI implementation
│   └── workers-ai.provider.ts  # Workers AI implementation
├── services/
│   ├── gateway.service.ts  # Routing & fallback logic
│   └── cost-tracking.service.ts  # Cost monitoring
└── middleware/
    └── auth.middleware.ts  # API key authentication
```

## Cost Tracking

The gateway tracks:
- Total cost per provider
- Token usage
- Requests per user
- Cost over time

Export data to CSV for analysis or integrate with your analytics pipeline.

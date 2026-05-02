import express from 'express';
import cors from 'cors';
import { GatewayService } from './services/gateway.service';
import { CostTrackingService } from './services/cost-tracking.service';
import { AIRequest } from './types/ai.types';

const app = express();
const PORT = process.env.PORT || 3001;

const gateway = new GatewayService();
const costTracker = new CostTrackingService();

app.use(cors());
app.use(express.json());

app.post('/api/ai/complete', async (req, res) => {
  try {
    const { prompt, model, maxTokens, temperature, userId } = req.body;

    if (!prompt) {
      return res.status(400).json({ error: 'Prompt is required' });
    }

    const request: AIRequest = {
      prompt,
      model,
      maxTokens,
      temperature,
      userId,
    };

    const response = await gateway.complete(request);
    costTracker.record(response, userId);

    res.json(response);
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    res.status(500).json({ error: message });
  }
});

app.get('/api/costs/summary', (req, res) => {
  const { start, end } = req.query;

  const timeRange = start && end
    ? { start: new Date(start as string), end: new Date(end as string) }
    : undefined;

  const summary = costTracker.getSummary(timeRange);
  res.json(summary);
});

app.get('/api/costs/records', (req, res) => {
  const limit = req.query.limit ? parseInt(req.query.limit as string) : undefined;
  const records = costTracker.getRecords(limit);
  res.json(records);
});

app.get('/api/costs/export', (req, res) => {
  const csv = costTracker.exportCSV();
  res.header('Content-Type', 'text/csv');
  res.attachment('cost-tracking.csv');
  res.send(csv);
});

app.get('/api/providers', (req, res) => {
  const prompt = req.query.prompt as string || 'Hello';
  const costs = gateway.getProviderCosts({ prompt });
  res.json(costs);
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`AI Gateway server running on http://localhost:${PORT}`);
});

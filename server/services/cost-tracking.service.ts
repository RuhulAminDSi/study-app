import { AIResponse } from '../types/ai.types';

export interface CostRecord {
  timestamp: Date;
  userId?: string;
  provider: string;
  model: string;
  tokens: number;
  cost: number;
  requestId: string;
}

export interface CostSummary {
  totalCost: number;
  totalRequests: number;
  totalTokens: number;
  byProvider: Record<string, { cost: number; requests: number; tokens: number }>;
  byUser: Record<string, { cost: number; requests: number; tokens: number }>;
}

export class CostTrackingService {
  private records: CostRecord[] = [];
  private requestCounter = 0;

  record(response: AIResponse, userId?: string): CostRecord {
    const record: CostRecord = {
      timestamp: new Date(),
      userId,
      provider: response.provider,
      model: response.model,
      tokens: response.usage.totalTokens,
      cost: response.cost.totalCost,
      requestId: `req_${++this.requestCounter}_${Date.now()}`,},
    this.records.push(record);
    return record;
  }

  getSummary(timeRange?: { start: Date; end: Date }): CostSummary {
    let filtered = this.records;

    if (timeRange) {
      filtered = this.records.filter(
        (r) => r.timestamp >= timeRange.start && r.timestamp <= timeRange.end
      );
    }

    const summary: CostSummary = {
      totalCost: 0,
      totalRequests: filtered.length,
      totalTokens: 0,
      byProvider: {},
      byUser: {},
    };

    for (const record of filtered) {
      summary.totalCost += record.cost;
      summary.totalTokens += record.tokens;

      if (!summary.byProvider[record.provider]) {
        summary.byProvider[record.provider] = { cost: 0, requests: 0, tokens: 0 };
      }
      summary.byProvider[record.provider].cost += record.cost;
      summary.byProvider[record.provider].requests += 1;
      summary.byProvider[record.provider].tokens += record.tokens;

      const userKey = record.userId || 'anonymous';
      if (!summary.byUser[userKey]) {
        summary.byUser[userKey] = { cost: 0, requests: 0, tokens: 0 };
      }
      summary.byUser[userKey].cost += record.cost;
      summary.byUser[userKey].requests += 1;
      summary.byUser[userKey].tokens += record.tokens;
    }

    summary.totalCost = +summary.totalCost.toFixed(6);
    return summary;
  }

  getRecords(limit?: number): CostRecord[] {
    const sorted = [...this.records].sort(
      (a, b) => b.timestamp.getTime() - a.timestamp.getTime()
    );
    return limit ? sorted.slice(0, limit) : sorted;
  }

  exportCSV(): string {
    const headers = ['timestamp', 'userId', 'provider', 'model', 'tokens', 'cost', 'requestId'];
    const rows = this.records.map((r) =>
      [r.timestamp.toISOString(), r.userId || 'anonymous', r.provider, r.model, r.tokens, r.cost, r.requestId].join(',')
    );
    return [headers.join(','), ...rows].join('\n');
  }
}

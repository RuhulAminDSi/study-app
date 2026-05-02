import { IAIProvider, AIRequest, AIResponse, CostInfo } from '../types/ai.types';

export class WorkersAIProvider implements IAIProvider {
  name = 'workers-ai';
  private apiKey: string;
  private accountId: string;
  private baseURL: string;

  constructor(apiKey?: string, accountId?: string) {
    this.apiKey = apiKey || process.env.CLOUDFLARE_API_KEY || '';
    this.accountId = accountId || process.env.CLOUDFLARE_ACCOUNT_ID || '';
    this.baseURL = `https://api.cloudflare.com/client/v4/accounts/${this.accountId}/ai/run`;
  }

  async isAvailable(): Promise<boolean> {
    if (!this.apiKey || !this.accountId) return false;
    return true;
  }

  async complete(request: AIRequest): Promise<AIResponse> {
    const startTime = Date.now();
    const model = request.model || '@cf/meta/llama-2-7b-chat-int8';

    const response = await fetch(`${this.baseURL}/${model}`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${this.apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        messages: [{ role: 'user', content: request.prompt }],
        max_tokens: request.maxTokens,
        temperature: request.temperature,
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(`Workers AI error: ${error.errors?.[0]?.message || response.statusText}`);
    }

    const data = await response.json();
    const latency = Date.now() - startTime;

    const inputTokens = request.prompt.length / 4;
    const outputTokens = (data.result?.response || '').length / 4;

    const usage = {
      promptTokens: Math.ceil(inputTokens),
      completionTokens: Math.ceil(outputTokens),
      totalTokens: Math.ceil(inputTokens + outputTokens),
    };

    const cost = this.calculateCost(model, usage.promptTokens, usage.completionTokens);

    return {
      content: data.result?.response || '',
      provider: this.name,
      model,
      usage,
      cost,
      latency,
    };
  }

  getCost(request: AIRequest): CostInfo {
    const model = request.model || '@cf/meta/llama-2-7b-chat-int8';
    const estimatedInput = request.prompt.length / 4;
    const estimatedOutput = 150;
    return this.calculateCost(model, estimatedInput, estimatedOutput);
  }

  private calculateCost(model: string, inputTokens: number, outputTokens: number): CostInfo {
    const costs: Record<string, { input: number; output: number }> = {
      '@cf/meta/llama-2-7b-chat-int8': { input: 0.0002, output: 0.0002 },
      '@cf/meta/llama-3-8b-instruct': { input: 0.00025, output: 0.00025 },
    };

    const rate = costs[model] || { input: 0.0002, output: 0.0002 };
    const inputCost = (inputTokens / 1000) * rate.input;
    const outputCost = (outputTokens / 1000) * rate.output;

    return {
      inputCost: +inputCost.toFixed(6),
      outputCost: +outputCost.toFixed(6),
      totalCost: +(inputCost + outputCost).toFixed(6),
      currency: 'USD',
    };
  }
}

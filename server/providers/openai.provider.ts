import { IAIProvider, AIRequest, AIResponse, CostInfo } from '../types/ai.types';

export class OpenAIProvider implements IAIProvider {
  name = 'openai';
  private apiKey: string;
  private baseURL = 'https://api.openai.com/v1';

  constructor(apiKey?: string) {
    this.apiKey = apiKey || process.env.OPENAI_API_KEY || '';
  }

  async isAvailable(): Promise<boolean> {
    if (!this.apiKey) return false;
    try {
      const response = await fetch(`${this.baseURL}/models`, {
        headers: { Authorization: `Bearer ${this.apiKey}` },
      });
      return response.ok;
    } catch {
      return false;
    }
  }

  async complete(request: AIRequest): Promise<AIResponse> {
    const startTime = Date.now();
    const model = request.model || 'gpt-3.5-turbo';

    const response = await fetch(`${this.baseURL}/chat/completions`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${this.apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model,
        messages: [{ role: 'user', content: request.prompt }],
        max_tokens: request.maxTokens,
        temperature: request.temperature,
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(`OpenAI API error: ${error.error?.message || response.statusText}`);
    }

    const data = await response.json();
    const latency = Date.now() - startTime;

    const usage = {
      promptTokens: data.usage?.prompt_tokens || 0,
      completionTokens: data.usage?.completion_tokens || 0,
      totalTokens: data.usage?.total_tokens || 0,
    };

    const cost = this.calculateCost(model, usage.promptTokens, usage.completionTokens);

    return {
      content: data.choices[0]?.message?.content || '',
      provider: this.name,
      model: data.model || model,
      usage,
      cost,
      latency,
    };
  }

  getCost(request: AIRequest): CostInfo {
    const model = request.model || 'gpt-3.5-turbo';
    const estimatedInput = request.prompt.length / 4;
    const estimatedOutput = 150;
    return this.calculateCost(model, estimatedInput, estimatedOutput);
  }

  private calculateCost(model: string, inputTokens: number, outputTokens: number): CostInfo {
    const costs: Record<string, { input: number; output: number }> = {
      'gpt-3.5-turbo': { input: 0.0015, output: 0.002 },
      'gpt-4': { input: 0.03, output: 0.06 },
      'gpt-4-turbo': { input: 0.01, output: 0.03 },
      'gpt-4o': { input: 0.005, output: 0.015 },
    };

    const rate = costs[model] || costs['gpt-3.5-turbo'];
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

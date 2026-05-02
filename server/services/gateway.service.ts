import { IAIProvider, AIRequest, AIResponse } from '../types/ai.types';
import { OpenAIProvider } from '../providers/openai.provider';
import { WorkersAIProvider } from '../providers/workers-ai.provider';

export interface GatewayConfig {
  strategy: 'cost-based' | 'performance-based' | 'fallback';
  fallbackEnabled: boolean;
}

export class GatewayService {
  private providers: IAIProvider[] = [];
  private config: GatewayConfig;

  constructor(config?: Partial<GatewayConfig>) {
    this.config = {
      strategy: 'fallback',
      fallbackEnabled: true,
      ...config,
    };

    this.initializeProviders();
  }

  private initializeProviders(): void {
    const openai = new OpenAIProvider();
    const workersAI = new WorkersAIProvider();

    this.providers = [openai, workersAI].sort((a, b) => {
      if (a.name === 'openai') return -1;
      return 1;
    });
  }

  async complete(request: AIRequest): Promise<AIResponse> {
    const errors: Error[] = [];

    for (const provider of this.providers) {
      try {
        const isAvailable = await provider.isAvailable();
        if (!isAvailable) {
          console.warn(`Provider ${provider.name} is not available`);
          continue;
        }

        const response = await provider.complete(request);
        console.log(`Request served by ${provider.name}`);
        return response;
      } catch (error) {
        const err = error instanceof Error ? error : new Error(String(error));
        errors.push(err);
        console.error(`Provider ${provider.name} failed:`, err.message);
      }
    }

    throw new Error(
      `All providers failed. Errors: ${errors.map((e) => e.message).join('; ')}`
    );
  }

  getProviderCosts(request: AIRequest): Array<{ provider: string; cost: number }> {
    return this.providers.map((provider) => ({
      provider: provider.name,
      cost: provider.getCost(request).totalCost,
    }));
  }
}

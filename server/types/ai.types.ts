export interface AIRequest {
  prompt: string;
  model?: string;
  maxTokens?: number;
  temperature?: number;
  userId?: string;
}

export interface AIResponse {
  content: string;
  provider: string;
  model: string;
  usage: TokenUsage;
  cost: CostInfo;
  latency: number;
}

export interface TokenUsage {
  promptTokens: number;
  completionTokens: number;
  totalTokens: number;
}

export interface CostInfo {
  inputCost: number;
  outputCost: number;
  totalCost: number;
  currency: string;
}

export interface ProviderConfig {
  name: string;
  enabled: boolean;
  priority: number;
  apiKey?: string;
  baseURL?: string;
  models: ModelConfig[];
}

export interface ModelConfig {
  id: string;
  costPer1kInput: number;
  costPer1kOutput: number;
}

export interface IAIProvider {
  name: string;
  isAvailable(): Promise<boolean>;
  complete(request: AIRequest): Promise<AIResponse>;
  getCost(request: AIRequest): CostInfo;
}

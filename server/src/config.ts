import "dotenv/config";

export interface AppConfig {
  port: number;
  databaseUrl: string;
  jwtSecret: string;
  jwtExpiresIn: string;
  uploadDir: string;
  isProduction: boolean;
  /** Trust one reverse-proxy hop (Azure) so req.ip is the real client IP. */
  trustProxy: boolean;
  /** Max login/register requests per IP per 15 minutes. */
  authRateLimitMax: number;
  bcryptRounds: number;
}

/** Values shipped in docs/examples; using one in production would let anyone forge tokens. */
const PLACEHOLDER_SECRETS = ["dev-secret", "change-me-to-a-long-random-string"];

export function loadConfig(env: NodeJS.ProcessEnv): AppConfig {
  const isProduction = env.NODE_ENV === "production";
  if (isProduction && !env.JWT_SECRET) {
    throw new Error("JWT_SECRET must be set when NODE_ENV=production");
  }
  if (isProduction && (PLACEHOLDER_SECRETS.includes(env.JWT_SECRET) || env.JWT_SECRET.length < 32)) {
    throw new Error("JWT_SECRET must be a random string of at least 32 characters in production (not a placeholder)");
  }
  return {
    port: Number(env.PORT) || 3001,
    databaseUrl: env.DATABASE_URL || "postgresql://postgres:postgres@localhost:5432/study_hub",
    jwtSecret: env.JWT_SECRET || "dev-secret",
    jwtExpiresIn: env.JWT_EXPIRES_IN || "7d",
    uploadDir: env.UPLOAD_DIR || "./uploads",
    isProduction,
    trustProxy: env.TRUST_PROXY ? env.TRUST_PROXY === "true" : isProduction,
    authRateLimitMax: Number(env.AUTH_RATE_LIMIT_MAX) || 10,
    bcryptRounds: Number(env.BCRYPT_ROUNDS) || 12,
  };
}

export const config = loadConfig(process.env);

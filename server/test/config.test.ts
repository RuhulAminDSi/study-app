import { describe, it, expect } from "vitest";
import { loadConfig } from "../src/config";

describe("loadConfig", () => {
  it("refuses to start in production without JWT_SECRET", () => {
    expect(() => loadConfig({ NODE_ENV: "production" })).toThrow(/JWT_SECRET/);
  });

  it("uses the provided secret in production and trusts one proxy hop", () => {
    const cfg = loadConfig({ NODE_ENV: "production", JWT_SECRET: "s".repeat(40) });
    expect(cfg.jwtSecret).toBe("s".repeat(40));
    expect(cfg.trustProxy).toBe(true);
  });

  it("falls back to a dev secret and no proxy trust outside production", () => {
    const cfg = loadConfig({});
    expect(cfg.jwtSecret).toBe("dev-secret");
    expect(cfg.trustProxy).toBe(false);
    expect(cfg.authRateLimitMax).toBe(10);
    expect(cfg.bcryptRounds).toBe(12);
  });

  it("refuses placeholder or short JWT secrets in production", () => {
    for (const secret of ["dev-secret", "change-me-to-a-long-random-string", "too-short-secret"]) {
      expect(() => loadConfig({ NODE_ENV: "production", JWT_SECRET: secret })).toThrow(/JWT_SECRET/);
    }
  });

  it("lets TRUST_PROXY override the default", () => {
    expect(loadConfig({ TRUST_PROXY: "true" }).trustProxy).toBe(true);
    expect(loadConfig({ NODE_ENV: "production", JWT_SECRET: "s".repeat(40), TRUST_PROXY: "false" }).trustProxy).toBe(false);
  });
});

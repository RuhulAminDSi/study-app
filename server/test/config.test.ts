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

  it("refuses to start without JWT_SECRET in any environment (there is no built-in fallback)", () => {
    expect(() => loadConfig({})).toThrow(/JWT_SECRET/);
    expect(() => loadConfig({ NODE_ENV: "development" })).toThrow(/JWT_SECRET/);
  });

  it("accepts any secret and trusts no proxy in local development", () => {
    const cfg = loadConfig({ JWT_SECRET: "local" });
    expect(cfg.jwtSecret).toBe("local");
    expect(cfg.trustProxy).toBe(false);
    expect(cfg.authRateLimitMax).toBe(10);
    expect(cfg.bcryptRounds).toBe(12);
  });

  it("applies the production safeguards on App Service even when NODE_ENV is missing", () => {
    const azure = { WEBSITE_SITE_NAME: "studypath" };
    for (const secret of ["dev-secret", "change-me-to-a-long-random-string", "too-short-secret"]) {
      expect(() => loadConfig({ ...azure, JWT_SECRET: secret })).toThrow(/JWT_SECRET/);
    }
    const cfg = loadConfig({ ...azure, JWT_SECRET: "s".repeat(40) });
    expect(cfg.trustProxy).toBe(true);
    expect(cfg.examAdminPreview).toBe(false);
    expect(cfg.isProduction).toBe(false);
  });

  it("lets admins take exams outside production only, unless EXAM_ADMIN_PREVIEW says otherwise", () => {
    const prod = { NODE_ENV: "production", JWT_SECRET: "s".repeat(40) };
    const dev = { JWT_SECRET: "local" };
    expect(loadConfig(dev).examAdminPreview).toBe(true);
    expect(loadConfig(prod).examAdminPreview).toBe(false);
    expect(loadConfig({ ...prod, EXAM_ADMIN_PREVIEW: "true" }).examAdminPreview).toBe(true);
    expect(loadConfig({ ...dev, EXAM_ADMIN_PREVIEW: "false" }).examAdminPreview).toBe(false);
  });

  it("refuses placeholder or short JWT secrets in production", () => {
    for (const secret of ["dev-secret", "change-me-to-a-long-random-string", "too-short-secret"]) {
      expect(() => loadConfig({ NODE_ENV: "production", JWT_SECRET: secret })).toThrow(/JWT_SECRET/);
    }
  });

  it("lets TRUST_PROXY override the default", () => {
    expect(loadConfig({ JWT_SECRET: "local", TRUST_PROXY: "true" }).trustProxy).toBe(true);
    expect(loadConfig({ NODE_ENV: "production", JWT_SECRET: "s".repeat(40), TRUST_PROXY: "false" }).trustProxy).toBe(false);
  });
});

import request from "supertest";
import { describe, it, expect } from "vitest";
import { createApp } from "../src/app";

describe("unexpected server errors", () => {
  it("return a generic message instead of internal details", async () => {
    // A malformed UUID makes PostgreSQL throw ("invalid input syntax for type uuid").
    const res = await request(createApp()).get("/api/public/chapters/not-a-uuid");
    expect(res.status).toBe(500);
    expect(res.body).toEqual({ error: "Something went wrong on our side. Please try again.", code: "internal_error" });
  });
});

describe("GET /api/health", () => {
  it("reports ok", async () => {
    const res = await request(createApp()).get("/api/health");
    expect(res.status).toBe(200);
    expect(res.body.status).toBe("ok");
  });
});

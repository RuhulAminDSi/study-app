import request from "supertest";
import { beforeEach, describe, expect, it } from "vitest";
import { createApp } from "../src/app";
import { insertCandidate, resetDb } from "./helpers/db";
import { candidateToken, createAdmin, legacyAdminToken } from "./helpers/auth";

const CONTENT_ENDPOINTS = ["/api/public/chapters/published", "/api/public/menus", "/api/public/lessons/published"];

describe("study content requires a signed-in reader", () => {
  beforeEach(resetDb);

  it.each(CONTENT_ENDPOINTS)("%s refuses an anonymous request", async (url) => {
    const res = await request(createApp()).get(url);
    expect(res.status).toBe(401);
    expect(res.body.code).toBe("sign_in_required");
  });

  it.each(CONTENT_ENDPOINTS)("%s refuses a token without a kind", async (url) => {
    const res = await request(createApp()).get(url).set("Authorization", `Bearer ${legacyAdminToken()}`);
    expect(res.status).toBe(401);
    expect(res.body.code).toBe("sign_in_required");
  });

  it.each(CONTENT_ENDPOINTS)("%s serves a candidate", async (url) => {
    const id = await insertCandidate();
    const res = await request(createApp()).get(url).set("Authorization", `Bearer ${candidateToken(id)}`);
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it("refuses a candidate token whose account no longer exists", async () => {
    const res = await request(createApp()).get("/api/public/menus").set("Authorization", `Bearer ${candidateToken()}`);
    expect(res.status).toBe(401);
    expect(res.body.code).toBe("account_inactive");
  });

  it("serves an admin, who previews the portal with their own token", async () => {
    const admin = await createAdmin();
    const res = await request(createApp()).get("/api/public/lessons/published").set("Authorization", `Bearer ${admin.token}`);
    expect(res.status).toBe(200);
  });

  it("guards single lessons and chapters too", async () => {
    const id = "00000000-0000-0000-0000-0000000000aa";
    expect((await request(createApp()).get(`/api/public/lessons/${id}`)).status).toBe(401);
    expect((await request(createApp()).get(`/api/public/chapters/${id}`)).status).toBe(401);
    expect((await request(createApp()).get(`/api/public/lessons/by-menu/${id}`)).status).toBe(401);
  });

  it("keeps the subject and job-post lists public (the sign-up form can use them)", async () => {
    expect((await request(createApp()).get("/api/public/subjects")).status).toBe(200);
    expect((await request(createApp()).get("/api/public/job-posts")).status).toBe(200);
  });
});

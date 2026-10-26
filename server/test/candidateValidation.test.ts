import { describe, it, expect } from "vitest";
import { validateRegistration, validateProfileUpdate, normalizeEmail } from "../src/validation/candidate";

const valid = { fullName: "Rahim Uddin", email: "rahim@example.com", password: "secret-123" };

describe("validateRegistration", () => {
  it("accepts a minimal valid body and normalises it", () => {
    const r = validateRegistration({ ...valid, fullName: "  Rahim   Uddin ", email: " Rahim@Example.COM " });
    expect(r).toEqual({
      ok: true,
      value: { fullName: "Rahim Uddin", email: "rahim@example.com", password: "secret-123", phone: null, targetPostId: null, preferredLanguage: "en" },
    });
  });

  it("returns a code for every invalid field", () => {
    const r = validateRegistration({ fullName: "R", email: "not-an-email", password: "short", phone: "12345" });
    expect(r).toEqual({
      ok: false,
      fields: { fullName: "name_length", email: "email_invalid", password: "password_short", phone: "phone_invalid" },
    });
  });

  it("accepts Bangladeshi mobile numbers with or without +88 and stores the local form", () => {
    for (const phone of ["01712345678", "+8801712345678", "8801712345678", "017-1234-5678"]) {
      const r = validateRegistration({ ...valid, phone });
      expect(r).toMatchObject({ ok: true, value: { phone: "01712345678" } });
    }
    expect(validateRegistration({ ...valid, phone: "01212345678" })).toMatchObject({ ok: false, fields: { phone: "phone_invalid" } });
  });

  it("rejects passwords longer than bcrypt's 72-byte limit", () => {
    const r = validateRegistration({ ...valid, password: "পাসওয়ার্ড".repeat(5) }); // multi-byte, > 72 bytes
    expect(r).toMatchObject({ ok: false, fields: { password: "password_long" } });
  });

  it("rejects a malformed targetPostId", () => {
    expect(validateRegistration({ ...valid, targetPostId: "abc" })).toMatchObject({ ok: false, fields: { targetPostId: "post_unknown" } });
  });
});

describe("validateProfileUpdate", () => {
  it("only returns the fields that were sent", () => {
    expect(validateProfileUpdate({ preferredLanguage: "en" })).toEqual({ ok: true, value: { preferredLanguage: "en" } });
  });

  it("lets phone and targetPostId be cleared with null", () => {
    expect(validateProfileUpdate({ phone: null, targetPostId: null })).toEqual({ ok: true, value: { phone: null, targetPostId: null } });
  });

  it("rejects an unknown language", () => {
    expect(validateProfileUpdate({ preferredLanguage: "fr" })).toEqual({ ok: false, fields: { preferredLanguage: "language_invalid" } });
  });
});

describe("normalizeEmail", () => {
  it("trims and lowercases, and returns '' for non-strings", () => {
    expect(normalizeEmail("  A@B.COM ")).toBe("a@b.com");
    expect(normalizeEmail(undefined)).toBe("");
  });
});

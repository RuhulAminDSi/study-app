import { pool } from "../db/pool.js";
import { config } from "../config.js";
import { PREVIEW_EMAIL_DOMAIN } from "../middleware/auth.js";

/**
 * Settings an admin edits in the panel (Admin → Settings), stored in site_settings as one JSON value per key.
 * Every reader gets a complete object: missing fields fall back to the defaults below.
 */
export interface ContactSettings {
  email: string; phone: string; whatsapp: string; address: string; hours: string; facebook: string; youtube: string;
}
export interface PaymentSettings {
  bkash: string; nagad: string; rocket: string;
  /** shown above the payment form, e.g. "Send Money (not Cash Out), then enter the transaction ID". */
  instructions_en: string; instructions_bn: string;
}
/**
 * Off by default. When on, candidates without an active subscription can't start mock/model tests (`tests`) or use
 * the question bank and practice (`practice`). Lessons and notes always stay open; free sets stay open to everyone.
 */
export interface PaywallSettings { enabled: boolean; tests: boolean; practice: boolean }

export interface SiteSettings { contact: ContactSettings; payment: PaymentSettings; paywall: PaywallSettings }

const DEFAULTS: SiteSettings = {
  contact: { email: "", phone: "", whatsapp: "", address: "", hours: "", facebook: "", youtube: "" },
  payment: { bkash: "", nagad: "", rocket: "", instructions_en: "", instructions_bn: "" },
  paywall: { enabled: false, tests: true, practice: true },
};

export const SETTING_KEYS = Object.keys(DEFAULTS) as (keyof SiteSettings)[];

/** Read on most requests that check the paywall, so cached for a few seconds and dropped on every save. */
let cache: { at: number; value: SiteSettings } | null = null;
const TTL_MS = 5_000;

export function clearSettingsCache() { cache = null; }

export async function getSettings(): Promise<SiteSettings> {
  if (cache && Date.now() - cache.at < TTL_MS) return cache.value;
  const { rows } = await pool.query("SELECT key, value FROM site_settings");
  const stored = Object.fromEntries(rows.map((r) => [r.key, r.value]));
  const value = Object.fromEntries(SETTING_KEYS.map((k) => [k, { ...DEFAULTS[k], ...(stored[k] ?? {}) }])) as unknown as SiteSettings;
  // The WHATSAPP_NUMBER environment variable still works until a number is set in the panel.
  if (!value.contact.whatsapp && config.whatsappNumber) value.contact.whatsapp = config.whatsappNumber;
  cache = { at: Date.now(), value };
  return value;
}

const str = (v: unknown, max: number) => (typeof v === "string" ? v.trim().slice(0, max) : "");
const digits = (v: unknown) => str(v, 20).replace(/[^\d+]/g, "");
const URL_RE = /^https:\/\/[^\s]+$/i;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Validates one settings section; returns the cleaned value or field errors (keys like `contact.email`). */
export function parseSetting(key: keyof SiteSettings, input: unknown):
  { ok: true; value: SiteSettings[typeof key] } | { ok: false; fields: Record<string, string> } {
  const b = (input ?? {}) as Record<string, unknown>;
  const fields: Record<string, string> = {};
  if (key === "contact") {
    const v: ContactSettings = {
      email: str(b.email, 120), phone: str(b.phone, 30), whatsapp: digits(b.whatsapp).replace(/^\+/, ""),
      address: str(b.address, 300), hours: str(b.hours, 80), facebook: str(b.facebook, 300), youtube: str(b.youtube, 300),
    };
    if (v.email && !EMAIL_RE.test(v.email)) fields["contact.email"] = "email_invalid";
    if (v.whatsapp && !/^\d{8,15}$/.test(v.whatsapp)) fields["contact.whatsapp"] = "phone_invalid";
    for (const k of ["facebook", "youtube"] as const) if (v[k] && !URL_RE.test(v[k])) fields[`contact.${k}`] = "link_invalid";
    return Object.keys(fields).length ? { ok: false, fields } : { ok: true, value: v };
  }
  if (key === "payment") {
    const v: PaymentSettings = {
      bkash: digits(b.bkash), nagad: digits(b.nagad), rocket: digits(b.rocket),
      instructions_en: str(b.instructions_en, 1000), instructions_bn: str(b.instructions_bn, 1000),
    };
    for (const k of ["bkash", "nagad", "rocket"] as const) if (v[k] && !/^\+?\d{10,14}$/.test(v[k])) fields[`payment.${k}`] = "phone_invalid";
    return Object.keys(fields).length ? { ok: false, fields } : { ok: true, value: v };
  }
  return { ok: true, value: { enabled: b.enabled === true, tests: b.tests !== false, practice: b.practice !== false } };
}

export async function saveSetting(key: keyof SiteSettings, value: unknown, adminId: string | null) {
  await pool.query(
    `INSERT INTO site_settings (key, value, updated_by, updated_at) VALUES ($1, $2, $3, now())
     ON CONFLICT (key) DO UPDATE SET value = EXCLUDED.value, updated_by = EXCLUDED.updated_by, updated_at = now()`,
    [key, JSON.stringify(value), adminId],
  );
  clearSettingsCache();
}

/** True when the candidate's paid time hasn't run out. Admin preview candidates always pass. */
export async function hasActiveSubscription(candidateId: string): Promise<boolean> {
  const { rows } = await pool.query(
    "SELECT subscription_until > now() AS active, email LIKE '%@' || $2 AS preview FROM candidates WHERE id = $1",
    [candidateId, PREVIEW_EMAIL_DOMAIN],
  );
  return !!rows[0] && (rows[0].active === true || rows[0].preview === true);
}

/** Whether `area` is behind the paywall for this candidate right now. */
export async function paywalled(candidateId: string, area: "tests" | "practice"): Promise<boolean> {
  const s = (await getSettings()).paywall;
  if (!s.enabled || !s[area]) return false;
  return !(await hasActiveSubscription(candidateId));
}

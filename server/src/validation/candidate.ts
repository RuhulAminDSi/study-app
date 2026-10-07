export type ValidationResult<T> = { ok: true; value: T } | { ok: false; fields: Record<string, string> };

export interface RegistrationInput {
  fullName: string;
  email: string;
  password: string;
  phone: string | null;
  targetPostId: string | null;
}

export interface ProfileUpdate {
  fullName?: string;
  phone?: string | null;
  targetPostId?: string | null;
  preferredLanguage?: "bn" | "en";
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
/** Bangladeshi mobile: 01[3-9] followed by 8 digits, after stripping an optional +88/88 prefix. */
const BD_MOBILE_RE = /^01[3-9]\d{8}$/;
const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

export function normalizeEmail(raw: unknown): string {
  return typeof raw === "string" ? raw.trim().toLowerCase() : "";
}

function cleanName(raw: unknown): string {
  return typeof raw === "string" ? raw.trim().replace(/\s+/g, " ") : "";
}

function isValidName(name: string): boolean {
  return name.length >= 2 && name.length <= 150;
}

/** Returns the local 01XXXXXXXXX form, null when empty, or undefined when the input isn't a valid BD mobile. */
function cleanPhone(raw: unknown): string | null | undefined {
  if (raw === null || raw === undefined || raw === "") return null;
  if (typeof raw !== "string") return undefined;
  const digits = raw.replace(/[\s-]/g, "").replace(/^\+?88/, "");
  if (digits === "") return null;
  return BD_MOBILE_RE.test(digits) ? digits : undefined;
}

function cleanPostId(raw: unknown): string | null | undefined {
  if (raw === null || raw === undefined || raw === "") return null;
  return typeof raw === "string" && UUID_RE.test(raw) ? raw : undefined;
}

export function validateRegistration(input: unknown): ValidationResult<RegistrationInput> {
  const body = (input ?? {}) as Record<string, unknown>;
  const fields: Record<string, string> = {};

  const fullName = cleanName(body?.fullName);
  if (!isValidName(fullName)) fields.fullName = "name_length";

  const email = normalizeEmail(body?.email);
  if (!EMAIL_RE.test(email) || email.length > 255) fields.email = "email_invalid";

  const password = typeof body?.password === "string" ? body.password : "";
  if (password.length < 8) fields.password = "password_short";
  else if (Buffer.byteLength(password, "utf8") > 72) fields.password = "password_long";

  const phone = cleanPhone(body?.phone);
  if (phone === undefined) fields.phone = "phone_invalid";

  const targetPostId = cleanPostId(body?.targetPostId);
  if (targetPostId === undefined) fields.targetPostId = "post_unknown";

  if (Object.keys(fields).length) return { ok: false, fields };
  return { ok: true, value: { fullName, email, password, phone: phone ?? null, targetPostId: targetPostId ?? null } };
}

export function validateProfileUpdate(input: unknown): ValidationResult<ProfileUpdate> {
  const body = (input ?? {}) as Record<string, unknown>;
  const fields: Record<string, string> = {};
  const value: ProfileUpdate = {};

  if (body?.fullName !== undefined) {
    const fullName = cleanName(body.fullName);
    if (isValidName(fullName)) value.fullName = fullName;
    else fields.fullName = "name_length";
  }
  if (body?.phone !== undefined) {
    const phone = cleanPhone(body.phone);
    if (phone === undefined) fields.phone = "phone_invalid";
    else value.phone = phone;
  }
  if (body?.targetPostId !== undefined) {
    const targetPostId = cleanPostId(body.targetPostId);
    if (targetPostId === undefined) fields.targetPostId = "post_unknown";
    else value.targetPostId = targetPostId;
  }
  if (body?.preferredLanguage !== undefined) {
    if (body.preferredLanguage === "bn" || body.preferredLanguage === "en") value.preferredLanguage = body.preferredLanguage;
    else fields.preferredLanguage = "language_invalid";
  }

  return Object.keys(fields).length ? { ok: false, fields } : { ok: true, value };
}

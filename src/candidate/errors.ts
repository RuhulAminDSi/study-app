import type { Translations } from '../types'

const ERROR_KEYS: Record<string, keyof Translations> = {
  required: 'errRequired',
  validation_failed: 'errFixFields',
  name_length: 'errNameLength',
  email_invalid: 'errEmailInvalid',
  email_taken: 'errEmailTaken',
  password_short: 'errPasswordShort',
  password_long: 'errPasswordLong',
  phone_invalid: 'errPhoneInvalid',
  post_unknown: 'errPostUnknown',
  bad_credentials: 'errBadCredentials',
  too_many_attempts: 'errTooManyAttempts',
  internal_error: 'errInternal',
  account_inactive: 'errAccountInactive',
  passwords_mismatch: 'passwordsDontMatch',
}

/** Translates a server or client error code; falls back to the server's own message. */
export function errorText(t: Translations, code: string | undefined, fallback: string): string {
  const key = code ? ERROR_KEYS[code] : undefined
  return key ? t[key] : fallback
}

import type { Translations } from '../types'
import { AdminApiError } from './api'

/** Error codes the admin screens can receive (chapters, lessons, candidates) and their translations. */
const KEYS: Record<string, keyof Translations> = {
  required: 'errRequired',
  validation_failed: 'errFixFields',
  internal_error: 'errInternal',
  forbidden: 'errForbidden',
  name_length: 'errNameLength',
  email_invalid: 'errEmailInvalid',
  email_taken: 'errEmailInUse',
  phone_invalid: 'errPhoneInvalid',
  post_unknown: 'errPostUnknown',
  language_invalid: 'errLanguageInvalid',
  password_short: 'errPasswordShort',
  password_long: 'errPasswordLong',
  too_long: 'errTooLong',
  list_invalid: 'errListInvalid',
  level_invalid: 'errLevelInvalid',
  managed_by_notes: 'edErrNotes',
  menu_not_empty: 'secErrNotEmpty',
  file_type: 'mdErrType',
  file_too_large: 'mdErrSize',
  link_invalid: 'anErrLink',
  ends_before_start: 'anErrEnds',
  date_invalid: 'anErrDate',
}

/** Translated text for an admin API error code; falls back to the server's message. */
export function adminErrorText(t: Translations, code: string | undefined, fallback: string): string {
  const key = code ? KEYS[code] : undefined
  return key ? t[key] : fallback
}

/** Translated text for anything an admin API call can throw. */
export function errorText(t: Translations, e: unknown): string {
  if (e instanceof AdminApiError) return adminErrorText(t, e.code, e.message)
  return e instanceof Error ? e.message : String(e)
}

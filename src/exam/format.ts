import type { Language, Translations } from '../types'
import { ApiError } from '../candidate/candidateApi'
import { fill, num } from '../components/portal/portalData'
import type { AttemptStatus, Difficulty, HistoryItem, TestKind } from './examApi'

export { fill, num }

/** Bangla when asked for and present, otherwise English. */
export const pick = (lang: Language, en: string | null | undefined, bn: string | null | undefined) =>
  (lang === 'bn' && bn ? bn : en) ?? ''

/** 1.5 → "1.5", 2 → "2", in the reader's digits. */
export const mark = (n: number, lang: Language) => num(Math.round(n * 100) / 100, lang)

/** 3725 s → "1:02:05", 125 s → "02:05". */
export function clock(totalSec: number, lang: Language): string {
  const s = Math.max(0, Math.floor(totalSec))
  const h = Math.floor(s / 3600)
  const mm = String(Math.floor((s % 3600) / 60)).padStart(2, '0')
  const ss = String(s % 60).padStart(2, '0')
  const text = h > 0 ? `${h}:${mm}:${ss}` : `${mm}:${ss}`
  return text.replace(/\d/g, d => num(Number(d), lang))
}

/** 75 min → "1 h 15 min"; seconds under a minute → "45 s". */
export function duration(totalSec: number, t: Translations, lang: Language): string {
  const s = Math.max(0, Math.round(totalSec))
  if (s < 60) return fill(t.exSeconds, { n: num(s, lang) })
  const h = Math.floor(s / 3600)
  const m = Math.round((s % 3600) / 60)
  if (h === 0) return fill(t.exMinutes, { n: num(m, lang) })
  return fill(t.exHoursMinutes, { h: num(h, lang), m: num(m, lang) })
}

export function dateTime(value: string | null, lang: Language): string {
  if (!value) return ''
  return new Date(value).toLocaleString(lang === 'bn' ? 'bn-BD' : 'en-GB', {
    day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit',
  })
}

export const KIND_LABEL: Record<TestKind | 'practice' | 'revision', keyof Translations> = {
  quiz: 'exKindQuiz', mock: 'exKindMock', model: 'exKindModel', practice: 'exKindPractice', revision: 'exKindRevision',
}

export const DIFFICULTY_LABEL: Record<Difficulty, keyof Translations> = {
  easy: 'exDiffEasy', medium: 'exDiffMedium', hard: 'exDiffHard', mixed: 'exDiffMixed',
}

export const STATUS_LABEL: Record<AttemptStatus, keyof Translations> = {
  in_progress: 'exStatusInProgress', submitted: 'exStatusSubmitted', expired: 'exStatusExpired',
}

/** "−0.25 per wrong answer", or "No negative marking". Several values (per section) are listed. */
export function negativeText(values: number[], t: Translations, lang: Language): string {
  const positive = values.filter(v => v > 0)
  if (!positive.length) return t.exNoNegative
  return fill(t.exNegativePer, { n: positive.map(v => mark(v, lang)).join(' / ') })
}

const ERROR_KEYS: Record<string, keyof Translations> = {
  not_found: 'exErrNotFound',
  not_open_yet: 'exErrNotOpen',
  closed: 'exErrClosed',
  attempt_limit: 'exErrAttemptLimit',
  paper_unavailable: 'exErrPaper',
  no_questions: 'exErrNoQuestions',
  deadline_passed: 'exErrDeadline',
  attempt_closed: 'exErrClosedAttempt',
  already_answered: 'exErrAnswered',
  review_unavailable: 'exErrReview',
  not_finished: 'exErrNotFinished',
  account_inactive: 'errAccountInactive',
  internal_error: 'errInternal',
  validation_failed: 'errFixFields',
}

/** The reader's text for anything an exam request can throw. */
export function examError(t: Translations, e: unknown): string {
  if (e instanceof ApiError) {
    const key = e.code ? ERROR_KEYS[e.code] : undefined
    if (key) return t[key]
    if (e.status === 403) return t.exErrCandidateOnly
    return e.message
  }
  return t.exErrNetwork
}

/** Where a history row leads: back into an open attempt, or to its result. */
export const attemptHref = (a: { id: string; status: AttemptStatus }) =>
  a.status === 'in_progress' ? `#/exams/attempt/${a.id}` : `#/exams/result/${a.id}`

/** "DBMS · Normalization", for a practice session that has no title of its own. */
export function practiceTitle(a: Pick<HistoryItem, 'mode' | 'settings'>, t: Translations, lang: Language): string {
  const s = a.settings
  const parts: string[] = []
  if (a.mode === 'revision' || s?.status === 'due') parts.push(t.exKindRevision)
  else if (s?.subject) parts.push(pick(lang, s.subject.name_en, s.subject.name_bn))
  else parts.push(t.exAllSubjects)
  if (s?.topic) parts.push(pick(lang, s.topic.name_en, s.topic.name_bn))
  if (s?.lessonSlug) parts.push(t.exLessonQuestions)
  if (s?.status === 'wrong') parts.push(t.exFromMistakes)
  return parts.join(' · ')
}

/** The title of any attempt: the test's, or a description of the practice session. */
export const attemptTitle = (a: Pick<HistoryItem, 'mode' | 'settings' | 'titleEn' | 'titleBn'>, t: Translations, lang: Language) =>
  a.mode === 'mock' ? pick(lang, a.titleEn, a.titleBn) : practiceTitle(a, t, lang)

import type { Translations } from '../types'
import { AdminApiError } from './api'
import { fill } from './feedback'
import type { ReadinessProblem, TestKind } from './examsApi'

/** Labels and readiness wording shared by the admin Exams list and editor. */

export const KIND_KEYS: Record<TestKind, keyof Translations> = { quiz: 'axKindQuiz', mock: 'axKindMock', model: 'axKindModel' }
export const DIFFICULTY_KEYS: Record<string, keyof Translations> = {
  '1': 'axEasy', '2': 'axMedium', '3': 'axHard', easy: 'axEasy', medium: 'axMedium', hard: 'axHard', mixed: 'axMixed',
}

/** 0.25, 1, 1.5: marks without trailing zeros. */
export const marks = (n: number | null | undefined) => (n == null ? '–' : String(Math.round(n * 100) / 100))

/**
 * One readiness problem in plain words. Sections and questions are numbered as the editor lists them
 * (1-based), so `sectionIds` / `questionIds` give the order.
 */
export function problemText(t: Translations, p: ReadinessProblem, sectionIds: string[], questionIds: string[]): string {
  const section = p.sectionId ? sectionIds.indexOf(p.sectionId) + 1 : 0
  const question = p.questionId ? questionIds.indexOf(p.questionId) + 1 : 0
  switch (p.code) {
    case 'section_short': return fill(t.axPSectionShort, { n: section, have: p.have ?? 0, need: p.need ?? 0 })
    case 'section_written': return fill(t.axPSectionWritten, { n: section })
    case 'question_unpublished': return fill(t.axPQuestionUnpublished, { n: question })
    case 'question_not_mcq': return fill(t.axPQuestionNotMcq, { n: question })
    case 'no_questions': return t.axPNoQuestions
    case 'no_sections': return t.axPNoSections
    case 'pass_mark_too_high': return t.axPPassTooHigh
    default: return fill(t.axPUnknown, { code: p.code })
  }
}

/** The readiness problems a 409 `not_ready` carries, or null for any other error. */
export function notReadyProblems(e: unknown): ReadinessProblem[] | null {
  if (!(e instanceof AdminApiError) || e.code !== 'not_ready') return null
  return Array.isArray(e.body.problems) ? (e.body.problems as ReadinessProblem[]) : []
}

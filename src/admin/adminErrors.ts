import type { Translations } from '../types'

const KEYS: Record<string, keyof Translations> = {
  required: 'errRequired',
  validation_failed: 'errFixFields',
  internal_error: 'errInternal',
  subject_unknown: 'errSubjectUnknown',
  topic_unknown: 'errTopicUnknown',
  type_invalid: 'errTypeInvalid',
  difficulty_invalid: 'errDifficultyInvalid',
  options_count: 'errOptionsCount',
  correct_invalid: 'errCorrectChoice',
  options_not_allowed: 'errOptionsNotAllowed',
  marks_invalid: 'errMarksInvalid',
  exam_tag_unknown: 'errExamTagUnknown',
  exam_tag_incomplete: 'errExamTagIncomplete',
  year_invalid: 'errYearInvalid',
  code_invalid: 'errCodeInvalid',
  code_taken: 'errCodeTaken',
  category_invalid: 'errCategoryInvalid',
  weights_sum: 'errWeightsSum',
  weight_invalid: 'errWeightInvalid',
  duplicate: 'errDuplicateQuestion',
  in_use: 'errInUse',
  in_mock_test: 'errInMockTest',
  has_attempts: 'errHasAttempts',
  file_unreadable: 'errFileUnreadable',
  encoding: 'errEncoding',
  chapter_unknown: 'errChapterUnknown',
}

/** Translated text for an admin API error code; falls back to the server's message. */
export function adminErrorText(t: Translations, code: string | undefined, fallback: string): string {
  const key = code ? KEYS[code] : undefined
  return key ? t[key] : fallback
}

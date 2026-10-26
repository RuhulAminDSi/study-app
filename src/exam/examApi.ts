import { ApiError, CANDIDATE_TOKEN_KEY, CANDIDATE_UNAUTHORIZED_EVENT } from '../candidate/candidateApi'

/** The candidate side of the examination module (`/api/candidate/...`, server/src/routes/candidateExams.ts). */

export type TestKind = 'quiz' | 'mock' | 'model'
export type AttemptMode = 'practice' | 'revision' | 'mock'
export type AttemptStatus = 'in_progress' | 'submitted' | 'expired'
export type Difficulty = 'easy' | 'medium' | 'hard' | 'mixed'

export interface Named { code: string; nameEn: string; nameBn: string | null }

export interface ExamCard {
  id: string
  kind: TestKind
  mode: 'fixed' | 'random'
  titleEn: string
  titleBn: string | null
  descriptionEn: string | null
  descriptionBn: string | null
  durationMinutes: number
  questionCount: number
  totalMarks: number
  marksPerQuestion: number
  negativeMarks: number[]
  passMark: number | null
  subjects: Named[]
  difficulty: Difficulty
  availableFrom: string | null
  availableUntil: string | null
  availability: 'open' | 'upcoming'
  maxAttempts: number | null
  resultRelease: 'immediate' | 'after_close' | 'never'
  attemptsUsed: number
  openAttemptId: string | null
  best: { attemptId: string; percentage: number } | null
  lastAttemptId: string | null
}

export interface ExamDetail extends ExamCard {
  outline: { subject: Named; topic: { nameEn: string; nameBn: string | null } | null; questionCount: number; marksPerQuestion: number; negativeMark: number }[]
}

export interface PracticeSettings {
  subjectId: string | null
  topicId: string | null
  lessonSlug: string | null
  difficulty: number | null
  status: 'any' | 'unseen' | 'wrong' | 'due'
  count: number
  subject?: { code: string; name_en: string; name_bn: string | null } | null
  topic?: { name_en: string; name_bn: string | null } | null
}

export interface AttemptMeta {
  id: string
  mode: AttemptMode
  testId: string | null
  status: AttemptStatus
  kind: TestKind | null
  titleEn: string | null
  titleBn: string | null
  settings: PracticeSettings | null
  startedAt: string
  deadlineAt: string | null
  submittedAt: string | null
  maxScore: number | null
  passMark: number | null
  currentPosition: number
}

export interface LessonLink { lessonId: string; chapterId: string }

export interface AttemptQuestion {
  position: number
  questionId: string
  stemEn: string
  stemBn: string | null
  code: string | null
  codeLanguage: string | null
  difficulty: number
  marks: number
  negativeMark: number
  subject: Named
  topic: { id: string; nameEn: string | null; nameBn: string | null } | null
  options: { id: string; textEn: string; textBn: string | null; isCorrect?: boolean }[]
  selectedOptionId: string | null
  flagged: boolean
  // Present once the answer may be shown: practice after answering, any attempt in review.
  isCorrect?: boolean | null
  awarded?: number | null
  correctOptionId?: string | null
  explanationEn?: string | null
  explanationBn?: string | null
  lesson?: LessonLink | null
}

export interface AttemptPaper { attempt: AttemptMeta; serverNow: string; questions: AttemptQuestion[] }

export interface PracticeFeedback {
  saved: true
  selectedOptionId: string
  isCorrect: boolean
  correctOptionId: string | null
  explanationEn: string | null
  explanationBn: string | null
  lesson: LessonLink | null
}

export interface Bucket { total: number; correct: number; wrong: number; skipped: number; score: number; maxScore: number; accuracy: number }
export interface TopicBucket extends Bucket { topicId: string; nameEn: string | null; nameBn: string | null; subjectCode: string; lesson: LessonLink | null }

export interface AttemptResult {
  attempt: AttemptMeta
  score: number
  maxScore: number
  percentage: number
  passed: boolean | null
  correct: number
  wrong: number
  skipped: number
  total: number
  accuracy: number
  timeTakenSec: number
  avgTimePerQuestionSec: number
  durationMinutes: number | null
  bySubject: (Bucket & Named)[]
  byTopic: TopicBucket[]
  weakTopics: TopicBucket[]
  rank: { rank: number; percentile: number; candidates: number } | null
  test: { id: string; maxAttempts: number | null; attemptsUsed: number; canRetry: boolean } | null
  review: { available: boolean; availableAt: string | null }
}

export interface HistoryItem {
  id: string
  mode: AttemptMode
  testId: string | null
  kind: TestKind | 'practice' | 'revision'
  titleEn: string | null
  titleBn: string | null
  settings: PracticeSettings | null
  status: AttemptStatus
  startedAt: string
  deadlineAt: string | null
  submittedAt: string | null
  timeTakenSec: number | null
  score: number | null
  maxScore: number | null
  percentage: number | null
  passed: boolean | null
  correct: number
  wrong: number
  skipped: number
  questionCount: number
  answeredCount: number
}

export interface ExamOverview {
  available: Record<TestKind, number>
  testsCompleted: number
  averagePercent: number | null
  bestPercent: number | null
  /** Finished attempts per test kind (practice sets, mock tests, model tests). */
  byKind: Record<TestKind, { completed: number; averagePercent: number | null; bestPercent: number | null }>
  questionsAnswered: number
  accuracy: number | null
  dueCount: number
  wrongCount: number
  inProgress: HistoryItem[]
}

export interface PracticeCatalog {
  subjects: {
    id: string; code: string; nameEn: string; nameBn: string | null; chapterId: string | null; questionCount: number
    seen: number; wrong: number; due: number; accuracy: number | null
    topics: { id: string; nameEn: string; nameBn: string | null; lessonId: string | null; questionCount: number }[]
  }[]
  lessons: { slug: string; questionCount: number }[]
  due: number
  wrong: number
}

export interface PracticeRequest {
  subjectId?: string | null
  topicId?: string | null
  lessonSlug?: string | null
  difficulty?: number | null
  status?: PracticeSettings['status']
  count: number
}

const json = (method: string, body: unknown): RequestInit => ({ method, body: JSON.stringify(body) })

/**
 * Sends the candidate's token, or an admin's when no candidate is signed in: in development the server lets an
 * admin test the exams through a linked preview account (config.examAdminPreview).
 */
async function candidateFetch<T>(path: string, init: RequestInit = {}): Promise<T> {
  const candidateToken = localStorage.getItem(CANDIDATE_TOKEN_KEY)
  const token = candidateToken || localStorage.getItem('admin_token')
  const res = await fetch(`/api${path}`, {
    ...init,
    headers: { 'Content-Type': 'application/json', ...(token ? { Authorization: `Bearer ${token}` } : {}), ...init.headers },
  })
  const body = await res.json().catch(() => ({}))
  if (!res.ok) {
    if (res.status === 401 && token) window.dispatchEvent(new Event(candidateToken ? CANDIDATE_UNAUTHORIZED_EVENT : 'admin:unauthorized'))
    throw new ApiError(res.status, body)
  }
  return body as T
}

export const examApi = {
  overview: () => candidateFetch<ExamOverview>('/candidate/exams/overview'),
  list: (kind?: TestKind) => candidateFetch<ExamCard[]>(`/candidate/exams${kind ? `?kind=${kind}` : ''}`),
  get: (id: string) => candidateFetch<ExamDetail>(`/candidate/exams/${id}`),
  start: (id: string) => candidateFetch<{ attemptId: string; resumed: boolean }>(`/candidate/exams/${id}/start`, { method: 'POST' }),
  catalog: () => candidateFetch<PracticeCatalog>('/candidate/practice/catalog'),
  practice: (req: PracticeRequest) => candidateFetch<{ attemptId: string; questionCount: number }>('/candidate/practice/sessions', json('POST', req)),
  history: (params: { type?: 'all' | 'practice' | 'test'; status?: 'all' | 'open' | 'finished'; limit?: number; offset?: number } = {}) => {
    const q = new URLSearchParams()
    for (const [k, v] of Object.entries(params)) if (v !== undefined) q.set(k, String(v))
    return candidateFetch<{ items: HistoryItem[]; total: number }>(`/candidate/attempts?${q}`)
  },
  attempt: (aid: string) => candidateFetch<AttemptPaper>(`/candidate/attempts/${aid}`),
  answer: (aid: string, qid: string, body: { optionId?: string | null; flagged?: boolean; timeSpentMs?: number }) =>
    candidateFetch<{ saved: true; selectedOptionId?: string | null; flagged?: boolean } | PracticeFeedback>(
      `/candidate/attempts/${aid}/answers/${qid}`, json('PUT', body)),
  position: (aid: string, currentPosition: number) =>
    candidateFetch<{ currentPosition: number }>(`/candidate/attempts/${aid}`, json('PATCH', { currentPosition })),
  submit: (aid: string) => candidateFetch<{ status: AttemptStatus; alreadyClosed: boolean }>(`/candidate/attempts/${aid}/submit`, { method: 'POST' }),
  result: (aid: string) => candidateFetch<AttemptResult>(`/candidate/attempts/${aid}/result`),
  review: (aid: string) => candidateFetch<{ attempt: AttemptMeta; questions: AttemptQuestion[] }>(`/candidate/attempts/${aid}/review`),
}

// ── Question bank: study plain MCQs, CQs (short questions) and written questions before a test ──

export type BankFormat = 'mcq' | 'short' | 'written'

export interface BankQuestion {
  id: string
  type: 'mcq' | 'written' | 'programming'
  format: BankFormat
  difficulty: number
  marks: number
  stemEn: string
  stemBn: string | null
  code: string | null
  codeLanguage: string | null
  repeatCount: number
  subject: Named
  topic: { id: string; nameEn: string; nameBn: string | null } | null
  options: { id: string; textEn: string; textBn: string | null }[]
  lastCheck: { selfScore: number; at: string } | null
}

export interface BankPage {
  items: BankQuestion[]
  total: number
  counts: Record<BankFormat, number>
  page: number
  pageSize: number
}

export interface BankAnswer {
  correctOptionId: string | null
  isCorrect: boolean | null
  modelAnswerEn: string | null
  modelAnswerBn: string | null
  explanationEn: string | null
  explanationBn: string | null
  lesson: LessonLink | null
}

export interface BankQuery { format: BankFormat; subjectId?: string; topicId?: string; difficulty?: number; q?: string; page: number; pageSize: number }

export const bankApi = {
  list: (query: BankQuery) => {
    const q = new URLSearchParams()
    for (const [k, v] of Object.entries(query)) if (v !== undefined && v !== '' && v !== 0) q.set(k, String(v))
    return candidateFetch<BankPage>(`/candidate/bank/questions?${q}`)
  },
  check: (id: string, optionId: string | null = null) => candidateFetch<BankAnswer>(`/candidate/bank/questions/${id}/check`, json('POST', { optionId })),
  respond: (id: string, answerText: string, selfScore: number) =>
    candidateFetch<{ selfScore: number; at: string }>(`/candidate/bank/questions/${id}/responses`, json('POST', { answerText, selfScore })),
}

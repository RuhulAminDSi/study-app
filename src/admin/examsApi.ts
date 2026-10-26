import { apiFetch } from './api'

/** Practice set (`quiz`), mock test or model test, as `/api/mock-tests` stores it. */
export type TestKind = 'quiz' | 'mock' | 'model'
export type TestMode = 'fixed' | 'random'
export type TestStatus = 'draft' | 'published' | 'archived'
export type ResultRelease = 'immediate' | 'after_close' | 'never'

export interface TestSubject { code: string; name_en: string; name_bn: string | null }

/** One row of the admin list (`listItem` in server/src/routes/adminMockTests.ts). */
export interface AdminTest {
  id: string
  kind: TestKind
  mode: TestMode
  title_en: string
  title_bn: string | null
  description_en: string | null
  description_bn: string | null
  job_post_id: string | null
  duration_minutes: number
  marks_per_question: number
  negative_mark: number
  pass_mark: number | null
  shuffle_options: boolean
  available_from: string | null
  available_until: string | null
  max_attempts: number | null
  result_release: ResultRelease
  is_published: boolean
  is_archived: boolean
  blueprint_id: string | null
  created_at: string
  updated_at: string
  question_count: number
  total_marks: number
  subjects: TestSubject[] | null
  negative_marks: number[] | null
  written_sections: number
  status: TestStatus
  difficulty: 'easy' | 'medium' | 'hard' | 'mixed'
  attempt_count: number
  finished_count: number
  average_percent: number | null
  pass_rate: number | null
}

export interface AdminSection {
  id: string
  subject_id: string
  subject_code: string
  subject_name_en: string
  topic_id: string | null
  topic_name_en: string | null
  type: 'mcq' | 'written'
  question_count: number
  difficulty: number | null
  marks_per_question: number | null
  negative_mark: number
  sort_order: number
  /** Published MCQs matching the section's subject / topic / difficulty. */
  available: number
}

export interface AdminTestQuestion {
  id: string
  position: number
  subject_code: string
  topic_name: string | null
  type: string
  difficulty: number
  stem_en: string
  stem_bn: string | null
  is_published: boolean
}

export interface ReadinessProblem { code: string; sectionId?: string; have?: number; need?: number; questionId?: string }

export interface AdminTestDetail extends AdminTest {
  sections: AdminSection[]
  questions: AdminTestQuestion[]
  problems: ReadinessProblem[]
}

/** What the editor saves (`parseMockTest` in server/src/validation/exams.ts). */
export interface TestInput {
  kind: TestKind
  mode: TestMode
  title_en: string
  title_bn: string | null
  description_en: string | null
  description_bn: string | null
  job_post_id: string | null
  duration_minutes: number | string
  marks_per_question: number | string
  negative_mark: number | string
  pass_mark: number | string | null
  shuffle_options: boolean
  available_from: string | null
  available_until: string | null
  max_attempts: number | string | null
  result_release: ResultRelease
  sections: {
    subject_id: string
    topic_id: string | null
    type: 'mcq' | 'written'
    question_count: number | string
    difficulty: number | null
    marks_per_question: number | string | null
    negative_mark: number | string
  }[]
  question_ids: string[]
}

export interface PreviewQuestion {
  position: number
  marks: number
  negativeMark: number
  question: {
    id: string
    type: 'mcq' | 'written' | 'programming'
    difficulty: number
    stem_en: string
    stem_bn: string | null
    code_snippet: string | null
    explanation_en: string | null
    explanation_bn: string | null
    model_answer_en: string | null
    model_answer_bn: string | null
    subject_code: string
    topic_name: string | null
    options: { text_en: string; text_bn: string | null; is_correct: boolean }[]
  }
}

export interface SubjectOption { id: string; code: string; name_en: string; name_bn: string | null; published_count: number }
export interface TopicOption { id: string; subject_id: string; name_en: string; name_bn: string | null; question_count: number }
export interface JobPostOption { id: string; organization: string; title_en: string; title_bn: string | null }

/** A row of `GET /api/questions` (the bank picker). */
export interface BankQuestion {
  id: string
  subject_code: string
  topic_name: string | null
  type: string
  difficulty: number
  stem_en: string
  stem_bn: string | null
  is_published: boolean
}
export interface BankPage { items: BankQuestion[]; total: number; page: number; pageSize: number }
export interface BankFilters { subject_id?: string; topic_id?: string; difficulty?: string; q?: string; page: number; pageSize: number }

const json = (method: string, body: unknown): RequestInit => ({ method, body: JSON.stringify(body) })
const query = (params: Record<string, string | number | undefined>) => {
  const q = new URLSearchParams()
  for (const [k, v] of Object.entries(params)) if (v !== undefined && v !== '') q.set(k, String(v))
  return q.toString()
}

export const examsApi = {
  list: (params: { kind?: string; status?: string; q?: string }) => apiFetch<AdminTest[]>(`/mock-tests?${query(params)}`),
  get: (id: string) => apiFetch<AdminTestDetail>(`/mock-tests/${id}`),
  create: (input: TestInput) => apiFetch<AdminTestDetail>('/mock-tests', json('POST', input)),
  update: (id: string, input: TestInput) => apiFetch<AdminTestDetail>(`/mock-tests/${id}`, json('PUT', input)),
  publish: (id: string, published: boolean) => apiFetch<AdminTestDetail>(`/mock-tests/${id}/publish`, json('POST', { published })),
  archive: (id: string, archived: boolean) => apiFetch<AdminTestDetail>(`/mock-tests/${id}/archive`, json('POST', { archived })),
  duplicate: (id: string) => apiFetch<AdminTestDetail>(`/mock-tests/${id}/duplicate`, { method: 'POST' }),
  delete: (id: string) => apiFetch<{ deleted: boolean }>(`/mock-tests/${id}`, { method: 'DELETE' }),
  preview: (id: string) => apiFetch<{ sections: number; questions: PreviewQuestion[] }>(`/mock-tests/${id}/preview`),
  subjects: () => apiFetch<SubjectOption[]>('/subjects'),
  topics: () => apiFetch<TopicOption[]>('/topics'),
  jobPosts: () => apiFetch<JobPostOption[]>('/job-posts'),
  bank: (f: BankFilters) => apiFetch<BankPage>(`/questions?${query({ type: 'mcq', published: 'true', ...f })}`),
}

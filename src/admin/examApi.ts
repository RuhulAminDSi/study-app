import { apiFetch } from './api'

export type QuestionType = 'mcq' | 'written' | 'programming'
export type QuestionSource = 'original' | 'past_paper' | 'imported'

export interface ApiSubject {
  id: string; code: string; name_en: string; name_bn: string | null; category: 'technical' | 'general'
  chapter_id: string | null; chapter_number: number | null; sort_order: number
  topic_count: number; question_count: number; published_count: number
}
export interface ApiTopic { id: string; subject_id: string; name_en: string; name_bn: string | null; lesson_id: string | null; sort_order: number; question_count: number }
export interface ApiExamTag { id: string; organization: string; post_en: string; post_bn: string | null; year: number; exam_date: string | null; question_count: number }
export interface ApiWeight { subject_id: string; code: string; weight: number }
export interface ApiJobPost {
  id: string; organization: string; title_en: string; title_bn: string | null
  syllabus_en: string | null; syllabus_bn: string | null; exam_pattern_en: string | null; exam_pattern_bn: string | null
  is_published: boolean; weights: ApiWeight[]
}
export interface ApiOption { id?: string; position?: number; text_en: string; text_bn: string | null; is_correct: boolean }
export interface ApiQuestion {
  id: string; subject_id: string; subject_code: string; topic_id: string | null; topic_name: string | null
  type: QuestionType; difficulty: number; stem_en: string; stem_bn: string | null
  code_snippet: string | null; code_language: string | null
  explanation_en: string | null; explanation_bn: string | null; model_answer_en: string | null; model_answer_bn: string | null
  marks: number; source: QuestionSource; is_published: boolean; options: ApiOption[]; exam_tag_ids: string[]; updated_at: string
}
export interface ApiQuestionListItem {
  id: string; subject_code: string; topic_name: string | null; type: QuestionType; difficulty: number
  stem_en: string; stem_bn: string | null; source: QuestionSource; is_published: boolean; option_count: number; updated_at: string
}
export interface QuestionList { items: ApiQuestionListItem[]; total: number; page: number; pageSize: number }
export type QuestionPayload = Omit<ApiQuestion, 'id' | 'subject_code' | 'topic_name' | 'source' | 'updated_at' | 'marks'>
export interface QuestionListParams { subject_id?: string; type?: string; published?: string; q?: string; page?: number; pageSize?: number }
export interface ImportProblem { row: number; field: string; code: string }
export interface ImportReport { total: number; valid: number; duplicates: number; duplicateRows: number[]; problems: ImportProblem[]; imported?: number }

const json = (method: string, body: unknown): RequestInit => ({ method, body: JSON.stringify(body) })

export const examApi = {
  subjects: {
    list: () => apiFetch<ApiSubject[]>('/subjects'),
    create: (s: Partial<ApiSubject>) => apiFetch<ApiSubject>('/subjects', json('POST', s)),
    update: (id: string, s: Partial<ApiSubject>) => apiFetch<ApiSubject>(`/subjects/${id}`, json('PUT', s)),
    delete: (id: string) => apiFetch<{ deleted: boolean }>(`/subjects/${id}`, { method: 'DELETE' }),
  },
  topics: {
    list: (subjectId?: string) => apiFetch<ApiTopic[]>(subjectId ? `/topics?subject_id=${subjectId}` : '/topics'),
    create: (t: Partial<ApiTopic>) => apiFetch<ApiTopic>('/topics', json('POST', t)),
    update: (id: string, t: Partial<ApiTopic>) => apiFetch<ApiTopic>(`/topics/${id}`, json('PUT', t)),
    delete: (id: string) => apiFetch<{ deleted: boolean }>(`/topics/${id}`, { method: 'DELETE' }),
  },
  examTags: {
    list: () => apiFetch<ApiExamTag[]>('/exam-tags'),
    create: (e: Partial<ApiExamTag>) => apiFetch<ApiExamTag>('/exam-tags', json('POST', e)),
    update: (id: string, e: Partial<ApiExamTag>) => apiFetch<ApiExamTag>(`/exam-tags/${id}`, json('PUT', e)),
    delete: (id: string) => apiFetch<{ deleted: boolean }>(`/exam-tags/${id}`, { method: 'DELETE' }),
  },
  jobPosts: {
    list: () => apiFetch<ApiJobPost[]>('/job-posts'),
    create: (p: Partial<ApiJobPost>) => apiFetch<ApiJobPost>('/job-posts', json('POST', p)),
    update: (id: string, p: Partial<ApiJobPost>) => apiFetch<ApiJobPost>(`/job-posts/${id}`, json('PUT', p)),
    delete: (id: string) => apiFetch<{ deleted: boolean }>(`/job-posts/${id}`, { method: 'DELETE' }),
    setWeights: (id: string, weights: { subject_id: string; weight: number }[]) =>
      apiFetch<ApiJobPost>(`/job-posts/${id}/subjects`, json('PUT', { weights })),
  },
  questions: {
    list: (params: QuestionListParams) => {
      const query = new URLSearchParams()
      for (const [k, v] of Object.entries(params)) if (v !== undefined && v !== '') query.set(k, String(v))
      return apiFetch<QuestionList>(`/questions?${query}`)
    },
    get: (id: string) => apiFetch<ApiQuestion>(`/questions/${id}`),
    create: (q: QuestionPayload) => apiFetch<ApiQuestion>('/questions', json('POST', q)),
    update: (id: string, q: QuestionPayload) => apiFetch<ApiQuestion>(`/questions/${id}`, json('PUT', q)),
    delete: (id: string) => apiFetch<{ deleted: boolean }>(`/questions/${id}`, { method: 'DELETE' }),
    bulkPublish: (ids: string[], published: boolean) => apiFetch<{ updated: number }>('/questions/bulk-publish', json('POST', { ids, published })),
  },
  importQuestions: (format: 'csv' | 'json', content: string, dryRun: boolean) =>
    apiFetch<ImportReport>('/questions/import', json('POST', { format, content, dryRun })),
}

import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import type { Language, Translations } from '../types'
import { translations } from '../data/translations'
import { navigate } from '../router'
import { AdminApiError } from './api'
import { adminErrorText, errorText } from './adminErrors'
import {
  examsApi, type AdminTestDetail, type BankPage, type JobPostOption, type ReadinessProblem, type ResultRelease,
  type SubjectOption, type TestInput, type TestKind, type TestMode, type TopicOption,
} from './examsApi'
import { DIFFICULTY_KEYS, KIND_KEYS, marks, notReadyProblems, problemText } from './examLabels'
import { ExamPreviewModal, NotReadyModal } from './ExamDialogs'
import { setNavigationGuard } from './navGuard'
import { EmptyState, Icon, IconButton, Pager, SkeletonRows } from './ui'
import { fill, useFeedback } from './feedback'
import './admin-exams.css'

interface SectionDraft {
  key: number
  subject_id: string
  topic_id: string
  type: 'mcq' | 'written'
  question_count: string
  difficulty: string
  marks_per_question: string
  negative_mark: string
}

interface PickedQuestion {
  id: string
  subject_code: string
  topic_name: string | null
  difficulty: number
  stem_en: string
  stem_bn: string | null
  is_published: boolean
}

interface Draft {
  kind: TestKind
  mode: TestMode
  title_en: string
  title_bn: string
  description_en: string
  description_bn: string
  job_post_id: string
  duration_minutes: string
  marks_per_question: string
  negative_mark: string
  pass_mark: string
  shuffle_options: boolean
  available_from: string
  available_until: string
  max_attempts: string
  result_release: ResultRelease
  sections: SectionDraft[]
  questions: PickedQuestion[]
}

let nextKey = 1
const str = (n: number | null | undefined) => (n == null ? '' : String(n))
const blankSection = (): SectionDraft => ({
  key: nextKey++, subject_id: '', topic_id: '', type: 'mcq', question_count: '10', difficulty: '', marks_per_question: '', negative_mark: '',
})

/** ISO → the `datetime-local` value in the admin's own time zone, and back. */
function toLocal(iso: string | null): string {
  if (!iso) return ''
  const d = new Date(iso)
  const pad = (n: number) => String(n).padStart(2, '0')
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}`
}
const fromLocal = (v: string) => (v ? new Date(v).toISOString() : null)

const NEW_DRAFT: Omit<Draft, 'sections' | 'questions'> = {
  kind: 'mock', mode: 'random', title_en: '', title_bn: '', description_en: '', description_bn: '', job_post_id: '',
  duration_minutes: '60', marks_per_question: '1', negative_mark: '0.25', pass_mark: '', shuffle_options: true,
  available_from: '', available_until: '', max_attempts: '', result_release: 'immediate',
}

function toDraft(d: AdminTestDetail): Draft {
  return {
    kind: d.kind, mode: d.mode, title_en: d.title_en, title_bn: d.title_bn ?? '', description_en: d.description_en ?? '',
    description_bn: d.description_bn ?? '', job_post_id: d.job_post_id ?? '', duration_minutes: str(d.duration_minutes),
    marks_per_question: str(d.marks_per_question), negative_mark: str(d.negative_mark), pass_mark: str(d.pass_mark),
    shuffle_options: d.shuffle_options, available_from: toLocal(d.available_from), available_until: toLocal(d.available_until),
    max_attempts: str(d.max_attempts), result_release: d.result_release,
    sections: d.sections.map(s => ({
      key: nextKey++, subject_id: s.subject_id, topic_id: s.topic_id ?? '', type: s.type, question_count: str(s.question_count),
      difficulty: str(s.difficulty), marks_per_question: str(s.marks_per_question),
      negative_mark: s.marks_per_question == null ? '' : str(s.negative_mark),
    })),
    questions: d.questions.map(q => ({
      id: q.id, subject_code: q.subject_code, topic_name: q.topic_name, difficulty: q.difficulty, stem_en: q.stem_en, stem_bn: q.stem_bn, is_published: q.is_published,
    })),
  }
}

/** The body the server validates (`parseMockTest`); a blank number becomes null there. */
function toInput(d: Draft): TestInput {
  const blank = (v: string) => (v.trim() === '' ? null : v.trim())
  return {
    kind: d.kind, mode: d.mode, title_en: d.title_en.trim(), title_bn: blank(d.title_bn), description_en: blank(d.description_en),
    description_bn: blank(d.description_bn), job_post_id: d.job_post_id || null, duration_minutes: d.duration_minutes.trim(),
    marks_per_question: d.marks_per_question.trim(), negative_mark: d.negative_mark.trim() || '0', pass_mark: blank(d.pass_mark),
    shuffle_options: d.shuffle_options, available_from: fromLocal(d.available_from), available_until: fromLocal(d.available_until),
    max_attempts: blank(d.max_attempts), result_release: d.result_release,
    sections: d.mode === 'random' ? d.sections.map(s => ({
      subject_id: s.subject_id, topic_id: s.topic_id || null, type: s.type, question_count: s.question_count.trim(),
      difficulty: s.difficulty ? Number(s.difficulty) : null, marks_per_question: blank(s.marks_per_question),
      negative_mark: s.marks_per_question.trim() ? (s.negative_mark.trim() || '0') : '0',
    })) : [],
    question_ids: d.mode === 'fixed' ? d.questions.map(q => q.id) : [],
  }
}

/** Questions and marks as the server will count them (MCQ sections only). */
function summarize(d: Draft) {
  const perQ = Number(d.marks_per_question) || 0
  const neg = Number(d.negative_mark) || 0
  if (d.mode === 'fixed') return { questions: d.questions.length, total: d.questions.length * perQ, negatives: [neg] }
  const mcq = d.sections.filter(s => s.type === 'mcq')
  const own = (s: SectionDraft) => s.marks_per_question.trim() !== ''
  return {
    questions: mcq.reduce((n, s) => n + (Number(s.question_count) || 0), 0),
    total: mcq.reduce((n, s) => n + (Number(s.question_count) || 0) * (own(s) ? Number(s.marks_per_question) || 0 : perQ), 0),
    negatives: [...new Set(mcq.map(s => (own(s) ? Number(s.negative_mark) || 0 : neg)))].sort((a, b) => a - b),
  }
}

const BANK_PAGE = 10

/** Admin → Exams → a test: rules, marking, schedule and questions, with readiness and preview. */
export default function ExamEditor({ id, language, onExit }: { id: string; language: Language; onExit: () => void }) {
  const t = translations[language]
  const { toast, confirm } = useFeedback()
  const isNew = id === 'new'
  const [detail, setDetail] = useState<AdminTestDetail | null>(null)
  const [draft, setDraft] = useState<Draft | null>(isNew ? { ...NEW_DRAFT, sections: [blankSection()], questions: [] } : null)
  const [savedJson, setSavedJson] = useState<string>(() => (isNew ? JSON.stringify(toInput({ ...NEW_DRAFT, sections: [], questions: [] })) : ''))
  const [failed, setFailed] = useState(false)
  const [subjects, setSubjects] = useState<SubjectOption[]>([])
  const [topics, setTopics] = useState<TopicOption[]>([])
  const [posts, setPosts] = useState<JobPostOption[]>([])
  const [fields, setFields] = useState<Record<string, string>>({})
  const [saving, setSaving] = useState(false)
  const [preview, setPreview] = useState(false)
  const [notReady, setNotReady] = useState<ReadinessProblem[] | null>(null)

  const loaded = useCallback((d: AdminTestDetail) => {
    const next = toDraft(d)
    setDetail(d); setDraft(next); setSavedJson(JSON.stringify(toInput(next))); setFields({})
  }, [])

  useEffect(() => {
    examsApi.subjects().then(setSubjects).catch(() => {})
    examsApi.topics().then(setTopics).catch(() => {})
    examsApi.jobPosts().then(setPosts).catch(() => {})
  }, [])
  useEffect(() => {
    if (isNew) return
    examsApi.get(id).then(loaded).catch(() => setFailed(true))
  }, [id, isNew, loaded])

  const dirty = !!draft && JSON.stringify(toInput(draft)) !== savedJson

  // Guard against losing work: the browser tab closing, and admin navigation (see navGuard.ts).
  const dirtyRef = useRef(dirty)
  useEffect(() => { dirtyRef.current = dirty }, [dirty])
  useEffect(() => {
    const onBeforeUnload = (e: BeforeUnloadEvent) => { if (dirtyRef.current) e.preventDefault() }
    window.addEventListener('beforeunload', onBeforeUnload)
    setNavigationGuard(() => (dirtyRef.current
      ? confirm({ title: t.edLeaveTitle, body: t.axLeaveBody, confirmLabel: t.edDiscard, danger: true })
      : Promise.resolve(true)))
    return () => { window.removeEventListener('beforeunload', onBeforeUnload); setNavigationGuard(null) }
  }, [confirm, t])

  /** Saves the draft; returns the saved test, or null when the server refused it. */
  const save = useCallback(async (): Promise<AdminTestDetail | null> => {
    if (!draft || saving) return null
    setSaving(true); setFields({})
    try {
      const input = toInput(draft)
      const saved = isNew ? await examsApi.create(input) : await examsApi.update(id, input)
      if (isNew) {
        // The editor remounts on the new URL; mark the work saved so nothing asks to discard it.
        dirtyRef.current = false
        toast(t.axCreated)
        navigate(`admin/exams/${saved.id}`, { replace: true })
        return saved
      }
      loaded(saved)
      toast(t.axSaved)
      return saved
    } catch (e) {
      const problems = notReadyProblems(e)
      if (problems) setNotReady(problems)
      else {
        if (e instanceof AdminApiError) setFields(e.fields)
        toast(errorText(t, e), 'error')
      }
      return null
    } finally { setSaving(false) }
  }, [draft, saving, isNew, id, loaded, t, toast])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 's') { e.preventDefault(); save() }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [save])

  async function togglePublish() {
    if (!detail) return
    if (detail.is_published) {
      if (!await confirm({ title: t.axConfirmUnpublishTitle, body: fill(t.axConfirmUnpublish, { title: detail.title_en }), confirmLabel: t.adminUnpub, danger: true })) return
    }
    const current = dirty ? await save() : detail
    if (!current || current.id !== detail.id) return
    try {
      loaded(await examsApi.publish(detail.id, !detail.is_published))
      toast(detail.is_published ? t.axUnpublishedToast : t.axPublishedToast)
    } catch (e) {
      const problems = notReadyProblems(e)
      if (problems) setNotReady(problems)
      else toast(errorText(t, e), 'error')
    }
  }

  const summary = useMemo(() => (draft ? summarize(draft) : null), [draft])

  if (failed) return <div className="adm-table-card"><EmptyState icon="alert" text={t.genericServerError} /></div>
  if (!draft || !summary) return <SkeletonRows rows={8} />

  const set = <K extends keyof Draft>(k: K, v: Draft[K]) => setDraft(d => (d ? { ...d, [k]: v } : d))
  const fe = (key: string) => (fields[key] ? <small className="cm-field-error">{adminErrorText(t, fields[key], fields[key])}</small> : null)
  const sectionIds = detail?.sections.map(s => s.id) ?? []
  const questionIds = detail?.questions.map(q => q.id) ?? []
  const problems = detail?.problems ?? []

  return (
    <div className="ed ax-editor">
      <div className="ed-head">
        <button type="button" className="adm-btn" onClick={onExit}><Icon name="arrowLeft" size={15} />{t.axBack}</button>
        <div className="ed-head-title">
          <h1>{draft.title_en || (isNew ? t.axNew : detail?.title_en)}</h1>
          <span className={`ed-state${dirty ? ' dirty' : ''}`}>
            {saving ? t.edSaving : dirty ? t.edUnsaved : t.edAllSaved}
            {detail && <> · <span className={`ax-status-text st-${detail.status}`}>{t[({ draft: 'axStatusDraft', published: 'axStatusPublished', archived: 'axStatusArchived' } as const)[detail.status]]}</span></>}
          </span>
        </div>
        {detail && (
          <button type="button" className="adm-btn" onClick={() => setPreview(true)}>
            <Icon name="eye" size={15} /><span className="ed-hide-sm">{t.axPreview}</span>
          </button>
        )}
        {detail && !detail.is_archived && (
          <button type="button" className="adm-btn" onClick={togglePublish} disabled={saving}>
            {detail.is_published ? t.adminUnpub : t.adminPub}
          </button>
        )}
        <button type="button" className="adm-btn primary" onClick={save} disabled={(!dirty && !isNew) || saving} title="Ctrl+S">
          {saving ? t.edSaving : t.adminSave}
        </button>
      </div>

      <div className="ax-grid">
        <div className="ax-main">
          <section className="adm-card">
            <header className="adm-card-head"><h2>{t.axSecBasics}</h2></header>
            <div className="ax-card-body form-grid">
              <label>{t.axFieldKind}
                <select value={draft.kind} onChange={e => set('kind', e.target.value as TestKind)}>
                  {(['quiz', 'mock', 'model'] as const).map(k => <option key={k} value={k}>{t[KIND_KEYS[k]]}</option>)}
                </select>
                {fe('kind')}
              </label>
              <label>{t.axFieldPost}
                <select value={draft.job_post_id} onChange={e => set('job_post_id', e.target.value)}>
                  <option value="">{t.axNoPost}</option>
                  {posts.map(p => <option key={p.id} value={p.id}>{p.organization} — {(language === 'bn' && p.title_bn) || p.title_en}</option>)}
                </select>
                {fe('job_post_id')}
              </label>
              <label>{t.axFieldTitleEn}
                <input value={draft.title_en} maxLength={200} onChange={e => set('title_en', e.target.value)} aria-invalid={!!fields.title_en} />
                {fe('title_en')}
              </label>
              <label>{t.axFieldTitleBn}
                <input value={draft.title_bn} maxLength={200} onChange={e => set('title_bn', e.target.value)} aria-invalid={!!fields.title_bn} />
                {fe('title_bn')}
              </label>
              <label>{t.axFieldDescEn}
                <textarea rows={4} value={draft.description_en} onChange={e => set('description_en', e.target.value)} />
                <small className="ax-hint">{t.axDescHint}</small>
                {fe('description_en')}
              </label>
              <label>{t.axFieldDescBn}
                <textarea rows={4} value={draft.description_bn} onChange={e => set('description_bn', e.target.value)} />
                {fe('description_bn')}
              </label>
            </div>
          </section>

          <section className="adm-card">
            <header className="adm-card-head"><h2>{t.axSecRules}</h2></header>
            <div className="ax-card-body form-grid">
              <label>{t.axFieldDuration}
                <input type="number" min={1} max={300} value={draft.duration_minutes} onChange={e => set('duration_minutes', e.target.value)} aria-invalid={!!fields.duration_minutes} />
                {fe('duration_minutes')}
              </label>
              <label>{t.axFieldAttempts}
                <input type="number" min={1} max={50} value={draft.max_attempts} onChange={e => set('max_attempts', e.target.value)} aria-invalid={!!fields.max_attempts} />
                <small className="ax-hint">{t.axAttemptsHint}</small>
                {fe('max_attempts')}
              </label>
              <label>{t.axFieldMarks}
                <input type="number" min={0.25} step={0.25} value={draft.marks_per_question} onChange={e => set('marks_per_question', e.target.value)} aria-invalid={!!fields.marks_per_question} />
                {fe('marks_per_question')}
              </label>
              <label>{t.axFieldNegative}
                <input type="number" min={0} step={0.05} value={draft.negative_mark} onChange={e => set('negative_mark', e.target.value)} aria-invalid={!!fields.negative_mark} />
                {fe('negative_mark')}
              </label>
              <label>{t.axFieldPass}
                <input type="number" min={0} step={0.25} value={draft.pass_mark} onChange={e => set('pass_mark', e.target.value)} aria-invalid={!!fields.pass_mark} />
                <small className="ax-hint">{fill(t.axPassOf, { n: marks(summary.total) })}</small>
                {fe('pass_mark')}
              </label>
              <label>{t.axFieldRelease}
                <select value={draft.result_release} onChange={e => set('result_release', e.target.value as ResultRelease)}>
                  <option value="immediate">{t.axReleaseImmediate}</option>
                  <option value="after_close">{t.axReleaseAfterClose}</option>
                  <option value="never">{t.axReleaseNever}</option>
                </select>
                {fe('result_release')}
              </label>
              <label className="cm-active full-width">
                <input type="checkbox" checked={draft.shuffle_options} onChange={e => set('shuffle_options', e.target.checked)} /> {t.axFieldShuffle}
              </label>
            </div>
          </section>

          <section className="adm-card">
            <header className="adm-card-head"><h2>{t.axSecSchedule}</h2></header>
            <div className="ax-card-body form-grid">
              <label>{t.axFieldFrom}
                <input type="datetime-local" value={draft.available_from} onChange={e => set('available_from', e.target.value)} aria-invalid={!!fields.available_from} />
                {fe('available_from')}
              </label>
              <label>{t.axFieldUntil}
                <input type="datetime-local" value={draft.available_until} onChange={e => set('available_until', e.target.value)} aria-invalid={!!fields.available_until} />
                {fe('available_until')}
              </label>
              <small className="ax-hint full-width">{t.axWindowHint}</small>
            </div>
          </section>

          <section className="adm-card">
            <header className="adm-card-head">
              <h2>{t.axSecQuestions}</h2>
              <div className="adm-segmented" role="radiogroup" aria-label={t.axModeLabel}>
                {(['random', 'fixed'] as const).map(m => (
                  <button key={m} type="button" role="radio" aria-checked={draft.mode === m} className={draft.mode === m ? 'active' : ''}
                    onClick={() => set('mode', m)}>
                    {m === 'random' ? t.axModeRandom : t.axModeFixed}
                  </button>
                ))}
              </div>
            </header>
            <div className="ax-card-body">
              <p className="ax-hint ax-mode-hint">{draft.mode === 'random' ? t.axModeRandomHint : t.axModeFixedHint}</p>
              {draft.mode === 'random'
                ? <SectionsEditor t={t} language={language} draft={draft} setSections={s => set('sections', s)} subjects={subjects} topics={topics}
                    detail={detail} fields={fields} defaultMarks={draft.marks_per_question} />
                : <FixedQuestions t={t} language={language} picked={draft.questions} setPicked={q => set('questions', q)} subjects={subjects} topics={topics} />}
              {fe(draft.mode === 'fixed' ? 'question_ids' : 'sections')}
            </div>
          </section>
        </div>

        <aside className="ax-side">
          <section className="adm-card">
            <header className="adm-card-head"><h2>{t.axSecSummary}</h2></header>
            <dl className="ax-summary">
              <div><dt>{t.axSumQuestions}</dt><dd>{summary.questions}</dd></div>
              <div><dt>{t.axSumMarks}</dt><dd>{marks(summary.total)}</dd></div>
              <div><dt>{t.axSumDuration}</dt><dd>{fill(t.axMinutes, { n: draft.duration_minutes || '–' })}</dd></div>
              <div><dt>{t.axSumNegative}</dt><dd>{summary.negatives.every(n => n === 0) ? t.axNoNegative : summary.negatives.map(marks).join(' / ')}</dd></div>
              {detail && detail.attempt_count > 0 && (
                <>
                  <div><dt>{t.axSumAttempts}</dt><dd>{detail.attempt_count}</dd></div>
                  {detail.average_percent != null && <div><dt>{t.axSumAverage}</dt><dd>{Math.round(detail.average_percent)}%</dd></div>}
                </>
              )}
            </dl>
          </section>

          <section className="adm-card">
            <header className="adm-card-head"><h2>{t.axSecReadiness}</h2></header>
            <div className="ax-card-body ax-readiness">
              {!detail ? <p className="ax-hint">{t.axSaveToCheck}</p>
                : problems.length === 0 ? <p className="ax-ready"><Icon name="check" size={16} />{t.axReady}</p>
                : (
                  <ul className="ax-problems">
                    {problems.map((p, i) => <li key={i}><Icon name="alert" size={15} /><span>{problemText(t, p, sectionIds, questionIds)}</span></li>)}
                  </ul>
                )}
              {detail && dirty && <p className="ax-hint">{t.axCheckedOnSave}</p>}
            </div>
          </section>
        </aside>
      </div>

      {preview && detail && (
        <ExamPreviewModal testId={detail.id} title={detail.title_en} random={detail.mode === 'random'} unsaved={dirty}
          language={language} onClose={() => setPreview(false)} />
      )}
      {notReady && (
        <NotReadyModal problems={notReady} sectionIds={sectionIds} questionIds={questionIds} language={language} onClose={() => setNotReady(null)} />
      )}
    </div>
  )
}

function SectionsEditor({ t, language, draft, setSections, subjects, topics, detail, fields, defaultMarks }: {
  t: Translations; language: Language; draft: Draft; setSections: (s: SectionDraft[]) => void
  subjects: SubjectOption[]; topics: TopicOption[]; detail: AdminTestDetail | null; fields: Record<string, string>; defaultMarks: string
}) {
  const sections = draft.sections
  const update = (i: number, patch: Partial<SectionDraft>) => setSections(sections.map((s, j) => (j === i ? { ...s, ...patch } : s)))
  const move = (i: number, by: number) => {
    const next = [...sections]
    ;[next[i], next[i + by]] = [next[i + by], next[i]]
    setSections(next)
  }
  // Server availability is known for the saved sections; it lines up with the rows until they change.
  const savedSections = detail?.sections ?? []
  const availableFor = (s: SectionDraft, i: number) => {
    const saved = savedSections[i]
    if (!saved || saved.subject_id !== s.subject_id || (saved.topic_id ?? '') !== s.topic_id || str(saved.difficulty) !== s.difficulty) return null
    return saved.available
  }
  const fe = (i: number, f: string) => {
    const code = fields[`sections.${i}.${f}`]
    return code ? <small className="cm-field-error">{adminErrorText(t, code, code)}</small> : null
  }
  const name = (o: { name_en: string; name_bn: string | null }) => (language === 'bn' && o.name_bn) || o.name_en

  return (
    <div className="ax-sections">
      {sections.length === 0 && <p className="ax-hint">{t.axNoSections}</p>}
      {sections.map((s, i) => {
        const subject = subjects.find(x => x.id === s.subject_id)
        const head = (
          <div className="ax-section-head">
            <strong>{fill(t.axSection, { n: i + 1 })}</strong>
            <div className="adm-row-actions">
              <IconButton icon="up" label={t.axMoveUp} onClick={() => move(i, -1)} disabled={i === 0} />
              <IconButton icon="down" label={t.axMoveDown} onClick={() => move(i, 1)} disabled={i === sections.length - 1} />
              <IconButton icon="trash" label={t.axRemove} tone="danger" onClick={() => setSections(sections.filter((_, j) => j !== i))} />
            </div>
          </div>
        )
        if (s.type === 'written') {
          return (
            <div key={s.key} className="ax-section is-written">
              {head}
              <p className="ax-written-note"><Icon name="alert" size={15} />
                <span>{subject ? `${subject.code} · ` : ''}{fill(t.axWrittenSection, { n: s.question_count })}</span>
              </p>
            </div>
          )
        }
        const available = availableFor(s, i)
        const short = available !== null && available < (Number(s.question_count) || 0)
        return (
          <div key={s.key} className={`ax-section${short ? ' is-short' : ''}`}>
            {head}
            <div className="form-grid ax-section-grid">
              <label>{t.axSubject}
                <select value={s.subject_id} onChange={e => update(i, { subject_id: e.target.value, topic_id: '' })} aria-invalid={!!fields[`sections.${i}.subject_id`]}>
                  <option value="">{t.axChooseSubject}</option>
                  {subjects.map(x => <option key={x.id} value={x.id}>{x.code} — {name(x)}</option>)}
                </select>
                {fe(i, 'subject_id')}
              </label>
              <label>{t.axTopic}
                <select value={s.topic_id} onChange={e => update(i, { topic_id: e.target.value })} disabled={!s.subject_id}>
                  <option value="">{t.axAnyTopic}</option>
                  {topics.filter(x => x.subject_id === s.subject_id).map(x => <option key={x.id} value={x.id}>{name(x)}</option>)}
                </select>
                {fe(i, 'topic_id')}
              </label>
              <label>{t.axDifficulty}
                <select value={s.difficulty} onChange={e => update(i, { difficulty: e.target.value })}>
                  <option value="">{t.axAnyDifficulty}</option>
                  <option value="1">{t.axEasy}</option>
                  <option value="2">{t.axMedium}</option>
                  <option value="3">{t.axHard}</option>
                </select>
              </label>
              <label>{t.axCount}
                <input type="number" min={1} max={300} value={s.question_count} onChange={e => update(i, { question_count: e.target.value })}
                  aria-invalid={!!fields[`sections.${i}.question_count`] || short} />
                <small className={`ax-avail${short ? ' short' : ''}`}>
                  {available === null ? t.axAvailableAfterSave : fill(t.axAvailable, { n: available })}
                </small>
                {fe(i, 'question_count')}
              </label>
              <label>{t.axOwnMarks}
                <input type="number" min={0.25} step={0.25} placeholder={defaultMarks} value={s.marks_per_question}
                  onChange={e => update(i, { marks_per_question: e.target.value })} aria-invalid={!!fields[`sections.${i}.marks_per_question`]} />
                {fe(i, 'marks_per_question')}
              </label>
              <label>{t.axOwnNegative}
                <input type="number" min={0} step={0.05} value={s.negative_mark} disabled={!s.marks_per_question.trim()}
                  onChange={e => update(i, { negative_mark: e.target.value })} aria-invalid={!!fields[`sections.${i}.negative_mark`]} />
                {fe(i, 'negative_mark')}
              </label>
            </div>
          </div>
        )
      })}
      <div className="ax-section-foot">
        <button type="button" className="adm-btn" onClick={() => setSections([...sections, blankSection()])}>
          <Icon name="plus" size={15} />{t.axAddSection}
        </button>
        <small className="ax-hint">{t.axOwnMarksHint}</small>
      </div>
    </div>
  )
}

function FixedQuestions({ t, language, picked, setPicked, subjects, topics }: {
  t: Translations; language: Language; picked: PickedQuestion[]; setPicked: (q: PickedQuestion[]) => void
  subjects: SubjectOption[]; topics: TopicOption[]
}) {
  const [filters, setFilters] = useState({ subject_id: '', topic_id: '', difficulty: '', q: '' })
  const [page, setPage] = useState(1)
  const [bank, setBank] = useState<BankPage | null>(null)
  const [error, setError] = useState('')

  useEffect(() => {
    const timer = setTimeout(() => {
      examsApi.bank({ ...filters, page, pageSize: BANK_PAGE })
        .then(r => { setBank(r); setError('') })
        .catch(e => setError(errorText(t, e)))
    }, filters.q ? 300 : 0)
    return () => clearTimeout(timer)
  }, [filters, page, t])

  const setFilter = (k: keyof typeof filters, v: string) => {
    setFilters(f => ({ ...f, [k]: v, ...(k === 'subject_id' ? { topic_id: '' } : {}) })); setPage(1)
  }
  const chosen = new Set(picked.map(q => q.id))
  const stem = (q: { stem_en: string; stem_bn: string | null }) => (language === 'bn' && q.stem_bn) || q.stem_en
  const move = (i: number, by: number) => {
    const next = [...picked]
    ;[next[i], next[i + by]] = [next[i + by], next[i]]
    setPicked(next)
  }
  const level = (d: number) => t[DIFFICULTY_KEYS[String(d)] ?? 'axMixed']

  return (
    <div className="ax-fixed">
      <div className="ax-picked">
        <h3 className="ax-h3">{fill(t.axSelected, { n: picked.length })}</h3>
        {picked.length === 0 ? <p className="ax-hint">{t.axNoSelected}</p> : (
          <ol className="ax-qlist">
            {picked.map((q, i) => (
              <li key={q.id}>
                <span className="ax-qnum">{i + 1}</span>
                <div className="ax-qtext">
                  <span className="ax-stem">{stem(q)}</span>
                  <span className="adm-cell-sub">
                    {q.subject_code}{q.topic_name ? ` · ${q.topic_name}` : ''} · {level(q.difficulty)}
                    {!q.is_published && <span className="ax-warn"> · {t.axUnpublishedQ}</span>}
                  </span>
                </div>
                <div className="adm-row-actions">
                  <IconButton icon="up" label={t.axMoveUp} onClick={() => move(i, -1)} disabled={i === 0} />
                  <IconButton icon="down" label={t.axMoveDown} onClick={() => move(i, 1)} disabled={i === picked.length - 1} />
                  <IconButton icon="trash" label={t.axRemove} tone="danger" onClick={() => setPicked(picked.filter(x => x.id !== q.id))} />
                </div>
              </li>
            ))}
          </ol>
        )}
      </div>

      <div className="ax-bank">
        <h3 className="ax-h3">{t.axBank}</h3>
        <p className="ax-hint">{t.axBankHint}</p>
        <div className="adm-toolbar ax-bank-filters">
          <label className="adm-search">
            <Icon name="search" size={15} />
            <input type="search" value={filters.q} placeholder={t.axBankSearch} aria-label={t.axBankSearch} onChange={e => setFilter('q', e.target.value)} />
          </label>
          <select className="adm-select" aria-label={t.axSubject} value={filters.subject_id} onChange={e => setFilter('subject_id', e.target.value)}>
            <option value="">{t.axAllSubjects}</option>
            {subjects.map(x => <option key={x.id} value={x.id}>{x.code}</option>)}
          </select>
          <select className="adm-select" aria-label={t.axTopic} value={filters.topic_id} disabled={!filters.subject_id} onChange={e => setFilter('topic_id', e.target.value)}>
            <option value="">{t.axAnyTopic}</option>
            {topics.filter(x => x.subject_id === filters.subject_id).map(x => <option key={x.id} value={x.id}>{(language === 'bn' && x.name_bn) || x.name_en}</option>)}
          </select>
          <select className="adm-select" aria-label={t.axDifficulty} value={filters.difficulty} onChange={e => setFilter('difficulty', e.target.value)}>
            <option value="">{t.axAnyDifficulty}</option>
            <option value="1">{t.axEasy}</option>
            <option value="2">{t.axMedium}</option>
            <option value="3">{t.axHard}</option>
          </select>
        </div>
        {error && <div className="cm-alert bad" role="alert">{error}</div>}
        {!bank && !error && <SkeletonRows rows={4} />}
        {bank && bank.items.length === 0 && <p className="ax-hint">{t.axBankEmpty}</p>}
        {bank && bank.items.length > 0 && (
          <ul className="ax-qlist ax-bank-list">
            {bank.items.map(q => {
              const added = chosen.has(q.id)
              return (
                <li key={q.id}>
                  <div className="ax-qtext">
                    <span className="ax-stem">{stem(q)}</span>
                    <span className="adm-cell-sub">{q.subject_code}{q.topic_name ? ` · ${q.topic_name}` : ''} · {level(q.difficulty)}</span>
                  </div>
                  <button type="button" className="adm-btn sm" disabled={added}
                    onClick={() => setPicked([...picked, { id: q.id, subject_code: q.subject_code, topic_name: q.topic_name, difficulty: q.difficulty, stem_en: q.stem_en, stem_bn: q.stem_bn, is_published: q.is_published }])}>
                    {added ? <><Icon name="check" size={14} />{t.axAdded}</> : <><Icon name="plus" size={14} />{t.axAdd}</>}
                  </button>
                </li>
              )
            })}
          </ul>
        )}
        {bank && <Pager page={page - 1} pageSize={BANK_PAGE} total={bank.total} onPage={p => setPage(p + 1)} t={t} />}
      </div>
    </div>
  )
}

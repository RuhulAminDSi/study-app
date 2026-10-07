import { useEffect, useMemo, useState } from 'react'
import type { Language } from '../types'
import { translations } from '../data/translations'
import QuestionCard, { toCardData } from '../components/QuestionCard'
import { examApi, type ApiExamTag, type ApiOption, type ApiSubject, type ApiTopic, type QuestionPayload, type QuestionType } from './examApi'
import { adminErrorText } from './adminErrors'
import { AdminApiError } from './api'

interface Props { language: Language; questionId: string | null; subjects: ApiSubject[]; onClose: (changed: boolean) => void }

const blankOption = (): ApiOption => ({ text_en: '', text_bn: '', is_correct: false })
const blank = (): QuestionPayload => ({
  subject_id: '', topic_id: null, type: 'mcq', difficulty: 2, stem_en: '', stem_bn: '', code_snippet: '', code_language: '',
  explanation_en: '', explanation_bn: '', model_answer_en: '', model_answer_bn: '',
  options: [blankOption(), blankOption(), blankOption(), blankOption()], exam_tag_ids: [], is_published: false,
})

export default function QuestionEditor({ language, questionId, subjects, onClose }: Props) {
  const t = translations[language]
  const [form, setForm] = useState<QuestionPayload>(blank())
  const [topics, setTopics] = useState<ApiTopic[]>([])
  const [tags, setTags] = useState<ApiExamTag[]>([])
  const [fields, setFields] = useState<Record<string, string>>({})
  const [error, setError] = useState('')
  const [saving, setSaving] = useState(false)
  const [previewLang, setPreviewLang] = useState<'en' | 'bn'>(language)
  const [loaded, setLoaded] = useState(questionId === null)

  useEffect(() => { examApi.examTags.list().then(setTags).catch(() => {}) }, [])
  useEffect(() => {
    if (!questionId) return
    examApi.questions.get(questionId).then(q => {
      setForm({
        subject_id: q.subject_id, topic_id: q.topic_id, type: q.type, difficulty: q.difficulty,
        stem_en: q.stem_en, stem_bn: q.stem_bn ?? '', code_snippet: q.code_snippet ?? '', code_language: q.code_language ?? '',
        explanation_en: q.explanation_en ?? '', explanation_bn: q.explanation_bn ?? '',
        model_answer_en: q.model_answer_en ?? '', model_answer_bn: q.model_answer_bn ?? '',
        options: q.options.map(o => ({ text_en: o.text_en, text_bn: o.text_bn ?? '', is_correct: o.is_correct })),
        exam_tag_ids: q.exam_tag_ids, is_published: q.is_published,
      })
      setLoaded(true)
    }).catch(e => setError(String(e)))
  }, [questionId])
  useEffect(() => {
    if (!form.subject_id) { setTopics([]); return }
    examApi.topics.list(form.subject_id).then(setTopics).catch(() => {})
  }, [form.subject_id])

  const set = <K extends keyof QuestionPayload>(key: K, value: QuestionPayload[K]) => setForm(f => ({ ...f, [key]: value }))
  const setOption = (i: number, patch: Partial<ApiOption>) =>
    setForm(f => ({ ...f, options: f.options.map((o, j) => (j === i ? { ...o, ...patch } : patch.is_correct ? { ...o, is_correct: false } : o)) }))
  const isMcq = form.type === 'mcq'
  const err = (field: string) => (fields[field] ? adminErrorText(t, fields[field], fields[field]) : '')

  const preview = useMemo(() => toCardData({
    ...form, options: isMcq ? form.options : [],
  }, previewLang), [form, isMcq, previewLang])

  async function save() {
    setSaving(true); setFields({}); setError('')
    const payload: QuestionPayload = { ...form, options: isMcq ? form.options.filter(o => o.text_en.trim() || (o.text_bn ?? '').trim()) : [] }
    try {
      if (questionId) await examApi.questions.update(questionId, payload)
      else await examApi.questions.create(payload)
      onClose(true)
    } catch (e) {
      if (e instanceof AdminApiError) { setFields(e.fields); setError(adminErrorText(t, e.code, e.message)) }
      else setError(String(e))
    } finally { setSaving(false) }
  }

  if (!loaded) return <div className="admin-loading">{t.adminLoading}</div>

  return (
    <div className="qe">
      <div className="qe-head">
        <button className="admin-action-btn" onClick={() => onClose(false)}>← {t.adminBackEditor}</button>
        <h3>{questionId ? t.qEdit : t.qNew}</h3>
        <label className="qe-publish"><input type="checkbox" checked={form.is_published} onChange={e => set('is_published', e.target.checked)} /> {t.qPublishOnSave}</label>
        <button className="admin-action-btn primary" onClick={save} disabled={saving}>{saving ? '…' : t.adminSave}</button>
      </div>
      {error && <div className="admin-error q-banner" role="alert">{error}</div>}

      <div className="qe-body">
        <div className="qe-form form-grid">
          <label>{t.qSubject}
            <select id="qe-subject" value={form.subject_id} onChange={e => setForm(f => ({ ...f, subject_id: e.target.value, topic_id: null }))}>
              <option value="">—</option>
              {subjects.map(s => <option key={s.id} value={s.id}>{s.code} — {(language === 'bn' && s.name_bn) || s.name_en}</option>)}
            </select>
            {err('subject_id') && <span className="qe-error">{err('subject_id')}</span>}
          </label>
          <label>{t.qTopic}
            <select id="qe-topic" value={form.topic_id ?? ''} onChange={e => set('topic_id', e.target.value || null)}>
              <option value="">{t.qNoTopic}</option>
              {topics.map(tp => <option key={tp.id} value={tp.id}>{(language === 'bn' && tp.name_bn) || tp.name_en}</option>)}
            </select>
            {err('topic_id') && <span className="qe-error">{err('topic_id')}</span>}
          </label>
          <label>{t.qType}
            <select id="qe-type" value={form.type} onChange={e => set('type', e.target.value as QuestionType)}>
              <option value="mcq">{t.qTypeMcq}</option>
              <option value="written">{t.qTypeWritten}</option>
              <option value="programming">{t.qTypeProgramming}</option>
            </select>
          </label>
          <label>{t.qDifficulty}
            <select id="qe-difficulty" value={form.difficulty} onChange={e => set('difficulty', Number(e.target.value))}>
              <option value={1}>{t.qEasy}</option><option value={2}>{t.qMedium}</option><option value={3}>{t.qHard}</option>
            </select>
          </label>
          <label className="full-width">{t.qStemEn}
            <textarea id="qe-stem-en" rows={3} value={form.stem_en} onChange={e => set('stem_en', e.target.value)} />
            {err('stem_en') && <span className="qe-error">{err('stem_en')}</span>}
          </label>
          <label className="full-width">{t.qStemBn}
            <textarea id="qe-stem-bn" rows={3} value={form.stem_bn ?? ''} onChange={e => set('stem_bn', e.target.value)} />
          </label>
          <label className="full-width">{t.qCode}
            <textarea id="qe-code" className="qe-mono" rows={5} spellCheck={false} value={form.code_snippet ?? ''} onChange={e => set('code_snippet', e.target.value)} />
          </label>
          <label>{t.qCodeLanguage}
            <select id="qe-code-language" value={form.code_language ?? ''} onChange={e => set('code_language', e.target.value)}>
              <option value="">—</option>
              {['c', 'cpp', 'java', 'python', 'sql', 'asm'].map(l => <option key={l} value={l}>{l}</option>)}
            </select>
          </label>

          {isMcq ? (
            <fieldset className="full-width qe-options">
              <legend>{t.qOptions}</legend>
              {form.options.map((o, i) => (
                <div key={i} className="qe-option">
                  <label className="qe-correct"><input id={`qe-correct-${i}`} type="radio" name="qe-correct" checked={o.is_correct}
                    onChange={() => setOption(i, { is_correct: true })} /> {'ABCDE'[i]} · {t.qCorrect}</label>
                  <input id={`qe-option-en-${i}`} placeholder={t.qOptionEn} value={o.text_en} onChange={e => setOption(i, { text_en: e.target.value })} />
                  <input id={`qe-option-bn-${i}`} placeholder={t.qOptionBn} value={o.text_bn ?? ''} onChange={e => setOption(i, { text_bn: e.target.value })} />
                  {form.options.length > 2 && (
                    <button type="button" className="admin-action-btn sm" onClick={() => set('options', form.options.filter((_, j) => j !== i))}>{t.qRemove}</button>
                  )}
                </div>
              ))}
              {form.options.length < 5 && <button type="button" className="admin-action-btn sm" onClick={() => set('options', [...form.options, blankOption()])}>{t.qAddOption}</button>}
              {(err('options') || err('correct')) && <span className="qe-error">{err('options') || err('correct')}</span>}
            </fieldset>
          ) : (
            <>
              <label className="full-width">{t.qModelAnswerEn}
                <textarea id="qe-model-en" className="qe-mono" rows={6} value={form.model_answer_en ?? ''} onChange={e => set('model_answer_en', e.target.value)} />
                {err('model_answer_en') && <span className="qe-error">{err('model_answer_en')}</span>}
              </label>
              <label className="full-width">{t.qModelAnswerBn}
                <textarea id="qe-model-bn" className="qe-mono" rows={6} value={form.model_answer_bn ?? ''} onChange={e => set('model_answer_bn', e.target.value)} />
              </label>
            </>
          )}

          <label className="full-width">{t.qExplanationEn}
            <textarea id="qe-expl-en" rows={3} value={form.explanation_en ?? ''} onChange={e => set('explanation_en', e.target.value)} />
          </label>
          <label className="full-width">{t.qExplanationBn}
            <textarea id="qe-expl-bn" rows={3} value={form.explanation_bn ?? ''} onChange={e => set('explanation_bn', e.target.value)} />
          </label>
          <fieldset className="full-width qe-tags">
            <legend>{t.qExamTags}</legend>
            {tags.map(tag => (
              <label key={tag.id} className="qe-tag">
                <input type="checkbox" checked={form.exam_tag_ids.includes(tag.id)}
                  onChange={e => set('exam_tag_ids', e.target.checked ? [...form.exam_tag_ids, tag.id] : form.exam_tag_ids.filter(id => id !== tag.id))} />
                {tag.organization} · {(language === 'bn' && tag.post_bn) || tag.post_en} · {tag.year}
              </label>
            ))}
            {err('exam_tag_ids') && <span className="qe-error">{err('exam_tag_ids')}</span>}
          </fieldset>
        </div>

        <aside className="qe-preview">
          <div className="qe-preview-head">
            <h4>{t.qPreview}</h4>
            <div className="qe-lang">
              <button type="button" className={previewLang === 'bn' ? 'on' : ''} onClick={() => setPreviewLang('bn')}>বাং</button>
              <button type="button" className={previewLang === 'en' ? 'on' : ''} onClick={() => setPreviewLang('en')}>EN</button>
            </div>
          </div>
          <QuestionCard data={preview} revealAnswer
            labels={{ correctAnswer: t.qCorrectAnswer, explanation: t.qExplanation, modelAnswer: t.qModelAnswer, empty: '…' }} />
        </aside>
      </div>
    </div>
  )
}

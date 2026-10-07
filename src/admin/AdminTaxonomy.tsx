import { Fragment, useEffect, useState } from 'react'
import type { Language } from '../types'
import { translations } from '../data/translations'
import { examApi, type ApiExamTag, type ApiJobPost, type ApiSubject, type ApiTopic } from './examApi'
import { adminErrorText } from './adminErrors'
import { AdminApiError } from './api'

type Tab = 'subjects' | 'exams' | 'posts'

export default function AdminTaxonomy({ language }: { language: Language }) {
  const t = translations[language]
  const [tab, setTab] = useState<Tab>('subjects')
  const [subjects, setSubjects] = useState<ApiSubject[]>([])
  const [error, setError] = useState('')
  const fail = (e: unknown) => setError(e instanceof AdminApiError ? adminErrorText(t, e.fields && Object.values(e.fields)[0] ? Object.values(e.fields)[0] : e.code, e.message) : String(e))

  useEffect(() => { examApi.subjects.list().then(setSubjects).catch(fail) }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="tax">
      <div className="tax-tabs" role="tablist">
        {([['subjects', t.taxSubjects], ['exams', t.taxExamTags], ['posts', t.taxJobPosts]] as [Tab, string][]).map(([key, label]) => (
          <button key={key} role="tab" aria-selected={tab === key} className={tab === key ? 'on' : ''} onClick={() => { setTab(key); setError('') }}>{label}</button>
        ))}
      </div>
      {error && <div className="admin-error q-banner tax-error" role="alert" onClick={() => setError('')}>{error}</div>}
      {tab === 'subjects' && <SubjectsTab language={language} subjects={subjects} onError={fail} />}
      {tab === 'exams' && <ExamsTab language={language} onError={fail} />}
      {tab === 'posts' && <PostsTab language={language} subjects={subjects} onError={fail} />}
    </div>
  )
}

function SubjectsTab({ language, subjects, onError }: { language: Language; subjects: ApiSubject[]; onError: (e: unknown) => void }) {
  const t = translations[language]
  const [open, setOpen] = useState<string | null>(null)
  const [topics, setTopics] = useState<ApiTopic[]>([])
  const [newTopic, setNewTopic] = useState({ name_en: '', name_bn: '' })

  useEffect(() => { if (open) examApi.topics.list(open).then(setTopics).catch(onError) }, [open]) // eslint-disable-line react-hooks/exhaustive-deps

  async function addTopic(subjectId: string) {
    try {
      const created = await examApi.topics.create({ subject_id: subjectId, name_en: newTopic.name_en, name_bn: newTopic.name_bn || null })
      setTopics(ts => [...ts, created]); setNewTopic({ name_en: '', name_bn: '' })
    } catch (e) { onError(e) }
  }

  async function removeTopic(id: string) {
    if (!confirm(t.adminConfirmDelete)) return
    try { await examApi.topics.delete(id); setTopics(ts => ts.filter(x => x.id !== id)) } catch (e) { onError(e) }
  }

  return (
    <div className="admin-data-table-container">
      <table className="admin-data-table tax-subjects">
        <thead><tr><th>{t.taxCode}</th><th>{t.taxNameBn}</th><th>{t.taxNameEn}</th><th>{t.taxCategory}</th><th>{t.taxChapter}</th><th>{t.taxTopics}</th><th>{t.taxQuestions}</th></tr></thead>
        <tbody>
          {subjects.map(s => (
            <Fragment key={s.id}>
              <tr className="tax-subject-row" onClick={() => setOpen(open === s.id ? null : s.id)}>
                <td className="q-subject">{s.code}</td>
                <td className="td-bn">{s.name_bn || '—'}</td>
                <td>{s.name_en}</td>
                <td>{s.category === 'technical' ? t.taxTechnical : t.taxGeneral}</td>
                <td className="td-num">{s.chapter_number ?? '—'}</td>
                <td className="td-num">{s.topic_count}</td>
                <td className="td-num">{s.published_count} / {s.question_count}</td>
              </tr>
              {open === s.id && (
                <tr className="tax-topics-row">
                  <td colSpan={7}>
                    <ul className="tax-topics">
                      {topics.map(tp => (
                        <li key={tp.id}>
                          <span>{(language === 'bn' && tp.name_bn) || tp.name_en}</span>
                          <span className="q-sub">{tp.question_count} {t.taxQuestions}</span>
                          <button className="admin-action-btn sm danger" onClick={() => removeTopic(tp.id)}>{t.adminDelete}</button>
                        </li>
                      ))}
                    </ul>
                    <div className="tax-inline-form">
                      <input placeholder={t.taxNameEn} value={newTopic.name_en} onChange={e => setNewTopic(v => ({ ...v, name_en: e.target.value }))} />
                      <input placeholder={t.taxNameBn} value={newTopic.name_bn} onChange={e => setNewTopic(v => ({ ...v, name_bn: e.target.value }))} />
                      <button className="admin-action-btn sm primary" disabled={!newTopic.name_en.trim()} onClick={() => addTopic(s.id)}>{t.taxAddTopic}</button>
                    </div>
                  </td>
                </tr>
              )}
            </Fragment>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function ExamsTab({ language, onError }: { language: Language; onError: (e: unknown) => void }) {
  const t = translations[language]
  const [tags, setTags] = useState<ApiExamTag[]>([])
  const [form, setForm] = useState({ organization: '', post_en: '', post_bn: '', year: String(new Date().getFullYear()) })
  useEffect(() => { examApi.examTags.list().then(setTags).catch(onError) }, []) // eslint-disable-line react-hooks/exhaustive-deps

  async function add() {
    try {
      const created = await examApi.examTags.create({ organization: form.organization, post_en: form.post_en, post_bn: form.post_bn || null, year: Number(form.year) })
      setTags(ts => [created, ...ts]); setForm(f => ({ ...f, post_en: '', post_bn: '' }))
    } catch (e) { onError(e) }
  }
  async function remove(id: string) {
    if (!confirm(t.adminConfirmDelete)) return
    try { await examApi.examTags.delete(id); setTags(ts => ts.filter(x => x.id !== id)) } catch (e) { onError(e) }
  }

  return (
    <div className="tax-section">
      <div className="tax-inline-form">
        <input placeholder={t.taxOrganization} value={form.organization} onChange={e => setForm(f => ({ ...f, organization: e.target.value }))} />
        <input placeholder={t.taxPostEn} value={form.post_en} onChange={e => setForm(f => ({ ...f, post_en: e.target.value }))} />
        <input placeholder={t.taxPostBn} value={form.post_bn} onChange={e => setForm(f => ({ ...f, post_bn: e.target.value }))} />
        <input type="number" className="tax-year" placeholder={t.taxYear} value={form.year} onChange={e => setForm(f => ({ ...f, year: e.target.value }))} />
        <button className="admin-action-btn sm primary" disabled={!form.organization.trim() || !form.post_en.trim()} onClick={add}>+ {t.adminAdd}</button>
      </div>
      <div className="admin-data-table-container">
        <table className="admin-data-table">
          <thead><tr><th>{t.taxYear}</th><th>{t.taxOrganization}</th><th>{t.taxPostEn}</th><th>{t.taxQuestions}</th><th>{t.adminActions}</th></tr></thead>
          <tbody>
            {tags.map(tag => (
              <tr key={tag.id}>
                <td className="td-num">{tag.year}</td><td>{tag.organization}</td><td>{(language === 'bn' && tag.post_bn) || tag.post_en}</td>
                <td className="td-num">{tag.question_count}</td>
                <td className="td-actions"><button className="admin-action-btn sm danger" onClick={() => remove(tag.id)}>{t.adminDelete}</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

function PostsTab({ language, subjects, onError }: { language: Language; subjects: ApiSubject[]; onError: (e: unknown) => void }) {
  const t = translations[language]
  const [posts, setPosts] = useState<ApiJobPost[]>([])
  const [current, setCurrent] = useState<ApiJobPost | null>(null)
  const [rows, setRows] = useState<{ subject_id: string; percent: string }[]>([])
  const [saved, setSaved] = useState(false)
  useEffect(() => { examApi.jobPosts.list().then(setPosts).catch(onError) }, []) // eslint-disable-line react-hooks/exhaustive-deps

  function select(p: ApiJobPost) {
    setCurrent(p); setSaved(false)
    setRows(p.weights.map(w => ({ subject_id: w.subject_id, percent: String(Math.round(w.weight * 1000) / 10) })))
  }
  const total = Math.round(rows.reduce((s, r) => s + (Number(r.percent) || 0), 0) * 10) / 10

  async function saveDetails() {
    if (!current) return
    try {
      const updated = await examApi.jobPosts.update(current.id, current)
      setPosts(ps => ps.map(p => (p.id === updated.id ? updated : p))); setCurrent(updated); setSaved(true)
    } catch (e) { onError(e) }
  }
  async function saveWeights() {
    if (!current) return
    try {
      const updated = await examApi.jobPosts.setWeights(current.id, rows.filter(r => r.subject_id).map(r => ({ subject_id: r.subject_id, weight: (Number(r.percent) || 0) / 100 })))
      setPosts(ps => ps.map(p => (p.id === updated.id ? updated : p))); select(updated); setSaved(true)
    } catch (e) { setSaved(false); onError(e) }
  }

  return (
    <div className="tax-posts">
      <ul className="tax-post-list">
        {posts.map(p => (
          <li key={p.id}>
            <button className={`tax-post${current?.id === p.id ? ' on' : ''}`} onClick={() => select(p)}>
              <strong>{p.organization}</strong>
              <span>{(language === 'bn' && p.title_bn) || p.title_en}</span>
              <span className={`q-status ${p.is_published ? 'on' : 'off'}`}>{p.is_published ? t.qPublished : t.qDraft}</span>
            </button>
          </li>
        ))}
      </ul>
      {current && (
        <div className="tax-post-detail">
          <p className="tax-note">{t.taxPlaceholderNote}</p>
          <div className="form-grid">
            <label>{t.taxOrganization}<input value={current.organization} onChange={e => setCurrent({ ...current, organization: e.target.value })} /></label>
            <label>{t.taxPostEn}<input value={current.title_en} onChange={e => setCurrent({ ...current, title_en: e.target.value })} /></label>
            <label>{t.taxPostBn}<input value={current.title_bn ?? ''} onChange={e => setCurrent({ ...current, title_bn: e.target.value })} /></label>
            <label className="qe-publish"><input type="checkbox" checked={current.is_published} onChange={e => setCurrent({ ...current, is_published: e.target.checked })} /> {t.qPublished}</label>
            <label className="full-width">{t.taxExamPatternEn}<textarea value={current.exam_pattern_en ?? ''} onChange={e => setCurrent({ ...current, exam_pattern_en: e.target.value })} /></label>
            <label className="full-width">{t.taxExamPatternBn}<textarea value={current.exam_pattern_bn ?? ''} onChange={e => setCurrent({ ...current, exam_pattern_bn: e.target.value })} /></label>
          </div>
          <div className="form-actions"><button className="admin-action-btn primary" onClick={saveDetails}>{t.adminSave}</button></div>

          <h4 className="tax-h">{t.taxWeights}</h4>
          {rows.map((r, i) => (
            <div key={i} className="tax-weight-row">
              <select value={r.subject_id} onChange={e => setRows(rs => rs.map((x, j) => (j === i ? { ...x, subject_id: e.target.value } : x)))}>
                <option value="">—</option>
                {subjects.map(s => <option key={s.id} value={s.id}>{s.code} — {(language === 'bn' && s.name_bn) || s.name_en}</option>)}
              </select>
              <input type="number" min={0} max={100} step={0.5} value={r.percent} onChange={e => setRows(rs => rs.map((x, j) => (j === i ? { ...x, percent: e.target.value } : x)))} />
              <span>%</span>
              <button className="admin-action-btn sm" onClick={() => setRows(rs => rs.filter((_, j) => j !== i))}>{t.qRemove}</button>
            </div>
          ))}
          <div className="tax-weight-foot">
            <button className="admin-action-btn sm" onClick={() => setRows(rs => [...rs, { subject_id: '', percent: '0' }])}>{t.taxAddWeight}</button>
            <span className={`tax-weight-total${Math.abs(total - 100) < 0.05 ? ' ok' : ' bad'}`}>{t.taxWeightTotal}: {total}%</span>
            <button className="admin-action-btn primary" onClick={saveWeights}>{t.taxSaveWeights}</button>
            {saved && <span className="q-status on">{t.qSaved}</span>}
          </div>
        </div>
      )}
    </div>
  )
}

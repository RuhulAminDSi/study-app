import { useCallback, useEffect, useState } from 'react'
import type { Language } from '../types'
import { translations } from '../data/translations'
import { examApi, type ApiQuestionListItem, type ApiSubject, type QuestionList } from './examApi'
import { adminErrorText } from './adminErrors'
import { AdminApiError } from './api'
import QuestionEditor from './QuestionEditor'

const PAGE_SIZE = 25

export default function AdminQuestions({ language }: { language: Language }) {
  const t = translations[language]
  const [subjects, setSubjects] = useState<ApiSubject[]>([])
  const [filters, setFilters] = useState({ subject_id: '', type: '', published: '', q: '' })
  const [page, setPage] = useState(1)
  const [data, setData] = useState<QuestionList | null>(null)
  const [selected, setSelected] = useState<Set<string>>(new Set())
  const [editing, setEditing] = useState<string | 'new' | null>(null)
  const [error, setError] = useState('')
  const [reloadKey, setReloadKey] = useState(0)

  useEffect(() => { examApi.subjects.list().then(setSubjects).catch(() => {}) }, [])

  const load = useCallback(() => {
    examApi.questions.list({ ...filters, page, pageSize: PAGE_SIZE })
      .then(d => {
        // Publishing or deleting the last rows of the last page: step back to a page that has rows.
        if (d.items.length === 0 && d.total > 0 && page > 1) { setPage(Math.ceil(d.total / PAGE_SIZE)); return }
        setData(d); setSelected(new Set()); setError('')
      })
      .catch(e => setError(e instanceof AdminApiError ? adminErrorText(t, e.code, e.message) : String(e)))
  }, [filters, page, t])

  useEffect(() => {
    const timer = setTimeout(load, filters.q ? 300 : 0) // debounce typing in the search box
    return () => clearTimeout(timer)
  }, [load, reloadKey, filters.q])

  const setFilter = (key: keyof typeof filters, value: string) => { setFilters(f => ({ ...f, [key]: value })); setPage(1) }
  const toggle = (id: string) => setSelected(prev => { const next = new Set(prev); if (next.has(id)) next.delete(id); else next.add(id); return next })
  const allOnPage = data?.items.length ? data.items.every(i => selected.has(i.id)) : false

  async function bulk(published: boolean) {
    try { await examApi.questions.bulkPublish([...selected], published); setReloadKey(k => k + 1) }
    catch (e) { setError(e instanceof AdminApiError ? adminErrorText(t, e.code, e.message) : String(e)) }
  }

  async function remove(item: ApiQuestionListItem) {
    if (!confirm(t.adminConfirmDelete)) return
    try { await examApi.questions.delete(item.id); setReloadKey(k => k + 1) }
    catch (e) { setError(e instanceof AdminApiError ? adminErrorText(t, e.code, e.message) : String(e)) }
  }

  if (editing) {
    return <QuestionEditor language={language} questionId={editing === 'new' ? null : editing}
      subjects={subjects} onClose={changed => { setEditing(null); if (changed) setReloadKey(k => k + 1) }} />
  }

  const subjectName = (s: ApiSubject) => `${s.code} — ${(language === 'bn' && s.name_bn) || s.name_en}`
  const typeLabel = { mcq: t.qTypeMcq, written: t.qTypeWritten, programming: t.qTypeProgramming }
  const sourceLabel = { original: t.qSourceOriginal, past_paper: t.qSourcePastPaper, imported: t.qSourceImported }
  const totalPages = data ? Math.max(1, Math.ceil(data.total / PAGE_SIZE)) : 1

  return (
    <div className="q-screen">
      {error && <div className="admin-error q-banner" role="alert" onClick={() => setError('')}>{error} ✕</div>}
      <div className="table-toolbar q-toolbar">
        <input id="q-search" className="search-input" placeholder={t.qSearchPlaceholder} value={filters.q} onChange={e => setFilter('q', e.target.value)} />
        <select id="q-filter-subject" value={filters.subject_id} onChange={e => setFilter('subject_id', e.target.value)}>
          <option value="">{t.qAllSubjects}</option>
          {subjects.map(s => <option key={s.id} value={s.id}>{subjectName(s)}</option>)}
        </select>
        <select id="q-filter-type" value={filters.type} onChange={e => setFilter('type', e.target.value)}>
          <option value="">{t.qAllTypes}</option>
          <option value="mcq">{t.qTypeMcq}</option>
          <option value="written">{t.qTypeWritten}</option>
          <option value="programming">{t.qTypeProgramming}</option>
        </select>
        <select id="q-filter-status" value={filters.published} onChange={e => setFilter('published', e.target.value)}>
          <option value="">{t.qAnyStatus}</option>
          <option value="true">{t.qPublished}</option>
          <option value="false">{t.qDraft}</option>
        </select>
        <button className="admin-action-btn primary" onClick={() => setEditing('new')}>+ {t.qNew}</button>
      </div>

      {selected.size > 0 && (
        <div className="q-bulkbar">
          <span>{selected.size} {t.qSelected}</span>
          <button className="admin-action-btn sm primary" onClick={() => bulk(true)}>{t.qPublishSelected}</button>
          <button className="admin-action-btn sm" onClick={() => bulk(false)}>{t.qUnpublishSelected}</button>
        </div>
      )}

      <div className="admin-data-table-container">
        <table className="admin-data-table q-table">
          <thead>
            <tr>
              <th className="q-check"><input type="checkbox" aria-label="select page" checked={allOnPage}
                onChange={() => setSelected(allOnPage ? new Set() : new Set(data?.items.map(i => i.id)))} /></th>
              <th>{t.qSubject}</th>
              <th>{t.qStemEn}</th>
              <th>{t.qType}</th>
              <th>{t.qStatus}</th>
              <th>{t.adminActions}</th>
            </tr>
          </thead>
          <tbody>
            {data?.items.map(item => (
              <tr key={item.id}>
                <td className="q-check"><input type="checkbox" aria-label="select" checked={selected.has(item.id)} onChange={() => toggle(item.id)} /></td>
                <td className="q-subject">{item.subject_code}</td>
                <td className="q-stem">
                  <button className="q-stem-link" onClick={() => setEditing(item.id)}>{(language === 'bn' && item.stem_bn) || item.stem_en}</button>
                  <span className="q-sub">{[item.topic_name, sourceLabel[item.source]].filter(Boolean).join(' · ')}</span>
                </td>
                <td>{typeLabel[item.type]} · {[t.qEasy, t.qMedium, t.qHard][item.difficulty - 1]}</td>
                <td><span className={`q-status ${item.is_published ? 'on' : 'off'}`}>{item.is_published ? t.qPublished : t.qDraft}</span></td>
                <td className="td-actions">
                  <button className="admin-action-btn sm" onClick={() => setEditing(item.id)}>{t.adminEdit}</button>
                  <button className="admin-action-btn sm danger" onClick={() => remove(item)}>{t.adminDelete}</button>
                </td>
              </tr>
            ))}
            {data && data.items.length === 0 && <tr><td colSpan={6} className="q-empty">{t.qNoQuestions}</td></tr>}
          </tbody>
        </table>
      </div>

      {data && totalPages > 1 && (
        <div className="pagination">
          <span className="page-info">{language === 'bn' ? `মোট ${data.total}টি` : `${data.total} total`}</span>
          <div className="page-btns">
            <button disabled={page === 1} onClick={() => setPage(1)}>«</button>
            <button disabled={page === 1} onClick={() => setPage(p => p - 1)}>‹</button>
            <span className="page-num">{page}/{totalPages}</span>
            <button disabled={page >= totalPages} onClick={() => setPage(p => p + 1)}>›</button>
            <button disabled={page >= totalPages} onClick={() => setPage(totalPages)}>»</button>
          </div>
        </div>
      )}
    </div>
  )
}

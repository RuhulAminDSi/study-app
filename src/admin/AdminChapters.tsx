import { useState, useEffect } from 'react'
import { api, type ApiChapter } from './api'
import type { Language } from '../types'
import { translations } from '../data/translations'
import { useDataTable } from './useDataTable'
import Modal from './Modal'

interface AdminChaptersProps { language: Language }

type FormData = { chapter_number: number; title_en: string; title_bn: string; level: string; description: string }

const emptyForm = (): FormData => ({ chapter_number: 0, title_en: '', title_bn: '', level: 'Beginner', description: '' })

export default function AdminChapters({ language }: AdminChaptersProps) {
  const t = translations[language]
  const [chapters, setChapters] = useState<ApiChapter[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [modal, setModal] = useState<{ mode: 'create' | 'edit'; id?: string } | null>(null)
  const [form, setForm] = useState<FormData>(emptyForm())
  const [saving, setSaving] = useState(false)

  const tbl = useDataTable(chapters, { defaultSort: 'chapter_number', pageSize: 10 })

  useEffect(() => {
    api.chapters.list()
      .then(setChapters)
      .catch(e => setError(e.message))
      .finally(() => setLoading(false))
  }, [])

  function openCreate() { setForm({ ...emptyForm(), chapter_number: Math.max(0, ...chapters.map(c => c.chapter_number)) + 1 }); setModal({ mode: 'create' }) }
  function openEdit(ch: ApiChapter) { setForm({ chapter_number: ch.chapter_number, title_en: ch.title_en, title_bn: ch.title_bn || '', level: ch.level, description: ch.description || '' }); setModal({ mode: 'edit', id: ch.id }) }

  async function handleSave() {
    setSaving(true)
    try {
      if (modal?.mode === 'create') {
        const created = await api.chapters.create({ ...form, is_published: false, sort_order: form.chapter_number })
        setChapters(prev => [...prev, created])
      } else if (modal?.mode === 'edit' && modal.id) {
        const updated = await api.chapters.update(modal.id, form)
        setChapters(prev => prev.map(c => c.id === modal.id ? updated : c))
      }
      setModal(null)
    } catch (e: any) { setError(e.message) } finally { setSaving(false) }
  }

  async function handleDelete(id: string) {
    if (!confirm(t.adminConfirmDelete)) return
    try { await api.chapters.delete(id); setChapters(prev => prev.filter(c => c.id !== id)) }
    catch (e: any) { setError(e.message) }
  }

  if (loading) return <div className="admin-loading">{t.adminLoading}</div>
  if (error) return <div className="admin-error">{error}</div>

  return (
    <div>
      <div className="table-toolbar">
        <input className="search-input" placeholder={t.adminSearch} value={tbl.search} onChange={e => tbl.setSearch(e.target.value)} />
        <button className="admin-action-btn primary" onClick={openCreate}>+ {t.adminAdd}</button>
      </div>
      <div className="admin-data-table-container">
        <table className="admin-data-table">
          <thead>
            <tr>
              <Th tbl={tbl} k="chapter_number" label="#" />
              <Th tbl={tbl} k="title_bn" label={t.adminTitleBn} />
              <Th tbl={tbl} k="title_en" label={t.adminTitleEn} />
              <th>{t.adminActions}</th>
            </tr>
          </thead>
          <tbody>
            {tbl.paged.map(ch => {
              return (
                <tr key={ch.id}>
                  <td className="td-num">{ch.chapter_number}</td>
                  <td className="td-bn">{ch.title_bn || '—'}</td>
                  <td>{ch.title_en}</td>
                  <td className="td-actions">
                    <button className="admin-action-btn sm" onClick={() => openEdit(ch)}>{t.adminEdit}</button>
                    <button className="admin-action-btn sm" onClick={() => api.chapters.togglePublish(ch.id).then(() => setChapters(prev => prev.map(c => c.id === ch.id ? { ...c, is_published: !c.is_published } : c)))}>
                      {ch.is_published ? t.adminUnpub : t.adminPub}
                    </button>
                    <button className="admin-action-btn sm danger" onClick={() => handleDelete(ch.id)}>{t.adminDelete}</button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
      <Pagination tbl={tbl} language={language} />
      <Modal open={!!modal} onClose={() => setModal(null)} title={modal?.mode === 'create' ? t.adminNewChapter : t.adminEditChapter}>
        <div className="form-grid">
          <label>{t.adminNumber}<input type="number" value={form.chapter_number} onChange={e => setForm(f => ({ ...f, chapter_number: +e.target.value }))} /></label>
          <label>{t.adminTitleBn}<input value={form.title_bn} onChange={e => setForm(f => ({ ...f, title_bn: e.target.value }))} /></label>
          <label>{t.adminTitleEn}<input value={form.title_en} onChange={e => setForm(f => ({ ...f, title_en: e.target.value }))} /></label>
          <label>{t.adminLevel}
            <select value={form.level} onChange={e => setForm(f => ({ ...f, level: e.target.value }))}>
              <option>Beginner</option><option>Intermediate</option><option>Advanced</option>
            </select>
          </label>
          <label className="full-width">{t.adminDescription}<textarea value={form.description} onChange={e => setForm(f => ({ ...f, description: e.target.value }))} /></label>
        </div>
        <div className="form-actions">
          <button className="admin-action-btn" onClick={() => setModal(null)}>{t.adminCancel}</button>
          <button className="admin-action-btn primary" onClick={handleSave} disabled={saving}>{saving ? '...' : t.adminSave}</button>
        </div>
      </Modal>
    </div>
  )
}

function Th({ tbl, k, label }: { tbl: ReturnType<typeof useDataTable>; k: string; label: string }) {
  const active = tbl.sort.key === k
  return <th className={`sortable ${active ? 'sorted' : ''}`} onClick={() => tbl.toggleSort(k)}>
    {label} {active ? (tbl.sort.dir === 'asc' ? '▲' : '▼') : '⇅'}
  </th>
}

function Pagination({ tbl, language }: { tbl: ReturnType<typeof useDataTable>; language: Language }) {
  if (tbl.totalPages <= 1) return null
  return <div className="pagination">
    <span className="page-info">{language === 'bn' ? `মোট ${tbl.total}টি` : `${tbl.total} total`}</span>
    <div className="page-btns">
      <button disabled={tbl.page === 0} onClick={() => tbl.goPage(0)}>«</button>
      <button disabled={tbl.page === 0} onClick={() => tbl.goPage(tbl.page - 1)}>‹</button>
      <span className="page-num">{tbl.page + 1}/{tbl.totalPages}</span>
      <button disabled={tbl.page >= tbl.totalPages - 1} onClick={() => tbl.goPage(tbl.page + 1)}>›</button>
      <button disabled={tbl.page >= tbl.totalPages - 1} onClick={() => tbl.goPage(tbl.totalPages - 1)}>»</button>
    </div>
  </div>
}

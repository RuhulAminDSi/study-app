import { useState, useEffect, useMemo } from 'react'
import { api, type ApiLesson, type ApiSideMenu, type ApiChapter } from './api'
import type { Language } from '../types'
import { translations } from '../data/translations'
import { useDataTable } from './useDataTable'
import Modal from './Modal'

interface AdminLessonsProps { language: Language }

export default function AdminLessons({ language }: AdminLessonsProps) {
  const t = translations[language]
  const [chapters, setChapters] = useState<ApiChapter[]>([])
  const [menus, setMenus] = useState<ApiSideMenu[]>([])
  const [lessons, setLessons] = useState<ApiLesson[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [preview, setPreview] = useState<ApiLesson | null>(null)
  const [editTitle, setEditTitle] = useState<ApiLesson | null>(null)
  const [titleEn, setTitleEn] = useState('')
  const [titleBn, setTitleBn] = useState('')
  const [saving, setSaving] = useState(false)
  const [creating, setCreating] = useState(false)
  const [createForm, setCreateForm] = useState({ chapter_id: '', title_en: '', title_bn: '', level: 'Beginner' })
  const [view, setView] = useState<'all' | 'chapter'>('all')
  const [menuFilter, setMenuFilter] = useState('')
  const [chapterFilter, setChapterFilter] = useState('')
  const [expanded, setExpanded] = useState<string | null>(null)

  useEffect(() => {
    Promise.all([api.chapters.list(), api.menus.list(), api.lessons.list()])
      .then(([ch, me, le]) => { setChapters(ch); setMenus(me); setLessons(le) })
      .catch(() => {})
      .finally(() => setLoading(false))
  }, [])

  const menuMap = new Map(menus.map(m => [m.id, m]))
  const chapterMap = new Map(chapters.map(c => [c.id, c]))

  const filteredByMenu = useMemo(() => {
    let list = lessons
    if (menuFilter) list = list.filter(l => l.side_menu_id === menuFilter)
    return [...list].sort((a, b) => {
      const ma = menuMap.get(a.side_menu_id)
      const mb = menuMap.get(b.side_menu_id)
      const ca = ma ? chapterMap.get(ma.chapter_id) : undefined
      const cb = mb ? chapterMap.get(mb.chapter_id) : undefined
      const chDiff = (ca?.chapter_number ?? 0) - (cb?.chapter_number ?? 0)
      return chDiff !== 0 ? chDiff : a.lesson_number - b.lesson_number
    })
  }, [lessons, menuFilter, menuMap, chapterMap])

  const tbl = useDataTable(filteredByMenu, { pageSize: 15 })

  async function handleDelete(id: string) {
    if (!confirm(t.adminConfirmDelete)) return
    try { await api.lessons.delete(id); setLessons(prev => prev.filter(l => l.id !== id)) }
    catch (e: any) { setError(e.message) }
  }

  function openEditTitle(l: ApiLesson) {
    setTitleEn(l.title_en); setTitleBn(l.title_bn || ''); setEditTitle(l)
  }

  async function saveTitle() {
    if (!editTitle) return
    setSaving(true)
    try {
      const updated = await api.lessons.update(editTitle.id, { title_en: titleEn, title_bn: titleBn || null } as any)
      setLessons(prev => prev.map(l => l.id === editTitle.id ? updated : l))
      setEditTitle(null)
    } catch (e: any) { setError(e.message) } finally { setSaving(false) }
  }

  function openCreate() {
    setCreateForm({ chapter_id: '', title_en: '', title_bn: '', level: 'Beginner' })
    setCreating(true)
  }

  async function handleCreate() {
    if (!createForm.chapter_id || !createForm.title_en) { setError('Title and chapter are required'); return }
    const menu = menus.find(m => m.chapter_id === createForm.chapter_id)
    if (!menu) { setError('No menu found for this chapter'); return }
    setSaving(true)
    try {
      const created = await api.lessons.create({
        side_menu_id: menu.id,
        title_en: createForm.title_en,
        title_bn: createForm.title_bn || null,
        level: createForm.level,
      })
      setLessons(prev => [...prev, created])
      setCreating(false)
    } catch (e: any) { setError(e.message) } finally { setSaving(false) }
  }

  function toggleChapter(id: string) {
    setExpanded(prev => prev === id ? null : id)
  }

  async function togglePublish(id: string) {
    try {
      const updated = await api.lessons.togglePublish(id)
      setLessons(prev => prev.map(l => l.id === id ? updated : l))
    } catch (e: any) { setError(e.message) }
  }

  async function moveLesson(id: string, dir: -1 | 1) {
    const l = lessons.find(x => x.id === id)
    if (!l) return
    const siblings = lessons.filter(x => x.side_menu_id === l.side_menu_id).sort((a, b) => a.lesson_number - b.lesson_number)
    const idx = siblings.findIndex(x => x.id === id)
    const swap = siblings[idx + dir]
    if (!swap) return
    try {
      const [a, b] = await api.lessons.swapOrder(id, swap.id)
      setLessons(prev => prev.map(x => x.id === a.id ? a : x.id === b.id ? b : x))
    } catch (e: any) { setError(e.message) }
  }

  if (loading) return <div className="admin-loading">{t.adminLoading}</div>

  return (
    <div>
      {error && <div className="admin-error" style={{ marginBottom: 8, cursor: 'pointer' }} onClick={() => setError('')}>{error} ✕</div>}
      <div className="table-toolbar">
        <select className="search-input" style={{ maxWidth: 300 }} value={menuFilter} onChange={e => setMenuFilter(e.target.value)}>
          <option value="">{t.adminAllMenus}</option>
          {chapters.map(ch =>
            <optgroup key={ch.id} label={language === 'bn' && ch.title_bn ? ch.title_bn : ch.title_en}>
              {menus.filter(m => m.chapter_id === ch.id).map(m =>
                <option key={m.id} value={m.id}>{language === 'bn' && m.label_bn ? m.label_bn : m.label_en}</option>
              )}
            </optgroup>
          )}
        </select>
        <div className="view-toggle">
          <button className={`toggle-btn ${view === 'all' ? 'active' : ''}`} onClick={() => setView('all')}>{t.adminAll}</button>
          <button className={`toggle-btn ${view === 'chapter' ? 'active' : ''}`} onClick={() => setView('chapter')}>{t.adminChapter}</button>
        </div>
        <button className="admin-action-btn primary" onClick={openCreate}>+ {t.adminAdd}</button>
        {view === 'chapter' && (
          <select className="search-input" style={{ maxWidth: 200 }} value={chapterFilter} onChange={e => { setChapterFilter(e.target.value); setMenuFilter(''); setExpanded(e.target.value); }}>
            <option value="">{t.adminAllChapters}</option>
            {chapters.map(ch =>
              <option key={ch.id} value={ch.id}>{language === 'bn' && ch.title_bn ? ch.title_bn : ch.title_en}</option>
            )}
          </select>
        )}
      </div>

      {view === 'all' ? (
        <>
          <div className="admin-data-table-container">
            <table className="admin-data-table">
              <thead>
                <tr>
                  <Th tbl={tbl} k="lesson_number" label="#" />
                  <th>{t.adminBengali}</th>
                  <Th tbl={tbl} k="title_en" label={t.adminTitle} />
                  <th>{t.adminChapter}</th>
                  <th>{t.adminActions}</th>
                </tr>
              </thead>
              <tbody>
                {tbl.paged.map(l => {
                  const m = menuMap.get(l.side_menu_id)
                  const ch = m ? chapterMap.get(m.chapter_id) : undefined
                  return (
                    <tr key={l.id}>
                      <td className="td-num">{l.lesson_number}</td>
                      <td className="td-bn">{l.title_bn || '—'}</td>
                      <td><strong>{l.title_en}</strong></td>
                      <td>{language === 'bn' && ch?.title_bn ? ch.title_bn : ch?.title_en || '—'}</td>
                      <td className="td-actions">
                        <button className="admin-action-btn sm" onClick={() => openEditTitle(l)}>{t.adminTitle}</button>
                        <button className="admin-action-btn sm" onClick={() => setPreview(l)}>{t.adminView}</button>
                        <button className={`admin-action-btn sm ${l.is_published ? '' : 'danger'}`} onClick={() => togglePublish(l.id)}>{l.is_published ? t.adminUnpub : t.adminPub}</button>
                        <button className="admin-action-btn sm danger" onClick={() => handleDelete(l.id)}>{t.adminDelete}</button>
                        <button className="admin-action-btn sm order-btn" onClick={() => moveLesson(l.id, -1)}>▲</button>
                        <button className="admin-action-btn sm order-btn" onClick={() => moveLesson(l.id, 1)}>▼</button>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
          <Pagination tbl={tbl} language={language} />
        </>
      ) : (
        <div className="admin-data-table-container">
          {chapters.filter(ch => {
            if (chapterFilter && ch.id !== chapterFilter) return false
            if (!menuFilter) return true
            return menus.some(m => m.chapter_id === ch.id && m.id === menuFilter)
          }).map(ch => {
            const chMenus = menus.filter(m => m.chapter_id === ch.id && (!menuFilter || m.id === menuFilter))
            const chLessonCount = lessons.filter(l => chMenus.some(m => m.id === l.side_menu_id)).length
            const isOpen = expanded === ch.id
            return (
              <div key={ch.id} className="chapter-lesson-group">
                <div className="ch-row" onClick={() => toggleChapter(ch.id)}>
                  <span className={`expand-icon ${isOpen ? 'open' : ''}`}>▶</span>
                  <span className="ch-badge">{ch.chapter_number}</span>
                  <strong>{language === 'bn' && ch.title_bn ? ch.title_bn : ch.title_en}</strong>
                  <span className="count-badge">{chLessonCount}</span>
                </div>
                {isOpen && chMenus.map(sm => {
                  const smLessons = lessons.filter(l => l.side_menu_id === sm.id).sort((a, b) => a.lesson_number - b.lesson_number)
                  if (smLessons.length === 0) return null
                  return (
                    <div key={sm.id} className="sm-group">
                      <div className="sm-label">{language === 'bn' && sm.label_bn ? sm.label_bn : sm.label_en} <span className="count-badge sm-count">{smLessons.length}</span></div>
                      <div className="lesson-sub-table-wrapper">
                      <table className="lesson-sub-table">
                        <tbody>
                          {smLessons.map(l => (
                            <tr key={l.id}>
                              <td className="td-num">{l.lesson_number}</td>
                              <td className="td-bn">{l.title_bn || '—'}</td>
                              <td><strong>{l.title_en}</strong></td>
                              <td className="td-actions">
                                <button className="admin-action-btn sm" onClick={() => openEditTitle(l)}>{t.adminTitle}</button>
                                <button className={`admin-action-btn sm ${l.is_published ? '' : 'danger'}`} onClick={() => togglePublish(l.id)}>{l.is_published ? t.adminUnpub : t.adminPub}</button>
                                <button className="admin-action-btn sm danger" onClick={() => handleDelete(l.id)}>{t.adminDelete}</button>
                                <button className="admin-action-btn sm order-btn" onClick={() => moveLesson(l.id, -1)}>▲</button>
                                <button className="admin-action-btn sm order-btn" onClick={() => moveLesson(l.id, 1)}>▼</button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                      </div>
                    </div>
                  )
                })}
              </div>
            )
          })}
        </div>
      )}

      <Modal open={creating} onClose={() => setCreating(false)} title={t.adminNewLesson}>
        <div className="form-grid">
          <label>{t.adminTitleEn}<input value={createForm.title_en} onChange={e => setCreateForm(f => ({ ...f, title_en: e.target.value }))} /></label>
          <label>{t.adminTitleBn}<input value={createForm.title_bn} onChange={e => setCreateForm(f => ({ ...f, title_bn: e.target.value }))} /></label>
          <label>{t.adminLevel}
            <select value={createForm.level} onChange={e => setCreateForm(f => ({ ...f, level: e.target.value }))}>
              <option>Beginner</option><option>Intermediate</option><option>Advanced</option>
            </select>
          </label>
          <label>{t.adminChapter}
            <select value={createForm.chapter_id} onChange={e => setCreateForm(f => ({ ...f, chapter_id: e.target.value }))}>
              <option value="">—</option>
              {chapters.map(ch =>
                <option key={ch.id} value={ch.id}>{language === 'bn' && ch.title_bn ? ch.title_bn : ch.title_en}</option>
              )}
            </select>
          </label>
        </div>
        <div className="form-actions">
          <button className="admin-action-btn" onClick={() => setCreating(false)}>{t.adminCancel}</button>
          <button className="admin-action-btn primary" onClick={handleCreate} disabled={saving}>{saving ? '...' : t.adminCreate}</button>
        </div>
      </Modal>

      <Modal open={!!editTitle} onClose={() => setEditTitle(null)} title={t.adminEditTitle}>
        <div className="form-grid">
          <label>{t.adminTitleEn}<input value={titleEn} onChange={e => setTitleEn(e.target.value)} /></label>
          <label>{t.adminTitleBn}<input value={titleBn} onChange={e => setTitleBn(e.target.value)} /></label>
        </div>
        <div className="form-actions">
          <button className="admin-action-btn" onClick={() => setEditTitle(null)}>{t.adminCancel}</button>
          <button className="admin-action-btn primary" onClick={saveTitle} disabled={saving}>{saving ? '...' : t.adminSave}</button>
        </div>
      </Modal>

      <Modal open={!!preview} onClose={() => setPreview(null)} title={preview ? (language === 'bn' && preview.title_bn ? preview.title_bn : preview.title_en) : ''} wide>
        {preview && (
          <div>
            <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1rem' }}>
              <span className={`level-badge level-${preview.level.toLowerCase()}`}>{preview.level}</span>
              <span className={`status-dot ${preview.is_published ? 'active' : ''}`} />
              <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>{t.lesson} #{preview.lesson_number}</span>
            </div>
            <div className="admin-preview-content">
              <h4>{t.adminContentEn}</h4><pre>{preview.content_en}</pre>
              {preview.content_bn && <><h4>{t.adminContentBn}</h4><pre>{preview.content_bn}</pre></>}
              {preview.code_en && <><h4>{t.adminCode}</h4><pre className="admin-code-block">{preview.code_en}</pre></>}
              <h4>{t.keyTakeaways}</h4>
              <ul>{(preview.takeaways_en || []).map((t, i) => <li key={i}>{t}</li>)}</ul>
              {preview.takeaways_bn?.length ? <><h4>{t.adminTakeawaysBn}</h4><ul>{preview.takeaways_bn.map((t, i) => <li key={i}>{t}</li>)}</ul></> : null}
            </div>
          </div>
        )}
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

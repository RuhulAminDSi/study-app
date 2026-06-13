import { useState, useEffect, useMemo, Fragment } from 'react'
import { api, type ApiChapter, type ApiLesson, type ApiSideMenu } from './api'
import type { Language } from '../types'
import { translations } from '../data/translations'
import { useDataTable } from './useDataTable'
import Modal from './Modal'
import ContentEditor from './ContentEditor'

interface AdminContentProps { language: Language }

export default function AdminContent({ language }: AdminContentProps) {
  const t = translations[language]
  const [chapters, setChapters] = useState<ApiChapter[]>([])
  const [menus, setMenus] = useState<ApiSideMenu[]>([])
  const [lessons, setLessons] = useState<ApiLesson[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [view, setView] = useState<'chapter' | 'lesson' | 'flat'>('chapter')
  const [menuFilter, setMenuFilter] = useState('')
  const [expanded, setExpanded] = useState<string | null>(null)
  const [expandedLesson, setExpandedLesson] = useState<string | null>(null)
  const [preview, setPreview] = useState<ApiLesson | null>(null)
  const [editing, setEditing] = useState<ApiLesson | null>(null)
  const [creatingNew, setCreatingNew] = useState(false)

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

  const tbl = useDataTable(filteredByMenu, { pageSize: 20 })

  function toggleChapter(id: string) {
    setExpanded(prev => prev === id ? null : id)
  }

  function openEdit(l: ApiLesson) {
    setEditing(l)
  }

  async function handleDelete(id: string) {
    if (!confirm(t.adminConfirmDelete)) return
    try { await api.lessons.delete(id); setLessons(prev => prev.filter(l => l.id !== id)) }
    catch (e: any) { setError(e.message) }
  }

  async function togglePublish(id: string) {
    try {
      const updated = await api.lessons.togglePublish(id)
      setLessons(prev => prev.map(l => l.id === id ? updated : l))
    } catch (e: any) { setError(e.message) }
  }

  function contentPreview(l: ApiLesson) {
    return language === 'bn' && l.content_bn ? l.content_bn : l.content_en
  }

  function openCreate() {
    setCreatingNew(true)
  }

  if (loading) return <div className="admin-loading">{t.adminLoading}</div>
  if (creatingNew) return <ContentEditor language={language} onBack={() => { setCreatingNew(false); api.lessons.list().then(setLessons) }} isNew chapters={chapters} menus={menus} lessons={lessons} />
  if (editing) return <ContentEditor lesson={editing} language={language} onBack={() => { setEditing(null); api.lessons.list().then(setLessons) }} chapters={chapters} menus={menus} lessons={lessons} />

  return (
    <div>
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
          <button className={`toggle-btn ${view === 'chapter' ? 'active' : ''}`} onClick={() => setView('chapter')}>{t.adminChapter}</button>
          <button className={`toggle-btn ${view === 'lesson' ? 'active' : ''}`} onClick={() => setView('lesson')}>{t.lesson}</button>
          <button className={`toggle-btn ${view === 'flat' ? 'active' : ''}`} onClick={() => setView('flat')}>{t.adminAll}</button>
        </div>
        <span style={{ fontSize: '0.8rem', color: 'var(--text-dim)', whiteSpace: 'nowrap' }}>
          {filteredByMenu.length}/{lessons.length}
        </span>
        <button className="admin-action-btn primary" onClick={openCreate}>+ {t.adminAdd}</button>
      </div>
      {error && <div className="admin-error" style={{ marginBottom: 8, cursor: 'pointer' }} onClick={() => setError('')}>{error} ✕</div>}

      {view === 'chapter' ? (
        <div className="admin-data-table-container">
          {chapters.filter(ch => {
            if (!menuFilter) return true
            return menus.some(m => m.chapter_id === ch.id && m.id === menuFilter)
          }).map(ch => {
            const chMenus = menus.filter(m => m.chapter_id === ch.id && (!menuFilter || m.id === menuFilter))
            const chLessons = lessons.filter(l => chMenus.some(m => m.id === l.side_menu_id)).sort((a, b) => {
              const ma = menus.find(m => m.id === a.side_menu_id)
              const mb = menus.find(m => m.id === b.side_menu_id)
              const sa = ma?.sort_order ?? 0
              const sb = mb?.sort_order ?? 0
              return sa !== sb ? sa - sb : a.lesson_number - b.lesson_number
            })
            const isOpen = expanded === ch.id
            return (
              <div key={ch.id} className="chapter-lesson-group">
                <div className="ch-row" onClick={() => toggleChapter(ch.id)}>
                  <span className={`expand-icon ${isOpen ? 'open' : ''}`}>▶</span>
                  <span className="ch-badge">{ch.chapter_number}</span>
                  <strong>{language === 'bn' && ch.title_bn ? ch.title_bn : ch.title_en}</strong>
                  <span className="count-badge">{chLessons.length}</span>
                </div>
                {isOpen && (
                  <div className="lesson-sub-table-wrapper">
                  <table className="lesson-sub-table">
                    <tbody>
                      {chLessons.map(l => {
                        const isExpanded = expandedLesson === l.id
                        const sm = menus.find(m => m.id === l.side_menu_id)
                        return (
                          <Fragment key={l.id}>
                            <tr className={`lesson-row ${isExpanded ? 'expanded' : ''}`} onClick={() => setExpandedLesson(isExpanded ? null : l.id)}>
                              <td className="td-num">{l.lesson_number}</td>
                              <td><strong>{l.title_en}</strong></td>
                              <td className="td-bn">{l.title_bn || '—'}</td>
                              <td>{language === 'bn' && sm?.label_bn ? sm.label_bn : sm?.label_en || '—'}</td>
                              <td className="td-actions" onClick={e => e.stopPropagation()}>
                                <button className="admin-action-btn sm" onClick={() => setPreview(l)}>{t.adminView}</button>
                                <button className="admin-action-btn sm" onClick={() => setEditing(l)}>{t.adminSource}</button>
                                <button className="admin-action-btn sm" onClick={() => openEdit(l)}>{t.adminEdit}</button>
                                <button className={`admin-action-btn sm ${l.is_published ? '' : 'danger'}`} onClick={() => togglePublish(l.id)}>{l.is_published ? t.adminUnpub : t.adminPub}</button>
                                <button className="admin-action-btn sm danger" onClick={() => handleDelete(l.id)}>{t.adminDelete}</button>
                              </td>
                            </tr>
                            {isExpanded && (
                              <tr className="content-preview-row">
                          <td colSpan={4}>
                                  <div className="inline-preview">
                                    <div className="inline-preview-text">{contentPreview(l).slice(0, 300)}{contentPreview(l).length > 300 ? '...' : ''}</div>
                                    {contentPreview(l).length > 300 && (
                                      <button className="admin-action-btn sm" onClick={() => setPreview(l)}>{t.adminSeeMore}</button>
                                    )}
                                  </div>
                                </td>
                              </tr>
                            )}
                           </Fragment>
                        )
                      })}
                    </tbody>
                  </table>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      ) : view === 'lesson' ? (
        <>
          <div className="admin-data-table-container">
            <table className="admin-data-table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>{t.adminTitle}</th>
                  <th>{t.adminChapter}</th>
                  <th>{t.adminActions}</th>
                </tr>
              </thead>
              <tbody>
                {tbl.paged.map(l => {
                  const isExpanded = expandedLesson === l.id
                  const m = menuMap.get(l.side_menu_id)
                  const ch = m ? chapterMap.get(m.chapter_id) : undefined
                  return (
                    <Fragment key={l.id}>
                      <tr className={`lesson-row ${isExpanded ? 'expanded' : ''}`} onClick={() => setExpandedLesson(isExpanded ? null : l.id)}>
                        <td className="td-num">{l.lesson_number}</td>
                        <td><strong>{language === 'bn' && l.title_bn ? l.title_bn : l.title_en}</strong></td>
                        <td>{language === 'bn' && ch?.title_bn ? ch.title_bn : ch?.title_en || '—'}</td>
                        <td className="td-actions" onClick={e => e.stopPropagation()}>
                          <button className="admin-action-btn sm" onClick={() => setPreview(l)}>{t.adminView}</button>
                          <button className="admin-action-btn sm" onClick={() => setEditing(l)}>{t.adminSource}</button>
                        </td>
                      </tr>
                      {isExpanded && (
                        <tr className="content-preview-row">
                          <td colSpan={4}>
                            <div className="inline-preview">
                              <div className="inline-preview-text">{contentPreview(l).slice(0, 300)}{contentPreview(l).length > 300 ? '...' : ''}</div>
                              {contentPreview(l).length > 300 && (
                                <button className="admin-action-btn sm" onClick={() => setPreview(l)}>{t.adminSeeMore}</button>
                              )}
                            </div>
                          </td>
                        </tr>
                      )}
                    </Fragment>
                  )
                })}
              </tbody>
            </table>
          </div>
          <Pagination tbl={tbl} language={language} />
        </>
      ) : (
        <>
          <div className="admin-data-table-container">
            <table className="admin-data-table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>{t.adminTitle}</th>
                  <th>{t.adminChapter}</th>
                  <th>{t.adminActions}</th>
                </tr>
              </thead>
              <tbody>
                {tbl.paged.map(l => {
                  const m = menuMap.get(l.side_menu_id)
                  const ch = m ? chapterMap.get(m.chapter_id) : undefined
                  const isExpanded = expandedLesson === l.id
                  return (
                    <Fragment key={l.id}>
                      <tr className={`lesson-row ${isExpanded ? 'expanded' : ''}`} onClick={() => setExpandedLesson(isExpanded ? null : l.id)}>
                        <td className="td-num">{l.lesson_number}</td>
                        <td><strong>{language === 'bn' && l.title_bn ? l.title_bn : l.title_en}</strong></td>
                        <td>{language === 'bn' && ch?.title_bn ? ch.title_bn : ch?.title_en || '—'}</td>
                        <td className="td-actions" onClick={e => e.stopPropagation()}>
                          <button className="admin-action-btn sm" onClick={() => setPreview(l)}>{t.adminView}</button>
                          <button className="admin-action-btn sm" onClick={() => setEditing(l)}>{t.adminSource}</button>
                          <button className="admin-action-btn sm" onClick={() => openEdit(l)}>{t.adminEdit}</button>
                          <button className={`admin-action-btn sm ${l.is_published ? '' : 'danger'}`} onClick={() => togglePublish(l.id)}>{l.is_published ? t.adminUnpub : t.adminPub}</button>
                          <button className="admin-action-btn sm danger" onClick={() => handleDelete(l.id)}>{t.adminDelete}</button>
                        </td>
                      </tr>
                      {isExpanded && (
                        <tr className="content-preview-row">
                          <td colSpan={5}>
                            <div className="inline-preview">
                              <div className="inline-preview-text">{contentPreview(l).slice(0, 300)}{contentPreview(l).length > 300 ? '...' : ''}</div>
                              {contentPreview(l).length > 300 && (
                                <button className="admin-action-btn sm" onClick={() => setPreview(l)}>{t.adminSeeMore}</button>
                              )}
                            </div>
                          </td>
                        </tr>
                      )}
                    </Fragment>
                  )
                })}
              </tbody>
            </table>
          </div>
          <Pagination tbl={tbl} language={language} />
        </>
      )}

      {/* Preview Modal */}
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

import { useState, useEffect, useMemo } from 'react'
import { api, type ApiLesson, type ApiSideMenu, type ApiChapter } from './api'
import type { Language, Translations } from '../types'
import { translations } from '../data/translations'
import { useDataTable } from './useDataTable'
import { errorText } from './adminErrors'
import { lessonKind, type LessonKind } from './lessonKind'
import Modal from './Modal'
import { navigate } from '../router'
import { CONTENT_MANAGEMENT } from '../features'
import { EmptyState, Icon, IconButton, SearchBox, SkeletonRows, SortTh, StatusPill, TablePager } from './ui'
import { fill, useFeedback } from './feedback'

interface AdminLessonsProps { language: Language }

type Row = ApiLesson & { chapter_id: string; chapter_number: number; chapter_title: string; kind: LessonKind; first: boolean; last: boolean }

const PAGE_SIZE = 15
const LEVELS = ['Beginner', 'Intermediate', 'Advanced']
const KIND_LABEL: Record<LessonKind, keyof Translations> = { lesson: 'adminTypeLesson', note: 'adminTypeNote', pyq: 'adminTypePyq' }
const titleOf = (c: ApiChapter | undefined, language: Language) => (c ? (language === 'bn' && c.title_bn) || c.title_en : '—')

export default function AdminLessons({ language }: AdminLessonsProps) {
  const t = translations[language]
  const { toast, confirm } = useFeedback()
  const [chapters, setChapters] = useState<ApiChapter[]>([])
  const [menus, setMenus] = useState<ApiSideMenu[]>([])
  const [lessons, setLessons] = useState<ApiLesson[]>([])
  const [loading, setLoading] = useState(true)
  const [preview, setPreview] = useState<ApiLesson | null>(null)
  const [saving, setSaving] = useState(false)
  const [creating, setCreating] = useState(false)
  const [renaming, setRenaming] = useState<{ id: string; title_en: string; title_bn: string } | null>(null)
  const [createForm, setCreateForm] = useState({ side_menu_id: '', title_en: '', title_bn: '', level: 'Beginner' })
  const [view, setView] = useState<'table' | 'chapter'>('table')
  const [filters, setFilters] = useState<{ q: string; chapter: string; status: '' | 'published' | 'draft'; kind: '' | LessonKind }>({ q: '', chapter: '', status: '', kind: '' })
  const [expanded, setExpanded] = useState<Set<string>>(new Set())

  useEffect(() => {
    Promise.all([api.chapters.list(), api.menus.list(), api.lessons.list()])
      .then(([ch, me, le]) => { setChapters(ch); setMenus(me); setLessons(le) })
      .catch(e => toast(errorText(t, e), 'error'))
      .finally(() => setLoading(false))
  }, [t, toast])

  const chapterTitle = (c: ApiChapter | undefined) => titleOf(c, language)
  const sortedChapters = useMemo(() => [...chapters].sort((a, b) => a.chapter_number - b.chapter_number), [chapters])

  // Every lesson with its chapter and position, ordered by chapter then lesson number.
  const allRows = useMemo<Row[]>(() => {
    const menuMap = new Map(menus.map(m => [m.id, m]))
    const chapterMap = new Map(chapters.map(c => [c.id, c]))
    const siblings = new Map<string, number[]>()
    for (const l of lessons) siblings.set(l.side_menu_id, [...(siblings.get(l.side_menu_id) ?? []), l.lesson_number])
    return lessons.map(l => {
      const ch = chapterMap.get(menuMap.get(l.side_menu_id)?.chapter_id ?? '')
      const nums = siblings.get(l.side_menu_id) ?? []
      return {
        ...l, chapter_id: ch?.id ?? '', chapter_number: ch?.chapter_number ?? 0, chapter_title: titleOf(ch, language), kind: lessonKind(l),
        first: l.lesson_number === Math.min(...nums), last: l.lesson_number === Math.max(...nums),
      }
    }).sort((a, b) => a.chapter_number - b.chapter_number || a.lesson_number - b.lesson_number)
  }, [lessons, menus, chapters, language])

  const rows = useMemo(() => {
    const q = filters.q.trim().toLowerCase()
    return allRows.filter(r =>
      (!filters.chapter || r.chapter_id === filters.chapter) &&
      (!filters.status || r.is_published === (filters.status === 'published')) &&
      (!filters.kind || r.kind === filters.kind) &&
      (!q || r.title_en.toLowerCase().includes(q) || (r.title_bn ?? '').toLowerCase().includes(q)))
  }, [allRows, filters])

  const tbl = useDataTable(rows, { pageSize: PAGE_SIZE })
  const setFilter = <K extends keyof typeof filters>(key: K, value: (typeof filters)[K]) => { setFilters(f => ({ ...f, [key]: value })); tbl.goPage(0) }
  const replace = (updated: ApiLesson[]) => setLessons(prev => prev.map(l => updated.find(u => u.id === l.id) ?? l))

  async function handleDelete(l: ApiLesson) {
    const ok = await confirm({ title: t.adminConfirmDelete, body: fill(t.adminDeleteBody, { name: l.title_en }), confirmLabel: t.adminDelete, danger: true })
    if (!ok) return
    try { await api.lessons.delete(l.id); setLessons(prev => prev.filter(x => x.id !== l.id)); toast(t.adminDeleted) }
    catch (e) { toast(errorText(t, e), 'error') }
  }

  // With content management on, the pencil opens the full lesson editor; otherwise a quick rename.
  const openEditor = (l: ApiLesson) => (CONTENT_MANAGEMENT
    ? navigate(`admin/lessons/${l.id}`)
    : setRenaming({ id: l.id, title_en: l.title_en, title_bn: l.title_bn ?? '' }))

  async function saveRename() {
    if (!renaming) return
    if (!renaming.title_en.trim()) { toast(t.errRequired, 'error'); return }
    setSaving(true)
    try {
      replace([await api.lessons.update(renaming.id, { title_en: renaming.title_en, title_bn: renaming.title_bn.trim() || null })])
      setRenaming(null)
      toast(t.adminSaved)
    } catch (e) { toast(errorText(t, e), 'error') } finally { setSaving(false) }
  }

  function openCreate() {
    // Preselect the first section of the chapter being filtered, if any.
    const section = filters.chapter ? menus.filter(m => m.chapter_id === filters.chapter).sort((x, y) => x.sort_order - y.sort_order)[0] : undefined
    setCreateForm({ side_menu_id: section?.id ?? '', title_en: '', title_bn: '', level: 'Beginner' })
    setCreating(true)
  }

  /** Creates the lesson as a draft (and, with content management on, opens it in the editor). */
  async function handleCreate() {
    if (!createForm.side_menu_id || !createForm.title_en.trim()) { toast(t.adminErrTitleChapter, 'error'); return }
    setSaving(true)
    try {
      const created = await api.lessons.create({
        side_menu_id: createForm.side_menu_id,
        title_en: createForm.title_en,
        title_bn: createForm.title_bn || null,
        level: createForm.level,
      })
      setCreating(false)
      toast(t.adminCreated)
      if (CONTENT_MANAGEMENT) openEditor(created)
      else setLessons(prev => [...prev, created])
    } catch (e) { toast(errorText(t, e), 'error') } finally { setSaving(false) }
  }

  async function togglePublish(l: ApiLesson) {
    try {
      replace([await api.lessons.togglePublish(l.id)])
      toast(l.is_published ? t.adminUnpublishedToast : t.adminPublishedToast)
    } catch (e) { toast(errorText(t, e), 'error') }
  }

  async function moveLesson(id: string, dir: -1 | 1) {
    const l = lessons.find(x => x.id === id)
    if (!l) return
    const siblings = lessons.filter(x => x.side_menu_id === l.side_menu_id).sort((a, b) => a.lesson_number - b.lesson_number)
    const swap = siblings[siblings.findIndex(x => x.id === id) + dir]
    if (!swap) return
    try { replace(await api.lessons.swapOrder(id, swap.id)) }
    catch (e) { toast(errorText(t, e), 'error') }
  }

  const toggleChapter = (id: string) => setExpanded(prev => {
    const next = new Set(prev)
    if (next.has(id)) next.delete(id); else next.add(id)
    return next
  })

  const actions = (r: Row) => (
    <div className="adm-row-actions">
      <IconButton icon="eye" label={t.adminView} onClick={() => setPreview(r)} />
      <IconButton icon="edit" label={CONTENT_MANAGEMENT ? t.adminEdit : t.adminEditTitle} onClick={() => openEditor(r)} />
      <IconButton icon="up" label={t.adminMoveUp} onClick={() => moveLesson(r.id, -1)} disabled={r.first} />
      <IconButton icon="down" label={t.adminMoveDown} onClick={() => moveLesson(r.id, 1)} disabled={r.last} />
      <IconButton icon="trash" label={t.adminDelete} tone="danger" onClick={() => handleDelete(r)} />
    </div>
  )
  const kindBadge = (k: LessonKind) => <span className={`adm-kind kind-${k}`}>{t[KIND_LABEL[k]]}</span>

  if (loading) return <SkeletonRows />

  const empty = <EmptyState icon={lessons.length ? 'search' : 'inbox'} text={lessons.length ? t.adminNoResults : t.adminEmpty} />

  return (
    <div className="adm-screen">
      <div className="adm-toolbar">
        <SearchBox value={filters.q} onChange={v => setFilter('q', v)} placeholder={t.adminSearch} />
        <select className="adm-select" aria-label={t.adminChapter} value={filters.chapter} onChange={e => setFilter('chapter', e.target.value)}>
          <option value="">{t.adminAllChapters}</option>
          {sortedChapters.map(ch => <option key={ch.id} value={ch.id}>{ch.chapter_number}. {chapterTitle(ch)}</option>)}
        </select>
        <select className="adm-select" aria-label={t.adminType} value={filters.kind} onChange={e => setFilter('kind', e.target.value as LessonKind | '')}>
          <option value="">{t.adminType}: {t.adminAll}</option>
          {(Object.keys(KIND_LABEL) as LessonKind[]).map(k => <option key={k} value={k}>{t[KIND_LABEL[k]]}</option>)}
        </select>
        <select className="adm-select" aria-label={t.adminStatus} value={filters.status} onChange={e => setFilter('status', e.target.value as typeof filters.status)}>
          <option value="">{t.candAllStatuses}</option>
          <option value="published">{t.adminStatusPublished}</option>
          <option value="draft">{t.adminStatusDraft}</option>
        </select>
        <div className="adm-segmented" role="group">
          <button type="button" className={view === 'table' ? 'active' : ''} aria-pressed={view === 'table'} onClick={() => setView('table')}>{t.adminAll}</button>
          <button type="button" className={view === 'chapter' ? 'active' : ''} aria-pressed={view === 'chapter'} onClick={() => setView('chapter')}>{t.adminChapter}</button>
        </div>
        <button className="adm-btn primary adm-toolbar-end" onClick={openCreate}><Icon name="plus" size={15} />{t.adminNewLesson}</button>
      </div>

      {view === 'table' ? (
        <div className="adm-table-card">
          <div className="adm-table-scroll">
            <table className="adm-table">
              <thead>
                <tr>
                  <SortTh tbl={tbl} k="lesson_number" label="#" className="col-num" />
                  <SortTh tbl={tbl} k="title_en" label={t.adminTitle} />
                  <SortTh tbl={tbl} k="chapter_number" label={t.adminChapter} />
                  <SortTh tbl={tbl} k="kind" label={t.adminType} />
                  <SortTh tbl={tbl} k="is_published" label={t.adminStatus} />
                  <th className="col-actions"><span className="sr-only">{t.adminActions}</span></th>
                </tr>
              </thead>
              <tbody>
                {tbl.paged.map(r => (
                  <tr key={r.id}>
                    <td className="col-num adm-tabular">{r.lesson_number}</td>
                    <td>
                      <button type="button" className="adm-cell-title adm-cell-link" onClick={() => setPreview(r)}>{r.title_en}</button>
                      {r.title_bn && <div className="adm-cell-sub">{r.title_bn}</div>}
                    </td>
                    <td className="adm-cell-muted"><span className="adm-chip">{r.chapter_number}</span>{r.chapter_title}</td>
                    <td>{kindBadge(r.kind)}</td>
                    <td><StatusPill published={r.is_published} t={t} onToggle={() => togglePublish(r)} /></td>
                    <td className="col-actions">{actions(r)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {tbl.total === 0 && empty}
          <TablePager tbl={tbl} pageSize={PAGE_SIZE} t={t} />
        </div>
      ) : (
        <div className="adm-groups">
          {rows.length === 0 && <div className="adm-table-card">{empty}</div>}
          {sortedChapters.map(ch => {
            const chRows = rows.filter(r => r.chapter_id === ch.id)
            if (chRows.length === 0) return null
            // Filtering narrows the list, so open every matching chapter instead of making the admin click each one.
            const isOpen = expanded.has(ch.id) || !!(filters.q || filters.status || filters.kind || filters.chapter)
            const pub = chRows.filter(r => r.is_published).length
            return (
              <section key={ch.id} className={`adm-group${isOpen ? ' open' : ''}`}>
                <button type="button" className="adm-group-head" aria-expanded={isOpen} onClick={() => toggleChapter(ch.id)}>
                  <Icon name="chevronRight" size={14} />
                  <span className="adm-num-badge">{ch.chapter_number}</span>
                  <span className="adm-group-title">{chapterTitle(ch)}</span>
                  <span className="adm-group-meta">{pub}/{chRows.length} {t.adminPublished}</span>
                </button>
                {isOpen && (
                  <ul className="adm-group-list">
                    {chRows.map(r => (
                      <li key={r.id}>
                        <span className="adm-group-num adm-tabular">{r.lesson_number}</span>
                        <div className="adm-group-main">
                          <button type="button" className="adm-cell-title adm-cell-link" onClick={() => setPreview(r)}>{r.title_en}</button>
                          {r.title_bn && <div className="adm-cell-sub">{r.title_bn}</div>}
                        </div>
                        {kindBadge(r.kind)}
                        <StatusPill published={r.is_published} t={t} onToggle={() => togglePublish(r)} />
                        {actions(r)}
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            )
          })}
        </div>
      )}

      <Modal open={!!renaming} onClose={() => setRenaming(null)} title={t.adminEditTitle}>
        {renaming && (
          <>
            <div className="form-grid">
              <label className="full-width">{t.adminTitleEn}<input value={renaming.title_en} onChange={e => setRenaming({ ...renaming, title_en: e.target.value })} /></label>
              <label className="full-width">{t.adminTitleBn}<input value={renaming.title_bn} onChange={e => setRenaming({ ...renaming, title_bn: e.target.value })} /></label>
            </div>
            <div className="form-actions">
              <button className="adm-btn" onClick={() => setRenaming(null)}>{t.adminCancel}</button>
              <button className="adm-btn primary" onClick={saveRename} disabled={saving}>{saving ? '…' : t.adminSave}</button>
            </div>
          </>
        )}
      </Modal>

      <Modal open={creating} onClose={() => setCreating(false)} title={t.adminNewLesson}>
        <div className="form-grid">
          <label className="full-width">{t.edSection}
            <select value={createForm.side_menu_id} onChange={e => setCreateForm(f => ({ ...f, side_menu_id: e.target.value }))}>
              <option value="">—</option>
              {sortedChapters.map(ch => (
                <optgroup key={ch.id} label={`${ch.chapter_number}. ${chapterTitle(ch)}`}>
                  {menus.filter(m => m.chapter_id === ch.id).sort((x, y) => x.sort_order - y.sort_order).map(m => (
                    <option key={m.id} value={m.id}>{(language === 'bn' && m.label_bn) || m.label_en}</option>
                  ))}
                </optgroup>
              ))}
            </select>
          </label>
          <label className="full-width">{t.adminTitleEn}<input value={createForm.title_en} required onChange={e => setCreateForm(f => ({ ...f, title_en: e.target.value }))} /></label>
          <label className="full-width">{t.adminTitleBn}<input value={createForm.title_bn} onChange={e => setCreateForm(f => ({ ...f, title_bn: e.target.value }))} /></label>
          <label>{t.adminLevel}
            <select value={createForm.level} onChange={e => setCreateForm(f => ({ ...f, level: e.target.value }))}>
              {LEVELS.map(l => <option key={l}>{l}</option>)}
            </select>
          </label>
        </div>
        <div className="form-actions">
          <button className="adm-btn" onClick={() => setCreating(false)}>{t.adminCancel}</button>
          <button className="adm-btn primary" onClick={handleCreate} disabled={saving}>{saving ? '…' : t.adminCreate}</button>
        </div>
      </Modal>

      <Modal open={!!preview} onClose={() => setPreview(null)} title={preview ? (language === 'bn' && preview.title_bn ? preview.title_bn : preview.title_en) : ''} wide>
        {preview && (
          <div>
            <div className="adm-preview-meta">
              <span className={`level-badge level-${preview.level.toLowerCase()}`}>{preview.level}</span>
              {kindBadge(lessonKind(preview))}
              <StatusPill published={preview.is_published} t={t} />
              <span className="adm-cell-muted">{t.lesson} #{preview.lesson_number}</span>
            </div>
            <div className="admin-preview-content">
              <h4>{t.adminContentEn}</h4><pre>{preview.content_en}</pre>
              {preview.content_bn && <><h4>{t.adminContentBn}</h4><pre>{preview.content_bn}</pre></>}
              {preview.code_en && <><h4>{t.adminCode}</h4><pre className="admin-code-block">{preview.code_en}</pre></>}
              {preview.takeaways_en?.length ? <><h4>{t.keyTakeaways}</h4><ul>{preview.takeaways_en.map((x, i) => <li key={i}>{x}</li>)}</ul></> : null}
              {preview.takeaways_bn?.length ? <><h4>{t.adminTakeawaysBn}</h4><ul>{preview.takeaways_bn.map((x, i) => <li key={i}>{x}</li>)}</ul></> : null}
            </div>
          </div>
        )}
      </Modal>
    </div>
  )
}

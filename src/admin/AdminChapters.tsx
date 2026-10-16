import { useState, useEffect, useMemo } from 'react'
import { api, type ApiChapter, type ApiSideMenu } from './api'
import type { Language } from '../types'
import { translations } from '../data/translations'
import { useDataTable } from './useDataTable'
import { errorText } from './adminErrors'
import Modal from './Modal'
import SectionsDialog from './SectionsDialog'
import { CONTENT_MANAGEMENT } from '../features'
import { EmptyState, Icon, IconButton, SearchBox, SkeletonRows, SortTh, StatusPill, TablePager } from './ui'
import { fill, useFeedback } from './feedback'

interface AdminChaptersProps { language: Language }

type FormData = { chapter_number: number; title_en: string; title_bn: string; level: string; description: string }
type Row = ApiChapter & { lesson_count: number; section_count: number }

const PAGE_SIZE = 12
const LEVELS = ['Beginner', 'Intermediate', 'Advanced']
const SEARCH_KEYS: (keyof Row)[] = ['title_en', 'title_bn', 'chapter_number']
const emptyForm = (): FormData => ({ chapter_number: 0, title_en: '', title_bn: '', level: 'Beginner', description: '' })

export default function AdminChapters({ language }: AdminChaptersProps) {
  const t = translations[language]
  const { toast, confirm } = useFeedback()
  const [chapters, setChapters] = useState<ApiChapter[]>([])
  const [menus, setMenus] = useState<ApiSideMenu[]>([])
  /** Lessons per section (side menu id). */
  const [lessonCounts, setLessonCounts] = useState<Map<string, number>>(new Map())
  const [sectionsFor, setSectionsFor] = useState<ApiChapter | null>(null)
  const [loading, setLoading] = useState(true)
  const [status, setStatus] = useState<'' | 'published' | 'draft'>('')
  const [modal, setModal] = useState<{ mode: 'create' | 'edit'; id?: string } | null>(null)
  const [form, setForm] = useState<FormData>(emptyForm())
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    Promise.all([api.chapters.list(), api.menus.list(), api.lessons.list()])
      .then(([ch, me, lessons]) => {
        const counts = new Map<string, number>()
        for (const l of lessons) counts.set(l.side_menu_id, (counts.get(l.side_menu_id) ?? 0) + 1)
        setChapters(ch); setMenus(me); setLessonCounts(counts)
      })
      .catch(e => toast(errorText(t, e), 'error'))
      .finally(() => setLoading(false))
  }, [t, toast])

  const rows = useMemo<Row[]>(() => chapters
    .filter(c => !status || c.is_published === (status === 'published'))
    .map(c => {
      const own = menus.filter(m => m.chapter_id === c.id)
      return { ...c, section_count: own.length, lesson_count: own.reduce((n, m) => n + (lessonCounts.get(m.id) ?? 0), 0) }
    }), [chapters, menus, lessonCounts, status])
  const tbl = useDataTable(rows, { defaultSort: 'chapter_number', pageSize: PAGE_SIZE, searchKeys: SEARCH_KEYS })

  function openCreate() { setForm({ ...emptyForm(), chapter_number: Math.max(0, ...chapters.map(c => c.chapter_number)) + 1 }); setModal({ mode: 'create' }) }
  function openEdit(ch: ApiChapter) { setForm({ chapter_number: ch.chapter_number, title_en: ch.title_en, title_bn: ch.title_bn || '', level: ch.level, description: ch.description || '' }); setModal({ mode: 'edit', id: ch.id }) }

  async function handleSave() {
    if (!form.title_en.trim()) { toast(t.errRequired, 'error'); return }
    setSaving(true)
    try {
      if (modal?.mode === 'create') {
        const created = await api.chapters.create({ ...form, is_published: false, sort_order: form.chapter_number })
        setChapters(prev => [...prev, created])
        api.menus.list().then(setMenus).catch(() => {}) // the server made the chapter's first section
        toast(t.adminCreated)
      } else if (modal?.mode === 'edit' && modal.id) {
        const updated = await api.chapters.update(modal.id, form)
        setChapters(prev => prev.map(c => c.id === modal.id ? updated : c))
        toast(t.adminSaved)
      }
      setModal(null)
    } catch (e) { toast(errorText(t, e), 'error') } finally { setSaving(false) }
  }

  async function handleDelete(ch: ApiChapter) {
    const ok = await confirm({ title: t.adminConfirmDelete, body: fill(t.adminDeleteBody, { name: ch.title_en }), confirmLabel: t.adminDelete, danger: true })
    if (!ok) return
    try { await api.chapters.delete(ch.id); setChapters(prev => prev.filter(c => c.id !== ch.id)); toast(t.adminDeleted) }
    catch (e) { toast(errorText(t, e), 'error') }
  }

  async function togglePublish(ch: ApiChapter) {
    try {
      await api.chapters.togglePublish(ch.id)
      setChapters(prev => prev.map(c => c.id === ch.id ? { ...c, is_published: !c.is_published } : c))
      toast(ch.is_published ? t.adminUnpublishedToast : t.adminPublishedToast)
    } catch (e) { toast(errorText(t, e), 'error') }
  }

  if (loading) return <SkeletonRows />

  return (
    <div className="adm-screen">
      <div className="adm-toolbar">
        <SearchBox value={tbl.search} onChange={tbl.setSearch} placeholder={t.adminSearch} />
        <select className="adm-select" aria-label={t.adminStatus} value={status} onChange={e => { setStatus(e.target.value as typeof status); tbl.goPage(0) }}>
          <option value="">{t.candAllStatuses}</option>
          <option value="published">{t.adminStatusPublished}</option>
          <option value="draft">{t.adminStatusDraft}</option>
        </select>
        <button className="adm-btn primary adm-toolbar-end" onClick={openCreate}><Icon name="plus" size={15} />{t.adminNewChapter}</button>
      </div>

      <div className="adm-table-card">
        <div className="adm-table-scroll">
          <table className="adm-table">
            <thead>
              <tr>
                <SortTh tbl={tbl} k="chapter_number" label="#" className="col-num" />
                <SortTh tbl={tbl} k="title_en" label={t.adminTitle} />
                <SortTh tbl={tbl} k="level" label={t.adminLevel} />
                {CONTENT_MANAGEMENT && <SortTh tbl={tbl} k="section_count" label={t.secManage} className="col-right" />}
                <SortTh tbl={tbl} k="lesson_count" label={t.lessons} className="col-right" />
                <SortTh tbl={tbl} k="is_published" label={t.adminStatus} />
                <th className="col-actions"><span className="sr-only">{t.adminActions}</span></th>
              </tr>
            </thead>
            <tbody>
              {tbl.paged.map(ch => (
                <tr key={ch.id}>
                  <td className="col-num"><span className="adm-num-badge">{ch.chapter_number}</span></td>
                  <td>
                    <div className="adm-cell-title">{ch.title_en}</div>
                    {ch.title_bn && <div className="adm-cell-sub">{ch.title_bn}</div>}
                  </td>
                  <td><span className={`level-badge level-${ch.level.toLowerCase()}`}>{ch.level}</span></td>
                  {CONTENT_MANAGEMENT && (
                    <td className="col-right adm-tabular">
                      <button type="button" className="adm-cell-link adm-count-link" onClick={() => setSectionsFor(ch)} title={t.secManage}>{ch.section_count}</button>
                    </td>
                  )}
                  <td className="col-right adm-tabular">{ch.lesson_count}</td>
                  <td><StatusPill published={ch.is_published} t={t} onToggle={() => togglePublish(ch)} /></td>
                  <td className="col-actions">
                    <div className="adm-row-actions">
                      {CONTENT_MANAGEMENT && <IconButton icon="layers" label={t.secManage} onClick={() => setSectionsFor(ch)} />}
                      <IconButton icon="edit" label={t.adminEdit} onClick={() => openEdit(ch)} />
                      <IconButton icon="trash" label={t.adminDelete} tone="danger" onClick={() => handleDelete(ch)} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {tbl.total === 0 && <EmptyState icon={chapters.length ? 'search' : 'inbox'} text={chapters.length ? t.adminNoResults : t.adminEmpty} />}
        <TablePager tbl={tbl} pageSize={PAGE_SIZE} t={t} />
      </div>

      <Modal open={!!modal} onClose={() => setModal(null)} title={modal?.mode === 'create' ? t.adminNewChapter : t.adminEditChapter}>
        <div className="form-grid">
          <label>{t.adminNumber}<input type="number" min={1} value={form.chapter_number} onChange={e => setForm(f => ({ ...f, chapter_number: +e.target.value }))} /></label>
          <label>{t.adminLevel}
            <select value={form.level} onChange={e => setForm(f => ({ ...f, level: e.target.value }))}>
              {LEVELS.map(l => <option key={l}>{l}</option>)}
            </select>
          </label>
          <label className="full-width">{t.adminTitleEn}<input value={form.title_en} required onChange={e => setForm(f => ({ ...f, title_en: e.target.value }))} /></label>
          <label className="full-width">{t.adminTitleBn}<input value={form.title_bn} onChange={e => setForm(f => ({ ...f, title_bn: e.target.value }))} /></label>
          <label className="full-width">{t.adminDescription}<textarea rows={3} value={form.description} onChange={e => setForm(f => ({ ...f, description: e.target.value }))} /></label>
        </div>
        <div className="form-actions">
          <button className="adm-btn" onClick={() => setModal(null)}>{t.adminCancel}</button>
          <button className="adm-btn primary" onClick={handleSave} disabled={saving}>{saving ? '…' : modal?.mode === 'create' ? t.adminCreate : t.adminSave}</button>
        </div>
      </Modal>

      {sectionsFor && (
        <SectionsDialog chapter={sectionsFor} menus={menus} lessonCounts={lessonCounts} language={language}
          onChange={setMenus} onClose={() => setSectionsFor(null)} />
      )}
    </div>
  )
}

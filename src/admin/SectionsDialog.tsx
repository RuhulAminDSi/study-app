import { useState } from 'react'
import type { Language } from '../types'
import { translations } from '../data/translations'
import { api, type ApiChapter, type ApiSideMenu } from './api'
import { errorText } from './adminErrors'
import { fill, useFeedback } from './feedback'
import Modal from './Modal'
import { IconButton, Icon } from './ui'

interface Props {
  chapter: ApiChapter
  menus: ApiSideMenu[]
  lessonCounts: Map<string, number>
  language: Language
  onChange: (menus: ApiSideMenu[]) => void
  onClose: () => void
}

/** Chapters → Sections: add, rename, reorder, hide or remove the sections that group a chapter's lessons. */
export default function SectionsDialog({ chapter, menus, lessonCounts, language, onChange, onClose }: Props) {
  const t = translations[language]
  const { toast, confirm } = useFeedback()
  const [editing, setEditing] = useState<{ id: string; label_en: string; label_bn: string } | null>(null)
  const [adding, setAdding] = useState({ label_en: '', label_bn: '' })
  const [busy, setBusy] = useState(false)
  const own = menus.filter(m => m.chapter_id === chapter.id).sort((a, b) => a.sort_order - b.sort_order)

  const replace = (updated: ApiSideMenu[]) => onChange(menus.map(m => updated.find(u => u.id === m.id) ?? m))
  async function run<T>(action: () => Promise<T>): Promise<T | undefined> {
    setBusy(true)
    try { return await action() } catch (e) { toast(errorText(t, e), 'error') } finally { setBusy(false) }
  }

  const add = () => run(async () => {
    if (!adding.label_en.trim()) { toast(t.errRequired, 'error'); return }
    const created = await api.menus.create({ chapter_id: chapter.id, label_en: adding.label_en, label_bn: adding.label_bn || null })
    onChange([...menus, created]); setAdding({ label_en: '', label_bn: '' }); toast(t.adminCreated)
  })

  const saveLabel = () => run(async () => {
    if (!editing) return
    if (!editing.label_en.trim()) { toast(t.errRequired, 'error'); return }
    replace([await api.menus.update(editing.id, { label_en: editing.label_en, label_bn: editing.label_bn || null })])
    setEditing(null); toast(t.adminSaved)
  })

  const toggle = (m: ApiSideMenu) => run(async () => replace([await api.menus.toggle(m.id)]))

  // Sort orders may be equal or gapped (seeded data), so moving rewrites the whole order 1..n.
  const move = (index: number, dir: -1 | 1) => run(async () => {
    const order = [...own]
    const [item] = order.splice(index, 1)
    order.splice(index + dir, 0, item)
    const changed = order.map((m, i) => ({ m, sort_order: i + 1 })).filter(({ m, sort_order }) => m.sort_order !== sort_order)
    replace(await Promise.all(changed.map(({ m, sort_order }) => api.menus.update(m.id, { sort_order }))))
  })

  const remove = (m: ApiSideMenu) => run(async () => {
    if (!await confirm({ title: t.adminConfirmDelete, body: fill(t.adminDeleteBody, { name: m.label_en }), confirmLabel: t.adminDelete, danger: true })) return
    await api.menus.delete(m.id)
    onChange(menus.filter(x => x.id !== m.id)); toast(t.adminDeleted)
  })

  const chapterName = (language === 'bn' && chapter.title_bn) || chapter.title_en

  return (
    <Modal open onClose={onClose} title={fill(t.secTitle, { chapter: chapterName })} size="lg">
      <p className="adm-hint sec-intro">{t.secHint}</p>
      <ul className="sec-list">
        {own.map((m, i) => {
          const count = lessonCounts.get(m.id) ?? 0
          const isEditing = editing?.id === m.id
          return (
            <li key={m.id} className={m.is_active ? '' : 'is-hidden'}>
              <div className="sec-order">
                <IconButton icon="up" label={t.adminMoveUp} onClick={() => move(i, -1)} disabled={busy || i === 0} />
                <IconButton icon="down" label={t.adminMoveDown} onClick={() => move(i, 1)} disabled={busy || i === own.length - 1} />
              </div>
              {isEditing ? (
                <div className="sec-edit">
                  <input aria-label={t.secLabelEn} value={editing.label_en} onChange={e => setEditing({ ...editing, label_en: e.target.value })}
                    onKeyDown={e => { if (e.key === 'Enter') saveLabel() }} autoFocus />
                  <input aria-label={t.secLabelBn} value={editing.label_bn} placeholder={t.secLabelBn} onChange={e => setEditing({ ...editing, label_bn: e.target.value })}
                    onKeyDown={e => { if (e.key === 'Enter') saveLabel() }} />
                  <button className="adm-btn sm primary" onClick={saveLabel} disabled={busy}>{t.adminSave}</button>
                  <button className="adm-btn sm" onClick={() => setEditing(null)}>{t.adminCancel}</button>
                </div>
              ) : (
                <div className="sec-main">
                  <span className="adm-cell-title">{m.label_en}</span>
                  <span className="adm-cell-sub">{m.label_bn ? `${m.label_bn} · ` : ''}{fill(t.secLessons, { n: count })}</span>
                </div>
              )}
              {!isEditing && (
                <div className="adm-row-actions">
                  <button type="button" className={`adm-pill is-toggle ${m.is_active ? 'is-on' : 'is-off'}`} onClick={() => toggle(m)}
                    title={m.is_active ? t.secHide : t.secShow} disabled={busy}>
                    <i />{m.is_active ? t.secVisible : t.secHidden}
                  </button>
                  <IconButton icon="edit" label={t.adminEdit} onClick={() => setEditing({ id: m.id, label_en: m.label_en, label_bn: m.label_bn ?? '' })} />
                  <IconButton icon="trash" label={count ? t.secErrNotEmpty : t.adminDelete} tone="danger" onClick={() => remove(m)} disabled={busy || count > 0} />
                </div>
              )}
            </li>
          )
        })}
      </ul>
      <div className="sec-add">
        <input aria-label={t.secLabelEn} placeholder={t.secLabelEn} value={adding.label_en} onChange={e => setAdding({ ...adding, label_en: e.target.value })}
          onKeyDown={e => { if (e.key === 'Enter') add() }} />
        <input aria-label={t.secLabelBn} placeholder={t.secLabelBn} value={adding.label_bn} onChange={e => setAdding({ ...adding, label_bn: e.target.value })}
          onKeyDown={e => { if (e.key === 'Enter') add() }} />
        <button className="adm-btn primary" onClick={add} disabled={busy}><Icon name="plus" size={15} />{t.secAdd}</button>
      </div>
    </Modal>
  )
}

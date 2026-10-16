import { useEffect, useState } from 'react'
import type { Language, Translations } from '../types'
import { translations } from '../data/translations'
import { AnnouncementCard } from '../components/portal/Announcements'
import { api, AdminApiError, type AnnouncementInput, type AnnouncementTone, type ApiAnnouncement } from './api'
import { adminErrorText, errorText } from './adminErrors'
import { fill, useFeedback } from './feedback'
import Modal from './Modal'
import { EmptyState, Icon, IconButton, SkeletonRows } from './ui'

const TONES: { key: AnnouncementTone; label: keyof Translations }[] = [
  { key: 'info', label: 'anToneInfo' },
  { key: 'exam', label: 'anToneExam' },
  { key: 'important', label: 'anToneImportant' },
]

type State = 'live' | 'scheduled' | 'expired' | 'draft'

function stateOf(a: ApiAnnouncement, now = Date.now()): State {
  if (!a.is_published) return 'draft'
  if (a.starts_at && Date.parse(a.starts_at) > now) return 'scheduled'
  if (a.ends_at && Date.parse(a.ends_at) <= now) return 'expired'
  return 'live'
}

/** ISO timestamp ↔ the value of an <input type="datetime-local"> (local time, minutes). */
const toLocalInput = (iso: string | null) => {
  if (!iso) return ''
  const d = new Date(iso)
  return new Date(d.getTime() - d.getTimezoneOffset() * 60_000).toISOString().slice(0, 16)
}
const fromLocalInput = (v: string) => (v ? new Date(v).toISOString() : null)

/** The editable part of a saved notice (what PUT takes). */
function toInput(a: ApiAnnouncement): AnnouncementInput {
  const copy: Partial<ApiAnnouncement> = { ...a }
  delete copy.id; delete copy.created_at; delete copy.updated_at
  return copy as AnnouncementInput
}

const blank = (): AnnouncementInput => ({
  title_en: '', title_bn: null, body_en: null, body_bn: null, tone: 'info', link_url: null, link_label_en: null, link_label_bn: null,
  starts_at: null, ends_at: null, is_pinned: false, is_published: true,
})

/** Admin → Announcements: notices on the candidate dashboard, with type, schedule, pinning and a live preview. */
export default function AdminAnnouncements({ language }: { language: Language }) {
  const t = translations[language]
  const { toast, confirm } = useFeedback()
  const [items, setItems] = useState<ApiAnnouncement[] | null>(null)
  const [editing, setEditing] = useState<{ id?: string; form: AnnouncementInput } | null>(null)
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({})
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    api.announcements.list().then(setItems).catch(e => { toast(errorText(t, e), 'error'); setItems([]) })
  }, [t, toast])

  const when = (iso: string) => new Date(iso).toLocaleString(language === 'bn' ? 'bn-BD' : 'en-GB', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' })
  const stateLabel: Record<State, string> = { live: t.anStateLive, scheduled: t.anStateScheduled, expired: t.anStateExpired, draft: t.adminStatusDraft }

  const open = (a?: ApiAnnouncement) => {
    setFieldErrors({})
    if (!a) { setEditing({ form: blank() }); return }
    setEditing({ id: a.id, form: toInput(a) })
  }

  async function save() {
    if (!editing) return
    setSaving(true); setFieldErrors({})
    try {
      const saved = editing.id ? await api.announcements.update(editing.id, editing.form) : await api.announcements.create(editing.form)
      setItems(prev => {
        const rest = (prev ?? []).filter(x => x.id !== saved.id)
        return [saved, ...rest].sort((a, b) => Number(b.is_pinned) - Number(a.is_pinned))
      })
      setEditing(null)
      toast(editing.id ? t.adminSaved : t.adminCreated)
    } catch (e) {
      if (e instanceof AdminApiError) setFieldErrors(e.fields)
      toast(errorText(t, e), 'error')
    } finally { setSaving(false) }
  }

  async function remove(a: ApiAnnouncement) {
    if (!await confirm({ title: t.adminConfirmDelete, body: fill(t.adminDeleteBody, { name: a.title_en }), confirmLabel: t.adminDelete, danger: true })) return
    try { await api.announcements.delete(a.id); setItems(prev => (prev ?? []).filter(x => x.id !== a.id)); toast(t.adminDeleted) }
    catch (e) { toast(errorText(t, e), 'error') }
  }

  async function togglePublished(a: ApiAnnouncement) {
    try {
      const saved = await api.announcements.update(a.id, { ...toInput(a), is_published: !a.is_published })
      setItems(prev => (prev ?? []).map(x => (x.id === a.id ? saved : x)))
      toast(saved.is_published ? t.adminPublishedToast : t.adminUnpublishedToast)
    } catch (e) { toast(errorText(t, e), 'error') }
  }

  if (!items) return <SkeletonRows />

  const f = editing?.form
  const set = <K extends keyof AnnouncementInput>(k: K, v: AnnouncementInput[K]) => setEditing(e => (e ? { ...e, form: { ...e.form, [k]: v } } : e))
  const err = (k: string) => (fieldErrors[k] ? <small className="cm-field-error">{adminErrorText(t, fieldErrors[k], fieldErrors[k])}</small> : null)
  const textOrNull = (v: string) => (v.trim() ? v : null)

  return (
    <div className="adm-screen">
      <div className="adm-toolbar">
        <button className="adm-btn primary adm-toolbar-end" onClick={() => open()}><Icon name="plus" size={15} />{t.anNew}</button>
      </div>

      <div className="adm-table-card">
        {items.length === 0 ? <EmptyState icon="megaphone" text={t.anEmpty} /> : (
          <div className="adm-table-scroll">
            <table className="adm-table">
              <thead>
                <tr>
                  <th>{t.adminTitle}</th>
                  <th>{t.anTone}</th>
                  <th>{t.anSchedule}</th>
                  <th>{t.adminStatus}</th>
                  <th className="col-actions"><span className="sr-only">{t.adminActions}</span></th>
                </tr>
              </thead>
              <tbody>
                {items.map(a => {
                  const state = stateOf(a)
                  return (
                    <tr key={a.id}>
                      <td>
                        <button type="button" className="adm-cell-title adm-cell-link" onClick={() => open(a)}>
                          {a.is_pinned && <span className="an-pin" title={t.anPinnedBadge}><Icon name="pin" size={13} /></span>}
                          {a.title_en}
                        </button>
                        {a.title_bn && <div className="adm-cell-sub">{a.title_bn}</div>}
                      </td>
                      <td><span className={`an-tone tone-${a.tone}`}>{t[TONES.find(x => x.key === a.tone)!.label]}</span></td>
                      <td className="adm-cell-muted adm-nowrap">
                        <div>{a.starts_at ? fill(t.anFrom, { date: when(a.starts_at) }) : '—'}</div>
                        <div className="adm-cell-sub">{a.ends_at ? fill(t.anUntil, { date: when(a.ends_at) }) : t.anAlways}</div>
                      </td>
                      <td>
                        <button type="button" className={`adm-pill is-toggle an-state-${state}`} onClick={() => togglePublished(a)} title={a.is_published ? t.adminUnpub : t.adminPub}>
                          <i />{stateLabel[state]}
                        </button>
                      </td>
                      <td className="col-actions">
                        <div className="adm-row-actions">
                          <IconButton icon="edit" label={t.adminEdit} onClick={() => open(a)} />
                          <IconButton icon="trash" label={t.adminDelete} tone="danger" onClick={() => remove(a)} />
                        </div>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>

      <Modal open={!!editing} onClose={() => setEditing(null)} title={editing?.id ? t.anEdit : t.anNew} size="lg">
        {f && (
          <div className="an-form">
            <div className="an-tones" role="radiogroup" aria-label={t.anTone}>
              {TONES.map(x => (
                <button key={x.key} type="button" role="radio" aria-checked={f.tone === x.key}
                  className={`an-tone-option tone-${x.key}${f.tone === x.key ? ' active' : ''}`} onClick={() => set('tone', x.key)}>
                  {t[x.label]}
                </button>
              ))}
            </div>
            <div className="form-grid">
              <label>{t.adminTitleEn}<input value={f.title_en} onChange={e => set('title_en', e.target.value)} aria-invalid={!!fieldErrors.title_en} maxLength={200} />{err('title_en')}</label>
              <label>{t.adminTitleBn}<input value={f.title_bn ?? ''} onChange={e => set('title_bn', textOrNull(e.target.value))} maxLength={200} /></label>
              <label>{t.anMessageEn}<textarea rows={3} value={f.body_en ?? ''} onChange={e => set('body_en', textOrNull(e.target.value))} /></label>
              <label>{t.anMessageBn}<textarea rows={3} value={f.body_bn ?? ''} onChange={e => set('body_bn', textOrNull(e.target.value))} /></label>
              <label className="full-width">{t.anLink}
                <input value={f.link_url ?? ''} placeholder="https://… or #/notes" onChange={e => set('link_url', textOrNull(e.target.value))} aria-invalid={!!fieldErrors.link_url} />
                {err('link_url') ?? <small className="adm-hint">{t.anLinkHint}</small>}
              </label>
              {f.link_url && (
                <>
                  <label>{t.anLinkLabelEn}<input value={f.link_label_en ?? ''} maxLength={80} onChange={e => set('link_label_en', textOrNull(e.target.value))} /></label>
                  <label>{t.anLinkLabelBn}<input value={f.link_label_bn ?? ''} maxLength={80} onChange={e => set('link_label_bn', textOrNull(e.target.value))} /></label>
                </>
              )}
              <label>{t.anStarts}<input type="datetime-local" value={toLocalInput(f.starts_at)} onChange={e => set('starts_at', fromLocalInput(e.target.value))} aria-invalid={!!fieldErrors.starts_at} />{err('starts_at')}</label>
              <label>{t.anEnds}<input type="datetime-local" value={toLocalInput(f.ends_at)} onChange={e => set('ends_at', fromLocalInput(e.target.value))} aria-invalid={!!fieldErrors.ends_at} />{err('ends_at')}</label>
              <small className="adm-hint full-width">{t.anScheduleHint}</small>
              <label className="rte-check"><input type="checkbox" checked={f.is_pinned} onChange={e => set('is_pinned', e.target.checked)} /> {t.anPinned}</label>
              <label className="rte-check"><input type="checkbox" checked={f.is_published} onChange={e => set('is_published', e.target.checked)} /> {t.anVisible}</label>
            </div>

            <div className="an-preview">
              <span className="an-preview-label">{t.anPreviewLabel}</span>
              <AnnouncementCard notice={{ ...f, title_en: f.title_en || t.anNew }} lang={language} t={t} onDismiss={f.is_pinned ? undefined : () => {}} />
            </div>

            <div className="form-actions">
              <button className="adm-btn" onClick={() => setEditing(null)}>{t.adminCancel}</button>
              <button className="adm-btn primary" onClick={save} disabled={saving}>{saving ? '…' : editing?.id ? t.adminSave : t.adminCreate}</button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  )
}

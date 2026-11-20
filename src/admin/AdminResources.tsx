import { useEffect, useMemo, useRef, useState } from 'react'
import type { Language, Translations } from '../types'
import { translations } from '../data/translations'
import { api, AdminApiError, type ApiResource, type ResourceCategory, type ResourceInput } from './api'
import { adminErrorText, errorText } from './adminErrors'
import { fill, useFeedback } from './feedback'
import Modal from './Modal'
import { formatBytes, useMediaLibrary } from './useMediaLibrary'
import { EmptyState, Icon, IconButton, SkeletonRows } from './ui'

const RESOURCE_CATEGORIES: { key: ResourceCategory; label: keyof Translations }[] = [
  { key: 'circular', label: 'rsCatCircular' },
  { key: 'notice', label: 'rsCatNotice' },
  { key: 'suggestion', label: 'rsCatSuggestion' },
  { key: 'question', label: 'rsCatQuestion' },
  { key: 'other', label: 'rsCatOther' },
]

const blank = (category: ResourceCategory): ResourceInput => ({
  category, tag: null, title_en: '', title_bn: null, details_en: null, details_bn: null, file_id: null,
  link_url: null, apply_url: null, starts_on: null, ends_on: null, is_pinned: false, is_published: true,
})

function toInput(r: ApiResource): ResourceInput {
  const copy: Partial<ApiResource> = { ...r }
  for (const k of ['id', 'created_at', 'updated_at', 'file_name', 'file_type', 'file_size', 'file_url'] as const) delete copy[k]
  return copy as ResourceInput
}

/** Today as `YYYY-MM-DD` in the admin's time zone, to compare with a circular's last date. */
const today = () => {
  const d = new Date()
  return new Date(d.getTime() - d.getTimezoneOffset() * 60_000).toISOString().slice(0, 10)
}

/** Admin → Resources: job circulars (PDF + apply link + dates), suggestions, past exam questions and other downloads. */
export default function AdminResources({ language }: { language: Language }) {
  const t = translations[language]
  const { toast, confirm } = useFeedback()
  const library = useMediaLibrary(t)
  const [items, setItems] = useState<ApiResource[] | null>(null)
  const [category, setCategory] = useState<ResourceCategory | 'all'>('all')
  const [query, setQuery] = useState('')
  const [editing, setEditing] = useState<{ id?: string; form: ResourceInput } | null>(null)
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({})
  const [saving, setSaving] = useState(false)
  const fileInput = useRef<HTMLInputElement>(null)

  useEffect(() => {
    api.resources.list().then(setItems).catch(e => { toast(errorText(t, e), 'error'); setItems([]) })
  }, [t, toast])

  const catLabel = (c: ResourceCategory) => t[RESOURCE_CATEGORIES.find(x => x.key === c)!.label]
  const date = (d: string) => new Date(`${d}T00:00:00`).toLocaleDateString(language === 'bn' ? 'bn-BD' : 'en-GB', { day: 'numeric', month: 'short', year: 'numeric' })

  const shown = useMemo(() => {
    const q = query.trim().toLowerCase()
    return (items ?? []).filter(r => (category === 'all' || r.category === category)
      && (!q || `${r.title_en} ${r.title_bn ?? ''} ${r.details_en ?? ''} ${r.tag ?? ''}`.toLowerCase().includes(q)))
  }, [items, category, query])

  const tags = useMemo(() => [...new Set((items ?? []).map(r => r.tag).filter((x): x is string => !!x))].sort(), [items])

  const open = (r?: ApiResource) => {
    setFieldErrors({})
    setEditing(r ? { id: r.id, form: toInput(r) } : { form: blank(category === 'all' ? 'circular' : category) })
  }

  const replace = (saved: ApiResource) => setItems(prev => {
    const rest = (prev ?? []).filter(x => x.id !== saved.id)
    return [saved, ...rest].sort((a, b) => Number(b.is_pinned) - Number(a.is_pinned))
  })

  async function save() {
    if (!editing) return
    setSaving(true); setFieldErrors({})
    try {
      const saved = editing.id ? await api.resources.update(editing.id, editing.form) : await api.resources.create(editing.form)
      replace(saved)
      setEditing(null)
      toast(editing.id ? t.adminSaved : t.adminCreated)
    } catch (e) {
      if (e instanceof AdminApiError) setFieldErrors(e.fields)
      toast(errorText(t, e), 'error')
    } finally { setSaving(false) }
  }

  async function remove(r: ApiResource) {
    if (!await confirm({ title: t.adminConfirmDelete, body: fill(t.adminDeleteBody, { name: r.title_en }), confirmLabel: t.adminDelete, danger: true })) return
    try { await api.resources.delete(r.id); setItems(prev => (prev ?? []).filter(x => x.id !== r.id)); toast(t.adminDeleted) }
    catch (e) { toast(errorText(t, e), 'error') }
  }

  async function togglePublished(r: ApiResource) {
    try {
      const saved = await api.resources.update(r.id, { ...toInput(r), is_published: !r.is_published })
      setItems(prev => (prev ?? []).map(x => (x.id === r.id ? saved : x)))
      toast(saved.is_published ? t.adminPublishedToast : t.adminUnpublishedToast)
    } catch (e) { toast(errorText(t, e), 'error') }
  }

  if (!items) return <SkeletonRows />

  const f = editing?.form
  const set = <K extends keyof ResourceInput>(k: K, v: ResourceInput[K]) => setEditing(e => (e ? { ...e, form: { ...e.form, [k]: v } } : e))
  const err = (k: string) => (fieldErrors[k] ? <small className="cm-field-error">{adminErrorText(t, fieldErrors[k], fieldErrors[k])}</small> : null)
  const textOrNull = (v: string) => (v.trim() ? v : null)
  const attached = f?.file_id ? library.files?.find(x => x.id === f.file_id) ?? items.find(x => x.file_id === f.file_id && x.file_url) : undefined
  const attachedName = attached ? ('original_name' in attached ? attached.original_name : attached.file_name) : null
  const attachedUrl = attached ? ('url' in attached ? attached.url : attached.file_url) : null
  const isCircular = f?.category === 'circular'
  const now = today()
  const counts = (c: ResourceCategory) => items.filter(r => r.category === c).length

  return (
    <div className="adm-screen">
      <div className="adm-toolbar">
        <div className="adm-segmented" role="tablist" aria-label={t.rsCategory}>
          <button type="button" role="tab" aria-selected={category === 'all'} className={category === 'all' ? 'active' : ''} onClick={() => setCategory('all')}>
            {t.rsAll} <span className="adm-chip">{items.length}</span>
          </button>
          {RESOURCE_CATEGORIES.map(c => (
            <button key={c.key} type="button" role="tab" aria-selected={category === c.key} className={category === c.key ? 'active' : ''} onClick={() => setCategory(c.key)}>
              {t[c.label]} <span className="adm-chip">{counts(c.key)}</span>
            </button>
          ))}
        </div>
        <label className="adm-search">
          <Icon name="search" size={15} />
          <input type="search" value={query} onChange={e => setQuery(e.target.value)} placeholder={t.rsSearch} aria-label={t.rsSearch} />
        </label>
        <button className="adm-btn primary adm-toolbar-end" onClick={() => open()}><Icon name="plus" size={15} />{t.rsNew}</button>
      </div>

      <div className="adm-table-card">
        {shown.length === 0 ? <EmptyState icon="file" text={items.length ? t.adminNoResults : t.rsEmpty} /> : (
          <div className="adm-table-scroll">
            <table className="adm-table">
              <thead>
                <tr>
                  <th>{t.adminTitle}</th>
                  <th>{t.rsCategory}</th>
                  <th>{t.rsAttachments}</th>
                  <th>{t.rsDates}</th>
                  <th>{t.adminStatus}</th>
                  <th className="col-actions"><span className="sr-only">{t.adminActions}</span></th>
                </tr>
              </thead>
              <tbody>
                {shown.map(r => {
                  const closed = !!r.ends_on && r.ends_on < now
                  return (
                    <tr key={r.id}>
                      <td>
                        <button type="button" className="adm-cell-title adm-cell-link" onClick={() => open(r)}>
                          {r.is_pinned && <span className="an-pin" title={t.anPinnedBadge}><Icon name="pin" size={13} /></span>}
                          {r.title_en}
                        </button>
                        {r.details_en && <div className="adm-cell-sub">{r.details_en}</div>}
                      </td>
                      <td>
                        <span className={`rs-cat rs-cat-${r.category}`}>{catLabel(r.category)}</span>
                        {r.tag && <div className="adm-cell-sub">{r.tag}</div>}
                      </td>
                      <td className="adm-nowrap">
                        <div className="rs-links">
                          {r.file_url && <a href={r.file_url} target="_blank" rel="noreferrer" title={r.file_name ?? ''}><Icon name="file" size={14} />{t.rsFile}</a>}
                          {r.link_url && <a href={r.link_url} target="_blank" rel="noreferrer"><Icon name="link" size={14} />{t.rsLink}</a>}
                          {r.apply_url && <a href={r.apply_url} target="_blank" rel="noreferrer"><Icon name="external" size={14} />{t.rsApply}</a>}
                        </div>
                      </td>
                      <td className="adm-cell-muted adm-nowrap">
                        {r.starts_on || r.ends_on ? (
                          <>
                            <div>{r.starts_on ? date(r.starts_on) : '—'} → {r.ends_on ? date(r.ends_on) : '—'}</div>
                            {r.ends_on && <div className={`adm-cell-sub${closed ? ' rs-closed' : ''}`}>{closed ? t.rsClosed : t.rsOpen}</div>}
                          </>
                        ) : '—'}
                      </td>
                      <td>
                        <button type="button" className={`adm-pill is-toggle ${r.is_published ? 'is-on' : 'is-off'}`} onClick={() => togglePublished(r)} title={r.is_published ? t.adminUnpub : t.adminPub}>
                          <i />{r.is_published ? t.adminStatusPublished : t.adminStatusDraft}
                        </button>
                      </td>
                      <td className="col-actions">
                        <div className="adm-row-actions">
                          <IconButton icon="edit" label={t.adminEdit} onClick={() => open(r)} />
                          <IconButton icon="trash" label={t.adminDelete} tone="danger" onClick={() => remove(r)} />
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

      <Modal open={!!editing} onClose={() => setEditing(null)} title={editing?.id ? t.rsEdit : t.rsNew} size="lg">
        {f && (
          <div className="an-form">
            <div className="an-tones rs-cats" role="radiogroup" aria-label={t.rsCategory}>
              {RESOURCE_CATEGORIES.map(c => (
                <button key={c.key} type="button" role="radio" aria-checked={f.category === c.key}
                  className={`an-tone-option rs-cat-${c.key}${f.category === c.key ? ' active' : ''}`} onClick={() => set('category', c.key)}>
                  {t[c.label]}
                </button>
              ))}
            </div>
            {err('category')}
            <div className="form-grid">
              <label>{isCircular ? t.rsOrgEn : t.adminTitleEn}
                <input value={f.title_en} onChange={e => set('title_en', e.target.value)} aria-invalid={!!fieldErrors.title_en} maxLength={200}
                  placeholder={isCircular ? 'Bangladesh Petroleum Corporation' : ''} />{err('title_en')}
              </label>
              <label>{isCircular ? t.rsOrgBn : t.adminTitleBn}<input value={f.title_bn ?? ''} onChange={e => set('title_bn', textOrNull(e.target.value))} maxLength={200} /></label>
              <label>{isCircular ? t.rsPostsEn : t.rsDetailsEn}
                <textarea rows={2} value={f.details_en ?? ''} onChange={e => set('details_en', textOrNull(e.target.value))} placeholder={isCircular ? 'Programmer-01, Assistant Programmer-01' : ''} />
              </label>
              <label>{isCircular ? t.rsPostsBn : t.rsDetailsBn}<textarea rows={2} value={f.details_bn ?? ''} onChange={e => set('details_bn', textOrNull(e.target.value))} /></label>
              <label>{t.rsTag}
                <input value={f.tag ?? ''} list="rs-tags" maxLength={60} onChange={e => set('tag', textOrNull(e.target.value))} placeholder={isCircular ? 'Govt job, Teacher, M.Sc' : ''} />
                <datalist id="rs-tags">{tags.map(x => <option key={x} value={x} />)}</datalist>
                <small className="adm-hint">{t.rsTagHint}</small>
              </label>

              <div className="rs-file-field full-width">
                <span className="rs-field-label">{t.rsFileField}</span>
                {f.file_id ? (
                  <div className="rs-file-chosen">
                    <Icon name="file" size={16} />
                    {attachedUrl ? <a href={attachedUrl} target="_blank" rel="noreferrer">{attachedName}</a> : <span>{attachedName ?? t.rsFile}</span>}
                    <button type="button" className="adm-btn" onClick={() => set('file_id', null)}>{t.rsRemoveFile}</button>
                  </div>
                ) : (
                  <div className="rs-file-pick">
                    <button type="button" className="adm-btn" onClick={() => fileInput.current?.click()} disabled={library.uploading}>
                      <Icon name="upload" size={15} />{library.uploading ? t.mdUploading : t.rsUploadFile}
                    </button>
                    <select className="adm-select" value="" onChange={e => e.target.value && set('file_id', e.target.value)} aria-label={t.rsFromLibrary}>
                      <option value="">{t.rsFromLibrary}</option>
                      {(library.files ?? []).map(x => <option key={x.id} value={x.id}>{x.original_name} ({formatBytes(x.file_size)})</option>)}
                    </select>
                  </div>
                )}
                <input ref={fileInput} type="file" hidden accept="application/pdf,image/png,image/jpeg,image/gif,image/webp,.doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                  onChange={async e => {
                    const list = e.target.files
                    e.target.value = ''
                    if (list?.length) { const [first] = await library.upload(list); if (first) set('file_id', first.id) }
                  }} />
                {err('file_id') ?? <small className="adm-hint">{t.rsFileHint}</small>}
              </div>

              <label>{t.rsLinkField}
                <input value={f.link_url ?? ''} placeholder="https://…" onChange={e => set('link_url', textOrNull(e.target.value))} aria-invalid={!!fieldErrors.link_url} />
                {err('link_url') ?? <small className="adm-hint">{t.rsLinkHint}</small>}
              </label>
              <label>{t.rsApplyField}
                <input value={f.apply_url ?? ''} placeholder="https://….teletalk.com.bd/" onChange={e => set('apply_url', textOrNull(e.target.value))} aria-invalid={!!fieldErrors.apply_url} />
                {err('apply_url')}
              </label>
              <label>{isCircular ? t.rsStartCircular : t.rsStart}<input type="date" value={f.starts_on ?? ''} onChange={e => set('starts_on', e.target.value || null)} aria-invalid={!!fieldErrors.starts_on} />{err('starts_on')}</label>
              <label>{isCircular ? t.rsEndCircular : t.rsEnd}<input type="date" value={f.ends_on ?? ''} onChange={e => set('ends_on', e.target.value || null)} aria-invalid={!!fieldErrors.ends_on} />{err('ends_on')}</label>
              <label className="rte-check"><input type="checkbox" checked={f.is_pinned} onChange={e => set('is_pinned', e.target.checked)} /> {t.rsPinned}</label>
              <label className="rte-check"><input type="checkbox" checked={f.is_published} onChange={e => set('is_published', e.target.checked)} /> {t.rsVisible}</label>
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

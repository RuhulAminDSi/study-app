import { useEffect, useMemo, useRef, useState } from 'react'
import type { Language } from '../types'
import { translations } from '../data/translations'
import { ARTICLE_CATEGORIES, type ArticleCategory } from '../router'
import { AdminApiError } from './api'
import { adminErrorText, errorText } from './adminErrors'
import { fill, useFeedback } from './feedback'
import Modal from './Modal'
import RichTextEditor from './RichTextEditor'
import { siteAdminApi, type AdminArticleRow, type ArticleInput } from './siteAdminApi'
import { ARTICLE_LABELS } from '../public/siteApi'
import { useMediaLibrary } from './useMediaLibrary'
import { EmptyState, Icon, IconButton, SkeletonRows } from './ui'

const blank = (category: ArticleCategory): ArticleInput => ({
  slug: '', category, title_en: '', title_bn: null, summary_en: null, summary_bn: null, body_en: '', body_bn: null,
  cover_file_id: null, tags: [], is_pinned: false, is_published: false,
})

/** Admin → Articles: preparation guides, job news, written-exam tips and solutions, published at `#/articles/<slug>`. */
export default function AdminArticles({ language }: { language: Language }) {
  const t = translations[language]
  const { toast, confirm } = useFeedback()
  const library = useMediaLibrary(t)
  const [items, setItems] = useState<AdminArticleRow[] | null>(null)
  const [category, setCategory] = useState<ArticleCategory | 'all'>('all')
  const [query, setQuery] = useState('')
  const [editing, setEditing] = useState<{ id?: string; form: ArticleInput; tags: string; version: number } | null>(null)
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({})
  const [saving, setSaving] = useState(false)
  const fileInput = useRef<HTMLInputElement>(null)

  useEffect(() => {
    siteAdminApi.articles().then(setItems).catch(e => { toast(errorText(t, e), 'error'); setItems([]) })
  }, [t, toast])

  const shown = useMemo(() => {
    const q = query.trim().toLowerCase()
    return (items ?? []).filter(a => (category === 'all' || a.category === category)
      && (!q || `${a.title_en} ${a.title_bn ?? ''} ${a.tags.join(' ')} ${a.slug}`.toLowerCase().includes(q)))
  }, [items, category, query])

  async function open(row?: AdminArticleRow) {
    setFieldErrors({})
    if (!row) { setEditing({ form: blank(category === 'all' ? 'guideline' : category), tags: '', version: Date.now() }); return }
    try {
      const a = await siteAdminApi.article(row.id)
      const form: ArticleInput = {
        slug: a.slug, category: a.category, title_en: a.title_en, title_bn: a.title_bn, summary_en: a.summary_en, summary_bn: a.summary_bn,
        body_en: a.body_en, body_bn: a.body_bn, cover_file_id: a.cover_file_id, tags: a.tags, is_pinned: a.is_pinned, is_published: a.is_published,
      }
      setEditing({ id: a.id, form, tags: a.tags.join(', '), version: Date.now() })
    } catch (e) { toast(errorText(t, e), 'error') }
  }

  const toRow = (a: AdminArticleRow): AdminArticleRow => ({
    id: a.id, slug: a.slug, category: a.category, title_en: a.title_en, title_bn: a.title_bn, tags: a.tags, is_pinned: a.is_pinned,
    is_published: a.is_published, published_at: a.published_at, views: a.views, updated_at: a.updated_at,
  })

  async function save() {
    if (!editing) return
    setSaving(true); setFieldErrors({})
    const form = { ...editing.form, tags: editing.tags.split(',').map(x => x.trim()).filter(Boolean) }
    try {
      const saved = editing.id ? await siteAdminApi.updateArticle(editing.id, form) : await siteAdminApi.createArticle(form)
      setItems(prev => [toRow(saved), ...(prev ?? []).filter(x => x.id !== saved.id)].sort((a, b) => Number(b.is_pinned) - Number(a.is_pinned)))
      setEditing(null)
      toast(editing.id ? t.adminSaved : t.adminCreated)
    } catch (e) {
      if (e instanceof AdminApiError) setFieldErrors(e.fields)
      toast(errorText(t, e), 'error')
    } finally { setSaving(false) }
  }

  async function remove(a: AdminArticleRow) {
    if (!await confirm({ title: t.adminConfirmDelete, body: fill(t.adminDeleteBody, { name: a.title_en }), confirmLabel: t.adminDelete, danger: true })) return
    try { await siteAdminApi.deleteArticle(a.id); setItems(prev => (prev ?? []).filter(x => x.id !== a.id)); toast(t.adminDeleted) }
    catch (e) { toast(errorText(t, e), 'error') }
  }

  if (!items) return <SkeletonRows />

  const f = editing?.form
  const set = <K extends keyof ArticleInput>(k: K, v: ArticleInput[K]) => setEditing(e => (e ? { ...e, form: { ...e.form, [k]: v } } : e))
  const err = (k: string) => (fieldErrors[k] ? <small className="cm-field-error">{adminErrorText(t, fieldErrors[k], fieldErrors[k])}</small> : null)
  const textOrNull = (v: string) => (v.trim() ? v : null)
  const images = (library.files ?? []).filter(x => x.mime_type.startsWith('image/'))
  const cover = f?.cover_file_id ? library.files?.find(x => x.id === f.cover_file_id) : undefined
  const date = (iso: string) => new Date(iso).toLocaleDateString(language === 'bn' ? 'bn-BD' : 'en-GB', { day: 'numeric', month: 'short', year: 'numeric' })

  return (
    <div className="adm-screen">
      <div className="adm-toolbar">
        <div className="adm-segmented" role="tablist" aria-label={t.rsCategory}>
          <button type="button" role="tab" aria-selected={category === 'all'} className={category === 'all' ? 'active' : ''} onClick={() => setCategory('all')}>
            {t.rsAll} <span className="adm-chip">{items.length}</span>
          </button>
          {ARTICLE_CATEGORIES.map(c => (
            <button key={c} type="button" role="tab" aria-selected={category === c} className={category === c ? 'active' : ''} onClick={() => setCategory(c)}>
              {t[ARTICLE_LABELS[c]]} <span className="adm-chip">{items.filter(a => a.category === c).length}</span>
            </button>
          ))}
        </div>
        <label className="adm-search">
          <Icon name="search" size={15} />
          <input type="search" value={query} onChange={e => setQuery(e.target.value)} placeholder={t.arSearch} aria-label={t.arSearch} />
        </label>
        <button className="adm-btn primary adm-toolbar-end" onClick={() => open()}><Icon name="plus" size={15} />{t.arNew}</button>
      </div>

      <div className="adm-table-card">
        {shown.length === 0 ? <EmptyState icon="notes" text={items.length ? t.adminNoResults : t.arEmpty} /> : (
          <div className="adm-table-scroll">
            <table className="adm-table">
              <thead>
                <tr>
                  <th>{t.adminTitle}</th>
                  <th>{t.rsCategory}</th>
                  <th>{t.arViews}</th>
                  <th>{t.adminStatus}</th>
                  <th className="col-actions"><span className="sr-only">{t.adminActions}</span></th>
                </tr>
              </thead>
              <tbody>
                {shown.map(a => (
                  <tr key={a.id}>
                    <td>
                      <button type="button" className="adm-cell-title adm-cell-link" onClick={() => open(a)}>
                        {a.is_pinned && <span className="an-pin" title={t.anPinnedBadge}><Icon name="pin" size={13} /></span>}
                        {a.title_en}
                      </button>
                      <div className="adm-cell-sub">/{a.slug}{a.tags.length > 0 && ` · ${a.tags.join(', ')}`}</div>
                    </td>
                    <td><span className={`rs-cat ar-cat-${a.category}`}>{t[ARTICLE_LABELS[a.category]]}</span></td>
                    <td className="adm-cell-muted adm-nowrap">{a.views}</td>
                    <td className="adm-nowrap">
                      <span className={`adm-pill ${a.is_published ? 'is-on' : 'is-off'}`}><i />{a.is_published ? t.adminStatusPublished : t.adminStatusDraft}</span>
                      {a.published_at && <div className="adm-cell-sub">{date(a.published_at)}</div>}
                    </td>
                    <td className="col-actions">
                      <div className="adm-row-actions">
                        {a.is_published && <a className="adm-icon-btn" href={`#/articles/${a.slug}`} target="_blank" rel="noreferrer" title={t.arOpen} aria-label={t.arOpen}><Icon name="external" size={15} /></a>}
                        <IconButton icon="edit" label={t.adminEdit} onClick={() => open(a)} />
                        <IconButton icon="trash" label={t.adminDelete} tone="danger" onClick={() => remove(a)} />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      <Modal open={!!editing} onClose={() => setEditing(null)} title={editing?.id ? t.arEdit : t.arNew} size="lg">
        {f && editing && (
          <div className="an-form">
            <div className="an-tones rs-cats ar-cats" role="radiogroup" aria-label={t.rsCategory}>
              {ARTICLE_CATEGORIES.map(c => (
                <button key={c} type="button" role="radio" aria-checked={f.category === c}
                  className={`an-tone-option ar-cat-${c}${f.category === c ? ' active' : ''}`} onClick={() => set('category', c)}>
                  {t[ARTICLE_LABELS[c]]}
                </button>
              ))}
            </div>
            {err('category')}
            <div className="form-grid">
              <label>{t.adminTitleEn}
                <input value={f.title_en} onChange={e => set('title_en', e.target.value)} aria-invalid={!!fieldErrors.title_en} maxLength={200} />{err('title_en')}
              </label>
              <label>{t.adminTitleBn}<input value={f.title_bn ?? ''} onChange={e => set('title_bn', textOrNull(e.target.value))} maxLength={200} />{err('title_bn')}</label>
              <label>{t.arSlug}
                <input value={f.slug} onChange={e => set('slug', e.target.value.toLowerCase())} aria-invalid={!!fieldErrors.slug} maxLength={120} placeholder="bpsc-non-cadre-2025" />
                {err('slug') ?? <small className="adm-hint">{t.arSlugHint}</small>}
              </label>
              <label>{t.arTags}
                <input value={editing.tags} onChange={e => setEditing(x => (x ? { ...x, tags: e.target.value } : x))} placeholder="BPSC, Non-cadre, Programmer" />
                <small className="adm-hint">{t.arTagsHint}</small>
              </label>
              <label>{t.arSummaryEn}<textarea rows={2} maxLength={500} value={f.summary_en ?? ''} onChange={e => set('summary_en', textOrNull(e.target.value))} /></label>
              <label>{t.arSummaryBn}<textarea rows={2} maxLength={500} value={f.summary_bn ?? ''} onChange={e => set('summary_bn', textOrNull(e.target.value))} /></label>

              <div className="rs-file-field full-width">
                <span className="rs-field-label">{t.arCover}</span>
                {f.cover_file_id ? (
                  <div className="rs-file-chosen">
                    {cover ? <img className="ar-cover-thumb" src={cover.url} alt="" /> : <Icon name="image" size={16} />}
                    <span>{cover?.original_name ?? t.arCover}</span>
                    <button type="button" className="adm-btn" onClick={() => set('cover_file_id', null)}>{t.rsRemoveFile}</button>
                  </div>
                ) : (
                  <div className="rs-file-pick">
                    <button type="button" className="adm-btn" onClick={() => fileInput.current?.click()} disabled={library.uploading}>
                      <Icon name="upload" size={15} />{library.uploading ? t.mdUploading : t.arUploadCover}
                    </button>
                    <select className="adm-select" value="" onChange={e => e.target.value && set('cover_file_id', e.target.value)} aria-label={t.rsFromLibrary}>
                      <option value="">{t.rsFromLibrary}</option>
                      {images.map(x => <option key={x.id} value={x.id}>{x.original_name}</option>)}
                    </select>
                  </div>
                )}
                <input ref={fileInput} type="file" hidden accept="image/png,image/jpeg,image/gif,image/webp"
                  onChange={async e => {
                    const list = e.target.files
                    e.target.value = ''
                    if (list?.length) { const [first] = await library.upload(list); if (first) set('cover_file_id', first.id) }
                  }} />
                {err('cover_file_id')}
              </div>

              <div className="full-width ar-body">
                <span className="rs-field-label">{t.arBodyEn}</span>
                <RichTextEditor key={`en-${editing.version}`} initial={f.body_en} onChange={html => set('body_en', html)} placeholder={t.arBodyPlaceholder} t={t} />
                {err('body_en')}
              </div>
              <div className="full-width ar-body">
                <span className="rs-field-label">{t.arBodyBn}</span>
                <RichTextEditor key={`bn-${editing.version}`} initial={f.body_bn ?? ''} onChange={html => set('body_bn', html.replace(/<[^>]*>/g, '').trim() ? html : null)} placeholder={t.arBodyPlaceholder} t={t} />
                {err('body_bn')}
              </div>
              <label className="rte-check"><input type="checkbox" checked={f.is_pinned} onChange={e => set('is_pinned', e.target.checked)} /> {t.rsPinned}</label>
              <label className="rte-check"><input type="checkbox" checked={f.is_published} onChange={e => set('is_published', e.target.checked)} /> {t.arPublish}</label>
            </div>

            <div className="form-actions">
              <button className="adm-btn" onClick={() => setEditing(null)}>{t.adminCancel}</button>
              <button className="adm-btn primary" onClick={save} disabled={saving}>{saving ? '…' : editing.id ? t.adminSave : t.adminCreate}</button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  )
}

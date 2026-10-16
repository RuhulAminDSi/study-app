import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import type { Language, Translations } from '../types'
import { translations } from '../data/translations'
import { renderContent } from '../components/ContentRenderer'
import { api, type ApiChapter, type ApiLesson, type ApiLessonRevision, type ApiSideMenu } from './api'
import { errorText } from './adminErrors'
import { useFeedback } from './feedback'
import { legacyToHtml } from './legacyToHtml'
import { setNavigationGuard } from './navGuard'
import RichTextEditor from './RichTextEditor'
import Modal from './Modal'
import { EmptyState, Icon, SkeletonRows, StatusPill } from './ui'

type Lang = 'en' | 'bn'

interface Draft {
  title_en: string; title_bn: string
  content_en: string; content_bn: string
  takeaways_en: string; takeaways_bn: string
  code_en: string
  level: string; side_menu_id: string; is_published: boolean
}

const LEVELS = ['Beginner', 'Intermediate', 'Advanced']
const showsNoteSet = (content: string) => content.includes('class="hn-viewer"')
const lines = (s: string) => s.split('\n').map(x => x.trim()).filter(Boolean)

/** The lesson as the editor sees it. Legacy line-format bodies are converted to HTML for the rich-text editor. */
function toDraft(l: ApiLesson): { draft: Draft; converted: boolean } {
  const en = legacyToHtml(l.content_en)
  const bn = legacyToHtml(l.content_bn)
  return {
    converted: !!(en || bn),
    draft: {
      title_en: l.title_en, title_bn: l.title_bn ?? '',
      content_en: en ?? l.content_en ?? '', content_bn: bn ?? l.content_bn ?? '',
      takeaways_en: (l.takeaways_en ?? []).join('\n'), takeaways_bn: (l.takeaways_bn ?? []).join('\n'),
      code_en: l.code_en ?? '',
      level: l.level, side_menu_id: l.side_menu_id, is_published: l.is_published,
    },
  }
}

/** Only the fields that differ from the saved lesson, in the API's shape. */
function changesBetween(saved: Draft, draft: Draft, notesLocked: boolean): Partial<ApiLesson> {
  const out: Record<string, unknown> = {}
  const text = (k: keyof Draft, nullable: boolean) => {
    if (draft[k] === saved[k]) return
    const v = (draft[k] as string).trim()
    out[k] = nullable && !v ? null : draft[k]
  }
  text('title_en', false); text('title_bn', true); text('code_en', true)
  if (!notesLocked) {
    // A converted legacy body is only written back once the admin actually edits it.
    if (draft.content_en !== saved.content_en) out.content_en = draft.content_en
    if (draft.content_bn !== saved.content_bn) out.content_bn = draft.content_bn.trim() ? draft.content_bn : null
  }
  for (const k of ['takeaways_en', 'takeaways_bn'] as const) {
    if (draft[k] !== saved[k]) out[k] = lines(draft[k])
  }
  for (const k of ['level', 'side_menu_id', 'is_published'] as const) {
    if (draft[k] !== saved[k]) out[k] = draft[k]
  }
  return out as Partial<ApiLesson>
}

/** Admin → Lessons → Edit: title, body, takeaways and formula in both languages, with preview and version history. */
export default function LessonEditor({ id, language, onExit }: { id: string; language: Language; onExit: () => void }) {
  const t = translations[language]
  const { toast, confirm } = useFeedback()
  const [lesson, setLesson] = useState<ApiLesson | null>(null)
  const [chapters, setChapters] = useState<ApiChapter[]>([])
  const [menus, setMenus] = useState<ApiSideMenu[]>([])
  const [saved, setSaved] = useState<Draft | null>(null)
  const [draft, setDraft] = useState<Draft | null>(null)
  const [converted, setConverted] = useState(false)
  const [lang, setLang] = useState<Lang>('en')
  const [panel, setPanel] = useState<'preview' | 'history'>('preview')
  const [revisions, setRevisions] = useState<ApiLessonRevision[] | null>(null)
  const [viewing, setViewing] = useState<ApiLessonRevision | null>(null)
  const [saving, setSaving] = useState(false)
  const [editorKey, setEditorKey] = useState(0)
  const [failed, setFailed] = useState(false)

  const load = useCallback((l: ApiLesson) => {
    const { draft: d, converted: c } = toDraft(l)
    setLesson(l); setSaved(d); setDraft(d); setConverted(c); setEditorKey(k => k + 1)
  }, [])

  useEffect(() => {
    Promise.all([api.lessons.get(id), api.chapters.list(), api.menus.list()])
      .then(([l, ch, me]) => { setChapters(ch); setMenus(me); load(l) })
      .catch(e => { toast(errorText(t, e), 'error'); setFailed(true) })
  }, [id, load, t, toast])

  const loadRevisions = useCallback(() => {
    api.lessons.revisions(id).then(setRevisions).catch(e => toast(errorText(t, e), 'error'))
  }, [id, t, toast])
  useEffect(() => { if (panel === 'history' && !revisions) loadRevisions() }, [panel, revisions, loadRevisions])

  const notesLocked = !!lesson && showsNoteSet(lesson.content_en)
  const changes = useMemo(() => (saved && draft ? changesBetween(saved, draft, notesLocked) : {}), [saved, draft, notesLocked])
  const dirty = Object.keys(changes).length > 0

  // Guard against losing work: the browser tab closing, and admin navigation (see navGuard.ts).
  const dirtyRef = useRef(dirty)
  useEffect(() => { dirtyRef.current = dirty }, [dirty])
  useEffect(() => {
    const onBeforeUnload = (e: BeforeUnloadEvent) => { if (dirtyRef.current) e.preventDefault() }
    window.addEventListener('beforeunload', onBeforeUnload)
    setNavigationGuard(() => (dirtyRef.current
      ? confirm({ title: t.edLeaveTitle, body: t.edLeaveBody, confirmLabel: t.edDiscard, danger: true })
      : Promise.resolve(true)))
    return () => { window.removeEventListener('beforeunload', onBeforeUnload); setNavigationGuard(null) }
  }, [confirm, t])

  const save = useCallback(async () => {
    if (!saved || !draft || saving) return
    const body = changesBetween(saved, draft, notesLocked)
    if (!Object.keys(body).length) return
    if (!draft.title_en.trim()) { toast(t.errRequired, 'error'); setLang('en'); return }
    setSaving(true)
    try {
      const updated = await api.lessons.update(id, body)
      // Keep the editor's document (no remount); just record what is now saved.
      setLesson(updated); setSaved(draft); setConverted(false); setRevisions(null)
      toast(t.adminSaved)
    } catch (e) { toast(errorText(t, e), 'error') } finally { setSaving(false) }
  }, [saved, draft, saving, notesLocked, id, t, toast])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 's') { e.preventDefault(); save() }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [save])

  async function restore(rev: ApiLessonRevision) {
    if (dirty && !await confirm({ title: t.edLeaveTitle, body: t.edLeaveBody, confirmLabel: t.edDiscard, danger: true })) return
    if (!await confirm({ title: t.edRestoreTitle, body: t.edRestoreBody, confirmLabel: t.edRestore })) return
    try {
      load(await api.lessons.restore(id, rev.id))
      setViewing(null); loadRevisions(); toast(t.edRestoredToast)
    } catch (e) { toast(errorText(t, e), 'error') }
  }

  const sectionOptions = useMemo(() => [...chapters].sort((a, b) => a.chapter_number - b.chapter_number).map(ch => ({
    ch, menus: menus.filter(m => m.chapter_id === ch.id).sort((a, b) => a.sort_order - b.sort_order),
  })), [chapters, menus])

  if (failed) return <div className="adm-table-card"><EmptyState icon="alert" text={t.genericServerError} /></div>
  if (!lesson || !draft || !saved) return <SkeletonRows rows={8} />

  const set = <K extends keyof Draft>(k: K, v: Draft[K]) => setDraft(d => (d ? { ...d, [k]: v } : d))
  const chapterId = menus.find(m => m.id === lesson.side_menu_id)?.chapter_id
  const bodyKey = `content_${lang}` as const
  const previewBody = draft[bodyKey] || (lang === 'bn' ? draft.content_en : '')
  const previewTakeaways = lines(draft[`takeaways_${lang}`]).length ? lines(draft[`takeaways_${lang}`]) : lang === 'bn' ? lines(draft.takeaways_en) : []
  const when = (iso: string) => new Date(iso).toLocaleString(language === 'bn' ? 'bn-BD' : 'en-GB', { day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' })

  return (
    <div className="ed">
      <div className="ed-head">
        <button type="button" className="adm-btn" onClick={onExit}><Icon name="arrowLeft" size={15} />{t.edBack}</button>
        <div className="ed-head-title">
          <h1>{draft.title_en || lesson.title_en}</h1>
          <span className={`ed-state${dirty ? ' dirty' : ''}`}>{saving ? t.edSaving : dirty ? t.edUnsaved : t.edAllSaved}</span>
        </div>
        {lesson.is_published && chapterId && (
          <a className="adm-btn" href={`/study-hub/#/chapter/${chapterId}/lesson/${lesson.id}`} target="_blank" rel="noreferrer">
            <Icon name="external" size={15} /><span className="ed-hide-sm">{t.edViewAsCandidate}</span>
          </a>
        )}
        <button type="button" className="adm-btn primary" onClick={save} disabled={!dirty || saving} title="Ctrl+S">{saving ? t.edSaving : t.adminSave}</button>
      </div>

      <div className="ed-grid">
        <section className="adm-card ed-main">
          <div className="ed-langbar">
            <div className="adm-segmented" role="tablist">
              {(['en', 'bn'] as const).map(l => (
                <button key={l} type="button" role="tab" aria-selected={lang === l} className={lang === l ? 'active' : ''} onClick={() => setLang(l)}>
                  {l === 'en' ? t.edEnglish : t.edBangla}
                </button>
              ))}
            </div>
          </div>

          <div className="ed-body">
            {converted && lang === 'en' && <div className="ed-note info"><Icon name="alert" size={16} /><span>{t.edConverted}</span></div>}

            <label className="ed-field">
              <span>{lang === 'en' ? t.adminTitleEn : t.adminTitleBn}</span>
              <input className="ed-title-input" value={draft[`title_${lang}`]} onChange={e => set(`title_${lang}`, e.target.value)}
                placeholder={lang === 'bn' ? draft.title_en : ''} />
            </label>

            <div className="ed-field">
              <span>{t.edBody}</span>
              {notesLocked ? (
                <div className="ed-note"><Icon name="notes" size={16} /><span>{t.edNotesLocked}</span></div>
              ) : (
                <>
                  {lang === 'bn' && !draft.content_bn && draft.content_en && (
                    <div className="ed-note info">
                      <span>{t.edNoBangla}</span>
                      <button type="button" className="adm-btn sm" onClick={() => { set('content_bn', draft.content_en); setEditorKey(k => k + 1) }}>{t.edCopyFromEn}</button>
                    </div>
                  )}
                  <RichTextEditor key={`${lang}-${editorKey}`} initial={draft[bodyKey]} onChange={html => set(bodyKey, html)} placeholder={t.edBodyPlaceholder} t={t} />
                </>
              )}
            </div>

            {!notesLocked && (
              <>
                <label className="ed-field">
                  <span>{t.edTakeaways}</span>
                  <textarea rows={4} value={draft[`takeaways_${lang}`]} onChange={e => set(`takeaways_${lang}`, e.target.value)} />
                  <small>{t.edTakeawaysHint}</small>
                </label>
                {lang === 'en' && (
                  <label className="ed-field">
                    <span>{t.edFormula}</span>
                    <textarea rows={3} className="ed-mono" value={draft.code_en} onChange={e => set('code_en', e.target.value)} spellCheck={false} />
                    <small>{t.edFormulaHint}</small>
                  </label>
                )}
              </>
            )}
          </div>
        </section>

        <aside className="ed-side">
          <section className="adm-card">
            <header className="adm-card-head"><h2>{t.edSettings}</h2></header>
            <div className="ed-settings">
              <label className="ed-field">
                <span>{t.adminStatus}</span>
                <div><StatusPill published={draft.is_published} t={t} onToggle={() => set('is_published', !draft.is_published)} /></div>
              </label>
              <label className="ed-field">
                <span>{t.edSection}</span>
                <select className="adm-select" value={draft.side_menu_id} onChange={e => set('side_menu_id', e.target.value)}>
                  {sectionOptions.map(({ ch, menus: ms }) => (
                    <optgroup key={ch.id} label={`${ch.chapter_number}. ${(language === 'bn' && ch.title_bn) || ch.title_en}`}>
                      {ms.map(m => <option key={m.id} value={m.id}>{(language === 'bn' && m.label_bn) || m.label_en}</option>)}
                    </optgroup>
                  ))}
                </select>
              </label>
              <label className="ed-field">
                <span>{t.adminLevel}</span>
                <select className="adm-select" value={draft.level} onChange={e => set('level', e.target.value)}>
                  {LEVELS.map(l => <option key={l}>{l}</option>)}
                </select>
              </label>
            </div>
          </section>

          <section className="adm-card ed-panel">
            <div className="ed-panel-tabs" role="tablist">
              <button type="button" role="tab" aria-selected={panel === 'preview'} className={panel === 'preview' ? 'active' : ''} onClick={() => setPanel('preview')}>
                <Icon name="eye" size={15} />{t.edPreview}
              </button>
              <button type="button" role="tab" aria-selected={panel === 'history'} className={panel === 'history' ? 'active' : ''} onClick={() => setPanel('history')}>
                <Icon name="history" size={15} />{t.edHistory}
              </button>
            </div>
            {panel === 'preview' ? (
              <div className="ed-preview">
                <LessonPreview title={draft[`title_${lang}`] || draft.title_en} body={notesLocked ? '' : previewBody}
                  takeaways={notesLocked ? [] : previewTakeaways} code={notesLocked ? '' : draft.code_en} t={t} />
              </div>
            ) : !revisions ? <SkeletonRows rows={4} /> : revisions.length === 0 ? <EmptyState icon="history" text={t.edHistoryEmpty} /> : (
              <ol className="ed-history">
                {revisions.map((r, i) => (
                  <li key={r.id}>
                    <div className="ed-history-main">
                      <span className="ed-history-when">{when(r.created_at)}</span>
                      <span className="ed-history-who">
                        {r.edited_by_name ?? t.edBySystem}
                        {i === 0 && <span className="adm-kind kind-note">{t.edCurrent}</span>}
                        {r.note === 'original' && <span className="adm-kind kind-lesson">{t.edOriginal}</span>}
                        {r.note === 'restored' && <span className="adm-kind kind-pyq">{t.edRestoredTag}</span>}
                      </span>
                    </div>
                    <button type="button" className="adm-btn sm" onClick={() => setViewing(r)}>{t.edViewVersion}</button>
                    {i > 0 && <button type="button" className="adm-btn sm" onClick={() => restore(r)}>{t.edRestore}</button>}
                  </li>
                ))}
              </ol>
            )}
          </section>
        </aside>
      </div>

      <Modal open={!!viewing} onClose={() => setViewing(null)} title={viewing ? `${when(viewing.created_at)} · ${viewing.edited_by_name ?? t.edBySystem}` : ''} size="lg">
        {viewing && (
          <>
            <div className="ed-preview ed-preview-modal">
              <LessonPreview title={viewing.title_en} body={viewing.content_en} takeaways={viewing.takeaways_en ?? []} code={viewing.code_en ?? ''} t={t} />
            </div>
            <div className="form-actions">
              <button className="adm-btn" onClick={() => setViewing(null)}>{t.adminClose}</button>
              {revisions?.[0]?.id !== viewing.id && <button className="adm-btn primary" onClick={() => restore(viewing)}>{t.edRestore}</button>}
            </div>
          </>
        )}
      </Modal>
    </div>
  )
}

/** The lesson rendered with the reader's own renderer and styles, as a candidate will see it. */
function LessonPreview({ title, body, takeaways, code, t }: { title: string; body: string; takeaways: string[]; code: string; t: Translations }) {
  return (
    <article className="ed-reader">
      <h1 className="lesson-title">{title}</h1>
      <div className="content-rendered">{body ? renderContent(body) : null}</div>
      {takeaways.length > 0 && (
        <div className="takeaways-card">
          <h3 className="takeaways-title">{t.keyTakeaways}</h3>
          <ul className="takeaways-list">{takeaways.map((x, i) => <li key={i}>{x}</li>)}</ul>
        </div>
      )}
      {code.trim() && <pre className="ed-code">{code}</pre>}
    </article>
  )
}


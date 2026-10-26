import { useCallback, useRef, useState, type ReactNode } from 'react'
import type { Translations } from '../types'
import type { useDataTable } from './useDataTable'
import Modal from './Modal'
import { FeedbackContext, fill, type ConfirmOptions, type ToastTone } from './feedback'

/** Shared building blocks for the admin screens: icons, table parts, status pills, toasts and confirm dialogs. */

const ICONS = {
  dashboard: 'M4 5a1 1 0 011-1h5a1 1 0 011 1v5a1 1 0 01-1 1H5a1 1 0 01-1-1V5zm9 0a1 1 0 011-1h5a1 1 0 011 1v2a1 1 0 01-1 1h-5a1 1 0 01-1-1V5zm0 7a1 1 0 011-1h5a1 1 0 011 1v7a1 1 0 01-1 1h-5a1 1 0 01-1-1v-7zm-9 3a1 1 0 011-1h5a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4z',
  chapters: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253',
  lessons: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
  candidates: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
  notes: 'M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z',
  pyq: 'M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
  signOut: 'M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1',
  menu: 'M4 6h16M4 12h16M4 18h16',
  close: 'M6 18L18 6M6 6l12 12',
  sun: 'M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z',
  moon: 'M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z',
  external: 'M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14',
  search: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z',
  plus: 'M12 4v16m8-8H4',
  edit: 'M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z',
  eye: 'M15 12a3 3 0 11-6 0 3 3 0 016 0zM2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z',
  trash: 'M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16',
  up: 'M5 15l7-7 7 7',
  down: 'M19 9l-7 7-7-7',
  chevronLeft: 'M15 19l-7-7 7-7',
  chevronRight: 'M9 5l7 7-7 7',
  check: 'M5 13l4 4L19 7',
  alert: 'M12 9v2m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z',
  inbox: 'M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4',
  sort: 'M8 9l4-4 4 4m0 6l-4 4-4-4',
  arrowRight: 'M13 7l5 5m0 0l-5 5m5-5H6',
  arrowLeft: 'M11 17l-5-5m0 0l5-5m-5 5h12',
  megaphone: 'M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z',
  image: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z',
  history: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
  list: 'M9 6h11M9 12h11M9 18h11M5 6h.01M5 12h.01M5 18h.01',
  listOrdered: 'M10 6h10M10 12h10M10 18h10M4 4.5h1.5V9M4 9h3M4 14.5c0-.8.7-1.5 1.5-1.5S7 13.7 7 14.5c0 1.5-3 2-3 4h3',
  quote: 'M8 10H5a1 1 0 01-1-1V6a1 1 0 011-1h3a1 1 0 011 1v5c0 2-1 3.5-3 4.5M18 10h-3a1 1 0 01-1-1V6a1 1 0 011-1h3a1 1 0 011 1v5c0 2-1 3.5-3 4.5',
  code: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
  table: 'M3 10h18M3 14h18M10 4v16M5 4h14a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2z',
  link: 'M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1',
  minus: 'M5 12h14',
  undo: 'M3 10h10a5 5 0 015 5v2M3 10l5-5M3 10l5 5',
  redo: 'M21 10H11a5 5 0 00-5 5v2m15-7l-5-5m5 5l-5 5',
  highlight: 'M15.232 5.232l3.536 3.536M9 11l6.732-6.732a2.5 2.5 0 013.536 3.536L12.536 14.5H9V11zm-6 10h18',
  copy: 'M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z',
  upload: 'M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12',
  layers: 'M4 7l8-4 8 4-8 4-8-4zm0 5l8 4 8-4M4 17l8 4 8-4',
  pin: 'M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z',
  exams: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4',
  file: 'M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z',
} as const

export type IconName = keyof typeof ICONS

export function Icon({ name, size = 16 }: { name: IconName; size?: number }) {
  return (
    <svg width={size} height={size} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d={ICONS[name]} />
    </svg>
  )
}

/** A square icon-only button; `label` is both its tooltip and its accessible name. */
export function IconButton({ icon, label, onClick, tone, disabled }: {
  icon: IconName; label: string; onClick: () => void; tone?: 'danger'; disabled?: boolean
}) {
  return (
    <button type="button" className={`adm-icon-btn${tone ? ` ${tone}` : ''}`} title={label} aria-label={label} onClick={onClick} disabled={disabled}>
      <Icon name={icon} size={15} />
    </button>
  )
}

/** Published/draft badge. With `onToggle` it is a button that flips the state. */
export function StatusPill({ published, t, onToggle }: { published: boolean; t: Translations; onToggle?: () => void }) {
  const label = published ? t.adminStatusPublished : t.adminStatusDraft
  const cls = `adm-pill ${published ? 'is-on' : 'is-off'}`
  if (!onToggle) return <span className={cls}><i />{label}</span>
  return (
    <button type="button" className={`${cls} is-toggle`} onClick={onToggle} title={published ? t.adminUnpub : t.adminPub}>
      <i />{label}
    </button>
  )
}

export function EmptyState({ icon = 'inbox', text }: { icon?: IconName; text: string }) {
  return (
    <div className="adm-empty">
      <span className="adm-empty-icon"><Icon name={icon} size={22} /></span>
      <p>{text}</p>
    </div>
  )
}

export function SearchBox({ value, onChange, placeholder }: { value: string; onChange: (v: string) => void; placeholder: string }) {
  return (
    <label className="adm-search">
      <Icon name="search" size={15} />
      <input type="search" value={value} placeholder={placeholder} aria-label={placeholder} onChange={e => onChange(e.target.value)} />
    </label>
  )
}

type Table = ReturnType<typeof useDataTable>

export function SortTh({ tbl, k, label, className }: { tbl: Table; k: string; label: string; className?: string }) {
  const active = tbl.sort.key === k
  return (
    <th className={`sortable${active ? ' sorted' : ''}${className ? ` ${className}` : ''}`}
      aria-sort={active ? (tbl.sort.dir === 'asc' ? 'ascending' : 'descending') : 'none'}>
      <button type="button" onClick={() => tbl.toggleSort(k)}>
        {label}
        <Icon name={active ? (tbl.sort.dir === 'asc' ? 'up' : 'down') : 'sort'} size={12} />
      </button>
    </th>
  )
}

/** Footer under a table: "1–15 of 120" and page buttons. `page` is zero-based. */
export function Pager({ page, pageSize, total, onPage, t }: { page: number; pageSize: number; total: number; onPage: (p: number) => void; t: Translations }) {
  const totalPages = Math.max(1, Math.ceil(total / pageSize))
  if (total === 0) return null
  const from = page * pageSize + 1
  const to = Math.min(total, (page + 1) * pageSize)
  return (
    <div className="adm-pager">
      <span>{fill(t.adminRange, { from, to, total })}</span>
      {totalPages > 1 && (
        <div className="adm-pager-btns">
          <IconButton icon="chevronLeft" label="‹" onClick={() => onPage(page - 1)} disabled={page === 0} />
          <span className="adm-pager-num">{page + 1} / {totalPages}</span>
          <IconButton icon="chevronRight" label="›" onClick={() => onPage(page + 1)} disabled={page >= totalPages - 1} />
        </div>
      )}
    </div>
  )
}

export function TablePager({ tbl, pageSize, t }: { tbl: Table; pageSize: number; t: Translations }) {
  return <Pager page={tbl.page} pageSize={pageSize} total={tbl.total} onPage={tbl.goPage} t={t} />
}

export function SkeletonRows({ rows = 6 }: { rows?: number }) {
  return (
    <div className="adm-skeleton" aria-busy="true">
      {Array.from({ length: rows }, (_, i) => <div key={i} className="adm-skeleton-row" />)}
    </div>
  )
}

// ── Toasts and confirm dialogs ──

interface Toast { id: number; text: string; tone: ToastTone }

export function FeedbackProvider({ t, children }: { t: Translations; children: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([])
  const [pending, setPending] = useState<(ConfirmOptions & { resolve: (ok: boolean) => void }) | null>(null)
  const nextId = useRef(0)

  const dismiss = useCallback((id: number) => setToasts(list => list.filter(x => x.id !== id)), [])
  const toast = useCallback((text: string, tone: ToastTone = 'success') => {
    const id = ++nextId.current
    setToasts(list => [...list.slice(-3), { id, text, tone }])
    setTimeout(() => dismiss(id), tone === 'error' ? 6000 : 3500)
  }, [dismiss])
  const confirm = useCallback((opts: ConfirmOptions) => new Promise<boolean>(resolve => setPending({ ...opts, resolve })), [])
  const answer = (ok: boolean) => { pending?.resolve(ok); setPending(null) }

  return (
    <FeedbackContext.Provider value={{ toast, confirm }}>
      {children}
      <div className="adm-toasts" role="status" aria-live="polite">
        {toasts.map(x => (
          <div key={x.id} className={`adm-toast ${x.tone}`}>
            <Icon name={x.tone === 'error' ? 'alert' : 'check'} size={16} />
            <span>{x.text}</span>
            <button type="button" onClick={() => dismiss(x.id)} aria-label={t.adminClose}><Icon name="close" size={14} /></button>
          </div>
        ))}
      </div>
      <Modal open={!!pending} onClose={() => answer(false)} title={pending?.title ?? ''} size="sm">
        {pending?.body && <p className="adm-confirm-body">{pending.body}</p>}
        <div className="form-actions">
          <button className="adm-btn" onClick={() => answer(false)}>{t.adminCancel}</button>
          <button className={`adm-btn ${pending?.danger ? 'danger' : 'primary'}`} onClick={() => answer(true)}>{pending?.confirmLabel}</button>
        </div>
      </Modal>
    </FeedbackContext.Provider>
  )
}

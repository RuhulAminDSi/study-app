import type { ReactNode } from 'react'
import type { Translations } from '../types'
import Icon, { type IconName } from '../components/portal/icons'
import type { HistoryItem } from './examApi'
import { KIND_LABEL } from './format'

/** Small building blocks shared by the examination screens. */

export function KindBadge({ kind, t }: { kind: HistoryItem['kind']; t: Translations }) {
  return <span className={`ex-kind ex-kind-${kind}`}>{t[KIND_LABEL[kind]]}</span>
}

export function LoadError({ text, onRetry, t }: { text: string; onRetry?: () => void; t: Translations }) {
  return (
    <div className="ex-alert bad" role="alert">
      <Icon name="alert" />
      <span>{text}</span>
      {onRetry && <button type="button" className="ex-btn sm" onClick={onRetry}><Icon name="refresh" />{t.retry}</button>}
    </div>
  )
}

export function EmptyPanel({ icon, title, text, children }: { icon: IconName; title: string; text: string; children?: ReactNode }) {
  return (
    <div className="ex-empty">
      <span className="pd-stat-icon"><Icon name={icon} /></span>
      <h3>{title}</h3>
      <p className="pd-muted">{text}</p>
      {children}
    </div>
  )
}

export function CardSkeleton({ rows = false }: { rows?: boolean }) {
  return (
    <div className={rows ? 'ex-skel-rows' : 'ex-grid ex-skel-grid'} aria-busy="true" aria-hidden="true">
      {Array.from({ length: rows ? 5 : 3 }, (_, i) => <div key={i} className="sp-skel" />)}
    </div>
  )
}

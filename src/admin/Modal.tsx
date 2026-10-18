import { useEffect, useId, useRef, type ReactNode } from 'react'

/** Open modals, innermost last: only the top one answers Escape (a confirm dialog can open over another modal). */
const openStack: object[] = []

interface ModalProps {
  open: boolean
  onClose: () => void
  title: string
  children: ReactNode
  wide?: boolean
  size?: 'sm' | 'md' | 'lg'
}

export default function Modal({ open, onClose, title, children, wide, size = wide ? 'lg' : 'md' }: ModalProps) {
  const titleId = useId()
  const panel = useRef<HTMLDivElement>(null)
  const closeRef = useRef(onClose)
  useEffect(() => { closeRef.current = onClose })

  // Escape closes; the page behind stops scrolling; focus moves into the dialog and back out when it closes.
  useEffect(() => {
    if (!open) return
    const previous = document.activeElement as HTMLElement | null
    const token = {}
    openStack.push(token)
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape' && openStack[openStack.length - 1] === token) closeRef.current() }
    document.addEventListener('keydown', onKey)
    const overflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const focusable = panel.current?.querySelector<HTMLElement>('.modal-body input, .modal-body select, .modal-body textarea, .modal-body button')
    ;(focusable ?? panel.current)?.focus()
    return () => {
      document.removeEventListener('keydown', onKey)
      openStack.splice(openStack.indexOf(token), 1)
      document.body.style.overflow = overflow
      previous?.focus?.()
    }
  }, [open])

  if (!open) return null
  return (
    <div className="modal-overlay" onMouseDown={e => { if (e.target === e.currentTarget) onClose() }}>
      <div ref={panel} className={`modal-content modal-${size}`} role="dialog" aria-modal="true" aria-labelledby={titleId} tabIndex={-1}>
        <div className="modal-header">
          <h3 id={titleId}>{title}</h3>
          <button type="button" className="modal-close" onClick={onClose} aria-label="Close">
            <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="modal-body">{children}</div>
      </div>
    </div>
  )
}

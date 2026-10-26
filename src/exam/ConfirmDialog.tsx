import { useEffect, useId, useRef, type ReactNode } from 'react'

/**
 * A modal confirmation built on <dialog>: the browser keeps focus inside it, makes the page behind inert and closes
 * it on Escape. Focus starts on the safe choice (cancel) and returns to where it was afterwards.
 */
export default function ConfirmDialog({ open, title, children, confirmLabel, cancelLabel, busy, onConfirm, onCancel }: {
  open: boolean
  title: string
  children: ReactNode
  confirmLabel: string
  cancelLabel: string
  busy?: boolean
  onConfirm: () => void
  onCancel: () => void
}) {
  const ref = useRef<HTMLDialogElement>(null)
  const cancelRef = useRef<HTMLButtonElement>(null)
  const previous = useRef<HTMLElement | null>(null)
  const titleId = useId()

  useEffect(() => {
    const dialog = ref.current
    if (!dialog) return
    if (open && !dialog.open) {
      previous.current = document.activeElement as HTMLElement | null
      dialog.showModal()
      cancelRef.current?.focus()
    } else if (!open && dialog.open) {
      dialog.close() // the page is inert until the dialog closes, so focus goes back afterwards
      previous.current?.focus?.()
    }
  }, [open])
  useEffect(() => {
    const dialog = ref.current
    return () => { if (dialog?.open) dialog.close() }
  }, [])

  return (
    <dialog ref={ref} className="ex-dialog" aria-labelledby={titleId}
      onCancel={e => { e.preventDefault(); if (!busy) onCancel() }}
      onMouseDown={e => { if (e.target === ref.current && !busy) onCancel() }}>
      {open && (
        <div className="ex-dialog-body">
          <h2 id={titleId}>{title}</h2>
          {children}
          <div className="ex-dialog-actions">
            <button ref={cancelRef} type="button" className="ex-btn" onClick={onCancel} disabled={busy}>{cancelLabel}</button>
            <button type="button" className="ex-btn primary" onClick={onConfirm} disabled={busy}>{confirmLabel}</button>
          </div>
        </div>
      )}
    </dialog>
  )
}

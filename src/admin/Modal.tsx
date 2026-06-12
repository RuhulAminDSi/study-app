import type { ReactNode } from 'react'

interface ModalProps {
  open: boolean
  onClose: () => void
  title: string
  children: ReactNode
  wide?: boolean
}

export default function Modal({ open, onClose, title, children, wide }: ModalProps) {
  if (!open) return null
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className={`modal-content${wide ? ' modal-wide' : ''}`} onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h3>{title}</h3>
          <button className="modal-close" onClick={onClose}>✕</button>
        </div>
        <div className="modal-body">{children}</div>
      </div>
    </div>
  )
}

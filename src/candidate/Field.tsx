import { useState, type InputHTMLAttributes } from 'react'

interface FieldProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string
  label: string
  error?: string
  /** Helper text shown under the input when there is no error. */
  hint?: string
  /** For password inputs: labels for the show/hide toggle. Omit to render no toggle. */
  reveal?: { show: string; hide: string }
}

export default function Field({ id, label, error, hint, reveal, type, ...input }: FieldProps) {
  const [revealed, setRevealed] = useState(false)
  const message = error ?? hint
  const messageId = message ? `${id}-${error ? 'error' : 'hint'}` : undefined

  return (
    <div className="cand-field">
      <label htmlFor={id}>{label}</label>
      <div className="cand-input-wrap">
        <input
          id={id}
          type={reveal && revealed ? 'text' : type}
          aria-invalid={error ? true : undefined}
          aria-describedby={messageId}
          {...input}
        />
        {reveal && (
          <button
            type="button"
            className="cand-reveal"
            aria-label={revealed ? reveal.hide : reveal.show}
            aria-pressed={revealed}
            onClick={() => setRevealed(r => !r)}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              {revealed ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 3l18 18M10.6 10.6a2 2 0 002.8 2.8M9.9 5.1A9.7 9.7 0 0112 5c5 0 9 4.5 10 7-.4 1-1.2 2.3-2.4 3.5M6.6 6.6C4.4 8 2.8 10.1 2 12c1 2.5 5 7 10 7 1.6 0 3.1-.4 4.4-1.1" />
              ) : (
                <>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2 12c1-2.5 5-7 10-7s9 4.5 10 7c-1 2.5-5 7-10 7S3 14.5 2 12z" />
                  <circle cx="12" cy="12" r="3" />
                </>
              )}
            </svg>
          </button>
        )}
      </div>
      {message && (
        <span id={messageId} className={error ? 'cand-field-error' : 'cand-field-hint'}>{message}</span>
      )}
    </div>
  )
}

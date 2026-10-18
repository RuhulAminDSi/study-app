import { createContext, useContext } from 'react'

export type ToastTone = 'success' | 'error'
export interface ConfirmOptions { title: string; body?: string; confirmLabel: string; danger?: boolean }

export interface Feedback {
  toast: (text: string, tone?: ToastTone) => void
  confirm: (opts: ConfirmOptions) => Promise<boolean>
}

/** Provided by <FeedbackProvider> in ui.tsx: toasts and confirm dialogs for the admin screens. */
export const FeedbackContext = createContext<Feedback | null>(null)

export function useFeedback(): Feedback {
  const ctx = useContext(FeedbackContext)
  if (!ctx) throw new Error('useFeedback must be used inside <FeedbackProvider>')
  return ctx
}

/** Fills `{name}` placeholders in a translation string. */
export const fill = (s: string, values: Record<string, string | number>) => s.replace(/\{(\w+)\}/g, (_, k: string) => String(values[k] ?? ''))

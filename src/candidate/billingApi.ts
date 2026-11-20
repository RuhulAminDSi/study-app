import { candidateFetch } from './candidateApi'

export type PayMethod = 'bkash' | 'nagad' | 'rocket'

export interface CandidatePayment {
  id: string
  plan_name: string
  months: number
  amount_bdt: number
  method: PayMethod
  sender_number: string
  trx_id: string
  status: 'pending' | 'approved' | 'rejected'
  admin_note: string | null
  reviewed_at: string | null
  created_at: string
}

export interface Billing {
  subscriptionUntil: string | null
  active: boolean
  paywall: { enabled: boolean; tests: boolean; practice: boolean }
  payment: { bkash: string; nagad: string; rocket: string; instructions_en: string; instructions_bn: string }
  payments: CandidatePayment[]
}

/** The signed-in candidate's plan and payment requests (server/src/routes/candidateBilling.ts). */
export const billingApi = {
  get: () => candidateFetch<Billing>('/candidate/billing'),
  pay: (body: { planId: string; method: PayMethod; senderNumber: string; trxId: string }) =>
    candidateFetch<CandidatePayment>('/candidate/billing/payments', { method: 'POST', body: JSON.stringify(body) }),
}

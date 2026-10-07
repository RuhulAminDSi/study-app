export const CANDIDATE_TOKEN_KEY = 'candidate_token'
export const CANDIDATE_USER_KEY = 'candidate_user'
/** Fired when the server rejects the stored candidate token. */
export const CANDIDATE_UNAUTHORIZED_EVENT = 'candidate:unauthorized'

export interface PublicCandidate {
  id: string
  fullName: string
  email: string
  phone: string | null
  targetPostId: string | null
  preferredLanguage: 'bn' | 'en'
}

export interface AuthResponse {
  token: string
  candidate: PublicCandidate
}

export interface RegisterInput {
  fullName: string
  email: string
  password: string
  phone?: string
  targetPostId?: string
}

interface ErrorBody {
  error?: string
  code?: string
  fields?: Record<string, string>
}

export class ApiError extends Error {
  status: number
  code?: string
  fields: Record<string, string>

  constructor(status: number, body: ErrorBody) {
    super(body.error || `Request failed (${status})`)
    this.status = status
    // Never surface a raw 5xx message (it may be an internal error); show the generic one instead.
    this.code = body.code ?? (status >= 500 ? 'internal_error' : undefined)
    this.fields = body.fields ?? {}
  }
}

export async function candidateFetch<T>(path: string, init: RequestInit = {}, withAuth = true): Promise<T> {
  const token = withAuth ? localStorage.getItem(CANDIDATE_TOKEN_KEY) : null
  const res = await fetch(`/api${path}`, {
    ...init,
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...init.headers,
    },
  })
  const body = await res.json().catch(() => ({}))
  if (!res.ok) {
    if (res.status === 401 && token) window.dispatchEvent(new Event(CANDIDATE_UNAUTHORIZED_EVENT))
    throw new ApiError(res.status, body as ErrorBody)
  }
  return body as T
}

export const candidateApi = {
  register: (input: RegisterInput) =>
    candidateFetch<AuthResponse>('/candidate/auth/register', { method: 'POST', body: JSON.stringify(input) }, false),
  login: (email: string, password: string) =>
    candidateFetch<AuthResponse>('/candidate/auth/login', { method: 'POST', body: JSON.stringify({ email, password }) }, false),
  me: () => candidateFetch<{ candidate: PublicCandidate }>('/candidate/me'),
}

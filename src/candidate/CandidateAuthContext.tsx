import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from 'react'
import {
  CANDIDATE_TOKEN_KEY,
  CANDIDATE_UNAUTHORIZED_EVENT,
  CANDIDATE_USER_KEY,
  candidateApi,
  type PublicCandidate,
} from './candidateApi'

interface CandidateAuthValue {
  token: string | null
  candidate: PublicCandidate | null
  isSignedIn: boolean
  signIn: (token: string, candidate: PublicCandidate) => void
  signOut: () => void
}

const CandidateAuthContext = createContext<CandidateAuthValue | null>(null)

function readStoredCandidate(): PublicCandidate | null {
  try {
    const raw = localStorage.getItem(CANDIDATE_USER_KEY)
    return raw ? (JSON.parse(raw) as PublicCandidate) : null
  } catch {
    return null
  }
}

export function CandidateAuthProvider({ children }: { children: ReactNode }) {
  const [token, setToken] = useState<string | null>(() => localStorage.getItem(CANDIDATE_TOKEN_KEY))
  const [candidate, setCandidate] = useState<PublicCandidate | null>(readStoredCandidate)

  const signIn = useCallback((newToken: string, newCandidate: PublicCandidate) => {
    localStorage.setItem(CANDIDATE_TOKEN_KEY, newToken)
    localStorage.setItem(CANDIDATE_USER_KEY, JSON.stringify(newCandidate))
    setToken(newToken)
    setCandidate(newCandidate)
  }, [])

  const signOut = useCallback(() => {
    localStorage.removeItem(CANDIDATE_TOKEN_KEY)
    localStorage.removeItem(CANDIDATE_USER_KEY)
    setToken(null)
    setCandidate(null)
  }, [])

  useEffect(() => {
    window.addEventListener(CANDIDATE_UNAUTHORIZED_EVENT, signOut)
    return () => window.removeEventListener(CANDIDATE_UNAUTHORIZED_EVENT, signOut)
  }, [signOut])

  // Keep every open tab in step: signing in or out in one tab updates the others.
  useEffect(() => {
    const onStorage = (e: StorageEvent) => {
      if (e.key !== CANDIDATE_TOKEN_KEY && e.key !== CANDIDATE_USER_KEY && e.key !== null) return
      setToken(localStorage.getItem(CANDIDATE_TOKEN_KEY))
      setCandidate(readStoredCandidate())
    }
    window.addEventListener('storage', onStorage)
    return () => window.removeEventListener('storage', onStorage)
  }, [])

  // Refresh the stored profile once per load; a rejected token signs out via the event above.
  useEffect(() => {
    if (!token) return
    candidateApi
      .me()
      .then(({ candidate: fresh }) => {
        localStorage.setItem(CANDIDATE_USER_KEY, JSON.stringify(fresh))
        setCandidate(fresh)
      })
      .catch(() => undefined)
  }, [token])

  return (
    <CandidateAuthContext.Provider value={{ token, candidate, isSignedIn: !!token, signIn, signOut }}>
      {children}
    </CandidateAuthContext.Provider>
  )
}

export function useCandidateAuth() { // eslint-disable-line react-refresh/only-export-components
  const ctx = useContext(CandidateAuthContext)
  if (!ctx) throw new Error('useCandidateAuth must be used within CandidateAuthProvider')
  return ctx
}

/** True when a JWT is malformed or past its `exp` (read without verifying; the server still decides). */
function isExpired(token: string): boolean {
  try {
    const payload = token.split('.')[1].replace(/-/g, '+').replace(/_/g, '/')
    const { exp } = JSON.parse(atob(payload)) as { exp?: number }
    return typeof exp === 'number' && exp * 1000 <= Date.now()
  } catch {
    return true
  }
}

/**
 * The token saved under `key`, or null when there is none or it has expired. An expired token is
 * removed together with `userKey`, so a stale session can't keep the app looking signed in.
 */
export function readStoredToken(key: string, userKey: string): string | null {
  const token = localStorage.getItem(key)
  if (!token) return null
  if (!isExpired(token)) return token
  localStorage.removeItem(key)
  localStorage.removeItem(userKey)
  return null
}

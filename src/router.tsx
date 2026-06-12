import { useState, useEffect } from 'react'

type Route = 'public' | 'admin' | 'login'

function parseHash(): Route {
  const hash = window.location.hash.replace(/^#\//, '')
  if (hash.startsWith('admin/login')) return 'login'
  if (hash.startsWith('admin')) return 'admin'
  return 'public'
}

export function useRoute(): Route {
  const [route, setRoute] = useState<Route>(() => parseHash())

  useEffect(() => {
    const onHashChange = () => setRoute(parseHash())
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  return route
}

export function navigate(path: string) {
  window.location.hash = `#/${path}`
}

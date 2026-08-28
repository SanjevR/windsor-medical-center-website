import React from 'react'

function normalize(pathname) {
  if (!pathname) return '/'
  const withoutQuery = pathname.split('?')[0].split('#')[0]
  if (withoutQuery === '/') return '/'
  return withoutQuery.replace(/\/+$/, '') || '/'
}

export function navigate(to, { replace = false } = {}) {
  const destination = normalize(to)
  if (destination === normalize(window.location.pathname)) {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    return
  }
  const method = replace ? 'replaceState' : 'pushState'
  window.history[method]({}, '', destination)
  window.dispatchEvent(new PopStateEvent('popstate'))
}

export function useCurrentPath() {
  const [path, setPath] = React.useState(() => normalize(window.location.pathname))

  React.useEffect(() => {
    const update = () => setPath(normalize(window.location.pathname))
    window.addEventListener('popstate', update)
    return () => window.removeEventListener('popstate', update)
  }, [])

  return path
}

export function AppLink({ to, onNavigate, children, ...props }) {
  const handleClick = (event) => {
    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return
    }

    event.preventDefault()
    navigate(to)
    onNavigate?.()
  }

  return React.createElement('a', { href: to, onClick: handleClick, ...props }, children)
}

export function isActivePath(currentPath, item) {
  if (item.exact) return currentPath === item.path
  return currentPath === item.path || currentPath.startsWith(`${item.path}/`)
}

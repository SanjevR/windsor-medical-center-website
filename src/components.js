import React from 'react'
import { AppLink, isActivePath, navigate } from './router.js'
import { navItems, offices, searchPages, site } from './site-data.js'

const e = React.createElement

function Icon({ name, size = 24 }) {
  const common = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': true,
  }

  const paths = {
    menu: [e('line', { key: 1, x1: 4, y1: 7, x2: 20, y2: 7 }), e('line', { key: 2, x1: 4, y1: 12, x2: 20, y2: 12 }), e('line', { key: 3, x1: 4, y1: 17, x2: 20, y2: 17 })],
    search: [e('circle', { key: 1, cx: 11, cy: 11, r: 7 }), e('line', { key: 2, x1: 16.5, y1: 16.5, x2: 21, y2: 21 })],
    close: [e('line', { key: 1, x1: 5, y1: 5, x2: 19, y2: 19 }), e('line', { key: 2, x1: 19, y1: 5, x2: 5, y2: 19 })],
    phone: [e('path', { key: 1, d: 'M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2z' })],
    mail: [e('rect', { key: 1, x: 3, y: 5, width: 18, height: 14, rx: 2 }), e('polyline', { key: 2, points: '3 7 12 13 21 7' })],
    map: [e('path', { key: 1, d: 'M21 10c0 7-9 12-9 12S3 17 3 10a9 9 0 1 1 18 0z' }), e('circle', { key: 2, cx: 12, cy: 10, r: 3 })],
    file: [e('path', { key: 1, d: 'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z' }), e('polyline', { key: 2, points: '14 2 14 8 20 8' }), e('line', { key: 3, x1: 8, y1: 13, x2: 16, y2: 13 }), e('line', { key: 4, x1: 8, y1: 17, x2: 16, y2: 17 })],
    external: [e('path', { key: 1, d: 'M14 3h7v7' }), e('path', { key: 2, d: 'M10 14 21 3' }), e('path', { key: 3, d: 'M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5' })],
    clock: [e('circle', { key: 1, cx: 12, cy: 12, r: 9 }), e('polyline', { key: 2, points: '12 7 12 12 15.5 14' })],
    arrow: [e('line', { key: 1, x1: 5, y1: 12, x2: 19, y2: 12 }), e('polyline', { key: 2, points: '13 6 19 12 13 18' })],
    info: [e('circle', { key: 1, cx: 12, cy: 12, r: 9 }), e('line', { key: 2, x1: 12, y1: 11, x2: 12, y2: 16 }), e('line', { key: 3, x1: 12, y1: 8, x2: 12.01, y2: 8 })],
  }

  return e('svg', common, paths[name] || paths.info)
}

export function PageShell({ title, eyebrow, intro, className = '', children }) {
  return e(
    'section',
    { className: `page-shell ${className}`.trim() },
    e(
      'header',
      { className: 'page-heading' },
      eyebrow ? e('p', { className: 'eyebrow' }, eyebrow) : null,
      e('h1', null, title),
      intro ? e('p', { className: 'page-intro' }, intro) : null,
    ),
    children,
  )
}

export function Callout({ title, children, tone = 'blue', icon = 'info' }) {
  return e(
    'aside',
    { className: `callout callout-${tone}` },
    e('div', { className: 'callout-icon' }, e(Icon, { name: icon, size: 25 })),
    e('div', null, title ? e('h2', { className: 'callout-title' }, title) : null, children),
  )
}

export function SiteHeader({ onMenu, onSearch }) {
  return e(
    'header',
    { className: 'site-header' },
    e(
      'button',
      { className: 'icon-button', type: 'button', onClick: onMenu, 'aria-label': 'Open navigation menu' },
      e(Icon, { name: 'menu' }),
    ),
    e(
      AppLink,
      { to: '/', className: 'site-brand', 'aria-label': `${site.name} home` },
      e('span', { className: 'brand-mark', 'aria-hidden': true }, e('span', null, '+')),
      e('span', { className: 'brand-name' }, site.name),
    ),
    e(
      'button',
      { className: 'icon-button', type: 'button', onClick: onSearch, 'aria-label': 'Search this website' },
      e(Icon, { name: 'search' }),
    ),
  )
}

export function NavigationDrawer({ open, currentPath, onClose }) {
  React.useEffect(() => {
    if (!open) return undefined
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = previous
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [open, onClose])

  return e(
    React.Fragment,
    null,
    e('div', {
      className: `drawer-backdrop ${open ? 'is-open' : ''}`,
      onClick: onClose,
      'aria-hidden': true,
    }),
    e(
      'aside',
      {
        className: `nav-drawer ${open ? 'is-open' : ''}`,
        'aria-hidden': open ? 'false' : 'true',
        'aria-label': 'Website navigation',
      },
      e(
        'div',
        { className: 'drawer-header' },
        e('div', { className: 'drawer-title' }, site.shortName),
        e(
          'button',
          { className: 'icon-button', type: 'button', onClick: onClose, 'aria-label': 'Close navigation menu' },
          e(Icon, { name: 'close' }),
        ),
      ),
      e(
        'nav',
        { className: 'drawer-nav' },
        navItems.map((item) =>
          e(
            AppLink,
            {
              key: item.path,
              to: item.path,
              onNavigate: onClose,
              className: `drawer-link ${isActivePath(currentPath, item) ? 'active' : ''}`,
              'aria-current': isActivePath(currentPath, item) ? 'page' : undefined,
            },
            item.label,
          ),
        ),
      ),
      e(
        'div',
        { className: 'drawer-contact' },
        e('strong', null, 'Call an office'),
        offices.map((office) =>
          e(
            'a',
            { key: office.id, href: `tel:${office.phoneDial}` },
            `${office.name}: ${office.phoneDisplay}`,
          ),
        ),
      ),
    ),
  )
}

export function SearchDialog({ open, onClose }) {
  const [query, setQuery] = React.useState('')
  const inputRef = React.useRef(null)

  React.useEffect(() => {
    if (!open) return undefined
    setQuery('')
    const timer = window.setTimeout(() => inputRef.current?.focus(), 30)
    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKeyDown)
    return () => {
      window.clearTimeout(timer)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [open, onClose])

  if (!open) return null

  const needle = query.trim().toLowerCase()
  const results = needle
    ? searchPages.filter((page) => `${page.title} ${page.description} ${page.keywords}`.toLowerCase().includes(needle))
    : searchPages

  const choose = (path) => {
    navigate(path)
    onClose()
  }

  return e(
    'div',
    { className: 'search-overlay', role: 'dialog', 'aria-modal': true, 'aria-label': 'Search this website' },
    e('div', { className: 'search-backdrop', onClick: onClose, 'aria-hidden': true }),
    e(
      'section',
      { className: 'search-dialog' },
      e(
        'div',
        { className: 'search-dialog-header' },
        e('h2', null, 'Search this website'),
        e(
          'button',
          { className: 'icon-button', type: 'button', onClick: onClose, 'aria-label': 'Close search' },
          e(Icon, { name: 'close' }),
        ),
      ),
      e(
        'label',
        { className: 'search-field' },
        e(Icon, { name: 'search', size: 21 }),
        e('span', { className: 'sr-only' }, 'Search words'),
        e('input', {
          ref: inputRef,
          type: 'search',
          value: query,
          onChange: (event) => setQuery(event.target.value),
          placeholder: 'Search pages, forms, hours, or locations…',
        }),
      ),
      e(
        'div',
        { className: 'search-results', 'aria-live': 'polite' },
        results.length
          ? results.map((result) =>
              e(
                'button',
                { key: result.path, className: 'search-result', type: 'button', onClick: () => choose(result.path) },
                e('span', null, e('strong', null, result.title), e('small', null, result.description)),
                e(Icon, { name: 'arrow', size: 20 }),
              ),
            )
          : e('p', { className: 'empty-state' }, 'No matching page was found. Try another word.'),
      ),
    ),
  )
}

export function OfficeMap({ office }) {
  return e(
    'div',
    { className: 'map-frame' },
    e('iframe', {
      src: office.mapEmbed,
      title: `Google Map for the ${office.name}`,
      loading: 'lazy',
      allowFullScreen: true,
      referrerPolicy: 'no-referrer-when-downgrade',
    }),
  )
}

export function ContactActions({ office }) {
  return e(
    'div',
    { className: 'button-row' },
    e(
      'a',
      { className: 'button button-primary', href: `tel:${office.phoneDial}` },
      e(Icon, { name: 'phone', size: 19 }),
      `Call ${office.phoneDisplay}`,
    ),
    e(
      'a',
      { className: 'button button-secondary', href: office.directions, target: '_blank', rel: 'noreferrer' },
      e(Icon, { name: 'map', size: 19 }),
      'Directions',
      e(Icon, { name: 'external', size: 16 }),
    ),
  )
}

export function SiteFooter() {
  const year = new Date().getFullYear()
  return e(
    'footer',
    { className: 'site-footer' },
    e(
      'div',
      { className: 'footer-grid' },
      e(
        'section',
        null,
        e('h2', null, site.shortName),
        e('p', null, 'Public information for our East Windsor and Union, New Jersey offices.'),
        e(
          'a',
          { href: `mailto:${site.email}`, className: 'footer-email' },
          e(Icon, { name: 'mail', size: 18 }),
          site.email,
        ),
      ),
      e(
        'section',
        null,
        e('h2', null, 'Office telephone numbers'),
        offices.map((office) =>
          e(
            'p',
            { key: office.id, className: 'footer-phone' },
            e('span', null, office.name),
            e('a', { href: `tel:${office.phoneDial}` }, office.phoneDisplay),
          ),
        ),
      ),
      e(
        'section',
        null,
        e('h2', null, 'Important notice'),
        e('p', null, 'This public website is not a patient portal. Do not send protected health information or other sensitive information through the website or privacy-network mirrors.'),
      ),
    ),
    e(
      'div',
      { className: 'footer-legal' },
      e('p', null, `© Copyright ${year} Windsor Medical Center`),
      e('p', null, 'Windsor Medical Center does not claim ownership of every third-party image, mark, or service referenced on this website. Third-party material remains the property of its respective owner.'),
    ),
  )
}

export { Icon }

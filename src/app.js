import React from 'react'
import { NavigationDrawer, SearchDialog, SiteFooter, SiteHeader } from './components.js'
import {
  AboutPage,
  AnnouncementsPage,
  ContactPage,
  FormsPage,
  HomePage,
  HoursPage,
  NotFoundPage,
  PaymentPage,
  StaffPage,
} from './pages.js'
import { navigate, useCurrentPath } from './router.js'
import { searchPages, site } from './site-data.js'

const e = React.createElement

const routeTable = {
  '/': HomePage,
  '/about-us': AboutPage,
  '/contact-us-directions': ContactPage,
  '/forms-for-patients': FormsPage,
  '/meet-the-staff': StaffPage,
  '/payment-faq': PaymentPage,
  '/announcements': AnnouncementsPage,
  '/hours-of-operation': HoursPage,
}

const legacyRedirects = {
  '/annoucements': '/announcements',
  '/contact': '/contact-us-directions',
  '/help': '/forms-for-patients',
  '/staff': '/meet-the-staff',
  '/payment': '/payment-faq',
  '/hours': '/hours-of-operation',
}

function updateMetadata(path) {
  const page = searchPages.find((item) => item.path === path)
  const title = page && path !== '/' ? `${page.title} | ${site.name}` : site.name
  const description = page?.description || 'Public information for Windsor Medical Center & Med Sleep, LLC.'
  const canonicalUrl = `${site.domain}${path === '/' ? '/' : path}`

  document.title = title
  document.querySelector('meta[name="description"]')?.setAttribute('content', description)
  document.querySelector('meta[property="og:title"]')?.setAttribute('content', title)
  document.querySelector('meta[property="og:description"]')?.setAttribute('content', description)
  document.querySelector('meta[property="og:url"]')?.setAttribute('content', canonicalUrl)
  document.querySelector('link[rel="canonical"]')?.setAttribute('href', canonicalUrl)
}

export default function App() {
  const currentPath = useCurrentPath()
  const [drawerOpen, setDrawerOpen] = React.useState(false)
  const [searchOpen, setSearchOpen] = React.useState(false)

  React.useEffect(() => {
    const redirect = legacyRedirects[currentPath]
    if (redirect) {
      navigate(redirect, { replace: true })
      return
    }
    updateMetadata(currentPath)
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [currentPath])

  const EffectivePage = routeTable[currentPath] || NotFoundPage

  return e(
    React.Fragment,
    null,
    e(SiteHeader, { onMenu: () => setDrawerOpen(true), onSearch: () => setSearchOpen(true) }),
    e(NavigationDrawer, {
      open: drawerOpen,
      currentPath,
      onClose: () => setDrawerOpen(false),
    }),
    e(SearchDialog, { open: searchOpen, onClose: () => setSearchOpen(false) }),
    e('main', { id: 'main-content', className: 'site-main', tabIndex: -1 }, e(EffectivePage)),
    e(SiteFooter),
  )
}

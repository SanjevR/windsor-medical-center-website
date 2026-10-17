import React from 'react'
import { AppLink } from './router.js'
import { forms, offices, site, staff } from './site-data.js'
import { Callout, ContactActions, Icon, OfficeMap, PageShell } from './components.js'

const e = React.createElement

function DoctorsFeature() {
  return e(
    'figure',
    { className: 'doctors-feature' },
    e('img', {
      src: '/images/doctors-home.png',
      alt: 'Doctors in the Neighborhood — Windsor Medical Center, featuring Dr. Rajaram Kandasamy and Dr. Sri Sujanthy Rajaram',
    }),
  )
}

function NonDiscrimination() {
  return e(
    Callout,
    { title: 'Our commitment to patients', tone: 'soft', icon: 'info' },
    e(
      'p',
      null,
      'Our office will provide you with quality healthcare regardless of race, color, ethnicity, religion, language, political views or affiliations, national origin or citizenship status, sex, gender identity or expression, pregnancy, sexual orientation, age, disability, or military status.',
    ),
  )
}

export function HomePage() {
  return e(
    PageShell,
    { title: 'Welcome', className: 'home-page' },
    e(
      'div',
      { className: 'home-grid' },
      e(
        'div',
        { className: 'welcome-copy' },
        e(
          'ul',
          { className: 'welcome-list' },
          e('li', null, 'CareCredit'),
          e('li', { lang: 'ta' }, 'ஆம், நாம் தமிழ் பேச முடியும்'),
          e('li', null, 'Most insurances accepted'),
          e(
            'li',
            null,
            'By appointment only — see ',
            e(AppLink, { to: '/contact-us-directions' }, 'Contact Us / Directions'),
          ),
          e('li', null, 'Experienced consultants'),
        ),
        e(
          'div',
          { className: 'home-actions' },
          e(
            AppLink,
            { to: '/contact-us-directions', className: 'button button-primary' },
            e(Icon, { name: 'phone', size: 19 }),
            'Contact an office',
          ),
          e(
            AppLink,
            { to: '/hours-of-operation', className: 'button button-secondary' },
            e(Icon, { name: 'clock', size: 19 }),
            'View office hours',
          ),
        ),
      ),
      e(DoctorsFeature),
    ),
    e(NonDiscrimination),
    e(
      'section',
      { className: 'privacy-network' },
      e('div', { className: 'section-heading-inline' }, e('span', { className: 'section-icon' }, '◉'), e('h2', null, 'Privacy Network Access')),
      e('p', null, 'For users who prefer privacy-oriented networks, Windsor Medical Center also provides public informational mirrors through:'),
      e(
        'div',
        { className: 'network-grid' },
        e(
          'article',
          { className: 'network-card' },
          e('h3', null, 'Tor Onion Service'),
          e('code', null, site.torAddress),
          e('p', null, 'Open this address in Tor Browser.'),
        ),
        e(
          'article',
          { className: 'network-card' },
          e('h3', null, 'I2P Site'),
          e('a', { href: `http://${site.i2pAddress}`, target: '_blank', rel: 'noreferrer' }, site.i2pAddress),
          e('p', null, 'Open through a configured I2P browser or proxy.'),
        ),
      ),
      e('p', { className: 'network-warning' }, 'These services contain public practice information only and are not patient portals. Do not transmit protected health information or other sensitive information through them.'),
    ),
  )
}

export function AboutPage() {
  const qualifications = [
    'Board-certified specialists in Internal Medicine, Sleep Disorders, and Nephrology',
    'Fellow of the American Academy of Sleep Medicine',
    'Experienced in children with sleep disorders',
    'Fellow of the American College of Chest Physicians',
    'Academic physician experience',
    'Associate Professor of Medicine',
    'Research experience and publications',
  ]

  return e(
    PageShell,
    {
      title: 'About Us',
      intro: 'Windsor Medical Center & Med Sleep, LLC provides specialty and primary medical services through our two New Jersey offices.',
    },
    e(
      'section',
      { className: 'content-panel about-panel' },
      e('h2', null, 'Clinical experience and qualifications'),
      e('ul', { className: 'check-list' }, qualifications.map((item) => e('li', { key: item }, item))),
    ),
    e(NonDiscrimination),
  )
}

export function ContactPage() {
  return e(
    PageShell,
    {
      title: 'Contact Us / Directions',
      intro: 'Call ahead before visiting. Office hours do not necessarily mean that a physician or staff member is physically present on-site throughout the entire day.',
    },
    e(
      'div',
      { className: 'office-list' },
      offices.map((office) =>
        e(
          'article',
          { className: 'office-card', key: office.id },
          e(
            'div',
            { className: 'office-details' },
            e('p', { className: 'eyebrow' }, office.name),
            e('h2', null, office.fullName),
            e('address', null, office.street, e('br'), office.city),
            e(
              'dl',
              { className: 'contact-list' },
              e('div', null, e('dt', null, 'Telephone'), e('dd', null, e('a', { href: `tel:${office.phoneDial}` }, office.phoneDisplay))),
              e('div', null, e('dt', null, 'Fax'), e('dd', null, office.faxDisplay)),
              e('div', null, e('dt', null, 'Email'), e('dd', null, e('a', { href: `mailto:${site.email}` }, site.email))),
              e('div', null, e('dt', null, 'Location note'), e('dd', null, office.note)),
            ),
            e(ContactActions, { office }),
          ),
          e(OfficeMap, { office }),
        ),
      ),
    ),
    e(
      Callout,
      { title: 'Medical emergencies', tone: 'warning', icon: 'info' },
      e('p', null, 'For a medical emergency, call 911 or go to the nearest emergency room. For urgent medical concerns that cannot wait until the office reopens, please visit an urgent care center.'),
    ),
  )
}

export function FormsPage() {
  return e(
    PageShell,
    {
      title: 'Forms for Patients',
      intro: 'Downloading these forms is optional because copies are available at our offices. Completing and printing them before a visit may help your appointment proceed more quickly.',
    },
    e(
      Callout,
      { title: 'Before sending a form', tone: 'soft', icon: 'file' },
      e('p', null, 'Our fax number is listed on the Contact Us / Directions page. Please confirm with the office before emailing any form that contains medical or other sensitive information.'),
    ),
    e(
      'div',
      { className: 'forms-grid' },
      forms.map((form) =>
        e(
          'article',
          { className: 'form-card', key: form.href },
          e('div', { className: 'file-icon' }, e(Icon, { name: 'file', size: 27 })),
          e(
            'div',
            { className: 'form-copy' },
            e('h2', null, form.title),
            e('p', null, form.description),
            e('span', { className: 'file-type' }, form.type),
          ),
          e(
            'a',
            { className: 'button button-secondary form-button', href: form.href, target: '_blank', rel: 'noreferrer' },
            'Open form',
            e(Icon, { name: 'external', size: 16 }),
          ),
        ),
      ),
    ),
  )
}

export function StaffPage() {
  return e(
    PageShell,
    {
      title: 'Meet the Staff',
      intro: 'Our physicians and office staff work together to assist patients at the East Windsor and Union locations.',
    },
    e(
      'div',
      { className: 'staff-grid' },
      staff.map((person) =>
        e(
          'article',
          { className: 'staff-card', key: person.name },
          e('img', { src: person.image, alt: '', className: 'staff-image' }),
          e(
            'div',
            { className: 'staff-copy' },
            e('p', { className: 'eyebrow' }, person.role),
            e('h2', null, person.name),
            person.credentials ? e('p', { className: 'credentials' }, person.credentials) : null,
            e('p', null, person.specialties),
          ),
        ),
      ),
    ),
  )
}

function FaqItem({ question, children, open = false }) {
  return e(
    'details',
    { className: 'faq-item', open },
    e('summary', null, e('span', null, question), e('span', { className: 'faq-plus', 'aria-hidden': true }, '+')),
    e('div', { className: 'faq-answer' }, children),
  )
}

export function PaymentPage() {
  return e(
    PageShell,
    {
      title: 'Payment FAQ',
      intro: 'Please contact the office before your appointment when you have a question about insurance coverage, payment methods, or an unusual payment arrangement.',
    },
    e(
      'div',
      { className: 'faq-list' },
      e(
        FaqItem,
        { question: '1. What types of payment do you accept?', open: true },
        e('p', null, 'We accept cash, checks, money orders, credit and debit cards, contactless cards, Apple Pay, Google Pay, Samsung Pay, Venmo, and Cash App. At the East Windsor office, Bitcoin and Ethereum may also be accepted under the restrictions described below.'),
      ),
      e(
        FaqItem,
        { question: '2. How can I pay by Bitcoin or another accepted cryptocurrency?' },
        e('p', null, 'Contact Dr. Rajaram and Dr. Kandasamy’s son before coming to the appointment. A cryptocurrency payment must be approved in advance, and the authorized person must be present on-site. Payment is due at the time of service.'),
        e('p', null, e('strong', null, 'Cryptocurrency is not accepted at the Union office.')),
      ),
      e(
        FaqItem,
        { question: '3. How can I find out whether my insurance is accepted?' },
        e('p', null, 'We accept most insurance plans. Call the appropriate office and provide the name of your insurance plan so staff can help you confirm participation.'),
      ),
      e(
        FaqItem,
        { question: '4. When is payment due?' },
        e('p', null, 'Payments and copays are due at the time of service unless the office has approved another arrangement in advance.'),
      ),
      e(
        FaqItem,
        { question: '5. Where can I obtain directions?' },
        e('p', null, 'The Contact Us / Directions page provides addresses, telephone numbers, and an interactive Google Map for each office.'),
        e(AppLink, { to: '/contact-us-directions', className: 'text-link' }, 'Open Contact Us / Directions'),
      ),
      e(
        FaqItem,
        { question: '6. What is the cancellation policy?' },
        e('p', null, 'Please notify us when you need to cancel so the office can attempt to reschedule your appointment. Frequent cancellations without notice or a reasonable explanation may affect the practice’s ability to continue scheduling services. When a physician must cancel, the office will work to reschedule the appointment.'),
      ),
    ),
    e(
      Callout,
      { title: 'Payment conditions', tone: 'warning', icon: 'info' },
      e('p', null, 'The practice may decline a cryptocurrency payment and request cash, check, credit card, or debit card instead. The practice may also establish or change minimum payment requirements for card transactions. Contact the office for the current policy before relying on an alternative payment method.'),
    ),
  )
}

function XEmbed({ url }) {
  React.useEffect(() => {
    if (!url) return undefined
    const existing = document.querySelector('script[data-wmc-x-widget]')
    if (existing) {
      window.twttr?.widgets?.load()
      return undefined
    }
    const script = document.createElement('script')
    script.src = 'https://platform.twitter.com/widgets.js'
    script.async = true
    script.dataset.wmcXWidget = 'true'
    document.body.appendChild(script)
    return undefined
  }, [url])

  if (!url) return null
  return e(
    'section',
    { className: 'x-embed-panel' },
    e('h2', null, 'Latest update on X'),
    e('blockquote', { className: 'twitter-tweet' }, e('a', { href: url }, 'View this Windsor Medical Center update on X')),
  )
}

export function AnnouncementsPage() {
  return e(
    PageShell,
    {
      title: 'Announcements',
      intro: 'Public practice notices appear here so essential information remains readable even when an external social-media embed is unavailable.',
    },
    e(
  Callout,
  { title: 'Windsor Medical Center on X', tone: 'soft', icon: 'info' },
  e(
    'p',
    null,
    'Follow Windsor Medical Center on X for additional public announcements and practice updates.',
  ),
  e(
    'a',
    {
      href: site.xProfileUrl,
      target: '_blank',
      rel: 'noopener noreferrer',
      className: 'button button-secondary',
    },
    'View @WindsorMedNJ on X',
    e(Icon, { name: 'external', size: 16 }),
  ),
),
    e(
      'div',
      { className: 'announcement-list' },
      e(
        'article',
        { className: 'announcement-card' },
        e('p', { className: 'announcement-date' }, 'Current notice'),
        e('h2', null, 'Call ahead before visiting'),
        e('p', null, 'Patients are encouraged to call the appropriate office before arriving. Physician schedules vary, and staff may sometimes be working remotely while remaining available by telephone.'),
        e(AppLink, { to: '/hours-of-operation', className: 'text-link' }, 'Read the full hours and availability notice'),
      ),
      e(
        'article',
        { className: 'announcement-card' },
        e('p', { className: 'announcement-date' }, 'Privacy network access'),
        e('h2', null, 'Tor and I2P informational mirrors'),
        e('p', null, 'Windsor Medical Center provides privacy-oriented mirrors containing public practice information. They are not patient portals and must not be used to transmit protected health information.'),
        e(AppLink, { to: '/', className: 'text-link' }, 'View privacy-network addresses'),
      ),
    ),
  
  )
}

export function HoursPage() {
  return e(
    PageShell,
    {
      title: 'Hours of Operation',
      intro: 'Our general business hours are Monday through Friday, 9:00 a.m.–5:00 p.m. Each location follows the schedule below.',
    },
    e(
      'div',
      { className: 'hours-grid' },
      offices.map((office) =>
        e(
          'article',
          { className: 'hours-card', key: office.id },
          e('div', { className: 'hours-icon' }, e(Icon, { name: 'clock', size: 29 })),
          e('p', { className: 'eyebrow' }, office.name),
          e('h2', null, office.days),
          e('p', { className: 'hours-time' }, office.hours),
          e('a', { href: `tel:${office.phoneDial}` }, office.phoneDisplay),
        ),
      ),
    ),
    e(
      'div',
      { className: 'hours-content' },
      e(
        'section',
        { className: 'content-panel' },
        e('h2', null, 'Office staff availability'),
        e('p', null, 'Office staff are generally available during regular business hours to answer calls, schedule appointments, assist patients, and handle administrative matters. Although staff may not always be physically present on-site, they may continue working remotely and remain available to answer calls, return messages, and schedule appointments.'),
        e('p', null, 'Calls are generally returned within the same business day. Staff availability may be temporarily limited during lunch periods or while assisting another patient.'),
      ),
      e(
        'section',
        { className: 'content-panel' },
        e('h2', null, 'Staff lunch breaks'),
        e('p', null, 'Staff members take a one-hour lunch break, but there is no fixed lunch period. Lunch breaks may occur at different times during the business day.'),
        e('p', null, 'When a call is not answered, please leave your name, telephone number, and a brief explanation of how we can assist you.'),
      ),
      e(
        'section',
        { className: 'content-panel' },
        e('h2', null, 'Physician availability'),
        e('p', null, 'Dr. Kandasamy is generally available by appointment on regularly scheduled office days. His schedule may vary during certain weeks, so please call in advance to confirm availability.'),
        e('p', null, 'Dr. Sujanthy Rajaram sees patients on a limited, appointment-only basis. Her availability varies, and she is not regularly present during all office hours. Contact the office to ask about upcoming appointment dates.'),
      ),
      e(
        'section',
        { className: 'content-panel' },
        e('h2', null, 'After-hours calls'),
        e('p', null, 'After regular office hours, calls are directed to our answering service. Please leave your name, telephone number, and a brief message so the appropriate person can assist you.'),
        e('p', null, 'For a medical emergency, call 911 or go to the nearest emergency room. For urgent medical concerns that cannot wait until the office reopens, please visit an urgent care center.'),
      ),
    ),
    e(
      Callout,
      { title: 'Please call before visiting', tone: 'warning', icon: 'info' },
      e('p', null, 'Office hours do not necessarily mean that a physician or staff member is physically present on-site throughout the entire day. We recommend calling ahead before visiting either location.'),
    ),
  )
}

export function NotFoundPage() {
  return e(
    PageShell,
    { title: 'Page not found', intro: 'The page you requested does not exist or may have moved.' },
    e(
      'div',
      { className: 'not-found-panel' },
      e('p', null, 'Use the menu or return to the homepage to continue.'),
      e(AppLink, { to: '/', className: 'button button-primary' }, 'Return to the homepage'),
    ),
  )
}

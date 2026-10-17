export const site = {
  name: 'Windsor Medical Center & Med Sleep, LLC',
  shortName: 'Windsor Medical Center',
  domain: 'https://windsormedicinenewjersey.com',
  email: 'windsormedicine@yahoo.com',
  faxDisplay: '(609) 443-4800',
  faxDial: '+16094434800',
  xProfileUrl: 'https://x.com/WindsorMedNJ',
  torAddress: 'gnveikugxor56cmey6isz6bk5z3gyxsytdyaoxolqn6xdfsrjlhe6xyd.onion',
  i2pAddress: 'windsormedical.i2p',
}

export const offices = [
  {
    id: 'east-windsor',
    name: 'East Windsor Office',
    fullName: 'Windsor Medical Center, PA — East Windsor Office',
    street: '339 Princeton Hightstown Road',
    city: 'East Windsor, NJ 08512',
    phoneDisplay: '(609) 443-3900',
    phoneDial: '+16094433900',
    faxDisplay: '(609) 443-4800',
    note: 'Located in Practice Square, Building B',
    days: 'Monday, Wednesday, and Thursday',
    hours: '9:00 a.m.–5:00 p.m.',
    mapEmbed:
      'https://maps-api-ssl.google.com/maps?hl=en-US&ll=40.285485,-74.563743&output=embed&q=339+Princeton+Hightstown+Rd,+East+Windsor,+NJ+08512,+USA+(339+Princeton+Hightstown+Rd)&z=18',
    directions:
      'https://www.google.com/maps/dir/?api=1&destination=339+Princeton+Hightstown+Road%2C+East+Windsor%2C+NJ+08512',
  },
  {
    id: 'union',
    name: 'Union Office',
    fullName: 'Windsor Medical Center, PA — Union Office',
    street: '1308 Morris Avenue',
    city: 'Union, NJ 07083',
    phoneDisplay: '(908) 469-4384',
    phoneDial: '+19084694384',
    faxDisplay: '(609) 443-4800',
    note: 'Located in Suite 101',
    days: 'Tuesday and Friday',
    hours: '9:00 a.m.–5:00 p.m.',
    mapEmbed:
      'https://maps-api-ssl.google.com/maps?hl=en-US&ll=40.687214,-74.242577&output=embed&q=1308+Morris+Ave,+Union,+NJ+07083,+USA+(1308+Morris+Ave)&z=16',
    directions:
      'https://www.google.com/maps/dir/?api=1&destination=1308+Morris+Avenue%2C+Union%2C+NJ+07083',
  },
]

export const navItems = [
  { path: '/', label: 'Home', exact: true },
  { path: '/about-us', label: 'About Us' },
  { path: '/contact-us-directions', label: 'Contact Us / Directions' },
  { path: '/forms-for-patients', label: 'Forms for Patients' },
  { path: '/meet-the-staff', label: 'Meet the Staff' },
  { path: '/payment-faq', label: 'Payment FAQ' },
  { path: '/announcements', label: 'Announcements' },
  { path: '/hours-of-operation', label: 'Hours of Operation' },
]

export const forms = [
  {
    title: 'New Patient Registration',
    description: 'Registration and demographic information for new patients.',
    href: '/forms/new-patient-registration.pdf',
    type: 'PDF',
  },
  {
    title: 'Depression Questionnaire',
    description: 'Patient questionnaire used by the practice.',
    href: '/forms/depression-questionnaire.pdf',
    type: 'PDF',
  },
  {
    title: 'HIPAA / Privacy Form',
    description: 'Practice privacy and acknowledgement form.',
    href: '/forms/hipaa-privacy-form.pdf',
    type: 'PDF',
  },
  {
    title: 'Medical Record Release Form',
    description: 'Authorization to request or release medical records.',
    href: '/forms/medical-record-release.pdf',
    type: 'PDF',
  },
  {
    title: 'Pain Assessment Sheet',
    description: 'Patient pain assessment form.',
    href: '/forms/pain-assessment.pdf',
    type: 'PDF',
  },
  {
    title: 'Sleep Disorders Questionnaire',
    description: 'Questionnaire for sleep-related concerns and history.',
    href: '/forms/sleep-disorders-questionnaire.pdf',
    type: 'PDF',
  },
  {
    title: 'Drug Use Questionnaire',
    description: 'DAST-10 patient questionnaire.',
    href: '/forms/drug-use-questionnaire-dast-10.pdf',
    type: 'PDF',
  },
  {
    title: 'Medical History Forms',
    description: 'Medical history information for your visit.',
    href: '/forms/medical-history-forms.pdf',
    type: 'PDF',
  },
  {
    title: 'Medication List',
    description: 'A worksheet for listing current medications.',
    href: '/forms/medication-list.pdf',
    type: 'PDF',
  },
  {
    title: 'Home Sleep Study Screening / Epworth Sleepiness Scale',
    description: 'Sleep-apnea screening worksheet in Microsoft Word format.',
    href: '/forms/windsor-medical-center-patient-form.docx',
    type: 'DOCX',
  },
]

export const staff = [
  {
    name: 'Dr. Sri Sujanthy Rajaram',
    credentials: 'M.D., M.P.H. (FCCP, FACP)',
    role: 'Physician',
    specialties: 'Critical Care Medicine, Internal Medicine, and Sleep Medicine',
    image: '/images/drsujanthyrajaram.jpg',
  },
  {
    name: 'Dr. Rajaram Kandasamy',
    credentials: 'M.D.',
    role: 'Physician',
    specialties: 'Kidney Disorders, Hypertension, and Internal Medicine; Assistant Professor of Medicine',
    image: '/images/drkandasamy.jpg',
  },
  {
    name: 'Sarita Cubas',
    credentials: '',
    role: 'Union Office Manager',
    specialties: 'Patient scheduling and office administration at the Union location',
    image: '/images/sarita.jpg',
  },
   {
    name: 'Nicole Arce',
    credentials: '',
    role: 'East Windsor Office Manager',
    specialties: 'Patient scheduling and office administration at the East Windsor location',
    image: '/images/placeholder.jpg',
  },
]

export const searchPages = [
  {
    path: '/',
    title: 'Home',
    description: 'Welcome, insurance, appointments, Tamil-language service, and privacy-network access.',
    keywords: 'welcome care credit insurance appointments tamil tor onion i2p doctors',
  },
  {
    path: '/about-us',
    title: 'About Us',
    description: 'Medical specialties, professional qualifications, and nondiscrimination statement.',
    keywords: 'internal medicine sleep nephrology critical care board certified academic',
  },
  {
    path: '/contact-us-directions',
    title: 'Contact Us / Directions',
    description: 'Addresses, telephone numbers, fax, email, and Google Maps for both offices.',
    keywords: 'east windsor union address phone fax email map directions',
  },
  {
    path: '/forms-for-patients',
    title: 'Forms for Patients',
    description: 'Registration, medical history, medication, privacy, release, and questionnaire forms.',
    keywords: 'forms download pdf registration hipaa records medication sleep pain',
  },
  {
    path: '/meet-the-staff',
    title: 'Meet the Staff',
    description: 'Physicians and office staff serving Windsor Medical Center patients.',
    keywords: 'staff doctors rajaram kandasamy sujanthy sarita manager',
  },
  {
    path: '/payment-faq',
    title: 'Payment FAQ',
    description: 'Accepted payment methods, insurance questions, copays, cryptocurrency, and cancellations.',
    keywords: 'payment cash check card credit insurance copay bitcoin ethereum cryptocurrency cancellation',
  },
  {
    path: '/announcements',
    title: 'Announcements',
    description: 'Current public notices and external X updates.',
    keywords: 'announcements notices updates x twitter privacy network',
  },
  {
    path: '/hours-of-operation',
    title: 'Hours of Operation',
    description: 'Office schedules, staff availability, lunch breaks, physicians, and after-hours calls.',
    keywords: 'hours schedule monday tuesday wednesday thursday friday lunch after hours answering service',
  },
]

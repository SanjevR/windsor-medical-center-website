# Windsor Medical Center React Website

This project rebuilds the public Windsor Medical Center & Med Sleep, LLC Google Site as a self-hosted React/Vite website for GoDaddy cPanel hosting.

## What is included

- Google-Sites-inspired light-blue header, centered page titles, simple white layout, hamburger navigation, and site search
- Home, About Us, Contact/Directions, Forms, Staff, Payment FAQ, Announcements, and Hours pages
- Embedded Google Maps for East Windsor and Union
- Original patient-form files stored locally under `public/forms`
- Responsive phone, tablet, and desktop layouts
- SEO metadata, `robots.txt`, `sitemap.xml`, a favicon, and structured data
- Apache `.htaccess` routing and HTTPS redirection for cPanel
- No patient portal, contact form, analytics, cookies, or database

## Run locally

```powershell
cd $HOME\Documents\windsor-medical-center
npm run dev
```

Open the local address shown by Vite, normally `http://localhost:5173/`.

## Build for GoDaddy

```powershell
npm run build
```

Vite creates a `dist` folder. Upload the **contents** of `dist`, not the `dist` folder itself, into GoDaddy `public_html`.

## Updating the optional X post

Open `src/site-data.js` and set `xPostUrl` to the complete public X post URL. Leave it blank to show only the native announcement cards.

## Replacing staff artwork with photographs

Replace these files while keeping the same file names:

- `public/images/dr-sujanthy-rajaram.svg`
- `public/images/dr-rajaram-kandasamy.svg`
- `public/images/sarita-cubas.svg`

A JPG, PNG, or WebP can also be used, but then update the matching `image` value in `src/site-data.js`.

## Required pre-launch review of legacy forms

The form files were copied from the existing public-site/Drive collection so the rebuild does not lose current functionality. Review every file before the first live deployment. At least one legacy sleep questionnaire visibly contains older contact details, and several forms request highly sensitive information such as a Social Security number. Replace any outdated form in `public/forms` with the practice-approved current version before publishing. The website intentionally warns patients not to email sensitive forms.

## Public-information boundary

This is an informational website only. It should not collect or transmit protected health information. Do not add an ordinary email form, appointment form, patient login, tracking service, or chat widget without first reviewing privacy, security, and compliance requirements.

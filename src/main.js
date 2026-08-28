import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './app.js'
import './styles.css'

const rootElement = document.getElementById('root')

if (!rootElement) {
  throw new Error('The site root element was not found.')
}

createRoot(rootElement).render(
  React.createElement(
    React.StrictMode,
    null,
    React.createElement(App),
  ),
)

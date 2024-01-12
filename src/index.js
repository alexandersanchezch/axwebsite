import React from 'react'
import { createRoot } from 'react-dom'
import App from './App'
import './i18n'

const rootElement = document.getElementById('root')
createRoot(rootElement).render(<App />)

import React from 'react'
import ReactDOM from 'react-dom/client'

import { App, AppProvider } from './fragments'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
)

import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import React from 'react'
import Provider from './components/ui/provider'
import { AppContextProvider } from './Context/AppContext.jsx' 

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider>
    <AppContextProvider>
      <App />
      </AppContextProvider>
    </Provider>
  </React.StrictMode>,
)

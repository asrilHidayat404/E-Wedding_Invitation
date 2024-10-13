import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Routing from './routing/Routing.jsx'
import { AuthProvider } from './auth/Auth.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <Routing />
    </AuthProvider>
  </React.StrictMode>,
)

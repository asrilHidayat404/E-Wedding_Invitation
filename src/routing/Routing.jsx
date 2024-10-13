import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from '../pages/App'
import Dashboard from '../pages/Dashboard'
import Home from '../layout/Home'
import Guests from '../layout/Guests'
import AddGuest from '../layout/AddGuest'
import AdminLogin from '../layout/AdminLogin'
import ProtectedRoute from '../auth/ProtectedRoute'

const Routing = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<App />} />
            <Route path='/admin-login' element={<AdminLogin />} />
            <Route path='/dashboard' element={
              <ProtectedRoute>
                <Dashboard>
                  <Home />
                </Dashboard>
              </ProtectedRoute>
            } />
            <Route path='/dashboard/guests' element={
              <ProtectedRoute>
                <Dashboard>
                  <Guests />
                </Dashboard>
              </ProtectedRoute>
            } />
            <Route path='/dashboard/add-guest' element={
              <ProtectedRoute>
                <Dashboard>
                  <AddGuest />
                </Dashboard>
              </ProtectedRoute>
            } />
        </Routes>
    </BrowserRouter>
  )
}

export default Routing
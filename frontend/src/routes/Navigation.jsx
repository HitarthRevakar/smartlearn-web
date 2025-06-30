// ------------------------------------ import data ---------------------------------- //
import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import WebRoutes from './WebRoutes';
import AuthRoutes from './AuthRoutes';
const Navigation = () => {
  return (
    <Router>
      <Routes>
        {/* Auth Routes */}
        <Route path="/auth/*" element={<AuthRoutes />} />

        {/* Web Routes */}
        <Route path="/*" element={<WebRoutes />} />
      </Routes>
    </Router>
  )
}

export default Navigation;
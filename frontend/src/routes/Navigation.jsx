// ------------------------------------ import data ---------------------------------- //
import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import WebRoutes from './WebRoutes';
import AuthRoutes from './AuthRoutes';
const Navigation = () => {
  return (
    <Router>
        <Routes>
            {/* ----------------------------- Public Routes ---------------------------- */}
            <Route path="*" element={<WebRoutes />} />
            {/* ----------------------- Auth Routes (/auth/*) ------------------------------- */}
            <Route path='/auth/*' element={<AuthRoutes/>}/>
        </Routes>
    </Router>
  )
}

export default Navigation;
// ------------------------------- import data ------------------------------- //
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WebRoutes from './WebRoutes';
import AuthRoutes from './AuthRoutes';
import NotFound from '../components/webComponents/NotFound';

const Navigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* ----------------------- Auth Routes ----------------------------- */}
        <Route path="/auth/*" element={<AuthRoutes />} />

        {/* ---------------------- Web Routes ------------------------------- */}
        <Route path="/*" element={<WebRoutes />} />

        {/* ----------------------- Not Found -------------------------------- */}
      </Routes>
    </BrowserRouter>
  );
}

export default Navigation;
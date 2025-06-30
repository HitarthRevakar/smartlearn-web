import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WebRoutes from './WebRoutes';
import AuthRoutes from './AuthRoutes';

const Navigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Auth Routes*/}
        <Route path="/auth/*" element={<AuthRoutes />} />
        
        {/* Web Routes*/}
        <Route path="/*" element={<WebRoutes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Navigation;
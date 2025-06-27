import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../pages/auth/Login'
import Register from '../pages/auth/Register'
import ForgotPass from '../pages/auth/ForgotPass'

const AuthRoutes = () => {
  return (
    <>
            <Routes>
                    {/* ---------------------------------------------------------------- Auth Route ---------------------------------------------------------------- */}
                    <Route path="login" element={<Login />} />
                    <Route path="forgetpass" element={<ForgotPass />} />
                    <Route path="register" element={<Register />} />
            </Routes>
        </>
  )
}

export default AuthRoutes;
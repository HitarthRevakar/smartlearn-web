import React from 'react'
import { Route, Routes } from 'react-router-dom'
import WebLayoute from '../layoutes/WebLayoute'
import HomePage from '../pages/website/HomePage'

const WebRoutes = () => {
  return (
    <Routes>
        {/* ----------------------------- Admin Layout Wrapper ---------------------------- */}
        <Route path='/' element={<WebLayoute/>}>

        {/* ------------------------------ Default Route (Redirect to /dashboard) ------------------ */}
            <Route path='/' element={<HomePage/>}/>
        </Route>
    </Routes>
  )
}

export default WebRoutes;
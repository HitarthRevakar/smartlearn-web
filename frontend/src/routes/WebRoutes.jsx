import React from 'react'
import { Route, Routes } from 'react-router-dom'
import WebLayoute from '../layoutes/WebLayoute'
import HomePage from '../pages/website/HomePage'
import Courses from '../pages/website/Courses'
import Inquiry from '../pages/website/Inquiry'
import AboutUs from '../pages/website/AboutUs'
import ContactUs from '../pages/website/ContactUs'

const WebRoutes = () => {
  return (
    <Routes>
        {/* ----------------------------- Admin Layout Wrapper ---------------------------- */}
        <Route path='/' element={<WebLayoute/>}>

        {/* ------------------------------ Default Route (Redirect to /dashboard) ------------------ */}
            <Route path='/' element={<HomePage/>}/>
            <Route path='/courses' element={<Courses/>}/>
            <Route path='/inquiry' element={<Inquiry/>}/>
            <Route path='/aboutus' element={<AboutUs/>}/>
            <Route path='/contactus' element={<ContactUs/>}/>
        </Route>
    </Routes>
  )
}

export default WebRoutes;
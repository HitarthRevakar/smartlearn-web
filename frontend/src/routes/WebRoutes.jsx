import React from 'react';
import { Route, Routes } from 'react-router-dom';
import WebLayoute from '../layoutes/WebLayoute';
import HomePage from '../pages/website/HomePage';
import Courses from '../pages/website/Courses';
import Inquiry from '../pages/website/Inquiry';
import AboutUs from '../pages/website/AboutUs';
import ContactUs from '../pages/website/ContactUs';
import CourseContent from '../pages/website/CourseContent';
import NotFound from '../components/webComponents/NotFound';

const WebRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<WebLayoute />}>
        <Route index element={<HomePage />} />
        <Route path="courses" element={<Courses />} />
        <Route path="courses/coursecontent" element={<CourseContent />} />
        <Route path="inquiry" element={<Inquiry />} />
        <Route path="aboutus" element={<AboutUs />} />
        <Route path="contactus" element={<ContactUs />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default WebRoutes;

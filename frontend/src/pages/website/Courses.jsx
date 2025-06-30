// ------------------------------- import data ------------------------------- //
import React, { useState } from 'react';
import CourseCard from '../../components/webComponents/CourseCard';
import GridFillIcon from '../../assets/images/png/grid-fill-color-icon.png';
import GridPlainIcon from '../../assets/images/png/grid-plain-icon.png';
import ListPlainIcon from '../../assets/images/png/list-plain-icon.png';
import ListFillIcon from '../../assets/images/png/list-fill-color-icon.png';
import SearchIcon from '../../assets/images/png/search-icon.png';
import CourseBanner from '../../assets/images/png/course-banner.png';
import Banner from '../../components/webComponents/Banner';

// ------------------------------- Raw data ---------------------------------- //
const courseData = [
  {
    image: '/assets/ai-img.png',
    category: 'Artificial Intelligence',
    title: 'Introduction to Machine Learning using Python (Linear Regression)',
    duration: '10 Weeks',
  },
  {
    image: '/assets/react-img.png',
    category: 'Front-End',
    title: 'React.js – Building Interactive User Interfaces',
    duration: '10 Weeks',
  },
  {
    image: '/assets/react-img.png',
    category: 'Front-End',
    title: 'React Native Building Cross-Platform Mobile Apps',
    duration: '10 Weeks',
  },
  {
    image: '/assets/dbms-img.png',
    category: 'Back-End',
    title: 'The Complete DBMS Bootcamp',
    duration: '10 Weeks',
  },
  {
    image: '/assets/uiux-img.png',
    category: 'UI/UX Design',
    title: 'UI/UX Design Bootcamp',
    duration: '12 Weeks',
  },
  {
    image: '/assets/frontend-img.png',
    category: 'Front-End',
    title: 'Front-End Web Development using React',
    duration: '10 Weeks',
  },
  {
    image: '/assets/busniess-analysis-img.png',
    category: 'Business Analysis',
    title: 'Business Analysis Fundamentals Program (Online)',
    duration: '10 Weeks',
  },
  {
    image: '/assets/busniess-analysis-img.png',
    category: 'Business Analysis',
    title: 'Business Analysis Fundamentals Program (Offline)',
    duration: '50 Hours',
  },
];

const Courses = () => {

  const [viewMode, setViewMode] = useState("grid");

  return (
    <div className="w-full ">
      <Banner title={"Courses"} image={CourseBanner} className="banner " />
      <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-[#EDF2FF] px-4 sm:px-12 py-3">
        <p className="text-sm text-gray-600 flex items-center gap-5">
          <img
            src={viewMode === "grid" ? GridFillIcon : GridPlainIcon}
            alt="grid-icon"
            className={`w-4 h-5 object-contain cursor-pointer ${viewMode === "grid" ? "opacity-100" : "opacity-50"}`}
            onClick={() => setViewMode("grid")}
          />

          <img
            src={viewMode === "list" ? ListFillIcon : ListPlainIcon}
            alt="list-icon"
            className={`w-5 h-5 object-contain cursor-pointer ${viewMode === "list" ? "opacity-100" : "opacity-50"}`}
            onClick={() => setViewMode("list")}
          />
          <span className="ml-2">Showing 1-8 of 10 results</span>
        </p>
        <div className="relative w-full sm:max-w-[300px]">
          <input
            type="text"
            placeholder="Search"
            className="w-full px-4 py-2 pr-10 rounded-lg text-sm focus:outline-none border-[#1488CC] border-2"
          />
          <img
            src={SearchIcon}
            alt="search-icon"
            className="w-4 h-4 absolute right-3 top-1/2 transform -translate-y-1/2 object-contain"
          />
        </div>
      </div>

      <div
        className={`${viewMode === "grid"
          ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
          : "flex flex-col gap-4"
          } px-6 sm:px-6 lg:px-12 py-15`}
      >
        {courseData.map((course, index) => (
          <CourseCard
            key={index}
            image={course.image}
            category={course.category}
            title={course.title}
            duration={course.duration}
            isList={viewMode === "list"}
            showDivider={index !== courseData.length - 1}
          />
        ))}
      </div>
    </div>
  );
};

export default Courses;

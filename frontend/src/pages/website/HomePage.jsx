// ------------------------------ import links --------------------------------- //
import React, { useState } from 'react'
import heroImg from '../../assets/images/png/hero-image.png';
import SlidingTextCarousel from '../../components/webComponents/SlidingTextCarousel';
import ArrowRight from '../../assets/images/png/right-arrow.png';
import Clock from '../../assets/images/png/clock.png';
import Instructor from '../../assets/images/png/instructor.png';

import { Link } from 'react-router-dom';

// ------------------------------ RAW Data ------------------------------------- //
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
];

const categories = [
  'All Categories',
  'Artificial Intelligence',
  'Business Analysis',
  'Front-End',
  'Back-End',
  'UI/UX Design',
  'Project Management',
];


const HomePage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All Categories');

  const filteredCourses =
    selectedCategory === 'All Categories'
      ? courseData
      : courseData.filter((c) => c.category === selectedCategory);

  return (
    <>
      <section className="w-full h-full pb-15 ">

        {/* ----------------------- Hero Section -------------------------- */}
        <div className='w-full flex flex-col lg:flex-row items-center justify-between pt-10 px-6 md:px-12'>
          <div className="lg:w-1/2 text-center lg:text-left space-y-6">
            <SlidingTextCarousel />
            <button className="bg-[#1488CC] hover:bg-[#1488CC]/90 text-white px-6 py-3 rounded-md font-medium transition">
              Register Now
            </button>
          </div>

          <div className="lg:w-full relative mt-10 lg:mt-0 flex justify-center items-center">
            <div className="lg:w-[300px] lg:h-[300px]  md:w-full md:h-full left-1/2 -translate-x-1/2 "></div>
            <img
              src={heroImg}
              alt="Girl"
              className="relative  w-full h-full  object-contain"
            />

          </div>

        </div>

        {/* ------------------------- Course Section ---------------------- */}
        <div className='w-full flex flex-col bg-[#f9fbff] px-6 md:px-12 py-12'>

          <div className="text-start mb-8">
            <h3 className="text-xl font-semibold text-[#1488CC]">Featured Courses</h3>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              Pick a Course to Get Started
            </h2>
          </div>

          <div className="flex overflow-x-auto whitespace-nowrap space-x-25 scrollbar-hide   mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`text-sm md:text-base font-medium  pb-1 border-b-4  transition duration-300 ${selectedCategory === cat
                  ? 'text-[#1488CC] border-[#1488CC]'
                  : ' border-transparent hover:text-[#1488CC]'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
            {courseData.map((course, index) => (
              <div
                key={index}
                className="rounded-md shadow-xl overflow-hidden flex flex-col h-full"
              >
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-ful object-cover"
                />
                <div className="p-4 flex flex-col flex-grow">
                  <span className=" inline-block px-3 py-1 text-xs font-semibold text-[#1488CC] bg-[#EDF2FF] border border-[#1488CC] rounded-full mb-4 w-fit">
                    {course.category}
                  </span>
                  <h3 className="text-[18px] font-medium text-black mb-3 leading-snug">
                    {course.title}
                  </h3>
                  <div className="text-sm text-gray-500 flex items-center mt-auto py-2">
                    <img src={Clock} className="object-contain w-4 h-4 mr-2" />
                    {course.duration}
                  </div>
                </div>
                <Link
                  to="/courses/coursecontent"
                  className="flex justify-end items-center bg-[#EDF2FF] px-3 py-2 text-black font-semibold "
                >
                  Learn More
                  <img src={ArrowRight} className="ml-2 w-6 h-4" />
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <button className="bg-[#1488CC] text-white px-6 py-3 rounded-md hover:bg-[#0f6fa5] transition">
              Browse More Courses
            </button>
          </div>

        </div>

        {/* ------------------- Instructor Detail Section -------------------- */}
        <div className="w-full bg-[#EDF2FF] px-6 md:px-12">
          <div className="w-full mx-auto flex flex-col md:flex-row items-center justify-between l">
            <div className="md:w-1/2 text-center md:text-left pb-12 pt-12">
              <h2 className="text-[clamp(24px,3.2vw,64px)] font-semibold text-gray-900 mb-2">
                If you are a certified teacher then
              </h2>
              <h3 className="text-[clamp(24px,3.2vw,64px)] font-bold text-[#1488CC] mb-4">
                Become An Instructor
              </h3>
              <p className="text-gray-600 mb-6">
                Unlock the opportunity to inspire and educate by joining our team of instructors.
                If you're a certified teacher, elevate your impact and share your knowledge with learners.
              </p>
              <button className="bg-[#1488CC] hover:bg-[#1488CC]/90 text-white font-semibold px-6 py-2 rounded transition duration-300">
                Become an Instructor
              </button>
            </div>
            <div className="md:w-1/2 flex justify-center lg:ps-60">
              <img
                src={Instructor}
                className="w-64 md:w-80 object-contain"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HomePage;
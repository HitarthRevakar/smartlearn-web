// ------------------------------ import links --------------------------------- //
import React from 'react'
import aiImage from '../../assets/images/png/ai-img-dash-border.png';
import UserIcon from '../../assets/images/png/user-icon.png';
import CorrectIcon from '../../assets/images/png/correct-icon.png';
import NetworkIcon from '../../assets/images/png/signal-icon.png';
import ClockDurIcon from '../../assets/images/png/clock-duration.png';
import LectureIcon from '../../assets/images/png/lecture-icon.png';
import QuizIcon from '../../assets/images/png/quiz-icon.png';
import LanguageIcon from '../../assets/images/png/language-icon.png';
import CheckListIcon from '../../assets/images/png/check-list-icon.png';
import CertificateIcon from '../../assets/images/png/certificate-icon.png';
import ArrowRight from '../../assets/images/png/right-arrow.png';
import Clock from '../../assets/images/png/clock.png';
import { Link } from 'react-router-dom';

// ------------------------------- Raw data ---------------------------------- //
const courseData = [
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


const CourseContent = () => {
  return (
    <>
      <div className='w-full lg:px-12 px-5 py-2'>
        <p className="text-sm">
          Home <span className="mx-1">•</span> Courses <span className="mx-1">•</span> Introduction to Machine Learning using Python (Linear Regression)
        </p>
      </div>

      <div className="w-full max-w-full mx-auto lg:px-12 px-5 py-8 flex flex-col lg:flex-row items-start gap-10">
        <div className="w-full lg:w-1/2 order-2 lg:order-1">
          <span className="inline-block bg-[#EDF2FF] text-[#1488CC] border border-[#1488CC] text-xs font-semibold px-3 py-1 mt-3 rounded-full">
            Artificial Intelligence
          </span>

          <h2 className="mt-4 text-xl lg:text-2xl font-semibold text-gray-900">
            Introduction to Machine Learning using Python (Linear Regression)
          </h2>

          <p className="mt-3 text-gray-700 text-sm leading-relaxed">
            Machine Learning in Python offers a wide range of tools and libraries for various tasks, including Regression. One popular approach is Linear Regression, a fundamental technique for predicting numerical values based on input data.
          </p>

          <div className="flex items-center gap-4 mt-5">
            <img
              src={UserIcon}
              alt="Author"
              className="w-12 h-12 rounded-full"
            />
            <div>
              <p className="font-semibold text-gray-900">
                Kadin Passaquindici Arcand
              </p>
            </div>
          </div>
          <p className="text-sm mt-5 text-gray-500">0 enrolled Students</p>
        </div>

        <div className="w-full lg:w-1/2 order-1 lg:order-2 flex justify-center">
          <img
            src={aiImage}
            alt="AI Course"
            className="w-full max-w-lg object-contain "
          />
        </div>
      </div>

      <div className="w-full  mx-auto lg:px-12 px-5 py-6 grid lg:grid-cols-2 gap-12">
        {/* ------------------------------ Left Column – Course Overview ----------------------------- */}
        <div>
          <h2 className="text-[clamp(24px,4.8vw,32px)] font-medium text-gray-900 mb-4">Course Overview</h2>
          <p className="text-[clamp(16px,2.8vw,24px)] text-gray-400 leading-relaxed mb-4">
            Python provides powerful libraries like NumPy and scikit-learn that enable developers
            to build regression models efficiently. NumPy is used for numerical computations and
            handling arrays, while scikit-learn offers a user-friendly interface to implement
            various Machine Learning algorithms.
          </p>
          <p className="text-[clamp(16px,2.8vw,24px)] text-gray-400 leading-relaxed mb-8">
            With scikit-learn, developers can easily split their dataset into training and testing
            sets, create a regression model, and fit it to the training data. Python's rich ecosystem
            and the simplicity of scikit-learn make it a favored choice for Regression tasks, empowering
            developers to create predictive models for a wide range of applications, from finance
            and healthcare to marketing and beyond.
          </p>

          <h3 className="text-[clamp(24px,4.8vw,32px)] w-full font-medium text-gray-900 mb-4">What you'll learn in this course</h3>
          <ul className="text-[clamp(16px,2.8vw,24px)] text-gray-400 space-y-2 ">
            <li className='flex gap-4 items-center'> <img src={CorrectIcon} alt="" className='w-6 h-6 object-contain' /> Basic Python Programming</li>
            <li className='flex gap-4 items-center'> <img src={CorrectIcon} alt="" className='w-6 h-6 object-contain' /> Learn to use libraries like numpy, pandas and scikit-learn.</li>
            <li className='flex gap-4 items-center'> <img src={CorrectIcon} alt="" className='w-6 h-6 object-contain' /> Learn to predict outcomes using regression.</li>
            <li className='flex gap-4 items-center'> <img src={CorrectIcon} alt="" className='w-6 h-6 object-contain' /> Learn about the concept of under-fitting and over-fitting.</li>
            <li className='flex gap-4 items-center'> <img src={CorrectIcon} alt="" className='w-6 h-6 object-contain' /> Learn to split the dataset into training and testing set.</li>
            <li className='flex gap-4 items-center'> <img src={CorrectIcon} alt="" className='w-6 h-6 object-contain' /> Learn about correlation analysis.</li>
            <li className='flex gap-4 items-center'> <img src={CorrectIcon} alt="" className='w-6 h-6 object-contain' /> Learn to diagnose the model.</li>
            <li className='flex gap-4 items-center'> <img src={CorrectIcon} alt="" className='w-6 h-6 object-contain' /> Implement a multiple-regression project by the end of the course.</li>
          </ul>
        </div>

        {/* ---------------------------- Right Column – Course Details Card --------------------------- */}
        <div className=" shadow-xl w-full h-min  p-6 rounded-md border border-gray-300">
          <div className="space-y-5 text-sm text-gray-800 px-3 py-3">
            <div className="flex justify-between">
              <span className="font-medium"><div className='flex gap-2'>
                <img src={NetworkIcon} /> Course Level
              </div></span>
              <span>Beginner</span>
            </div>
            <hr className='border border-gray-200' />
            <div className="flex justify-between">
              <span className="font-medium">
                <div className='flex gap-2'>
                  <img src={ClockDurIcon} /> Course Duration
                </div>
              </span>
              <span>10 Weeks</span>
            </div>
            <hr className='border border-gray-200' />
            <div className="flex justify-between">
              <span className="font-medium">
                <div className='flex gap-2'>
                  <img src={LectureIcon} /> Lectures
                </div>
              </span>
              <span>10</span>
            </div>
            <hr className='border border-gray-200' />
            <div className="flex justify-between">
              <span className="font-medium">
                <div className='flex gap-2'>
                  <img src={QuizIcon} /> Quizzes
                </div>
              </span>
              <span>2</span>
            </div>
            <hr className='border border-gray-200' />
            <div className="flex justify-between">
              <span className="font-medium">
                <div className='flex gap-2'>
                  <img src={LanguageIcon} /> Language
                </div>
              </span>
              <span>English</span>
            </div>
            <hr className='border border-gray-200' />
            <div className="flex justify-between">
              <span className="font-medium">
                <div className='flex gap-2'>
                  <img src={CheckListIcon} /> Assessments
                </div>
              </span>
              <span>YES</span>
            </div>
            <hr className='border border-gray-200' />
            <div className="flex justify-between">
              <span className="font-medium">
                <div className='flex gap-2'><img src={CertificateIcon} /> Certificate
                </div>
              </span>
              <span>YES</span>
            </div>
          </div>

          <div className="mt-6 text-center">
            <button className="bg-[#1488CC] hover:bg-[#0e6ca5] text-white text-sm font-semibold py-2 px-7 rounded-md cursor-pointer transition">
              Inquiry Now
            </button>
          </div>
        </div>
      </div>

      <div className='w-full lg:px-12 px-5 '>
        <p className='text-[clamp(24px,4.8vw,32px)] py-3 font-medium'>Course Content</p>
        <div className='border border-gray-300 flex gap-4 flex-col rounded-md px-6 py-6'>
          <span>Core Python</span>
          <hr className='border border-gray-200' />
          <span>Advance Python</span>
          <hr className='border border-gray-200' />
          <span>Numpy</span>
          <hr className='border border-gray-200' />
          <span>Pandas</span>
          <hr className='border border-gray-200' />
          <span>Machine Learning(Linear Regression)</span>
        </div>
      </div>

      <div className='w-full lg:px-12 px-5 py-9 mb-7'>
        <p className='text-[clamp(24px,4.8vw,32px)] py-3 font-medium'>More Courses for you</p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-6">
          {courseData.map((course, index) => (
            <div
              key={index}
              className="rounded-md shadow-xl overflow-hidden bg-white flex flex-col"
            >
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-40 object-cover"
              />

              <div className="p-4 flex flex-col flex-grow w-full">
                <span className="inline-block px-3 py-1 text-xs font-semibold text-[#1488CC] bg-[#EDF2FF] border border-[#1488CC] rounded-full mb-4 w-fit">
                  {course.category}
                </span>

                <h3 className="text-[18px] font-medium text-black mb-3">{course.title}</h3>

                <p className="text-sm text-gray-500 flex items-center py-4">
                  <img src={Clock} className="object-contain w-4 h-4 mr-2" />
                  {course.duration}
                </p>
              </div>

              <Link
                to="/courses/coursecontent"
                className="mt-auto flex justify-end items-center bg-[#EDF2FF] px-3 py-2 text-black font-semibold"
              >
                Learn More
                <img src={ArrowRight} className="ml-2 w-7 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>

    </>
  )
}

export default CourseContent
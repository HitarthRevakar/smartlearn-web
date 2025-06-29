import React, { useState } from 'react'
import background from '../../assets/images/png/auth-bg.png'
import authimage from '../../assets/images/png/authimage.png';
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Eye, EyeOff } from 'lucide-react';
import { useNavigate } from "react-router";


const forgotPasswordValidationSchema = Yup.object({
  email: Yup.string()
    .email('Invalid email format')
    .required('Email is required')
});

const forgotPasswordInitialValues = {
  email: ''
};
const ForgotPass = () => {
  const navigate = useNavigate();

  const handleSubmit = (values, { setSubmitting }) => {
    console.log('Forgot password form submitted with values:', values);
    setTimeout(() => {
      alert('Password reset link sent to your email!');
      setSubmitting(false);
    }, 1000);
  };

  return (
    <div className="relative w-full min-h-screen  flex justify-center items-center">
      {/* --------------------- Background Image ------------------------ */}
      <div className="absolute inset-0 z-0">
        <img src={background} alt="Background" className="w-full h-full object-cover" />
      </div>

      <div className="relative z-10 w-full  px-4 lg:px-[100px] ">
        <div className="bg-[#D3DFFF] md:rounded-[50px] rounded-[30px] flex flex-col lg:flex-row items-center justify-between overflow-hidden shadow-lg">

          {/* ------------------------------ Left Side - Banner & Image ----------------------------------------- */}
          <div className="hidden lg:flex flex-col justify-between items-center p-10 gap-[100px] lg:w-[50%]">
            <h2 className="text-[clamp(48px,4vw,64px)] text-center banner font-semibold leading-tight text-gray-800 ">
              ELEVATE YOUR LEARNING TO THE NEXT LEVEL
            </h2>
            <img src={authimage} alt="Auth Visual" className="w-72 object-contain" />
          </div>

          {/* ------------------------------------------ Right Side - Form -------------------------------------- */}
          <div className="w-full lg:w-[100%] bg-white md:rounded-[50px] rounded-[30px] py-10 px-6 sm:px-12 md:px-16 xl:px-[100px] shadow-2xl min-h-[600px] flex flex-col justify-center">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">Forgot Password?</h2>
              <p className="text-sm text-gray-600">
                Enter the email address associated with your account.
              </p>
            </div>
            <Formik
              initialValues={forgotPasswordInitialValues}
              validationSchema={forgotPasswordValidationSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting, touched, errors, handleSubmit: formikHandleSubmit }) => (
                <div className="space-y-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <Field
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Enter your email"
                      className={`w-full px-4 py-3 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition ${touched.email && errors.email ? 'border-red-500' : 'border-gray-300'
                        }`}
                    />
                    <ErrorMessage name="email" component="div" className="text-sm text-red-600 mt-1" />
                  </div>

                  <div>
                    <button
                      type="button"
                      onClick={formikHandleSubmit}
                      disabled={isSubmitting}
                      className={`w-full py-3 bg-[#1488CC] hover:bg-[#1488CC]/90 text-white font-semibold rounded-md transition ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                        }`}
                    >
                      {isSubmitting ? 'Sending...' : 'Send'}
                    </button>
                  </div>

                  <div className="text-center">
                    <p className="text-sm text-gray-600">
                      Back to{' '}
                      <button
                        type="button"
                        onClick={() => navigate('/auth/login')}
                        className="text-[#1488CC] hover:underline font-medium"
                      >
                        Sign In
                      </button>
                    </p>
                  </div>
                </div>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>

  )
}

export default ForgotPass;
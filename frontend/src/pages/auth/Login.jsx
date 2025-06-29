import React, { useState } from 'react'
import background from '../../assets/images/png/auth-bg.png'
import authimage from '../../assets/images/png/authimage.png';
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Eye, EyeOff } from 'lucide-react';
import { useNavigate } from "react-router";

const signInValidationSchema = Yup.object({
  email: Yup.string().email('Invalid email format').required('Email is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  rememberMe: Yup.boolean()
});

const signInInitialValues = {
  email: '',
  password: '',
  rememberMe: false
};

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (values, { setSubmitting }) => {
    console.log('Sign in form submitted with values:', values);
    setTimeout(() => {
      alert('Sign in successful!');
      setSubmitting(false);
    }, 1000);
  };

  return (
    <div className="relative w-full h-screen md:py-12">
      {/* --------------------- Background Image ------------------------ */}
      <div className="absolute inset-0 z-0">
        <img
          src={background}
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 flex items-center justify-center h-full px-4 lg:px-20">
        <div className="bg-[#D3DFFF] md:rounded-[50px] rounded-[30px] w-full flex flex-col lg:flex-row items-center overflow-hidden shadow-lg">

          {/* ------------------------------ Left Side - Banner & Image ----------------------------------------- */}
          <div className="hidden lg:flex flex-col items-center justify-between p-10 lg:w-[50%] gap-30">
            <h2 className="text-[clamp(48px,4vw,64px)] font-bold text-center leading-[85px] text-gray-800 banner">
              ELEVATE YOUR LEARNING TO THE NEXT LEVEL
            </h2>
            <img src={authimage} alt="Auth" className="w-72 object-contain" />
          </div>

          {/* ------------------------------------------ Right Side - Form -------------------------------------- */}
          <div className="w-full lg:w-[100%] bg-white md:rounded-[50px] rounded-[30px] py-25 px-5 sm:px-25 shadow-2xl">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800">Sign In</h2>
              <p className="text-sm text-gray-500 mt-1">
                Welcome back! Enter your email and password below to sign in.
              </p>
            </div>

            <Formik
              initialValues={signInInitialValues}
              validationSchema={signInValidationSchema}
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
                      placeholder="Email"
                      className={`w-full px-4 py-3 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition ${touched.email && errors.email ? 'border-red-500' : 'border-gray-300'
                        }`}
                    />
                    <ErrorMessage name="email" component="div" className="text-sm text-red-600 mt-1" />
                  </div>

                  <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                      Password
                    </label>
                    <div className="relative">
                      <Field
                        type={showPassword ? "text" : "password"}
                        id="password"
                        name="password"
                        placeholder="Password"
                        className={`w-full px-4 py-3 pr-12 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition ${touched.password && errors.password ? 'border-red-500' : 'border-gray-300'
                          }`}
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                      >
                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                      </button>
                    </div>
                    <ErrorMessage name="password" component="div" className="text-sm text-red-600 mt-1" />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Field
                        type="checkbox"
                        id="rememberMe"
                        name="rememberMe"
                        className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <label htmlFor="rememberMe" className="ml-2 text-sm text-gray-700">
                        Remember Me
                      </label>
                    </div>
                    <button
                      type="button"
                      onClick={() => navigate('/auth/forgetpass')}
                      className="text-sm text-[#1488CC] hover:underline"
                    >
                      Forgot Password?
                    </button>
                  </div>

                  <div>
                    <button
                      type="button"
                      onClick={formikHandleSubmit}
                      disabled={isSubmitting}
                      className={`w-full py-2 bg-[#1488CC] hover:bg-[#1488CC]/90 text-white font-semibold rounded-md transition ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                        }`}
                    >
                      {isSubmitting ? 'Signing In...' : 'Sign In'}
                    </button>
                  </div>

                  <p className="text-center text-sm text-gray-600">
                    Not a member yet?{' '}
                    <button
                      type="button"
                      onClick={() => navigate('/auth/register')}
                      className="text-[#1488CC] hover:underline font-medium"
                    >
                      Sign Up
                    </button>
                  </p>
                </div>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Login
import React, { useState } from 'react'
import background from '../../assets/images/png/auth-bg.png'
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Eye, EyeOff } from 'lucide-react';
import authimage from '../../assets/images/png/authimage.png';
import { useNavigate } from "react-router";

const signUpValidationSchema = Yup.object({
  fullName: Yup.string().required('Full name is required'),
  email: Yup.string().email('Invalid email format').required('Email is required'),
  password: Yup.string().min(6, 'Password must be at least 8 characters').required('Password is required'),
  confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('Confirm password is required'),
  country: Yup.string().required('Country is required'),
  wantToBeInstructor: Yup.boolean()
});

const signUpInitialValues = {
  fullName: '',
  email: '',
  password: '',
  confirmPassword: '',
  country: '',
  wantToBeInstructor: false
};

const countries = [
  { value: '', label: 'Select Country' },
  { value: 'us', label: 'United States' },
  { value: 'ca', label: 'Canada' },
  { value: 'uk', label: 'United Kingdom' },
  { value: 'au', label: 'Australia' },
  { value: 'de', label: 'Germany' },
  { value: 'fr', label: 'France' },
  { value: 'in', label: 'India' },
  { value: 'jp', label: 'Japan' },
  { value: 'br', label: 'Brazil' },
  { value: 'mx', label: 'Mexico' },
  { value: 'other', label: 'Other' }
];

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    console.log('Sign up form submitted with values:', values);
    setTimeout(() => {
      alert('Account created successfully!');
      setSubmitting(false);
      resetForm();
    }, 1000);
  };
  return (
    <div className="relative w-full  min-h-screen md:py-12 flex justify-center items-center">
      {/* --------------------- Background Image ------------------------ */}
      <div className="absolute inset-0 z-0">
        <img
          src={background}
          alt="background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 w-full flex justify-center items-center  px-4 py-8 lg:px-20">
        <div className="bg-[#D3DFFF] md:rounded-[50px] rounded-[30px] w-full flex flex-col lg:flex-row items-center overflow-hidden shadow-lg">

          {/* ------------------------------ Left Side - Banner & Image ----------------------------------------- */}
          <div className="w-full hidden lg:w-1/2 lg:flex flex-col justify-center items-center py-8 px-8 lg:py-12 gap-30">
            <h2 className="text-[clamp(46px,3.5vw,60px)]  banner font-semibold text-center leading-[80px] text-gray-800 mb-6 lg:mb-8">
              ELEVATE YOUR LEARNING TO THE NEXT LEVEL
            </h2>
            <div className="w-full max-w-[300px] lg:max-w-[350px]">
              <img
                src={authimage}
                alt="auth"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* ------------------------------------------ Right Side - Form -------------------------------------- */}
          <div className="w-full lg:w-[100%] bg-white md:rounded-[50px] rounded-[30px]  px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-8 lg:py-10 shadow-2xl">

            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-1">Sign Up</h2>
            <p className="text-sm text-gray-500 mb-6 lg:mb-8">Create an account</p>
            <Formik
              initialValues={signUpInitialValues}
              validationSchema={signUpValidationSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting, touched, errors, handleSubmit: formikHandleSubmit }) => (
                <div className="space-y-4 lg:space-y-6">
                  {/* Full Name */}
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium mb-2 text-gray-700">
                      Full Name
                    </label>
                    <Field
                      id="fullName"
                      name="fullName"
                      placeholder="Enter your name"
                      className={`w-full px-3 py-2.5 lg:px-4 lg:py-3 rounded-lg border ${touched.fullName && errors.fullName ? 'border-red-500' : 'border-gray-300'
                        } focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors`}
                    />
                    <ErrorMessage name="fullName" component="div" className="text-sm text-red-600 mt-1" />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-700">
                      Email
                    </label>
                    <Field
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Enter your email"
                      className={`w-full px-3 py-2.5 lg:px-4 lg:py-3 rounded-lg border ${touched.email && errors.email ? 'border-red-500' : 'border-gray-300'
                        } focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors`}
                    />
                    <ErrorMessage name="email" component="div" className="text-sm text-red-600 mt-1" />
                  </div>

                  {/* Password */}
                  <div>
                    <label htmlFor="password" className="block text-sm font-medium mb-2 text-gray-700">
                      Password
                    </label>
                    <div className="relative">
                      <Field
                        id="password"
                        name="password"
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Enter your password"
                        className={`w-full px-3 py-2.5 lg:px-4 lg:py-3 pr-10 lg:pr-12 rounded-lg border ${touched.password && errors.password ? 'border-red-500' : 'border-gray-300'
                          } focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors`}
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors"
                      >
                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                      </button>
                    </div>
                    <ErrorMessage name="password" component="div" className="text-sm text-red-600 mt-1" />
                  </div>

                  {/* Confirm Password */}
                  <div>
                    <label htmlFor="confirmPassword" className="block text-sm font-medium mb-2 text-gray-700">
                      Confirm Password
                    </label>
                    <div className="relative">
                      <Field
                        id="confirmPassword"
                        name="confirmPassword"
                        type={showConfirmPassword ? 'text' : 'password'}
                        placeholder="Confirm your password"
                        className={`w-full px-3 py-2.5 lg:px-4 lg:py-3 pr-10 lg:pr-12 rounded-lg border ${touched.confirmPassword && errors.confirmPassword ? 'border-red-500' : 'border-gray-300'
                          } focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors`}
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors"
                      >
                        {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                      </button>
                    </div>
                    <ErrorMessage name="confirmPassword" component="div" className="text-sm text-red-600 mt-1" />
                  </div>

                  {/* Country */}
                  <div>
                    <label htmlFor="country" className="block text-sm font-medium mb-2 text-gray-700">
                      Country
                    </label>
                    <Field
                      as="select"
                      id="country"
                      name="country"
                      className={`w-full px-3 py-2.5 lg:px-4 lg:py-3 rounded-lg border ${touched.country && errors.country ? 'border-red-500' : 'border-gray-300'
                        } focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors bg-white`}
                    >
                      {countries.map((c) => (
                        <option key={c.value} value={c.value}>
                          {c.label}
                        </option>
                      ))}
                    </Field>
                    <ErrorMessage name="country" component="div" className="text-sm text-red-600 mt-1" />
                  </div>

                  {/* Instructor Checkbox */}
                  <div className="flex items-start gap-3">
                    <Field
                      type="checkbox"
                      id="wantToBeInstructor"
                      name="wantToBeInstructor"
                      className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 mt-0.5"
                    />
                    <label htmlFor="wantToBeInstructor" className="text-sm text-gray-700 leading-relaxed">
                      Want to become an instructor?
                    </label>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={formikHandleSubmit}
                      disabled={isSubmitting}
                      className={`w-full py-2.5 lg:py-3 rounded-lg bg-[#1488CC]  text-white font-medium transition-all duration-200 ${isSubmitting
                        ? 'opacity-50 cursor-not-allowed'
                        : 'hover:bg-[#1488CC]/90 hover:shadow-md active:transform active:scale-[0.98]'
                        }`}
                    >
                      {isSubmitting ? 'Creating Account...' : 'Sign Up'}
                    </button>
                  </div>

                  {/* Login Link */}
                  <div className="text-center pt-2">
                    <p className="text-sm text-gray-600">
                      Already have an account?{' '}
                      <button
                        type="button"
                        onClick={() => navigate('/auth/login')}
                        className="text-[#1488CC] hover:text-[#1488CC]/90 hover:underline font-medium transition-colors"
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

export default Register;
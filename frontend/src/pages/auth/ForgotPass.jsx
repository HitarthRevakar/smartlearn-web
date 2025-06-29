import React,{useState} from 'react'
import background from '../../assets/images/png/auth-background.png'
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
    <div className='min-h-screen'>

      {/* Background Pattern */}
         <div className="absolute inset-0">
             <img src={background} className='w-full'/>
         </div>

      <div className='relative max-w-[1720px] px-[100px] py-[123px]'>
        <div className='bg-[#D3DFFF] rounded-[50px] flex flex-row items-center justify-center'>

          {/* left side */}
          <div className='lg:flex md:flex hidden flex-col gap-[150px] lg:w-[580px] md:w-[373px]'>
            <div className='font-semibold text-center text-[40px] lg:w-[475px] md:w-[329px] lg:h-[170px] md:h-[192px]'>
              ELEVATE YOUR LEARNING TO THE NEXT LEVEL
            </div>
            <div className='w-full flex items-center justify-center'>
                <img src={authimage}/>
            </div>
          </div>

          {/* right side */}
          <div className='w-[1140px] bg-white rounded-[50px] flex flex-col gap-[10px] min-h-screen items-center justify-center'>
              <div className='w-full xl:px-[140px] lg:px-[80px] md:px-[40px]'>
                <h2 className='font-bold text-3xl'>
                Forgot Password?
                <h6 className='font-normal text-xs'>
                  Enter the email address associated with your account.
                </h6>
              </h2>
              </div>
              {/* form */}
              <div className='w-full xl:px-[140px] lg:px-[80px] md:px-[40px]'>
                 <Formik
        initialValues={forgotPasswordInitialValues}
        validationSchema={forgotPasswordValidationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, touched, errors, handleSubmit: formikHandleSubmit }) => (
          <div className="space-y-6">
            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <Field
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                className={`w-full px-3 py-3 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 ${
                  touched.email && errors.email ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              <ErrorMessage name="email" component="div" className="mt-1 text-sm text-red-600" />
            </div>

            {/* Send Button */}
            <div className="pt-2">
              <button
                type="button"
                onClick={formikHandleSubmit}
                disabled={isSubmitting}
                className={`w-full py-3 px-4 bg-blue-600 text-white font-medium rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200 ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? 'Sending...' : 'Send'}
              </button>
            </div>

            {/* Back to Sign In Link */}
            <div className="text-center pt-2">
              <p className="text-sm text-gray-600">
                Back to{' '}
                <button
                  type="button"
                  onClick={()=>navigate('/auth/login')}
                  className="text-blue-600 hover:text-blue-500 font-medium cursor-pointer"
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

    </div>
  )
}

export default ForgotPass;
import React,{useState} from 'react'
import background from '../../assets/images/png/auth-background.png'
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
    <div className='min-h-screen'>

      {/* Background Pattern */}
         <div className="absolute inset-0">
             <img src={background} className='w-full'/>
         </div>

      <div className='relative max-w-[1720px] px-[100px] py-[123px]'>
        <div className='bg-[#D3DFFF] rounded-[50px] flex flex-row items-center justify-center'>

          {/* left side */}
          <div className='lg:flex md:flex hidden flex-col gap-[250px] lg:w-[580px] md:w-[373px]'>
            <div className='font-semibold text-center text-[40px] lg:w-[475px] md:w-[329px] lg:h-[170px] md:h-[192px]'>
              ELEVATE YOUR LEARNING TO THE NEXT LEVEL
            </div>
            <div className='w-full flex items-center justify-center'>
                <img src={authimage}/>
            </div>
          </div>

          {/* right side */}
          <div className='w-[1140px] bg-white rounded-[50px] flex flex-col gap-[10px]'>
              <div className='w-full xl:px-[140px] lg:px-[80px] md:px-[40px]'>
                <h2 className='font-bold text-3xl'>
                Sign Up
                <h6 className='font-normal text-xs'>
                  create an account
                </h6>
              </h2>
              </div>
              {/* form */}
              <div className='w-full xl:px-[140px] lg:px-[80px] md:px-[40px] pb-[37px]'>
                <Formik
                  initialValues={signUpInitialValues}
                  validationSchema={signUpValidationSchema}
                  onSubmit={handleSubmit}
                >
                  {({ isSubmitting, touched, errors, handleSubmit: formikHandleSubmit }) => (
                    <div className="space-y-6">
                      {/* Full Name Field */}
                      <div>
                        <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name
                        </label>
                        <Field
                          type="text"
                          id="fullName"
                          name="fullName"
                          placeholder="Name"
                          className={`w-full px-4 py-3 border rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 ${
                            touched.fullName && errors.fullName ? 'border-red-500' : 'border-gray-300'
                          }`}
                        />
                        <ErrorMessage name="fullName" component="div" className="mt-1 text-sm text-red-600" />
                      </div>

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
                          className={`w-full px-4 py-3 border rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 ${
                            touched.email && errors.email ? 'border-red-500' : 'border-gray-300'
                          }`}
                        />
                        <ErrorMessage name="email" component="div" className="mt-1 text-sm text-red-600" />
                      </div>

                      {/* Password Field */}
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
                            className={`w-full px-4 py-3 pr-12 border rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 ${
                              touched.password && errors.password ? 'border-red-500' : 'border-gray-300'
                            }`}
                          />
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                          >
                            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                          </button>
                        </div>
                        <ErrorMessage name="password" component="div" className="mt-1 text-sm text-red-600" />
                      </div>

                      {/* Confirm Password Field */}
                      <div>
                        <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
                          Confirm Password
                        </label>
                        <div className="relative">
                          <Field
                            type={showConfirmPassword ? "text" : "password"}
                            id="confirmPassword"
                            name="confirmPassword"
                            placeholder="Confirm Password"
                            className={`w-full px-4 py-3 pr-12 border rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 ${
                              touched.confirmPassword && errors.confirmPassword ? 'border-red-500' : 'border-gray-300'
                            }`}
                          />
                          <button
                            type="button"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                          >
                            {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                          </button>
                        </div>
                        <ErrorMessage name="confirmPassword" component="div" className="mt-1 text-sm text-red-600" />
                      </div>

                      {/* Country Field */}
                      <div>
                        <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-2">
                          Country
                        </label>
                        <Field
                          as="select"
                          id="country"
                          name="country"
                          className={`w-full px-4 py-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 ${
                            touched.country && errors.country ? 'border-red-500' : 'border-gray-300'
                          }`}
                        >
                          {countries.map((country) => (
                            <option key={country.value} value={country.value}>
                              {country.label}
                            </option>
                          ))}
                        </Field>
                        <ErrorMessage name="country" component="div" className="mt-1 text-sm text-red-600" />
                      </div>

                      {/* Instructor Checkbox */}
                      <div className="flex items-center">
                        <Field
                          type="checkbox"
                          id="wantToBeInstructor"
                          name="wantToBeInstructor"
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                        <label htmlFor="wantToBeInstructor" className="ml-3 block text-sm text-gray-700">
                          Want to become an instructor?
                        </label>
                      </div>

                      {/* Submit Button */}
                      <div className="pt-4">
                        <button
                          type="button"
                          onClick={formikHandleSubmit}
                          disabled={isSubmitting}
                          className={`w-full py-3 px-4 bg-blue-600 text-white font-medium rounded-lg shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200 ${
                            isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                          }`}
                        >
                          {isSubmitting ? 'Creating Account...' : 'Sign Up'}
                        </button>
                      </div>

                      {/* Sign In Link */}
                      <div className="text-center pt-4">
                        <p className="text-sm text-gray-600">
                          Are you a member?{' '}
                          <button
                            type="button"
                            className="text-blue-600 hover:text-blue-500 font-medium cursor-pointer"
                            onClick={() =>navigate('/auth/login')}
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

export default Register;
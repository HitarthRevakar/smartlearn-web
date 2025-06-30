// -------------------------- import links ----------------------------- //
import React from 'react'
import { inquiryInitialValues } from '../../formik/initialvalues/Inquiry.initialvalues'
import { inquiryValidationSchema } from '../../formik/validations/Inquiry.validations'
import { Formik, Form, Field, ErrorMessage } from 'formik';

// ------------------------------- Raw data ---------------------------------- //
const educationLevels = [
  { value: '', label: 'Please Select' },
  { value: 'Secondry Education', label: 'Less than High School Graduate' },
  { value: 'high_school', label: 'High School Graduate' },
  { value: 'associate', label: 'Associate Degree' },
  { value: 'bachelor', label: 'Bachelor\'s Degree' },
  { value: 'master', label: 'Graduate Degree or Higher' },
];

// ------------------------------- Raw data ---------------------------------- //
const courses = [
  { value: '', label: 'Select Course' },
  { value: 'web_development', label: 'Web Development' },
  { value: 'data_science', label: 'Data Science' },
  { value: 'mobile_development', label: 'Multiplatform Mobile APP Development with Web Technologies' },
  { value: 'ui_ux_design', label: 'UI/UX Design' },
  { value: 'digital_marketing', label: 'Digital Marketing' },
  { value: 'cybersecurity', label: 'Cybersecurity' },
  { value: 'artificial_intelligence', label: 'Artificial Intelligence' },
  { value: 'cloud_computing', label: 'Cloud Computing' }
];

const InquiryForm = () => {

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    console.log('Form submitted with values:', values);
    setTimeout(() => {
      alert('Form submitted successfully!');
      setSubmitting(false);
      resetForm();
    }, 1000);
  };

  return (
    <div className='w-full h-full flex flex-col justify-center'>
      <h2 className='text-2xl font-bold text-center mb-[20px]'>Inquiry Form</h2>
      <Formik
        initialValues={inquiryInitialValues}
        validationSchema={inquiryValidationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, touched, errors }) => (
          <Form className="space-y-6">
            <div>
              <label htmlFor="fullName" className="block text-[clamp(16px,1.5vw,20px)] font-medium text-gray-700 mb-2">
                Full Name <span className="text-red-500">*</span>
              </label>
              <Field
                type="text"
                id="fullName"
                name="fullName"
                placeholder="Full Name"
                className={`w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${touched.fullName && errors.fullName ? 'border-red-500' : 'border-gray-300'
                  }`}
              />
              <ErrorMessage name="fullName" component="div" className="mt-1 text-sm text-red-600" />
            </div>

            <div>
              <label htmlFor="email" className="block text-[clamp(16px,1.5vw,20px)] font-medium text-gray-700 mb-2">
                Email <span className="text-red-500">*</span>
              </label>
              <Field
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                className={`w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${touched.email && errors.email ? 'border-red-500' : 'border-gray-300'
                  }`}
              />
              <ErrorMessage name="email" component="div" className="mt-1 text-sm text-red-600" />
            </div>

            <div>
              <label htmlFor="phone" className="block text-[clamp(16px,1.5vw,20px)] font-medium text-gray-700 mb-2">
                Phone <span className="text-red-500">*</span>
              </label>
              <Field
                type="tel"
                id="phone"
                name="phone"
                placeholder="Phone No."
                className={`w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${touched.phone && errors.phone ? 'border-red-500' : 'border-gray-300'
                  }`}
              />
              <ErrorMessage name="phone" component="div" className="mt-1 text-sm text-red-600" />
            </div>

            <div>
              <label htmlFor="levelOfEducation" className="block text-[clamp(16px,1.5vw,20px)] font-medium text-gray-700 mb-2">
                Level of Education <span className="text-red-500">*</span>
              </label>
              <Field
                as="select"
                id="levelOfEducation"
                name="levelOfEducation"
                className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${touched.levelOfEducation && errors.levelOfEducation ? 'border-red-500' : 'border-gray-300'
                  }`}
              >
                {educationLevels.map((level) => (
                  <option key={level.value} value={level.value}>
                    {level.label}
                  </option>
                ))}
              </Field>
              <ErrorMessage name="levelOfEducation" component="div" className="mt-1 text-sm text-red-600" />
            </div>

            <div>
              <label htmlFor="courseInterested" className="block text-[clamp(16px,1.5vw,20px)] font-medium text-gray-700 mb-2">
                Course Interested <span className="text-red-500">*</span>
              </label>
              <Field
                as="select"
                id="courseInterested"
                name="courseInterested"
                className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${touched.courseInterested && errors.courseInterested ? 'border-red-500' : 'border-gray-300'
                  }`}
              >
                {courses.map((course) => (
                  <option key={course.value} value={course.value}>
                    {course.label}
                  </option>
                ))}
              </Field>
              <ErrorMessage name="courseInterested" component="div" className="mt-1 text-sm text-red-600" />
            </div>

            <div className="flex items-center">
              <Field
                type="checkbox"
                id="subscribeToUpdates"
                name="subscribeToUpdates"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="subscribeToUpdates" className="ml-2 block text-[clamp(16px,1.5vw,20px)] text-gray-700">
                I subscribe to send me update and information by email.
              </label>
            </div>

            <div className="text-center py-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`px-8 py-2 bg-[#1488CC] text-white font-medium rounded-md shadow-sm focus:outline-none  ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
              >
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default InquiryForm;
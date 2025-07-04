import React from 'react'
//----------------------------------------------import formik properties-----------------------------------------------//

import { Field, Form, Formik } from "formik";
import { initialValues } from '../../formik/initialvalues/contactUsInitialValues';
import {validationSchema} from '../../formik/validations/contactUsValidations';

const ContactUsForm = () => {
  return (
    <>
        <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
    console.log('Form submitted with values:', values);
    setTimeout(() => {
      alert('Your message has been sent!');
      setSubmitting(false);
      resetForm();
    }, 1000);
  }} 
      >
        {({ errors, touched, isSubmitting }) => (
          <Form className="w-full flex flex-col gap-6" >

            {/*----------------------------------- First & Last Name -----------------------------------*/}

            <div className="w-full flex flex-col gap-6 lg:flex-row">
              <div className="w-full flex flex-col gap-2 text-[clamp(16px,1.5vw,20px)]">
                <label>First Name</label>
                <Field name="firstName" type="text" className="border-b-2 py-2 border-[#A1A1A1] focus:outline-none" />
                {touched.firstName && errors.firstName && (<p className="text-red-500 text-sm">{errors.firstName}</p>)}
              </div>
              <div className="w-full flex flex-col gap-2 text-[clamp(16px,1.5vw,20px)]">
                <label>Last Name</label>
                <Field name="lastName" type="text" className="border-b-2 py-2 border-[#A1A1A1] focus:outline-none" />
                {touched.lastName && errors.lastName && (<p className="text-red-500 text-sm">{errors.lastName}</p>)}
              </div>
            </div>

            {/*--------------------------------------------- Email & Phone --------------------------------------*/}

            <div className="w-full flex flex-col gap-6 lg:flex-row">
              <div className="w-full flex flex-col gap-2 text-[clamp(16px,1.5vw,20px)]">
                <label>Email</label>
                <Field name="email" type="email" className="border-b-2 py-2 border-[#A1A1A1] focus:outline-none" />
                {touched.email && errors.email && (<p className="text-red-500 text-sm">{errors.email}</p>)}
              </div>
              <div className="w-full flex flex-col gap-2 text-[clamp(16px,1.5vw,20px)]">
                <label>Phone Number</label>
                <Field name="phoneNumber" type="tel" className="border-b-2 py-2 border-[#A1A1A1] focus:outline-none" />
                {touched.phoneNumber && errors.phoneNumber && (<p className="text-red-500 text-sm">{errors.phoneNumber}</p>)}
              </div>
            </div>

            {/*------------------------------------------------- Subject ------------------------------------------*/}

            <div className="w-full flex flex-col gap-2 text-[clamp(16px,1.5vw,20px)]">
              <label>Subject</label>
              <Field name="subject" type="text" className="border-b-2 py-2 border-[#A1A1A1] focus:outline-none" />
              {touched.subject && errors.subject && (<p className="text-red-500 text-sm">{errors.subject}</p>)}
            </div>

            {/*------------------------------------------------- Message --------------------------------------*/}

            <div className="w-full flex flex-col gap-2 text-[clamp(16px,1.5vw,20px)]">
              <label>Message</label>
              <Field name="message" as="textarea" className="border-b-2 py-2 border-[#A1A1A1] focus:outline-none resize-none" />
              {touched.message && errors.message && (<p className="text-red-500 text-sm">{errors.message}</p>)}
            </div>

            {/*--------------------------------------------------- Submit -----------------------------------------*/}

            <div className="w-full flex lg:justify-end sm:justify-end justify-center">
              <button type="submit" disabled={isSubmitting} className="text-white bg-[#1488CC] cursor-pointer text-[20px] rounded-[10px] font-semibold !py-[7px] !px-[30px]">Send Message</button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  )
}

export default ContactUsForm
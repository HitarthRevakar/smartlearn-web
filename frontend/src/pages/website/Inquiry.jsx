// ------------------------------ import links --------------------------------- //
import React from 'react'
import inquirybanner from '../../assets/images/png/inquiry-banner.png'
import Banner from '../../components/webComponents/Banner'
import formimage from '../../assets/images/png/inquiry-form-image.png'
import InquiryForm from '../../components/webComponents/InquiryForm'

const Inquiry = () => {
  return (
    <div className='w-full flex flex-col justify-center items-center'>
      <Banner title={"Inquiry"} image={inquirybanner} className="banner " />
      <div className='w-full justify-center items-center flex flex-row gap-20 px-12 py-[100px]'>
        {/* ---------------------left side--------------- */}
        <div className='lg:flex items-center justify-center hidden '>
          <img src={formimage} className='w-full h-full object-contain' />
        </div>
        {/* -------------------right side----------------- */}
        <div className='w-full flex flex-col justify-center '>
          <InquiryForm />
        </div>
      </div>
    </div>
  )
}

export default Inquiry;
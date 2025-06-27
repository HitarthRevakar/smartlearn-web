import React from 'react'
import inquirybanner from '../../assets/images/png/inquiry-banner.png'
import Banner from '../../components/webComponents/Banner'
import formimage from '../../assets/images/png/inquiry-form-image.png'
import InquiryForm from '../../components/webComponents/InquiryForm'

const Inquiry = () => {
  return (
    <div className='w-full'>
      <Banner title={"Inquiry"} image={inquirybanner} className="banner " />
      <div className='flex flex-row lg:p-[100px] p-[12px] md:p-[24px] gap-30'>
        <div className='lg:flex items-center justify-center hidden '>
          <img src={formimage} className='w-[415px] h-[371px]'/>
        </div>
        <div className='w-full'>
            <InquiryForm/>
        </div>
      </div>
    </div>
  )
}

export default Inquiry;
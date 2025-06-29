import React from 'react'
import Banner from '../../components/webComponents/Banner'
import AboutUsBanner from '../../assets/images/png/aboutus-banner.png'

const AboutUs = () => {
  return (
    <>
      <div className="w-full  overflow-hidden">
        <Banner title={"About Us"} image={AboutUsBanner} className="banner " />
        <div className="w-full h-full grid lg:grid-cols-2 gap-8 px-6 lg:px-16 py-12">
          {/* -------------------------------- Title --------------------------------------- */}
          <div className="w-full  space-y-4">
            <p className="text-[#1488CC] font-medium">Our Mission</p>
            <h2 className="text-[clamp(24px,4vw,45px)] font-bold leading-[50px] text-gray-900">
              Our Mission is to <br className="hidden lg:block" />
              Provide a World-class Education.
            </h2>
          </div>

          {/* -------------------------------- paragraph --------------------------------------- */}
          <div className="text-[#676767] w-full  space-y-6 leading-[32px]">
            <p>
              Lorem ipsum dolor sit amet consectetur. Egestas ut tellus scelerisque hac. Diam penatibus
              mauris lacus diam nullam. Sed eu scelerisque suspendisse sollicitudin rhoncus id suspendisse
              nec odio. Ipsum urna at et non ultricies in sodales viverra. Dignissim sem lectus aliquam
              sagittis enim duis tristique in risus. Arcu urna pharetra cursus a. Est nibh vestibulum in
              lobortis a natoque massa eleifend hendrerit. Elit porttitor mattis massa sed libero nec
              odio id.<br />Cursus feugiat vivamus feugiat ultrices diam auctor. Tincidunt cras felis sem sit convallis
              integer quis tempor mattis. Nisi ipsum condimentum quam consectetur ornare ultrices massa
              tempor. Pharetra risus urna nisi mauris. Lacus ac risus non sed in risus.
            </p>
          </div>
        </div>
      </div>

      {/* ---------------------------------- Banner showing Score ---------------------------------------- */}
      <div className="w-full py-10 mb-15 bg-gradient-to-r from-[#2c3e50] to-[#3498db] text-white">
        <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-4 lg:gap-0 gap-10 text-center items-center">

          <div className='flex flex-col justify-center items-center md:px-4 px-0'>
            <h3 className="text-[clamp(32px,4.8vw,64px)] font-bold">5000</h3>
            <p className="text-[clamp(20px,2.4vw,40px)] mt-2">Foreign Followers</p>
          </div>

          <div className='flex flex-col justify-center items-center'>
            <h3 className="text-[clamp(32px,4.8vw,64px)] font-bold">10</h3>
            <p className="text-[clamp(20px,2.4vw,40px)] mt-2">Certified Teachers</p>
          </div>

          <div className='flex flex-col justify-center items-center'>
            <h3 className="text-[clamp(32px,4.8vw,64px)] font-bold">2100</h3>
            <p className="text-[clamp(20px,2.4vw,40px)] mt-2">Student Enrolled</p>
          </div>

          <div className='flex flex-col justify-center items-center'>
            <h3 className="text-[clamp(32px,4.8vw,64px)] font-bold">100</h3>
            <p className="text-[clamp(20px,2.4vw,40px)] mt-2">Complete Courses</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutUs
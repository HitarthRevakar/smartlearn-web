import React from "react";
import ContactUsForm from "../../components/webComponents/ContactUsForm";
import callicon from "../../assets/images/png/contactus-call-icon.png";
import mailicon from "../../assets/images/png/contactus-mail-icon.png";
import facebook from "../../assets/images/png/contactus-facebook.png";
import instagram from "../../assets/images/png/conatctus-instagram.png";
import linkedin from "../../assets/images/png/contactus-linkedin.png";
import locationicon from "../../assets/images/png/contactus-location-icon.png";
import Banner from "../../components/webComponents/Banner";
import contactusbanner from '../../assets/images/png/contactus-banner.png'

const ContactUs = () => {
  return (
    <div className="w-full">
      <Banner title={"Contact Us"} image={contactusbanner} className="banner "/>
      <div className="w-full p-6 md:pt-[50px] flex flex-col">
      <div className="flex flex-col w-full rounded-lg md:shadow-lg md:border border-[#EBEBEB] sm:border-0">
        <div className="flex flex-col sm:flex-col md:flex-row">
          
          {/* ---------------------------------- left side (Contact Info.) --------------------------------- */}

          <div className="lg:w-[50%] md:w-[80%] w-full flex justify-center ">
            <div className="flex flex-col w-full gap-6">
              <div className="p-5 flex flex-col gap-9 bg-[#EDF2FF] rounded-l-lg px-5 tablet:py-10">
                <p className="font-semibold lg:text-start text-center  text-[clamp(24px,2.5vw,32px)] text-[#1488CC]">
                  USA
                </p>
                <div className="flex gap-5 items-center">
                  <img src={callicon} className="w-[25px] h-[25px]" />
                  <a
                    href="tel:(+1) 123 456 7890"
                    className="text-[clamp(16px,2vw,24px)] font-[500] text-black "
                  >
                    (+1) 123 456 7890
                  </a>
                </div>
                <div className="flex gap-5 items-center">
                  <img src={mailicon} className="w-[25px] h-[24px]" />
                  <a
                    href="mailto:demo@gmail.com"
                    className="text-[clamp(16px,2vw,24px)] break-words font-[500] text-black"
                  >
                    demo@gmail.com
                  </a>
                </div>
                <div className="flex gap-5 items-center">
                  <img
                    src={locationicon}
                    className="w-[22px] h-[30px] !mt-[5px]"
                  />
                  <a
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[clamp(16px,2vw,24px)] font-[500] text-black "
                  >
                    Lorem ipsum dolor sit amet consectetur. Vel elementum massa
                    mauris augue pretium. Id.
                  </a>
                </div>

                <p className="font-semibold lg:text-start text-center  text-[clamp(24px,2.5vw,34px)] text-[#1488CC]">
                  INDIA
                </p>
                <div className="flex gap-5 items-center">
                  <img src={callicon} className="w-[25px] h-[25px]" />
                  <a
                    href="tel:(+91) 123 456 7890"
                    className="text-[clamp(16px,2vw,24px)] font-[500] text-black "
                  >
                    (+91) 123 456 7890
                  </a>
                </div>
                <div className="flex gap-5 items-center">
                  <img src={mailicon} className="w-[25px] h-[24px]" />
                  <a
                    href="mailto:demo@gmail.com"
                    className="text-[clamp(16px,2vw,24px)] break-words font-[500] text-black"
                  >
                    demo@gmail.com
                  </a>
                </div>
                <div className="flex gap-5 items-center">
                  <img
                    src={locationicon}
                    className="w-[22px] h-[30px] !mt-[5px]"
                  />
                  <a
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[clamp(16px,2vw,24px)] font-[500] text-black "
                  >
                    Lorem ipsum dolor sit amet consectetur. Vel elementum massa
                    mauris augue pretium. Id.
                  </a>
                </div>
                <div className="justify-center items-center w-full ">
                <div className="flex lg:gap-[40px] gap-[35px]">
                  <a href="" target="_blank">
                    <img src={facebook} alt="Facebook" />
                  </a>
                  <a href="" target="_blank">
                    <img src={linkedin} alt="LinkedIn" />
                  </a>
                  <a href="" target="_blank">
                    <img src={instagram} alt="Instagram" />
                  </a>
                </div>
              </div>
              </div>

              
            </div>
          </div>
              {/* -----------------------------contactus form------------------------ */}
          <div className="w-full  flex justify-center">
            <div className="flex flex-col justify-center items-center gap-8 lg:w-[90%] md:w-[85%] w-full  pt-12">
              <ContactUsForm />
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};
export default ContactUs;

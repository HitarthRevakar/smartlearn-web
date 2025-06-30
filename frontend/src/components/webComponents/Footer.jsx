// -------------------------- import links ----------------------------- //
import React from 'react';
import { Link } from "react-router-dom";
import facebook from '../../assets/images/png/facebook-icon.png'
import instagram from '../../assets/images/png/instagram-icon.png'
import linkedin from '../../assets/images/png/linkedin-icon.png'
import phoneicon from '../../assets/images/png/phone-icon.png'
import mailicon from '../../assets/images/png/mail-icon.png'
import mapicon from '../../assets/images/png/map-icon.png'
import copyright from '../../assets/images/png/copyright-icon.png'
import smartlearnlogofooter from '../../assets/images/png/smartlearn-logo-for-footer.png'

const Footer = () => {

  return (
    <footer className="bg-black text-white w-full h-full">
      <div className=" mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-8">
          {/* ----------------------- Logo and Description  --------------------- */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <img
                src={smartlearnlogofooter}
                alt="SmartLearn Logo"
                className="w-[304px] h-[75px] rounded object-contain"
              />
            </div>

            <p className="text-gray-300 mb-6 leading-relaxed">
              We offer high quality advanced training and are unswerving to providing the best training facilities to our students.
            </p>

            {/* ---------------------- Social Media Icons ---------------------- */}
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10  rounded-full flex items-center justify-center transition-colors"
              >
                <img src={facebook} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-colors"
              >
                <img src={linkedin} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-colors"
              >
                <img src={instagram} />
              </a>
            </div>
          </div>

          {/* ---------------------------- Links -------------------------------- */}
          <div className="lg:col-span-1 lg:ms-10">
            <h3 className="text-lg font-semibold mb-6">Links</h3>
            <ul className="">
              <Link
                to="/aboutus"
                className="cursor-pointer"
              >
                <li className='pb-3'>About Us</li>
              </Link>
              <Link
                to="/"
                className="cursor-pointer"
              >
                <li className='pb-3'>Become an Instructor</li>
              </Link>
              <Link
                to="/courses"
                className="cursor-pointer"
              >
                <li className='pb-3'>Courses</li>
              </Link>
              <Link
                to="/inquiry"
                className="cursor-pointer"
              >
                <li className='pb-3'>Inquiry</li>
              </Link>
            </ul>
          </div>

          {/* ------------------------ Contact Us (USA) ------------------------ */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-6">Contact Us (USA)</h3>
            <div className="space-y-7">
              <div className="flex items-center space-x-3">
                <img src={phoneicon} />
                <span className="text-gray-300">(+1) 123 456 7890</span>
              </div>
              <div className="flex items-center space-x-3">
                <img src={mailicon} />
                <span className="text-gray-300">demo@gmail.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <img src={mapicon} />
                <span className="text-gray-300">
                  Lorem ipsum dolor sit amet consectetur. Facilisis sed justo a metus morbi varius dictum.
                </span>
              </div>
            </div>
          </div>

          {/* ----------------------- Contact Us (INDIA) ------------------------ */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-6">Contact Us (INDIA)</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <img src={phoneicon} />
                <span className="text-gray-300">(+91) 123 456 7890</span>
              </div>
              <div className="flex items-center space-x-3">
                <img src={mailicon} />
                <span className="text-gray-300">demo@gmail.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <img src={mapicon} />
                <span className="text-gray-300">
                  Lorem ipsum dolor sit amet consectetur. Facilisis sed justo a metus morbi varius dictum.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --------------------------- Copyright -------------------------------- */}
      <div className="py-4">
        <div className="w-full flex justify-center items-center mx-auto px-6 py-4">
          <p className="flex items-center text-center gap-2 text-white text-sm">
            <img src={copyright} /> Copyright 2024, All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
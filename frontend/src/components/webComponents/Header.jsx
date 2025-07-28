/* eslint-disable no-unused-vars */
// -------------------------- import links ----------------------------- //
import React, { useEffect, useState } from 'react'
import smartlearnlogo from '../../assets/images/png/smartlearn-logo.png'
import phoneicon from '../../assets/images/png/phone-icon.png'
import mailicon from '../../assets/images/png/mail-icon.png'
import closebtn from '../../assets/images/png/close-btn.png'
import { useNavigate, useLocation, Link } from "react-router";
const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // ---------------- Stop scrolling while open slider ---------- //
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMobileMenuOpen]);

  // ---------------------------- Navbar ------------------------ //
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Courses", path: "/courses" },
    { name: "Inquiry", path: "/inquiry" },
    { name: "About Us", path: "/aboutus" },
    { name: "Contact Us", path: "/contactus" },
  ];
  return (
    <header className="w-full sticky top-0 z-10 bg-white ">
      {/* ------------------- Top bar with contact info  ------------------ */}
      <div className="bg-black text-white py-3 px-12">
        <div className="w-full  flex lg:justify-between md:justify-end justify-end items-center text-sm">
          <div className="items-center space-x-6 lg:flex hidden">
            <div className="flex items-center space-x-2">
              <img src={phoneicon} />
              <span>(+1) 123-456-7890</span>
            </div>
            <div className="border-l border-white h-4"></div>
            <div className="flex items-center space-x-2">
              <img src={mailicon} />
              <span>demo@gmail.com</span>
            </div>
          </div>
          <div className="flex space-x-4 ">
            {isLoggedIn ? (
              <>
                <span>Hello! Jakob Herwitz</span>
                <button
                  onClick={() => setIsLoggedIn(false)}
                  className="bg-[#1488CC] hover:bg-blue-600 px-4 py-1 rounded text-white transition-colors"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <button
                  className="bg-[#1488CC] hover:bg-[#1488CC]/90 px-4 py-1 rounded text-white transition-colors cursor-pointer"
                  onClick={() => navigate('/auth/register')}
                >
                  Register
                </button>
                <button
                  className="bg-[#1488CC] hover:bg-[#1488CC]/90 px-4 py-1 rounded text-white transition-colors cursor-pointer"
                  onClick={() => navigate('/auth/login')}
                >
                  Login
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      {/* ----------------------------------- main navigation --------------------------------------- */}
      <div className=" py-3 lg:px-12 px-5">
        <div className="w-full flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center ">
            <img
              src={smartlearnlogo}
              alt="SmartLearn Logo"
              className="w-[180px] h-[75px] object-contain"
            />
          </div>

          {/* ---------------------------------- Navbar --------------------------------------------- */}
          <nav className="hidden md:flex items-center xl:space-x-15 lg:space-x-15 md:space-x-7">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.path}
                className={`text-gray-700 hover:text-[#1488CC] font-medium transition-colors relative ${location.pathname === link.path ? '!text-[#1488CC] font-bold' : ''
                  }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* --------------------------------- Contact Us Button ----------------------------------- */}
          <div className="hidden md:block">
            <a
              href={navLinks[4].path}
              className="bg-[#1488CC] hover:bg-[#1488CC]/90 text-white px-6 py-3 rounded-md font-[18px] transition-colors"
            >
              {navLinks[4].name}
            </a>
          </div>

          {/* ------------------------------ Mobile menu button ------------------------------------ */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="md:hidden p-2 cursor-pointer transition-transform duration-500"
          >
            <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* ------------------------------ Mobile Sidebar Menu - only mobiles ------------------------------------ */}
          {isMobileMenuOpen && (
            <>
              <div
                className="fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 ease-in-out"
                onClick={() => setIsMobileMenuOpen(false)}
              ></div>
              <div
                className={`fixed top-0 right-0 h-full z-50 bg-white p-6 w-72 shadow-xl md:hidden transform transition-transform duration-500 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
                  }`}
              >
                <div className="flex justify-end mb-6">
                  <button onClick={() => setIsMobileMenuOpen(false)}>
                    <img src={closebtn} className="w-6 h-6 cursor-pointer" />
                  </button>
                </div>
                <div className="mb-8 flex items-center justify-center">
                  <img src={smartlearnlogo} alt="SmartLearn Logo" className="w-[200px]" />
                </div>
                <nav className="flex flex-col space-y-6 text-lg font-medium text-black">
                  {navLinks.map(link => (
                    <Link
                      key={link.name}
                      to={link.path}
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                      className="text-gray-700 hover:text-[#1488CC] transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  ))}
                </nav>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header;
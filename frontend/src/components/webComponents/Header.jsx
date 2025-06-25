import React from 'react'
import smartlearnlogo from '../../assets/images/png/smartlearn-logo.png'
import phoneicon from '../../assets/images/png/phone-icon.png'
import mailicon from '../../assets/images/png/mail-icon.png'

const Header = () => {

    const navLinks = [
    { name: "Home", path: "/" },
    { name: "Courses", path: "/courses" },
    { name: "Inquiry", path: "/inquiry" },
    { name: "About Us", path: "/aboutus" },
    { name: "Contact Us", path: "/contactus" },
  ];
  return (
    <header className="w-full">
      {/* Top bar with contact info */}
      <div className="bg-black text-white py-2 px-6">
        <div className="max-w-[1920px]  flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
                <img src={phoneicon}/>
              <span>(+1) 123-456-7890</span>
            </div>
            <div class="border-l border-white h-4"></div>
            <div className="flex items-center space-x-2">
                <img src={mailicon}/>
              <span>demo@gmail.com</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <span>Hello! Jakob Herwitz</span>
            <button className="bg-blue-500 hover:bg-blue-600 px-4 py-1 rounded text-white transition-colors">
              Logout
            </button>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="bg-white shadow-sm border-b py-4 px-6">
        <div className="max-w-[1920px] flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-3">
              <img 
                src={smartlearnlogo} 
                alt="SmartLearn Logo" 
                className="w-[304px] h-[75px] rounded object-cover"
              />
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.slice(0, 4).map((link, index) => (
              <a
                key={link.name}
                href={link.path}
                className={`text-gray-700 hover:text-blue-500 font-medium transition-colors relative ${
                  index === 0 ? 'text-blue-500' : ''
                }`}
              >
                {link.name}
                {index === 0 && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-500"></div>
                )}
              </a>
            ))}
          </nav>

          {/* Contact Us Button */}
          <div className="hidden md:block">
            <a
              href={navLinks[4].path}
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-medium transition-colors"
            >
              {navLinks[4].name}
            </a>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header;
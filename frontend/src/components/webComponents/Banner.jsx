import React from 'react';

const Banner = ({ title, image, className }) => {
    return (
        <div className={`relative w-full h-[180px] sm:h-[250px] md:h-[300px] lg:h-[280px] overflow-hidden ${className}`} >
            {/* ------------------------------ Background Image ----------------------------- */}
            <img
                src={image}
                alt="Course Banner"
                className="w-full h-full object-cover"
            />

            {/* ---------------------------------- Overlay ----------------------------------- */}
            <div className="absolute inset-0  flex items-center px-6 sm:px-12">
                {/* ------------------------------- Title ------------------------------------- */}
                <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-wide">
                    {title}
                </h1>
            </div>
        </div>
    );
};

export default Banner;

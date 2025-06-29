import React, { useEffect, useState } from 'react';

const slides = [
  {
    title: 'FLEXIBLE LEARNING',
    subtitle: 'Self paced online & offline Classrooms',
  },
  {
    title: 'ACQUIRE KNOWLEDGE',
    subtitle: 'Excel your career in IT',
  },
  {
    title: 'INCREASE EARNING',
    subtitle: 'Get ahead with healthcare courses',
  },
];

const SlidingTextCarousel = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className=" h-full lg:block overflow-hidden flex relative w-full">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${index * 100}%)`,
          width: `${slides.length * 100}%`,
        }}
      >
        {slides.map((slide, i) => (
          <div
            key={i}
            className="w-full flex-shrink-0 text-center lg:text-left "
          >
            <h2 className="text-[clamp(32px,4.7vw,80px)] banner font-bold text-[#1488CC] uppercase">
              {slide.title}
            </h2>
            <p className="text-[clamp(20px,3.2vw,40px)] text-gray-700 ">{slide.subtitle}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SlidingTextCarousel;

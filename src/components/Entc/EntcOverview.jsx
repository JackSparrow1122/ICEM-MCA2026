import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import HatImage from '../../assets/images/hat.avif';
import entc from '../../assets/images/Entc-Images/overview.avif';

function EntcOverview() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <div className="flex flex-col md:flex-row items-start gap-6 md:gap-10 px-6 md:px-20 py-6 poppins-regular overflow-hidden">
      
      {/* Text Content */}
      <div className="md:w-2/3 w-full relative" data-aos="fade-right">
        <h2 className="text-2xl md:text-3xl font-bold text-[#104552] mb-4">
          <span className="relative inline-block">
            <img
              src={HatImage}
              alt="Hat"
              loading="lazy"
              className="absolute -left-8 -top-10 w-14 h-14 animate-floating"
            />
            Program Overview
          </span>
        </h2>
        <p className="text-sm md:text-lg text-gray-700 tracking-wide">
          From 5G networks and IoT devices to satellites and AI-powered automation, Electronics & Telecommunication Engineering (ENTC) is the backbone of modern technology.
          If you dream of designing high-speed communication systems, smart gadgets, or next-gen AI hardware, then ENTC at Indira College of Engineering & Management (ICEM), Pune, is your launchpad to success!
        </p>
      </div>

      {/* Image */}
      <div className="md:w-1/3 w-full" data-aos="fade-left">
        <img
          src={entc}
          alt="Program Overview"
          loading="lazy"
          className="w-full h-80 object-contain"
        />
      </div>
    </div>
  );
}

export default EntcOverview;

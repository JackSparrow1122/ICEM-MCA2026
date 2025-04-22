import React, { useEffect, useState } from 'react';

import logo1 from '../../../public/logos/schlumberger.avif';
import logo2 from  '../../../public/logos/sas-min.avif';
import logo3 from  '../../../public/logos/yash-min.avif';
import logo4 from  '../../../public/logos/philips-min.avif';
import logo5 from  '../../../public/logos/jaspay-min.avif';
import logo6 from  '../../../public/logos/veritas-min.avif';
import logo7 from '../../../public/logos/fis-min.avif'; 
import logo8 from '../../../public/logos/infosys-min.avif'; 
import logo9 from '../../../public/logos/kpit-min.avif'; 
import logo10 from '../../../public/logos/nttdata-min.avif'; 
import logo11 from '../../../public/logos/palo-min.avif'; 
import logo12 from '../../../public/logos/Persistent-min.avif'; 
import logo13 from '../../../public/logos/Tcs-min.avif'; 
import logo14 from '../../../public/logos/dataaxle-min.avif'; 
import logo15 from '../../../public/logos/tetrapak.avif'; 
import logo16 from '../../../public/logos/thermax.avif'; 
import logo17 from '../../../public/logos/mastercard.avif'; 
import logo18 from '../../../public/logos/nutanix.avif'; 
import logo19 from '../../../public/logos/faurecia.avif'; 
import logo20 from '../../../public/logos/force.avif'; 
import logo21 from '../../../public/logos/techM.avif'; 
import logo22 from '../../../public/logos/bridgestone.avif'; 
import logo23 from '../../../public/logos/thy.avif'; 
import logo24 from '../../../public/logos/bluestar.avif'; 
import logo25 from '../../../public/logos/jade.avif'; 
import logo26 from '../../../public/logos/Servicenow.avif'; 
import logo27 from '../../../public/logos/clsa.avif'; 
import logo28 from '../../../public/logos/Datamatics.avif'; 
import logo29 from '../../../public/logos/piaggio.avif'; 
import logo30 from '../../../public/logos/mantruck_.avif'; 
import logo31 from '../../../public/logos/kinatic.avif'; 

const CompRecruiter = () => {
  const logos = [
    logo1, logo2, logo3, logo4, logo5, logo6,
    logo7, logo8, logo9, logo10, logo11, logo12,
    logo13, logo14, logo15, logo16, logo17, logo18, logo19,
    logo20, logo21, logo22, logo23, logo24, logo25,
    logo26, logo27, logo28, logo29, logo30, logo31
  ];

  return (
    <div className="logo-slider-section py-4 roboto-regular">
      <div className="text-center mb-4">
        <h2 className="text-3xl lg:text-4xl xl:text-4xl font-bold">
          <span>Top Recruiters</span>
        </h2>
      </div>

      <div className="logo-slider relative overflow-hidden w-full">
        <div className="logo-slider-track flex animate-slide">
          {/* Map over the logos and display them */}
          {logos.map((logo, index) => (
            <div key={index} className="logo-slide flex-none mx-3 sm:mx-4 md:mx-5">
              <img
                src={logo}
                alt={`Recruiter Logo ${index + 1}`}
                className="h-16 sm:h-20 max-w-[120px] object-contain"
                loading="lazy" // Lazy load images
              />
            </div>
          ))}

          {/* Duplicate set for seamless loop */}
          {logos.map((logo, index) => (
            <div key={`duplicate-${index}`} className="logo-slide flex-none mx-3 sm:mx-4 md:mx-5">
              <img
                src={logo}
                alt={`Recruiter Logo ${index + 1}`}
                className="h-16 sm:h-20 max-w-[120px] object-contain"
                loading="lazy" // Lazy load images
              />
            </div>
          ))}
        </div>

        <div className="absolute left-0 top-0 h-full w-24 to-transparent z-10" />
        <div className="absolute right-0 top-0 h-full w-24 to-transparent z-10" />
      </div>

      <style>{`
        .logo-slider {
          position: relative;
          padding: 0 20px;
        }

        .logo-slider-track {
          display: flex;
          width: fit-content;
        }

        .animate-slide {
          animation: slide 40s linear infinite;
        }

        @keyframes slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .logo-slider:hover .logo-slider-track {
          animation-play-state: paused;
        }

        @media (max-width: 640px) {
          .animate-slide {
            animation-duration: 30s;
          }
        }
      `}</style>
    </div>
  );
};

export default CompRecruiter;

import React, { useEffect, useState } from 'react';

const CompRecruiter = () => {
  const [isVisible, setIsVisible] = useState(true);

  const logos = [
    '/logos/SOE L1.avif',
    '/logos/SOE L2.avif',
    '/logos/SOE L3.avif',
    '/logos/SOE L4.avif',
    '/logos/SOE L5.avif',
    '/logos/SOE L6.avif',
    '/logos/SOE L7.avif',
    '/logos/SOE L8.avif',
    '/logos/SOE L9.avif',
    '/logos/SOE L10.avif',
    '/logos/SOE L11.avif',
    '/logos/SOE L12.avif',
    '/logos/SOE L13.avif',
    '/logos/SOE L14.avif',
    '/logos/SOE L15.avif',
  ];

  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsVisible(!document.hidden);
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  const renderSliderRow = (rowLogos, animationClass, directionLabel) => {
    // Repeat logos 3 times to ensure the row length exceeds screen width on all resolutions
    const repeated = [...rowLogos, ...rowLogos, ...rowLogos];
    return (
      <div className="logo-slider relative overflow-hidden w-full py-1">
        <div className={`logo-slider-track flex ${isVisible ? animationClass : ''}`}>
          {/* First set */}
          {repeated.map((logo, index) => (
            <div key={`${directionLabel}-first-${index}`} className="logo-slide flex-none mx-3 sm:mx-4 md:mx-5">
              <img
                src={logo}
                alt={`Recruiter Logo ${directionLabel} ${index + 1}`}
                className="h-14 sm:h-16 max-w-[115px] object-contain transition-transform duration-300 hover:scale-105"
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {repeated.map((logo, index) => (
            <div key={`${directionLabel}-second-${index}`} className="logo-slide flex-none mx-3 sm:mx-4 md:mx-5">
              <img
                src={logo}
                alt={`Recruiter Logo ${directionLabel} ${index + 1}`}
                className="h-14 sm:h-16 max-w-[115px] object-contain transition-transform duration-300 hover:scale-105"
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}
        </div>
        {/* Gradient overlays for fade effect */}
        <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-[#f2f7fc] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-[#f2f7fc] to-transparent z-10 pointer-events-none" />
      </div>
    );
  };

  return (
    <div className="logo-slider-section py-8 roboto-regular bg-white">
      <div className="text-center mb-8">
        <h2 className="text-3xl lg:text-4xl xl:text-4xl font-bold text-[#135783]">
          Top <span className='text-[#259CA8]'>Recruiters</span>
        </h2>
      </div>

      <div className="flex flex-col gap-4 w-full">
        {renderSliderRow(logos.slice(0, 5), 'animate-left', 'row1')}
        {renderSliderRow(logos.slice(5, 10), 'animate-right', 'row2')}
        {renderSliderRow(logos.slice(10, 15), 'animate-left-fast', 'row3')}
      </div>

      <style>{`
        .logo-slider {
          position: relative;
          padding: 0 20px;
          touch-action: pan-y; /* Prevent touch horizontal drag from locking page vertical scroll */
        }

        .logo-slider-track {
          display: flex;
          width: fit-content;
          will-change: transform; /* Force hardware GPU acceleration */
          transform: translate3d(0, 0, 0); /* Force GPU compositing */
          backface-visibility: hidden;
        }

        .logo-slider-track.animate-left {
          animation: slide-left 35s linear infinite;
        }

        .logo-slider-track.animate-right {
          animation: slide-right 38s linear infinite;
        }

        .logo-slider-track.animate-left-fast {
          animation: slide-left 30s linear infinite;
        }

        .logo-slide {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        @keyframes slide-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes slide-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .logo-slider:hover .logo-slider-track {
          animation-play-state: paused;
        }

        @media (max-width: 640px) {
          .logo-slider-track.animate-left {
            animation-duration: 25s;
          }
          .logo-slider-track.animate-right {
            animation-duration: 28s;
          }
          .logo-slider-track.animate-left-fast {
            animation-duration: 22s;
          }
        }
      `}</style>
    </div>
  );
};

export default CompRecruiter;

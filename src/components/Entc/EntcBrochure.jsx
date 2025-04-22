import React, { useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faRobot } from '@fortawesome/free-solid-svg-icons';
import gearImage from '../../assets/images/tech-dots.avif';

function AidsBrochure() {
    const handleScrollTop = useCallback(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);
  return (
    <div
      className="flex justify-between items-center bg-[#FFF8F0] text-white shadow-lg h-auto px-4 md:px-16 py-2 md:py-4 poppins-regular relative"
      style={{
        backgroundImage: `url(${gearImage}), url(${gearImage})`,
        backgroundPosition: 'left bottom, right top',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
      }}
    >
      <div className="w-full bg-[#0c3249] p-4 rounded-3xl flex flex-col md:flex-row justify-between items-center">
        {/* Left Section */}
        <div className="max-w-full md:max-w-2/3 mb-6 md:mb-0 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start space-x-2 mb-2">
            <FontAwesomeIcon icon={faRobot} className="text-2xl text-[#41b9d0]" />
            <h2 className="text-3xl font-bold text-white m-0">Syllabus</h2>
          </div>
          <p className="text-lg text-white hidden sm:block">
            Explore the latest in Electronics and Telecommunication, including VLSI design,
            embedded systems, signal processing, and IoT-based communication.
          </p>
        </div>

        {/* Right Section */}
        <div className="mt-4 md:mt-4">
        <a
            href="" // replace with actual file path
            onClick={handleScrollTop}
            className="bg-[#41b9d0] border-2 border-[#0c3249] text-white px-6 py-3 rounded-3xl hover:bg-[#1e5f76] hover:text-white hover:border-white transition duration-300 flex items-center space-x-2"
          >
            <FontAwesomeIcon icon={faDownload} />
            <span>Download Brochure</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default AidsBrochure;

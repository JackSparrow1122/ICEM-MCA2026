import React, { memo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import brochurePdf from '../../assets/ICEMAdmissionBrochure2025.pdf';

const CompBrochure = () => {
  return (
    <div
      className="flex justify-between items-center bg-contain bg-center text-white shadow-lg py-2  px-4 md:px-8 lg:px-16 poppins-regular"
    >
      <div className="w-full bg-[#259CA8] p-6 rounded-3xl flex flex-col md:flex-row justify-between items-center">
        <div className="max-w-full md:max-w-2/3 mb-4 md:mb-0">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Syllabus</h2>
          <p className="text-lg text-gray-200 hidden sm:block">
          Master core engineering domains including robotics, thermodynamics, CAD/CAM, fluid mechanics, and advanced manufacturing systems.
          </p>
        </div>

        <a
          href={brochurePdf}
          download="ICEM_Admission_Brochure_2025.pdf"
          className="bg-[#0793b3] border-2 border-white text-white px-6 py-3 rounded-3xl hover:bg-[#259CA8] transition duration-300 flex items-center space-x-2 cursor-pointer"
        >
          <FontAwesomeIcon icon={faDownload} />
          <span>Download Brochure</span>
        </a>
      </div>
    </div>
  );
};

export default memo(CompBrochure);


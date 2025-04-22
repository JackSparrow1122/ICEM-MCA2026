import React, { useMemo } from "react";
import {  FaRupeeSign, FaUsers, FaChalkboardTeacher, FaHourglassEnd } from "react-icons/fa";
import { FaRegHourglassHalf } from "react-icons/fa6";

const EntcPointers = () => {
  // Memoize data to avoid recalculation on each render
  const data = useMemo(() => [
    {
      icon: <FaChalkboardTeacher className="text-[#117577]" size={40} />,
      value: "Programme Format",
      description: "Offline",
    },
    {
      icon: <FaRegHourglassHalf className="text-[#117577]" size={40} />,
      value: "Duration",
      description: "4 Years",
    },
    {
      icon: <FaRupeeSign className="text-[#117577]" size={40} />,
      value: "Programme Fees",
      description: "Rs.1,02,868 /-",
    },
    {
      icon: <FaUsers className="text-[#117577]" size={40} />,
      value: "450+",
      description: "Total Recruiters",
    },
  ], []); // Empty dependency array ensures this is only created once

  return (
    <section className="bg-[#f7fcfc] py-4 md:py-12 px-4 md:px-8 lg:px-16 font-sans">
      <div className="w-auto grid md:grid-cols-2 gap-2 items-center overflow-hidden">
        
        {/* Left content */}
        <div className="space-y-4">
          <h2 className="text-2xl text-center md:text-left md:text-[44px] font-bold leading-tight text-gray-900">
            ICEM: The Gateway to
            <br />
            <span className="text-[#36A5B9]">Exceptional Careers</span>
          </h2>
          <p className="text-lg text-center md:text-left md:text-xl text-gray-700 font-medium mb-2">
            Your Pathway to Success and World-Class Opportunities
          </p>
        </div>

        {/* Right side: icon cards */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="grid grid-cols-2 gap-8 w-full">
            {data.map((item, index) => (
              <div key={index} className="flex space-x-6 md:space-x-4">
                <div className="mb-2 md:mb-0">{item.icon}</div>
                <div>
                  <div className="text-lg md:text-xl font-bold text-gray-800">{item.value}</div>
                  <div className="text-sm text-gray-600 font-medium">{item.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default EntcPointers;

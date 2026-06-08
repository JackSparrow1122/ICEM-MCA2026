import React from "react";
// Import React Icons
import { FaChalkboardTeacher, FaHourglassHalf, FaRupeeSign, FaUsers } from 'react-icons/fa';

const data = [
  {
    icon: <FaChalkboardTeacher className="text-[#259CA8] text-4xl" />, // Notepad icon for Program Format
    value: "Programme Format",
    description: "Offline",
  },
  {
    icon: <FaHourglassHalf className="text-[#259CA8] text-4xl" />, // Calendar icon for Duration
    value: "Duration",
    description: "4 Years",
  },
  {
    icon: <FaRupeeSign className="text-[#259CA8] text-4xl" />, // Money icon for Fees
    value: "Programme Fees",
    description: "Rs.1,02,868 /-",
  },
  {
    icon: <FaUsers className="text-[#259CA8] text-4xl" />, // Users icon for Recruiters
    value: "450+",
    description: "Total Recruiters",
  },
];

export default function CompPointers() {
  return (
    <section className="bg-[#f2f7fc] py-4 md:py-12 px-4 md:px-8 lg:px-16 font-sans">
      <div className="w-auto grid md:grid-cols-2 gap-2 items-center overflow-hidden">
        
        {/* Left content */}
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl text-center md:text-left md:text-[44px] font-bold leading-tight text-gray-900">
            ICEM: The Gateway to
            <br />
            <span className="text-[#259CA8]">Exceptional Careers</span>
          </h2>
          <p className="text-lg text-center md:text-left md:text-xl text-gray-700 font-medium mb-2">
            Your Pathway to Success and World-Class Opportunities
          </p>
        </div>

        {/* Right side: icons + badge */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          
          {/* Grid of icons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
            {data.map((item, index) => (
              <div
                key={index}
                className="flex items-center space-x-4 p-5 bg-white border border-gray-100/80 rounded-2xl shadow-sm hover:shadow-md hover:border-[#259CA8]/30 transition-all duration-300 group"
              >
                <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-[#259CA8]/10 text-[#259CA8] transition-colors duration-300 group-hover:bg-[#259CA8] group-hover:text-white">
                  {React.cloneElement(item.icon, { className: "w-6 h-6 text-current" })}
                </div>
                <div>
                  <div className="text-base font-bold text-gray-800 tracking-tight transition-colors duration-300 group-hover:text-[#259CA8]">
                    {item.value}
                  </div>
                  <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mt-0.5">
                    {item.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

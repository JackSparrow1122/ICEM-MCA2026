import React from "react";
// Import React Icons
import { FaClock, FaBriefcase, FaGraduationCap, FaClipboardList } from 'react-icons/fa';

const data = [
  {
    icon: <FaClock className="text-[#003c84] text-4xl" />, // Clock icon for Duration
    value: "Course Duration",
    description: "A comprehensive 2-year programme divided into four semesters, including a final semester industry project.",
  },
  {
    icon: <FaBriefcase className="text-[#003c84] text-4xl" />, // Briefcase icon for Internship
    value: "Internship Opportunity ",
    description: "Students undertake a significant live project or internship with leading IT firms, gaining crucial industry experience. ",
  },
  {
    icon: <FaGraduationCap className="text-[#003c84] text-4xl" />, // Graduation cap icon for Placements
    value: "Campus Recruitment ",
    description: " Excellent placement opportunities with top IT product companies, MNCs, and IT consulting firms seeking skilled software professionals. ",
  },
  {
    icon: <FaClipboardList className="text-[#003c84] text-4xl" />, // Clipboard icon for Eligibility
    value: "Eligibility",
    description: "Graduation in any discipline with a minimum of 50%, Mathematics at 10+2 or graduation level, and a valid MAH-MCA-CET score. "
  },
];

export default function CompPointers() {
  return (
    <section className="bg-[#F7F3EF] py-2 md:py-4 px-4 md:px-8 lg:px-16 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Grid of icons in one row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {data.map((item, index) => (
            <div
              key={index}
              className="flex items-start space-x-4 p-5 bg-white border border-gray-100/80 rounded-2xl shadow-sm hover:shadow-md hover:border-[#003c84]/30 transition-all duration-300 group"
            >
              <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-[#003c84]/10 text-[#003c84] transition-colors duration-300 group-hover:bg-[#003c84] group-hover:text-white mt-1">
                {React.cloneElement(item.icon, { className: "w-6 h-6 text-current" })}
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-base font-bold text-gray-800 tracking-tight transition-colors duration-300 group-hover:text-[#003c84]">
                  {item.value}
                </div>
                <div className="text-sm text-gray-500 mt-0.5 font-medium leading-relaxed break-words">
                  {item.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

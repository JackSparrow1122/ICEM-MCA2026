import React, { useMemo } from "react";
import {
  FaMicrochip,
  FaFlask,
  FaTools,
  FaChalkboardTeacher,
  FaBriefcase,
  FaGlobe,
  FaCode,
  FaUniversity,
} from "react-icons/fa";

const EntcReasons = () => {
  // Memoize the reasons array to avoid recalculating on each render
  const reasons = useMemo(() => [
    {
      icon: <FaMicrochip size={50} />,
      title: "Industry-Integrated Curriculum",
      desc: "Learn AI, IoT, and modern telecom technologies!!",
    },
    {
      icon: <FaFlask size={50} />,
      title: "State-of-the-Art Labs",
      desc: "Hands-on training with Apple labs and IT labs.",
    },
    {
      icon: <FaTools size={50} />,
      title: "Live Projects & Internships",
      desc: "Gain practical exposure in leading industries.",
    },
    {
      icon: <FaChalkboardTeacher size={50} />,
      title: "Expert Faculty & Mentors",
      desc: "Learn from top professionals in the industry!",
    },
    {
      icon: <FaBriefcase size={50} />,
      title: "Top-Notch Placements",
      desc: "Land jobs in telecom, AI, embedded systems, and more!!",
    },
    {
      icon: <FaGlobe size={50} />,
      title: "Global Career Prospects",
      desc: "Opportunities in leading MNCs worldwide!",
    },
    {
      icon: <FaCode size={50} />,
      title: "Exciting Events & Hackathons",
      desc: "Compete, innovate, and network with industry leaders!",
    },
    {
      icon: <FaUniversity size={50} />,
      title: "Vibrant Campus Life & Sports",
      desc: "A perfect mix of academics and extracurriculars!!",
    },
  ], []);

  return (
    <div className="relative py-8 bg-[#F6FBFF]">
      <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold text-center mb-6 z-10 relative">
        Why Choose <span className="text-[#36A5B9]">ICEM</span> for Your <span className="text-[#36A5B9]">ENTC</span> Journey?
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 z-10 relative px-6 md:px-10 lg:px-16">
        {reasons.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-md p-6 flex flex-col items-center text-center rounded-lg hover:shadow-xl hover:border-2 hover:scale-105 hover:border-[#36A5B9] transition-all"
          >
            <div className="text-[#36A5B9] mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold text-[#001E5D]">{item.title}</h3>
            <p className="text-sm md:text-base text-gray-700">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EntcReasons;

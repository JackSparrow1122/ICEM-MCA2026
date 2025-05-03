import React from "react";
import {
  FaBullseye,
  FaTrophy,
  FaSatelliteDish,
  FaFire,
  FaGraduationCap,
} from "react-icons/fa";

const features = [
  {
    title: "100% Placement Assistance",
    description: "Secure your career with top recruiters!",
    icon: <FaBullseye className="text-[#259CA8] w-10 h-10 mx-auto" />,
  },
  {
    title: "State-of-the-Art Infrastructure",
    description: "Apple Labs, research centers, and cutting-edge tech!",
    icon: <FaTrophy className="text-[#259CA8] w-10 h-10 mx-auto" />,
  },
  {
    title: "Industry-Tied Programs",
    description: "Get hands-on experience with live projects!",
    icon: <FaSatelliteDish className="text-[#259CA8] w-10 h-10 mx-auto" />,
  },
  {
    title: "Vibrant Campus Life",
    description: "Hackathons, Tech Fests, and Sports!",
    icon: <FaFire className="text-[#259CA8] w-10 h-10 mx-auto" />,
  },
  {
    title: "Holistic Learning",
    description: "A mix of technical, soft skills, and leadership training!",
    icon: <FaGraduationCap className="text-[#259CA8] w-10 h-10 mx-auto" />,
  },
];

export default function WhyChooseICEM() {
  return (
    <section className="bg-white py-2 rounded-t-[100px] px-4  md:px-16 mt-8">
      <div className="text-center mb-10 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-[#135783] mb-4">
          Why Choose <span className="text-[#259CA8]">ICEM</span> for Your <span className="text-[#259CA8]">Engineering</span> Journey?
        </h2>
        <p className="max-w-3xl mx-auto text-gray-700 text-lg">
          At Indira College of Engineering and Management (ICEM), we empower
          innovators, problem solvers, and leaders! With world-class faculty,
          industry-aligned curriculum, and top-notch placements, ICEM is the
          place where your engineering dreams take flight.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 px-6">
  {features.map((feature, index) => (
    <div key={index} className="text-left relative">
      <div className="mb-3">
        {React.cloneElement(feature.icon, { className: "text-[#259CA8] w-10 h-10" })}
      </div>
      <h3 className="font-semibold text-lg text-[#135783] mb-2">
        {feature.title}
      </h3>
      <p className="text-sm text-gray-600">{feature.description}</p>
      {index < features.length - 1 && (
        <div className="hidden md:block absolute right-0 top-0 h-full border-r-4 border-gray-300 border-dotted"></div>


      )}
    </div>
  ))}
</div>

    </section>
  );
}

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
    title: "Guaranteed Placement Assistance",
    description: "Secure your career with top recruiters!",
    Icon: FaBullseye,
  },
  {
    title: "State-of-the-Art Infrastructure",
    description: "Apple Labs, research centers, and cutting-edge tech!",
    Icon: FaTrophy,
  },
  {
    title: "Industry-Tied Programs",
    description: "Get hands-on experience with live projects!",
    Icon: FaSatelliteDish,
  },
  {
    title: "Vibrant Campus Life",
    description: "Hackathons, Tech Fests, and Sports!",
    Icon: FaFire,
  },
  {
    title: "Holistic Learning",
    description: "A mix of technical, soft skills, and leadership training!",
    Icon: FaGraduationCap,
  },
];

export default function WhyChooseICEM() {
  return (
    <section className="bg-white py-4 px-4 md:px-16 ">
      {/* Heading Section */}
      <div className="text-center mb-12 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-[#135783] mb-4">
          Why Choose <span className="text-[#259CA8]">ICEM</span> for Your{" "}
          <span className="text-[#259CA8]">Engineering</span> Journey?
        </h2>
        <p className="max-w-3xl mx-auto text-gray-700 text-lg">
          At Indira College of Engineering and Management (ICEM), an Autonomous
          institute, we empower innovators, problem solvers, and leaders! With
          world-class faculty, industry-aligned curriculum, and top-notch
          placements, ICEM is where your engineering dreams take flight.
        </p>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 md:gap-8 gap-4 px-6">
        {features.map(({ title, description, Icon }, index) => (
          <div
            key={index}
            className="flex flex-col items-start text-left relative group"
          >
            <Icon className="text-[#259CA8] w-10 h-10 mb-3 transition-transform duration-300 group-hover:scale-110" />
            <h3 className="font-semibold text-lg text-[#135783] mb-2">{title}</h3>
            <p className="text-sm text-gray-600">{description}</p>

            {/* Vertical Dotted Line (Desktop Only) */}
            {index < features.length - 1 && (
              <div className="hidden lg:block absolute top-0 right-[-20px] h-full border-r-2 border-dotted border-gray-300"></div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

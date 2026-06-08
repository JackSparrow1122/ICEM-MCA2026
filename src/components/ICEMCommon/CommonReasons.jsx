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
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 px-6">
        {features.map(({ title, description, Icon }, index) => (
          <div
            key={index}
            className="flex flex-col items-start text-left p-6 bg-[#f7fcfe] border border-[#e1f1f5] rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#259CA8]/5 hover:bg-white hover:border-[#259CA8]/30 group"
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[#259CA8]/10 text-[#259CA8] mb-4 transition-all duration-300 group-hover:bg-[#259CA8] group-hover:text-white">
              <Icon className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg text-[#135783] mb-2 transition-colors duration-300 group-hover:text-[#259CA8]">
              {title}
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

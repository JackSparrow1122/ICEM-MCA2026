import React from "react";
import {
  FaAward,
  FaBullseye,
  FaSatelliteDish,
  FaChalkboardTeacher,
  FaTrophy,
  FaBuilding,
  FaFire,
  FaGraduationCap,
} from "react-icons/fa";

const features = [
  {
    title: "2 Decades of Academic Excellence",
    description: "Two decades of academic excellence in management and engineering education.",
    Icon: FaAward,
  },
  {
    title: "Guaranteed Placement Assistance",
    description: "Backed by a network of 350+ recruiters across management, IT, finance, and consulting domains.",
    Icon: FaBullseye,
  },
  {
    title: "Industry-Tied, Hands-On Training",
    description: "Practical exposure through industry visits, Summer Internship Programmes (SIP), and live projects.",
    Icon: FaSatelliteDish,
  },
  {
    title: "Expert Mentorship",
    description: "Guidance from experienced academicians and corporate professionals across Marketing, Finance, HR, and Operations.",
    Icon: FaChalkboardTeacher,
  },
  {
    title: "Experiential Learning",
    description: "Interactive case studies, seminars, workshops, and business simulation games.",
    Icon: FaTrophy,
  },
  {
    title: "Futuristic Infrastructure",
    description: "Smart classrooms, dedicated seminar halls, and a well-equipped library.",
    Icon: FaBuilding,
  },
  {
    title: "Vibrant Campus Life",
    description: "Management fests, leadership summits, and a full calendar of sporting events.",
    Icon: FaFire,
  },
  {
    title: "Holistic Learning",
    description: "A balanced blend of management education, soft skills training, and leadership development.",
    Icon: FaGraduationCap,
  },
];

export default function WhyChooseICEM() {
  return (
    <section className="bg-[#F7F3EF] py-16 px-4 md:px-16 border-t border-b border-gray-150/60">
      {/* Heading Section */}
      <div className="text-center mb-12 px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
          Why <span className="text-[#278da4]">MCA</span> at <span className="text-[#278da4]">ICEM</span>?
        </h2>
        <p className="max-w-4xl mx-auto text-gray-700 text-base md:text-lg leading-relaxed font-medium">
          Indira College of Engineering & Management (ICEM) stands among the best MCA colleges in India, offering an AICTE-approved, SPPU-affiliated Master of Computer Applications programme designed for the modern technology landscape. World-class faculty, an industry-aligned curriculum, and a strong placement record empower students to become innovators, problem solvers, and future technology leaders.
        </p>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6">
        {features.map(({ title, description, Icon }, index) => (
          <div
            key={index}
            className="flex flex-col items-start text-left p-6 bg-[#FCFAEE] border border-[#e2e8f0] rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#003c84]/5 hover:bg-white hover:border-[#003c84]/30 group"
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[#003c84]/10 text-[#003c84] mb-4 transition-all duration-300 group-hover:bg-[#003c84] group-hover:text-white">
              <Icon className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg text-gray-900 mb-2 transition-colors duration-300 group-hover:text-[#003c84] leading-snug">
              {title}
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed font-medium">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}


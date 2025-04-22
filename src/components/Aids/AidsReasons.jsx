import React, { memo } from "react";
import { FaBrain, FaGlobeAmericas, FaChalkboardTeacher, FaRobot } from "react-icons/fa";
import { MdOutlineAnalytics, MdOutlineSportsSoccer } from "react-icons/md";
import { AiOutlineDatabase } from "react-icons/ai";
import { GiArtificialIntelligence, GiGraduateCap } from "react-icons/gi";
import { BsDiagram3 } from "react-icons/bs";

// Card component is memoized to prevent unnecessary re-renders
const AidsReasonCard = memo(({ icon, title, description }) => (
  <div className="bg-white shadow-md p-6 flex flex-col items-center text-center rounded-lg hover:shadow-xl hover:border-2 hover:scale-105 hover:border-[#117577] transition-shadow">
    <div className="text-[#0c3249] text-6xl mb-4">{icon}</div>
    <h3 className="text-xl font-semibold text-[#117577]">{title}</h3>
    <p className="text-sm md:text-base text-gray-700">{description}</p>
  </div>
));

function AidsReasons() {
  return (
    <div className="relative py-8 bg-[#F6FBFF]">
      <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold text-center mb-6 z-10 relative">
        Why Choose <span className="text-[#117577]">ICEM</span> for Your <span className="text-[#117577]">AIDS</span> Engineering Journey?
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 z-10 relative px-6 md:px-10 lg:px-16">
        {/* AI & Machine Learning */}
        <AidsReasonCard
          icon={<GiArtificialIntelligence />}
          title="AI & Machine Learning"
          description="Train AI models and build self-learning applications!"
        />

        {/* Big Data & Analytics */}
        <AidsReasonCard
          icon={<AiOutlineDatabase />}
          title="Big Data & Analytics"
          description="Decode massive datasets for smarter decision-making!"
        />

        {/* Neural Networks */}
        <AidsReasonCard
          icon={<FaBrain />}
          title="Neural Networks & Deep Learning"
          description="Explore the tech behind self-driving cars & AI assistants!"
        />

        {/* Industry-Aligned Curriculum */}
        <AidsReasonCard
          icon={<BsDiagram3 />}
          title="Industry-Aligned Curriculum"
          description="Hands-on projects, hackathons & real-world applications"
        />

        {/* Global Career Opportunities */}
        <AidsReasonCard
          icon={<FaGlobeAmericas />}
          title="Global Career Opportunities"
          description="Work in AI-driven industries worldwide!"
        />

        {/* Placements */}
        <AidsReasonCard
          icon={<GiGraduateCap />}
          title="Top-Notch Placements"
          description="Secure jobs with core and IT companies!"
        />

        {/* Sports */}
        <AidsReasonCard
          icon={<MdOutlineSportsSoccer />}
          title="Thriving Sports Culture"
          description="Stay active and build teamwork with top-class sports facilities!"
        />

        {/* Guest Lectures */}
        <AidsReasonCard
          icon={<FaChalkboardTeacher />}
          title="Expert Guest Lectures"
          description="Learn from industry leaders and mechanical pioneers!"
        />
      </div>
    </div>
  );
}

export default AidsReasons;

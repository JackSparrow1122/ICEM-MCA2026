import React, { useEffect } from 'react';
import {
  FaCode,
  FaProjectDiagram,
  FaLaptopCode,
} from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const HighlightCard = React.memo(({ icon, title, description }) => (
  <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center text-center h-full hover:border-[#003c84]/30 group">
    <div className="w-16 h-16 rounded-2xl bg-[#003c84]/10 text-[#003c84] flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-[#003c84] group-hover:text-white group-hover:scale-105 shadow-md shadow-[#003c84]/5">
      {React.cloneElement(icon, { className: "w-8 h-8 mb-0 text-current" })}
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-3 transition-colors duration-300 group-hover:text-[#003c84]">{title}</h3>
    <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
  </div>
));

function CommonHighlights() {
  useEffect(() => {
    const debounceAOS = setTimeout(() => {
      AOS.init({ duration: 1000, easing: 'ease-in-out', once: true });
    }, 100);
    return () => clearTimeout(debounceAOS);
  }, []);

  return (
    <section className="px-4 md:px-8 lg:px-16 py-8" data-aos="fade-up">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[#003c84] mb-8">
        Programme Highlights
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        <HighlightCard
          icon={<FaCode />}
          title="Advanced Technical Core"
          description="In-depth software expertise: the curriculum builds advanced competencies in object-oriented design, algorithms, and system software, forming the bedrock for developing complex, high-performance applications."
        />
        <HighlightCard
          icon={<FaProjectDiagram />}
          title="Project-Based Learning"
          description="Real-world development experience: engage in multiple software development projects and a capstone module, simulating real IT environments to build a strong portfolio and practical problem-solving skills."
        />
        <HighlightCard
          icon={<FaLaptopCode />}
          title="Industry-Aligned Curriculum"
          description="Focus on emerging technologies: the programme incorporates cutting-edge topics like cloud computing, data analytics, and mobile application development, ensuring graduates possess skills relevant to current market demands."
        />
      </div>
    </section>
  );
}

export default CommonHighlights;



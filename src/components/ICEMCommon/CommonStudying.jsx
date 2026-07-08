import React, { useEffect } from 'react';
import {
  FaAward,
  FaBullseye,
  FaTools,
  FaChalkboardTeacher,
  FaMicroscope,
  FaBuilding,
  FaFire,
  FaGraduationCap,
} from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const InfoCard = React.memo(({ icon, title, description }) => (
  <div
    className="bg-white p-6 border border-gray-100 shadow-md shadow-gray-200/30 flex items-start gap-5 rounded-2xl hover:shadow-lg hover:border-[#003c84]/30 transition-all duration-300 hover:-translate-y-0.5 group"
    data-aos="zoom-in"
  >
    <div className="flex-shrink-0 text-[#003c84] transition-transform duration-300 group-hover:scale-110 mt-1">
      {React.cloneElement(icon, { className: "w-12 h-12 text-current mr-0" })}
    </div>
    <div className="flex flex-col text-left">
      <h3 className="text-base font-bold text-gray-800 tracking-tight transition-colors duration-300 group-hover:text-[#003c84]">
        {title}
      </h3>
      <p className="text-sm text-gray-500 mt-1.5 font-medium leading-relaxed">
        {description}
      </p>
    </div>
  </div>
));

function MBAStudying() {
  useEffect(() => {
    const debounceAOS = setTimeout(() => {
      AOS.init({ duration: 1000, easing: 'ease-in-out', once: true });
    }, 100);
    return () => clearTimeout(debounceAOS);
  }, []);

  const cards = [
    {
      icon: <FaAward />,
      title: '2 Decades of Academic Excellence',
      description: 'Two decades of academic excellence in management and engineering education.',
    },
    {
      icon: <FaBullseye />,
      title: 'Guaranteed Placement Assistance',
      description: 'Backed by a network of 350+ recruiters across management, IT, finance, and consulting domains.',
    },
    {
      icon: <FaTools />,
      title: 'Industry-Tied, Hands-On Training',
      description: 'Practical exposure through industry visits, Summer Internship Programmes (SIP), and live projects.',
    },
    {
      icon: <FaChalkboardTeacher />,
      title: 'Expert Mentorship',
      description: 'Guidance from experienced academicians and corporate professionals across Marketing, Finance, HR, and Operations.',
    },
    {
      icon: <FaMicroscope />,
      title: 'Experiential Learning',
      description: 'Interactive case studies, seminars, workshops, and business simulation games.',
    },
    {
      icon: <FaBuilding />,
      title: 'Futuristic Infrastructure',
      description: 'Smart classrooms, dedicated seminar halls, and a well-equipped library.',
    },
    {
      icon: <FaFire />,
      title: 'Vibrant Campus Life',
      description: 'Management fests, leadership summits, and a full calendar of sporting events.',
    },
    {
      icon: <FaGraduationCap />,
      title: 'Holistic Learning',
      description: 'A balanced blend of management education, soft skills training, and leadership development.',
    },
  ];

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 md:px-16 py-12 poppins-regular overflow-hidden flex flex-col gap-8">
        <div className="w-full space-y-4" data-aos="fade-up">
          {/* MCA Excellence Badge */}
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#003c84]">
            <span className="w-8 h-0.5 bg-[#278da4]"></span>
            Why MCA at ICEM?
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
            Why <span className="text-[#278da4]">MCA</span> at <span className="text-[#003c84]">ICEM</span>?
          </h2>

          <p className="text-sm md:text-base text-gray-600 leading-relaxed max-w-5xl">
            Our MCA programme is structured to transform students into proficient software architects and developers. It emphasizes a strong theoretical foundation coupled with hands-on learning using industry-standard tools and methodologies.          </p>
        </div>

        {/* 8-Card Grid below the text */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-4">
          {cards.map((card, index) => (
            <InfoCard
              key={index}
              icon={card.icon}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default MBAStudying;


import React, { useEffect } from 'react';
import {
  FaLaptopCode,
  FaUniversity,
  FaTools,
  FaBuilding,
  FaChalkboardTeacher,
  FaMicroscope,
  FaRocket,
  FaChartLine,
  FaGraduationCap,
} from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import MyImage from '../../assets/images/studying.avif';

const InfoCard = React.memo(({ icon, text }) => (
  <div
    className="bg-[#fcfdfe] p-5 border border-gray-100 shadow-md shadow-[#259CA8]/5 flex items-start gap-4 rounded-2xl hover:shadow-lg hover:border-[#259CA8]/30 transition-all duration-300 hover:-translate-y-0.5 group"
    data-aos="zoom-in"
  >
    <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-[#259CA8]/10 text-[#259CA8] transition-colors duration-300 group-hover:bg-[#259CA8] group-hover:text-white">
      {React.cloneElement(icon, { className: "w-6 h-6 mr-0 text-current" })}
    </div>
    <span className="text-sm sm:text-base text-left text-gray-700 font-medium leading-relaxed self-center">
      {text}
    </span>
  </div>
));

const HighlightCard = React.memo(({ icon, title, description }) => (
  <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center text-center h-full hover:border-[#259CA8]/30 group">
    <div className="w-16 h-16 rounded-2xl bg-[#259CA8]/10 text-[#259CA8] flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-[#259CA8] group-hover:text-white group-hover:scale-105 shadow-md shadow-[#259CA8]/5">
      {React.cloneElement(icon, { className: "w-8 h-8 mb-0 text-current" })}
    </div>
    <h3 className="text-xl font-bold text-[#135783] mb-3 transition-colors duration-300 group-hover:text-[#259CA8]">{title}</h3>
    <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
  </div>
));

function ComputerEngineering() {
  useEffect(() => {
    const debounceAOS = setTimeout(() => {
      AOS.init({ duration: 1000, easing: 'ease-in-out', once: true });
    }, 100);
    return () => clearTimeout(debounceAOS);
  }, []);

  const cards = [
    {
      icon: <FaUniversity className="text-[#259CA8] mr-4 text-5xl" />,
      text: '2 Decades of Academic Excellence in Engineering Education',
    },
    {
      icon: <FaTools className="text-[#259CA8] mr-4 text-5xl" />,
      text: 'Hands-on Training through Industry Visits, Internships & Live Projects',
    },
    {
      icon: <FaBuilding className="text-[#259CA8] mr-4 text-5xl" />,
      text: '450+ Leading Recruiters across IT, Core, and Emerging Tech Domains',
    },
    {
      icon: <FaChalkboardTeacher className="text-[#259CA8] mr-4 text-5xl" />,
      text: 'Mentorship from Industry Experts across Mechanical, IT, AI, and Electronics',
    },
    {
      icon: <FaMicroscope className="text-[#259CA8] mr-4 text-5xl" />,
      text: 'Advanced Labs for CAD, AI-ML, Networking, Robotics & Cloud Computing',
    },
    {
      icon: <FaRocket className="text-[#259CA8] mr-4 text-5xl" />,
      text: 'State-of-the-Art Infrastructure with Advanced Labs & Apple Labs, Sports Facilities & Vibrant Campus Life',
    },
  ];

  return (
    <>
      <div className="flex flex-col lg:flex-row px-4 md:px-8 lg:px-16 py-8 gap-10 poppins-regular overflow-hidden">
        <div className="w-full lg:w-3/5" data-aos="fade-right">
          <h1 className="text-3xl md:text-5xl font-semibold mb-4">
            Your Gateway to the Best Engineering College in Pune!
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold text-[#259CA8] mb-4">
            Build, Innovate & Excel with ICEM Engineering!
          </h2>
          <p className="text-md md:text-lg mb-4" data-aos="fade-up">
            Indira College of Engineering & Management (ICEM) is one of the top engineering colleges in Pune, offering AICTE-approved B.E. programmes in Computer, IT, Mechanical, ENTC, and AI & Data Science. With 450+ recruiters, industry-aligned curriculum, and a campus equipped with Apple Labs, smart classrooms, R&D zones, and sports facilities—ICEM ensures holistic development. Students gain hands-on training, expert mentorship, and real-time exposure through industrial visits, internships, and placement support.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-6">
            {cards.map((card, index) => (
              <InfoCard key={index} icon={card.icon} text={card.text} />
            ))}
          </div>
        </div>
        <div className="w-full lg:w-2/5 flex justify-center items-center md:mb-0" data-aos="fade-left">
          <div className="w-full h-full max-h-[700px]">
            <img
              src={MyImage}
              alt="Indira College"
              className="w-full h-full object-container"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      <section className="px-4 md:px-8 lg:px-16 py-2" data-aos="fade-up">
        <h2 className="text-3xl md:text-5xl font-semibold text-center text-[#259CA8] mb-6 md:mb-8">
          ICEM Highlights
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-8">
          <HighlightCard
            icon={<FaChartLine className="text-[#259CA8] text-5xl mb-4" />}
            title="National Rankings"
            description="Ranked 49th in Top 100 Private Engineering Institutes and 61st in Top 140 Engineering Institutes by Times of India Engineering Colleges."
          />
          <HighlightCard
            icon={<FaLaptopCode className="text-[#259CA8] text-5xl mb-4" />}
            title="Smart India Hackathon"
            description="Winners of Smart India Hackathon for 3 consecutive years organized by Ministry of HRD, AICTE & NASSCOM."
          />
          <HighlightCard
            icon={<FaGraduationCap className="text-[#259CA8] text-5xl mb-4" />}
            title="National Education Award"
            description="Received Outstanding Education Institute (West) Award by National Education Awards 2018."
          />
        </div>
      </section>
    </>
  );
}

export default ComputerEngineering;

import React, { useEffect } from 'react';
import {
  FaLaptopCode,
  FaUserTie,
  FaBrain,
  FaMicrophoneAlt,
  FaApple,
  FaRocket,
  FaChartLine,
  FaGraduationCap,
} from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import MyImage from '../../assets/images/studying.avif';

// Memoizing InfoCard and HighlightCard components to avoid unnecessary re-renders
const InfoCard = React.memo(({ icon, text }) => (
  <div
    className="bg-white p-4 shadow-lg shadow-[#134C93]/30 flex items-start rounded-lg"
    data-aos="zoom-in"
  >
    <div className="flex items-center">
      {icon}
      <span className="text-sm md:text-base text-left">{text}</span>
    </div>
  </div>
));

const HighlightCard = React.memo(({ icon, title, description }) => (
  <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6 hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center h-full border-1 hover:border-[#134C93]">
    {icon}
    <h3 className="text-lg font-bold text-[#134C93] mb-2">{title}</h3>
    <p className="text-gray-700 text-base">{description}</p>
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
    { icon: <FaLaptopCode className="text-[#134C93] mr-4 text-4xl" />, text: '2 Decades of Computer Engineering Excellence' },
    { icon: <FaUserTie className="text-[#134C93] mr-4 text-4xl" />, text: '450+ Leading Recruiters Hiring Software & Tech Talent' },
    { icon: <FaBrain className="text-[#134C93] mr-4 text-4xl" />, text: 'Innovative R&D in AI, ML, Cloud & Full Stack Development' },
    { icon: <FaMicrophoneAlt className="text-[#134C93] mr-4 text-4xl" />, text: 'Industry Exposure via Guest Lectures & Expert Mentorship' },
    { icon: <FaApple className="text-[#134C93] mr-4 text-4xl" />, text: 'Advanced Computing Labs & Apple-Powered Classrooms' },
    { icon: <FaRocket className="text-[#134C93] mr-4 text-4xl" />, text: 'Exceptional Career Growth in the Tech Industry' },
  ];

  return (
    <>
      {/* Main Section */}
      <div className="flex flex-col lg:flex-row px-4 md:px-8 lg:px-16 py-8 gap-10 poppins-regular overflow-hidden">
        {/* Left Side */}
        <div className="w-full lg:w-3/5" data-aos="fade-right">
          <h1 className="text-3xl md:text-4xl font-semibold mb-4">Grow, Connect & Lead with ICEM!!</h1>
          <h2 className="text-xl md:text-2xl font-semibold text-[#134C93] mb-4">Computer Engineering</h2>
          <p className="text-md md:text-lg mb-4" data-aos="fade-up">
            Indira College of Engineering & Management offers a comprehensive Computer Engineering programme that blends theoretical knowledge with hands-on experience. Nestled within a vast, vibrant, and lush green campus, the institute provides an inspiring learning environment. The state-of-the-art infrastructure creates the perfect setting for students to thrive academically and personally. Our students gain exposure to advanced technologies, industrial practices, and expert mentoring, preparing them for a successful career in the engineering field.
          </p>

          {/* Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-6">
            {cards.map((card, index) => (
              <InfoCard key={index} icon={card.icon} text={card.text} />
            ))}
          </div>
        </div>

        {/* Right Side */}
        <div className="w-full lg:w-2/5 flex justify-center items-center md:mb-0" data-aos="fade-left">
          <div className="w-full h-full max-h-[600px]">
            <img
              src={MyImage}
              alt="Indira College"
              className="w-full h-full object-cover object-bottom"
              loading="lazy" // Lazy load image
            />
          </div>
        </div>
      </div>

      {/* Highlights Section */}
      <section className="px-4 md:px-8 lg:px-16 py-6" data-aos="fade-up">
        <h2 className="text-3xl md:text-4xl font-semibold text-center text-[#134C93] mb-6 md:mb-8">
          ICEM Highlights
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {/* Highlight 1 */}
          <HighlightCard
            icon={<FaChartLine className="text-[#134C93] text-5xl mb-4" />}
            title="National Rankings"
            description="Ranked 49th in Top 100 Private Engineering Institutes and 61st in Top 140 Engineering Institutes by Times of India Engineering Colleges."
          />

          {/* Highlight 2 */}
          <HighlightCard
            icon={<FaLaptopCode className="text-[#134C93] text-5xl mb-4" />}
            title="Smart India Hackathon"
            description="Winners of Smart India Hackathon for 3 consecutive years organized by Ministry of HRD, AICTE & NASSCOM."
          />

          {/* Highlight 3 */}
          <HighlightCard
            icon={<FaGraduationCap className="text-[#134C93] text-5xl mb-4" />}
            title="National Education Award"
            description="Received Outstanding Education Institute (West) Award by National Education Awards 2018."
          />
        </div>
      </section>
    </>
  );
}

export default ComputerEngineering;

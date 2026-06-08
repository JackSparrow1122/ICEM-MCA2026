import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import img from '../../assets/images/sp3.avif';
import mech from '../../assets/images/mech.avif';
import entc from '../../assets/images/entc.avif';
import it from '../../assets/images/it.avif';
import comp from '../../assets/images/comp.avif';
import ai from '../../assets/images/aids.avif';

const CompOffringICEM = () => {
  useEffect(() => {
    AOS.init({ duration: 500, once: true }); // animation speed updated
  }, []);

  const specializations = [
    {
      icon: <img src={mech} alt="Mechanical" className="h-25 w-25" />,
      title: 'Mechanical Engineering',
      description: 'Design, innovate, and engineer the future!',
      bg: 'bg-gradient-to-b from-[#FAB701] to-[white]',
      image: img,
    },
    {
      icon: <img src={entc} alt="ENTC" className="h-25 w-25" />,
      title: 'Electronics & Telecommunication',
      description: 'Dive into AI, ML, and Big Data!',
      bg: 'bg-gradient-to-b from-[#007595] to-[white]',
      image: img,
    },
    {
      icon: <img src={it} alt="IT" className="h-25 w-25" />,
      title: 'Information Technology',
      description: 'Master cybersecurity, networking, and web development!',
      bg: 'bg-gradient-to-b from-[#A540FF] to-[white]',
      image: img,
    },
    {
      icon: <img src={comp} alt="Computer" className="h-25 w-25" />,
      title: 'Computer Engineering',
      description: 'Build software, apps, and futuristic tech!',
      bg: 'bg-gradient-to-b from-[#155DFC] to-[white]',
      image: img,
    },
    {
      icon: <img src={ai} alt="AI" className="h-25 w-25" />,
      title: 'AI & Data Science',
      description: 'Explore IoT, robotics, and wireless tech!',
      bg: 'bg-gradient-to-b from-[#41B9D0] to-[white]',
      image: img,
    },
  ];

  return (
    <div className="relative px-4 md:px-8 lg:px-16 py-4 bg-white overflow-hidden">
      <h2
        className="text-3xl md:text-4xl font-bold text-center mb-4 text-[#135783]"
        data-aos="fade-up"
      >
        Engineering Specializations Offered at ICEM
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-6 max-w-7xl mx-auto px-2">
        {specializations.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group flex flex-col h-full"
            data-aos="fade-up"
          >
            <div className="h-44 flex items-center justify-center relative overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url(${item.image})` }}
              ></div>
              <div className={`absolute inset-0 ${item.bg} opacity-75 mix-blend-multiply`} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="relative z-10 p-2 bg-white/15 backdrop-blur-md rounded-2xl border border-white/20 transition-all duration-300 group-hover:scale-110 group-hover:bg-white/25">
                {item.icon}
              </div>
            </div>
            <div className="p-5 flex-grow flex flex-col justify-between text-start">
              <div>
                <h3 className="text-lg font-bold text-[#135783] mb-2 transition-colors duration-300 group-hover:text-[#259CA8]">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
              </div>
              <div className="pt-4 text-xs font-semibold text-[#259CA8] flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-all duration-300">
                Explore Program <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompOffringICEM;

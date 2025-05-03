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
      bg: 'bg-gradient-to-b from-[#FAB701] to-[##259CA8]',
      image: img,
    },
    {
      icon: <img src={entc} alt="ENTC" className="h-25 w-25" />,
      title: 'Electronics & Telecommunication',
      description: 'Dive into AI, ML, and Big Data!',
      bg: 'bg-gradient-to-b from-[#007595] to-[##259CA8]',
      image: img,
    },
    {
      icon: <img src={it} alt="IT" className="h-25 w-25" />,
      title: 'Information Technology',
      description: 'Master cybersecurity, networking, and web development!',
      bg: 'bg-gradient-to-b from-[#A540FF] to-[##259CA8]',
      image: img,
    },
    {
      icon: <img src={comp} alt="Computer" className="h-25 w-25" />,
      title: 'Computer Engineering',
      description: 'Build software, apps, and futuristic tech!',
      bg: 'bg-gradient-to-b from-[#155DFC] to-[##259CA8]',
      image: img,
    },
    {
      icon: <img src={ai} alt="AI" className="h-25 w-25" />,
      title: 'AI & Data Science',
      description: 'Explore IoT, robotics, and wireless tech!',
      bg: 'bg-gradient-to-b from-[#41B9D0] to-[##259CA8]',
      image: img,
    },
   
  ];

  return (
    <div className="relative px-4 md:px-8 lg:px-16 py-12 bg-white overflow-hidden">
      <h2
        className="text-3xl md:text-4xl font-bold text-center mb-4 text-[#135783]"
        data-aos="fade-up"
      >
        Engineering Specializations Offered at ICEM
      </h2>
     

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4">
        {specializations.map((item, index) => (
          <div
            key={index}
            className="shadow-xl rounded-lg overflow-hidden border border-gray-200"
            data-aos="fade-up"
          >
            <div className="h-40 flex items-center justify-center relative">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${item.image})` }}
              ></div>
              <div className={`absolute inset-0 ${item.bg} opacity-60`} />
              <div className="relative z-10">{item.icon}</div>
            </div>
            <div className="bg-white p-4 text-start">
              <h3 className="text-lg md:text-lg font-bold text-[#135783] mb-2">
                {item.title}
              </h3>
              <p className="text-sm md:text-sm text-gray-600">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompOffringICEM;

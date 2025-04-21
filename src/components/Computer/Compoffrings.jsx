import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import offer1Image from '../../assets/images/Com-Images/proLang.avif';
import offer2Image from '../../assets/images/Com-Images/AI.avif';
import offer3Image from '../../assets/images/Com-Images/algorithem.avif';
import offer4Image from '../../assets/images/Com-Images/AppDev.avif';
import offer5Image from '../../assets/images/Com-Images/cloudComp.avif';
import offer6Image from '../../assets/images/Com-Images/Blockchain.avif';
import backgroundImage from '../../assets/images/Com-Images/broimage.avif';

const CompOffringICEM = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const offerings = [
    {
      image: offer1Image,
      title: 'Programming Languages (Python, Java, C++)',
      description: 'Write efficient, scalable code!',
    },
    {
      image: offer2Image,
      title: 'Artificial Intelligence & Machine Learning',
      description: 'Train AI models for automation!',
    },
    {
      image: offer3Image,
      title: 'Data Structures & Algorithms',
      description: 'Build optimized software solutions!',
    },
    {
      image: offer4Image,
      title: 'Fullstack, Web & Mobile App Development',
      description: 'Design user-friendly applications!',
    },
    {
      image: offer5Image,
      title: 'Cloud Computing & DevOps',
      description: 'Work with AWS, Docker & Kubernetes!',
    },
    {
      image: offer6Image,
      title: 'Blockchain & Cybersecurity',
      description: 'Secure systems & prevent cyber threats!',
    },
  ];

  return (
    <div className="relative px-4 md:px-8 lg:px-16 py-6 md:py-8 bg-white poppins-regular overflow-hidden">
      <div 
        className="absolute inset-0 bg-contain bg-center opacity-40" 
        style={{ backgroundImage: `url(${backgroundImage})` }} 
      ></div>

      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-[#134C93]" data-aos="fade-up">
        Computer Engineering Offerings
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-y-8 gap-x-4 md:gap-x-8 lg:gap-x-10 relative z-10">
        {offerings.map((offer, index) => (
          <div
            key={index}
            className="bg-[linear-gradient(#161e3a,_#2241ac_51%,_#3473cd)] shadow-xl flex flex-col items-center justify-start text-center h-full"
            data-aos="fade-up"
          >
            <img
              src={offer.image}
              alt={offer.title}
              className="w-full h-48 object-cover mb-4"
            />
            <div className="text-center px-4 p-2">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{offer.title}</h3>
              <p className="text-base text-white">{offer.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompOffringICEM;

import { useEffect, memo } from 'react';
import AOS from 'aos';  // Import AOS
import 'aos/dist/aos.css';  // Import AOS CSS
import offer1Image from '../../assets/images/AIDS-Imagegs/off1.avif';
import offer2Image from '../../assets/images/AIDS-Imagegs/off2.avif';
import offer3Image from '../../assets/images/AIDS-Imagegs/off3.avif';
import offer4Image from '../../assets/images/AIDS-Imagegs/off4.avif';
import offer5Image from '../../assets/images/AIDS-Imagegs/off5.avif';
import offer6Image from '../../assets/images/AIDS-Imagegs/off6.avif';

function AidsOfferings() {
  useEffect(() => {
    // Delay AOS init until after initial paint for smoother experience
    requestAnimationFrame(() => {
      AOS.init({ duration: 100, once: true });
    });
  }, []);

  return (
    <div className="px-8 md:px-16 py-6 md:py-8 poppins-regular mt-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-[#117577]" data-aos="fade-up">
        AI-DS Engineering Offerings
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-2 md:gap-x-10 justify-center">
        {[ 
          {
            img: offer1Image,
            alt: 'AI Research',
            title: 'Machine Learning & Deep Learning',
            desc: 'Training models to learn patterns and make intelligent decisions.'
          },
          {
            img: offer2Image,
            alt: 'Data Science',
            title: 'Data Science & Analytics',
            desc: 'Extracting insights from data for informed decision-making.'
          },
          {
            img: offer3Image,
            alt: 'Machine Learning',
            title: 'Natural Language Processing (NLP)',
            desc: 'Enabling machines to understand and process human language.'
          },
          {
            img: offer4Image,
            alt: 'Robotics',
            title: 'Cloud Computing & AI Deployment',
            desc: 'Hosting and scaling AI models on cloud platforms.'
          },
          {
            img: offer5Image,
            alt: 'Software Engineering',
            title: 'Internet of Things (IoT) & Edge AI',
            desc: 'Smart devices processing AI at the edge in real time.'
          },
          {
            img: offer6Image,
            alt: 'Engineering Research',
            title: 'Engineering Research & Innovation',
            desc: 'Optimizing industries with AI-powered automation and insights.'
          }
        ].map((item, index) => (
          <div
            key={index}
            className="bg-[#41b9d0] shadow-xl flex flex-col items-center justify-start text-center h-full relative"
            data-aos="fade-up"
          >
            <img src={item.img} alt={item.alt} className="w-full h-40 md:h-48 object-cover mb-4" />
            <div className="text-center">
              <h3 className="text-lg md:text-xl font-bold text-white mb-2">{item.title}</h3>
              <p className="text-base text-white">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default memo(AidsOfferings);

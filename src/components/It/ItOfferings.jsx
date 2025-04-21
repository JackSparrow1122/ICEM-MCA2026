import { useEffect } from 'react';
import { gsap } from 'gsap';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Images
import offer1Image from '../../assets/images/IT-Images/fullstack (2).avif';
import offer2Image from '../../assets/images/IT-Images/Cloud Services & Virtualization.avif';
import offer3Image from '../../assets/images/IT-Images/cloud.avif';
import offer4Image from '../../assets/images/IT-Images/IT Security & Risk Management.avif';
import offer5Image from '../../assets/images/IT-Images/ai-it.avif';
import offer6Image from '../../assets/images/IT-Images/iot.avif';
import offer7Image from '../../assets/images/IT-Images/erp.avif';
import offer8Image from '../../assets/images/IT-Images/mobai.avif';
import techDots from '../../assets/images/circuit-dots.png';
import technologyImage from '../../assets/images/technology-word.avif';

function ItOfferings() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    const elements = document.querySelectorAll('.circle');
    const icons = document.querySelectorAll('.icon');

    elements.forEach((circle, index) => {
      const icon = icons[index];
      gsap.set(circle, { opacity: 0, x: -50 });
      gsap.set(icon, { rotationY: 180 });

      circle.parentElement.addEventListener('mouseenter', () => {
        gsap.to(circle, { opacity: 1, x: 0, duration: 0.3 });
        gsap.to(icon, { rotationY: 0, duration: 0.3 });
      });

      circle.parentElement.addEventListener('mouseleave', () => {
        gsap.to(circle, { opacity: 0, x: -50, duration: 0.3 });
        gsap.to(icon, { rotationY: 180, duration: 0.3 });
      });
    });
  }, []);

  const techStyle = {
    backgroundImage: `url(${technologyImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: 'transparent',
    fontWeight: 'bold',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
  };

  const offerings = [
    {
      image: offer1Image,
      title: 'Software Engineering & Web Technologies',
      description: 'Master full-stack development and software.',
    },
    {
      image: offer2Image,
      title: 'Data Science & Big Data Analytics',
      description: 'Learn how to handle and analyze massive datasets.',
    },
    {
      image: offer3Image,
      title: 'Cloud Computing & Virtualization',
      description: 'Explore AWS, Azure, and modern cloud platforms.',
    },
    {
      image: offer4Image,
      title: 'Cybersecurity & Ethical Hacking',
      description: 'Protect digital assets and strengthen network security.',
    },
    {
      image: offer5Image,
      title: 'Artificial Intelligence & Machine Learning',
      description: 'Build intelligent systems and automation.',
    },
    {
      image: offer6Image,
      title: 'IoT & Smart Systems',
      description: 'Connect devices and develop smart applications for industries.',
    },
    {
      image: offer7Image,
      title: 'Enterprise Resource Planning (ERP) Systems',
      description: 'Optimize business processes through integrated ERP tools.',
    },
    {
      image: offer8Image,
      title: 'Mobile App Development',
      description: 'Create cutting-edge Android & iOS applications.',
    },
  ];

  return (
    <div className="px-4 md:px-8 lg:px-16 py-6 md:py-8 bg-white relative overflow-hidden">
      {/* Background tech dots */}
      <img
        src={techDots}
        alt="Tech Dots"
        className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1/2 md:w-2/3 lg:w-1/2 opacity-20 pointer-events-none z-0"
      />

      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-[#390161] relative z-10" data-aos="fade-up">
        <span style={techStyle}>Information Technology</span> Offerings
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 lg:gap-6 relative z-10">
        {offerings.map((offer, index) => (
          <div
            key={index}
            className="bg-[#390161] shadow-xl flex flex-col items-center justify-start text-center rounded-lg overflow-hidden h-full"
            data-aos="fade-up"
          >
            <img
              src={offer.image}
              alt={offer.title}
              className="w-full h-48 md:h-56 lg:h-64 object-cover"
              loading="lazy"
            />
            <div className="px-4 py-4">
              <h3 className="text-lg md:text-xl font-bold text-white mb-2">{offer.title}</h3>
              <p className="text-sm md:text-base text-white">{offer.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Note */}
      <h3 className="text-center text-[#390161] font-bold md:text-xl mt-8">
        At ICEM, you build, innovate & lead in the digital era!
      </h3>
    </div>
  );
}

export default ItOfferings;

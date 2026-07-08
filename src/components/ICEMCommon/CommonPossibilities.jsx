import React from 'react';

// Import images from assets - using available images
import iMacLab from '../../assets/Comp.jpg';
import spaceLab from '../../assets/AIDS.webp';
import mechanicalLab from '../../assets/Mech.webp';
import innovationLab from '../../assets/IT.webp';
import swimmingPool from '../../assets/Canteen1.webp';
import gymFacility from '../../assets/Gym4.webp';
import uniMall from '../../assets/health.webp';
import topPlace from '../../assets/centers.jpg';
import homeMobile from '../../assets/ground.jpg';

const Tour = () => {
  const facilities = [
    {
      id: 1,
      title: 'Computer & Language Lab',
      image: iMacLab,
      description: 'Equipped for practical, technology-driven learning.'
    },
    {
      id: 2,
      title: 'Centers of Excellence (COEs)',
      image: topPlace,
      description: 'Dedicated spaces fostering emerging technology and software practice.'
    },
    {
      id: 3,
      title: 'Learning Resource Center',
      image: spaceLab,
      description: 'A digitally enabled library for research and collaborative study.'
    },
    {
      id: 4,
      title: 'Seminar Hall & Auditoriums',
      image: mechanicalLab,
      description: 'Spaces designed for guest lectures, workshops, and corporate interactions.'
    },
    {
      id: 5,
      title: 'Discussion & Brainstorming Rooms',
      image: innovationLab,
      description: 'Dedicated spaces for group projects and collaborative thinking.'
    },
    {
      id: 6,
      title: 'Canteen',
      image: swimmingPool,
      description: 'A well-maintained dining space supporting a balanced campus life.'
    },
    {
      id: 7,
      title: 'Playground',
      image: homeMobile,
      description: 'Outdoor sporting facilities supporting an active student life.'
    },
    {
      id: 8,
      title: 'Gym Facility',
      image: gymFacility,
      description: 'A fully equipped fitness center supporting student wellness.'
    },
    {
      id: 9,
      title: 'Health & Wellness Center',
      image: uniMall,
      description: 'On-campus healthcare support for student wellbeing.'
    },
  ];

  return (
    <section className="relative px-4 md:px-8 lg:px-16 py-12 md:py-16 overflow-hidden bg-gradient-to-b from-[#FCFAEE] via-[#F7F3EF] to-[#F7F3EF]">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#003c84]/5 rounded-full blur-3xl -mr-48 -mt-48 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#278da4]/5 rounded-full blur-3xl -ml-48 -mb-48 pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Heading Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 leading-tight text-gray-900">
            Where <span className="bg-gradient-to-r from-[#278da4] to-[#003c84] bg-clip-text text-transparent">Possibilities Are Infinite!</span>
          </h2>
          <p className="text-gray-600 text-sm md:text-base lg:text-lg max-w-3xl mx-auto">
            From tech labs to wellness centers, ICEM offers a complete campus experience.
          </p>
        </div>

        {/* Facilities Grid - Row 1 (First 3 cards - larger) */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-5 mb-5">
          {facilities.slice(0, 3).map((facility) => (
            <div
              key={facility.id}
              className="group relative h-[300px] md:h-[280px] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer"
            >
              {/* Image Background */}
              <img
                src={facility.image}
                alt={facility.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Dark Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent"></div>

              {/* Text Content at Bottom */}
              <div className="absolute inset-0 flex flex-col justify-end p-5 md:p-6">
                <h3 className="text-lg md:text-xl font-bold text-white mb-1 group-hover:text-[#278da4] transition-colors duration-300">
                  {facility.title}
                </h3>
                <p className="text-xs md:text-sm text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300 leading-relaxed">
                  {facility.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Facilities Grid - Row 2 (Remaining 6 cards - slightly smaller) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {facilities.slice(3).map((facility) => (
            <div
              key={facility.id}
              className="group relative h-[260px] md:h-[250px] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer"
            >
              {/* Image Background */}
              <img
                src={facility.image}
                alt={facility.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Dark Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent"></div>

              {/* Text Content at Bottom */}
              <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-5">
                <h3 className="text-base md:text-lg font-bold text-white mb-1 group-hover:text-[#278da4] transition-colors duration-300">
                  {facility.title}
                </h3>
                <p className="text-xs md:text-sm text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300 leading-relaxed">
                  {facility.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Tour;
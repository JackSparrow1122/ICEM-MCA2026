import React from 'react';

// Import images from assets - using available images
import iMacLab from '../../assets/Comp.jpg';
import spaceLab from '../../assets/AIDS.webp';
import mechanicalLab from '../../assets/Mech.webp';
import innovationLab from '../../assets/IT.webp';
import swimmingPool from '../../assets/Canteen1.webp';
import gymFacility from '../../assets/Gym4.webp';
import uniMall from '../../assets/health.webp';

const Tour = () => {
  const facilities = [
    {
      id: 1,
      title: 'Computer Engineering Lab',
      image: iMacLab,
      description: 'State-of-the-art computer lab'
    },
    {
      id: 2,
      title: 'Artificial Intelligence & Data Science',
      image: spaceLab,
      description: 'Advanced research facility'
    },
    {
      id: 3,
      title: 'Mechanical Lab',
      image: mechanicalLab,
      description: 'Cutting-edge machinery and tools'
    },
    {
      id: 4,
      title: 'Apple Lab',
      image: innovationLab,
      description: 'Where ideas come to life'
    },
    {
      id: 5,
      title: 'Canteen',
      image: swimmingPool,
      description: 'Professional sports facility'
    },
    {
      id: 6,
      title: 'Gym Facility',
      image: gymFacility,
      description: 'Modern fitness center'
    },
    {
      id: 7,
      title: 'Health & Wellness Center',
      image: uniMall,
      description: 'Student entrepreneurship hub'
    },
  ];

  return (
    <section className="relative px-4 md:px-8 lg:px-16 py-12 md:py-16 overflow-hidden bg-gradient-to-b from-white via-[#F1F5F9] to-[#F1F5F9]">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#259CA8]/5 rounded-full blur-3xl -mr-48 -mt-48 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#135783]/5 rounded-full blur-3xl -ml-48 -mb-48 pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Heading Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 leading-tight">
            Where <span className="bg-gradient-to-r from-[#135783] to-[#259CA8] bg-clip-text text-transparent">Possibilities Are Infinite</span>
          </h1>
          <p className="text-gray-600 text-sm md:text-base lg:text-lg max-w-3xl mx-auto">
            From tech labs to wellness centers, we have it all
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-5 mb-8">
          {/* First 3 cards - larger */}
          {facilities.slice(0, 3).map((facility, index) => (
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
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>

              {/* Text Content at Bottom */}
              <div className="absolute inset-0 flex flex-col justify-end p-5 md:p-6">
                <h3 className="text-lg md:text-xl font-bold text-white mb-1 group-hover:text-[#259CA8] transition-colors duration-300">
                  {facility.title}
                </h3>
                <p className="text-xs md:text-sm text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {facility.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Second Row - 4 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 mb-8">
          {facilities.slice(3).map((facility, index) => (
            <div
              key={facility.id}
              className="group relative h-[250px] md:h-[240px] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer"
            >
              {/* Image Background */}
              <img
                src={facility.image}
                alt={facility.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Dark Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>

              {/* Text Content at Bottom */}
              <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-5">
                <h3 className="text-base md:text-lg font-bold text-white mb-1 group-hover:text-[#259CA8] transition-colors duration-300">
                  {facility.title}
                </h3>
                <p className="text-xs text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
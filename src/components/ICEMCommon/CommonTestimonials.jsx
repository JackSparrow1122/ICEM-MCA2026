import React from 'react';
import Slider from 'react-slick';

import vandar from '../../assets/images/MECH-images/abc.avif';
import micro from '../../assets/images/MECH-images/Microsoft.avif';
import tesla from '../../assets/images/MECH-images/tesla.avif';
import army from '../../assets/images/MECH-images/army.avif';
import abn from '../../assets/images/MECH-images/abn.avif';

import hansala from '../../assets/images/Hansala.avif';
import arpita from '../../assets/images/Arpita.avif';
import nikhil from '../../assets/images/Nikhil.avif';
import ankur from '../../assets/images/Ankur.avif';
import apurv from '../../assets/images/Apoorva.avif';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const successors = [
  {
    id: 2,
    name: 'Arpita Jha',
    image: arpita,
    details: (
      <>
        An exemplary scholar from Indira, initially served as a content writer. She received an <strong>Internship+ offer from Microsoft</strong>, but instead she chose her entrepreneurial journey.
      </>
    ),
    location: 'India',
    degree: '(Computer Engineering)',
    companyLogo: micro,
  },
  {
    id: 1,
    name: 'Hansala',
    image: hansala,
    details: (
      <>
        An Indira alumnus who graduated in 2013, secured a position as a Mechanical Engineer at Vanderlande. Presently, he is based in Jidah, <strong>Saudi Arabia</strong>.
      </>
    ),
    location: 'Jidah, Saudi Arabia',
    degree: '(Mechanical Engineer)',
    companyLogo: vandar,
  },
  {
    id: 3,
    name: 'Nikhil Pawar',
    image: nikhil,
    details: (
      <>
        A former student of Indira, commenced his professional journey at Bridgestone in 2013 & presently holds the esteemed position of a <strong>global supply manager at Tesla in Germany</strong>.
      </>
    ),
    location: 'Germany',
    degree: '(Mechanical Engineering)',
    companyLogo: tesla,
  },
  {
    id: 4,
    name: 'Major Ankur Tyagi',
    image: ankur,
    details: (
      <>
        One of our esteemed students, holds the rank of Major in the <strong>Indian Army</strong>. Indira takes immense pride in having him as an alumnus.
      </>
    ),
    location: 'India',
    degree: '(Mechanical Engineering)',
    companyLogo: army,
  },

  {
    id: 6,
    name: 'Apoorva Kakkar',
    image: apurv,
    details: (
      <>
        Our alumni Apoorva Kakkar, a Mechanical Engineering passout works as a Business Data Modeller at <strong>ABN Amro Bank, Netherlands.</strong>
      </>
    ),
    location: 'Netherlands',
    degree: '(Mechanical Engineering)',
    companyLogo: abn,
  },
];

const MechJourny = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    dots: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
    prevArrow: (
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-600 text-white rounded-full z-10 cursor-pointer">
        <i className="fas fa-chevron-left"></i>
      </div>
    ),
    nextArrow: (
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-600 text-white rounded-full z-10 cursor-pointer">
        <i className="fas fa-chevron-right"></i>
      </div>
    ),
  };

  return (
    <div className="w-full h-full bg-white shadow-lg py-8 overflow-hidden">
      <h3 className="text-center font-bold text-3xl md:text-4xl text-[#01224F] mb-4">
        Alumni <span className="text-[#259CA8]">Journey</span>
      </h3>

      <Slider {...settings}>
        {successors.map((successor) => (
          <div key={successor.id} className="px-2">
            <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 p-6 flex flex-col items-center relative border border-gray-100 min-h-[360px] mt-6 mb-6 group hover:border-[#259CA8]/30">
              {/* Quote icon overlay */}
              <div className="absolute right-6 top-4 text-7xl font-serif text-gray-100 select-none group-hover:text-[#259CA8]/10 transition-colors duration-300">
                ”
              </div>

              {/* Company Logo */}
              <div className="absolute top-6 left-6 w-14 h-14 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center p-1.5 transition-transform duration-300 group-hover:scale-105">
                <img
                  src={successor.companyLogo}
                  alt={`${successor.name} Company Logo`}
                  className="max-w-full max-h-full object-contain"
                  loading="lazy"
                />
              </div>

              {/* Profile Photo */}
              <div className="flex justify-center items-center mt-12 mb-4 relative">
                <div className="absolute -inset-1 bg-[#259CA8]/20 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <img
                  src={successor.image}
                  alt={successor.name}
                  className="w-24 h-24 object-cover rounded-full shadow-md border-4 border-white relative z-10"
                  loading="lazy"
                />
              </div>

              {/* Name & Details */}
              <div className="text-center mb-3">
                <h3 className="text-lg font-bold text-gray-900 transition-colors duration-300 group-hover:text-[#259CA8]">{successor.name}</h3>
                <p className="text-xs font-semibold text-[#135783]">{successor.degree}</p>
                <p className="text-[10px] text-gray-400 font-medium tracking-wider uppercase mt-0.5">{successor.location}</p>
              </div>

              {/* Quote Content */}
              <div className="text-center text-sm text-gray-600 leading-relaxed italic px-2">
                "{successor.details}"
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MechJourny;

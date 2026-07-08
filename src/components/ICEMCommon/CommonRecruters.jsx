"use client";

import React, { lazy, useMemo } from "react";

import { useLocation } from "react-router-dom";

// ✅ Define text content for each route

const pageContent = {

  "/": {

    headline: "Trusted by Leading IT Companies Across India",

    body: "From global technology giants to leading IT consulting firms, ICEM's MCA placement network connects graduates with careers in software and enterprise technology.",

  },



};

const RecruitersSection = () => {

  const { pathname } = useLocation();

  // ✅ Determine what to render (fallback to home content if path not matched)

  const { headline, body } = pageContent[pathname] || pageContent["/"];

  // ✅ Logos (unchanged)

  const allLogos = useMemo(() => Array.from(

    { length: 44 },

    (_, i) => `/logos/logo${i + 1}.webp`

  ).filter((_, index) => ![35, 37].includes(index + 1)), []);

  const mainLogos = useMemo(() => allLogos.filter((_, index) => ![17, 24].includes(index)), [allLogos]);

  const reorderedLogos = useMemo(() => [...mainLogos, allLogos[17], allLogos[24]], [mainLogos, allLogos]);

  return (
    <div className="bg-gray-50 py-2 md:py-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">

        {/* ✅ Dynamic Section Heading */}
        <h2 className="text-2xl sm:text-3xl font-bold text-secondary mb-3 sm:mb-5">

          {headline}
        </h2>

        {/* ✅ Dynamic Description */}
        <p className="text-gray-700 text-sm sm:text-sm max-w-5xl mx-auto leading-relaxed mb-8 sm:mb-10 px-4 md:px-0">

          {body}
        </p>

        {/* ✅ Recruiter Logos Grid */}
        <div className="grid px-4 md:px-0 grid-cols-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 

     gap-x-1 sm:gap-x-2 gap-y-3 sm:gap-y-5 place-items-center relative">

          {reorderedLogos.map((logo, index) => (
            <div

              key={index}

              className={`flex items-center justify-center w-20 sm:w-24 md:w-28 

        h-14 sm:h-16 bg-white rounded-md shadow-sm hover:shadow-md 

        transition-all duration-300  ${[17, 24].includes(index) ? "lg:invisible" : ""

                } ${[40, 41].includes(index) ? "hidden lg:flex" : ""

                } ${index === 41 ? "hidden" : ""

                }`}
            >
              <img

                src={logo}

                alt={`Recruiter Logo ${index + 1}`}

                width={100}

                height={60}

                className="object-contain max-h-[50px] hover:grayscale-0 transition duration-300"

                loading={"lazy"}

              />
            </div>

          ))}

          {/* Center Badge — NOW only visible on lg & above */}
          <div className="hidden lg:block absolute top-[49%] left-1/2 transform 

      -translate-x-1/2 -translate-y-1/2 z-20">
            <div className="w-28 h-28 md:w-40 md:h-40 rounded-full 

      bg-[linear-gradient(145deg,_#278da4_0%,_#003c84_90%)] 

      text-white flex flex-col items-center justify-center 

      shadow-xl border-[4px] border-[#D4AF37]">
              <p className="text-lg md:text-2xl font-bold">350+</p>
              <p className="text-xs md:text-base font-medium">Corporates</p>
            </div>
          </div>

        </div>

      </div>
    </div>

  );

};

export default RecruitersSection;

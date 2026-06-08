import React, { memo } from "react";
import backgroundImage from "../../assets/images/plane.avif";

const steps = [
  "Check eligibility criteria (12th Science with PCM).",
  "Apply online through our official website.",
  "Appear for counseling and secure your seat!",
];

const AdmissionProcess = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="relative bg-[#259CA8] px-4 md:px-8 lg:px-16 py-10 text-white shadow-lg overflow-hidden">
      {/* ✅ Background image visible only on md and up */}
      <div
        className="hidden md:block absolute inset-0 bg-no-repeat bg-center bg-contain"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#135783] opacity-85 mix-blend-overlay"></div>

      {/* Content */}
      <div className="relative z-10 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          Admission Process: How to Apply?
        </h2>
        <p className="text-lg mb-8">
          Getting into ICEM is easy! Follow these steps:
        </p>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((text, index) => (
            <div
              key={index}
              className="relative p-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-xl transition-all duration-300 hover:bg-white/15 hover:-translate-y-1 flex flex-col items-center text-center space-y-4"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-white text-[#135783] font-bold text-xl shadow-lg">
                {String(index + 1).padStart(2, '0')}
              </div>
              <p className="text-lg text-white font-medium leading-relaxed">{text}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10">
          <button
            onClick={scrollToTop}
            className="bg-white text-[#135783] font-bold py-4 px-8 rounded-full shadow-lg hover:bg-[#135783] hover:text-white transition-all duration-300 ease-in-out"
          >
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default memo(AdmissionProcess);

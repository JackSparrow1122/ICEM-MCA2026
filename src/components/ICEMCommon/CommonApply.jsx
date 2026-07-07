import React, { memo } from "react";
import { FaUserCheck, FaFileAlt, FaUserShield } from "react-icons/fa";

const steps = [
  {
    icon: <FaUserCheck />,
    title: "Check Eligibility",
    description: "Graduation with a minimum of 50% and a valid entrance exam score (MAH-CET/CAT/CMAT/XAT).",
  },
  {
    icon: <FaFileAlt />,
    title: "Apply Online",
    description: "Submit your application through the official ICEM website.",
  },
  {
    icon: <FaUserShield />,
    title: "Counseling & Confirmation",
    description: "Appear for counseling and secure your seat.",
  },
];

const AdmissionProcess = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="px-4 md:px-8 lg:px-16 py-16 bg-[#F7F3EF]/60 relative overflow-hidden" id="admission-process">
      {/* Decorative Orbs */}
      <div className="absolute top-1/4 -right-24 w-72 h-72 bg-[#F37121]/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 -left-24 w-72 h-72 bg-[#003c84]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Left Column: Heading & Info */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-24">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#F37121] bg-[#F37121]/10 px-3 py-1.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F37121]"></span>
              Admissions 2026
            </div>

            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
              Admission Process: <br />
              <span className="text-[#E06217]">How to Apply?</span>
            </h2>

            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Getting into ICEM is a simple, structured process. Follow these three steps to secure your enrollment in our premier MBA programme.
            </p>

            <div className="pt-4">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-3 bg-gradient-to-r from-[#F37121] to-[#D75A13] text-white font-bold py-4 px-8 rounded-full shadow-lg shadow-[#F37121]/20 hover:scale-105 hover:shadow-xl transition-all duration-300 group"
              >
                Apply Now for MBA
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </button>
            </div>
          </div>

          {/* Right Column: Timeline Cards */}
          <div className="lg:col-span-7 relative pl-6 md:pl-10">
            <div className="absolute left-[40px] md:left-[60px] top-6 bottom-6 w-[2px] bg-gradient-to-b from-[#F37121] via-[#F37121]/40 to-transparent -translate-x-1/2"></div>

            <div className="space-y-8">
              {steps.map((step, index) => (
                <div key={index} className="relative flex gap-6 md:gap-8 items-start group">

                  {/* Timeline Badge */}
                  <div className="relative z-10 flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full bg-white border-2 border-[#F37121] flex items-center justify-center font-bold text-sm md:text-base text-[#F37121] group-hover:bg-[#F37121] group-hover:text-white transition-all duration-300 shadow-md">
                    {index + 1}
                  </div>

                  {/* Card content */}
                  <div className="flex-1 bg-white p-6 md:p-8 rounded-3xl border border-gray-100 shadow-md shadow-gray-100/50 hover:shadow-xl hover:border-[#F37121]/30 transition-all duration-300 group-hover:-translate-y-1">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="p-3 bg-[#F37121]/10 text-[#F37121] rounded-2xl transition-colors duration-300 group-hover:bg-[#F37121] group-hover:text-white">
                        {React.cloneElement(step.icon, { className: "w-5 h-5" })}
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 transition-colors duration-300 group-hover:text-[#F37121]">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default memo(AdmissionProcess);

import React, { memo, useCallback } from 'react';

const CompBanner = () => {
  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="px-4 md:px-16 py-8">
      <div className="bg-gradient-to-br from-[#135783] to-[#0d3f60] rounded-3xl shadow-2xl px-6 py-12 md:py-16 text-white border border-[#259CA8]/20 max-w-6xl mx-auto relative overflow-hidden group">
        {/* Decorative background blur element */}
        <div className="absolute -right-12 -bottom-12 w-48 h-48 bg-[#259CA8]/10 rounded-full blur-2xl group-hover:bg-[#259CA8]/20 transition-colors duration-500"></div>
        
        <div className="text-center max-w-4xl mx-auto relative z-10 space-y-6">
          {/* Heading */}
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">
            Looking for the Best Engineering College in Pune?
          </h2>

          {/* Subheading */}
          <p className="text-xl md:text-2xl font-light text-gray-200">
            Your search ends at <span className="text-[#259CA8] font-bold">ICEM!</span>
          </p>

          {/* CTA Button */}
          <div className="flex justify-center pt-2">
            <button
              onClick={scrollToTop}
              className="bg-[#259CA8] text-white font-bold py-4 px-10 rounded-full shadow-lg shadow-[#259CA8]/30 hover:bg-white hover:text-[#135783] transition-all duration-300 ease-in-out hover:scale-105 active:scale-[0.98]"
            >
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(CompBanner);

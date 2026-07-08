import React from 'react';

const Headling = () => {
  const message = "Admissions Open for 2026 – Don’t wait, apply now and take your first step toward a brighter future!";

  return (
    <div className="overflow-hidden w-full bg-gradient-to-r from-[#278da4] via-[#003c84] to-[#278da4] py-2">
      <div className="relative w-full">
        <div className="marquee-track text-white text-2xl font-semibold whitespace-nowrap">
          {Array(10).fill(`${message} | `).join('')}
        </div>
      </div>

      <style>{`
        .marquee-track {
          display: inline-block;
          min-width: 100%;
          animation: scroll-left 40s linear infinite;
        }

        @keyframes scroll-left {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
};

export default Headling;

import React from "react";
import entc from "../../assets/images/Entc-Images/ennovation.avif";

export default function EntcInovataion() {
  return (
    <div className="relative flex flex-col md:flex-row items-center p-4 md:px-16 shadow-lg overflow-hidden">
      
      {/* Image Section */}
      <img
        src={entc}
        alt="Innovation and Connectivity"
        loading="lazy"
        className="w-full md:w-1/3 max-w-sm object-contain"
      />

      {/* Text Section */}
      <div className="w-full md:w-2/3 md:pl-6 mt-4 md:mt-0">
        <h1 className="text-2xl md:text-3xl font-bold text-[#36A5B9] mb-4">
          Where Innovation Meets Connectivity!
        </h1>
        <p className="text-base md:text-xl text-gray-700 leading-relaxed">
          Ever wondered how your smartphone connects seamlessly across the globe?<br />
          How autonomous vehicles communicate in real time?<br />
          How AI-powered devices make decisions in a fraction of a second?<br />
          That’s the magic of Electronics & Telecommunication Engineering!<br />
          Discover the advanced innovations that shape the connected world.
          At <strong>ICEM</strong>, we empower students for the future with practical training and real-world expertise!
        </p>
      </div>
    </div>
  );
}

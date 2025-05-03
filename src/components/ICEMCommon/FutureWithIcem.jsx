import React from "react";

const BeFutureReady = () => {
  return (
    <div className="bg-white py-4 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Text Section */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#135783] mb-4">
            Be Future-Ready with ICEM!
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed">
            Join the community of aspiring engineers at ICEM and turn your passion into a profession! Whether you dream of coding the next-gen apps, building AI solutions, designing advanced mechanical structures, or diving deep into telecommunications, ICEM provides the perfect launchpad for success.
          </p>
        </div>

        {/* Right Responsive Video */}
        <div className="w-full aspect-[16/8]">
          <iframe
            className="w-full h-full  shadow-lg"
            src="https://www.youtube.com/embed/-rAt2kuZN1E/$%7B"
            title="ICEM Promo Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>

    </div>
  );
};

export default BeFutureReady;

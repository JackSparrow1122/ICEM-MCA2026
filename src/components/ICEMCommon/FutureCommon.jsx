import React, { useRef, useState, useEffect, useCallback } from "react";

const LifeAtICEM = () => {
  const leftRef = useRef(null);
  const [videoHeight, setVideoHeight] = useState(0);

  // Use a debounced resize handler
  const handleResize = useCallback(() => {
    if (leftRef.current) {
      setVideoHeight(leftRef.current.offsetHeight);
    }
  }, []);

  // Listen for resize only once and throttle
  useEffect(() => {
    handleResize(); // Set initial height

    const debouncedResize = debounce(handleResize, 200); // 200ms debounce
    window.addEventListener("resize", debouncedResize);

    return () => {
      window.removeEventListener("resize", debouncedResize);
    };
  }, [handleResize]);

  // Debounce function to limit the rate of resize event triggering
  const debounce = (func, wait) => {
    let timeout;
    return function (...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), wait);
    };
  };

  return (
    <div className="w-full bg-[#FCFAEE] px-4 md:px-16 py-6">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12">
        {/* Left: Heading and Text */}
        <div ref={leftRef} className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-3xl md:text-4xl lg:text-4xl text-[#222] font-bold pb-4">
            Be Future-Ready with <span className="text-[#166188]">ICEM!</span>
          </h1>
          <p className="text-base md:text-xl text-[#333]">
            Join the community of aspiring engineers at ICEM and turn your passion into a profession! Whether you dream of coding the next-gen apps, building AI solutions, designing advanced mechanical structures, or diving deep into telecommunications, ICEM provides the perfect launchpad for success.
          </p>
        </div>

        {/* Right: YouTube Video */}
        <div
          className="w-full lg:w-1/2 overflow-hidden shadow-lg"
          style={{ height: videoHeight ? videoHeight : "auto" }}
        >
          <iframe
            src="https://www.youtube.com/embed/-rAt2kuZN1E"
            title="Life At ICEM"
            allowFullScreen
            className="w-full h-full"
            loading="lazy" // Lazy load iframe
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default LifeAtICEM;

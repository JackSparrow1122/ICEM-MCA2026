import React, { useRef, useState, useEffect, useCallback } from "react";

const LifeAtICEM = () => {
  const leftRef = useRef(null);
  const videoRef = useRef(null);
  const [videoHeight, setVideoHeight] = useState(0);
  const [loadVideo, setLoadVideo] = useState(false);

  // Resize logic (unchanged)
  const handleResize = useCallback(() => {
    if (leftRef.current) {
      setVideoHeight(leftRef.current.offsetHeight);
    }
  }, []);

  useEffect(() => {
    handleResize();
    const debouncedResize = debounce(handleResize, 200);
    window.addEventListener("resize", debouncedResize);
    return () => window.removeEventListener("resize", debouncedResize);
  }, [handleResize]);

  // Debounce helper
  const debounce = (func, wait) => {
    let timeout;
    return function (...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), wait);
    };
  };

  // 🔍 Lazy-load video when in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLoadVideo(true);
          observer.disconnect(); // Load only once
        }
      },
      { threshold: 0.1 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full bg-[#FCFAEE] px-4 md:px-16 py-6">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12">
        {/* Left: Text */}
        <div ref={leftRef} className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-3xl md:text-4xl lg:text-4xl text-[#222] font-bold pb-4">
            Be Future-Ready with <span className="text-[#166188]">ICEM!</span>
          </h1>
          <p className="text-base md:text-xl text-[#333]">
            Join the community of aspiring engineers at ICEM and turn your passion into a profession! Whether you dream of coding the next-gen apps, building AI solutions, designing advanced mechanical structures, or diving deep into telecommunications, ICEM provides the perfect launchpad for success.
          </p>
        </div>

        {/* Right: Lazy iframe */}
        <div
          ref={videoRef}
          className="w-full lg:w-1/2 overflow-hidden shadow-lg"
          style={{ height: videoHeight || "auto" }}
        >
          {loadVideo && (
            <iframe
              src="https://www.youtube.com/embed/-rAt2kuZN1E"
              title="Life At ICEM"
              allowFullScreen
              loading="lazy"
              className="w-full h-full"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default LifeAtICEM;

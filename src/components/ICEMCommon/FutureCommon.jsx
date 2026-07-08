import React, { useRef, useState, useEffect } from "react";

const LifeAtICEM = () => {
  const videoRef = useRef(null);
  const [loadVideo, setLoadVideo] = useState(false);

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
    <div className="w-full bg-[#F7F3EF] px-4 md:px-16 py-12 border-t border-b border-gray-100">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left: Text */}
        <div className="w-full lg:w-1/2 text-center lg:text-left space-y-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl text-gray-900 font-bold leading-tight">
            Be Future-Ready with <span className="text-[#003c84]">ICEM!</span>
          </h1>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed">
            Join the community of aspiring software professionals at ICEM and turn your passion into a profession! Whether you dream of building cutting-edge web applications, architecting robust databases, developing mobile apps, or mastering cloud systems, ICEM provides the perfect launchpad for success.
          </p>
        </div>

        {/* Right: Lazy iframe */}
        <div
          ref={videoRef}
          className="w-full lg:w-1/2 aspect-video rounded-3xl overflow-hidden shadow-2xl border border-gray-200/50 bg-gray-50 transition-all duration-300 hover:shadow-[#003c84]/15"
        >
          {loadVideo && (
            <iframe
              src="https://www.youtube.com/embed/gEXvD4OVyXg"
              title="Life At ICEM"
              allowFullScreen
              loading="lazy"
              className="w-full h-full border-0"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default LifeAtICEM;

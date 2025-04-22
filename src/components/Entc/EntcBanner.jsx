import React, { useCallback } from "react";

function EntcBanner() {
  const handleClick = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="text-white py-8 px-4 md:px-16 text-center flex flex-col items-center justify-center">
      <h1 className="text-2xl md:text-4xl font-extrabold text-black mb-2">
        Searching for the Best ENTC Engineering College in Pune?
      </h1>

      <p className="text-lg md:text-2xl font-medium text-black">
        Your search ends at{" "}
        <span className="text-[#41b9d0] font-semibold">ICEM!</span>
      </p>

      <button
        onClick={handleClick}
        className="bg-[#41b9d0] text-[#0c3249] py-2 px-4 rounded-full text-xl font-semibold shadow-md hover:bg-gray-200 hover:scale-105 hover:shadow-lg transition-transform duration-300 ease-in-out mt-8"
      >
        Apply Now
      </button>
    </div>
  );
}

export default EntcBanner;

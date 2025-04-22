import React, { memo } from "react";
import robotImage from "../../assets/images/AIDS-Imagegs/aids-robot-tab (1).avif";

const inputFields = [
  { type: "text", id: "name", placeholder: "Enter your name" },
  { type: "email", id: "email", placeholder: "Enter your email" },
  { type: "tel", id: "mobile", placeholder: "Enter your mobile number" }
];

const selectField = {
  id: "course",
  options: [
    "Select Course",
    "Information Technology",
    "Mechanical Engineering",
    "Electronics and Telecommunication Engineering",
    "Computer Engineering",
    "Artificial Intelligence and Data Science (AIDS)"
  ]
};

function AidsHero() {
  return (
<<<<<<< HEAD
    <div className="relative flex flex-col lg:flex-row items-center justify-between px-4 md:px-16 lg:px-16 pt-12 min-h-auto bg-gradient-to-r from-[#0c3249] via-[#1e5f76] to-[#41b9d0]">
      {/* Dark overlay for better contrast */}
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

      {/* Left Side: Robot Image + Overlay Text (Visible only on md and up) */}
      <div className="relative w-full lg:w-1/2 flex items-center justify-center">
        {/* Hide robot image on small screens */}
        <img
          src={robotImage}
          alt="Robot"
          className="hidden sm:block animate-robot w-full h-auto max-h-[90vh] object-contain"
        />
<div className="hidden md:block md:absolute md:top-10 md:left-4 sm:left-8 xl:left-16 p-4 sm:p-6 md:p-8 z-20 text-start text-white">
          <h1 className="text-lg sm:text-xl md:text-5xl lg:text-5xl font-bold leading-tight">
            Decode Your Future with AI-DS at ICEM!
=======
    <div className="relative py-10 px-4 md:px-8 lg:px-16 pt-6 h-auto bg-gradient-to-r from-[#0c3249] via-[#1e5f76] to-[#117577] text-white flex items-start overflow-hidden">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

      {/* Robot Image */}
      <img
        src={robotImage}
        alt="Robot"
        className="absolute bottom-0 top-5 w-2/5 z-5 object-cover animate-robot"
      />

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start z-20 w-full py-8 gap-6">
        {/* Left Text */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight mb-4">
            Decode Your Future with <span className="text-white">AI-DS</span> at ICEM!
>>>>>>> 1b62aa6 (push)
          </h1>
          <p className="hidden md:block md:text-2xl py-4">
            2 Decades of Excellence | 5 Specializations <br />
            <span className="text-white font-bold">100% Guaranteed Placement Assistance</span>
          </p>
          <p className="hidden md:block text-2xl md:text-3xl py-4">
            Apply now for the exciting field of <br /><span className="text-white font-bold">AI-DS Research & Development</span>!
          </p>
        </div>

<<<<<<< HEAD
      {/* Right Side: Form */}
      <div className="relative z-20 w-full lg:w-1/2 flex flex-col items-center lg:items-end">
        {/* Mobile Title (only visible on small screens) */}
        <h1 className="block md:hidden text-3xl font-bold text-white mb-4 text-center">
          Decode Your Future with AI-DS at ICEM!
        </h1>

        <div className="p-4 md:p-6 max-w-sm md:max-w-md w-full shadow-md bg-opacity-30 bg-[#41b9d0] border-2 border-[#1e5f76] rounded-lg">
          <form className="space-y-3 md:space-y-4">
            {inputFields.map((input) => (
              <input
                key={input.id}
                type={input.type}
                id={input.id}
                className="w-full p-2 bg-gradient-to-r from-white via-[#f0f8ff] to-[#d6f0ff] text-black rounded border border-[#8BC5FF] focus:outline-none focus:ring-2 focus:ring-[#006BB3]"
                placeholder={input.placeholder}
                required
              />
            ))}
            <select
              id={selectField.id}
              className="w-full p-2 bg-gradient-to-r from-white via-[#f0f8ff] to-[#d6f0ff] text-black rounded border border-[#8BC5FF] focus:outline-none focus:ring-2 focus:ring-[#006BB3]"
              required
            >
              {selectField.options.map((option, idx) => (
                <option key={idx} value={option === "Select Course" ? "" : option}>
                  {option}
                </option>
=======
        {/* Right Form */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <div
            className="p-6 w-[90%] sm:w-[80%] md:w-[60%] lg:w-[90%] xl:w-[80%] shadow-md rounded-md"
            style={{ backgroundColor: "rgba(65, 185, 208, 0.3)" }}
          >
            <form className="space-y-3">
              {inputFields.map((input) => (
                <input
                  key={input.id}
                  type={input.type}
                  id={input.id}
                  className="w-full p-2 bg-gradient-to-r from-white via-[#f0f8ff] to-[#d6f0ff] text-black rounded border border-[#8BC5FF] focus:ring-2 focus:ring-[#006BB3] outline-none"
                  placeholder={input.placeholder}
                  required
                />
>>>>>>> 1b62aa6 (push)
              ))}
              <select
                id={selectField.id}
                className="w-full p-2 bg-gradient-to-r from-white via-[#f0f8ff] to-[#d6f0ff] text-black rounded border border-[#8BC5FF] focus:ring-2 focus:ring-[#006BB3] outline-none"
                required
              >
                {selectField.options.map((option, idx) => (
                  <option key={idx} value={option === "Select Course" ? "" : option}>
                    {option}
                  </option>
                ))}
              </select>
              <button
                type="submit"
                className="w-full py-2 bg-[#006BB3] text-white rounded-lg hover:bg-[#00508D]"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Robot Animation */}
      <style>
        {`
          @keyframes robotMove {
            0%, 100% { transform: scaleX(-1) translateX(-30px) translateY(-10px); }
            25% { transform: scaleX(-1) translateX(-15px) translateY(-20px); }
            50% { transform: scaleX(-1) translateX(30px) translateY(-10px); }
            75% { transform: scaleX(-1) translateX(15px) translateY(-20px); }
          }
          .animate-robot { animation: robotMove 5s ease-in-out infinite alternate; }
        `}
      </style>
    </div>
  );
}

export default memo(AidsHero);

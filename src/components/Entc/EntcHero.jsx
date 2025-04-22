import React from 'react';
import bgImage from '../../assets/images/Entc-Images/entc-bg.avif';

function EntcHero() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Form submitted");
  };

  return (
    <div className="relative h-auto">
      {/* Background Image */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      ></div>

      {/* Black Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col md:flex-row justify-between items-center h-full p-4 md:px-16 md:py-8">
        {/* Left Side: Text Content */}
        <div className="w-full md:w-1/2 flex flex-col justify-center text-left">
          <h1 className="text-2xl md:text-5xl text-white font-bold leading-tight mb-4 md:mb-8">
            ENTC Engineering at Indira College of Engineering & Management
          </h1>
          <p className="text-base sm:hidden text-white leading-relaxed mb-4">
            20+ Years of Excellence | 5 Specializations | 100% Placement Support
          </p>
          <p className="hidden sm:flex text-lg md:text-3xl text-white leading-relaxed mb-4">
            2 Decades of Excellence in Education | 5 Specializations | 100% Guaranteed Placement Assistance
          </p>
          <p className="hidden sm:flex text-md md:text-2xl text-white leading-relaxed mb-8">
            ENTC at ICEM - Powering the Future with <br /> Electronics & Telecommunication!
          </p>
        </div>

        {/* Form Section */}
        <div className="w-full md:w-1/2 flex justify-center items-center my-6 sm:my-0">
          <div
            className="p-4 md:p-6 w-full max-w-md bg-opacity-70 rounded-lg shadow-md transition-all duration-300 ease-in-out transform hover:scale-[1.02]"
            style={{ backgroundColor: "rgba(2, 103, 112, 0.7)" }}
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <h2 className="text-white text-2xl font-semibold mb-4 text-center">Apply Now</h2>

              <div>
                <label htmlFor="name" className="text-white text-sm">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full p-2 bg-white text-black rounded border border-[#374151] focus:outline-none focus:ring-2 focus:ring-[#374151]"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="text-white text-sm">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-2 bg-white text-black rounded border border-[#374151] focus:outline-none focus:ring-2 focus:ring-[#374151]"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div>
                <label htmlFor="mobile" className="text-white text-sm">Mobile Number</label>
                <input
                  type="tel"
                  id="mobile"
                  name="mobile"
                  className="w-full p-2 bg-white text-black rounded border border-[#374151] focus:outline-none focus:ring-2 focus:ring-[#374151]"
                  placeholder="Enter your mobile number"
                  required
                />
              </div>

              <div>
                <label htmlFor="course" className="text-white text-sm">Course</label>
                <select
                  id="course"
                  name="course"
                  className="w-full p-2 bg-white text-black rounded border border-[#374151] focus:outline-none focus:ring-2 focus:ring-[#374151]"
                  required
                >
                  <option value="">Select Course</option>
                  <option value="IT">Information Technology</option>
                  <option value="Mechanical">Mechanical Engineering</option>
                  <option value="ENTC">Electronics and Telecommunication Engineering</option>
                  <option value="Computer">Computer Engineering</option>
                  <option value="AIDS">Artificial Intelligence and Data Science (AIDS)</option>
                </select>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full py-2 bg-[#026670] text-white rounded-lg hover:bg-[#9FEDD7] hover:text-black"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EntcHero;

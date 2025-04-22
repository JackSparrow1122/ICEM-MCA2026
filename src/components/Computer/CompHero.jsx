import { useState, useEffect, useRef, useMemo } from "react";
import backgroundImage from "../../assets/images/Com-Images/herocomp-e.avif";
import gearImage from "../../assets/images/gears.png";

function MechHero() {
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const requestRef = useRef();
  const words = useMemo(() => ["Innovation", "Automation", "Precision", "Revolution"], []);

  useEffect(() => {
    let lastTime = Date.now();

    const animate = () => {
      const now = Date.now();
      const delta = now - lastTime;

      if (delta >= (isDeleting ? 80 : 120)) {
        const currentWord = words[currentWordIndex];

        if (!isDeleting) {
          if (currentText === currentWord) {
            setTimeout(() => setIsDeleting(true), 1000);
          } else {
            setCurrentText(currentWord.substring(0, currentText.length + 1));
          }
        } else {
          if (currentText === "") {
            setIsDeleting(false);
            setCurrentWordIndex((prev) => (prev + 1) % words.length);
          } else {
            setCurrentText(currentWord.substring(0, currentText.length - 1));
          }
        }

        lastTime = now;
      }

      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, [currentText, isDeleting, currentWordIndex, words]);

  return (
    <div
      className="relative px-4 md:px-8 lg:px-16 pt-6 h-auto bg-cover bg-right md:bg-center bg-no-repeat text-white flex items-start"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <style>
        {`
          ::selection {
            background-color:#006BB3;
            color: #fff8f0;
          }
        `}
      </style>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-80 z-10"></div>

      {/* Half Gear */}
      <img
        src={gearImage}
        alt="Half Gear"
        className="absolute bottom-0 left-0 w-2/6 z-5 transform scale-x-[-1] mb-4 sm:mb-8 md:mb-16"
      />

      {/* Content */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start z-20 w-full  py-8 gap-6">
        {/* Left Text */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <p className="font-semibold text-3xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight mb-4">
            <span className="text-[#155DFC]">Computer Engineering</span> at Indira College of Engineering & Management
          </p>
          <div className="hidden lg:block">
            <p className="md:text-xl py-4">
              2 Decades of Excellence in Education | 5 Specializations <br />
              <span className="text-[#155DFC] font-bold">100% Guaranteed Placement Assistance</span>
            </p>
            <p className="text-2xl md:text-3xl py-2">
              <span className="text-[#155DFC] font-bold">Code</span> Your Future with <span className="text-[#155DFC] font-bold">Computer Engineering</span> at ICEM!
            </p>
          </div>
        </div>

        {/* Right Form */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <div
            className="p-6 w-[90%] sm:w-[80%] md:w-[60%] lg:w-[90%] xl:w-[80%] shadow-md rounded-md"
            style={{ backgroundColor: "rgba(139, 197, 255, 0.3)" }}
          >
            <form className="space-y-3">
              <input type="text" placeholder="Enter your name" required className="w-full p-2 bg-gradient-to-r from-[#FFFFFF] via-[#F0F8FF] to-[#d6F0FF] text-black rounded border border-[#FFD1A3] focus:ring-2 focus:ring-[#FFB88C] outline-none" />
              <input type="email" placeholder="Enter your email" required className="w-full p-2 bg-gradient-to-r from-[#FFFFFF] via-[#F0F8FF] to-[#d6F0FF] text-black rounded border border-[#FFD1A3] focus:ring-2 focus:ring-[#FFB88C] outline-none" />
              <input type="tel" placeholder="Enter your mobile number" required className="w-full p-2 bg-gradient-to-r from-[#FFFFFF] via-[#F0F8FF] to-[#d6F0FF] text-black rounded border border-[#FFD1A3] focus:ring-2 focus:ring-[#FFB88C] outline-none" />
              <select required className="w-full p-2 bg-gradient-to-r from-[#FFFFFF] via-[#F0F8FF] to-[#d6F0FF] text-black rounded border border-[#FFD1A3] focus:ring-2 focus:ring-[#FFB88C] outline-none">
                <option value="">Select Course</option>
                <option value="Mech">Mechanical Engineering</option>
                <option value="AI">Artificial Intelligence</option>
                <option value="IT">Information Technology</option>
                <option value="CS">Computer Science</option>
                <option value="AIDS">Artificial Intelligence and Data Science</option>
              </select>
              <button type="submit" className="w-full py-2 bg-[#006BB3] text-white rounded-lg hover:bg-[#005a99]">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MechHero;

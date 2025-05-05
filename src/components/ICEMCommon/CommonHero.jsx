import { useState, useEffect, useRef, useMemo } from "react";
import backgroundImage from "../../assets/images/indira.avif";
import { FaLongArrowAltRight } from "react-icons/fa";

function MechHero() {
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const requestRef = useRef();
  const words = useMemo(
    () => ["Innovation", "Automation", "Precision", "Revolution"],
    []
  );

  useEffect(() => {
    let frameId;
    let timeoutId;
    let lastTime = Date.now();

    const animate = () => {
      const now = Date.now();
      const delta = now - lastTime;
      const currentWord = words[currentWordIndex];

      if (!isDeleting && delta >= 120) {
        if (currentText === currentWord) {
          timeoutId = setTimeout(() => setIsDeleting(true), 1000);
        } else {
          setCurrentText(currentWord.substring(0, currentText.length + 1));
        }
        lastTime = now;
      } else if (isDeleting && delta >= 80) {
        if (currentText === "") {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        } else {
          setCurrentText(currentWord.substring(0, currentText.length - 1));
        }
        lastTime = now;
      }

      frameId = requestAnimationFrame(animate);
    };

    frameId = requestAnimationFrame(animate);
    return () => {
      cancelAnimationFrame(frameId);
      clearTimeout(timeoutId);
    };
  }, [currentText, isDeleting, currentWordIndex, words]);

  return (
    <div
      className="relative px-4 md:px-8 lg:px-16 pt-6 h-auto bg-cover bg-right md:bg-center bg-no-repeat text-white flex items-start"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <style>{`
        ::selection {
          background-color: #135783;
          color: #fff8f0;
        }
      `}</style>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-80 z-10"></div>

      {/* Content */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start z-20 w-full py-8 gap-6">
        {/* Left Text */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <p className="font-semibold text-3xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight mb-4">
            Shape Your Future with ICEM’s Top{" "}
            <span className="text-[#259CA8]"> Engineering</span> Programmes!
          </p>

          <div className="hidden lg:block">
            <p className="md:text-xl py-4">
              2 Decades of Excellence in Education | <br />
              <span className="text-[#259CA8] font-bold">
                100% Guaranteed Placement Assistance
              </span>
            </p>
            <p className="text-2xl md:text-3xl py-2">Build. Innovate. Lead</p>
          </div>

          {/* Apply Now Button */}
          <div className="mt-6 text-center lg:text-left">
            <button className="relative inline-flex items-center group text-lg font-semibold text-white">
              <span className="relative z-10 flex items-center gap-2 px-6 py-2 bg-[#259CA8] rounded-lg transition-transform duration-300 ease-in-out group-hover:translate-x-2">
                Apply Now
                <FaLongArrowAltRight className="text-white text-xl transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
              </span>
            </button>
          </div>
        </div>

        {/* Right Form */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <div
            className="p-6 w-[90%] sm:w-[80%] md:w-[60%] lg:w-[90%] xl:w-[80%] shadow-md rounded-md"
            style={{ backgroundColor: "rgba(139, 197, 255, 0.3)" }}
          >
            <form className="space-y-3">
              <Input type="text" placeholder="Enter your name" />
              <Input type="email" placeholder="Enter your email" />
              <Input type="tel" placeholder="Enter your mobile number" />
              <select
                required
                className="w-full p-2 bg-gradient-to-r from-[#FFFFFF] via-[#F0F8FF] to-[#d6F0FF] text-black rounded border border-[#FFD1A3] focus:ring-2 focus:ring-[#FFB88C] outline-none"
              >
                <option value="">Select Course</option>
                <option value="Mech">Mechanical Engineering</option>
                <option value="AI">Electronics and Telecommunication Engineering</option>
                <option value="IT">Information Technology</option>
                <option value="CS">Computer Science</option>
                <option value="AIDS">Artificial Intelligence and Data Science</option>
              </select>
              <button
                type="submit"
                className="w-full py-2 bg-[#259CA8] text-white rounded-lg hover:bg-[#135783]"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

// Reusable Input Component
const Input = ({ type, placeholder }) => (
  <input
    type={type}
    placeholder={placeholder}
    required
    className="w-full p-2 bg-gradient-to-r from-[#FFFFFF] via-[#F0F8FF] to-[#d6F0FF] text-black rounded border border-[#FFD1A3] focus:ring-2 focus:ring-[#FFB88C] outline-none"
  />
);

export default MechHero;

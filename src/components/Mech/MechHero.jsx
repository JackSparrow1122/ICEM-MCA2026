import { useState, useEffect } from "react";
import backgroundImage from "../../assets/images/ICEM 1.avif";
import MechForklift from "./MechForklift"; // Import the MechForklift component

function MechHero() {
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    course: ""
  });

  useEffect(() => {
    const words = ["Innovation", "Automation", "Precision", "Revolution"];

    const handleTyping = () => {
      const currentWord = words[currentWordIndex];

      if (!isDeleting) {
        if (currentText === currentWord) {
          setTimeout(() => setIsDeleting(true), 1000);
          return;
        }
        setCurrentText(currentWord.substring(0, currentText.length + 1));
      } else {
        if (currentText === "") {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
          return;
        }
        setCurrentText(currentWord.substring(0, currentText.length - 1));
      }
    };

    const timeout = setTimeout(handleTyping, isDeleting ? 80 : 120);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.mobile || !formData.course) {
      alert("Please fill out all required fields.");
      return;
    }

    console.log("Form Data Submitted:", formData);

    setFormData({
      name: "",
      email: "",
      mobile: "",
      course: ""
    });

    alert("Form Submitted Successfully!");
  };

  return (
    <div
      className="relative pt-4 md:pt-8 h-auto bg-cover bg-center bg-no-repeat text-white flex items-start overflow-hidden"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70 z-0"></div>

      <div className="flex flex-col md:flex-row items-center md:items-start z-30 w-full px-4 sm:px-8 md:px-16 mb-4 sm:mb-6">
        <div className="flex flex-col items-center md:items-start text-center md:text-left w-full">
          <p className="mt-4 leading-tight font-bold text-3xl md:text-5xl">
            <span className="text-[#FAB701]">Mechanical Engineering</span> at Indira College of Engineering & Management
          </p>

          <div className="hidden lg:block">
            <p className="text-xl py-4">
              2 Decades of Excellence in Education | 5 Specializations | <br /> <span className="text-[#FAB701] font-bold">100% Guaranteed Placement Assistance</span>
            </p>
            <p className="py-4 text-3xl">
              Build, Innovate & Lead!
            </p>
          </div>
        </div>

        <div className="flex justify-center md:justify-end w-full mt-6 md:mt-0 z-30">
          <div
            className="p-6 max-w-md w-full shadow-md rounded-md"
            style={{ backgroundColor: "rgba(139, 197, 255, 0.3)" }}
          >
            <form className="space-y-3 p-1" onSubmit={handleSubmit}>
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-1.5 bg-gradient-to-r from-[#FFF8F0] via-[#FFF0E0] to-[#FFE8D1] text-black rounded border border-[#FFD1A3] focus:outline-none focus:ring-2 focus:ring-[#FAB701]"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-1.5 bg-gradient-to-r from-[#FFF8F0] via-[#FFF0E0] to-[#FFE8D1] text-black rounded border border-[#FFD1A3] focus:outline-none focus:ring-2 focus:ring-[#FAB701]"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div>
                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  className="w-full p-1.5 bg-gradient-to-r from-[#FFF8F0] via-[#FFF0E0] to-[#FFE8D1] text-black rounded border border-[#FFD1A3] focus:outline-none focus:ring-2 focus:ring-[#FAB701]"
                  placeholder="Enter your mobile number"
                  required
                />
              </div>
              <div>
                <select
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  className="w-full p-1.5 bg-gradient-to-r from-[#FFF8F0] via-[#FFF0E0] to-[#FFE8D1] text-black rounded border border-[#FFD1A3] focus:outline-none focus:ring-2 focus:ring-[#FAB701]"
                  required
                >
                  <option value="">Select Course</option>
                  <option value="Mech">Mechanical Engineering</option>
                  <option value="AI">Computer Engineering</option>
                  <option value="IT">Electronics and Telecommunication</option>
                  <option value="CS">Information Technology</option>
                  <option value="AIDS">Artificial Intelligence and Data Science</option>
                </select>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full py-2 bg-[#FAB701] text-white rounded-lg hover:bg-[#01224F] transition duration-300"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Forklift Animation Component */}
      <MechForklift />
    </div>
  );
}

export default MechHero;

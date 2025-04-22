import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Import React Icons
import { FaChalkboardTeacher, FaHourglassHalf, FaRupeeSign, FaUsers } from "react-icons/fa";

// Data Array
const data = [
  {
    icon: <FaChalkboardTeacher className="text-[#390161] text-4xl" />,
    value: "Programme Format",
    description: "Offline",
  },
  {
    icon: <FaHourglassHalf className="text-[#390161] text-4xl" />,
    value: "Duration",
    description: "4 Years",
  },
  {
    icon: <FaRupeeSign className="text-[#390161] text-4xl" />,
    value: "Programme Fees",
    description: "Rs.77,368.00/-",
  },
  {
    icon: <FaUsers className="text-[#390161] text-4xl" />,
    value: "450+",
    description: "Total Recruiters",
  },
];

export default function ItPointers() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="bg-[#f3e6fc] py-10 px-4 md:px-8 lg:px-16 font-sans">
      <div className="grid md:grid-cols-2 gap-10 items-center overflow-hidden">

        {/* Left Content */}
        <div className="space-y-4" data-aos="fade-right">
          <h2 className="text-3xl md:text-[44px] font-bold leading-tight text-gray-900 text-center md:text-left">
            ICEM: The Gateway to
            <br />
            <span className="text-[#390161]">Exceptional Careers</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-700 font-medium text-center md:text-left">
            Your Pathway to Success and World-Class Opportunities
          </p>
        </div>

        {/* Right Content: Icon Grid */}
        <div
          className="grid grid-cols-2 gap-6 sm:gap-8"
          data-aos="fade-left"
        >
          {data.map((item, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="w-10 h-10 flex-shrink-0">{item.icon}</div>
              <div>
                <div className="text-lg md:text-xl font-bold text-gray-800">
                  {item.value}
                </div>
                <div className="text-sm text-gray-600 font-medium">
                  {item.description.split("\n").map((line, idx) => (
                    <React.Fragment key={idx}>
                      {line}
                      {idx < item.description.split("\n").length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

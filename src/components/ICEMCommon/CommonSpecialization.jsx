import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const specializationsData = [
  {
    id: "software",
    title: "Software Engineering",
    displayName: "Software Engineering & Development",
    duration: "2 Years",
    fees: "₹1,50,000/year",
    description:
      "This core track focuses on advanced software design principles, object-oriented methodologies, algorithms, and system software, preparing students to architect high-performance, secure software applications.",
    ctaText: "Apply Now for MCA (Software Engineering)",
    structure: [
      "Object-Oriented Analysis & Design",
      "Data Structures & Algorithm Design",
      "Software Testing & Quality Assurance",
      "Advanced Java & Python Development",
      "System Software & Operating Systems",
    ],
  },
  {
    id: "cloud",
    title: "Cloud Computing",
    displayName: "Cloud Computing & DevOps",
    duration: "2 Years",
    fees: "₹1,50,000/year",
    description:
      "Focus on cloud infrastructure, virtualization, containerization, and modern deployment strategies. Learn to implement scalable cloud solutions and streamline continuous integration & delivery.",
    ctaText: "Apply Now for MCA (Cloud Computing & DevOps)",
    structure: [
      "Cloud Architecture & Services (AWS/Azure)",
      "DevOps Practices & CI/CD Pipelines",
      "Virtualization & Containerization (Docker/Kubernetes)",
      "Linux Administration & Scripting",
      "Infrastructure as Code & Automation Tools",
    ],
  },
  {
    id: "web",
    title: "Web & Mobile Tech",
    displayName: "Web & Mobile Application Technologies",
    duration: "2 Years",
    fees: "₹1,50,000/year",
    description:
      "Equips students with cutting-edge full-stack web and cross-platform mobile application development skills using frameworks like React, Node.js, and native/hybrid mobile platforms.",
    ctaText: "Apply Now for MCA (Web & Mobile Technologies)",
    structure: [
      "Full-Stack Web Development (MERN)",
      "Mobile Application Design & Android/iOS Dev",
      "UI/UX Design Principles & Prototyping",
      "Web Services & API Development",
      "E-commerce Technologies & Security",
    ],
  },
  {
    id: "data",
    title: "Data Science",
    displayName: "Data Science & Big Data Analytics",
    duration: "2 Years",
    fees: "₹1,50,000/year",
    description:
      "Learn database management, big data storage architectures, machine learning models, and data analytics tools to process large-scale datasets and extract actionable business intelligence.",
    ctaText: "Apply Now for MCA (Data Science & Analytics)",
    structure: [
      "Database Management Systems & SQL/NoSQL",
      "Data Warehousing & Big Data Architectures",
      "Statistical Methods & R/Python Programming",
      "Machine Learning & Artificial Intelligence",
      "Data Visualization & Business Analytics",
    ],
  },
];

const CommonSpecialization = () => {
  const [activeTab, setActiveTab] = useState("software");

  useEffect(() => {
    AOS.init({ duration: 600, once: true });
  }, []);

  const activeSpec = specializationsData.find((spec) => spec.id === activeTab) || specializationsData[0];

  const getRecruiterLogos = (specId) => {
    let folder = "";
    let count = 0;
    switch (specId) {
      case "software":
        folder = "BBA – Marketing";
        count = 12;
        break;
      case "cloud":
        folder = "BBA – Finance";
        count = 10;
        break;
      case "data":
        folder = "BBA HR";
        count = 10;
        break;
      case "web":
        folder = "BBA Logistics & Supply Chain Management";
        count = 10;
        break;
      default:
        return [];
    }
    const logos = [];
    for (let i = 1; i <= count; i++) {
      logos.push(`/${folder}/logo/${i}.jpg`);
    }
    return logos;
  };

  return (
    <section className="relative px-4 md:px-8 lg:px-16 py-16 md:py-24 bg-white overflow-hidden">
      <style>{`
        .scrollbar-none::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-none {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      {/* Decorative Blur Orbs */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-[#003c84]/5 rounded-full blur-3xl -translate-x-1/2 pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-[#003c84]/5 rounded-full blur-3xl translate-x-1/2 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Title Header */}
        <div className="mb-10 text-left" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-2">
            Explore MCA Specialization Tracks
          </h2>
          <p className="text-gray-500 text-sm md:text-base leading-relaxed">
            Choose from the most comprehensive range of IT specialization tracks designed for modern developer roles.
          </p>
        </div>

        {/* Sidebar + Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mt-8" data-aos="fade-up">

          {/* Left Sidebar Menu */}
          <div className="lg:col-span-4 flex lg:flex-col overflow-x-auto lg:overflow-x-visible pb-3 lg:pb-0 gap-2 border-b lg:border-b-0 lg:border-r border-gray-100 lg:pr-6 scrollbar-none whitespace-nowrap">
            {specializationsData.map((spec) => {
              const isActive = activeTab === spec.id;
              return (
                <button
                  key={spec.id}
                  onClick={() => setActiveTab(spec.id)}
                  className={`w-auto lg:w-full text-left py-2.5 px-5 lg:py-3.5 lg:px-6 rounded-full transition-all duration-300 font-bold text-sm lg:text-base ${isActive
                    ? "bg-gradient-to-r from-[#278da4] to-[#003c84] text-white shadow-md shadow-[#003c84]/15 scale-[1.02]"
                    : "text-slate-500 hover:bg-gray-50 hover:text-[#003c84]"
                    }`}
                >
                  {spec.title}
                </button>
              );
            })}
          </div>

          {/* Right Content Pane */}
          <div key={activeTab} className="lg:col-span-8 space-y-6 min-h-[450px]">
            {/* Specialization Title */}
            <h3 className="text-3xl md:text-4xl font-extrabold text-[#278da4] tracking-tight">
              {activeSpec.displayName}
            </h3>

            {/* Badges */}
            <div className="flex flex-wrap gap-3">
              <span className="inline-flex items-center px-4 py-1.5 rounded-lg bg-gray-50 border border-gray-200 text-xs font-semibold text-gray-700">
                Duration: {activeSpec.duration}
              </span>
              <span className="inline-flex items-center px-4 py-1.5 rounded-lg bg-gray-50 border border-gray-200 text-xs font-semibold text-gray-700">
                Fees: {activeSpec.fees}
              </span>
            </div>

            {/* Description */}
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              {activeSpec.description}
            </p>

            {/* Programme Structure */}
            <div>
              <h4 className="text-base font-bold text-[#278da4] mb-3 tracking-wide">
                Programme Structure
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2.5">
                {activeSpec.structure.map((item, index) => (
                  <div key={index} className="flex items-start gap-2 text-gray-700 hover:text-gray-900 transition-colors">
                    <span className="text-[#003c84] font-bold text-base leading-none select-none">✓</span>
                    <span className="text-sm font-semibold leading-snug">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Recruiters for Specialization */}
            <div>
              <h4 className="text-base font-bold text-[#278da4] mb-4 tracking-wide">
                Recruiters for {activeSpec.title}
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {getRecruiterLogos(activeSpec.id).map((logoPath, idx) => (
                  <div
                    key={idx}
                    className="bg-white border border-gray-200/80 rounded-xl p-3 flex items-center justify-center h-16 shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <img
                      src={logoPath}
                      alt={`Recruiter ${idx + 1}`}
                      className="max-h-full max-w-full object-contain filter hover:grayscale-0 transition-all duration-300"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentNode.style.display = 'none';
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="w-full py-4 text-center text-white font-bold rounded-2xl bg-[#003c84] hover:bg-[#278da4] active:scale-[0.99] transition-all duration-300 shadow-lg shadow-[#003c84]/20 text-base md:text-lg"
              >
                {activeSpec.ctaText}
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default CommonSpecialization;
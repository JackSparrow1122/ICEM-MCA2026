import { useState } from "react";
import {
  ChevronDown,
  HelpCircle,
  Users,
  Briefcase,
  Building2,
  BookOpen,
} from "lucide-react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState("about");

  const faqData = {
    about: {
      title: "About MCA",
      icon: HelpCircle,
      questions: [
        {
          id: 1,
          question: "What is the duration of the MCA programme at ICEM?",
          answer: "The MCA Programme spans 2 years across four semesters, including a final-semester industry project.",
        },
        {
          id: 2,
          question: "Is the ICEM MCA programme approved and affiliated?",
          answer: "Yes, the MCA Programme is AICTE-approved and affiliated to Savitribai Phule Pune University (SPPU).",
        },
        {
          id: 3,
          question: "What does the MCA curriculum cover?",
          answer: "Advanced programming, software engineering, database management, web technologies, and cloud computing, along with big data analytics and DevOps practices.",
        },
      ],
    },
    admissions: {
      title: "Admissions & Eligibility",
      icon: Users,
      questions: [
        {
          id: 4,
          question: "What are the eligibility criteria for MCA admission?",
          answer: "Graduation in any discipline with a minimum of 50%, Mathematics as a subject at 10+2 or graduation level, and a valid MAH-MCA-CET score.",
        },
        {
          id: 5,
          question: "How is admission to the MCA programme conducted?",
          answer: "Through MAH-MCA-CET, followed by DTE Maharashtra CAP round counseling.",
        },
      ],
    },
    placements: {
      title: "Placements & Internships",
      icon: Briefcase,
      questions: [
        {
          id: 6,
          question: "Does ICEM provide internship opportunities for MCA students?",
          answer: "Yes, students undertake a significant live project or internship with leading IT firms during the final semester.",
        },
        {
          id: 7,
          question: "What kind of placement support does ICEM offer for MCA students?",
          answer: "A dedicated Training and Placement cell connects students with top IT product companies, MNCs, and consulting firms.",
        },
      ],
    },
    infrastructure: {
      title: "Infrastructure & Facilities",
      icon: Building2,
      questions: [
        {
          id: 8,
          question: "What facilities are available on campus?",
          answer: "Smart classrooms, Centers of Excellence, a well-equipped library, seminar halls, discussion rooms, canteen, playground, gym, and a health and wellness center.",
        },
      ],
    },
  };

  const categories = [
    { id: "about", label: "About MCA", icon: HelpCircle },
    { id: "admissions", label: "Admissions & Eligibility", icon: Users },
    { id: "placements", label: "Placements", icon: Briefcase },
    { id: "infrastructure", label: "Infrastructure", icon: Building2 },
  ];

  const currentCategory = faqData[activeCategory] || faqData["about"];
  const CategoryIcon = currentCategory ? currentCategory.icon : HelpCircle;

  const filteredQuestions = currentCategory ? currentCategory.questions : [];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <section
      className="py-16 md:py-24 bg-gradient-to-b from-[#FCFAEE] to-[#F7F3EF] px-4 sm:px-6 lg:px-8 border-t border-[#e2e8f0]"
      id="faq"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-none mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Find detailed answers regarding admissions, autonomy, academic
            programs, scholarship schemes, and student career placements at ICEM
            Pune.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[max-content_1fr] gap-8 items-start">
          {/* Categories Left Rail */}
          <div className="sticky top-24 w-full lg:w-auto">
            <div className="bg-white rounded-3xl p-4 shadow-xl border border-gray-100/80 backdrop-blur-md">
              <h3 className="text-gray-800 font-extrabold text-sm uppercase tracking-wider px-3 mb-3 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-[#003c84]" />
                Admission Topics
              </h3>
              <div className="space-y-1.5">
                {categories.map((cat) => {
                  const IconComponent = cat.icon;
                  const isActive = activeCategory === cat.id;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => {
                        setActiveCategory(cat.id);
                        setActiveIndex(0);
                      }}
                      className={`w-full text-left flex items-center gap-3 px-4 py-3.5 rounded-2xl transition-all duration-300 group ${isActive
                          ? "bg-gradient-to-r from-[#278da4] to-[#003c84] text-white shadow-md shadow-[#003c84]/15"
                          : "text-gray-600 hover:bg-gray-50 hover:text-[#003c84]"
                        }`}
                    >
                      <IconComponent
                        className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 group-hover:scale-110 ${isActive
                            ? "text-white"
                            : "text-gray-400 group-hover:text-[#003c84]"
                          }`}
                      />
                      <span className="font-semibold text-sm whitespace-nowrap">{cat.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Accordion Questions Right Section */}
          <div className="w-full">
            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
              {/* Category Title Header */}
              <div className="bg-gradient-to-r from-[#278da4] via-[#003c84] to-[#278da4] p-5 md:p-6 text-white flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <CategoryIcon className="w-5 h-5 md:w-6 md:h-6" />
                  <div>
                    <h3 className="text-base md:text-lg font-bold">
                      {currentCategory.title}
                    </h3>
                    <p className="text-white/80 text-[11px] md:text-xs font-medium mt-0.5">
                      Showing {filteredQuestions.length}{" "}
                      {filteredQuestions.length === 1
                        ? "question"
                        : "questions"}
                    </p>
                  </div>
                </div>
              </div>

              {/* Accordion List */}
              <div className="divide-y divide-gray-100">
                {filteredQuestions.map((item, index) => {
                  const isOpen = activeIndex === index;
                  return (
                    <div
                      key={item.id}
                      className={`transition-all duration-300 ${isOpen ? "bg-slate-50/50" : "hover:bg-slate-50/30"
                        }`}
                    >
                      <button
                        onClick={() => toggleAccordion(index)}
                        className="w-full px-5 md:px-8 py-5 text-left flex items-start justify-between gap-4 group focus:outline-none"
                      >
                        <div className="flex-1">
                          <h4
                            className={`text-sm md:text-base font-bold transition-colors duration-300 leading-snug ${isOpen
                                ? "text-[#003c84]"
                                : "text-gray-800 group-hover:text-[#003c84]"
                              }`}
                          >
                            {item.question}
                          </h4>
                        </div>
                        <div
                          className={`flex-shrink-0 mt-0.5 p-1 rounded-full bg-slate-100 text-gray-500 transition-all duration-300 ${isOpen
                              ? "rotate-180 bg-[#003c84]/10 text-[#003c84]"
                              : "group-hover:bg-slate-200"
                            }`}
                        >
                          <ChevronDown className="w-4 h-4" />
                        </div>
                      </button>

                      {/* Modern Smooth Height CSS Grid Transition */}
                      <div
                        className={`grid transition-all duration-300 ease-in-out ${isOpen
                            ? "grid-rows-[1fr] opacity-100"
                            : "grid-rows-[0fr] opacity-0"
                          }`}
                      >
                        <div className="overflow-hidden">
                          <div className="px-5 md:px-8 pb-5 pt-1">
                            <div className="border-l-2 border-[#003c84] pl-4 md:pl-5 py-1">
                              <div className="text-gray-600 text-xs md:text-sm leading-relaxed font-medium">
                                {item.answer}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

import React, { useState, useMemo } from 'react';
import { ChevronDown, Search, HelpCircle, Zap, Users, DollarSign, Briefcase, Building2, BookOpen, Globe } from 'lucide-react';

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [activeCategory, setActiveCategory] = useState('about');
    const [searchTerm, setSearchTerm] = useState('');

    const faqData = {
        about: {
            title: 'About the Program',
            icon: HelpCircle,
            color: 'from-[#135783] to-[#259CA8]',
            questions: [
                {
                    id: 1,
                    question: 'What is the B.E. CSE with Specialization in AI and ML at ICEM?',
                    answer: 'The B.E. CSE with Specialization in AI and ML is a cutting-edge undergraduate program designed to equip students with advanced knowledge in Artificial Intelligence and Machine Learning. This 4-year program combines core computer science fundamentals with specialized AI/ML coursework, industry collaborations, and hands-on project experience.'
                },
                {
                    id: 2,
                    question: 'What are the core subjects and technologies taught in this AI-focused program?',
                    answer: 'The CSE AI and ML syllabus includes Artificial Intelligence, Data Structures, Algorithms, Operating Systems, Natural Language Processing, and Deep Learning. Students gain hands-on experience with Microsoft tools such as Azure, Power BI, and Cognitive Services, making this one of the top Artificial Intelligence and Machine Learning courses in India.'
                },
                {
                    id: 3,
                    question: 'How does this program differ from a standard CSE degree?',
                    answer: 'Unlike standard CSE programs, our AI/ML specialization integrates AI concepts into core subjects, provides industry partnerships, focuses on emerging technologies, includes real-world projects, and offers Microsoft certification pathways. This specialized approach ensures students are industry-ready from day one.'
                }
            ]
        },
        admissions: {
            title: 'Admissions Process',
            icon: Users,
            color: 'from-[#135783] to-[#259CA8]',
            questions: [
                {
                    id: 4,
                    question: 'What is the eligibility criteria for admission?',
                    answer: 'Candidates must have passed 12th grade with Physics, Chemistry, and Mathematics. Admission is based on merit, entrance exam scores (JEE Main), or college admission tests. Specific cutoff scores vary annually based on intake capacity.'
                },
                {
                    id: 5,
                    question: 'What documents are required during the admission process?',
                    answer: 'Required documents include: 12th mark sheet, proof of identity, proof of address, birth certificate, category certificate (if applicable), medical certificate, and passport-size photographs. All documents should be submitted in both original and photocopied formats.'
                },
                {
                    id: 6,
                    question: 'What is the application deadline?',
                    answer: 'Application deadlines typically fall in June-July for the academic year starting in August. However, we accept rolling admissions until all seats are filled. Early application is recommended to secure your spot.'
                }
            ]
        },
        eligibility: {
            title: 'Eligibility & Requirements',
            icon: BookOpen,
            color: 'from-[#259CA8] to-[#135783]',
            questions: [
                {
                    id: 7,
                    question: 'What are the minimum marks required for eligibility?',
                    answer: 'Candidates should have minimum 50% aggregate marks in 12th standard (Physics, Chemistry, Mathematics). Candidates from reserved categories may have relaxation as per government norms.'
                },
                {
                    id: 8,
                    question: 'Do I need to appear for entrance exams?',
                    answer: 'Yes, JEE Main is the primary admission pathway. We also consider college-level entrance examinations and merit-based admissions. Your performance in these exams is crucial for admission and scholarship eligibility.'
                },
                {
                    id: 9,
                    question: 'Are there any special eligibility criteria for NRI/International students?',
                    answer: 'Yes, NRI and international students have separate admission procedures. They are required to provide equivalent qualification certificates and English proficiency proof. Special counseling and guidance are provided for international admissions.'
                }
            ]
        },
        fees: {
            title: 'Fee Structure & Scholarships',
            icon: DollarSign,
            color: 'from-[#135783] to-[#135783]',
            questions: [
                {
                    id: 10,
                    question: 'What is the total fee for the 4-year program?',
                    answer: 'The annual tuition fee is competitive and varies based on category. Detailed fee breakdown including tuition, infrastructure, and examination fees will be provided during admission. We also offer installment payment options.'
                },
                {
                    id: 11,
                    question: 'What scholarship opportunities are available?',
                    answer: 'We offer merit-based scholarships up to 50% tuition fee waiver, government scholarships for SC/ST/OBC categories, sports scholarships, and need-based financial assistance. Eligible students can apply for multiple scholarships.'
                },
                {
                    id: 12,
                    question: 'Are there any additional fees beyond tuition?',
                    answer: 'Additional fees may include hostel charges (if applicable), student activity fees, library fees, and examination fees. These are nominal and are clearly outlined in the fee prospectus provided at admission.'
                }
            ]
        },
        placements: {
            title: 'Placements & Career',
            icon: Briefcase,
            color: 'from-[#259CA8] to-[#135783]',
            questions: [
                {
                    id: 13,
                    question: 'What is the placement rate for CSE AI/ML graduates?',
                    answer: 'Our CSE AI/ML program boasts a 95%+ placement rate. Graduates are recruited by top companies across IT, AI, data science, and software development sectors. Average package offered is competitive with industry standards.'
                },
                {
                    id: 14,
                    question: 'Which companies recruit from this program?',
                    answer: 'Top recruiters include Infosys, TCS, Wipro, Capgemini, IBM, Accenture, Google, Microsoft, Amazon, and various AI-focused startups. Our strong industry partnerships ensure continuous recruitment opportunities.'
                },
                {
                    id: 15,
                    question: 'What kind of internship opportunities are available?',
                    answer: 'Students are encouraged to pursue internships from the second year onwards. Our industry partnerships provide summer internships, winter internships, and full-time opportunities in AI/ML roles, data science, and software development.'
                }
            ]
        },
        infrastructure: {
            title: 'Infrastructure & Labs',
            icon: Building2,
            color: 'from-[#135783] to-[#259CA8]',
            questions: [
                {
                    id: 16,
                    question: 'What are the computing facilities available?',
                    answer: 'We have state-of-the-art computer labs with high-performance GPUs, dedicated AI/ML lab with TensorFlow and PyTorch setup, cloud computing labs (AWS, Azure), and collaborative workspaces for students.'
                },
                {
                    id: 17,
                    question: 'Are there specialized labs for AI/ML coursework?',
                    answer: 'Yes, our dedicated AI/ML laboratory is equipped with GPUs, cloud access, and enterprise-level software tools. Students have 24/7 access to these labs to work on projects and research.'
                },
                {
                    id: 18,
                    question: 'What networking and connectivity options are available?',
                    answer: 'Campus-wide high-speed Wi-Fi (1 Gbps), dedicated internet connectivity, smart classrooms with Video conferencing capabilities, and access to online learning platforms ensure seamless connectivity.'
                }
            ]
        },
        studentlife: {
            title: 'Campus Life & Support',
            icon: Globe,
            color: 'from-[#135783] to-[#259CA8]',
            questions: [
                {
                    id: 19,
                    question: 'What extracurricular activities are available?',
                    answer: 'Students can participate in coding clubs, AI/ML hackathons, tech forums, sports, cultural events, entrepreneurship cells, and various student organizations. We believe in holistic development beyond academics.'
                },
                {
                    id: 20,
                    question: 'Is hostel accommodation available?',
                    answer: 'Yes, we provide safe and comfortable hostel facilities with modern amenities including Wi-Fi, mess, recreational areas, and security. Priority is given to outstation students. Hostel fees are separate from tuition.'
                },
                {
                    id: 21,
                    question: 'What student support services are provided?',
                    answer: 'Comprehensive support includes academic counseling, career guidance, mental health services, accessibility services for differently-abled students, and 24/7 campus security for student safety and well-being.'
                }
            ]
        },
        specializations: {
            title: 'Specializations & Curriculum',
            icon: Zap,
            color: 'from-[#259CA8] to-[#135783]',
            questions: [
                {
                    id: 22,
                    question: 'What specialization paths are available within AI/ML?',
                    answer: 'Students can specialize in Deep Learning, Natural Language Processing, Computer Vision, Reinforcement Learning, and DataScience. Electives and projects allow customization based on career goals.'
                },
                {
                    id: 23,
                    question: 'Are there industry-recognized certifications included?',
                    answer: 'Yes, the program includes Microsoft AI/ML certifications, AWS cloud certifications, and industry partnerships that provide additional verified credentials enhancing employability.'
                },
                {
                    id: 24,
                    question: 'Can students pursue research or thesis?',
                    answer: 'Absolutely! We encourage research through our final year thesis/capstone projects. Students can collaborate with faculty on published research, present at conferences, and contribute to real-world AI solutions.'
                }
            ]
        }
    };

    const categories = [
        { id: 'about', label: 'About Program', icon: HelpCircle },
        { id: 'admissions', label: 'Admissions', icon: Users },
        { id: 'eligibility', label: 'Eligibility', icon: BookOpen },
        { id: 'fees', label: 'Fees & Scholarships', icon: DollarSign },
        { id: 'placements', label: 'Placements', icon: Briefcase },
        { id: 'infrastructure', label: 'Infrastructure', icon: Building2 },
        { id: 'studentlife', label: 'Student Life', icon: Globe },
        { id: 'specializations', label: 'Specializations', icon: Zap }
    ];

    const currentCategory = faqData[activeCategory];
    const CategoryIcon = currentCategory.icon;

    // Filter questions based on search term
    const filteredQuestions = useMemo(() => {
        if (!searchTerm.trim()) return currentCategory.questions;

        return currentCategory.questions.filter(q =>
            q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
            q.answer.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [searchTerm, activeCategory, currentCategory.questions]);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? -1 : index);
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-white via-[#F1F5F9] to-[#F1F5F9] py-16 md:py-24 px-4 md:px-8">
            <div className="max-w-7xl mx-auto">

                {/* Header Section */}
                <div className="text-center mb-6 md:mb-8">
                    <div className="inline-block mb-2">
                        <div className="bg-gradient-to-r from-[#135783] via-[#259CA8] to-[#135783] p-2 rounded-full inline-block shadow-lg">
                            <HelpCircle className="w-6 h-6 text-white" />
                        </div>
                    </div>
                    <h1 className="text-3xl md:text-4xl font-bold mb-2 font-poppins bg-gradient-to-r from-[#135783] via-[#259CA8] to-[#135783] bg-clip-text text-transparent">
                        Frequently Asked Questions
                    </h1>
                    <p className="text-sm md:text-base text-[#111827] max-w-2xl mx-auto leading-relaxed">
                        Find answers to common questions about our B.E. CSE with AI & ML program
                    </p>
                </div>

                {/* Search Bar */}
                <div className="mb-6 md:mb-8">
                    <div className="relative max-w-3xl mx-auto">
                        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#259CA8] w-4 h-4" />
                        <input
                            type="text"
                            placeholder="Search FAQs..."
                            value={searchTerm}
                            onChange={(e) => {
                                setSearchTerm(e.target.value);
                                setActiveIndex(0);
                            }}
                            className="w-full pl-10 pr-4 py-2 rounded-xl border-2 border-[#259CA8]/20 focus:border-[#259CA8] focus:outline-none transition-all duration-300 bg-white shadow-md text-[#1F2937] placeholder-[#9CA3AF] font-medium text-sm"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-6">

                    {/* Category Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-2xl shadow-lg overflow-hidden sticky top-20 border border-[#E5E7EB]">
                            <div className="bg-gradient-to-r from-[#135783] to-[#0d3f61] p-3">
                                <h2 className="text-white font-bold text-sm tracking-wide">Categories</h2>
                            </div>
                            <nav className="divide-y divide-[#F0F0F0]">
                                {categories.map((cat) => {
                                    const IconComp = cat.icon;
                                    return (
                                        <button
                                            key={cat.id}
                                            onClick={() => {
                                                setActiveCategory(cat.id);
                                                setSearchTerm('');
                                                setActiveIndex(0);
                                            }}
                                            className={`w-full px-4 py-2 text-left flex items-center gap-2 transition-all duration-300 group text-xs ${activeCategory === cat.id
                                                    ? 'bg-gradient-to-r from-[#259CA8]/10 to-[#259CA8]/5 text-[#135783] border-l-4 border-[#259CA8] font-semibold'
                                                    : 'text-[#4B5563] hover:bg-[#F9FAFB]'
                                                }`}
                                        >
                                            <IconComp className={`w-3 h-3 flex-shrink-0 transition-colors duration-300 ${activeCategory === cat.id ? 'text-[#259CA8]' : 'text-[#9CA3AF] group-hover:text-[#259CA8]'}`} />
                                            <span className="font-medium">{cat.label}</span>
                                        </button>
                                    );
                                })}
                            </nav>
                        </div>
                    </div>

                    {/* FAQ Accordion Section */}
                    <div className="lg:col-span-3">
                        <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-[#E5E7EB]">

                            {/* Category Header */}
                            <div className="bg-gradient-to-r from-[#135783] via-[#259CA8] to-[#135783] p-4 text-white">
                                <div className="flex items-center gap-2 mb-1">
                                    <CategoryIcon className="w-6 h-6" />
                                    <h2 className="text-lg md:text-xl font-bold">{currentCategory.title}</h2>
                                </div>
                                <p className="text-white/90 text-xs font-medium ml-8">
                                    {filteredQuestions.length} {filteredQuestions.length === 1 ? 'question' : 'questions'} available
                                </p>
                            </div>

                            {/* Accordion Items */}
                            <div className="divide-y divide-[#F0F0F0]">
                                {filteredQuestions.length > 0 ? (
                                    filteredQuestions.map((item, index) => (
                                        <div
                                            key={item.id}
                                            className="transition-all duration-300 hover:bg-[#FAFBFC]"
                                        >
                                            <button
                                                onClick={() => toggleAccordion(index)}
                                                className="w-full px-4 py-3 text-left flex items-start justify-between gap-3 group focus:outline-none focus:bg-[#F0F9FA]"
                                            >
                                                <div className="flex-1">
                                                    <h3 className="text-sm font-semibold text-[#1F2937] group-hover:text-[#259CA8] transition-colors duration-300 leading-snug">
                                                        {item.question}
                                                    </h3>
                                                </div>
                                                <div className={`flex-shrink-0 mt-0.5 transition-all duration-300 ${activeIndex === index ? 'rotate-180' : ''}`}>
                                                    <ChevronDown className={`w-4 h-4 transition-colors duration-300 ${activeIndex === index ? 'text-[#259CA8]' : 'text-[#D1D5DB] group-hover:text-[#259CA8]'}`} />
                                                </div>
                                            </button>

                                            {/* Answer Section */}
                                            <div
                                                className={`overflow-hidden transition-all duration-400 ease-in-out ${activeIndex === index ? 'max-h-96' : 'max-h-0'
                                                    }`}
                                            >
                                                <div className="px-4 pb-3 pt-0">
                                                    <div className="border-l-4 border-[#259CA8] pl-3">
                                                        <p className="text-[#4B5563] leading-relaxed text-xs font-medium">
                                                            {item.answer}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <div className="px-4 py-8 text-center">
                                        <Search className="w-10 h-10 text-[#259CA8]/20 mx-auto mb-2" />
                                        <p className="text-[#6B7280] text-sm font-medium mb-2">No questions match your search.</p>
                                        <button
                                            onClick={() => setSearchTerm('')}
                                            className="text-[#259CA8] hover:text-[#135783] font-semibold underline transition-colors duration-300 text-xs"
                                        >
                                            Clear search
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Additional CTA */}
                        <div className="mt-4 bg-gradient-to-r from-[#259CA8]/10 via-white to-[#135783]/10 rounded-2xl border-2 border-[#259CA8]/20 p-4 text-center shadow-md">
                            <p className="text-[#4B5563] mb-2 text-sm font-medium">Can't find your answer?</p>
                            <button className="bg-gradient-to-r from-[#259CA8] to-[#135783] text-white font-bold py-2 px-6 rounded-xl hover:shadow-xl hover:scale-105 transition-all duration-300 text-sm">
                                Contact Our Team
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQ;
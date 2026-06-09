import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { Mail } from "lucide-react";
import logo from "../assets/images/logos/indirafooter.avif";

// Social Icon Component
const SocialIcon = ({ href, children, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="p-3 rounded-full bg-gray-100 hover:bg-[#259CA8] text-gray-600 hover:text-white transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1"
  >
    {children}
  </a>
);

const Footer = () => {
  return (
    <footer className="bg-white text-gray-700 border-t border-gray-200 shadow-[0_-5px_25px_-5px_rgba(0,0,0,0.1)]">



      {/* Bottom */}
      <div className="bg-[#259CA8] text-white text-center text-xs sm:text-sm py-4 px-4">
        <p>
          © {new Date().getFullYear()} Indira College of Engineering and Management — All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

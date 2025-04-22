import React from "react";
import logo from '../../assets/images/Icem-footer-logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhoneAlt, faEnvelope, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faLinkedinIn, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="font-baskerville-regular">
      <div className="bg-gray-100 px-8 md:px-16 text-black py-8">
        <div className="flex flex-col sm:flex-row justify-around">
          {/* Left Column */}
          <div className="flex flex-col sm:items-start mb-6 sm:mb-0">
            {/* Logo */}
            <div className="mb-6">
              <img src={logo} alt="ICEM Logo" className="w-40 sm:w-48" />
            </div>

            {/* Contact Info */}
            <address className="text-sm space-y-6 not-italic">
              <div className="flex items-start space-x-2">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-xl text-[#023b5e]" />
                <div>
                  <p>Indira College of Engineering and Management (ICEM)</p>
                  <p>S.No. 64,65, Gat No. 276 At Post: Parandwadi,</p>
                  <p>Near Somatne phata, Tal: Maval, Dist: Pune – 410 506</p>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <FontAwesomeIcon icon={faPhoneAlt} className="text-xl text-[#023b5e]" />
                <p>+91 7720010705 / 06</p>
              </div>

              <div className="flex items-center space-x-2">
                <FontAwesomeIcon icon={faEnvelope} className="text-xl text-[#023b5e]" />
                <p>info@indiraicem.ac.in</p>
              </div>

              <div className="flex items-center space-x-2">
                <FontAwesomeIcon icon={faGlobe} className="text-xl text-[#023b5e]" />
                <a
                  href="https://www.indiraicem.ac.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-700"
                >
                  www.indiraicem.ac.in
                </a>
              </div>
            </address>

            {/* Social Media */}
            <div className="flex space-x-4 text-xl mt-6 mb-4">
              <a href="https://facebook.com" aria-label="Facebook" className="hover:text-blue-600">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="https://instagram.com" aria-label="Instagram" className="hover:text-pink-600">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="https://linkedin.com" aria-label="LinkedIn" className="hover:text-blue-700">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
              <a href="https://twitter.com" aria-label="Twitter" className="hover:text-blue-400">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="https://youtube.com" aria-label="YouTube" className="hover:text-red-600">
                <FontAwesomeIcon icon={faYoutube} />
              </a>
            </div>
          </div>

          {/* Right Column */}
          <nav className="flex flex-col sm:ml-6" aria-label="Important Links">
            <h3 className="text-2xl text-[#023b5e] font-bold mb-6">Important Links</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
              <div className="space-y-4">
                <a href="#" className="hover:text-gray-600">Staff Grievance Form</a>
                <a href="#" className="hover:text-gray-600">Women Welfare Policy</a>
                <a href="#" className="hover:text-gray-600">Anti Ragging Policy</a>
                <a href="#" className="hover:text-gray-600">Faculty Application Form</a>
                <a href="#" className="hover:text-gray-600">SPPU</a>
              </div>
              <div className="space-y-4">
                <a href="#" className="hover:text-gray-600">AICTE</a>
                <a href="#" className="hover:text-gray-600">DTE</a>
                <a href="#" className="hover:text-gray-600">MahaDBT</a>
                <a href="#" className="hover:text-gray-600">Mandatory Disclosure</a>
                <a href="#" className="hover:text-gray-600">AICTE Approval</a>
              </div>
            </div>
          </nav>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-[#023b5e] py-4 px-8 md:px-16 text-left text-white text-sm">
        <p>© 2024 Indira College of Engineering and Management. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;

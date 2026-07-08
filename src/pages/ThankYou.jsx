import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";

function getCookie(name) {
  if (typeof document === "undefined") return null;
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
  return null;
}

function deleteCookie(name) {
  if (typeof document === "undefined") return;
  document.cookie = `${name}=; path=/; domain=.indiraicem.ac.in; expires=Thu, 01 Jan 1970 00:00:00 GMT; Secure; SameSite=Lax`;
  document.cookie = `${name}=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT; Secure; SameSite=Lax`;
}

function ThankYou() {
  const navigate = useNavigate();
  const [seconds, setSeconds] = useState(10);

  useEffect(() => {
    // 1. If loaded inside an iframe (from NPF widget redirect), break out and load on parent window.
    if (window.self !== window.top) {
      window.top.location.href = window.location.href;
      return;
    }

    // 2. Track successful form submission using Google Tag Manager dataLayer and Google Ads
    // Only track once per browser session/tab to avoid duplicate conversion counts on refresh
    const hasTracked = sessionStorage.getItem("icem_conversion_tracked");
    if (!hasTracked) {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "form_submission_success",
        page_path: "/thank-you",
      });

      if (typeof window.gtag === "function") {
        window.gtag('event', 'conversion', { 'send_to': 'AW-16606532987/IVt0COaGu7kZEPuqzu49' });
      }

      sessionStorage.setItem("icem_conversion_tracked", "true");
    }

    // 3. Setup redirect countdown timer
    const timer = setInterval(() => {
      setSeconds((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          navigate("/");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [navigate]);

  if (window.self !== window.top) {
    return null; // Keep screen clean while breaking out of iframe
  }

  return (
    <div className="min-h-screen bg-[#F7F3EF] flex flex-col justify-between pt-8 md:pt-16">
      <div className="flex-grow flex items-center justify-center px-4 py-12">
        <div className="max-w-md w-full bg-[#FCFAEE] rounded-3xl shadow-xl p-8 md:p-10 text-center border border-gray-100 transition-all duration-300 hover:shadow-2xl">
          {/* Success Checkmark Icon */}
          <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-6 text-emerald-500 animate-bounce">
            <svg
              className="w-10 h-10"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>

          {/* Heading */}
          <h1 className="text-3xl font-extrabold text-gray-900 mb-3">
            Thank You!
          </h1>

          {/* Message */}
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Your enquiry has been submitted successfully.
            <span className="block mt-1 font-medium text-gray-500">
              We will get back to you soon.
            </span>
          </p>

          {/* Countdown timer */}
          <div className="py-2 px-4 bg-[#F7F3EF] rounded-2xl inline-block mb-8">
            <p className="text-sm text-gray-500 font-medium">
              Redirecting to home page in{" "}
              <span className="text-[#003c84] font-bold text-base">{seconds}</span>{" "}
              seconds...
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="space-y-3">
            <button
              onClick={() => window.history.back()}
              className="w-full bg-[#003c84] hover:bg-[#278da4] text-white py-3 px-6 rounded-xl font-bold transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer"
            >
              Go Back
            </button>
            <a
              href="/"
              className="block w-full bg-[#FCFAEE] hover:bg-[#F7F3EF] text-[#003c84] border border-gray-200 py-3 px-6 rounded-xl font-bold transition-all duration-300 cursor-pointer"
            >
              Return to Home
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ThankYou;

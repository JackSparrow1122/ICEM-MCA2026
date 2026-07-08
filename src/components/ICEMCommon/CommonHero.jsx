import { useState, useEffect, useRef, useMemo } from "react";
import backgroundImage from "../../assets/images/bg.avif";
import { FaLongArrowAltRight } from "react-icons/fa";

function MechHero() {
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const words = useMemo(
    () => ["Innovation", "Automation", "Precision", "Revolution"],
    []
  );

  const iframeSrc = useMemo(() => {
    if (typeof window !== "undefined") {
      const token = window.crypto?.randomUUID ? window.crypto.randomUUID() : `${Date.now()}-${Math.random().toString(36).slice(2)}`;

      // 1. Store in sessionStorage (for local fallback)
      window.sessionStorage.setItem("icem_npf_thank_you_token", token);

      // 2. Store in cookie with wildcard subdomain so the main website (indiraicem.ac.in) can read it
      const isLocal = window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1";
      const cookieDomain = isLocal ? "" : "; domain=.indiraicem.ac.in";
      document.cookie = `icem_npf_thank_you_token=${token}; path=/${cookieDomain}; max-age=120; Secure; SameSite=Lax`;

      // 3. Set redirect URL: main website in production, local origin for development
      const origin = isLocal ? window.location.origin : "https://indiraicem.ac.in";
      const redirectUrl = encodeURIComponent(`${origin}/thank-you?npf_token=${encodeURIComponent(token)}`);

      return `https://widgets.nopaperforms.com/register?&r=${redirectUrl}&w=9fa0f32fe4f405fa68dc3df39ef6a11b`;
    }
    return "https://widgets.nopaperforms.com/register?&r=https://indiraicem.ac.in/thank-you/&w=9fa0f32fe4f405fa68dc3df39ef6a11b";
  }, []);

  const [showSkeleton, setShowSkeleton] = useState(true);
  const [message, setMessage] = useState("Loading form...");
  const timerRef = useRef(null);

  const handleIframeLoad = () => {
    setShowSkeleton(false);
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
  };

  useEffect(() => {
    timerRef.current = setTimeout(() => {
      if (showSkeleton) {
        setMessage("NPF form not supported on this domain");
      }
    }, 5000);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [showSkeleton]);

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
          timeoutId = setTimeout(() => setIsDeleting(true), 1500);
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
      className="relative px-4 md:px-8 lg:px-16 pt-12 pb-16 min-h-[580px] bg-cover bg-right md:bg-center bg-no-repeat text-white flex items-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <style>{`
        ::selection {
          background-color: #003c84;
          color: #fff8f0;
        }
        @keyframes blink {
          50% { opacity: 0; }
        }
        .typewriter-cursor {
          animation: blink 0.7s infinite;
        }
      `}</style>

      {/* Modern Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/40 z-10"></div>

      {/* Content */}
      <div className="flex flex-col lg:flex-row items-center justify-between z-20 w-full gap-12 relative">
        {/* Left Text */}
        <div className="w-full lg:w-7/12 text-center lg:text-left space-y-6">
          <p className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight">
            India’s Top AICTE-Approved   {" "}
            <span className="text-[#003c84]">MCA</span> Programme for Future Technologists
          </p>



          <div className="space-y-4">
            <p className="text-lg md:text-xl text-gray-200">
              2 Decades of Excellence | 100% Placement Assistance | SPPU Affiliated            </p>
            <div className="inline-block px-4 py-2 bg-[#003c84]/20 border border-[#003c84]/30 rounded-full">
              <span className="text-[#003c84] font-bold text-sm sm:text-base tracking-wide">
                Admissions Open 2026              </span>
            </div>
          </div>

          {/* Apply Now Button */}
          <div className="mt-8 text-center lg:text-left hidden md:block">
            <button className="relative inline-flex items-center group text-lg font-semibold text-white">
              <span className="relative z-10 flex items-center gap-2 px-8 py-3 bg-[#003c84] hover:bg-[#278da4] rounded-full transition-all duration-300 ease-in-out shadow-lg hover:shadow-[#003c84]/35">
                Apply Now
                <FaLongArrowAltRight className="text-white text-xl transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
              </span>
            </button>
          </div>
        </div>

        {/* Right Form */}
        <div className="w-full lg:w-5/12 flex justify-center lg:justify-end">
          <div
            className="p-4 w-full max-w-md shadow-2xl rounded-2xl relative bg-white text-black min-h-[530px]"
          >
            <h3 className="text-lg font-bold text-center mb-2 text-[#003c84]">
              Enquire Now
            </h3>
            {showSkeleton && (
              <div className="absolute inset-x-4 top-14 bottom-4 bg-gray-100 rounded-lg p-4 animate-pulse z-10 flex flex-col justify-center items-center">
                <div className="space-y-4 w-full">
                  <div className="h-4 bg-gray-300 rounded w-3/4 mx-auto"></div>
                  <div className="h-4 bg-gray-300 rounded w-1/2 mx-auto"></div>
                  <div className="h-8 bg-gray-300 rounded w-full"></div>
                  <div className="h-8 bg-gray-300 rounded w-full"></div>
                  <div className="h-8 bg-gray-300 rounded w-full"></div>
                </div>
                <div className={`mt-4 text-center text-sm font-semibold ${message === "Loading form..." ? "text-gray-500" : "text-red-500"}`}>
                  {message}
                </div>
              </div>
            )}
            <iframe
              src={iframeSrc}
              width="100%"
              height="490"
              frameBorder="0"
              allowFullScreen
              title="NPF Enquiry Form"
              className="rounded-lg overflow-hidden"
              scrolling="no"
              style={{ overflow: "hidden" }}
              onLoad={handleIframeLoad}
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MechHero;

import React, { useState, useRef, useEffect } from "react";
import { LOGO, NAV_ITEMS } from "../constants";


const Navbar: React.FC = () => {

  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("apropos");
  const [isOpen, setIsOpen] = useState(false);
  const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const activeEl = containerRef.current.querySelector<HTMLButtonElement>(
        `button[data-id="${active}"]`
      );
      if (activeEl) {
        const parentRect = containerRef.current.getBoundingClientRect();
        const rect = activeEl.getBoundingClientRect();
        setUnderlineStyle({
          left: rect.left - parentRect.left,
          width: rect.width,
        });
      }
    }
  }, [active, isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 text-white font-bold font-mulish">
      <div
        className={
          "max-w-7xl mx-auto px-4 py-4 flex items-center justify-between border-white/30 border-b-2 transition-colors duration-500 " +
          (scrolled ? "bg-black/50 backdrop-blur-md" : "bg-transparent")
        }
      >
        <img src={LOGO} alt="Logo" className="h-8 md:h-10 w-auto" />
        <div
          ref={containerRef}
          className="hidden md:flex items-center space-x-8 relative"
        >
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              data-id={item.id}
              onClick={() => setActive(item.id)}
              className={`relative pb-1 transition-colors ${active === item.id
                ? "text-white"
                : "text-gray-300 hover:text-white"
                }`}
            >
              {item.label}
            </button>
          ))}
          <span
            className="absolute top-13 h-[2px] bg-white transition-all duration-300"
            style={{
              left: underlineStyle.left,
              width: underlineStyle.width,
            }}
          />
          <button className="hidden md:block bg-blue-500 hover:bg-blue-600 px-4 py-1 rounded-full text-white font-medium">
            Réservé
          </button>
            <button className="ml-4 text-white hover:text-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
        </div>
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-7 h-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-7 h-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden bg-black/80 backdrop-blur-md px-6 py-4 space-y-4">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActive(item.id);
                setIsOpen(false);
              }}
              className={`block w-full text-left text-lg py-2 ${active === item.id
                ? "text-white"
                : "text-gray-300 hover:text-white"
                }`}
            >
              {item.label}
            </button>
          ))}
          <button className="w-full bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg text-white font-medium">
            Réservé
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

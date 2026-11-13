import { useState } from "react";
import Logo from "../assets/HG-Logo.png";

export default function Navbar({ activeSection, scrollToSection }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-stone-50/95 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div
            className="flex items-center cursor-pointer"
            onClick={() => scrollToSection("home")}
          >
            <img
              src={Logo}
              alt="HavenGuard Logo"
              className="w-16 h-16 object-contain"
            />
            <div>
              <span className="font-extrabold text-lg text-emerald-950 tracking-wide block leading-none">
                HAVENGUARD
              </span>
              <span className="text-[10px] font-semibold text-stone-600 uppercase tracking-widest block mt-1">
                Home Care Services
              </span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            {["home", "services", "why-us", "contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                aria-current={activeSection === item ? "page" : undefined}
                className={`capitalize text-sm border-b-2 pb-1 transition-colors duration-200 ${
                  activeSection === item
                    ? "text-emerald-900 border-emerald-700 font-bold"
                    : "text-stone-600 border-transparent hover:text-emerald-800"
                }`}
              >
                {item.replace("-", " ")}
              </button>
            ))}
          </nav>

          <div className="hidden md:flex items-center">
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-sm px-5 py-2.5 transition-colors duration-200"
            >
              Request Care
            </button>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-emerald-900 hover:text-emerald-700 p-2"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  mobileMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-stone-50 border-b border-stone-200 px-4 pt-3 pb-6 space-y-3">
          {["home", "services", "why-us", "contact"].map((item) => (
            <button
              key={item}
              onClick={() => {
                scrollToSection(item);
                setMobileMenuOpen(false);
              }}
              aria-current={activeSection === item ? "page" : undefined}
              className={`block w-full text-left capitalize px-3 py-2 text-base font-medium transition-colors ${
                activeSection === item
                  ? "bg-emerald-100 text-emerald-950"
                  : "text-stone-700 hover:bg-emerald-50 hover:text-emerald-900"
              }`}
            >
              {item.replace("-", " ")}
            </button>
          ))}
          <button
            onClick={() => {
              scrollToSection("contact");
              setMobileMenuOpen(false);
            }}
            className="w-full mt-2 bg-emerald-800 hover:bg-emerald-900 text-white font-bold py-3 text-center border border-emerald-800 transition-colors block"
          >
            Request Care
          </button>
        </div>
      )}
    </header>
  );
}

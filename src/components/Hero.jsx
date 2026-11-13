// To use your own local image:
// 1. Place your image in src/assets/ (e.g., src/assets/hero-bg.jpg)
// 2. Uncomment the line below and replace the HERO_BG_IMAGE URL with heroBg
// import heroBg from '../assets/hero-bg.jpg';

const HERO_BG_IMAGE =
  "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=1920&auto=format&fit=crop";

export default function Hero({ scrollToSection }) {
  return (
    <section
      id="home"
      className="relative min-h-[85vh] flex items-center justify-center bg-emerald-950 overflow-hidden"
    >
      {/* Background Image */}
      <img
        src={HERO_BG_IMAGE}
        alt="Compassionate Home Care Support"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Solid Dark Overlay for Text Readability */}
      <div className="absolute inset-0 bg-emerald-950/75"></div>

      {/* Centered Hero Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center space-y-6">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
          Compassionate Support, <br />
          <span className="text-emerald-300">Protected Dignity.</span>
        </h1>

        <p className="text-lg text-stone-100 max-w-2xl mx-auto leading-relaxed">
          Professional, reliable, and specialized in-home care, geriatric
          support, and health monitoring delivered right in the comfort of home
          across Port Harcourt.
        </p>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => scrollToSection("contact")}
            className="w-full sm:w-auto bg-emerald-700 hover:bg-emerald-600 text-white font-extrabold text-base px-8 py-4 border border-emerald-600 transition-colors duration-200"
          >
            Request Care Now
          </button>

          <button
            onClick={() => scrollToSection("services")}
            className="w-full sm:w-auto bg-stone-50/95 hover:bg-white text-emerald-950 border border-stone-200 font-semibold text-base px-8 py-4 transition-colors duration-200"
          >
            View Our Services
          </button>
        </div>

        {/* Key Highlights Bar */}
        <div className="pt-8 mt-8 border-t border-white/25 grid grid-cols-3 gap-3 max-w-xl mx-auto">
          <div>
            <p className="sm:not-last-of-type:text-2xl text-lg font-black text-white">24/7</p>
            <p className="text-xs text-stone-200 font-medium mt-0.5">
              Care Available
            </p>
          </div>
          <div>
            <p className="sm:text-2xl text-sm font-black text-white">UK 15</p>
            <p className="text-xs text-stone-200 font-medium mt-0.5">
              Standards Certified
            </p>
          </div>
          <div>
            <p className="sm:text-2xl text-sm font-black text-white">Port-Harcourt</p>
            <p className="text-xs text-stone-200 font-medium mt-0.5">
              Local Private Support
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

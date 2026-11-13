export default function Footer({ scrollToSection }) {
  return (
    <footer className="bg-emerald-950 border-t border-emerald-900 py-12 text-stone-300 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p className="font-bold text-white text-sm">
            HavenGuard Home Care
          </p>
          <p className="mt-1 text-stone-400">
            Compassionate Support, Protected Dignity.
          </p>
        </div>

        <div className="flex gap-6">
          {["home", "services", "why-us", "contact"].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="capitalize hover:text-emerald-300 transition-colors"
            >
              {item.replace("-", " ")}
            </button>
          ))}
        </div>

        <p className="text-stone-400">
          © {new Date().getFullYear()} HavenGuard Home Care. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}

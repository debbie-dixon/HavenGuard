import { useState } from "react";
import Navbar from "./components/NavBar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import WhyUs from "./components/WhyUs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (id) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-stone-50 text-stone-800 font-sans antialiased selection:bg-emerald-200 selection:text-emerald-950">
      <Navbar activeSection={activeSection} scrollToSection={scrollToSection} />

      <main>
        <Hero scrollToSection={scrollToSection} />

        <Services scrollToSection={scrollToSection} />

        <WhyUs />

        <Contact />
      </main>

      <Footer scrollToSection={scrollToSection} />
    </div>
  );
}

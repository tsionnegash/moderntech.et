import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MobileMoney from "@/components/MobileMoney";
import Services from "@/components/Services";
import Partners from "@/components/Partners";
import About from "@/components/About";
import Career from "@/components/Career";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SignalTowerBackground from "@/components/SignalTowerBackground";

const Index = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check for system preference or saved preference
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  return (
    <div className="min-h-screen relative">
      <SignalTowerBackground />
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />
      <main className="relative z-10">
        <Hero />
        <div className="bg-background">
          <MobileMoney />
          <Services />
          <Partners />
          <About />
          <Career />
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;

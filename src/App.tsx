import React from "react";
import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/ui/Hero";
import MobileMoney from "@/components/ui/MobileMoney";
import Services from "@/components/ui/Services";
import Partners from "@/components/ui/Partners";
import About from "@/components/ui/About"; // ← About section included
import Career from "@/components/ui/Career";
import Contact from "@/components/ui/Contact";
import Footer from "@/components/ui/Footer";
import SignalTowerBackground from "@/components/ui/SignalTowerBackground";
import { Toaster } from "@/components/ui/toaster";

export default function App() {
  return (
    <>
      <div className="relative min-h-screen overflow-x-hidden">
        {/* Full-screen animated signal tower background */}
        <SignalTowerBackground />

        {/* Content layered on top */}
        <div className="relative z-10">
          <Navbar />

          <main>
            <Hero />

            {/* All sections with theme-aware background */}
            <div className="bg-background">
              <MobileMoney />
              <Services />
              <Partners />
              <About /> {/* ← Perfect placement */}
              <Career />
              <Contact />
            </div>
          </main>

          <Footer />
        </div>

        {/* Toast notifications */}
        <Toaster />
      </div>
    </>
  );
}

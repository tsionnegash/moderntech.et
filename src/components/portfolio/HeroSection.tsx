import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { ExternalLink, Youtube } from "lucide-react";
import { useState, useEffect } from "react";

interface HeroData {
  firstName: string;
  lastName: string;
  title1: string;
  title2: string;
  tagline: string;
  photoUrl: string;
}

export function HeroSection() {
  const [heroData, setHeroData] = useState<HeroData>({
    firstName: "The Daily",
    lastName: "Momentum",
    title1: "A Life Full of Awareness",
    title2: "Founded by Yididya",
    tagline:
      "Welcome to The Daily Momentum — a space built to help you take control of your life, find your rhythm, and create momentum that never fades.this brand stands for growth, self-discipline, and conscious living.Whether you’re here to build structure in your life, elevate your mindset, or create clarity in your goals — you’re in the right place.Because real change doesn’t happen by chance — it happens when you move with awareness.",
    photoUrl: "",
  });

  useEffect(() => {
    const savedHeroData = localStorage.getItem("yididya-hero");
    if (savedHeroData) {
      setHeroData(JSON.parse(savedHeroData));
    }
  }, []);
  const scrollToSection = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const openYouTube = () => {
    window.open("https://www.youtube.com/@itsyidi", "_blank");
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background to-background/80 pt-24"
    >
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 animate-orbit opacity-20">
          <div className="w-8 h-8 bg-pink text-white rounded-full flex items-center justify-center text-xs font-bold">
            LI
          </div>
        </div>
        <div
          className="absolute top-3/4 right-1/4 animate-orbit opacity-20"
          style={{ animationDelay: "-5s" }}
        >
          <div className="w-8 h-8 bg-golden text-white rounded-full flex items-center justify-center text-xs font-bold">
            YT
          </div>
        </div>
        <div
          className="absolute top-1/2 left-3/4 animate-orbit opacity-20"
          style={{ animationDelay: "-10s" }}
        >
          <div className="w-8 h-8 bg-pink text-white rounded-full flex items-center justify-center text-xs font-bold">
            TT
          </div>
        </div>
        <div
          className="absolute top-1/3 right-1/3 animate-orbit opacity-20"
          style={{ animationDelay: "-15s" }}
        >
          <div className="w-8 h-8 bg-golden text-white rounded-full flex items-center justify-center text-xs font-bold">
            IG
          </div>
        </div>
      </div>

      {/* Theme Toggle */}
      <div className="absolute top-6 right-6 z-10">
        <ThemeToggle />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 text-center z-10 relative">
        <div className="animate-fade-in">
          <Avatar className="w-32 h-32 mx-auto mb-8 golden-glow ring-4 ring-golden/30">
            {heroData.photoUrl ? (
              <AvatarImage
                src={heroData.photoUrl}
                alt={`${heroData.firstName} ${heroData.lastName}`}
              />
            ) : (
              <AvatarFallback className="text-4xl font-bold bg-gradient-to-br from-pink to-golden text-white">
                {heroData.firstName[0]}
                {heroData.lastName[0]}
              </AvatarFallback>
            )}
          </Avatar>

          <h1 className="text-2xl md:text-5xl font-bold mb-4">
            <span className="pink-text">{heroData.firstName}</span>{" "}
            <span className="golden-text">{heroData.lastName}</span>
          </h1>

          <div className="text-xl md:text-xl text-muted-foreground mb-6 space-y-2">
            <div>{heroData.title1}</div>
            <div>{heroData.title2}</div>
          </div>

          <p className="text-base text-muted-foreground mb-8 w-full px-8">
            {heroData.tagline}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={openYouTube}
              className="bg-golden hover:bg-golden/90 text-black font-semibold px-8 py-3 golden-glow"
            >
              <Youtube className="mr-2 h-5 w-5" />
              Explore my work
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              onClick={() =>
                window.open(
                  "https://ye-buna.com/Yididya?ref=product_detail&product=6749b9554a4cd_1732884821_77356641_Yididya",
                  "_blank"
                )
              }
              className="pink-glow border-pink/20 hover:border-pink/40 hover:bg-pink/10"
            >
              Shop the planner
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

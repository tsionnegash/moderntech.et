import { Navigation } from "@/components/portfolio/Navigation";
import { HeroSection } from "@/components/portfolio/HeroSection";
import { AboutSection } from "@/components/portfolio/AboutSection";
import { VideosSection } from "@/components/portfolio/VideosSection";
import { ProductsSection } from "@/components/portfolio/ProductsSection";
import { PersonalCoachingSection } from "@/components/portfolio/PersonalCoachingSection";
import { ContactSection } from "@/components/portfolio/ContactSection";
import { AdminPanel } from "@/components/portfolio/AdminPanel";
import { Footer } from "@/components/portfolio/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <VideosSection />
        <ProductsSection />
        <PersonalCoachingSection />
        <ContactSection />
        <AdminPanel />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { useState, useEffect } from "react";

interface AboutData {
  bio1: string;
  bio2: string;
  skills: string[];
  education: string[];
}

export function AboutSection() {
  const [aboutData, setAboutData] = useState<AboutData>({
    bio1: "Hi, I'm Yididya, the founder and creative force behind The Daily Momentum. I believe awareness is the first step toward a truly fulfilling life — because when you're aware of who you are, what you want, and what's holding you back, everything changes. Through my work, I guide people — especially women — to rebuild discipline, clarity, and consistency so they can finally become the person they keep imagining.",
    bio2: "But this isn't just about motivation. It's about building systems that last — in your habits, your mindset, and your daily life. I've also helped brands and businesses find their voice and momentum through strategic marketing and creative direction — because purpose and strategy go hand in hand. My community now reaches over 160,000 active members across all social platforms, with 5,600+ engaged members inside our growing online circle. We don't just talk about growth — we live it.",
    skills: [
      "Self-Development Coaching",
      "Marketing Strategy & Creative Direction",
      "Mindset & Habits",
      "Digital Marketing",
      "Brand Strategy",
      "Community Building",
      "Content Creation",
      "Leadership Development",
    ],
    education: [
      "Strategic Marketing",
      "Creative Direction",
      "Personal Development",
      "Community Leadership",
    ],
  });

  useEffect(() => {
    const savedAboutData = localStorage.getItem("yididya-about");
    if (savedAboutData) {
      setAboutData(JSON.parse(savedAboutData));
    }
  }, []);
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          About <span className="pink-text">Me</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              {aboutData.bio1}
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              {aboutData.bio2}
            </p>

            {/* YouTube Story Button */}
            <div className="mt-8">
              <Button
                onClick={() =>
                  window.open(
                    "https://www.youtube.com/playlist?list=PLpMTNFUYiwa0mkhAiyJ58UYEtSGK8a50G",
                    "_blank"
                  )
                }
                className="bg-golden hover:bg-golden/90 text-black font-semibold px-6 py-3 golden-glow"
              >
                Learn more about my story
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">
                Education & Training
              </h3>
              <div className="flex flex-wrap gap-2">
                {aboutData.education.map((item, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="bg-pink/10 text-pink border-pink/20"
                  >
                    {item}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          <Card className="pink-glow">
            <CardHeader>
              <CardTitle className="golden-text">Core Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-3">
                {aboutData.skills.map((skill, index) => (
                  <div
                    key={index}
                    className="p-3 bg-gradient-to-r from-pink/5 to-golden/5 rounded-lg border border-pink/20 hover:border-golden/30 transition-colors"
                  >
                    <span className="text-sm font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

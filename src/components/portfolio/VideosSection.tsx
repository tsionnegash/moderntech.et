import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, MessageSquare, Star, ExternalLink } from "lucide-react";
import { useEffect, useState } from "react";

interface Video {
  id: string;
  title: string;
  url: string;
  thumbnail: string;
}

export function VideosSection() {
  const [videos, setVideos] = useState<Video[]>([]);

  useEffect(() => {
    const savedVideos = localStorage.getItem("yididya-videos");
    if (savedVideos) {
      setVideos(JSON.parse(savedVideos));
    } else {
      // Default videos
      const defaultVideos: Video[] = [
        {
          id: "1",
          title: "Join a Growing Community",
          url: "https://t.me/theDailyMomentum",
          thumbnail: "/placeholder.svg",
        },
        {
          id: "2",
          title: "Instagram Community",
          url: "https://www.instagram.com/itsmeyidi/",
          thumbnail: "/placeholder.svg",
        },
        {
          id: "3",
          title: "YouTube Channel",
          url: "https://www.youtube.com/@itsyidi",
          thumbnail: "/placeholder.svg",
        },
      ];
      setVideos(defaultVideos);
    }
  }, []);

  const openVideo = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <section id="videos" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Community & <span className="pink-text">Testimonials</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Join a growing community of over 160,000 members who are building a
            life full of awareness and action. Inside our private circle, you'll
            find real conversations, shared reflections, and transformation
            stories that remind you: you're not alone in your journey.
          </p>
          <p className="text-2xl font-semibold golden-text mb-10">
            Because growth is better when it's shared.
          </p>

          <Button
            onClick={() =>
              window.open("https://t.me/+l29gjqbKiYZhMzY0", "_blank")
            }
            className="bg-pink hover:bg-pink/90 text-white font-bold px-8 py-3 text-lg"
          >
            <Users className="mr-2 h-5 w-5" />
            Join The Daily Momentum Community
          </Button>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Community Stats */}
          <Card className="golden-glow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-6 w-6 text-golden" />
                Community Growth
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-lg"> Members</span>
                  <Badge className="bg-pink text-white text-lg px-4 py-1">
                    2000+
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-lg">Total Views</span>
                  <Badge className="bg-golden text-black text-lg px-4 py-1">
                    2.5M+
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-lg"> Most Active Day</span>
                  <Badge className="bg-pink/20 text-pink text-lg px-4 py-1">
                    Monday new week, new energy!
                  </Badge>
                </div>
                <div className="pt-4 border-t">
                  <p className="text-sm text-gray-500">
                    ✦ Daily discussions & reflections
                    <br />
                    ✦ Weekly Q&A sessions
                    <br />✦ Monthly challenges & accountability
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Testimonials */}
          <Card className="pink-glow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="h-6 w-6 text-pink" />
                Testimonies
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {/* Testimonial */}
                <div className="border-l-4 border-golden pl-4 py-2">
                  <div className="flex items-center gap-2 mb-2">
                    <Star className="h-4 w-4 text-golden fill-golden" />
                    <Star className="h-4 w-4 text-golden fill-golden" />
                    <Star className="h-4 w-4 text-golden fill-golden" />
                    <Star className="h-4 w-4 text-golden fill-golden" />
                    <Star className="h-4 w-4 text-golden fill-golden" />
                  </div>
                  <h4 className="font-bold text-lg mb-2">Kidist from UK</h4>
                  <blockquote className="text-muted-foreground italic space-y-3">
                    <p>
                      You are a great coach, and I truly appreciate your
                      guidance especially when you encouraged me to take the
                      exam. At the time, I had no comment to give, but inside, I
                      knew I hadn't shown you any big change. What you didn't
                      see was that I was struggling with a deep issue that
                      impacted my future.
                    </p>
                    <p>
                      Now, things are moving forward. I'm taking lessons,
                      becoming more aware of myself, and making real progress.
                      Your support played a big role in helping me get to this
                      point. Thanks to you, I've found the strength to grow and
                      take action.
                    </p>
                    <p>
                      I'm even planning to prepare a garden where I can enjoy
                      peace and maybe see butterflies 🦋 a symbol of the
                      transformation I'm going through. I'm also considering
                      joining a group coaching program so I can stay on track
                      and do everything in time.
                    </p>
                    <p>
                      Since Grade 8, one of my biggest fears was failure
                      especially in relationships and personal life. That fear
                      held me back, but now I've learned so much. It's my turn
                      to apply those lessons, focus on my growth, and rise into
                      the higher version of myself.
                    </p>
                  </blockquote>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        {/* Bottom CTA */}
        <div className="text-center mt-16 pt-8 border-t">
          <p className="text-lg text-muted-foreground mb-6">
            Ready to join a community that grows together?Welcome to Daily
            Momentum! 🌟 channel is dedicated to helping you stay productive
            focused, and motivated. Get daily insights, practical tips, and a
            supportive community to keep you moving forward.
          </p>
          <Button
            onClick={() =>
              window.open("https://t.me/theDailyMomentum", "_blank")
            }
            className="bg-golden hover:bg-golden/90 text-black font-bold px-8 py-3 text-lg"
          >
            <Users className="mr-2 h-5 w-5" />
            Join Our Telegram channel
          </Button>
        </div>
      </div>
    </section>
  );
}

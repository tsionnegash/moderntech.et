import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Mail,
  MessageCircle,
  Instagram,
  Youtube,
  Linkedin,
  Send,
} from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const socialLinks = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/yididyafantahun/",
    class: "bg-blue-600 hover:bg-blue-700",
  },
  {
    icon: MessageCircle,
    label: "Telegram",
    url: "https://t.me/theDailyMomentum",
    class: "bg-blue-500 hover:bg-blue-600",
  },
  {
    icon: Instagram,
    label: "Instagram",
    url: "https://www.instagram.com/itsmeyidi/",
    class:
      "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600",
  },
  {
    icon: Youtube,
    label: "YouTube",
    url: "https://www.youtube.com/@itsyidi",
    class: "bg-red-600 hover:bg-red-700",
  },
  {
    icon: Send,
    label: "TikTok",
    url: "https://tiktok.com/@itsmeyidi",
    class: "bg-black hover:bg-gray-800",
  },
];

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Create mailto link with form data
    const subject = `Contact from ${formData.name}: ${formData.subject}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;

    // Direct Gmail URL
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=its.me.yidi@gmail.com&su=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.open(gmailUrl, "_blank");

    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

    toast({
      title: "Opening Gmail...",
      description: "Opening Gmail compose window.",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Get In <span className="golden-text">Touch</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="pink-glow">
            <CardHeader>
              <CardTitle>Send me a message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <Input
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <Input
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
                <Button
                  type="submit"
                  className="w-full bg-golden hover:bg-golden/90 text-black font-semibold"
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Send Message via Gmail
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Social Links */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Connect with me</h3>
            <p className="text-muted-foreground mb-8">
              Whether you're looking for coaching, collaboration, or creative
              strategy — I'd love to hear from you. Let's create something
              powerful together.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {socialLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <Button
                    key={index}
                    asChild
                    className={`${link.class} text-white hover-scale h-12`}
                  >
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <Icon className="h-5 w-5" />
                      {link.label}
                    </a>
                  </Button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

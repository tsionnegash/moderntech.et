import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { CheckCircle } from "lucide-react";
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";

interface NotesData {
  notes: string;
}

export function PersonalCoachingSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [notesData, setNotesData] = useState<NotesData>({
    notes:
      "Additional coaching information and notes will appear here. This section can be edited from the Admin panel.",
  });
  const { toast } = useToast();

  useEffect(() => {
    const savedNotes = localStorage.getItem("yididya-notes");
    if (savedNotes) {
      setNotesData(JSON.parse(savedNotes));
    }
  }, []);

  // Function to scroll to registration form
  const scrollToRegistrationForm = () => {
    const element = document.getElementById("registration-form");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Create mailto link with form data
    const subject = `Registration - ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`;

    // Direct Gmail URL - Opens Gmail with your email pre-filled
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=its.me.yidi@gmail.com&su=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    // Open in new tab
    window.open(gmailUrl, "_blank");

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });

    toast({
      title: "Opening Gmail...",
      description: "Gmail will open with your message ready to send.",
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
    <section id="personal-coaching" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Work With <span className="pink-text">Me</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* 1:1 Self-Development Coaching */}
          <Card className="pink-glow">
            <CardHeader>
              <CardTitle className="golden-text">
                1:1 Self-Development Coaching
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed mb-4">
                For the ones who want more than motivation — you want
                transformation. In my coaching, we dive deep into mindset,
                habits, structure, and clarity. I help you reconnect with
                yourself, rebuild your focus, and take control of your
                direction.
              </p>
              <p className="text-muted-foreground leading-relaxed font-semibold mb-4">
                This isn't therapy — it's a strategy for your life.
              </p>
              <p className="text-muted-foreground whitespace-pre-wrap leading-relaxed mb-6">
                {notesData.notes}
              </p>
              {/* Contact Me Button */}
              <Button
                onClick={() =>
                  window.open(
                    "https://unmarred-deposit-5e6.notion.site/3-Month-Online-Productivity-Coaching-Program-1b85ec147f41806f9945c413a681d1ef",
                    "_blank"
                  )
                }
                className="w-full bg-golden hover:bg-golden/90 text-black font-semibold"
              >
                Apply for coaching
              </Button>
            </CardContent>
          </Card>

          {/* Marketing Strategy & Creative Direction */}
          <Card className="golden-glow">
            <CardHeader>
              <CardTitle>Marketing Strategy & Creative Direction</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed mb-4">
                I work with companies and entrepreneurs who want more than just
                aesthetics — they want impact. Together, we refine your message,
                build your identity, and create a brand strategy that connects
                deeply with your audience.
              </p>
              <p className="text-muted-foreground leading-relaxed font-semibold mb-6">
                If you're ready to transform your business the same way you'd
                transform your life — I'm here to guide that journey.
              </p>
              {/* Contact Me Button */}
              <Button
                onClick={scrollToRegistrationForm}
                className="w-full bg-golden hover:bg-golden/90 text-black font-semibold"
              >
                Contact Me for Marketing
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Registration Form Section */}
        <div id="registration-form" className="max-w-2xl mx-auto">
          <Card className="pink-glow">
            <CardHeader>
              <CardTitle className="text-center">
                Register Your Interest
              </CardTitle>
              <p className="text-muted-foreground text-center">
                Join our community of 160,000+ members building a life full of
                awareness
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 000-0000"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="message">Tell me about your goals</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="What growth do you want for your brand?"
                    rows={4}
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-pink hover:bg-pink/90 text-white font-semibold"
                >
                  Submit Registration
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  I'll review your information and get back to you within 24-48
                  hours
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

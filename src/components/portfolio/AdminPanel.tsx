import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { useState, useEffect } from "react";
import { LogOut, Moon, Sun, User, Lock } from "lucide-react";

export function AdminPanel() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  const [heroData, setHeroData] = useState({
    firstName: "The Daily",
    lastName: "Momentum",
    title1: "A Life Full of Awareness",
    title2: "Founded by Yididya",
    tagline:
      "A space built to help you take control of your life, find your rhythm, and create momentum that never fades. This brand stands for growth, self-discipline, and conscious living. Real change doesn't happen by chance — it happens when you move with awareness.",
    photoUrl: "",
  });

  const [aboutData, setAboutData] = useState({
    bio1: "Hi, I'm Yididya, the founder and creative force behind The Daily Momentum. I believe awareness is the first step toward a truly fulfilling life — because when you're aware of who you are, what you want, and what's holding you back, everything changes. Through my work, I guide people — especially women — to rebuild discipline, clarity, and consistency so they can finally become the person they keep imagining.",
    bio2: "But this isn't just about motivation. It's about building systems that last — in your habits, your mindset, and your daily life. I've also helped brands and businesses find their voice and momentum through strategic marketing and creative direction — because purpose and strategy go hand in hand. My community now reaches over 160,000 active members across all social platforms with 5,600+ engaged.",
    skills: [
      "Self-Development Coaching",
      "Marketing Strategy & Creative Direction",
      "Mindset & Habits",
      "Digital Marketing",
      "Brand Strategy",
      "Community Building",
    ],
    education: [
      "Strategic Marketing",
      "Creative Direction",
      "Personal Development",
      "Community Leadership",
    ],
  });

  const [products, setProducts] = useState([
    {
      id: "1",
      title: "The Day One Journal & Planner",
      description:
        "A tool designed to help you start — and keep going. The Day One Journal and Planner helps you turn awareness into action, one page at a time. Built for ambitious people ready to take ownership of their time, mindset, and growth. Every section is intentional: from planning your year to reflecting on your week — so you can live every day with clarity and focus.",
      price: "Contact for Price",
      image: "/placeholder.svg",
      hasCoaching: false,
    },
  ]);

  const { toast } = useToast();

  // Check login status on component mount
  useEffect(() => {
    const savedLogin = localStorage.getItem("admin-logged-in");
    if (savedLogin === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  // Load saved data on component mount
  useEffect(() => {
    if (isLoggedIn) {
      const savedHeroData = localStorage.getItem("yididya-hero");
      if (savedHeroData) {
        setHeroData(JSON.parse(savedHeroData));
      }

      const savedAboutData = localStorage.getItem("yididya-about");
      if (savedAboutData) {
        setAboutData(JSON.parse(savedAboutData));
      }

      const savedProducts = localStorage.getItem("yididya-products");
      if (savedProducts) {
        setProducts(JSON.parse(savedProducts));
      }
    }
  }, [isLoggedIn]);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  // Handle login
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // Simple authentication (you should use proper authentication in production)
    if (email === "admin@thedailymomentum.com" && password === "admin123") {
      setIsLoggedIn(true);
      localStorage.setItem("admin-logged-in", "true");
      toast({
        title: "Login successful!",
        description: "Welcome to the Admin Panel.",
      });
    } else {
      toast({
        title: "Login failed",
        description: "Invalid email or password.",
        variant: "destructive",
      });
    }
  };

  // Handle logout
  const handleLogout = () => {
    setIsLoggedIn(false);
    setEmail("");
    setPassword("");
    localStorage.removeItem("admin-logged-in");
    toast({
      title: "Logged out",
      description: "You have been logged out successfully.",
    });
  };

  // Save Hero Section Data
  const saveHeroData = () => {
    localStorage.setItem("yididya-hero", JSON.stringify(heroData));
    toast({
      title: "Hero section updated!",
      description: "Your changes have been saved.",
    });
  };

  // Save About Section Data
  const saveAboutData = () => {
    localStorage.setItem("yididya-about", JSON.stringify(aboutData));
    toast({
      title: "About section updated!",
      description: "Your changes have been saved.",
    });
  };

  // Save Products Data
  const saveProducts = () => {
    localStorage.setItem("yididya-products", JSON.stringify(products));
    toast({
      title: "Products updated!",
      description: "Your changes have been saved.",
    });
  };

  // Handle Hero Data Changes
  const handleHeroChange = (field: string, value: string) => {
    setHeroData({
      ...heroData,
      [field]: value,
    });
  };

  // Handle About Data Changes
  const handleAboutChange = (field: string, value: string | string[]) => {
    setAboutData({
      ...aboutData,
      [field]: value,
    });
  };

  // Handle Product Changes
  const handleProductChange = (index: number, field: string, value: string) => {
    const updatedProducts = [...products];
    updatedProducts[index] = {
      ...updatedProducts[index],
      [field]: value,
    };
    setProducts(updatedProducts);
  };

  // Login Form
  if (!isLoggedIn) {
    return (
      <section
        id="admin"
        className="py-20 px-4 min-h-screen flex items-center justify-center"
      >
        <div className="container max-w-md mx-auto">
          <Card className="shadow-xl">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Admin Login</CardTitle>
              <p className="text-muted-foreground">
                Enter your credentials to access the admin panel
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <Label
                    htmlFor="email"
                    className="flex items-center gap-2 mb-2"
                  >
                    <User className="h-4 w-4" />
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="admin@thedailymomentum.com"
                    required
                  />
                </div>
                <div>
                  <Label
                    htmlFor="password"
                    className="flex items-center gap-2 mb-2"
                  >
                    <Lock className="h-4 w-4" />
                    Password
                  </Label>
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    required
                  />
                </div>
                <Button type="submit" className="w-full">
                  Sign In
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  // Admin Panel (when logged in)
  return (
    <section
      id="admin"
      className={`py-20 px-4 min-h-screen ${
        darkMode ? "dark bg-gray-900" : ""
      }`}
    >
      <div className="container mx-auto">
        {/* Admin Header */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold">
              Admin <span className="pink-text">Panel</span>
            </h2>
            <p className="text-muted-foreground mt-2">
              Manage your website content
            </p>
          </div>

          <div className="flex gap-3">
            <Button
              variant="outline"
              onClick={toggleDarkMode}
              className="flex items-center gap-2"
            >
              {darkMode ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
              {darkMode ? "Light Mode" : "Dark Mode"}
            </Button>

            <Button
              variant="destructive"
              onClick={handleLogout}
              className="flex items-center gap-2"
            >
              <LogOut className="h-4 w-4" />
              Logout
            </Button>
          </div>
        </div>

        <div className="space-y-12">
          {/* Hero Section Editor */}
          <Card className={darkMode ? "bg-gray-800 border-gray-700" : ""}>
            <CardHeader>
              <CardTitle>Edit Hero Section</CardTitle>
              <p className="text-sm text-muted-foreground">
                Update the main hero section of your website
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    value={heroData.firstName}
                    onChange={(e) =>
                      handleHeroChange("firstName", e.target.value)
                    }
                    placeholder="First Name"
                    className={darkMode ? "bg-gray-700 border-gray-600" : ""}
                  />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    value={heroData.lastName}
                    onChange={(e) =>
                      handleHeroChange("lastName", e.target.value)
                    }
                    placeholder="Last Name"
                    className={darkMode ? "bg-gray-700 border-gray-600" : ""}
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="title1">Title Line 1</Label>
                <Input
                  id="title1"
                  value={heroData.title1}
                  onChange={(e) => handleHeroChange("title1", e.target.value)}
                  placeholder="Title Line 1"
                  className={darkMode ? "bg-gray-700 border-gray-600" : ""}
                />
              </div>
              <div>
                <Label htmlFor="title2">Title Line 2</Label>
                <Input
                  id="title2"
                  value={heroData.title2}
                  onChange={(e) => handleHeroChange("title2", e.target.value)}
                  placeholder="Title Line 2"
                  className={darkMode ? "bg-gray-700 border-gray-600" : ""}
                />
              </div>
              <div>
                <Label htmlFor="tagline">Tagline</Label>
                <Textarea
                  id="tagline"
                  value={heroData.tagline}
                  onChange={(e) => handleHeroChange("tagline", e.target.value)}
                  placeholder="Tagline"
                  rows={4}
                  className={darkMode ? "bg-gray-700 border-gray-600" : ""}
                />
              </div>
              <div>
                <Label htmlFor="photoUrl">Photo URL</Label>
                <Input
                  id="photoUrl"
                  value={heroData.photoUrl}
                  onChange={(e) => handleHeroChange("photoUrl", e.target.value)}
                  placeholder="https://example.com/photo.jpg"
                  className={darkMode ? "bg-gray-700 border-gray-600" : ""}
                />
              </div>
              <Button onClick={saveHeroData} className="w-full">
                Save Hero Section
              </Button>
            </CardContent>
          </Card>

          {/* About Section Editor */}
          <Card className={darkMode ? "bg-gray-800 border-gray-700" : ""}>
            <CardHeader>
              <CardTitle>Edit About Section</CardTitle>
              <p className="text-sm text-muted-foreground">
                Update your bio, skills, and education information
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="bio1">Bio Part 1</Label>
                <Textarea
                  id="bio1"
                  value={aboutData.bio1}
                  onChange={(e) => handleAboutChange("bio1", e.target.value)}
                  placeholder="First part of your bio"
                  rows={4}
                  className={darkMode ? "bg-gray-700 border-gray-600" : ""}
                />
              </div>
              <div>
                <Label htmlFor="bio2">Bio Part 2</Label>
                <Textarea
                  id="bio2"
                  value={aboutData.bio2}
                  onChange={(e) => handleAboutChange("bio2", e.target.value)}
                  placeholder="Second part of your bio"
                  rows={4}
                  className={darkMode ? "bg-gray-700 border-gray-600" : ""}
                />
              </div>
              <div>
                <Label htmlFor="skills">Skills (comma-separated)</Label>
                <Input
                  id="skills"
                  value={aboutData.skills.join(", ")}
                  onChange={(e) =>
                    handleAboutChange("skills", e.target.value.split(", "))
                  }
                  placeholder="Skill 1, Skill 2, Skill 3"
                  className={darkMode ? "bg-gray-700 border-gray-600" : ""}
                />
              </div>
              <div>
                <Label htmlFor="education">Education (comma-separated)</Label>
                <Input
                  id="education"
                  value={aboutData.education.join(", ")}
                  onChange={(e) =>
                    handleAboutChange("education", e.target.value.split(", "))
                  }
                  placeholder="Education 1, Education 2"
                  className={darkMode ? "bg-gray-700 border-gray-600" : ""}
                />
              </div>
              <Button onClick={saveAboutData} className="w-full">
                Save About Section
              </Button>
            </CardContent>
          </Card>

          {/* Products Editor */}
          <Card className={darkMode ? "bg-gray-800 border-gray-700" : ""}>
            <CardHeader>
              <CardTitle>Edit Products</CardTitle>
              <p className="text-sm text-muted-foreground">
                Update your shop products and pricing
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              {products.map((product, index) => (
                <div
                  key={product.id}
                  className={`space-y-4 p-4 border rounded-lg ${
                    darkMode ? "border-gray-700 bg-gray-900" : ""
                  }`}
                >
                  <div>
                    <Label htmlFor={`product-title-${index}`}>
                      Product Title
                    </Label>
                    <Input
                      id={`product-title-${index}`}
                      value={product.title}
                      onChange={(e) =>
                        handleProductChange(index, "title", e.target.value)
                      }
                      placeholder="Product Title"
                      className={darkMode ? "bg-gray-700 border-gray-600" : ""}
                    />
                  </div>
                  <div>
                    <Label htmlFor={`product-description-${index}`}>
                      Description
                    </Label>
                    <Textarea
                      id={`product-description-${index}`}
                      value={product.description}
                      onChange={(e) =>
                        handleProductChange(
                          index,
                          "description",
                          e.target.value
                        )
                      }
                      placeholder="Product Description"
                      rows={4}
                      className={darkMode ? "bg-gray-700 border-gray-600" : ""}
                    />
                  </div>
                  <div>
                    <Label htmlFor={`product-price-${index}`}>Price</Label>
                    <Input
                      id={`product-price-${index}`}
                      value={product.price}
                      onChange={(e) =>
                        handleProductChange(index, "price", e.target.value)
                      }
                      placeholder="Product Price"
                      className={darkMode ? "bg-gray-700 border-gray-600" : ""}
                    />
                  </div>
                  <div>
                    <Label htmlFor={`product-image-${index}`}>Image URL</Label>
                    <Input
                      id={`product-image-${index}`}
                      value={product.image}
                      onChange={(e) =>
                        handleProductChange(index, "image", e.target.value)
                      }
                      placeholder="https://example.com/image.jpg"
                      className={darkMode ? "bg-gray-700 border-gray-600" : ""}
                    />
                  </div>
                </div>
              ))}
              <Button onClick={saveProducts} className="w-full">
                Save Products
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

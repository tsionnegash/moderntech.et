import { motion, AnimatePresence } from "framer-motion";
import { Search, X, Menu } from "lucide-react";
import { useState, useEffect } from "react";
import logo from "@/assets/logo.png";

const navItems = [
  { name: "Home", href: "#home", keywords: ["home", "main", "start"] },
  {
    name: "Mobile Money",
    href: "#mobile-money",
    keywords: ["mobile", "money", "payment", "transfer", "send"],
  },
  {
    name: "Services",
    href: "#services",
    keywords: ["services", "what we do", "offerings"],
  },
  {
    name: "Our Partners",
    href: "#partners",
    keywords: ["partners", "collaboration", "companies"],
  },
  {
    name: "About Us",
    href: "#about",
    keywords: ["about", "who we are", "company", "team"],
  },
  {
    name: "Career",
    href: "#career",
    keywords: ["career", "jobs", "work", "hiring", "employment"],
  },
  {
    name: "Contact",
    href: "#contact",
    keywords: ["contact", "reach", "email", "phone", "message"],
  },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<typeof navItems>([]);
  const [showResults, setShowResults] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);

    if (window.location.hash) {
      const hash = window.location.hash.replace("#", "");
      setTimeout(() => scrollToSection(hash), 300);
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      window.history.pushState(null, "", `#${sectionId}`);
      setActiveSection(sectionId);
      setIsMobileMenuOpen(false);
    }
  };

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const sectionId = href.replace("#", "");
    scrollToSection(sectionId);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.trim()) {
      const filtered = navItems.filter(
        (item) =>
          item.name.toLowerCase().includes(query.toLowerCase()) ||
          item.keywords.some((k) =>
            k.toLowerCase().includes(query.toLowerCase())
          )
      );
      setSearchResults(filtered);
      setShowResults(true);
    } else {
      setSearchResults([]);
      setShowResults(false);
    }
  };

  const handleSearchSubmit = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && searchQuery.trim() && searchResults[0]) {
      const sectionId = searchResults[0].href.replace("#", "");
      scrollToSection(sectionId);
      setIsSearchOpen(false);
      setSearchQuery("");
      setShowResults(false);
    }
  };

  const navigateToResult = (href: string) => {
    const sectionId = href.replace("#", "");
    scrollToSection(sectionId);
    setIsSearchOpen(false);
    setSearchQuery("");
    setShowResults(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 nav-footer-bg ${
        isScrolled ? "backdrop-blur-md shadow-xl" : ""
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="flex items-center gap-2 flex-shrink-0"
          >
            <img
              src={logo}
              alt="ModernTech Technologies PLC"
              className="h-10 w-auto"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => {
              const sectionId = item.href.replace("#", "");
              const isActive = activeSection === sectionId;

              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`relative font-medium text-sm transition-colors duration-300 px-3 py-2 rounded-lg ${
                    isActive
                      ? "text-white bg-white/20"
                      : "text-white/80 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <motion.div
                      layoutId="active-pill"
                      className="absolute inset-0 bg-white/20 rounded-lg -z-10"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </a>
              );
            })}
          </div>

          {/* Right Actions - Only Search & Mobile Menu */}
          <div className="flex items-center gap-4">
            {/* Search Bar */}
            <div className="relative hidden sm:block">
              <AnimatePresence>
                {isSearchOpen && (
                  <motion.div
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: 220, opacity: 1 }}
                    exit={{ width: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute right-10 top-1/2 -translate-y-1/2 origin-right"
                  >
                    <input
                      type="text"
                      placeholder="Search sections..."
                      value={searchQuery}
                      onChange={(e) => handleSearch(e.target.value)}
                      onKeyDown={handleSearchSubmit}
                      autoFocus
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-sm text-white placeholder:text-white/50 outline-none focus:border-white/50 backdrop-blur-sm"
                    />

                    <AnimatePresence>
                      {showResults && searchResults.length > 0 && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="absolute top-full mt-2 right-0 w-full bg-card border border-border rounded-lg shadow-xl overflow-hidden z-50"
                        >
                          {searchResults.map((result) => (
                            <button
                              key={result.name}
                              onClick={() => navigateToResult(result.href)}
                              className="w-full px-4 py-3 text-left text-sm text-foreground hover:bg-accent/20 transition-colors flex items-center gap-3"
                            >
                              <Search className="w-4 h-4 text-muted-foreground" />
                              {result.name}
                            </button>
                          ))}
                        </motion.div>
                      )}
                      {showResults &&
                        searchResults.length === 0 &&
                        searchQuery && (
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="absolute top-full mt-2 right-0 w-full bg-card border border-border rounded-lg shadow-xl p-4 text-center"
                          >
                            <p className="text-sm text-muted-foreground">
                              No results found
                            </p>
                          </motion.div>
                        )}
                    </AnimatePresence>
                  </motion.div>
                )}
              </AnimatePresence>

              <button
                onClick={() => {
                  setIsSearchOpen(!isSearchOpen);
                  if (!isSearchOpen) {
                    setSearchQuery("");
                    setShowResults(false);
                  }
                }}
                className="p-2 rounded-full hover:bg-white/10 transition-colors"
                aria-label="Search"
              >
                {isSearchOpen ? (
                  <X className="w-5 h-5 text-white" />
                ) : (
                  <Search className="w-5 h-5 text-white" />
                )}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-full hover:bg-white/10 md:hidden"
              aria-label="Menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5 text-white" />
              ) : (
                <Menu className="w-5 h-5 text-white" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden border-t border-white/10 mt-2 pb-4"
            >
              <div className="flex flex-col gap-2 pt-4">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="px-4 py-3 text-white/90 hover:text-white hover:bg-white/10 rounded-lg text-center transition-colors"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;

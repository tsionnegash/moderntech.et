import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Clock,
  ChevronDown,
  ArrowRight,
  User,
  Mail,
  Phone,
  FileText,
} from "lucide-react";
import { useState } from "react";

const Career = () => {
  const [expanded, setExpanded] = useState(false);
  const [showForm, setShowForm] = useState(false);

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    cvLink: "",
    message: "",
  });

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  const handleApplyClick = () => {
    setShowForm(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent(
      "Job Application - Telecom Engineer (Nokia Ethiopia)"
    );
    const body = encodeURIComponent(
      `Dear Moderntech Hiring Team,\n\n` +
        `I am applying for the Telecom Engineer position (Nokia Ethiopia).\n\n` +
        `Name: ${formData.name}\n` +
        `Email: ${formData.email}\n` +
        `Phone: ${formData.phone}\n` +
        `${formData.cvLink ? `CV Link: ${formData.cvLink}\n` : ""}` +
        `\nMessage:\n${formData.message}\n\n` +
        `Best regards,\n${formData.name}`
    );

    window.open(
      `mailto:careers@moderntech.et?subject=${subject}&body=${body}`,
      "_blank"
    );

    // Scroll to contact section
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }

    setShowForm(false);
    setFormData({ name: "", email: "", phone: "", cvLink: "", message: "" });
  };

  return (
    <section id="career" className="pt-12 pb-24 bg-background relative">
      <div className="relative mt-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Join Our Team</h2>
          <p className="section-subtitle mx-auto">
            Be part of a team that's transforming the future of telecom services
            in Ethiopia.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card-interactive border border-border overflow-hidden"
          >
            <button
              onClick={handleToggle}
              className="w-full text-left p-6 md:p-8"
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                      Telecom Engineering
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold text-foreground">
                    Telecom Engineers (Nokia Ethiopia)
                  </h3>
                  <div className="flex flex-wrap gap-4 mt-3 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      Addis Ababa, Ethiopia
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      Full-time
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    Posted 4 years ago
                  </p>
                </div>
                <motion.div
                  animate={{ rotate: expanded ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="w-6 h-6 text-muted-foreground" />
                </motion.div>
              </div>
            </button>

            <AnimatePresence>
              {expanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 md:px-8 pb-8 pt-4 border-t border-border">
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      Moderntech Technologies PLC has been contracted by Nokia
                      Network Solution to supply local resources for the ongoing
                      telecom projects in Ethiopia. We are looking for
                      experienced telecom engineers to join our team and
                      contribute to the development and maintenance of critical
                      telecom infrastructure across the country.
                    </p>

                    <h4 className="font-medium text-foreground mb-4 text-lg">
                      Key Responsibilities:
                    </h4>
                    <ul className="space-y-2 mb-8">
                      {[
                        "Installation, commissioning, and integration of Nokia telecom equipment",
                        "Network optimization and troubleshooting",
                        "Site surveys and technical documentation",
                        "Collaboration with Nokia global teams and local stakeholders",
                        "Ensuring compliance with project timelines and quality standards",
                      ].map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-muted-foreground"
                        >
                          <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Apply Now Button */}
                    <motion.button
                      onClick={handleApplyClick}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="inline-flex items-center gap-3 px-8 py-4 bg-accent text-accent-foreground rounded-xl font-bold shadow-lg hover:shadow-xl transition-all"
                    >
                      Apply Now
                      <ArrowRight className="w-5 h-5" />
                    </motion.button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

      {/* Application Form Modal - Back to centered card style (like the first card) */}
      <AnimatePresence>
        {showForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowForm(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="bg-card border border-border rounded-2xl p-6 md:p-8 max-w-lg w-full shadow-2xl max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
                Apply for Telecom Engineer (Nokia Ethiopia)
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-foreground mb-1">
                    <User className="w-4 h-4" />
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-lg border border-border focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-foreground mb-1">
                    <Mail className="w-4 h-4" />
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-lg border border-border focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-foreground mb-1">
                    <Phone className="w-4 h-4" />
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-lg border border-border focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition"
                    placeholder="+251 911 234 567"
                  />
                </div>

                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-foreground mb-1">
                    <FileText className="w-4 h-4" />
                    CV / Resume Link (Optional)
                  </label>
                  <input
                    type="url"
                    value={formData.cvLink}
                    onChange={(e) =>
                      setFormData({ ...formData, cvLink: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-lg border border-border focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition"
                    placeholder="https://drive.google.com/your-cv"
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    Paste a public link to your CV
                  </p>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-1 block">
                    Cover Message
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-lg border border-border focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition resize-none"
                    placeholder="Tell us why you're the perfect fit..."
                  />
                </div>

                <div className="flex gap-4 pt-4">
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 bg-accent text-accent-foreground py-3 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
                  >
                    Open Email to Send Application
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>

                  <button
                    type="button"
                    onClick={() => setShowForm(false)}
                    className="px-6 py-3 border border-border rounded-xl font-medium hover:bg-accent/10 transition"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Career;

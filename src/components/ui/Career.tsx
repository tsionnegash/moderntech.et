import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Clock, ChevronDown, ArrowRight } from "lucide-react";
import { useState } from "react";

const Career = () => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
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

                    {/* Apply Now Button - Sends email with pre-filled CV request */}
                    <motion.a
                      href="mailto:careers@moderntech.et?subject=Application%20-%20Telecom%20Engineer%20(Nokia%20Ethiopia)&body=Dear%20Moderntech%20Hiring%20Team,%0A%0AI%20am%20applying%20for%20the%20Telecom%20Engineer%20position%20(Nokia%20Ethiopia).%0A%0APlease%20find%20my%20CV%20attached.%0A%0ABest%20regards,"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="inline-flex items-center gap-3 px-8 py-4 bg-accent text-accent-foreground rounded-xl font-bold shadow-lg hover:shadow-xl transition-all"
                    >
                      Apply Now
                      <ArrowRight className="w-5 h-5" />
                    </motion.a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Removed the "Don't see your ideal role?" CTA as requested */}
      </div>
    </section>
  );
};

export default Career;

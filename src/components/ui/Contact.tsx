import { motion } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Create mailto link with pre-filled data
    const mailtoLink = `mailto:info@moderntechethiopia.com?subject=${encodeURIComponent(
      formState.subject || "Inquiry from Website"
    )}&body=${encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`
    )}`;

    // Open user's default email client
    window.location.href = mailtoLink;

    // Show success feedback
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);

    // Clear form
    setFormState({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="pt-0 pb-24 relative">
      <div className="relative mt-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle mx-auto">
            Have questions? We're here to help.
          </p>
        </motion.div>

        <div className="max-w-lg mx-auto">
          {/* Compact Interactive Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <form
              onSubmit={handleSubmit}
              className="card-interactive border border-border hover:border-accent/50 p-5"
            >
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-foreground mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      value={formState.name}
                      onChange={(e) =>
                        setFormState({ ...formState, name: e.target.value })
                      }
                      className="input-focus w-full text-sm py-2 px-3"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-foreground mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      value={formState.email}
                      onChange={(e) =>
                        setFormState({ ...formState, email: e.target.value })
                      }
                      className="input-focus w-full text-sm py-2 px-3"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-foreground mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    value={formState.subject}
                    onChange={(e) =>
                      setFormState({ ...formState, subject: e.target.value })
                    }
                    className="input-focus w-full text-sm py-2 px-3"
                    placeholder="How can we help?"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-foreground mb-1">
                    Message
                  </label>
                  <textarea
                    value={formState.message}
                    onChange={(e) =>
                      setFormState({ ...formState, message: e.target.value })
                    }
                    className="input-focus w-full min-h-[80px] resize-none text-sm py-2 px-3"
                    placeholder="Your message..."
                    required
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-primary w-full flex items-center justify-center gap-2 py-2.5 text-sm"
                  disabled={isSubmitted}
                >
                  {isSubmitted ? (
                    <>
                      <CheckCircle className="w-4 h-4" />
                      Sent!
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

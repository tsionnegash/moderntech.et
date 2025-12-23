import { motion } from "framer-motion";
import { ArrowRight, Phone, Mail } from "lucide-react";

const About = () => {
  return (
    <section
      id="about"
      className="pt-12 pb-24 bg-secondary/30 relative scroll-mt-16"
    >
      <div className="mt-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Pioneering Telecom Solutions in Ethiopia
          </h2>
        </motion.div>

        {/* Main Company Description with Small Telecom Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto mb-20"
        >
          <div className="flex flex-col md:flex-row items-start gap-10 bg-card/50 border border-border/50 rounded-2xl p-10 shadow-xl">
            {/* Small Telecom Image - next to the description */}
            <div className="flex-shrink-0">
              <img
                src="https://play-lh.googleusercontent.com/DC4qDArwqrHOwzeI3k1lVaMKaRUPUGR1ruOw5SrTQhw1r2UQfaBougRG-ZnIYovbww_T=w1052-h592-rw"
                alt="Moderntech Technologies Team"
                className="w-80 h-80 object-cover rounded-xl shadow-2xl border border-border/30"
              />
            </div>

            {/* Company Description Text */}
            <div className="flex-1 space-y-6">
              <p className="text-lg text-foreground leading-relaxed">
                <span className="font-bold text-2xl">
                  Moderntech Technologies PLC
                </span>{" "}
                is a locally registered company providing services to telecom
                companies and telecom vendors in import facilitation, reselling
                of telecom products and services, telecom resource visa,
                residency and work permit facilitation, payroll and local tax
                compliance management, and representation of global telecom
                companies as local focal representatives.
              </p>

              <div className="bg-accent/10 border-l-4 border-accent p-6 rounded-r-lg">
                <p className="text-foreground font-medium italic text-xl">
                  "Need a quality Telecom Services?"
                </p>
              </div>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 px-8 py-4 bg-accent text-accent-foreground rounded-xl font-bold shadow-lg hover:shadow-xl transition-all"
              >
                Contact Now
                <ArrowRight className="w-5 h-5" />
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* EVD Section with Image */}
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* EVD Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 md:order-1"
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-border/50 bg-white">
              <img
                src="https://evdsystem.com/wp-content/uploads/2020/02/slids.png"
                alt="Electronic Voucher Distribution (EVD) System"
                className="w-full h-auto object-contain"
              />
            </div>
          </motion.div>

          {/* EVD Description */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 md:order-2 space-y-6"
          >
            <h3 className="text-3xl font-bold text-foreground">
              Our Flagship EVD Solution
            </h3>
            <p className="text-lg text-foreground leading-relaxed">
              Moderntech deals in{" "}
              <span className="font-bold text-accent">EVD software</span> (a
              medium to distribute prepaid recharge voucher distribution with
              EVD system and Mobile POS device) and has become a{" "}
              <span className="font-bold">
                major player in the industry nationwide
              </span>
              .
            </p>
            <ul className="space-y-3">
              {[
                "Secure and efficient digital voucher distribution",
                "Mobile POS integration for merchants",
                "Real-time tracking and reporting",
                "Nationwide coverage with local expertise",
                "Full compliance with regulatory requirements",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>

            <motion.a
              href="#services"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-xl font-bold shadow-lg hover:shadow-xl transition-all mt-6"
            >
              Learn More About EVD
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </div>

        {/* Final Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-24 text-center"
        >
          <h3 className="text-3xl font-bold text-foreground mb-4">
            Ready to Transform Your Telecom Operations?
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
            Whether you need EVD solutions, telecom implementation, or local
            representation, we're here to help.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <motion.a
              href="tel:+251911256838"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-5 bg-accent text-accent-foreground rounded-xl font-bold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-3"
            >
              <Phone className="w-6 h-6" />
              Call Us Now
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-5 border-2 border-accent text-accent rounded-xl font-bold hover:bg-accent hover:text-accent-foreground transition-all"
            >
              Get in Touch
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

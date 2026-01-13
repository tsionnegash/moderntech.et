import { motion } from "framer-motion";
import {
  Smartphone,
  Globe,
  Server,
  Shield,
  Headphones,
  BarChart3,
  ArrowRight,
  RadioTower,
  Wrench,
  Store,
  Megaphone,
} from "lucide-react";
import { useState } from "react";

const services = [
  {
    icon: Smartphone,
    title: "Electronic Voucher Distribution (EVD)",
    shortDescription:
      "Advanced EVD / Voucher Management System for seamless digital airtime distribution.",
    whyModerntech: "Why Moderntech for EVD",
    fullDescription:
      "Electronic Voucher Distribution (EVD), also known as EVD Software or VMS, is one of Moderntech's flagship solutions — delivering one of the most advanced platforms in Ethiopia.",
    benefits: [
      "No production cost of scratch cards",
      "Simple distribution through mobile operators",
      "Minimal lead time – speedy nationwide distribution",
      "Minimal capital outlay – reduced stockholding",
      "Increased stock control – lower or no shrinkage",
      "Convenience in remote areas across Ethiopia",
      "Ease of use for merchants and consumers",
      "Proof of purchase via SMS or slip",
      "Comprehensive audit trails & financial control",
      "Secure encrypted system",
      "Real-time sales reporting",
      "Centralized control",
      "Minimized fraud and theft",
    ],
  },
  {
    icon: Wrench,
    title: "Telecom Implementation Services",
    shortDescription:
      "End-to-end telecom design, rollout, and maintenance with top vendors.",
    fullDescription:
      "Professional telecom design, implementation, configuration and support using equipment from Ericsson, Nokia, Huawei, ZTE and more — covering GSM to LTE, fiber, WiFi, and power solutions.",
    servicesList: [
      "Technical Site Survey (TSS) & site audit",
      "Turnkey network deployment",
      "Site acquisition",
      "Equipment installation & commissioning",
      "Antenna, feeder & fiber installation",
      "VSWR testing",
      "Integration & logistics",
      "SWAP services",
      "Operations & Maintenance (O&M)",
      "Full fiber optic solutions",
      "Grid, generator, hybrid & solar power",
    ],
  },
  {
    icon: RadioTower,
    title: "Tower Loading & Co-location",
    shortDescription:
      "Expert tower assessment and multi-operator co-location management.",
    fullDescription:
      "Professional tower loading validation and co-location services to optimize infrastructure and extend asset life.",
    details: [
      "Tower loading validation & life expectancy",
      "Structural capacity analysis",
      "Avoid costly dismantling/downtime",
      "Multi-operator co-location management",
      "Space distribution & strength calculations",
      "Site planning & construction",
      "Documentation & invoicing for operators",
    ],
  },
  {
    icon: Store,
    title: "Moderntech Franchising",
    shortDescription:
      "Proven franchising model for telecom retail and services.",
    fullDescription:
      "Expand your business with our comprehensive franchising solutions covering airtime, devices, mobile money and value-added services.",
    offerings: [
      "Airtime distribution / EVD",
      "Internet packages",
      "Corporate services",
      "Devices & accessories",
      "Facilities management",
      "Mobile Money services",
      "SIM packs & replacement",
      "Value Added Services (VAS)",
      "Internet TV",
    ],
  },
  {
    icon: Megaphone,
    title: "Branding & Marketing",
    shortDescription:
      "Nationwide sales, marketing & brand visibility services.",
    fullDescription:
      "Maximize reach and brand presence across Ethiopia with our extensive agent network and marketing expertise.",
    services: [
      "Agent spot placement",
      "Facility painting & modification",
      "Sales resource provision",
      "Product & event promotions",
      "2,000+ agents nationwide",
      "Mass sales & marketing staff deployment",
      "Short-term promotional campaigns with MNOs",
    ],
  },
  {
    icon: Shield,
    title: "Work at Height Safety Training",
    shortDescription:
      "Essential safety training to protect teams working on towers, poles, and elevated structures.",
    fullDescription:
      "SAFETY ISN'T EXPENSIVE, IT'S PRICELESS.\n\nWe help organizations comply with Work at Height regulations by teaching risk assessment, fall protection, control measures, and safe working practices to significantly reduce fall risks.",
    benefits: [
      "Fall Arrest Technical Level II (planning, design, classroom + practicals)",
      "Work at Height Rope Rigging (lifting/lowering loads safely, classroom + practicals)",
      "Pole Climbing and Ladder Use (safe ascent/descent using gaffs, hooks, belts, ladders)",
      "Work at Height Introductory + Radio Frequency Awareness (basic height safety + RF hazard awareness for transmitter sites)",
    ],
  },
];

const ServiceCard = ({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.6 }}
      className="relative h-[480px] perspective-1200"
    >
      <motion.div
        className="relative w-full h-full"
        style={{ transformStyle: "preserve-3d" }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{
          duration: 0.9,
          type: "spring",
          stiffness: 80,
          damping: 30,
        }}
      >
        {/* Front */}
        <div
          className="absolute inset-0 backface-hidden bg-card border border-border/50 rounded-2xl p-8 flex flex-col items-center justify-center shadow-xl"
          style={{ backfaceVisibility: "hidden" }}
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="w-24 h-24 bg-gradient-to-br from-primary to-primary/80 rounded-3xl flex items-center justify-center mb-8 shadow-2xl"
          >
            <service.icon className="w-12 h-12 text-white" />
          </motion.div>

          <h3 className="text-2xl font-bold text-foreground text-center mb-4">
            {service.title}
          </h3>
          <p className="text-muted-foreground text-center mb-8 px-4">
            {service.shortDescription}
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsFlipped(true)}
            className="inline-flex items-center gap-3 px-8 py-4 bg-accent text-accent-foreground rounded-xl font-bold shadow-lg hover:shadow-xl transition-all"
          >
            See More
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 backface-hidden bg-gradient-to-br from-primary/10 to-accent/10 border border-accent/30 rounded-2xl p-8 overflow-y-auto shadow-2xl"
          style={{ transform: "rotateY(180deg)", backfaceVisibility: "hidden" }}
        >
          <div className="space-y-6">
            {service.whyModerntech && (
              <p className="text-2xl font-bold text-accent text-center">
                {service.whyModerntech}
              </p>
            )}

            {service.title === "Work at Height Safety Training" && (
              <p className="text-2xl font-bold text-red-600 dark:text-red-400 text-center">
                SAFETY ISN'T EXPENSIVE, IT'S PRICELESS
              </p>
            )}

            <p className="text-foreground leading-relaxed whitespace-pre-line">
              {service.fullDescription}
            </p>

            <ul className="space-y-3">
              {(
                service.benefits ||
                service.servicesList ||
                service.details ||
                service.offerings ||
                service.services
              )?.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-foreground"
                >
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="text-center mt-8">
              <motion.button
                whileHover={{ x: 8 }}
                onClick={() => setIsFlipped(false)}
                className="inline-flex items-center gap-2 text-accent font-bold text-lg hover:gap-4 transition-all cursor-pointer"
              >
                ← Back to Overview
              </motion.button>

              <motion.a
                href="#contact"
                whileHover={{ x: 8 }}
                className="inline-flex items-center gap-2 text-accent font-bold text-lg mt-4 block"
              >
                Get in Touch
                <ArrowRight className="w-6 h-6" />
              </motion.a>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Services = () => {
  return (
    <section
      id="services"
      className="pt-12 pb-24 bg-secondary/30 relative overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Comprehensive Technology Solutions
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From mobile money to enterprise infrastructure and personnel safety
            — we deliver end-to-end solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

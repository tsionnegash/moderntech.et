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
      "Advanced EVD / Voucher Management System (VMS) for seamless digital airtime and service distribution.",
    whyModerntech: "Why Moderntech for EVD",
    fullDescription:
      "Electronic Voucher Distribution (EVD), also known as EVD Software, VMS (Voucher Management System), or E-Pin Based Software, is one of Moderntech's flagship solutions. As a major player in the industry nationwide, we deliver one of the most advanced EVD platforms available.",
    benefits: [
      "No production cost of scratch cards",
      "Simple distribution through mobile operators to multiple channels",
      "Minimal lead time – speedy nationwide distribution",
      "Minimal capital outlay – reduced stockholding",
      "Increased stock control – lower or no shrinkage",
      "Convenience and accessibility in remote areas across Ethiopia's vast terrain",
      "Ease of use for merchants and consumers",
      "Proof of purchase via paper slip or SMS notification",
      "Easy financial control and comprehensive audit trails",
      "Secure encrypted system for management, reconciliation, and consolidation",
      "Real-time sales reporting",
      "Centralized control of information",
      "Minimized fraud and theft",
    ],
  },
  {
    icon: Wrench,
    title: "Telecom Implementation Services",
    shortDescription:
      "End-to-end telecom design, rollout, and maintenance with leading vendors.",
    fullDescription:
      "Moderntech provides professional telecom design, implementation, configuration, and support services using equipment from top vendors including Ericsson, Nokia, Huawei, ZTE, and others. Our expertise covers new network rollouts, expansions, SWAPs, and upgrades across GSM, GPRS, WCDMA, HSDPA, UMTS, LTE, WiFi, WiMAX, Fiber Optics, and more.",
    servicesList: [
      "Technical Site Survey (TSS) & site audit",
      "Turnkey network deployment",
      "Telecom site acquisition",
      "Equipment installation & commissioning",
      "Antenna, feeder, and fiber installation",
      "VSWR testing with Site Master",
      "Integration & logistic services",
      "SWAP services (dismantling, packing, transportation)",
      "Operations & Maintenance (O&M)",
      "Full fiber optic installation, commissioning & maintenance",
      "Grid power, generators, hybrid & solar power solutions",
    ],
  },
  {
    icon: RadioTower,
    title: "Tower Loading & Co-location",
    shortDescription:
      "Professional tower assessment and multi-operator site management.",
    fullDescription:
      "Moderntech offers expert tower loading validation and co-location management services to optimize infrastructure usage and extend asset life.",
    details: [
      "Tower loading validation & life expectancy assessment",
      "Structural capacity analysis for portfolio optimization",
      "Avoid costly dismantling and downtime",
      "Co-location management for multiple operators on shared masts",
      "Space distribution and strength calculations",
      "Site planning, construction, and installation deployment",
      "Documentation and invoice management for operators",
    ],
  },
  {
    icon: Store,
    title: "Moderntech Franchising",
    shortDescription:
      "Comprehensive franchising solutions for telecom retail and services.",
    fullDescription:
      "Expand your reach with Moderntech's proven franchising model covering airtime, devices, mobile money, and value-added services.",
    offerings: [
      "Airtime distribution / EVD",
      "Internet packages",
      "Corporate services",
      "Devices & accessories",
      "Facilities management",
      "Mobile Money services",
      "Service platforms",
      "SIM packs & replacement",
      "Value Added Services (VAS)",
      "VAS platforms & solutions",
      "Internet TV",
    ],
  },
  {
    icon: Megaphone,
    title: "Branding & Marketing",
    shortDescription:
      "Nationwide sales, marketing, and brand visibility services.",
    fullDescription:
      "Leverage Moderntech's extensive network and expertise to maximize product reach and brand presence across Ethiopia.",
    services: [
      "Agent spot placement",
      "Facility painting & modification",
      "Sales resource provision",
      "Product & event promotions",
      "2,000+ agents nationwide for wide market coverage",
      "Mass sales & marketing staff deployment on demand",
      "Short-term promotional campaign management with MNOs",
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
      {/* 3D Flip Container */}
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
        {/* Front Face */}
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

          {/* See More Button - Triggers Flip on Click */}
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

        {/* Back Face */}
        <div
          className="absolute inset-0 backface-hidden bg-gradient-to-br from-primary/10 to-accent/10 border border-accent/30 rounded-2xl p-8 overflow-y-auto shadow-2xl"
          style={{
            transform: "rotateY(180deg)",
            backfaceVisibility: "hidden",
          }}
        >
          <div className="space-y-6">
            {service.whyModerntech && (
              <p className="text-2xl font-bold text-accent text-center">
                {service.whyModerntech}
              </p>
            )}

            <p className="text-foreground leading-relaxed">
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
      className="pt-12 pb-24 bg-secondary/30 relative overflow-hidden" // Reduced top padding
    >
      <div className="container mx-auto px-4">
        {/* Header - Removed "Our Services" badge and reduced bottom margin */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10" // Reduced from mb-16 to mb-10
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Comprehensive Technology Solutions
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From mobile money to enterprise infrastructure, we deliver
            end-to-end solutions that transform businesses.
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

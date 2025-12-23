import { motion } from "framer-motion";
import {
  ArrowRight,
  Smartphone,
  Shield,
  Zap,
  Play,
  ArrowLeft,
} from "lucide-react";
import { useState } from "react";

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center justify-center text-center max-w-5xl mx-auto">
          {/* Animated Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 border border-accent/30 rounded-full text-accent text-sm font-medium backdrop-blur-sm">
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="w-2 h-2 bg-accent rounded-full"
              />
              #1 Mobile Money Platform in Ethiopia
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
          >
            <span className="text-foreground">Transform Your</span>
            <br />
            <motion.span
              className="gradient-text inline-block"
              animate={{
                backgroundPosition: isHovered
                  ? ["0% 50%", "100% 50%", "0% 50%"]
                  : "0% 50%",
              }}
              transition={{ duration: 3, repeat: Infinity }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              style={{ backgroundSize: "200% 200%" }}
            >
              Digital Future
            </motion.span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-xl text-foreground/70 mb-10 max-w-2xl leading-relaxed"
          >
            Leading the way in{" "}
            <span className="text-accent font-semibold">
              mobile money solutions
            </span>{" "}
            and digital services. We connect people, businesses, and
            opportunities through{" "}
            <span className="text-primary font-semibold">
              innovative technology
            </span>
            .
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 mb-16"
          >
            {/* Primary Button - Explore Our Services */}
            <motion.a
              href="#services"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px -15px rgba(0,0,0,0.3)",
              }}
              whileTap={{ scale: 0.98 }}
              className="btn-primary inline-flex items-center justify-center gap-3 text-base px-8 py-4 rounded-xl font-semibold"
            >
              <span>Explore Our Services</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <ArrowRight className="w-5 h-5" />
              </motion.div>
            </motion.a>

            {/* Who We Are Button - Now EXACTLY the same style as Explore Our Services */}
            <motion.a
              href="#about"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px -15px rgba(0,0,0,0.3)",
              }}
              whileTap={{ scale: 0.98 }}
              className="btn-primary inline-flex items-center justify-center gap-3 text-base px-8 py-4 rounded-xl font-semibold"
            >
              <span>Who We Are</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <ArrowRight className="w-5 h-5" />
              </motion.div>
            </motion.a>
          </motion.div>
          {/* Feature Pills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            className="flex flex-wrap justify-center gap-3 mt-12"
          >
            {[
              {
                icon: Smartphone,
                label: "Mobile Money",
                color: "text-blue-400",
              },
              {
                icon: Shield,
                label: "Bank-Grade Security",
                color: "text-green-400",
              },
              {
                icon: Zap,
                label: "Instant Transfers",
                color: "text-yellow-400",
              },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2 + index * 0.1 }}
                whileHover={{ scale: 1.1, y: -3 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-foreground/5 backdrop-blur-sm border border-foreground/10 rounded-full cursor-pointer hover:bg-foreground/10 transition-all"
              >
                <item.icon className={`w-4 h-4 ${item.color}`} />
                <span className="text-sm text-foreground/80">{item.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ repeat: Infinity, duration: 8 }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{ repeat: Infinity, duration: 10, delay: 2 }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/20 rounded-full blur-3xl"
        />
      </div>
    </section>
  );
};

export default Hero;

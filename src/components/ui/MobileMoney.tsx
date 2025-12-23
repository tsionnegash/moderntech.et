import { motion } from "framer-motion";
import {
  Send,
  Download,
  CreditCard,
  Wallet,
  QrCode,
  DollarSign,
} from "lucide-react";
import { useState } from "react";

const features = [
  {
    icon: Send,
    title: "Send Money and Receive Money",
    desc: "Transfer funds instantly to anyone",
    backDesc:
      "telebirr allows you to send money to any other mobile phone user across the country. Both registered and unregistered customers can transfer e-money to other users using account or over the counter",
  },
  {
    icon: Download,
    title: "Deposit /Withdraw Cash",
    desc: "exchange cash with equivalent electronic money",
    backDesc:
      "telebirr enables you to exchange cash with equivalent electronic money that results in an increase in the wallet account balance. Withdraw cash anywhere from your telebirr account at the nearby telebirr agent or Ethio telecom shop",
  },
  {
    icon: Wallet,
    title: "Bill Payments",
    desc: "Pay utilities and subscriptions",
    backDesc:
      "Conveniently pay Ethio telecom bill or purchase tickets (e.g. Unity Park) using telebirr anywhere, anytime",
  },
  {
    icon: CreditCard,
    title: "Buy Airtimes",
    desc: "Top-up anytime, anywhere",
    backDesc:
      "By using telebirr you can easily top-up your own or another person's mobile service number anytime anywhere without the need to make physical visit at the retail shops.",
  },
  {
    icon: QrCode,
    title: "International Remittance",
    desc: "Get cash from abroad. Straight to your phone.",
    backDesc:
      "Conveniently receive money via your mobile number sent from your loved ones living abroad. Both registered and unregistered telebirr users can receive international remittance.",
  },
];

const FlipCard = ({
  feature,
  index,
  flippedIndex,
  setFlippedIndex,
}: {
  feature: (typeof features)[0];
  index: number;
  flippedIndex: number | null;
  setFlippedIndex: (index: number | null) => void;
}) => {
  const isFlipped = flippedIndex === index;

  const handleClick = () => {
    setFlippedIndex(isFlipped ? null : index);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="perspective-1000 h-64 cursor-pointer"
      onClick={handleClick}
    >
      <motion.div
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
        className="relative w-full h-full"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front Side */}
        <div
          className="absolute inset-0 backface-hidden"
          style={{ backfaceVisibility: "hidden" }}
        >
          <motion.div
            whileHover={{
              y: -8,
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
            }}
            className="h-full card-interactive border border-border group bg-card transition-shadow duration-300 hover:shadow-2xl"
          >
            <div className="w-14 h-14 bg-gradient-to-br from-accent to-accent/70 rounded-xl flex items-center justify-center mb-4 group-hover:animate-pulse-glow transition-all duration-300">
              <feature.icon className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">
              {feature.title}
            </h3>
            <p className="text-muted-foreground">{feature.desc}</p>

            <p className="text-xs text-muted-foreground/60 mt-4">
              Click to flip
            </p>
          </motion.div>
        </div>

        {/* Back Side */}
        <div
          className="absolute inset-0 backface-hidden"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <motion.div
            whileHover={{
              y: -8,
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
            }}
            className="h-full card-interactive border border-accent bg-gradient-to-br from-accent to-accent/80 text-white transition-shadow duration-300 hover:shadow-2xl"
          >
            <div className="w-14 h-14 bg-white/20 backdrop-blur rounded-xl flex items-center justify-center mb-4">
              <feature.icon className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-white/90">{feature.backDesc}</p>

            <p className="text-xs text-white/60 mt-4">Click to flip back</p>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// FINAL VERSION: BIG, BRIGHT, FAST, and ALWAYS VISIBLE falling icons
const FallingIcon = ({
  Icon,
  delay = 0,
  duration = 3, // 2-3 seconds fall time
  left = "10%",
}: {
  Icon: any;
  delay?: number;
  duration?: number;
  left?: string;
}) => {
  return (
    <motion.div
      className="absolute pointer-events-none z-50" // Highest z-index
      style={{ left, top: "-300px" }}
      initial={{ y: -400, opacity: 0 }}
      whileInView={{
        y: "calc(100vh + 400px)",
        opacity: [0, 1, 1, 0],
      }}
      viewport={{ once: false, margin: "-300px" }}
      transition={{
        y: { duration, repeat: Infinity, ease: "linear", delay },
        opacity: { duration, repeat: Infinity, ease: "linear", delay },
      }}
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: duration * 0.6,
          repeat: Infinity,
          ease: "linear",
          delay,
        }}
        className="flex items-center justify-center"
      >
        {/* MASSIVE, BRIGHT, BOLD icons */}
        <div className="w-64 h-64 bg-accent rounded-full flex items-center justify-center shadow-2xl border-12 border-white">
          <Icon className="w-48 h-48 text-white drop-shadow-2xl" />
        </div>
      </motion.div>
    </motion.div>
  );
};

const MobileMoney = () => {
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);

  return (
    <section id="mobile-money" className="pt-12 pb-24 relative overflow-hidden">
      {/* Reduced top padding (from py-24 to pt-12) to minimize gap from navbar */}

      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      {/* GUARANTEED VISIBLE falling icons */}
      <div className="absolute inset-0 pointer-events-none">
        <FallingIcon Icon={Wallet} delay={0} duration={2.5} left="5%" />
        <FallingIcon Icon={Download} delay={0.5} duration={2.8} left="18%" />
        <FallingIcon Icon={DollarSign} delay={1} duration={2.3} left="32%" />
        <FallingIcon Icon={Send} delay={1.5} duration={3} left="46%" />
        <FallingIcon Icon={Wallet} delay={2} duration={2.6} left="60%" />
        <FallingIcon Icon={DollarSign} delay={0.2} duration={2.7} left="74%" />
        <FallingIcon Icon={Download} delay={0.8} duration={2.4} left="88%" />
        <FallingIcon Icon={Send} delay={1.2} duration={2.9} left="12%" />
        <FallingIcon Icon={Wallet} delay={1.8} duration={2.5} left="38%" />
        <FallingIcon Icon={DollarSign} delay={0.4} duration={2.8} left="65%" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header - Removed the "Mobile Money" badge and reduced bottom margin */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8" // Reduced from mb-16 to mb-8
        >
          <h2 className="section-title">
            Financial Services at Your Fingertips
          </h2>
          <p className="section-subtitle mx-auto">
            Experience seamless mobile money services designed for the modern
            world. Fast, secure, and accessible anywhere.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FlipCard
              key={feature.title}
              feature={feature}
              index={index}
              flippedIndex={flippedIndex}
              setFlippedIndex={setFlippedIndex}
            />
          ))}
        </div>

        {/* Your original Demo Panel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-8 md:p-12 text-primary-foreground overflow-hidden relative"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Start Transacting Today
              </h3>
              <p className="text-primary-foreground/80 mb-6">
                Join millions of users who trust telebirr for their daily
                financial needs. Download our app and experience the future of
                mobile money.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-accent text-accent-foreground px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() =>
                  window.open(
                    "https://superapp.ethiomobilemoney.et:38443/customer/mgm/index20251104.html#/?notoolbar=true&CampaignId=MGM1946745172939008&inviterId=1098894111206404&language=en&time=Nov-07-2025-Feb-04-2026",
                    "_blank",
                    "noopener,noreferrer"
                  )
                }
              >
                Get Started Free
              </motion.button>
            </div>

            <div className="flex justify-center">
              <div className="relative">
                <div className="relative w-96 h-[740px] bg-gray-900 rounded-[60px] shadow-2xl p-5 border-[14px] border-gray-900">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-10 bg-black rounded-full z-20" />
                  <div className="absolute top-3 left-1/2 -translate-x-1/2 w-32 h-7 bg-black rounded-full flex items-center justify-center gap-4">
                    <div className="w-8 h-8 bg-gray-800 rounded-full" />
                    <div className="w-12 h-6 bg-gray-800 rounded-full" />
                  </div>

                  <div className="w-full h-full bg-black rounded-[48px] overflow-hidden relative">
                    <img
                      src="https://play-lh.googleusercontent.com/GwQXSo33tw3RJLwWdQ9EJFj93JoMx7BNNXz9QPUtzGnttxU2p9s0E_vAFp0Z2Gc9Wx0=w1052-h592-rw"
                      alt="telebirr App Interface"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

                    <div className="absolute bottom-12 left-0 right-0 text-center">
                      <p className="text-white text-3xl font-bold drop-shadow-2xl">
                        telebirr
                      </p>
                      <p className="text-white/80 text-sm drop-shadow-lg">
                        Mobile Money
                      </p>
                    </div>
                  </div>

                  <div className="absolute -right-1 top-32 w-1 h-20 bg-gray-700 rounded-l" />
                  <div className="absolute -right-1 top-48 w-1 h-32 bg-gray-700 rounded-l" />
                  <div className="absolute -left-1 top-40 w-1 h-24 bg-gray-700 rounded-r" />
                </div>

                <motion.div
                  animate={{ y: [0, -25, 0], rotate: [0, 20, 0] }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -bottom-8 -left-8 w-28 h-28 bg-accent rounded-3xl flex items-center justify-center shadow-2xl"
                >
                  <Send className="w-14 h-14 text-white rotate-12" />
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MobileMoney;

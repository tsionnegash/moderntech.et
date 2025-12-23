import { motion } from "framer-motion";
import { ArrowRight, Phone, Mail } from "lucide-react";
import { useRef, useEffect } from "react";

import ethioTelecomLogo from "@/assets/ethio-telecom.png";
import safaricomLogo from "@/assets/safaricom.png";
import ecaLogo from "@/assets/eca.png";
import nokiaLogo from "@/assets/nokia.png";
import inveaLogo from "@/assets/invea.png";
import ericssonLogo from "@/assets/ericsson.png";
import talentFirmLogo from "@/assets/talent-firm.png";
import viscarLogo from "@/assets/viscar.png";
import tangentLogo from "@/assets/tangent.png";
import kprTowersLogo from "@/assets/kpr-towers.png";
import debaoLogo from "@/assets/debao.png";
import eliteLogo from "@/assets/elite.png";

const partners = [
  {
    name: "Ethio Telecom",
    description:
      "Ethio telecom is an Ethiopian telecommunication company serving as the major internet and telephone service provider.",
    logo: ethioTelecomLogo,
    link: "https://www.ethiotelecom.et/",
  },
  {
    name: "Safaricom",
    description:
      "Safaricom is the largest telecommunications provider in Kenya, renowned as the home of M-PESA, offering mobile telephony, mobile money, ecommerce, cloud computing, data, music streaming, and fibre optic services.",
    logo: safaricomLogo,
    link: "https://www.safaricom.co.ke/",
  },
  {
    name: "Ethiopian Communications Authority",
    description:
      "The Ethiopian Communications Authority (ECA) is the regulatory authority for communications services in Ethiopia.",
    logo: ecaLogo,
    link: "https://eca.et/",
  },
  {
    name: "Nokia",
    description:
      "Finnish multinational telecommunications, information technology, and consumer electronics company, founded in 1865.",
    logo: nokiaLogo,
    link: "https://www.nokia.com/",
  },
  {
    name: "Immigration, Nationality and Vital Events Agency",
    description:
      "INVEA - Immigration, Nationality and Vital Events Agency — Government Agency from Ethiopia.",
    logo: inveaLogo,
    link: "https://www.invea.gov.et/",
  },
  {
    name: "Ericsson",
    description:
      "Ericsson is a Swedish multinational networking and telecommunications company.",
    logo: ericssonLogo,
    link: "https://www.ericsson.com/",
  },
  {
    name: "The Talent Firm",
    description:
      "The Talent Firm delivers end-to-end human resource management solutions focused on both the labor and job market.",
    logo: talentFirmLogo,
    link: null,
  },
  {
    name: "Viscar Industrial Capacity Limited",
    description:
      "Viscar Industrial Capacity Ltd is a knowledge-based firm that provides training, consulting, and resourcing solutions for technology-driven organisations and people.",
    logo: viscarLogo,
    link: "https://viscarcapacity.com/",
  },
  {
    name: "Tangent International",
    description:
      "Tangent International is a global recruitment specialist in Telecoms, Digital Technology, and Engineering.",
    logo: tangentLogo,
    link: "https://www.tanint.com/",
  },
  {
    name: "KPR Towers",
    description:
      "KPR Towers has over 20 years’ experience in global telecom rollout and optimization.",
    logo: kprTowersLogo,
    link: null,
  },
  {
    name: "Debao Tower",
    description:
      "Debao Tower Manufacturing Co.,Ltd is one of the top telecom tower manufacturers in China.",
    logo: debaoLogo,
    link: "https://www.db-steel-tower.com/",
  },
  {
    name: "Elite Engineering",
    description: "Elite Engineering",
    logo: eliteLogo,
    link: null,
  },
];

const Partners = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Auto-scroll with pause on hover
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let animationId: number;
    let position = container.scrollLeft;

    const scroll = () => {
      position += 1; // Adjust speed: 1 = slow, 2 = faster
      container.scrollLeft = position;

      // Seamless loop using duplication
      if (position >= container.scrollWidth / 2) {
        position = 0;
      }

      animationId = requestAnimationFrame(scroll);
    };

    const startScrolling = () => {
      animationId = requestAnimationFrame(scroll);
    };

    const stopScrolling = () => {
      cancelAnimationFrame(animationId);
    };

    startScrolling();

    container.addEventListener("mouseenter", stopScrolling);
    container.addEventListener("mouseleave", startScrolling);

    return () => {
      cancelAnimationFrame(animationId);
      container.removeEventListener("mouseenter", stopScrolling);
      container.removeEventListener("mouseleave", startScrolling);
    };
  }, []);

  return (
    <section
      id="partners"
      className="pt-12 pb-24 relative overflow-hidden bg-background"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Trusted by Industry Leaders</h2>
          <p className="section-subtitle mx-auto">
            We collaborate with top organizations to deliver exceptional value
            to our customers.
          </p>
        </motion.div>

        {/* Carousel - No arrows */}
        <div className="relative mt-4">
          {/* Duplicated content for seamless infinite auto-scroll */}
          <div
            ref={scrollContainerRef}
            className="flex gap-8 overflow-x-hidden pb-6 px-16"
          >
            {/* First set */}
            {partners.map((partner, index) => (
              <motion.div
                key={`first-${index}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="flex-shrink-0 w-[340px] bg-card rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-border/50 group"
              >
                <div className="h-56 bg-white flex items-center justify-center p-12">
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl text-foreground mb-3">
                    {partner.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-6 line-clamp-4">
                    {partner.description}
                  </p>
                  {partner.link ? (
                    <a
                      href={partner.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent font-medium text-sm flex items-center gap-2 hover:gap-4 transition-all"
                    >
                      Visit Website
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  ) : (
                    <span className="text-muted-foreground text-sm">
                      Official website not available
                    </span>
                  )}
                </div>
              </motion.div>
            ))}

            {/* Second set - duplicate for infinite loop */}
            {partners.map((partner, index) => (
              <motion.div
                key={`second-${index}`}
                whileHover={{ scale: 1.05, y: -10 }}
                className="flex-shrink-0 w-[340px] bg-card rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-border/50 group"
              >
                <div className="h-56 bg-white flex items-center justify-center p-12">
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl text-foreground mb-3">
                    {partner.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-6 line-clamp-4">
                    {partner.description}
                  </p>
                  {partner.link ? (
                    <a
                      href={partner.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent font-medium text-sm flex items-center gap-2 hover:gap-4 transition-all"
                    >
                      Visit Website
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  ) : (
                    <span className="text-muted-foreground text-sm">
                      Official website not available
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-24 text-center"
        >
          <h3 className="text-3xl font-bold text-foreground mb-4">
            Need Help?
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
            Feel free to contact us by filling out a form or call our corporate
            office and we will connect you with a team member who can help.
          </p>
          <div className="text-4xl font-bold text-accent mb-10">
            +251 911 256 838
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <motion.a
              href="tel:+251911256838"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-5 bg-accent text-accent-foreground rounded-xl font-bold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-3"
            >
              <Phone className="w-6 h-6" />
              Contact us
            </motion.a>

            <motion.a
              href="mailto:info@moderntech.et?subject=Partnership%20Inquiry&body=Hello%20Moderntech%20Team,%0A%0AI%20am%20interested%20in%20exploring%20partnership%20opportunities.%0A%0ABest%20regards,"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-5 border-2 border-accent text-accent rounded-xl font-bold hover:bg-accent hover:text-accent-foreground transition-all flex items-center justify-center gap-3"
            >
              <Mail className="w-6 h-6" />
              Ready to work with us? Make it happen
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Hide Scrollbar */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default Partners;

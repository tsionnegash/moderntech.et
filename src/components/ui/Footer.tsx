import { motion } from "framer-motion";
import {
  Facebook,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
  Heart,
} from "lucide-react";

const socialLinks = [
  {
    icon: Facebook,
    href: "#",
    label: "Facebook",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/company/moderntech-technologies/",
    label: "LinkedIn",
  },
  {
    icon: Instagram,
    href: "https://www.instagram.com/moderntech_technologies_plc/",
    label: "Instagram",
  },
  {
    icon: "tiktok",
    href: "https://www.tiktok.com/@moderntech_technologies",
    label: "TikTok",
  },
];

const TikTokIcon = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.13V2h-3.75v13.67a2.9 2.9 0 1 1-2-2.76V9.1a6.65 6.65 0 1 0 5.75 6.57V8.26a8.58 8.58 0 0 0 5.02 1.61V6.15a4.83 4.83 0 0 1-1.25.54Z" />
  </svg>
);

const Footer = () => {
  return (
    <footer className="py-6 bg-[#69B9F2] dark:bg-[#E5BC76]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">

          {/* Contact Info - Left */}
          <div className="flex flex-col sm:flex-row flex-wrap items-center gap-4 text-sm text-white dark:text-gray-900">

            <motion.a
              href="mailto:info@moderntech.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 hover:underline cursor-pointer"
            >
              <Mail className="w-4 h-4" />
              <span>info@moderntech.com</span>
            </motion.a>

            <motion.a
              href="tel:+251112345678"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 hover:underline cursor-pointer"
            >
              <Phone className="w-4 h-4" />
              <span>+251 11 234 5678</span>
            </motion.a>

            <motion.a
              href="https://www.google.com/maps?q=AFRICA+INSURANCE+COMPANY+S.C.+HEAD+OFFICE+Airport+Road+Addis+Ababa+Ethiopia"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 hover:underline cursor-pointer"
            >
              <MapPin className="w-4 h-4" />
              <span>Bole Road, Addis Ababa, Ethiopia</span>
            </motion.a>

          </div>

          {/* Copyright - Center */}
          <p className="text-white dark:text-gray-900 text-sm flex items-center gap-1 text-center">
            © {new Date().getFullYear()} ModernTech Technologies PLC | Built
            with
            <Heart className="w-4 h-4 fill-current text-red-500" />
            for Growth
          </p>

          {/* Social Media Icons - Right */}
          <div className="flex gap-3">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target={social.href !== "#" ? "_blank" : undefined}
                rel={social.href !== "#" ? "noopener noreferrer" : undefined}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors duration-300 shadow-md"
                aria-label={social.label}
              >
                {social.icon === "tiktok" ? (
                  <TikTokIcon className="w-5 h-5 text-[#69B9F2] dark:text-[#E5BC76]" />
                ) : (
                  <social.icon className="w-5 h-5 text-[#69B9F2] dark:text-[#E5BC76]" />
                )}
              </motion.a>
            ))}
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;

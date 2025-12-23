import { motion } from "framer-motion";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
  Heart,
} from "lucide-react";

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
];

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
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors duration-300 shadow-md"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5 text-[#69B9F2] dark:text-[#E5BC76]" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

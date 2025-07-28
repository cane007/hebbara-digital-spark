import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import logo from '@/assets/logo.png';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const services = [
    "Web Development",
    "Digitalno oglašavanje", 
    "SEO optimizacija",
    "UI/UX Dizajn",
    "E-commerce rješenja",
    "Online vidljivost"
  ];

  const quickLinks = [
    { name: "Početna", href: "#home" },
    { name: "Usluge", href: "#services" },
    { name: "O nama", href: "#about" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Kontakt", href: "#contact" }
  ];

  const socialLinks = [
    { icon: <Facebook className="h-5 w-5" />, href: "#", name: "Facebook" },
    { icon: <Instagram className="h-5 w-5" />, href: "#", name: "Instagram" },
    { icon: <Linkedin className="h-5 w-5" />, href: "#", name: "LinkedIn" }
  ];

  return (
    <footer className="bg-gradient-dark text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <img src={logo} alt="Hebbera Design Logo" className="h-10 w-10" />
              <span className="text-2xl font-playfair font-bold">
                Hebbera Design
              </span>
            </div>
            <p className="text-white/80 mb-6 leading-relaxed">
              Vaš partner za digitalnu transformaciju. Kreiramo web stranice, 
              pokretamo uspješne kampanje i pomažemo vašem biznisu da 
              postane vidljiv na internetu.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="flex items-center justify-center w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg transition-colors group"
                  aria-label={social.name}
                >
                  <span className="group-hover:scale-110 transition-transform">
                    {social.icon}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-playfair font-bold mb-6">Naše usluge</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href="#services"
                    className="text-white/80 hover:text-white transition-colors relative group"
                  >
                    {service}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-playfair font-bold mb-6">Brze veze</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-white/80 hover:text-white transition-colors relative group"
                  >
                    {link.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-playfair font-bold mb-6">Kontakt</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-accent flex-shrink-0" />
                <a href="mailto:info@hebberadesign.com" className="text-white/80 hover:text-white transition-colors">
                  info@hebberadesign.com
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-accent flex-shrink-0" />
                <a href="tel:+38591234567" className="text-white/80 hover:text-white transition-colors">
                  +385 91 234 5678
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-white/80">
                  Zagreb, Hrvatska
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-white/60 text-center md:text-left">
              © {currentYear} Hebbera Design. Sva prava pridržana.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                Pravila privatnosti
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                Uvjeti korištenja
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                Kolačići
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
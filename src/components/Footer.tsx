import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import logo from '@/assets/logo.png';
export default function Footer() {
  const currentYear = new Date().getFullYear();
  const services = ["Web Development", "Digitalno oglašavanje", "SEO optimizacija", "UI/UX Dizajn", "E-commerce rješenja", "Online vidljivost"];
  const quickLinks = [{
    name: "Početna",
    href: "#home"
  }, {
    name: "Usluge",
    href: "#services"
  }, {
    name: "O nama",
    href: "#about"
  }, {
    name: "Portfolio",
    href: "#portfolio"
  }, {
    name: "Kontakt",
    href: "#contact"
  }];
  const socialLinks = [{
    icon: <Facebook className="h-5 w-5" />,
    href: "#",
    name: "Facebook"
  }, {
    icon: <Instagram className="h-5 w-5" />,
    href: "#",
    name: "Instagram"
  }, {
    icon: <Linkedin className="h-5 w-5" />,
    href: "#",
    name: "LinkedIn"
  }];
  return <footer className="bg-gradient-to-br from-background via-muted/20 to-background border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <img src={logo} alt="Hebbera Design Logo" className="h-10 w-10" />
              <span className="text-2xl font-playfair font-bold gradient-text">
                Hebbera Design
              </span>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Vaš partner za digitalnu transformaciju. Kreiramo web stranice, 
              pokretamo uspješne kampanje i pomažemo vašem biznisu da 
              postane vidljiv na internetu.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => <a key={index} href={social.href} className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-primary via-accent to-secondary hover:scale-125 hover:rotate-12 rounded-xl transition-all duration-300 group shadow-lg hover:shadow-2xl animate-glow-pulse" aria-label={social.name}>
                  <span className="text-white group-hover:scale-110 transition-transform">
                    {social.icon}
                  </span>
                </a>)}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-playfair font-bold mb-6 gradient-text">Naše usluge</h3>
            <ul className="space-y-3">
              {services.map((service, index) => <li key={index}>
                  <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors relative group">
                    {service}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary via-accent to-secondary group-hover:w-full transition-all duration-300"></span>
                  </a>
                </li>)}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-playfair font-bold mb-6 gradient-text">Brze veze</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => <li key={index}>
                  <a href={link.href} className="text-muted-foreground hover:text-foreground transition-colors relative group">
                    {link.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary via-accent to-secondary group-hover:w-full transition-all duration-300"></span>
                  </a>
                </li>)}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-playfair font-bold mb-6 gradient-text">Kontakt</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3 group">
                <Mail className="h-5 w-5 text-accent flex-shrink-0 group-hover:scale-125 transition-transform" />
                <a href="mailto:info@hebberadesign.com" className="text-muted-foreground hover:text-foreground transition-colors">
                  info@hebberadesign.com
                </a>
              </li>
              <li className="flex items-center space-x-3 group">
                <Phone className="h-5 w-5 text-secondary flex-shrink-0 group-hover:scale-125 transition-transform" />
                <a href="tel:+38591234567" className="text-muted-foreground hover:text-foreground transition-colors">
                  +385 91 234 5678
                </a>
              </li>
              <li className="flex items-start space-x-3 group">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 group-hover:scale-125 transition-transform" />
                <span className="text-muted-foreground">
                  Zagreb, Hrvatska
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-muted-foreground text-center md:text-left">
              © {currentYear} Hebbera Design. Sva prava pridržana.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Pravila privatnosti
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Uvjeti korištenja
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Kolačići
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>;
}
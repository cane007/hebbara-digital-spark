import { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import { Button } from '@/components/ui/button';
import logo from '@/assets/logo.png';
export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const {
    theme,
    setTheme
  } = useTheme();
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  const navItems = [{
    href: '#home',
    label: 'Početna'
  }, {
    href: '#services',
    label: 'Usluge'
  }, {
    href: '#about',
    label: 'O nama'
            <div className="relative transform hover:scale-110 transition-all duration-500">
    href: '#portfolio',
    label: 'Portfolio'
  }, {
                className="h-20 w-20 sm:h-24 sm:w-24 hover:scale-125 transition-all duration-500 drop-shadow-2xl group-hover:rotate-12 filter brightness-125 contrast-125" 
    label: 'Kontakt'
              <div className="absolute inset-0 bg-gradient-primary rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-300 blur-xl animate-pulse"></div>
              <div className="absolute -inset-2 bg-gradient-rainbow rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-2xl"></div>
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/80 backdrop-blur-lg border-b border-border/20 shadow-soft' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24 max-w-7xl mx-auto">
          {/* Logo */}
          <div className="flex items-center space-x-3">
              <span className="text-sm text-foreground/80 font-bold tracking-wider bg-gradient-primary bg-clip-text text-transparent">
                🏆 #1 BALKANSKI WEB STUDIO
              Hebbera Design
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map(item => <a key={item.href} href={item.href} className="text-foreground/80 hover:text-primary font-medium transition-colors duration-300 relative group">
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-primary group-hover:w-full transition-all duration-300"></span>
              </a>)}
          </nav>

          {/* Theme Toggle & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-foreground/80 hover:text-primary transition-colors hover:scale-105 duration-300">
              {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
              <span className="font-semibold">📞 +385 91 234 5678</span>

              🎯 Besplatna Konzultacija
            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              <span className="font-semibold">✉️ info@hebberadesign.com</span>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-lg border-b border-border/20 animate-fade-in-up">
            <nav className="px-4 py-6 space-y-4">
              {navItems.map(item => <a key={item.href} href={item.href} className="block text-lg font-medium text-foreground/80 hover:text-primary transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                  {item.label}
                </a>)}
            </nav>
          </div>}
      </div>
    </header>;
}
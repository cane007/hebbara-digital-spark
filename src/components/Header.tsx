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
  }, {
    href: '#portfolio',
    label: 'Portfolio'
  }, {
    href: '#contact',
    label: 'Kontakt'
  }];
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/80 backdrop-blur-lg border-b border-border/20 shadow-soft' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24 max-w-7xl mx-auto">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img src={logo} alt="Hebbera Design Logo" className="h-12 w-12 sm:h-14 sm:w-14 hover:scale-110 transition-all duration-300" />
            <span className="text-2xl font-playfair font-bold text-gradient">
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
            <Button variant="ghost" size="icon" onClick={toggleTheme} className="hover:bg-muted transition-colors">
              {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </Button>

            {/* Mobile Menu Button */}
            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
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
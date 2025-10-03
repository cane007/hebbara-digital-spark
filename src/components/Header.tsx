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
    href: '#process',
    label: 'Proces'
  }, {
    href: '#technologies',
    label: 'Tehnologije'
  }, {
    href: '#faq',
    label: 'FAQ'
  }, {
    href: '#contact',
    label: 'Kontakt'
  }];
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/90 backdrop-blur-md border-b border-border shadow-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo - ISTAKNUTO */}
          <div className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
              <img 
                src={logo} 
                alt="Hebbera Design Logo" 
                className="h-12 w-12 relative z-10 group-hover:scale-110 transition-transform duration-300 rounded-xl shadow-xl" 
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold gradient-text">
                Hebbera Design
              </span>
              <span className="text-xs text-muted-foreground font-semibold">
                Web Dizajn Studio
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map(item => <a key={item.href} href={item.href} className="text-foreground hover:text-primary font-medium transition-colors duration-300 relative group">
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
              </a>)}
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <div className="hidden lg:flex flex-col items-end text-sm text-muted-foreground">
              
              
            </div>
            
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleTheme} 
              className="hover:bg-secondary/20 hover:scale-110 transition-all duration-300"
            >
              {theme === 'light' ? 
                <Moon className="h-5 w-5 text-foreground" /> : 
                <Sun className="h-5 w-5 text-foreground" />
              }
            </Button>
            
            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border">
            <nav className="px-4 py-6 space-y-4">
              {navItems.map(item => <a key={item.href} href={item.href} className="block text-lg font-medium text-foreground hover:text-primary transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                  {item.label}
                </a>)}
            </nav>
          </div>}
      </div>
    </header>;
}
import { ArrowRight, Play, Sparkle, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroBg from '@/assets/hero-bg.jpg';
import React from 'react';

// Declare global dataLayer type
declare global {
  interface Window {
    dataLayer?: any[];
  }
}

export default function Hero() {
  // Track page scroll for analytics
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    
    if (scrollPosition > windowHeight * 0.3 && window.dataLayer) {
      window.dataLayer.push({
        'event': 'page_scroll',
        'scroll_depth': '30%',
        'page': window.location.pathname
      });
    }
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient">
      {/* Optimized Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20" 
        style={{ backgroundImage: `url(${heroBg})` }}
        role="img"
        aria-label="Modern web development workspace background"
      />
      
      {/* Multi-layer Gradient System */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 bg-gradient-mesh opacity-20" />
      
      {/* Simplified Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-secondary/15 rounded-full blur-3xl opacity-40"></div>
      </div>

      {/* Revolutionary Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="animate-fade-in-up">
          {/* Floating Icons */}
          <div className="relative mb-8">
            <Sparkle className="absolute -top-4 -left-8 w-6 h-6 text-primary-glow animate-pulse" />
            <Zap className="absolute -top-2 -right-12 w-8 h-8 text-accent-glow animate-bounce" />
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-playfair font-bold text-foreground mb-6 leading-tight">
            <span className="block text-primary text-shadow-glow">Hebbera Design</span>
            <span className="block text-2xl sm:text-3xl lg:text-4xl font-inter font-light text-foreground/90 mt-2">
              Izgradite web aplikaciju u 12 minuta
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl text-foreground/80 mb-8 max-w-2xl mx-auto leading-relaxed font-inter">
            Vidite kako naša AI tehnologija pretvara vašu ideju u gotovu web aplikaciju.
            <span className="text-primary font-semibold"> Bez kodiranja, bez komplikacija</span> - samo opišite što trebate.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
            <Button 
              className="btn-cta-primary group px-12 py-6 text-xl font-bold relative overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-300"
              onClick={() => {
                if (typeof window !== 'undefined' && window.dataLayer) {
                  window.dataLayer.push({
                    'event': 'cta_click',
                    'element': 'hero_primary_cta',
                    'page': window.location.pathname
                  });
                }
              }}
            >
              <span className="relative z-10 flex items-center">
                POČNITE GRADITI SADA
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
            </Button>
            
            <Button 
              className="btn-secondary-cta group px-10 py-6 text-lg font-semibold border-2 border-primary hover:bg-primary hover:text-white transition-all duration-300"
              onClick={() => {
                if (typeof window !== 'undefined' && window.dataLayer) {
                  window.dataLayer.push({
                    'event': 'cta_click',
                    'element': 'hero_secondary_cta',
                    'page': window.location.pathname
                  });
                }
              }}
            >
              <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
              30-sekundni demo
            </Button>
          </div>

          {/* Social Proof */}
          <div className="mb-12 text-center">
            <p className="text-sm text-foreground/60 mb-4">Povjerenje stotina klijenata</p>
            <div className="flex flex-wrap justify-center items-center gap-8 text-foreground/70">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm">500+ uspješnih projekata</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-sm">Prosječno 90% brži razvoj</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span className="text-sm">24/7 AI podrška</span>
              </div>
            </div>
          </div>

          {/* Key Statistics */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-foreground">
            <div className="text-center p-6 bg-white/5 rounded-lg backdrop-blur-sm">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-foreground/70 text-base">Završenih projekata</div>
            </div>
            <div className="text-center p-6 bg-white/5 rounded-lg backdrop-blur-sm">
              <div className="text-4xl font-bold text-secondary mb-2">12min</div>
              <div className="text-foreground/70 text-base">Prosječno vrijeme izrade</div>
            </div>
            <div className="text-center p-6 bg-white/5 rounded-lg backdrop-blur-sm">
              <div className="text-4xl font-bold text-accent mb-2">100%</div>
              <div className="text-foreground/70 text-base">Zadovoljstvo klijenata</div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-2 border-primary-glow rounded-full flex justify-center shadow-glow">
          <div className="w-2 h-4 bg-primary-glow rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>

      {/* Section Connector */}
      <div className="section-connector opacity-50"></div>
    </section>
  );
}
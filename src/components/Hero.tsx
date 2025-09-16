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
            <span className="block text-primary text-shadow-glow">Lovable</span>
            <span className="block text-2xl sm:text-3xl lg:text-4xl font-inter font-light text-foreground/90 mt-2">
              Build for the web 20x faster
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl text-foreground/80 mb-8 max-w-2xl mx-auto leading-relaxed font-inter">
            Kreirajte moderne web aplikacije i stranice brzinom koja će vas iznenaditi. 
            Naša AI-powered platforma omogućava vam da izgradite svoj projekt 
            <span className="text-primary font-semibold"> 20 puta brže</span> nego ikad prije.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Button 
              className="btn-cta-primary group px-10 py-4 text-lg font-semibold relative overflow-hidden"
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
                Start building 20x faster
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </Button>
            
            <Button 
              className="btn-secondary-cta group px-10 py-4 text-lg font-medium"
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
              Pogledajte kako funkcionira
            </Button>
          </div>

          {/* Key Statistics */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-foreground">
            <div className="text-center p-6">
              <div className="text-4xl font-bold text-primary mb-2">10,000+</div>
              <div className="text-foreground/70 text-base">Apps built</div>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl font-bold text-secondary mb-2">20x</div>
              <div className="text-foreground/70 text-base">Faster development</div>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl font-bold text-accent mb-2">99%</div>
              <div className="text-foreground/70 text-base">Developer satisfaction</div>
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
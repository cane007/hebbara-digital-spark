import { ArrowRight, Play, Sparkle, Zap, Clock, Users, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroBg from '@/assets/hebbera-workspace.jpg';
import React from 'react';
import ScrollAnimation from '@/components/ScrollAnimations';
import VideoShowcase from './VideoShowcase';

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
          
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-playfair font-bold text-foreground mb-6 leading-tight">
            <span className="block text-primary text-shadow-glow">Prestanite Gubiti Vrijeme na Kod.</span>
            <span className="block text-2xl sm:text-3xl lg:text-4xl font-inter font-light text-foreground/90 mt-2">
              Izgradite Stundensku Web Stranicu 20x Brže s Hebbera Design
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl text-foreground/80 mb-8 max-w-3xl mx-auto leading-relaxed font-inter">
            <span className="text-accent font-bold text-2xl block mb-2">Profesionalni Web Dizajn → Moderne Tehnologije → Kompletno Rješenje</span>
            Naša AI platforma vam omogućuje stvaranje profesionalnih web stranica i aplikacija bez tehničkih znanja. 
            Od početnog koncepta do konačne implementacije.
            <span className="text-primary font-semibold"> Rezultati vidljivi već u prvom tjednu!</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Button 
              className="btn-cta-primary group px-16 py-8 text-2xl font-bold relative overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-300 animate-pulse-glow"
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
                <ArrowRight className="ml-3 h-8 w-8 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-neon opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
            </Button>
            
            <Button 
              className="btn-glass group px-12 py-8 text-xl font-semibold transition-all duration-300"
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
              <Play className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
              Gledajte Live Demo
            </Button>
          </div>

          {/* FOMO Section */}
          <div className="mb-12 p-6 bg-accent/10 border border-accent/30 rounded-2xl backdrop-blur-sm max-w-md mx-auto">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Clock className="w-5 h-5 text-accent" />
              <span className="text-accent font-semibold">Ograničena ponuda!</span>
            </div>
            <p className="text-foreground/80 text-center">
              <span className="font-bold text-accent">Besplatna konzultacija + 50% popust</span> za projekte pokrenute ovaj mjesec
            </p>
            <div className="w-full bg-muted/30 rounded-full h-2 mt-3">
              <div className="bg-accent h-2 rounded-full w-3/4 animate-pulse"></div>
            </div>
            <p className="text-xs text-foreground/60 text-center mt-1">Ostalo: 127 mjesta</p>
          </div>

          {/* Enhanced Social Proof */}
          <div className="mb-12 text-center">
            <p className="text-sm text-foreground/60 mb-6">Više od 500+ uspješno realiziranih projekata za klijente iz cijelog Balkana</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="flex items-center justify-center gap-3 p-4 bg-card/30 rounded-xl border border-primary/20 backdrop-blur-sm">
                <Users className="w-5 h-5 text-primary" />
                <div>
                  <div className="text-2xl font-bold text-primary">500+</div>
                  <div className="text-xs text-foreground/60">Realiziranih projekata</div>
                </div>
              </div>
              <div className="flex items-center justify-center gap-3 p-4 bg-card/30 rounded-xl border border-secondary/20 backdrop-blur-sm">
                <Clock className="w-5 h-5 text-secondary" />
                <div>
                  <div className="text-2xl font-bold text-secondary">2 tjedna</div>
                  <div className="text-xs text-foreground/60">Prosječna realizacija</div>
                </div>
              </div>
              <div className="flex items-center justify-center gap-3 p-4 bg-card/30 rounded-xl border border-accent/20 backdrop-blur-sm">
                <TrendingUp className="w-5 h-5 text-accent" />
                <div>
                  <div className="text-2xl font-bold text-accent">98%</div>
                  <div className="text-xs text-foreground/60">Zadovoljnih klijenata</div>
                </div>
              </div>
            </div>
            
            {/* Testimonial quotes */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="bg-card/20 p-4 rounded-xl border border-primary/20 backdrop-blur-sm">
                <p className="text-sm text-foreground/80 italic mb-2">
                  "Hebbera Design je potpuno transformirala naš online biznis. Prodaja nam je porasla za 300%!"
                </p>
                <p className="text-xs text-primary font-semibold">— Marko Petrović, CEO TechStart Zagreb</p>
              </div>
              <div className="bg-card/20 p-4 rounded-xl border border-secondary/20 backdrop-blur-sm">
                <p className="text-sm text-foreground/80 italic mb-2">
                  "Profesionalnost i brzina realizacije su mi omogućili da se fokusiram na svoje klijente."
                </p>
                <p className="text-xs text-secondary font-semibold">— Ana Kovačević, Vlasnica Beauty Salona</p>
              </div>
            </div>
          </div>

          {/* Video Showcase Section */}
          <div className="mt-16">
            <VideoShowcase />
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
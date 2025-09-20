import { ArrowRight, Play, Sparkle, Zap, Clock, Users, TrendingUp, Star, CheckCircle, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroBg from '@/assets/hebbera-workspace.jpg';
import React from 'react';
import ScrollAnimation from '@/components/ScrollAnimations';

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
          
          {/* Compelling Headline & Subheadline */}
          <h1 className="text-4xl sm:text-6xl lg:text-8xl font-playfair font-bold text-foreground mb-8 leading-tight">
            <span className="block text-gradient bg-gradient-rainbow bg-clip-text text-transparent animate-gradient-x text-shadow-glow">
              Učinimo Vas Vidljivim na Internetu
            </span>
            <span className="block text-2xl sm:text-4xl lg:text-5xl font-inter font-light text-foreground/90 mt-4">
              za <span className="text-accent font-bold">10x Manje Vremena i Troškova</span>
            </span>
          </h1>
          
          {/* Enhanced Value Proposition */}
          <div className="mb-10 max-w-4xl mx-auto">
            <p className="text-xl sm:text-2xl text-foreground/90 mb-6 leading-relaxed font-inter">
              <span className="text-primary font-bold text-3xl block mb-4">🚀 Hebbera Design - #1 Balkanski Web Dizajn Studio</span>
              Kreiramo <span className="text-electric font-bold">web stranice koje prodaju 24/7</span> i povećavaju vašu online vidljivost za <span className="text-accent font-bold">300%</span>. 
              Specijalizirani smo za Balkan tržište - <span className="text-secondary font-bold">razumijemo vašu kulturu, jezik i potrebe</span>.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center justify-center gap-3 p-4 bg-card/30 rounded-2xl border border-primary/30 backdrop-blur-sm hover:scale-105 transition-all duration-300">
                <CheckCircle className="w-6 h-6 text-primary" />
                <span className="text-foreground font-semibold">Rezultati za 7-14 dana</span>
              </div>
              <div className="flex items-center justify-center gap-3 p-4 bg-card/30 rounded-2xl border border-secondary/30 backdrop-blur-sm hover:scale-105 transition-all duration-300">
                <Star className="w-6 h-6 text-secondary" />
                <span className="text-foreground font-semibold">500+ Zadovoljnih klijenata</span>
              </div>
              <div className="flex items-center justify-center gap-3 p-4 bg-card/30 rounded-2xl border border-accent/30 backdrop-blur-sm hover:scale-105 transition-all duration-300">
                <Globe className="w-6 h-6 text-accent" />
                <span className="text-foreground font-semibold">Balkan eksperti</span>
              </div>
            </div>
          </div>

          {/* Clear Call to Action */}
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-12">
            <Button 
              className="btn-cta-primary group px-16 py-8 text-2xl font-bold relative overflow-hidden shadow-2xl transform hover:scale-110 transition-all duration-300 animate-pulse-glow rounded-3xl"
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
                🎯 BESPLATNA KONZULTACIJA
                <ArrowRight className="ml-4 h-8 w-8 group-hover:translate-x-3 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-neon opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
            </Button>
            
            <Button 
              className="btn-glass group px-12 py-8 text-xl font-semibold transition-all duration-300 rounded-3xl"
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
              <Play className="mr-3 h-6 w-6 group-hover:scale-125 transition-transform duration-300" />
              📱 Pogledajte Portfolio
            </Button>
          </div>

          {/* Enhanced FOMO Section */}
          <div className="mb-12 p-8 bg-gradient-to-r from-accent/30 via-primary/30 to-secondary/30 border-2 border-accent/50 rounded-3xl backdrop-blur-sm max-w-3xl mx-auto hover:scale-105 transition-all duration-300 shadow-premium">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Clock className="w-8 h-8 text-accent animate-pulse" />
              <span className="text-accent font-bold text-3xl">🔥 OGRANIČENA PONUDA - PROSINAC 2024!</span>
            </div>
            <p className="text-foreground/90 text-center text-xl mb-4">
              <span className="font-bold text-accent text-3xl block mb-2">50% POPUST + Besplatno Hosting (1 godina)</span>
              <span className="text-lg">za prva 5 klijenata koji pokrenu projekt do kraja godine</span>
            </p>
            <div className="w-full bg-muted/30 rounded-full h-4 mt-4 overflow-hidden">
              <div className="bg-gradient-to-r from-accent to-primary h-4 rounded-full w-3/5 animate-pulse shadow-glow"></div>
            </div>
            <p className="text-sm text-foreground/70 text-center mt-2 font-semibold">
              ⏰ Ostala samo 2 mjesta od 5! Ponuda vrijedi do 31.12.2024.
            </p>
          </div>

          {/* Enhanced Social Proof */}
          <div className="mb-16 text-center">
            <p className="text-lg text-foreground/70 mb-8 font-semibold">
              Više od <span className="text-primary font-bold">500+ uspješno realiziranih projekata</span> za klijente iz <span className="text-secondary font-bold">Hrvatske, Srbije, BiH, Crne Gore i Slovenije</span>
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
              <div className="card-premium p-8 group hover:scale-110 transition-all duration-500">
                <Users className="w-12 h-12 text-primary mx-auto mb-4 group-hover:scale-125 transition-transform duration-300" />
                <div className="text-4xl font-bold text-primary mb-2 group-hover:text-primary-glow transition-colors">500+</div>
                <div className="text-foreground/80 font-semibold">Realiziranih projekata</div>
              </div>
              <div className="card-premium p-8 group hover:scale-110 transition-all duration-500">
                <Clock className="w-12 h-12 text-secondary mx-auto mb-4 group-hover:scale-125 transition-transform duration-300" />
                <div className="text-4xl font-bold text-secondary mb-2 group-hover:text-secondary-glow transition-colors">2 tjedna</div>
                <div className="text-foreground/80 font-semibold">Prosječna realizacija</div>
              </div>
              <div className="card-premium p-8 group hover:scale-110 transition-all duration-500">
                <TrendingUp className="w-12 h-12 text-accent mx-auto mb-4 group-hover:scale-125 transition-transform duration-300" />
                <div className="text-4xl font-bold text-accent mb-2 group-hover:text-accent-glow transition-colors">98%</div>
                <div className="text-foreground/80 font-semibold">Stopa zadovoljstva</div>
              </div>
            </div>
            
            {/* Premium testimonial cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <div className="card-premium p-8 text-left hover:scale-105 transition-all duration-500">
                <div className="flex items-center gap-2 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-lg text-foreground/90 italic mb-4 leading-relaxed">
                  "Hebbera Design je potpuno transformirala naš online biznis. Prodaja nam je porasla za 280% u prva 3 mjeseca! Konačno imamo web stranicu koja radi za nas 24/7."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
                    MP
                  </div>
                  <div>
                    <p className="text-primary font-bold text-lg">Marko Petrović</p>
                    <p className="text-foreground/70">Vlasnik IT tvrtke, Zagreb</p>
                  </div>
                </div>
              </div>
              
              <div className="card-premium p-8 text-left hover:scale-105 transition-all duration-500">
                <div className="flex items-center gap-2 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-lg text-foreground/90 italic mb-4 leading-relaxed">
                  "Nevjerojatna profesionalnost! Za 10 dana sam dobila web stranicu koja izgleda bolje od konkurencije. Rezervacije su se udvostručile!"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center text-white font-bold text-xl">
                    AK
                  </div>
                  <div>
                    <p className="text-secondary font-bold text-lg">Ana Kovačević</p>
                    <p className="text-foreground/70">Vlasnica wellness centra, Beograd</p>
                  </div>
                </div>
              </div>
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
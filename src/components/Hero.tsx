import { ArrowRight, Play, Sparkle, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroBg from '@/assets/hero-bg.jpg';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient">
      {/* Dynamic Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30 scale-105 animate-spin-slow" 
        style={{ backgroundImage: `url(${heroBg})` }} 
      />
      
      {/* Multi-layer Gradient System */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 bg-gradient-mesh opacity-20" />
      
      {/* Revolutionary Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="floating absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl shadow-glow"></div>
        <div className="floating-alt absolute top-1/3 right-1/4 w-[28rem] h-[28rem] bg-secondary/25 rounded-full blur-3xl shadow-neon" 
             style={{ animationDelay: '2s' }}></div>
        <div className="orbital absolute bottom-1/4 left-1/3 w-80 h-80 bg-accent/20 rounded-full blur-2xl"></div>
        <div className="floating absolute top-1/2 right-1/3 w-64 h-64 bg-tertiary/15 rounded-full blur-3xl" 
             style={{ animationDelay: '4s' }}></div>
        
        {/* Particle System */}
        {[...Array(12)].map((_, i) => (
          <div 
            key={i}
            className={`absolute w-2 h-2 bg-primary-glow rounded-full animate-floating opacity-60`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${6 + Math.random() * 6}s`
            }}
          />
        ))}
      </div>

      {/* Revolutionary Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="animate-fade-in-up">
          {/* Floating Icons */}
          <div className="relative mb-8">
            <Sparkle className="absolute -top-4 -left-8 w-6 h-6 text-primary-glow animate-pulse" />
            <Zap className="absolute -top-2 -right-12 w-8 h-8 text-accent-glow animate-bounce" />
          </div>
          
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-playfair font-bold text-foreground mb-8 leading-none relative">
            <span className="text-neon drop-shadow-2xl">Vaša digitalna</span>
            <span className="block text-gradient animate-gradient-x text-shadow-glow bg-gradient-rainbow bg-clip-text text-transparent text-7xl sm:text-8xl lg:text-9xl">
              TRANSFORMACIJA
            </span>
            <span className="block text-electric text-5xl sm:text-6xl lg:text-7xl mt-4">
              počinje ovdje
            </span>
          </h1>
          
          <p className="text-2xl sm:text-3xl text-foreground/90 mb-12 max-w-4xl mx-auto leading-relaxed font-inter font-light">
            Kreiramo <span className="text-primary font-bold">izuzetne web stranice</span>, pokretamo 
            <span className="text-secondary font-bold"> uspješne digitalne kampanje</span> i 
            pomažemo vašem biznisu da postane <span className="text-accent font-bold">vidljiv na internetu</span>.
          </p>

          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-16">
            <Button className="btn-hero group px-12 py-6 text-xl relative overflow-hidden">
              <span className="relative z-10 flex items-center">
                Započnite transformaciju
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
            </Button>
            
            <Button className="btn-glass group px-12 py-6 text-xl">
              <Play className="mr-3 h-6 w-6 group-hover:scale-125 transition-transform duration-300" />
              Pogledajte naš rad
            </Button>
          </div>

          {/* Revolutionary Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 text-foreground">
            <div className="animate-bounce-in card-interactive p-8 rounded-3xl" style={{ animationDelay: '0.2s' }}>
              <div className="text-6xl font-bold text-gradient bg-gradient-primary bg-clip-text text-transparent mb-2">150+</div>
              <div className="text-foreground/80 text-lg font-medium">Zadovoljnih klijenata</div>
            </div>
            <div className="animate-bounce-in card-interactive p-8 rounded-3xl" style={{ animationDelay: '0.4s' }}>
              <div className="text-6xl font-bold text-gradient bg-gradient-secondary bg-clip-text text-transparent mb-2">200+</div>
              <div className="text-foreground/80 text-lg font-medium">Uspješnih projekata</div>
            </div>
            <div className="animate-bounce-in card-interactive p-8 rounded-3xl" style={{ animationDelay: '0.6s' }}>
              <div className="text-6xl font-bold text-gradient bg-gradient-accent bg-clip-text text-transparent mb-2">5+</div>
              <div className="text-foreground/80 text-lg font-medium">Godina iskustva</div>
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
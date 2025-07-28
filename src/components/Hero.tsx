import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroBg from '@/assets/hero-bg.jpg';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-hero opacity-90" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="floating absolute top-1/4 left-1/4 w-72 h-72 bg-primary-glow/20 rounded-full blur-3xl"></div>
        <div className="floating absolute top-1/3 right-1/4 w-96 h-96 bg-secondary-glow/20 rounded-full blur-3xl" style={{ animationDelay: '2s' }}></div>
        <div className="floating absolute bottom-1/4 left-1/3 w-80 h-80 bg-accent-glow/20 rounded-full blur-3xl" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-playfair font-bold text-white mb-6 leading-tight">
            Vaša digitalna
            <span className="block text-gradient bg-gradient-to-r from-secondary-glow to-accent-glow bg-clip-text text-transparent">
              transformacija
            </span>
            počinje ovdje
          </h1>
          
          <p className="text-xl sm:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Kreiramo izuzetne web stranice, pokretamo uspješne digitalne kampanje i 
            pomažemo vašem biznisu da postane vidljiv na internetu.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Button className="btn-hero group px-8 py-4 text-lg">
              Započnite transformaciju
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button variant="outline" className="btn-glass group px-8 py-4 text-lg">
              <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Pogledajte naš rad
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-white">
            <div className="animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-4xl font-bold text-accent-glow">150+</div>
              <div className="text-white/80">Zadovoljnih klijenata</div>
            </div>
            <div className="animate-scale-in" style={{ animationDelay: '0.4s' }}>
              <div className="text-4xl font-bold text-secondary-glow">200+</div>
              <div className="text-white/80">Uspješnih projekata</div>
            </div>
            <div className="animate-scale-in" style={{ animationDelay: '0.6s' }}>
              <div className="text-4xl font-bold text-primary-glow">5+</div>
              <div className="text-white/80">Godina iskustva</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
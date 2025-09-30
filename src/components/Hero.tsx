import { useEffect, useState } from 'react';
import { ArrowRight, Sparkles, Code, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Hero() {
  const [displayText, setDisplayText] = useState('');
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const phrases = [
    'Kreativnost koja prodaje',
    'Dizajn koji osvaja',
    'Tehnologija koja inspiriše',
    'Web rješenja za budućnost'
  ];

  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentPhrase.length) {
          setDisplayText(currentPhrase.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(currentPhrase.slice(0, displayText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentPhraseIndex]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-secondary/20 to-primary/5 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6 animate-fade-in">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Novi pristup web dizajnu na Balkanu</span>
          </div>
          
          {/* Main Headline with Typewriter Effect */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-playfair font-bold text-foreground mb-6 leading-tight">
            <span className="block mb-2">Hebbera Design</span>
            <span className="gradient-text block min-h-[1.2em]">
              {displayText}
              <span className="animate-pulse">|</span>
            </span>
          </h1>
          
          {/* Value Proposition */}
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            Vaš partner za digitalni uspjeh. Kreiramo web stranice koje ne samo da izgledaju predivno, 
            već i donose stvarne rezultate za vaš biznis.
          </p>
          
          {/* Trust Signals */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-3 p-4 bg-card/80 backdrop-blur border border-border rounded-lg hover-lift">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                <Code className="h-5 w-5 text-primary" />
              </div>
              <div className="text-left">
                <p className="font-semibold text-foreground">Moderne Tehnologije</p>
                <p className="text-xs text-muted-foreground">React, TypeScript, AI</p>
              </div>
            </div>
            
            <div className="flex items-center justify-center gap-3 p-4 bg-card/80 backdrop-blur border border-border rounded-lg hover-lift">
              <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                <Zap className="h-5 w-5 text-accent" />
              </div>
              <div className="text-left">
                <p className="font-semibold text-foreground">Brza Isporuka</p>
                <p className="text-xs text-muted-foreground">7-14 dana projekat</p>
              </div>
            </div>
            
            <div className="flex items-center justify-center gap-3 p-4 bg-card/80 backdrop-blur border border-border rounded-lg hover-lift">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                <Sparkles className="h-5 w-5 text-primary" />
              </div>
              <div className="text-left">
                <p className="font-semibold text-foreground">Lokalna Podrška</p>
                <p className="text-xs text-muted-foreground">Balkan tržište</p>
              </div>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="btn-primary text-lg px-8 py-6 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 group"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Započnite Besplatnu Konzultaciju
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 py-6 border-2"
              onClick={() => document.getElementById('process')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Saznajte Više o Nama
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

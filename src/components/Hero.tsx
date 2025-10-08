import { useEffect, useState } from 'react';
import { ArrowRight, Sparkles, Code, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
export default function Hero() {
  const [displayText, setDisplayText] = useState('');
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const phrases = ['Kreativnost koja prodaje', 'Dizajn koji osvaja', 'Tehnologija koja inspiriše', 'Web rješenja za budućnost'];
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
          setCurrentPhraseIndex(prev => (prev + 1) % phrases.length);
        }
      }
    }, isDeleting ? 50 : 100);
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentPhraseIndex]);
  return <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 via-secondary/15 to-accent/10 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse-glow floating"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse-glow floating-alt" style={{
        animationDelay: '1s'
      }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-secondary/15 rounded-full blur-3xl animate-rotate-slow"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div style={{
          backgroundSize: '200% auto'
        }} className="inline-flex items-center gap-2 bg-gradient-to-r from-primary via-secondary to-accent rounded-full mb-6 animate-shimmer shadow-lg hover:shadow-2xl transition-all hover:scale-105 px-[100px] py-[10px] mx-0 my-[12px]">
            <Sparkles className="h-4 w-4 text-white animate-bounce-subtle" />
            <span className="text-sm font-bold text-white">Novi pristup web dizajnu na Balkanu</span>
          </div>
          
          {/* Main Headline with Typewriter Effect and H1 for SEO */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-playfair font-bold text-foreground mb-6 leading-tight">
            <span className="block mb-2 animate-fade-in-down">Hebbera Design - Web Dizajn Studio</span>
            <span className="gradient-text block min-h-[1.2em] animate-gradient-shift">
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
            <div className="flex items-center justify-center gap-3 p-5 bg-card border-2 border-primary/20 rounded-xl hover-lift shadow-md hover:shadow-xl hover:border-primary/40 transition-all">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/70 rounded-xl flex items-center justify-center shadow-lg">
                <Code className="h-6 w-6 text-white" />
              </div>
              <div className="text-left">
                <p className="font-bold text-foreground">Moderne Tehnologije</p>
                <p className="text-sm text-muted-foreground font-medium">React, TypeScript, AI</p>
              </div>
            </div>
            
            <div className="flex items-center justify-center gap-3 p-5 bg-card border-2 border-accent/20 rounded-xl hover-lift shadow-md hover:shadow-xl hover:border-accent/40 transition-all">
              <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent/70 rounded-xl flex items-center justify-center shadow-lg">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <div className="text-left">
                <p className="font-bold text-foreground">Brza Isporuka</p>
                <p className="text-sm text-muted-foreground font-medium">7-14 dana projekat</p>
              </div>
            </div>
            
            <div className="flex items-center justify-center gap-3 p-5 bg-card border-2 border-secondary/20 rounded-xl hover-lift shadow-md hover:shadow-xl hover:border-secondary/40 transition-all">
              <div className="w-12 h-12 bg-gradient-to-br from-secondary to-secondary/70 rounded-xl flex items-center justify-center shadow-lg">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
              <div className="text-left">
                <p className="font-bold text-foreground">Lokalna Podrška</p>
                <p className="text-sm text-muted-foreground font-medium">Balkan tržište</p>
              </div>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-gradient-to-r from-primary via-secondary to-accent text-white text-lg px-10 py-7 shadow-xl hover:shadow-2xl hover:scale-110 transition-all group font-bold animate-pulse-glow" style={{
            backgroundSize: '200% auto'
          }} onClick={() => document.getElementById('contact')?.scrollIntoView({
            behavior: 'smooth'
          })}>
              Započnite Besplatnu Konzultaciju
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-10 py-7 border-2 border-primary text-primary hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:text-white font-bold shadow-lg hover:shadow-2xl transition-all hover:scale-105" onClick={() => document.getElementById('process')?.scrollIntoView({
            behavior: 'smooth'
          })}>
              Saznajte Više o Nama
            </Button>
          </div>
        </div>
      </div>
    </section>;
}
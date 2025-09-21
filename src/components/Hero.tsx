import { ArrowRight, CheckCircle, Globe, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-primary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-playfair font-bold text-foreground mb-6 leading-tight">
            <span className="gradient-text">Hebbera Design</span>
            <br />
            <span className="text-2xl sm:text-3xl lg:text-4xl font-light">
              Vaš partner za uspjeh na internetu
            </span>
          </h1>
          
          {/* Value Proposition */}
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Kreiramo profesionalne web stranice koje donose rezultate. 
            Specijalizirani za Balkan tržište sa preko 500 uspješnih projekata.
          </p>
          
          {/* Key Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-2 p-4 bg-card border border-border rounded-lg">
              <Users className="h-5 w-5 text-primary" />
              <span className="font-semibold">500+ Klijenata</span>
            </div>
            <div className="flex items-center justify-center gap-2 p-4 bg-card border border-border rounded-lg">
              <CheckCircle className="h-5 w-5 text-accent" />
              <span className="font-semibold">98% Zadovoljstvo</span>
            </div>
            <div className="flex items-center justify-center gap-2 p-4 bg-card border border-border rounded-lg">
              <Globe className="h-5 w-5 text-primary" />
              <span className="font-semibold">Balkan Eksperti</span>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="btn-primary text-lg px-8 py-4">
              Besplatna Konzultacija
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-4">
              Pogledajte Portfolio
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
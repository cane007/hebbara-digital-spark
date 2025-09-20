import { Play, Monitor, Smartphone, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

export default function VideoShowcase() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-subtle opacity-50" />
      <div className="absolute top-10 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-playfair font-bold text-foreground mb-4">
            Gledajte Kako <span className="text-primary">Magic Nastaje</span>
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Od prve ideje do live web stranice - pogledajte naš proces rada u akciji
          </p>
        </div>

        {/* Video Player Mockup */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="relative bg-card/30 backdrop-blur-sm rounded-2xl border border-primary/20 overflow-hidden shadow-elegant">
            {/* Video Header */}
            <div className="flex items-center justify-between p-4 border-b border-border/20 bg-card/50">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              </div>
              <div className="text-xs text-foreground/60 font-mono">
                hebbera-design-process.mp4
              </div>
            </div>

            {/* Video Content Area */}
            <div className="relative aspect-video bg-gradient-to-br from-background to-muted">
              {!isPlaying ? (
                <>
                  {/* Mockup Content */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="mb-8 relative">
                        {/* Floating Elements Animation */}
                        <div className="absolute -top-4 -left-4 animate-bounce">
                          <Monitor className="w-8 h-8 text-primary" />
                        </div>
                        <div className="absolute -top-2 -right-6 animate-pulse">
                          <Smartphone className="w-6 h-6 text-accent" />
                        </div>
                        <div className="absolute -bottom-2 left-2 animate-ping">
                          <Zap className="w-5 h-5 text-secondary" />
                        </div>
                        
                        {/* Main Play Button */}
                        <Button
                          size="lg"
                          className="w-20 h-20 rounded-full bg-primary/20 hover:bg-primary/30 backdrop-blur-sm border-2 border-primary/40 group transition-all duration-300 hover:scale-110"
                          onClick={() => setIsPlaying(true)}
                        >
                          <Play className="w-8 h-8 text-primary group-hover:text-primary-glow ml-1" fill="currentColor" />
                        </Button>
                      </div>
                      
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        Hebbera Design Process u Akciji
                      </h3>
                      <p className="text-foreground/70 text-sm">
                        3 minute demo • Potpuni workflow od ideje do deployment-a
                      </p>
                    </div>
                  </div>

                  {/* Mockup Preview Screens */}
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end opacity-60">
                    <div className="bg-card/80 rounded-lg p-2 backdrop-blur-sm border border-border/30">
                      <div className="w-16 h-10 bg-gradient-primary rounded opacity-80"></div>
                      <div className="text-xs text-center mt-1 text-foreground/60">Desktop</div>
                    </div>
                    <div className="bg-card/80 rounded-lg p-2 backdrop-blur-sm border border-border/30">
                      <div className="w-12 h-8 bg-gradient-secondary rounded opacity-80"></div>
                      <div className="text-xs text-center mt-1 text-foreground/60">Tablet</div>
                    </div>
                    <div className="bg-card/80 rounded-lg p-2 backdrop-blur-sm border border-border/30">
                      <div className="w-8 h-10 bg-gradient-accent rounded opacity-80"></div>
                      <div className="text-xs text-center mt-1 text-foreground/60">Mobile</div>
                    </div>
                  </div>
                </>
              ) : (
                <div className="absolute inset-0 bg-background flex items-center justify-center">
                  <div className="text-center animate-fade-in">
                    <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mb-4 mx-auto"></div>
                    <p className="text-foreground/80">Učitava se demo video...</p>
                    <p className="text-sm text-foreground/60 mt-2">
                      Kontaktirajte nas za live demo prezentaciju!
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center group">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <span className="text-2xl font-bold text-primary">1</span>
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Konzultacija</h3>
            <p className="text-foreground/70 text-sm">
              Analizirajemo vaše potrebe i ciljevе
            </p>
          </div>
          
          <div className="text-center group">
            <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <span className="text-2xl font-bold text-secondary">2</span>
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Dizajn & Razvoj</h3>
            <p className="text-foreground/70 text-sm">
              Kreiramo modernu, responzivnu stranicu
            </p>
          </div>
          
          <div className="text-center group">
            <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <span className="text-2xl font-bold text-accent">3</span>
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Launch & Podrška</h3>
            <p className="text-foreground/70 text-sm">
              Lansiramo i održavamo vašu stranicu
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <Button size="lg" className="btn-cta-primary group">
            Zakazujte Besplatnu Konzultaciju
            <Play className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <p className="text-sm text-foreground/60 mt-3">
            30-minutni razgovor o vašem projektu • Bez obveza
          </p>
        </div>
      </div>
    </section>
  );
}
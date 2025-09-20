import { Award, Users, Target, Zap, Heart, Star, Trophy, Rocket } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function About() {
  const values = [
    {
      icon: <Target className="h-10 w-10" />,
      title: "Fokus na rezultate",
      description: "Svaki projekt pristupamo s jasnim ciljem - vaš uspjeh u digitalnom svijetu.",
      gradient: "gradient-primary"
    },
    {
      icon: <Zap className="h-10 w-10" />,
      title: "Inovacija",
      description: "Koristimo najnovije tehnologije i trendove za stvaranje izuzetnih digitalnih iskustava.",
      gradient: "gradient-secondary"
    },
    {
      icon: <Users className="h-10 w-10" />,
      title: "Partnerstvo",
      description: "Nismo samo pružatelj usluga - mi smo vaš digitalni partner za dugoročni uspjeh.",
      gradient: "gradient-accent"
    },
    {
      icon: <Award className="h-10 w-10" />,
      title: "Kvaliteta",
      description: "Svaki detalj je važan. Težimo izvrsnosti u svakom pikselu i svakoj liniji koda.",
      gradient: "gradient-tertiary"
    }
  ];

  const stats = [
    { 
      number: "500+", 
      label: "Zadovoljnih klijenata", 
      icon: <Heart className="h-6 w-6" />,
      gradient: "gradient-primary" 
    },
    { 
      number: "5+", 
      label: "Godina iskustva", 
      icon: <Rocket className="h-6 w-6" />,
      gradient: "gradient-secondary" 
    },
    { 
      number: "98%", 
      label: "Stopa zadovoljstva", 
      icon: <Star className="h-6 w-6" />,
      gradient: "gradient-accent" 
    },
    { 
      number: "7-14", 
      label: "Dana realizacije", 
      icon: <Trophy className="h-6 w-6" />,
      gradient: "gradient-tertiary" 
    }
  ];

  return (
    <section id="about" className="section-padding section-dark relative overflow-hidden">
      {/* Advanced Background Effects */}
      <div className="absolute inset-0">
        <div className="orbital absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="floating-alt absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"></div>
        <div className="floating absolute top-1/2 right-1/3 w-64 h-64 bg-accent/5 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Enhanced Content */}
          <div className="space-y-10 animate-slide-in-left">
            <div>
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                <span className="text-primary font-semibold text-lg uppercase tracking-wider">O nama</span>
                <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
              </div>

              <h2 className="text-5xl sm:text-6xl lg:text-7xl font-playfair font-bold text-foreground mb-8 leading-tight">
                Balkanski <span className="text-gradient bg-gradient-rainbow bg-clip-text text-transparent animate-gradient-x">web dizajn</span> lideri
              </h2>
              
              <p className="text-2xl text-foreground/90 leading-relaxed mb-8 font-light">
                <span className="text-primary font-bold">Hebbera Design</span> je vodeći web dizajn studio specijaliziran za 
                <span className="text-secondary font-bold">Hrvatsko, Srpsko, Bosansko, Crnogorsko i Slovensko tržište</span>. 
                Sa više od <span className="text-accent font-bold">5 godina iskustva</span>, realizirali smo preko 
                <span className="text-tertiary font-bold">500 uspješnih projekata</span>.
              </p>
              
              <p className="text-xl text-foreground/80 leading-relaxed mb-10">
                Razumijemo <span className="text-electric font-bold">mentalitet, kulturu i potrebe Balkanskih kupaca</span>. 
                Kreiramo web stranice koje <span className="text-neon font-bold">govore vašim klijentima na njihovom jeziku</span> 
                i povećavaju prodaju za 200-400%.
              </p>

              <Button className="btn-hero group">
                🎯 Zatražite Besplatnu Konzultaciju
                <Rocket className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Revolutionary Stats */}
            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, index) => (
                <Card key={index} className="card-interactive group p-6 relative overflow-hidden">
                  <div className={`absolute inset-0 bg-${stat.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  
                  <div className="relative z-10 text-center">
                    <div className={`inline-flex items-center justify-center w-12 h-12 bg-${stat.gradient} rounded-2xl mb-4 text-white group-hover:scale-125 transition-transform duration-300`}>
                      {stat.icon}
                    </div>
                    
                    <div className={`text-4xl font-bold text-gradient bg-${stat.gradient} bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300`}>
                      {stat.number}
                    </div>
                    
                    <div className="text-foreground/80 font-medium group-hover:text-foreground transition-colors">
                      {stat.label}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Enhanced Values Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 animate-slide-in-right">
            {values.map((value, index) => (
              <Card key={index} className="card-premium group h-full tilt-hover relative overflow-hidden">
                <div className={`absolute inset-0 bg-${value.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-700`}></div>
                
                <CardContent className="p-8 relative z-10">
                  <div className={`inline-flex items-center justify-center w-20 h-20 bg-${value.gradient} rounded-3xl mb-6 text-white group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-glow`}>
                    {value.icon}
                  </div>
                  
                  <h3 className="text-xl font-playfair font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                    {value.title}
                  </h3>
                  
                  <p className="text-foreground/70 leading-relaxed group-hover:text-foreground/90 transition-colors duration-300">
                    {value.description}
                  </p>

                  {/* Decorative Elements */}
                  <div className="absolute top-4 right-4 w-3 h-3 bg-primary/30 rounded-full group-hover:bg-primary group-hover:scale-150 transition-all duration-300"></div>
                  <div className="absolute bottom-4 left-4 w-2 h-2 bg-secondary/30 rounded-full group-hover:bg-secondary group-hover:scale-200 transition-all duration-300"></div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Revolutionary Call to Action */}
        <div className="mt-24">
          <Card className="card-premium relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
            <div className="absolute inset-0 bg-gradient-mesh opacity-30"></div>
            
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="floating absolute top-8 left-8 w-32 h-32 bg-primary/20 rounded-full blur-2xl"></div>
              <div className="floating-alt absolute bottom-8 right-8 w-40 h-40 bg-secondary/15 rounded-full blur-2xl"></div>
            </div>

            <div className="relative z-10 p-12 text-center">
              {/* Particle Effects */}
              {[...Array(8)].map((_, i) => (
                <div 
                  key={i}
                  className="absolute w-1 h-1 bg-primary-glow rounded-full animate-floating opacity-60"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 4}s`
                  }}
                />
              ))}

              <h3 className="text-4xl font-playfair font-bold mb-6 text-foreground">
                Spremni za <span className="text-gradient bg-gradient-rainbow bg-clip-text text-transparent animate-gradient-x">digitalnu transformaciju</span>?
              </h3>
              
              <p className="text-xl text-foreground/90 mb-8 max-w-3xl mx-auto">
                Kontaktirajte nas danas i saznajte kako možemo pomoći vašem biznisu 
                da postigne <span className="text-electric font-bold">online uspjeh koji zaslužuje</span>.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Button className="btn-glass">
                  Razgovarajmo o vašem projektu
                  <Target className="ml-3 h-5 w-5" />
                </Button>
                
                <Button className="btn-accent">
                  Pogledajte naš portfolio
                  <Trophy className="ml-3 h-5 w-5" />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
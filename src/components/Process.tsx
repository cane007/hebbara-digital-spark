import { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { MessageSquare, Palette, Code, Rocket, CheckCircle } from 'lucide-react';
export default function Process() {
  const sectionRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const cards = entry.target.querySelectorAll('.process-card');
          cards.forEach((card, index) => {
            setTimeout(() => {
              card.classList.add('visible');
            }, index * 150);
          });
        }
      });
    }, {
      threshold: 0.1
    });
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);
  const steps = [{
    icon: MessageSquare,
    step: '01',
    title: 'Besplatna Konzultacija',
    description: 'Razgovaramo o vašim ciljevima, viziji i potrebama. Analiziramo vašu konkurenciju i tržište.',
    bgColor: 'bg-primary/10',
    iconColor: 'text-primary'
  }, {
    icon: Palette,
    step: '02',
    title: 'Dizajn & Planiranje',
    description: 'Kreiramo moderan dizajn koji savršeno odgovara vašem brendu i privlači vašu ciljnu publiku.',
    bgColor: 'bg-accent/10',
    iconColor: 'text-accent'
  }, {
    icon: Code,
    step: '03',
    title: 'Razvoj & Testiranje',
    description: 'Koristimo najnovije tehnologije za izgradnju brzog, sigurnog i responzivnog web sajta.',
    bgColor: 'bg-secondary/10',
    iconColor: 'text-secondary'
  }, {
    icon: Rocket,
    step: '04',
    title: 'Lansiranje & Podrška',
    description: 'Lansiramo vaš sajt i pružamo kontinuiranu podršku kako biste postigli maksimalne rezultate.',
    bgColor: 'bg-primary/10',
    iconColor: 'text-primary'
  }];
  return <section ref={sectionRef} id="process" className="section-padding bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float-x"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float-y"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in-down">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-primary/20 via-accent/20 to-secondary/20 rounded-full mb-4 border border-primary/30 hover:scale-105 transition-transform">
            <CheckCircle className="h-4 w-4 text-primary animate-pulse" />
            <span className="text-sm font-bold text-primary">Naš Proces Rada</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold text-foreground mb-4">
            Kako <span className="gradient-text">Radimo</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Jednostavan i transparentan proces koji vodi do izvanrednih rezultata
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connection Lines - Enhanced */}
          <div className="hidden lg:block absolute top-1/4 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-secondary opacity-30 animate-gradient-shift rounded-full"></div>
          
          {steps.map((step, index) => <Card key={index} className="process-card fade-in-up relative overflow-hidden group hover-float border-2 border-transparent hover:border-primary/30 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-500">
              <CardContent className="p-6 relative">
                {/* Animated Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Step Number Background */}
                <div className="absolute -top-6 -right-6 text-8xl font-bold text-primary/5 group-hover:text-primary/15 transition-all duration-300 group-hover:scale-110 py-[30px] mx-0 my-[5px] px-[30px]">
                  {step.step}
                </div>
                
                {/* Icon with Glow */}
                <div className={`w-16 h-16 bg-gradient-to-br from-primary via-accent to-secondary rounded-xl flex items-center justify-center mb-6 relative z-10 shadow-lg group-hover:shadow-2xl group-hover:scale-125 group-hover:rotate-6 transition-all duration-500`}>
                  <step.icon className="h-8 w-8 text-white" />
                </div>
                
                {/* Step Number */}
                <div className="text-sm font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2 relative z-10">
                  Korak {step.step}
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300 relative z-10">
                  {step.title}
                </h3>
                
                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed relative z-10">
                  {step.description}
                </p>
              </CardContent>
            </Card>)}
        </div>

        {/* Bottom CTA - Enhanced */}
        <div className="text-center mt-16 animate-fade-in-up">
          <div className="inline-block p-8 bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 rounded-2xl border border-primary/20 hover:border-primary/40 transition-all hover:scale-105 hover-glow">
            <p className="text-lg font-semibold text-foreground mb-4">
              Spremni da započnete vaš projekat?
            </p>
            <a href="#contact" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary via-accent to-secondary text-white font-bold text-lg rounded-xl hover:scale-110 transition-all shadow-lg hover:shadow-2xl">
              <span>Kontaktirajte nas danas</span>
              <CheckCircle className="h-5 w-5 animate-bounce-subtle" />
            </a>
          </div>
        </div>
      </div>
    </section>;
}
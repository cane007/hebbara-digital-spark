import { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { MessageSquare, Palette, Code, Rocket, CheckCircle } from 'lucide-react';

export default function Process() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.process-card');
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('visible');
              }, index * 150);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const steps = [
    {
      icon: MessageSquare,
      step: '01',
      title: 'Besplatna Konzultacija',
      description: 'Razgovaramo o vašim ciljevima, viziji i potrebama. Analiziramo vašu konkurenciju i tržište.',
      bgColor: 'bg-primary/10',
      iconColor: 'text-primary'
    },
    {
      icon: Palette,
      step: '02',
      title: 'Dizajn & Planiranje',
      description: 'Kreiramo moderan dizajn koji savršeno odgovara vašem brendu i privlači vašu ciljnu publiku.',
      bgColor: 'bg-accent/10',
      iconColor: 'text-accent'
    },
    {
      icon: Code,
      step: '03',
      title: 'Razvoj & Testiranje',
      description: 'Koristimo najnovije tehnologije za izgradnju brzog, sigurnog i responzivnog web sajta.',
      bgColor: 'bg-secondary/10',
      iconColor: 'text-secondary'
    },
    {
      icon: Rocket,
      step: '04',
      title: 'Lansiranje & Podrška',
      description: 'Lansiramo vaš sajt i pružamo kontinuiranu podršku kako biste postigli maksimalne rezultate.',
      bgColor: 'bg-primary/10',
      iconColor: 'text-primary'
    }
  ];

  return (
    <section ref={sectionRef} id="process" className="section-padding bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
            <CheckCircle className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Naš Proces Rada</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold text-foreground mb-4">
            Kako Radimo?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Jednostavan i transparentan proces koji vodi do izvanrednih rezultata
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connection Lines */}
          <div className="hidden lg:block absolute top-1/4 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-accent to-secondary opacity-20"></div>
          
          {steps.map((step, index) => (
            <Card key={index} className="process-card fade-in-up card-interactive relative overflow-hidden group">
              <CardContent className="p-6">
                {/* Step Number Background */}
                <div className="absolute -top-6 -right-6 text-8xl font-bold text-primary/5 group-hover:text-primary/10 transition-colors">
                  {step.step}
                </div>
                
                {/* Icon */}
                <div className={`w-16 h-16 ${step.bgColor} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform relative z-10`}>
                  <step.icon className={`h-8 w-8 ${step.iconColor}`} />
                </div>
                
                {/* Step Number */}
                <div className="text-sm font-bold text-primary mb-2">
                  Korak {step.step}
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {step.title}
                </h3>
                
                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-4">
            Spremni da započnete vaš projekat?
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center gap-2 text-primary font-semibold text-lg hover:text-primary/80 transition-colors"
          >
            <span>Kontaktirajte nas danas</span>
            <CheckCircle className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}

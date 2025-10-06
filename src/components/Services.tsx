import { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Monitor, Smartphone, Search, Rocket } from 'lucide-react';

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.service-card');
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('visible');
              }, index * 100);
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
  const services = [
    {
      icon: Monitor,
      title: 'Web Dizajn',
      description: 'Moderni, responsivni web sajtovi koji privlače i zadržavaju korisnike.',
      features: ['Responsivan dizajn', 'SEO optimizacija', 'Brza učitavanja']
    },
    {
      icon: Smartphone,
      title: 'Mobilne Aplikacije',
      description: 'Razvoj mobilnih aplikacija za iOS i Android platforme.',
      features: ['Native performanse', 'Intuitivni interfejs', 'Cross-platform']
    },
    {
      icon: Search,
      title: 'SEO Optimizacija',
      description: 'Poboljšanje vidljivosti u pretraživačima i privlačenje ciljanih posjetilaca.',
      features: ['Keyword istraživanje', 'On-page SEO', 'Analitika']
    },
    {
      icon: Rocket,
      title: 'Digitalni Marketing',
      description: 'Kompletne digitalne kampanje koje povećavaju prodaju i prepoznatljivost brenda.',
      features: ['Google Ads', 'Facebook kampanje', 'Email marketing']
    }
  ];

  return (
    <section ref={sectionRef} id="services" className="section-padding bg-gradient-to-b from-background via-muted/30 to-background">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-foreground mb-4">
            Naše Usluge
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Pružamo kompletan spektar digitalnih usluga za vaš poslovni uspjeh
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="service-card fade-in-up card-clean group hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 border-2 hover:border-primary/50 hover:animate-pulse-glow">
              <CardContent className="p-7">
                <div className="w-14 h-14 bg-gradient-to-br from-primary via-secondary to-accent rounded-xl flex items-center justify-center mb-5 group-hover:scale-125 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                  <service.icon className="h-7 w-7 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground mb-5 text-base leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-1">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-muted-foreground flex items-center">
                      <div className="w-1 h-1 bg-primary rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
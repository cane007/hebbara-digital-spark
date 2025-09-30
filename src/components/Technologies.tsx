import { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Code2, Smartphone, Search, Shield, Zap, Globe } from 'lucide-react';

export default function Technologies() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.tech-card');
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

  const technologies = [
    {
      icon: Code2,
      title: 'React & TypeScript',
      description: 'Koristimo najmoderniji frontend tehnologije za brze i pouzdane aplikacije.',
      features: ['Komponente koje se mogu ponovo koristiti', 'Type safety', 'Izvrsne performanse']
    },
    {
      icon: Smartphone,
      title: 'Responsive Design',
      description: 'Vaš sajt će savršeno izgledati na svim uređajima - od mobitela do desktop računara.',
      features: ['Mobile-first pristup', 'Adaptive layout', 'Touch optimizacija']
    },
    {
      icon: Search,
      title: 'SEO Optimizacija',
      description: 'Gradimo sajtove koje Google voli i koje vaši klijenti lako pronalaze.',
      features: ['On-page SEO', 'Semantic HTML', 'Schema markup']
    },
    {
      icon: Zap,
      title: 'Brzina & Performanse',
      description: 'Optimizujemo svaki aspekt kako bi vaš sajt učitavao bliskom brzinom.',
      features: ['Lazy loading', 'Code splitting', 'Image optimization']
    },
    {
      icon: Shield,
      title: 'Sigurnost',
      description: 'Implementiramo najbolje bezbjednosne prakse kako bi vaš sajt bio siguran.',
      features: ['HTTPS', 'Data encryption', 'Regular updates']
    },
    {
      icon: Globe,
      title: 'Hosting & Deployment',
      description: 'Brinemo se o hosting-u i redovnom održavanju vašeg sajta.',
      features: ['CDN integracija', 'Auto backups', '99.9% uptime']
    }
  ];

  return (
    <section ref={sectionRef} id="technologies" className="section-padding bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full mb-4">
            <Code2 className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium text-accent">Tehnologije</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold text-foreground mb-4">
            Šta Koristimo?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Najnovije tehnologije i najbolje prakse za vaš digitalni uspjeh
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <Card key={index} className="tech-card scale-in card-clean group">
              <CardContent className="p-6">
                <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <tech.icon className="h-7 w-7 text-primary" />
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {tech.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {tech.description}
                </p>
                
                <ul className="space-y-2">
                  {tech.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="text-center p-4 bg-card rounded-lg border border-border">
            <div className="text-3xl font-bold text-primary mb-1">100%</div>
            <div className="text-sm text-muted-foreground">Responsive</div>
          </div>
          <div className="text-center p-4 bg-card rounded-lg border border-border">
            <div className="text-3xl font-bold text-accent mb-1">A+</div>
            <div className="text-sm text-muted-foreground">Performance</div>
          </div>
          <div className="text-center p-4 bg-card rounded-lg border border-border">
            <div className="text-3xl font-bold text-primary mb-1">SEO</div>
            <div className="text-sm text-muted-foreground">Optimizovano</div>
          </div>
          <div className="text-center p-4 bg-card rounded-lg border border-border">
            <div className="text-3xl font-bold text-accent mb-1">24/7</div>
            <div className="text-sm text-muted-foreground">Podrška</div>
          </div>
        </div>
      </div>
    </section>
  );
}

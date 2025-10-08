import { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Code2, Smartphone, Search, Shield, Zap, Globe } from 'lucide-react';
export default function Technologies() {
  const sectionRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const cards = entry.target.querySelectorAll('.tech-card');
          cards.forEach((card, index) => {
            setTimeout(() => {
              card.classList.add('visible');
            }, index * 100);
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
  const technologies = [{
    icon: Code2,
    title: 'React & TypeScript',
    description: 'Koristimo najmoderniji frontend tehnologije za brze i pouzdane aplikacije.',
    features: ['Komponente koje se mogu ponovo koristiti', 'Type safety', 'Izvrsne performanse']
  }, {
    icon: Smartphone,
    title: 'Responsive Design',
    description: 'Vaš sajt će savršeno izgledati na svim uređajima - od mobitela do desktop računara.',
    features: ['Mobile-first pristup', 'Adaptive layout', 'Touch optimizacija']
  }, {
    icon: Search,
    title: 'SEO Optimizacija',
    description: 'Gradimo sajtove koje Google voli i koje vaši klijenti lako pronalaze.',
    features: ['On-page SEO', 'Semantic HTML', 'Schema markup']
  }, {
    icon: Zap,
    title: 'Brzina & Performanse',
    description: 'Optimizujemo svaki aspekt kako bi vaš sajt učitavao bliskom brzinom.',
    features: ['Lazy loading', 'Code splitting', 'Image optimization']
  }, {
    icon: Shield,
    title: 'Sigurnost',
    description: 'Implementiramo najbolje bezbjednosne prakse kako bi vaš sajt bio siguran.',
    features: ['HTTPS', 'Data encryption', 'Regular updates']
  }, {
    icon: Globe,
    title: 'Hosting & Deployment',
    description: 'Brinemo se o hosting-u i redovnom održavanju vašeg sajta.',
    features: ['CDN integracija', 'Auto backups', '99.9% uptime']
  }];
  return <section ref={sectionRef} id="technologies" className="section-padding bg-gradient-to-b from-background via-accent/5 to-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-float-x"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in-down">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-accent/20 via-primary/20 to-secondary/20 rounded-full mb-4 border border-accent/30 hover:scale-105 transition-transform">
            <Code2 className="h-4 w-4 text-accent animate-spin-slow" />
            <span className="text-sm font-bold text-accent">Tehnologije</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold text-foreground mb-4">
            Šta <span className="gradient-text">Koristimo</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Najnovije tehnologije i najbolje prakse za vaš digitalni uspjeh
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => <Card key={index} className="tech-card scale-in group hover-glow border-2 border-transparent hover:border-accent/30 bg-gradient-to-br from-card to-card/70 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-500">
              <CardContent className="p-6 relative overflow-hidden">
                {/* Hover Background Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="w-16 h-16 bg-gradient-to-br from-accent via-primary to-secondary rounded-xl flex items-center justify-center mb-5 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-lg relative z-10">
                  <tech.icon className="h-7 w-7 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors relative z-10">
                  {tech.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed relative z-10">
                  {tech.description}
                </p>
                
                <ul className="space-y-2 relative z-10">
                  {tech.features.map((feature, idx) => <li key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
                      <div className="w-2 h-2 bg-gradient-to-r from-accent to-primary rounded-full animate-pulse"></div>
                      {feature}
                    </li>)}
                </ul>
              </CardContent>
            </Card>)}
        </div>

        {/* Bottom Stats - Enhanced */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto animate-fade-in-up">
          <div className="text-center p-6 bg-gradient-to-br from-card to-primary/5 rounded-xl border-2 border-primary/20 hover:border-primary/40 hover-lift transition-all group">
            <div className="text-4xl font-bold gradient-text mb-2 group-hover:scale-110 transition-transform">100%</div>
            <div className="text-sm text-muted-foreground font-semibold">Responsive</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-card to-accent/5 rounded-xl border-2 border-accent/20 hover:border-accent/40 hover-lift transition-all group">
            <div className="text-4xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">A+</div>
            <div className="text-sm text-muted-foreground font-semibold">Performance</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-card to-secondary/5 rounded-xl border-2 border-secondary/20 hover:border-secondary/40 hover-lift transition-all group">
            <div className="text-4xl font-bold bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">SEO</div>
            <div className="text-sm text-muted-foreground font-semibold">Optimizovano</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-card to-primary/5 rounded-xl border-2 border-primary/20 hover:border-primary/40 hover-lift transition-all group">
            <div className="text-4xl font-bold gradient-text mb-2 group-hover:scale-110 transition-transform">24/7</div>
            <div className="text-sm text-muted-foreground font-semibold">Podrška</div>
          </div>
        </div>
      </div>
    </section>;
}
import { Card, CardContent } from '@/components/ui/card';
import { Monitor, Smartphone, Search, Rocket } from 'lucide-react';

export default function Services() {
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
    <section id="services" className="section-padding bg-muted/30">
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
            <Card key={index} className="card-clean group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 text-sm">
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
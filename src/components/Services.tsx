import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Monitor, Smartphone, ShoppingCart, Search, Palette, Code } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Monitor,
      title: 'Web Dizajn',
      description: 'Kreiranje modernih, responsivnih web stranica koje oduševljavaju korisnike.',
      features: ['Responsivan dizajn', 'UI/UX optimizacija', 'Brza učitavanja', 'SEO optimizacija'],
      color: 'from-blue-500 to-purple-600'
    },
    {
      icon: Smartphone,
      title: 'Mobilne Aplikacije',
      description: 'Razvoj mobilnih aplikacija za iOS i Android platforme.',
      features: ['Cross-platform', 'Native performanse', 'Intuitivni interfejs', 'Push notifikacije'],
      color: 'from-green-500 to-teal-600'
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce Rešenja',
      description: 'Kompletan e-commerce sistem za vaš online biznis.',
      features: ['Online prodavnica', 'Payment integracija', 'Inventory management', 'Analytics'],
      color: 'from-orange-500 to-red-600'
    },
    {
      icon: Search,
      title: 'SEO Optimizacija',
      description: 'Poboljšanje vidljivosti vašeg sajta u search engine rezultatima.',
      features: ['Keyword research', 'On-page SEO', 'Technical SEO', 'Content optimizacija'],
      color: 'from-purple-500 to-pink-600'
    },
    {
      icon: Palette,
      title: 'Branding & Dizajn',
      description: 'Kreiranje jedinstvenog vizuelnog identiteta za vaš brand.',
      features: ['Logo dizajn', 'Brand guidelines', 'Marketing materijali', 'Web assets'],
      color: 'from-yellow-500 to-orange-600'
    },
    {
      icon: Code,
      title: 'Custom Development',
      description: 'Prilagođena softverska rešenja za specifične potrebe.',
      features: ['Web aplikacije', 'API development', 'Database dizajn', 'Third-party integracije'],
      color: 'from-indigo-500 to-blue-600'
    }
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-br from-background to-background/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Naše Usluge
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Pružamo sveobuhvatna digitalna rešenja koja će pokrenuti vaš biznis u digitalnoj eri.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-300 border-0 bg-card hover:scale-105"
            >
              <CardContent className="p-8 relative overflow-hidden">
                <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-foreground/80 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, featureIndex) => (
                    <Badge 
                      key={featureIndex} 
                      variant="secondary" 
                      className="text-xs bg-gradient-to-r from-primary/20 to-primary/10 text-primary border-primary/20"
                    >
                      {feature}
                    </Badge>
                  ))}
                </div>

                {/* Decorative gradient overlay */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${service.color} opacity-5 rounded-full transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-500`}></div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-lg text-foreground/80 mb-8">
            Potrebna vam je prilagođena usluga? Kontaktirajte nas!
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center px-8 py-4 bg-gradient-primary text-white font-semibold rounded-lg hover:opacity-90 transition-opacity shadow-lg hover:shadow-xl"
          >
            Zatražite Ponudu
          </a>
        </div>
      </div>
    </section>
  );
}
import { Globe, Megaphone, TrendingUp, Code, Palette, Search, Rocket, Target, Zap } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import webDevImg from '@/assets/web-development.jpg';
import digitalMarketingImg from '@/assets/digital-marketing.jpg';
import onlineVisibilityImg from '@/assets/online-visibility.jpg';

export default function Services() {
  const services = [
    {
      icon: <Code className="h-12 w-12" />,
      title: "Profesionalni Web Dizajn",
      subtitle: "Moderni sajtovi koji prodaju 24/7",
      description: "Kreiramo brze, sigurne i SEO optimizirane web stranice koje odlično rade na svim uređajima. Specijalizirani za Balkan tržište s razumijevanjem lokalne kulture i potreba.",
      image: webDevImg,
      features: ["Responzivni dizajn", "SEO optimizacija", "Brzo učitavanje", "Sigurnost", "Lokalizacija"],
      gradient: "from-primary via-primary-glow to-secondary",
      shadowColor: "shadow-intense",
      price: "Od 1.500€",
      duration: "7-14 dana"
    },
    {
      icon: <Megaphone className="h-12 w-12" />,
      title: "Digitalno Oglašavanje",
      subtitle: "Kampanje koje donose rezultate",
      description: "Pokretamo uspješne kampanje na Google Ads, Facebook, Instagram i drugim platformama. Fokus na Balkan tržište s poznavanjem lokalnih navika i jezika.",
      image: digitalMarketingImg,
      features: ["Google Ads", "Facebook/Instagram", "Analitika", "ROI optimizacija", "Lokalno ciljanje"],
      gradient: "from-accent via-accent-glow to-tertiary",
      shadowColor: "shadow-neon",
      price: "Od 500€/mjesec",
      duration: "Rezultati za 7 dana"
    },
    {
      icon: <TrendingUp className="h-12 w-12" />,
      title: "Online vidljivost",
      subtitle: "Budite #1 na Google pretragama",
      description: "Pomažemo vašem biznisu da postane vidljiv online kroz strategije SEO-a, lokalnog pretraživanja i izgradnje digitalnog prisustva na Balkanu.",
      image: onlineVisibilityImg,
      features: ["SEO optimizacija", "Google My Business", "Lokalno pretraživanje", "Branding", "Društvene mreže"],
      gradient: "from-secondary via-secondary-glow to-primary",
      shadowColor: "shadow-glow",
      price: "Od 300€/mjesec",
      duration: "Rezultati za 30 dana"
    }
  ];

  const additionalServices = [
    {
      icon: <Palette className="h-8 w-8" />,
      title: "Branding & Identitet",
      description: "Kreiramo jedinstvene vizualne identitete koji odražavaju vrijednosti vašeg brenda na Balkanskom tržištu.",
      gradient: "gradient-primary",
      price: "Od 800€"
    },
    {
      icon: <Search className="h-8 w-8" />,
      title: "SEO Optimizacija", 
      description: "Poboljšavamo rangiranje vaše web stranice na Google pretragama za ključne riječi relevantne za Balkan.",
      gradient: "gradient-secondary",
      price: "Od 400€/mjesec"
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "E-commerce Rješenja",
      description: "Razvijamo online trgovine prilagođene Balkanskim kupcima s lokalnim načinima plaćanja.",
      gradient: "gradient-accent",
      price: "Od 2.500€"
    },
    {
      icon: <Rocket className="h-8 w-8" />,
      title: "Digitalna Strategija",
      description: "Razvijamo sveobuhvatne digitalne strategije za maksimalan uspjeh na Balkanskom tržištu.",
      gradient: "gradient-tertiary",
      price: "Od 1.000€"
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Conversion Optimizacija",
      description: "Optimiziramo vaše stranice za bolje konverzije s fokusom na Balkanske kupce.",
      gradient: "gradient-neon",
      price: "Od 600€/mjesec"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Maintenance & Podrška",
      description: "24/7 tehnička podrška i redovito ažuriranje vaših digitalnih rješenja.",
      gradient: "gradient-rainbow",
      price: "Od 200€/mjesec"
    }
  ];

  return (
    <section id="services" className="section-padding section-gradient relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="floating absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="floating-alt absolute bottom-20 right-10 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto relative z-10">
        {/* Revolutionary Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <span className="text-primary font-semibold text-lg uppercase tracking-wider">Naše Usluge</span>
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
          </div>
          
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-playfair font-bold text-foreground mb-8 leading-tight">
            Digitalna Rješenja za <span className="text-gradient bg-gradient-rainbow bg-clip-text text-transparent animate-gradient-x">Balkan</span>
          </h2>
          
          <p className="text-2xl text-foreground/80 max-w-4xl mx-auto leading-relaxed font-light">
            Specijalizirani smo za <span className="text-primary font-bold">Hrvatsko, Srpsko, Bosansko, Crnogorsko i Slovensko tržište</span>. 
            Razumijemo vašu kulturu, jezik i <span className="text-electric">potrebe lokalnih kupaca</span>.
          </p>
        </div>

        {/* Main Services */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-24">
          {services.map((service, index) => (
            <Card key={index} className="card-premium group overflow-hidden h-full tilt-hover">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-700"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-75 group-hover:opacity-60 transition-opacity duration-500`}></div>
                <div className="absolute inset-0 bg-gradient-mesh opacity-20"></div>
                
                {/* Floating Icon */}
                <div className="absolute top-6 left-6 text-white p-4 bg-card/20 backdrop-blur-xl rounded-2xl border border-white/20 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>

                {/* Price & Duration */}
                <div className="absolute top-6 right-6 text-right">
                  <div className="bg-card/80 backdrop-blur-sm rounded-xl p-3 border border-primary/20">
                    <div className="text-primary font-bold text-lg">{service.price}</div>
                    <div className="text-foreground/70 text-sm">{service.duration}</div>
                  </div>
                </div>

                {/* Animated Corner Elements */}
                <div className="absolute top-4 right-4 w-3 h-3 bg-white/60 rounded-full animate-pulse"></div>
                <div className="absolute bottom-4 left-4 w-2 h-2 bg-white/40 rounded-full animate-bounce"></div>
              </div>
              
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl font-playfair text-foreground group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-primary font-semibold text-lg">
                  {service.subtitle}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <p className="text-foreground/80 leading-relaxed">{service.description}</p>
                
                <div className="grid grid-cols-2 gap-3">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-foreground/80 group-hover:text-foreground transition-colors">
                      <CheckCircle className="w-4 h-4 text-primary mr-2" />
                      {feature}
                    </div>
                  ))}
                </div>

                <Button className="btn-cta-primary w-full mt-6 group-hover:scale-105 transition-transform">
                  🎯 Zatražite Ponudu
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Enhanced Additional Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {additionalServices.map((service, index) => (
            <Card key={index} className="card-neon group hover:scale-105 transition-all duration-500 magnetic cursor-pointer">
              <CardContent className="p-8 text-center relative overflow-hidden">
                {/* Animated Background */}
                <div className={`absolute inset-0 bg-${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-${service.gradient} rounded-2xl mb-6 text-white group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-glow`}>
                  {service.icon}
                </div>
                
                <h3 className="text-xl font-playfair font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-foreground/70 leading-relaxed group-hover:text-foreground/90 transition-colors">
                  {service.description}
                </p>
                
                {/* Price */}
                <div className="mt-4 text-center">
                  <span className="text-primary font-bold text-lg">{service.price}</span>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-primary/40 rounded-full group-hover:bg-primary group-hover:scale-150 transition-all duration-300"></div>
                <div className="absolute bottom-4 left-4 w-1 h-1 bg-secondary/40 rounded-full group-hover:bg-secondary group-hover:scale-200 transition-all duration-300"></div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-24 text-center">
          <Card className="card-premium p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-hero opacity-80"></div>
            <div className="relative z-10">
                <Button className="btn-cta-primary text-xl px-8 py-4">
                  🎯 BESPLATNA KONZULTACIJA
                  <Target className="ml-3 h-6 w-6" />
                Kontaktirajte nas danas za <span className="text-electric font-bold">BESPLATNU konzultaciju</span> i saznajte kako možemo 
                <span className="text-accent font-bold"> udvostručiti vašu online prodaju</span> u sljedećih 30 dana.
                <Button className="btn-glass text-lg px-6 py-4">
                  📱 Pozovite: +385 91 234 5678
                <Rocket className="ml-3 h-5 w-5" />
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
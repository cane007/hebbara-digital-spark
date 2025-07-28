import { Globe, Megaphone, TrendingUp, Code, Palette, Search } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import webDevImg from '@/assets/web-development.jpg';
import digitalMarketingImg from '@/assets/digital-marketing.jpg';
import onlineVisibilityImg from '@/assets/online-visibility.jpg';

export default function Services() {
  const services = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Web Development",
      subtitle: "Moderne i responzivne web stranice",
      description: "Kreiramo brze, sigurne i SEO optimizirane web stranice koje odlično rade na svim uređajima. Od jednostavnih poslovnih stranica do složenih web aplikacija.",
      image: webDevImg,
      features: ["Responzivni dizajn", "SEO optimizacija", "Brzo učitavanje", "Sigurnost"],
      color: "from-primary to-primary-glow"
    },
    {
      icon: <Megaphone className="h-8 w-8" />,
      title: "Digitalno oglašavanje",
      subtitle: "Ciljanost koja donosi rezultate",
      description: "Pokretamo uspješne kampanje na Google Ads, Facebook, Instagram i drugim platformama. Svaki euro uložen u oglašavanje mora donijeti povrat.",
      image: digitalMarketingImg,
      features: ["Google Ads", "Social Media kampanje", "Analitika", "ROI optimizacija"],
      color: "from-accent to-accent-glow"
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Online vidljivost",
      subtitle: "Budite pronađeni na internetu",
      description: "Pomažemo vašem biznisu da postane vidljiv online kroz strategije SEO-a, lokalnog pretraživanja i izgradnje digitalnog prisustva.",
      image: onlineVisibilityImg,
      features: ["SEO optimizacija", "Google My Business", "Lokalno pretraživanje", "Branding"],
      color: "from-secondary to-secondary-glow"
    }
  ];

  const additionalServices = [
    {
      icon: <Palette className="h-6 w-6" />,
      title: "UI/UX Dizajn",
      description: "Kreiramo korisničke doživljaje koji oduševljavaju i konvertiraju posetioce u kupce."
    },
    {
      icon: <Search className="h-6 w-6" />,
      title: "SEO Optimizacija",
      description: "Poboljšavamo rangiranje vaše web stranice na Google pretragama i povećavamo organicki promet."
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "E-commerce rješenja",
      description: "Svilamo online prodavnice koje generiraju prodaju 24/7 i olakšavaju upravljanje inventarom."
    }
  ];

  return (
    <section id="services" className="section-padding bg-gradient-subtle">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-playfair font-bold text-foreground mb-6">
            Naše <span className="text-gradient">usluge</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Pružamo kompletna digitalna rješenja koja će vašem biznisu omogućiti da se istakne u digitalnom svijetu
          </p>
        </div>

        {/* Main Services */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="card-premium group overflow-hidden h-full">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-80`}></div>
                <div className="absolute top-4 left-4 text-white">
                  {service.icon}
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl font-playfair">{service.title}</CardTitle>
                <CardDescription className="text-primary font-medium">
                  {service.subtitle}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{service.description}</p>
                
                <div className="grid grid-cols-2 gap-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-foreground/80">
                      <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Services */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {additionalServices.map((service, index) => (
            <Card key={index} className="card-glass group hover:scale-105 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-xl mb-4 text-white group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
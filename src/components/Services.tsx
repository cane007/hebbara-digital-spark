import { Globe, Megaphone, TrendingUp, Code, Palette, Search, Rocket, Target, Zap } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import webDevImg from '@/assets/web-development.jpg';
import digitalMarketingImg from '@/assets/digital-marketing.jpg';
import onlineVisibilityImg from '@/assets/online-visibility.jpg';

export default function Services() {
  const services = [
    {
      icon: <Code className="h-10 w-10" />,
      title: "Web Development",
      subtitle: "Moderne i responzivne web stranice",
      description: "Kreiramo brze, sigurne i SEO optimizirane web stranice koje odlično rade na svim uređajima. Od jednostavnih poslovnih stranica do složenih web aplikacija.",
      image: webDevImg,
      features: ["Responzivni dizajn", "SEO optimizacija", "Brzo učitavanje", "Sigurnost"],
      gradient: "from-primary via-primary-glow to-secondary",
      shadowColor: "shadow-intense"
    },
    {
      icon: <Megaphone className="h-10 w-10" />,
      title: "Digitalno oglašavanje",
      subtitle: "Ciljanost koja donosi rezultate",
      description: "Pokretamo uspješne kampanje na Google Ads, Facebook, Instagram i drugim platformama. Svaki euro uložen u oglašavanje mora donijeti povrat.",
      image: digitalMarketingImg,
      features: ["Google Ads", "Social Media kampanje", "Analitika", "ROI optimizacija"],
      gradient: "from-accent via-accent-glow to-tertiary",
      shadowColor: "shadow-neon"
    },
    {
      icon: <TrendingUp className="h-10 w-10" />,
      title: "Online vidljivost",
      subtitle: "Budite pronađeni na internetu",
      description: "Pomažemo vašem biznisu da postane vidljiv online kroz strategije SEO-a, lokalnog pretraživanja i izgradnje digitalnog prisustva.",
      image: onlineVisibilityImg,
      features: ["SEO optimizacija", "Google My Business", "Lokalno pretraživanje", "Branding"],
      gradient: "from-secondary via-secondary-glow to-primary",
      shadowColor: "shadow-glow"
    }
  ];

  const additionalServices = [
    {
      icon: <Palette className="h-8 w-8" />,
      title: "UI/UX Dizajn",
      description: "Kreiramo korisničke doživljave koji oduševljavaju i konvertiraju posetioce u kupce.",
      gradient: "gradient-primary"
    },
    {
      icon: <Search className="h-8 w-8" />,
      title: "SEO Optimizacija", 
      description: "Poboljšavamo rangiranje vaše web stranice na Google pretragama i povećavamo organicki promet.",
      gradient: "gradient-secondary"
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "E-commerce rješenja",
      description: "Svilamo online prodavnice koje generiraju prodaju 24/7 i olakšavaju upravljanje inventarom.",
      gradient: "gradient-accent"
    },
    {
      icon: <Rocket className="h-8 w-8" />,
      title: "Digitalna strategija",
      description: "Razvijamo sveobuhvatne digitalne strategije za maksimalan online uspjeh.",
      gradient: "gradient-tertiary"
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Conversion optimizacija",
      description: "Optimiziramo vaše stranice za bolje konverzije i veći povrat na investiciju.",
      gradient: "gradient-neon"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Performance marketing",
      description: "Fokusirano oglašavanje s mjerljivim rezultatima i garantiranim povratom.",
      gradient: "gradient-rainbow"
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
            <span className="text-primary font-semibold text-lg uppercase tracking-wider">Usluge</span>
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
          </div>
          
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-playfair font-bold text-foreground mb-8 leading-tight">
            Naše <span className="text-gradient bg-gradient-rainbow bg-clip-text text-transparent animate-gradient-x">revolucionarne</span> usluge
          </h2>
          
          <p className="text-2xl text-foreground/80 max-w-4xl mx-auto leading-relaxed font-light">
            Pružamo <span className="text-primary font-bold">kompletna digitalna rješenja</span> koja će vašem biznisu omogućiti da se 
            <span className="text-electric"> istakne u digitalnom svijetu</span>
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
                      <div className="w-3 h-3 bg-gradient-primary rounded-full mr-3 animate-pulse"></div>
                      {feature}
                    </div>
                  ))}
                </div>

                <Button className="btn-glass w-full mt-6 group-hover:scale-105 transition-transform">
                  Saznajte više
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
              <h3 className="text-3xl font-playfair font-bold mb-6 text-foreground">
                Spremni za <span className="text-gradient bg-gradient-rainbow bg-clip-text text-transparent">digitalnu revoluciju</span>?
              </h3>
              <p className="text-xl text-foreground/80 mb-8 max-w-2xl mx-auto">
                Kontaktirajte nas danas i saznajte kako možemo transformirati vaš biznis
              </p>
              <Button className="btn-hero">
                Započnimo zajedno
                <Rocket className="ml-3 h-5 w-5" />
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
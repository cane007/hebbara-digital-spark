import React from 'react';
import { Card } from '@/components/ui/card';
import { ArrowRight, CheckCircle, Clock, Code, Rocket, Users, Star, TrendingUp } from 'lucide-react';

export default function ContentSections() {
  const benefits = [
    {
      title: "Brzina razvoja",
      description: "Izgradite kompleksnu web aplikaciju u samo 12 minuta umjesto mjeseci rada",
      icon: <Clock className="w-6 h-6" />
    },
    {
      title: "Bez programiranja",
      description: "Ne morate znati programiranje - samo opišite što trebate prirodnim jezikom",
      icon: <Code className="w-6 h-6" />
    },
    {
      title: "GitHub integracija",
      description: "Automatski sync s GitHub repozitorijem, verzije i backup osigurani",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "One-click deploy",
      description: "Vaša aplikacija ide live jednim klikom - bez složenih setup procesa",
      icon: <Rocket className="w-6 h-6" />
    }
  ];

  const useCases = [
    {
      title: "E-commerce trgovine",
      description: "Kompletne online trgovine s košaricom, plaćanjem i admin panelom"
    },
    {
      title: "SaaS aplikacije", 
      description: "Subscription modeli, user dashboard, payment integracije"
    },
    {
      title: "Portfolio web stranice",
      description: "Profesionalne stranice za freelancere, agencije i tvrtke"
    },
    {
      title: "Landing stranice",
      description: "Conversion-optimized stranice za marketing kampanje"
    },
    {
      title: "Blog platforme",
      description: "CMS sustavi s administracijom i SEO optimizacijom"
    },
    {
      title: "Booking sustavi",
      description: "Rezervacije termina, kalendari, automatski email notifikacije"
    }
  ];

  const process = [
    {
      step: "1",
      title: "Opišite vašu ideju",
      description: "Jednostavno recite našem AI-u što trebate - npr. 'Trebam web shop za prodaju maica s PayPal integracijom'",
      details: [
        "Prirodan jezik - bez tehničkih termina",
        "Opišite funkcionalnosti koje trebate", 
        "Navedite dizajnerske preference",
        "AI postavlja dodatna pitanja za pojašnjenja"
      ]
    },
    {
      step: "2", 
      title: "AI analizira i gradi",
      description: "Naš napredni AI analizira vaše zahtjeve i počinje graditi aplikaciju u realnom vremenu",
      details: [
        "Stvara database schema i backend API",
        "Generira React komponente i UI",
        "Postavlja routing i state management",
        "Implementira sigurnosne mjere"
      ]
    },
    {
      step: "3",
      title: "Review i customizacija", 
      description: "Pregledajte generirani kod, zatražite izmjene ili direktno deployjajte",
      details: [
        "Live preview vaše aplikacije",
        "Mogućnost customizacije dizajna",
        "Dodavanje dodatnih funkcionalnosti",
        "Code review i optimizacija"
      ]
    },
    {
      step: "4",
      title: "Deploy i održavanje",
      description: "Jedan klik za deploy, automatski backup i GitHub sync za buduće izmjene",
      details: [
        "Hosting na našoj infrastrukturi",
        "Custom domain setup",
        "SSL certifikati automatski",
        "24/7 monitoring i support"
      ]
    }
  ];

  return (
    <div className="space-y-20">
      {/* Main Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Zašto odabrati Hebbera Design?
            </h2>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              Revolucijska AI tehnologija koja mijenja način kako se web aplikacije stvaraju. 
              Brže, jeftinije i efikasnije od tradicionalnog pristupa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="card-glass p-6 group hover:scale-105 transition-all duration-300">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/20 text-primary rounded-2xl mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-foreground/70 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-subtle">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Kako funkcionira naš AI proces?
            </h2>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              Detaljan uvid u proces stvaranja vaše web aplikacije - od ideje do live produkta
            </p>
          </div>

          <div className="space-y-12">
            {process.map((item, index) => (
              <div key={index} className="flex flex-col lg:flex-row gap-8 items-start">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold shadow-glow">
                    {item.step}
                  </div>
                </div>
                
                <Card className="card-premium flex-1 p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    {item.title}
                  </h3>
                  <p className="text-lg text-foreground/80 mb-6">
                    {item.description}
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {item.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-tertiary mt-0.5 flex-shrink-0" />
                        <span className="text-foreground/70 text-sm">
                          {detail}
                        </span>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Što možete izgraditi s Hebbera Design?
            </h2>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              Od jednostavnih landing stranica do kompleksnih SaaS aplikacija - naš AI može sve
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <Card key={index} className="card-glass p-6 group hover:scale-105 transition-all duration-300">
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {useCase.title}
                </h3>
                <p className="text-foreground/70 leading-relaxed mb-4">
                  {useCase.description}
                </p>
                <div className="flex items-center text-primary text-sm font-semibold group-hover:translate-x-2 transition-transform">
                  Saznajte više <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ROI and Business Impact */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-subtle">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Kakav je poslovni utjecaj Hebbera Design?
            </h2>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              Brojevi govore sami za sebe - pogledajte kako naši klijenti ostvaruju rezultate
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="card-glass p-6 text-center">
              <TrendingUp className="w-12 h-12 text-accent mx-auto mb-4" />
              <div className="text-3xl font-bold text-accent mb-2">500%</div>
              <div className="text-foreground/70">Povećanje ROI-a u prosjeku</div>
            </Card>
            
            <Card className="card-glass p-6 text-center">
              <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
              <div className="text-3xl font-bold text-primary mb-2">95%</div>
              <div className="text-foreground/70">Ušteda vremena razvoja</div>
            </Card>
            
            <Card className="card-glass p-6 text-center">
              <Star className="w-12 h-12 text-secondary mx-auto mb-4" />
              <div className="text-3xl font-bold text-secondary mb-2">4.9/5</div>
              <div className="text-foreground/70">Prosječna ocjena korisnika</div>
            </Card>
          </div>

          <div className="bg-card/50 p-8 rounded-2xl border border-primary/20">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
              Tradicionalni pristup vs. Hebbera Design
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-foreground/80 mb-4">
                  🐌 Tradicionalni razvoj
                </h4>
                <ul className="space-y-2 text-foreground/70">
                  <li>• 3-6 mjeseci razvoja</li>
                  <li>• €15,000 - €50,000 troškova</li>
                  <li>• Tim od 3-5 developera</li>
                  <li>• Komplicirane izmjene</li>
                  <li>• Dugo vrijeme do market</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-primary mb-4">
                  🚀 Hebbera Design
                </h4>
                <ul className="space-y-2 text-foreground/70">
                  <li>• 12 minuta do prve verzije</li>
                  <li>• €0 - €99/mjesec</li>
                  <li>• Samo vi i naš AI</li>
                  <li>• Instant izmjene</li>
                  <li>• Deploy u sekundi</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
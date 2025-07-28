import { Award, Users, Target, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function About() {
  const values = [
    {
      icon: <Target className="h-8 w-8" />,
      title: "Fokus na rezultate",
      description: "Svaki projekt pristupamo s jasnim ciljem - vaš uspjeh u digitalnom svijetu."
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Inovacija",
      description: "Koristimo najnovije tehnologije i trendove za stvaranje izuzetnih digitalnih iskustava."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Partnerstvo",
      description: "Nismo samo pružatelj usluga - mi smo vaš digitalni partner za dugoročni uspjeh."
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Kvaliteta",
      description: "Svaki detalj je važan. Težimo izvrsnosti u svakom pikselu i svakoj liniji koda."
    }
  ];

  const stats = [
    { number: "150+", label: "Zadovoljnih klijenata", color: "text-primary" },
    { number: "200+", label: "Uspješnih projekata", color: "text-secondary" },
    { number: "98%", label: "Stopa zadovoljstva", color: "text-accent" },
    { number: "24/7", label: "Podrška klijentima", color: "text-primary-glow" }
  ];

  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl sm:text-5xl font-playfair font-bold text-foreground mb-6">
                O <span className="text-gradient">nama</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                Hebbera Design je digitalna agencija koja pomaže biznesima u Balkanskom regionu 
                da se istaknu u digitalnom svijetu. Sa više od 5 godina iskustva, kreirali smo 
                preko 200 uspješnih projekata.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Naša misija je jednostavna: pomoći vašem biznisu da postigne online uspjeh kroz 
                inovativne web stranice, efikasno digitalno oglašavanje i strategije koje 
                povećavaju vidljivost na internetu.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className={`text-3xl font-bold ${stat.color} mb-2`}>
                    {stat.number}
                  </div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Values Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="card-premium group h-full">
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-2xl mb-4 text-white group-hover:scale-110 transition-transform">
                    {value.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-foreground">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-primary rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-playfair font-bold mb-4">
              Spremni za digitalnu transformaciju?
            </h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Kontaktirajte nas danas i saznajte kako možemo pomoći vašem biznisu 
              da postigne online uspjeh koji zaslužuje.
            </p>
            <a href="#contact" className="btn-glass inline-flex items-center">
              Razgovarajmo o vašem projektu
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
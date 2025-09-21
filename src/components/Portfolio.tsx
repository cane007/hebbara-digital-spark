import { ExternalLink, Eye } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function Portfolio() {
  const projects = [
    {
      title: "Restaurant Dubrovnik",
      category: "Web Development",
      description: "Moderni web sajt za restoran sa online rezervacijama i povećanjem prometa za 250%.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
      tags: ["WordPress", "Booking", "SEO"],
      result: "+250% rezervacija"
    },
    {
      title: "Fitness Centar Split",
      category: "Digital Marketing",
      description: "Kompletna digitalna kampanja koja je udvostručila broj članova za 3 mjeseca.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
      tags: ["Google Ads", "Facebook", "Landing"],
      result: "+300% članova"
    },
    {
      title: "Hotel Adriatic",
      category: "E-commerce",
      description: "Booking sistem i web sajt koji je povećao online rezervacije za 400%.",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop",
      tags: ["Booking System", "SEO", "Analytics"],
      result: "+400% rezervacija"
    }
  ];

  return (
    <section id="portfolio" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-foreground mb-4">
            Naš Portfolio
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Pogledajte neke od naših najuspješnijih projekata i rezultate koji govore sami za sebe
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="card-clean group overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button size="sm" variant="secondary">
                    <Eye className="w-4 h-4 mr-2" />
                    Pogledaj
                  </Button>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="secondary" className="text-xs">
                    {project.category}
                  </Badge>
                  <span className="text-sm font-semibold text-accent">
                    {project.result}
                  </span>
                </div>
                
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.tags.map((tag, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <Button size="sm" variant="outline" className="w-full">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Saznaj više
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
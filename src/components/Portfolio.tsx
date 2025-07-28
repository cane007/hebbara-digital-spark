import { ExternalLink, Eye } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function Portfolio() {
  const projects = [
    {
      title: "Restaurant Dubrovnik",
      category: "Web Development",
      description: "Moderna web stranica za restoran s online rezervacijama i jelovnikom.",
      image: "photo-1498050108023-c5249f4df085", // MacBook with code
      tags: ["React", "Node.js", "MongoDB"],
      type: "website",
      stats: { traffic: "+250%", conversions: "+180%" }
    },
    {
      title: "Fitness Centar Split",
      category: "Digital Marketing",
      description: "Kampanja digitalnog oglašavanja koja je povećala članstvo za 300%.",
      image: "photo-1487058792275-0ad4aaf24ca7", // Code on monitor
      tags: ["Google Ads", "Facebook Ads", "Analytics"],
      type: "marketing",
      stats: { members: "+300%", cost: "-45%" }
    },
    {
      title: "Hotel Adriatic",
      category: "Full Service",
      description: "Kompletno digitalno rješenje - web stranica + booking sistem + SEO.",
      image: "photo-1461749280684-dccba630e2f6", // Programming monitor
      tags: ["WordPress", "SEO", "Booking System"],
      type: "complete",
      stats: { bookings: "+400%", revenue: "+320%" }
    },
    {
      title: "Tech Startup Zagreb",
      category: "UI/UX Design",
      description: "Dizajn i razvoj SaaS platforme za upravljanje projektima.",
      image: "photo-1488590528505-98d2b5aba04b", // Laptop
      tags: ["React", "TypeScript", "PostgreSQL"],
      type: "saas",
      stats: { users: "10K+", retention: "95%" }
    }
  ];

  const testimonials = [
    {
      name: "Marko Petrović",
      company: "Restaurant Dubrovnik",
      text: "Hebbera Design je transformirala naš biznis. Nova web stranica i digitalne kampanje povećale su naše rezervacije za 250%.",
      rating: 5
    },
    {
      name: "Ana Kovač",
      company: "Fitness Centar Split",
      text: "Profesionalan pristup i izuzetni rezultati. Preporučujem svima koji žele ozbiljno digitalno prisustvo.",
      rating: 5
    },
    {
      name: "Tomislav Jurić",
      company: "Hotel Adriatic",
      text: "Tim Hebbera Design razumije naše potrebe i uvijek isporuči više nego što očekujemo. Odličan ROI!",
      rating: 5
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Web Development": return "bg-primary";
      case "Digital Marketing": return "bg-accent";
      case "Full Service": return "bg-secondary";
      case "UI/UX Design": return "bg-primary-glow";
      default: return "bg-muted";
    }
  };

  return (
    <section id="portfolio" className="section-padding bg-gradient-subtle">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-playfair font-bold text-foreground mb-6">
            Naš <span className="text-gradient">portfolio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Pogledajte neke od naših najuspješnijih projekata i rezultate koje smo postigli za naše klijente
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {projects.map((project, index) => (
            <Card key={index} className="card-premium group overflow-hidden">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={`https://images.unsplash.com/${project.image}?w=800&h=400&fit=crop&crop=center`}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <Badge className={`absolute top-4 left-4 ${getCategoryColor(project.category)} text-white`}>
                  {project.category}
                </Badge>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-playfair font-bold text-white mb-2">
                    {project.title}
                  </h3>
                </div>
              </div>
              
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4 p-3 bg-muted/30 rounded-lg">
                  {Object.entries(project.stats).map(([key, value], idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-lg font-bold text-primary">{value}</div>
                      <div className="text-xs text-muted-foreground capitalize">{key}</div>
                    </div>
                  ))}
                </div>

                <div className="flex gap-2">
                  <Button size="sm" className="flex-1">
                    <Eye className="w-4 h-4 mr-2" />
                    Pogledaj
                  </Button>
                  <Button size="sm" variant="outline">
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Testimonials */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-playfair font-bold text-foreground mb-8">
            Što kažu naši klijenti
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="card-glass">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-accent text-xl">★</span>
                  ))}
                </div>
                <p className="text-foreground/80 mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
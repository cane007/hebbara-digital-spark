import React from 'react';
import { Star, Users, Clock, TrendingUp } from 'lucide-react';

export default function SocialProof() {
  const testimonials = [
    {
      name: "Marko Petković",
      role: "CEO, TechStart",
      quote: "Hebbera je zamijenila naš dev tim od 4 tjedna posla u 2 dana. Nevjerojatno!",
      rating: 5,
      metric: "90% brže"
    },
    {
      name: "Ana Kovač",
      role: "Startup Founder",
      quote: "Iz ideje do live aplikacije za 12 minuta. Mislila sam da se šale.",
      rating: 5,
      metric: "12 min build"
    },
    {
      name: "Petar Novak",
      role: "Freelancer",  
      quote: "Zaradio sam 10,000€ više jer mogu primiti više projekata mjesečno.",
      rating: 5,
      metric: "+10,000€"
    }
  ];

  const stats = [
    {
      number: "2,500+",
      label: "Zadovoljnih developera",
      icon: <Users className="w-6 h-6" />
    },
    {
      number: "12min",
      label: "Prosječno vrijeme build-a",
      icon: <Clock className="w-6 h-6" />
    },
    {
      number: "95%",
      label: "Stopa zadovoljstva",
      icon: <Star className="w-6 h-6" />
    },
    {
      number: "500%",
      label: "ROI povećanje",
      icon: <TrendingUp className="w-6 h-6" />
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="card-glass p-6 group hover:scale-105 transition-all duration-300">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/20 text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  {stat.icon}
                </div>
              <div className="text-3xl font-bold gradient-text mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.label}
              </div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Što kažu naši korisnici?
          </h2>
          <p className="text-xl text-muted-foreground">
            Pridružite se tisućama koji već koriste Hebbera Design
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card-premium p-6 group">
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-foreground mb-6 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>

              {/* Metric highlight */}
              <div className="inline-block px-4 py-2 rounded-full bg-primary/20 text-primary font-semibold text-sm mb-4">
                {testimonial.metric}
              </div>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-6">Povjerenje prestižnih brendova</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="px-6 py-3 bg-card/50 rounded-lg border border-primary/20 text-foreground font-semibold">
              TechCorp
            </div>
            <div className="px-6 py-3 bg-card/50 rounded-lg border border-secondary/20 text-foreground font-semibold">
              StartupHub
            </div>
            <div className="px-6 py-3 bg-card/50 rounded-lg border border-accent/20 text-foreground font-semibold">
              DevStudio
            </div>
            <div className="px-6 py-3 bg-card/50 rounded-lg border border-tertiary/20 text-foreground font-semibold">
              WebAgency
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
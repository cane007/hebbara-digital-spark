import React from 'react';
import { MessageSquare, Code2, Rocket } from 'lucide-react';

export default function VisualSteps() {
  const steps = [
    {
      number: "01",
      title: "Opišite",
      subtitle: "Recite AI-u što trebate",
      description: "Jednostavno objasnite vašu ideju - naš AI razumije prirodni jezik",
      icon: <MessageSquare className="w-8 h-8" />,
      color: "primary"
    },
    {
      number: "02", 
      title: "Generirajte",
      subtitle: "AI kreira kod u realnom vremenu",
      description: "Gledajte kako se vaša aplikacija gradi pred vašim očima",
      icon: <Code2 className="w-8 h-8" />,
      color: "secondary"
    },
    {
      number: "03",
      title: "Deployajte", 
      subtitle: "Jedan klik i idete live",
      description: "Vaša aplikacija je spremna za korištenje, s GitHub syncom",
      icon: <Rocket className="w-8 h-8" />,
      color: "accent"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Kako funkcionira Hebbera Design?
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Tri jednostavna koraka do vaše web aplikacije
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connection lines for desktop */}
          <div className="hidden md:block absolute top-1/2 left-1/3 right-1/3 h-0.5 bg-gradient-to-r from-primary via-secondary to-accent transform -translate-y-1/2 z-0"></div>
          
          {steps.map((step, index) => (
            <div key={index} className="relative z-10">
              <div className="card-glass p-8 text-center group hover:scale-105 transition-all duration-500">
                {/* Step number */}
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 text-2xl font-bold
                  ${step.color === 'primary' ? 'bg-primary text-primary-foreground' : 
                    step.color === 'secondary' ? 'bg-secondary text-secondary-foreground' : 
                    'bg-accent text-accent-foreground'} 
                  shadow-glow group-hover:scale-110 transition-transform duration-300`}>
                  {step.number}
                </div>

                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg mb-4 
                  ${step.color === 'primary' ? 'bg-primary/20 text-primary' : 
                    step.color === 'secondary' ? 'bg-secondary/20 text-secondary' : 
                    'bg-accent/20 text-accent'}`}>
                  {step.icon}
                </div>

                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {step.title}
                </h3>
                
                <p className={`text-lg font-semibold mb-4 
                  ${step.color === 'primary' ? 'text-primary' :
                    step.color === 'secondary' ? 'text-secondary' :
                    'text-accent'}`}>
                  {step.subtitle}
                </p>
                
                <p className="text-foreground/70 leading-relaxed">
                  {step.description}
                </p>

                {/* Floating animation effect */}
                <div className={`absolute -top-2 -right-2 w-4 h-4 rounded-full opacity-60 animate-pulse
                  ${step.color === 'primary' ? 'bg-primary' :
                    step.color === 'secondary' ? 'bg-secondary' :
                    'bg-accent'}`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="inline-block p-1 rounded-2xl bg-gradient-rainbow">
            <div className="bg-background rounded-xl px-8 py-6">
              <p className="text-lg text-foreground mb-4">
                Spremni za početak?
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="btn-cta-primary px-8 py-3 rounded-xl font-semibold">
                  Počnite Besplatno
                </button>
                <button className="btn-secondary-cta px-8 py-3 rounded-xl font-semibold">
                  Gledajte Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
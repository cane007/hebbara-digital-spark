import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, Code, Rocket, Clock } from 'lucide-react';

export default function InteractiveDemo() {
  const [demoStep, setDemoStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  
  const demoSteps = [
    {
      title: "Opišite vašu ideju",
      description: "Recite AI-u što trebate",
      code: `// Korisnik: "Treba mi web shop za prodaju maica"
// AI: Analiziram zahtjeve...`,
      icon: <Code className="w-6 h-6" />
    },
    {
      title: "AI generira kod",
      description: "Pretvara vašu ideju u kod",
      code: `// ⚡ Generating...
export const ProductPage = () => {
  const [products, setProducts] = useState([]);
  return <ProductGrid products={products} />;
};`,
      icon: <Play className="w-6 h-6" />
    },
    {
      title: "Deploy u 1 kliku",
      description: "Vaša aplikacija je live!",
      code: `// ✅ DEPLOYED!
// https://vas-shop.hebbera.app
// 🚀 Ready to use in 12 minutes`,
      icon: <Rocket className="w-6 h-6" />
    }
  ];

  useEffect(() => {
    if (isPlaying) {
      const timer = setInterval(() => {
        setDemoStep((prev) => {
          if (prev >= demoSteps.length - 1) {
            setIsPlaying(false);
            return 0;
          }
          return prev + 1;
        });
      }, 2000);
      return () => clearInterval(timer);
    }
  }, [isPlaying, demoSteps.length]);

  const startDemo = () => {
    setIsPlaying(true);
    setDemoStep(0);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <Card className="card-premium p-8 group">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-foreground mb-2">
            Vidite Hebbera AI u akciji
          </h3>
          <p className="text-muted-foreground">
            Iz ideje do live aplikacije u 12 minuta
          </p>
        </div>

        <div className="bg-background/80 rounded-xl p-6 border border-primary/20">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-accent"></div>
                <div className="w-3 h-3 rounded-full bg-secondary"></div>
                <div className="w-3 h-3 rounded-full bg-tertiary"></div>
              </div>
              <span className="text-sm text-muted-foreground">hebbera-demo.terminal</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="w-4 h-4" />
              <span>12:00 minuta</span>
            </div>
          </div>

          <div className="space-y-4">
            {demoSteps.map((step, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg transition-all duration-500 ${
                  index === demoStep
                    ? 'bg-primary/10 border border-primary/30 shadow-glow'
                    : 'bg-muted/20 border border-muted/30'
                }`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className={`p-2 rounded-lg ${
                    index === demoStep ? 'bg-primary text-primary-foreground' : 'bg-muted'
                  }`}>
                    {step.icon}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{step.title}</p>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </div>
                
                <div className="bg-background/90 rounded p-3 mt-3 font-mono text-sm">
                  <pre className={`transition-all duration-300 ${
                    index === demoStep ? 'text-primary' : 'text-muted-foreground'
                  }`}>
                    {step.code}
                  </pre>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-6">
          <Button
            onClick={startDemo}
            disabled={isPlaying}
            className="btn-cta-primary"
          >
            {isPlaying ? 'Demo u tijeku...' : 'Pokrenite 30s Demo'}
          </Button>
        </div>
      </Card>
    </div>
  );
}
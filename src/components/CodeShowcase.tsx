import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Copy, Check, ChevronLeft, ChevronRight } from 'lucide-react';

export default function CodeShowcase() {
  const [activeTab, setActiveTab] = useState(0);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const codeExamples = [
    {
      title: "React Component",
      description: "Automatski generirani e-commerce produkt",
      language: "tsx",
      code: `export const ProductCard = ({ product }) => {
  const [inCart, setInCart] = useState(false);
  
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p className="price">{product.price}€</p>
      <button 
        onClick={() => setInCart(!inCart)}
        className={inCart ? 'in-cart' : 'add-to-cart'}
      >
        {inCart ? '✓ U košarici' : 'Dodaj u košaricu'}
      </button>
    </div>
  );
};`
    },
    {
      title: "Backend API",
      description: "Node.js endpoint s autentifikacijom",
      language: "js",
      code: `// Auto-generated API endpoint
app.post('/api/products', authenticateUser, async (req, res) => {
  try {
    const { name, price, description } = req.body;
    
    const product = await Product.create({
      name,
      price,
      description,
      userId: req.user.id
    });
    
    res.status(201).json({
      success: true,
      data: product
    });
  } catch (error) {
    res.status(400).json({ 
      success: false, 
      error: error.message 
    });
  }
});`
    },
    {
      title: "Database Schema",
      description: "SQL tablica s relacijama",
      language: "sql",
      code: `-- Auto-generated database schema
CREATE TABLE products (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(255) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  description TEXT,
  category_id UUID REFERENCES categories(id),
  user_id UUID REFERENCES users(id),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_products_category ON products(category_id);
CREATE INDEX idx_products_user ON products(user_id);`
    }
  ];

  const copyToClipboard = async (code: string, index: number) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    } catch (err) {
      console.error('Failed to copy code');
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Pogledajte kod koji Hebbera generira
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Production-ready kod koji ne morate nikad pisati. Samo kopirajte, modificirajte i koristite.
          </p>
        </div>

        <Card className="card-premium overflow-hidden">
          {/* Tab Navigation */}
          <div className="flex flex-wrap border-b border-primary/20 bg-card/50">
            {codeExamples.map((example, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-6 py-4 font-semibold transition-all duration-300 ${
                  activeTab === index
                    ? 'text-primary border-b-2 border-primary bg-primary/10'
                    : 'text-foreground/60 hover:text-foreground hover:bg-muted/20'
                }`}
              >
                {example.title}
              </button>
            ))}
          </div>

          {/* Code Display */}
          <div className="relative">
            <div className="flex items-center justify-between p-4 bg-muted/20 border-b border-primary/10">
              <div>
                <h3 className="font-semibold text-foreground">
                  {codeExamples[activeTab].title}
                </h3>
                <p className="text-sm text-foreground/60">
                  {codeExamples[activeTab].description}
                </p>
              </div>
              
              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setActiveTab(Math.max(0, activeTab - 1))}
                  disabled={activeTab === 0}
                >
                  <ChevronLeft className="w-4 h-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setActiveTab(Math.min(codeExamples.length - 1, activeTab + 1))}
                  disabled={activeTab === codeExamples.length - 1}
                >
                  <ChevronRight className="w-4 h-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => copyToClipboard(codeExamples[activeTab].code, activeTab)}
                  className="gap-2"
                >
                  {copiedIndex === activeTab ? (
                    <>
                      <Check className="w-4 h-4 text-tertiary" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      Copy
                    </>
                  )}
                </Button>
              </div>
            </div>

            <div className="p-6 bg-background/90">
              <pre className="overflow-x-auto">
                <code className="text-sm text-foreground font-mono leading-relaxed whitespace-pre">
                  {codeExamples[activeTab].code}
                </code>
              </pre>
            </div>
          </div>
        </Card>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="text-center p-6">
            <div className="w-12 h-12 bg-primary/20 text-primary rounded-lg flex items-center justify-center mx-auto mb-4">
              <Check className="w-6 h-6" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Production Ready</h3>
            <p className="text-sm text-foreground/60">
              Kod spreman za produkciju, s error handling-om i optimizacijama
            </p>
          </div>
          
          <div className="text-center p-6">
            <div className="w-12 h-12 bg-secondary/20 text-secondary rounded-lg flex items-center justify-center mx-auto mb-4">
              <Copy className="w-6 h-6" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Lako Modificirati</h3>
            <p className="text-sm text-foreground/60">
              Čist, čitljiv kod koji možete prilagoditi svojim potrebama
            </p>
          </div>
          
          <div className="text-center p-6">
            <div className="w-12 h-12 bg-accent/20 text-accent rounded-lg flex items-center justify-center mx-auto mb-4">
              <ChevronRight className="w-6 h-6" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Best Practices</h3>
            <p className="text-sm text-foreground/60">
              Slijedi najnovije standarde i najbolje prakse developmenta
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-background to-muted/20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="floating absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="floating-alt absolute bottom-1/4 left-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold text-foreground mb-4">
              Započnimo Saradnju
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Besplatna konzultacija bez obaveze. Odgovorićemo u roku od 24 sata i pomoći vam da ostvarite vaše ciljeve.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="flex items-center space-x-4 group hover-lift">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform">
                  <Phone className="h-7 w-7 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-foreground">Telefon</h3>
                  <p className="text-foreground/80 text-lg">+385 91 234 5678</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 group hover-lift">
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent/80 rounded-2xl flex items-center justify-center shadow-electric group-hover:scale-110 transition-transform">
                  <Mail className="h-7 w-7 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-foreground">Email</h3>
                  <p className="text-foreground/80 text-lg">info@hebberadesign.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 group hover-lift">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary to-secondary/80 rounded-2xl flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform">
                  <MapPin className="h-7 w-7 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-foreground">Lokacija</h3>
                  <p className="text-foreground/80 text-lg">Zagreb, Hrvatska</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="card-premium border-2 border-border/50 shadow-2xl">
              <CardContent className="p-10">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Input
                      type="text"
                      name="name"
                      placeholder="Vaše ime"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="h-12"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      name="email"
                      placeholder="Vaš email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="h-12"
                    />
                  </div>
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Vaša poruka"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="resize-none"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full h-12 text-lg font-semibold btn-primary"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Zakažite Besplatnu Konzultaciju
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
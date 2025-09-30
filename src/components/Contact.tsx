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
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Telefon</h3>
                  <p className="text-foreground/80">+385 91 234 5678</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                  <Mail className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Email</h3>
                  <p className="text-foreground/80">info@hebberadesign.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Lokacija</h3>
                  <p className="text-foreground/80">Zagreb, Hrvatska</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="border-0 shadow-xl bg-card">
              <CardContent className="p-8">
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
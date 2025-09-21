import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Poruka je uspješno poslana! Kontaktirat ćemo vas uskoro.");
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: ''
      });
    }, 2000);
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      value: "info@hebberadesign.com",
      link: "mailto:info@hebberadesign.com"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Telefon",
      value: "+385 91 234 5678",
      link: "tel:+38591234567"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Lokacija",
      value: "Zagreb, Hrvatska",
      link: "#"
    }
  ];

  const services = [
    "Web Development",
    "Digitalno oglašavanje",
    "SEO optimizacija",
    "UI/UX Dizajn",
    "E-commerce",
    "Kompletno digitalno rješenje",
    "Ostalo"
  ];

  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-playfair font-bold text-foreground mb-6">
            Zatražite <span className="text-gradient">Besplatnu Konzultaciju</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Spremni smo razgovarati o vašem projektu. Pošaljite nam poruku i odgovorit ćemo u roku od 2 sata!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="card-premium">
              <CardHeader>
                <CardTitle className="text-2xl font-playfair">🎯 Besplatna Konzultacija - Vrijednost 500€</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Ime i prezime *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="transition-all duration-300 focus:shadow-soft"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email adresa *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="transition-all duration-300 focus:shadow-soft"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="company">Naziv tvrtke</Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="transition-all duration-300 focus:shadow-soft"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Broj telefona</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="transition-all duration-300 focus:shadow-soft"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service">Usluga koja vas zanima</Label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-ring transition-all duration-300"
                    >
                      <option value="">Odaberite uslugu</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Poruka *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      placeholder="Opišite vaš projekt i kako vam možemo pomoći..."
                      className="resize-none transition-all duration-300 focus:shadow-soft"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full btn-cta-primary group text-xl py-4"
                  >
                    {isSubmitting ? (
                      <>📤 Šalje se...</>
                    ) : (
                      <>
                        🎯 Zatražite Besplatnu Konzultaciju
                        <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info & Features */}
          <div className="space-y-8">
            {/* Contact Information */}
            <Card className="card-glass">
              <CardHeader>
                <CardTitle className="text-xl font-playfair">📞 Direktan kontakt</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors group"
                  >
                    <div className="flex items-center justify-center w-10 h-10 bg-primary/10 text-primary rounded-lg group-hover:bg-primary group-hover:text-white transition-colors">
                      {info.icon}
                    </div>
                    <div>
                      <div className="font-medium text-foreground">{info.title}</div>
                      <div className="text-muted-foreground text-sm">{info.value}</div>
                    </div>
                  </a>
                ))}
              </CardContent>
            </Card>

            {/* Why Choose Us */}
            <Card className="card-premium">
              <CardHeader>
                <CardTitle className="text-xl font-playfair">🏆 Zašto smo #1 izbor?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  "Besplatna konzultacija (vrijednost 500€)",
                  "5+ godina iskustva na Balkanu",
                  "500+ zadovoljnih klijenata",
                  "24/7 podrška",
                  "100% garancija zadovoljstva"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Response Time */}
            <div className="bg-gradient-primary rounded-xl p-6 text-white text-center">
              <h3 className="text-lg font-playfair font-bold mb-2">⚡ Super brz odgovor</h3>
              <p className="text-white/90 mb-4">Odgovaramo na sve upite u rekordnom vremenu</p>
              <div className="text-3xl font-bold">< 2h</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
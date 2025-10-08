import { useEffect, useRef } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from 'lucide-react';

export default function FAQ() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const faqs = [
    {
      question: 'Koliko traje izrada web sajta?',
      answer: 'Prosječno vrijeme izrade je 7-14 dana za standardne projekte. Kompleksniji projekti sa custom funkcionalnostima mogu trajati 3-4 sedmice. Uvijek se trudimo da isporučimo kvalitet u što kraćem roku.'
    },
    {
      question: 'Koliko košta izrada web sajta?',
      answer: 'Cijena zavisi od složenosti projekta. Jednostavan prezentacijski sajt počinje od €500, dok kompleksniji projekti sa custom dizajnom i funkcionalnostima mogu biti €1500-3000. Nudimo besplatnu konzultaciju za tačnu procjenu.'
    },
    {
      question: 'Da li nudite održavanje sajta nakon lansiranja?',
      answer: 'Da! Nudimo mjesečne pakete održavanja koji uključuju: redovne backup-e, sigurnosne update-e, tehnička podrška, dodavanje novog sadržaja i optimizaciju performansi. Održavanje počinje od €50 mjesečno.'
    },
    {
      question: 'Da li mogu sam uređivati sadržaj na sajtu?',
      answer: 'Apsolutno! Sve naše sajtove gradimo sa jednostavnim sistemom za upravljanje sadržajem (CMS). Obučićemo vas kako da sami dodajete nove stranice, mijenjate tekstove i upload-ujete slike bez tehničkog znanja.'
    },
    {
      question: 'Šta je SEO i da li je uključen u cijenu?',
      answer: 'SEO (Search Engine Optimization) je optimizacija sajta za bolje rangiranje na Google-u. Osnovna SEO optimizacija je uključena u svaki projekat (meta tagovi, semantic HTML, brzina sajta). Za napredne SEO kampanje nudimo posebne pakete.'
    },
    {
      question: 'Da li pravite i mobilne aplikacije?',
      answer: 'Trenutno se fokusiramo na web aplikacije i responsive web sajtove koji savršeno rade na svim uređajima. Ovo je često mnogo isplativije od native mobilnih aplikacija jer pokriva sve platforme odjednom.'
    },
    {
      question: 'Koji je proces saradnje?',
      answer: 'Proces je jednostavan: 1) Besplatna konzultacija, 2) Dobijate ponudu i ugovor, 3) Plaćate avans 50%, 4) Mi kreiramo dizajn i razvijamo sajt, 5) Vi testirate i tražite izmjene, 6) Lansiranje i plaćanje ostatka. Sve je transparentno!'
    },
    {
      question: 'Da li nudite hosting i domen?',
      answer: 'Da, možemo se pobrinuti za sve tehničke aspekte uključujući kupovinu domena (.com, .ba, .hr, .rs) i hosting servise. Preporučujemo kvalitetne hosting providere prilagođene Balkanskom tržištu sa odličnom podrškom.'
    }
  ];

  return (
    <section ref={sectionRef} id="faq" className="section-padding fade-in-up bg-gradient-to-b from-background via-secondary/10 to-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-float-y"></div>
      </div>

      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center mb-12 animate-fade-in-down">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-secondary/20 via-primary/20 to-accent/20 rounded-full mb-4 border border-secondary/30 hover:scale-105 transition-transform">
            <HelpCircle className="h-4 w-4 text-secondary animate-bounce-subtle" />
            <span className="text-sm font-bold text-secondary">Često Postavljena Pitanja</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold text-foreground mb-4">
            Imate <span className="gradient-text">Pitanja</span>?
          </h2>
          <p className="text-xl text-muted-foreground">
            Odgovori na najčešća pitanja naših klijenata
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4 animate-fade-in-up">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-gradient-to-br from-card to-card/70 border-2 border-border/50 rounded-xl px-6 hover:border-primary/30 hover:shadow-xl hover-glow transition-all duration-300 backdrop-blur-sm"
            >
              <AccordionTrigger className="text-left hover:no-underline py-5 group">
                <span className="font-bold text-foreground pr-4 group-hover:text-primary transition-colors">
                  {faq.question}
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-12 text-center p-8 bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 rounded-2xl border-2 border-primary/30 hover:border-primary/50 hover-lift transition-all animate-scale-in">
          <p className="text-foreground font-bold text-lg mb-2">
            Niste pronašli odgovor na vaše pitanje?
          </p>
          <p className="text-muted-foreground mb-4">
            Kontaktirajte nas direktno i odgovorićemo u roku od 24 sata.
          </p>
          <a 
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-accent text-white font-bold rounded-xl hover:scale-105 transition-all shadow-lg"
          >
            Pošaljite pitanje
          </a>
        </div>
      </div>
    </section>
  );
}

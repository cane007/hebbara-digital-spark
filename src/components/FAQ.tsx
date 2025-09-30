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
    <section ref={sectionRef} id="faq" className="section-padding fade-in-up bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
            <HelpCircle className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Često Postavljena Pitanja</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold text-foreground mb-4">
            Imate Pitanja?
          </h2>
          <p className="text-xl text-muted-foreground">
            Odgovori na najčešća pitanja naših klijenata
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-card border border-border rounded-lg px-6 hover:shadow-md transition-shadow"
            >
              <AccordionTrigger className="text-left hover:no-underline py-5">
                <span className="font-semibold text-foreground pr-4">
                  {faq.question}
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-12 text-center p-6 bg-primary/5 rounded-lg border border-primary/20">
          <p className="text-foreground font-medium mb-2">
            Niste pronašli odgovor na vaše pitanje?
          </p>
          <p className="text-muted-foreground text-sm">
            Kontaktirajte nas direktno i odgovorićemo u roku od 24 sata.
          </p>
        </div>
      </div>
    </section>
  );
}

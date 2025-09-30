import { ThemeProvider } from '@/components/ThemeProvider';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Process from '@/components/Process';
import Technologies from '@/components/Technologies';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <ThemeProvider defaultTheme="light" storageKey="hebbera-theme">
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Hero />
          <Services />
          <Process />
          <Technologies />
          <FAQ />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Index;

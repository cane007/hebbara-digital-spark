import { ThemeProvider } from '@/components/ThemeProvider';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import VisualSteps from '@/components/VisualSteps';
import ContentSections from '@/components/ContentSections';
import CodeShowcase from '@/components/CodeShowcase';
import SocialProof from '@/components/SocialProof';
import Services from '@/components/Services';
import About from '@/components/About';
import Portfolio from '@/components/Portfolio';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <ThemeProvider defaultTheme="light" storageKey="hebbera-theme">
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Hero />
          <VisualSteps />
          <ContentSections />
          <CodeShowcase />
          <SocialProof />
          <Services />
          <About />
          <Portfolio />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Index;

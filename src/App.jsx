import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Toaster } from '@/components/ui/toaster';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import GeometricBackground from '@/components/GeometricBackground';
import ScrollIndicator from '@/components/ScrollIndicator';
import FloatingNavigation from '@/components/FloatingNavigation';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const { scrollYProgress } = useScroll();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <>
      <Helmet>
        <title>Portfolio Créatif - Développeur Web & Designer</title>
        <meta name="description" content="Portfolio moderne et dynamique d'un développeur web créatif. Découvrez mes projets, services et compétences en développement web et design." />
        <meta name="keywords" content="portfolio, développeur web, designer, créatif, moderne, dynamique" />
        <meta property="og:title" content="Portfolio Créatif - Développeur Web & Designer" />
        <meta property="og:description" content="Portfolio moderne et dynamique d'un développeur web créatif" />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="relative min-h-screen bg-[#FFF7ED]/30">
        <ScrollIndicator />
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded ? 1 : 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <Navigation />
          <Hero />
          <About />
          <Services />
          <Portfolio />
          <Contact />
          <Footer />
        </motion.div>

        <FloatingNavigation />
        <Toaster />
      </div>
    </>
  );
}

export default App;
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-[100vh] flex items-center justify-center px-4 overflow-hidden"
      style={{ fontFamily: 'Montserrat, Arial, sans-serif' }}
    >
      {/* Éléments géométriques flottants */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-16 left-1/4 w-6 h-6 rounded-[20%] bg-[#595bc2] opacity-30" />
        <div className="absolute top-10 right-20 w-4 h-4 rounded-[20%] bg-[#595bc2] opacity-30" />
        <div className="absolute top-1/3 right-40 w-4 h-4 rounded-[30%] bg-[#ff767a] opacity-40" />
        <div className="absolute bottom-24 left-1/3 w-3 h-3 rounded-[40%] bg-[#595bc2] opacity-30" />
        <div className="absolute bottom-24 left-10 w-10 h-10 rounded-[20%] bg-[#595bc2] opacity-20" />
        <div className="absolute bottom-10 right-1/3 w-5 h-5 rounded-[25%] bg-[#ff767a] opacity-30" />
      </div>

      {/* Contenu principal */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center max-w-6xl w-full mx-auto py-12 md:py-24 gap-6 md:gap-12">
        {/* Photo */}
        <motion.div 
            className="relative"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false }}
          >
            <div className="relative w-full max-w-md mx-auto mr-60">
              <div className="absolute inset-0 bg-gradient-to-br from-bleu/20 to-[#ff767a]/20 rounded-3xl transform rotate-3" />
              <img
                src="/File/spynel.png"
                alt="Spynel KOUTON"
                className="relative w-full h-auto rounded-3xl shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform duration-500"
              />
            </div>
          </motion.div>
        
        {/* Contenu principal à droite */}
        <motion.div 
          className="flex flex-col items-center md:items-start justify-center max-w-4xl w-full md:w-4/5 min-h-[20rem] md:min-h-[32rem] text-center md:text-left"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <motion.h1 
            className="text-2xl sm:text-4xl md:text-7xl font-extrabold text-[#18181B] leading-tight mb-4 sm:mb-6 tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            Bonjour, je <span className="text-[#ff767a]"></span>
            <span>
              suis <span className="text-[#595bc2]">Spynel KOUTON</span><span className="text-black opacity-20">_</span>
            </span>
            <br />
            <span className="text-base sm:text-xl md:text-4xl font-bold text-[#595bc2] mt-2 block">
              Développeur & Graphic Designer
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-sm sm:text-base md:text-xl text-[#444] mb-6 sm:mb-10 max-w-xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            J'aide les entreprises et créateurs à transformer leurs idées en expériences digitales modernes, élégantes et performantes.
          </motion.p>
          
          <motion.button
            onClick={() => document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-[#595bc2] hover:bg-[#ff767a] text-white font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg shadow-lg transition-all duration-200 mb-2 relative overflow-hidden"
            whileHover={{ scale: 1.04 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          >
            Voir mon travail
          </motion.button>
          <a
            href="/Cv/Spynel_KOUTON_cv_designer.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white border-2 border-[#595bc2] text-[#595bc2] hover:bg-[#595bc2] hover:text-white font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-full shadow transition-all duration-200 text-base sm:text-lg mb-2"
            style={{ fontFamily: 'Montserrat, Arial, sans-serif' }}
          >
            <ArrowDown className="w-5 h-5" /> Télécharger mon CV
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-50 w-full flex justify-center"
      >
      </motion.div>
    </section>
  );
};

export default Hero;
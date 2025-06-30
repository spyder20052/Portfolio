import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const programmingSkills = [
    { name: 'HTML', percentage: 95 },
    { name: 'CSS', percentage: 90 },
    { name: 'Python', percentage: 85 },
    { name: 'C', percentage: 80 },
    { name: 'C++', percentage: 75 },
    { name: 'Haskell', percentage: 70 }
  ];

  const designTools = [
    { name: 'Figma', percentage: 90 },
    { name: 'Canva', percentage: 95 },
    { name: 'Photoshop', percentage: 85 },
    { name: 'Illustrator', percentage: 80 }
  ];

  return (
    <section id="about" className="py-12 sm:py-24 relative overflow-hidden" style={{ fontFamily: 'Montserrat, Arial, sans-serif' }}>
      {/* Background minimaliste About amélioré */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {/* Trait SVG bleu animé */}
        <motion.svg
          width="600" height="180" viewBox="0 0 600 180" fill="none"
          className="absolute left-[-100px] top-10 opacity-60"
          initial={{ x: 0 }}
          animate={{ x: [0, 60, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        >
          <path d="M 20 90 Q 200 10 400 90 T 580 90" stroke="#595bc2" strokeWidth="3" fill="none" strokeLinecap="round" />
        </motion.svg>
        {/* Trait SVG rose animé, décalé */}
        <motion.svg
          width="600" height="180" viewBox="0 0 600 180" fill="none"
          className="absolute left-[-80px] top-28 opacity-50"
          initial={{ x: 0 }}
          animate={{ x: [0, -40, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        >
          <path d="M 40 120 Q 180 170 350 100 T 560 120" stroke="#ff767a" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        </motion.svg>
        {/* Petits cercles pastel animés */}
        <motion.div
          className="absolute left-[20%] top-[30%] w-6 h-6 rounded-full bg-[#595bc2]/50"
          animate={{ y: [0, 18, 0], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute left-[60%] top-[60%] w-4 h-4 rounded-full bg-[#ff767a]/50"
          animate={{ y: [0, -14, 0], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />
        <motion.div
          className="absolute left-[75%] top-[20%] w-3 h-3 rounded-full bg-[#595bc2]/50"
          animate={{ x: [0, 12, 0], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />
      </div>
      
      {/* Annotations manuscrites */}
      <motion.span 
        className="absolute left-6 sm:left-10 top-4 sm:top-6 text-dark text-base sm:text-xl font-[Caveat,cursive] rotate-[-7deg] pointer-events-none select-none"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: false }}
      >
        Nouveau !
      </motion.span>
      <motion.span 
        className="absolute right-6 sm:right-8 top-1/3 text-bleu text-lg sm:text-2xl font-[Caveat,cursive] rotate-[8deg] pointer-events-none select-none"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: false }}
      >
        Testé & approuvé
      </motion.span>
      <motion.span 
        className="absolute left-1/4 bottom-4 sm:bottom-8 text-dark text-base sm:text-xl font-[Caveat,cursive] rotate-[-10deg] pointer-events-none select-none"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        viewport={{ once: false }}
      >
        Clique ici !
      </motion.span>
      
      <div className="max-w-6xl mx-auto px-4">
        <motion.div 
          className="text-center mb-8 sm:mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false }}
        >
          <motion.h2 
            className="text-2xl sm:text-4xl md:text-6xl font-extrabold text-dark mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: false }}
          >
            À propos de <span className="text-bleu">moi</span>
          </motion.h2>
          <motion.p 
            className="text-sm sm:text-base md:text-xl text-dark/70 max-w-full sm:max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: false }}
          >
            Passionné par la technologie et le design, je combine créativité et expertise technique pour créer des expériences digitales exceptionnelles.
          </motion.p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-16 items-start">
          {/* Photo */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false }}
          >
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-bleu/20 to-[#ff767a]/20 rounded-3xl transform rotate-3" />
              <img
                src="/File/Spynel.jpeg"
                alt="Spynel KOUTON"
                className="relative w-full h-auto rounded-3xl shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform duration-500"
              />
            </div>
          </motion.div>
          
          {/* Contenu */}
          <motion.div 
            className="space-y-6 sm:space-y-8"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: false }}
          >
            <motion.h3 
              className="text-xl sm:text-3xl font-bold text-dark"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              viewport={{ once: false }}
            >
              Mon parcours
            </motion.h3>
            
            <motion.div 
              className="space-y-4 sm:space-y-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              viewport={{ once: false }}
            >
              <p className="text-sm sm:text-base text-dark/80 leading-relaxed">
                Avec plus de 3 ans d'expérience dans le développement web et le design graphique, j'ai eu l'opportunité de travailler sur des projets variés et stimulants. Mon approche combine une solide expertise technique avec une sensibilité artistique aiguisée.
              </p>
              <p className="text-sm sm:text-base text-dark/80 leading-relaxed">
                Je crois en la puissance de la collaboration et en l'importance de comprendre les besoins profonds de mes clients pour créer des solutions qui dépassent leurs attentes.
              </p>
            </motion.div>
            
            <motion.div 
              className="grid grid-cols-2 gap-4 sm:gap-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
              viewport={{ once: false }}
            >
              <div className="text-center p-4 sm:p-6 bg-white rounded-2xl shadow-md">
                <div className="text-2xl sm:text-4xl font-bold text-bleu mb-2">50+</div>
                <div className="text-sm sm:text-base text-dark/70">Projets réalisés</div>
              </div>
              <div className="text-center p-4 sm:p-6 bg-white rounded-2xl shadow-md">
                <div className="text-2xl sm:text-4xl font-bold text-bleu mb-2">3+</div>
                <div className="text-sm sm:text-base text-dark/70">Années d'expérience</div>
              </div>
            </motion.div>
            
            <motion.button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-bleu hover:bg-[#ff767a] text-white font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-full shadow transition-all duration-200 text-sm sm:text-base"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
              viewport={{ once: false }}
            >
              Me contacter
            </motion.button>
          </motion.div>
        </div>

        {/* Section Compétences */}
        <motion.div 
          className="mt-16 sm:mt-24"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false }}
        >
          <motion.h3 
            className="text-2xl sm:text-4xl font-bold text-dark text-center mb-8 sm:mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: false }}
          >
            Mes <span className="text-bleu">Compétences</span>
          </motion.h3>
          
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
            {/* Langages de programmation */}
            <motion.div 
              className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-md"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              viewport={{ once: false }}
            >
              <h4 className="text-lg sm:text-2xl font-bold text-dark mb-6 sm:mb-8 text-center">Langages de programmation</h4>
              <div className="space-y-4 sm:space-y-6">
                {programmingSkills.map((skill, index) => (
                  <motion.div 
                    key={skill.name}
                    className="space-y-2"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1, ease: "easeOut" }}
                    viewport={{ once: false }}
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-sm sm:text-base font-medium text-dark">{skill.name}</span>
                      <span className="text-sm sm:text-base font-bold text-bleu">{skill.percentage}%</span>
                    </div>
                    <div className="w-full bg-sand rounded-full h-2 sm:h-3">
                      <motion.div
                        className="bg-gradient-to-r from-bleu to-[#ff767a] h-2 sm:h-3 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.percentage}%` }}
                        transition={{ duration: 1.5, delay: 0.8 + index * 0.1, ease: "easeOut" }}
                        viewport={{ once: false }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Outils de design */}
            <motion.div 
              className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-md"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              viewport={{ once: false }}
            >
              <h4 className="text-lg sm:text-2xl font-bold text-dark mb-6 sm:mb-8 text-center">Outils de design</h4>
              <div className="space-y-4 sm:space-y-6">
                {designTools.map((tool, index) => (
                  <motion.div 
                    key={tool.name}
                    className="space-y-2"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1, ease: "easeOut" }}
                    viewport={{ once: false }}
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-sm sm:text-base font-medium text-dark">{tool.name}</span>
                      <span className="text-sm sm:text-base font-bold text-bleu">{tool.percentage}%</span>
                    </div>
                    <div className="w-full bg-sand rounded-full h-2 sm:h-3">
                      <motion.div
                        className="bg-gradient-to-r from-[#ff767a] to-bleu h-2 sm:h-3 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${tool.percentage}%` }}
                        transition={{ duration: 1.5, delay: 0.8 + index * 0.1, ease: "easeOut" }}
                        viewport={{ once: false }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

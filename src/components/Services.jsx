import React from 'react';
import { Monitor, Smartphone, Zap, Search, Palette, Code2 } from 'lucide-react';
import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      icon: Monitor,
      title: 'Développement Web',
      description: 'Sites web modernes et applications web performantes avec les dernières technologies.',
      features: ['React & Vue.js', 'Node.js & Express', 'Bases de données', 'API REST']
    },
    {
      icon: Smartphone,
      title: 'Applications Mobiles',
      description: 'Applications mobiles natives et hybrides pour iOS et Android.',
      features: ['React Native', 'Flutter', 'Progressive Web Apps', 'App Store Optimization']
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Interfaces utilisateur intuitives et expériences utilisateur exceptionnelles.',
      features: ['Design System', 'Prototypage', 'Tests utilisateurs', 'Accessibilité']
    },
    {
      icon: Zap,
      title: 'Optimisation Performance',
      description: 'Amélioration des performances et de la vitesse de chargement.',
      features: ['Core Web Vitals', 'Lazy Loading', 'Compression', 'CDN']
    },
    {
      icon: Search,
      title: 'SEO & Marketing',
      description: 'Optimisation pour les moteurs de recherche et stratégies marketing.',
      features: ['SEO Technique', 'Content Marketing', 'Analytics', 'Conversion']
    },
    {
      icon: Code2,
      title: 'Consulting Tech',
      description: 'Conseil en architecture technique et choix technologiques.',
      features: ['Architecture', 'Code Review', 'Formation', 'Audit technique']
    }
  ];

  return (
    <section id="services" className="py-12 sm:py-24 relative overflow-hidden" style={{ fontFamily: 'Montserrat, Arial, sans-serif' }}>
      {/* Background minimaliste Services */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {/* Lignes de code flottantes */}
        <motion.div
          className="absolute left-[10%] top-[15%] text-[#595bc2]/20 font-mono text-xs"
          animate={{ y: [0, -20, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        >
          &lt;div&gt;
        </motion.div>
        <motion.div
          className="absolute right-[15%] top-[25%] text-[#ff767a]/20 font-mono text-xs"
          animate={{ y: [0, 15, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        >
          function()
        </motion.div>
        
        {/* Icônes tech flottantes */}
        <motion.div
          className="absolute right-[25%] top-[40%] text-[#595bc2]/15"
          animate={{ rotate: [0, 360], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        >
          <Monitor size={16} />
        </motion.div>
        <motion.div
          className="absolute left-[30%] top-[60%] text-[#ff767a]/15"
          animate={{ rotate: [0, -360], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear', delay: 3 }}
        >
          <Smartphone size={14} />
        </motion.div>
        
        {/* Halo tech en haut à droite */}
        <div className="absolute right-[-100px] top-[-80px] w-[250px] h-[250px] rounded-full bg-[#595bc2]/15 blur-3xl" />
        {/* Petit halo rose en bas à gauche */}
        <div className="absolute left-[-60px] bottom-[-40px] w-[150px] h-[150px] rounded-full bg-[#ff767a]/15 blur-2xl" />
      </div>
      
      {/* Annotations manuscrites */}
      <motion.span 
        className="absolute left-6 sm:left-10 top-4 sm:top-6 text-dark text-base sm:text-xl font-[Caveat,cursive] rotate-[-7deg] pointer-events-none select-none"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        viewport={{ once: false }}
      >
        Nouveau !
      </motion.span>
      <motion.span 
        className="absolute right-6 sm:right-8 top-1/3 text-bleu text-lg sm:text-2xl font-[Caveat,cursive] rotate-[8deg] pointer-events-none select-none"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        viewport={{ once: false }}
      >
        Testé & approuvé
      </motion.span>
      <motion.span 
        className="absolute left-1/4 bottom-4 sm:bottom-8 text-dark text-base sm:text-xl font-[Caveat,cursive] rotate-[-10deg] pointer-events-none select-none"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        viewport={{ once: false }}
      >
        Clique ici !
      </motion.span>
      
      <div className="max-w-6xl mx-auto px-4">
        <motion.div 
          className="text-center mb-8 sm:mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          viewport={{ once: false }}
        >
          <motion.h2 
            className="text-2xl sm:text-4xl md:text-6xl font-extrabold text-dark mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            viewport={{ once: false }}
          >
            Mes <span className="text-bleu">Services</span>
          </motion.h2>
          <motion.p 
            className="text-sm sm:text-base md:text-xl text-dark/70 max-w-full sm:max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            viewport={{ once: false }}
          >
            Des solutions complètes pour transformer vos idées en réalité digitale. De la conception à la mise en ligne, je vous accompagne à chaque étape.
          </motion.p>
        </motion.div>
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          viewport={{ once: false }}
        >
          {services.map((service, index) => (
            <motion.div 
              key={service.title} 
              className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-8 shadow-md hover:shadow-lg transition-all group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              viewport={{ once: false }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-bleu/10 rounded-xl sm:rounded-2xl mb-4 sm:mb-6">
                <service.icon size={24} className="sm:w-8 sm:h-8 text-bleu" />
              </div>
              <h3 className="text-lg sm:text-2xl font-bold mb-3 sm:mb-4 text-dark group-hover:text-bleu transition-colors duration-200">{service.title}</h3>
              <p className="text-sm sm:text-base text-dark/80 mb-4 sm:mb-6 leading-relaxed">{service.description}</p>
              <ul className="space-y-1 sm:space-y-2 mb-6 sm:mb-8">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-dark/60 text-xs sm:text-sm">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-bleu rounded-full mr-2 sm:mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                className="w-full bg-bleu hover:bg-[#ff767a] text-white font-bold px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow transition-all duration-200 text-sm sm:text-base"
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                En savoir plus
              </button>
            </motion.div>
          ))}
        </motion.div>
        <motion.div 
          className="text-center mt-12 sm:mt-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: false }}
        >
          <div className="bg-sand rounded-2xl sm:rounded-3xl p-4 sm:p-8 max-w-full sm:max-w-4xl mx-auto shadow-md">
            <motion.h3 
              className="text-xl sm:text-3xl font-bold mb-3 sm:mb-4 text-dark"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              viewport={{ once: false }}
            >
              Prêt à démarrer votre projet ?
            </motion.h3>
            <motion.p 
              className="text-sm sm:text-base md:text-lg text-dark/70 mb-6 sm:mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
              viewport={{ once: false }}
            >
              Discutons de vos besoins et créons ensemble quelque chose d'extraordinaire.
            </motion.p>
            <motion.button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto bg-bleu hover:bg-[#ff767a] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-lg transition-all duration-200 hover:scale-105 shadow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
              viewport={{ once: false }}
            >
              Démarrer un projet
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;

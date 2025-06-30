import React, { useState } from 'react';
import { Eye, Github, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Tous' },
    { id: 'web', name: 'Web' },
    { id: 'mobile', name: 'Mobile' },
    { id: 'design', name: 'Design' }
  ];

  const projects = [
    {
      id: 1,
      title: 'E-commerce Moderne',
      description: 'Plateforme e-commerce complète avec paiement intégré et gestion des stocks.',
      category: 'web',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
      technologies: ['React', 'Node.js', 'Stripe', 'MongoDB'],
      featured: true
    },
    {
      id: 2,
      title: 'App Mobile Fitness',
      description: 'Application mobile de fitness avec suivi des performances et coaching personnalisé.',
      category: 'mobile',
      image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308',
      technologies: ['React Native', 'Firebase', 'Redux', 'Charts'],
      featured: true
    },
    {
      id: 3,
      title: 'Dashboard Analytics',
      description: "Interface d'administration avec visualisation de données en temps réel.",
      category: 'web',
      image: 'https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5',
      technologies: ['Vue.js', 'D3.js', 'Express', 'PostgreSQL'],
      featured: false
    },
    {
      id: 4,
      title: 'Brand Identity',
      description: 'Identité visuelle complète pour une startup technologique innovante.',
      category: 'design',
      image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca',
      technologies: ['Figma', 'Illustrator', 'Photoshop', 'Branding'],
      featured: false
    },
    {
      id: 5,
      title: 'Portfolio Créatif',
      description: 'Site portfolio pour un photographe avec galerie interactive.',
      category: 'web',
      image: 'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99',
      technologies: ['Next.js', 'Framer Motion', 'Sanity', 'Vercel'],
      featured: true
    },
    {
      id: 6,
      title: 'App de Méditation',
      description: 'Application mobile de méditation avec sons relaxants et programmes guidés.',
      category: 'mobile',
      image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429',
      technologies: ['Flutter', 'Dart', 'Audio', 'Animations'],
      featured: false
    }
  ];

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="portfolio" className="py-12 sm:py-24 relative overflow-hidden" style={{ fontFamily: 'Montserrat, Arial, sans-serif' }}>
      {/* Background minimaliste Portfolio */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {/* Formes créatives flottantes */}
        <motion.div
          className="absolute left-[15%] top-[20%] w-12 h-12 border-2 border-[#595bc2]/20 rounded-full"
          animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute right-[20%] top-[30%] w-8 h-8 bg-[#ff767a]/20 transform rotate-45"
          animate={{ rotate: [45, 225, 45], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />
        <motion.div
          className="absolute left-[25%] bottom-[25%] w-6 h-6 border-2 border-[#595bc2]/20 rounded-lg"
          animate={{ y: [0, -15, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />
        
        {/* Éléments de palette */}
        <motion.div
          className="absolute right-[35%] top-[60%] w-10 h-10 border-2 border-[#ff767a]/20 rounded-full"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
        />
        <motion.div
          className="absolute left-[60%] top-[15%] w-5 h-5 bg-[#595bc2]/20 rounded-full"
          animate={{ x: [0, 12, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />
        
        {/* Lignes créatives */}
        <motion.svg
          width="200" height="100" viewBox="0 0 200 100" fill="none"
          className="absolute left-[5%] top-[70%] opacity-30"
          initial={{ x: 0 }}
          animate={{ x: [0, 20, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        >
          <path d="M 20 50 Q 60 20 100 50 T 180 50" stroke="#595bc2" strokeWidth="2" fill="none" strokeLinecap="round" />
        </motion.svg>
        <motion.svg
          width="150" height="80" viewBox="0 0 150 80" fill="none"
          className="absolute right-[10%] bottom-[20%] opacity-25"
          initial={{ x: 0 }}
          animate={{ x: [0, -15, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        >
          <path d="M 30 40 Q 60 10 90 40 T 120 40" stroke="#ff767a" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        </motion.svg>
        
        {/* Halo créatif en haut à gauche */}
        <div className="absolute left-[-80px] top-[-60px] w-[200px] h-[200px] rounded-full bg-[#595bc2]/15 blur-3xl" />
        {/* Halo rose en bas à droite */}
        <div className="absolute right-[-100px] bottom-[-80px] w-[180px] h-[180px] rounded-full bg-[#ff767a]/15 blur-2xl" />
      </div>
      
      {/* Annotations manuscrites */}
      <motion.span 
        className="absolute left-4 sm:left-8 top-6 sm:top-10 text-bleu text-lg sm:text-2xl font-[Caveat,cursive] rotate-[-8deg] pointer-events-none select-none"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: false }}
      >
        Mon préféré
      </motion.span>
      <motion.span 
        className="absolute right-6 sm:right-10 top-1/2 text-dark text-base sm:text-xl font-[Caveat,cursive] rotate-[7deg] pointer-events-none select-none"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: false }}
      >
        À découvrir !
      </motion.span>
      <motion.span 
        className="absolute left-1/2 bottom-4 sm:bottom-8 -translate-x-1/2 text-bleu text-base sm:text-xl font-[Caveat,cursive] rotate-[-8deg] pointer-events-none select-none"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        viewport={{ once: false }}
      >
        Scroll pour voir plus
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
            Mon <span className="text-bleu">Portfolio</span>
          </motion.h2>
          <motion.p 
            className="text-sm sm:text-base md:text-xl text-dark/70 max-w-full sm:max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: false }}
          >
            Découvrez une sélection de mes projets les plus récents et les plus innovants. Chaque projet raconte une histoire unique de créativité et d'excellence technique.
          </motion.p>
        </motion.div>
        {/* Category Filter */}
        <motion.div 
          className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: false }}
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium transition-all duration-200 border border-sand shadow-sm focus:outline-none text-sm sm:text-base ${
                selectedCategory === category.id
                  ? 'bg-bleu text-white'
                  : 'bg-white text-dark hover:bg-sand/80'
              }`}
              style={{ fontFamily: 'Montserrat, Arial, sans-serif' }}
            >
              {category.name}
            </button>
          ))}
        </motion.div>
        {/* Projects Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: false }}
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-white rounded-2xl sm:rounded-3xl shadow-md hover:shadow-lg transition-all overflow-hidden flex flex-col"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              viewport={{ once: false }}
            >
              <div className="relative overflow-hidden group">
                <img
                  className="w-full h-48 sm:h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                  alt={project.title}
                  src={project.image}
                />
                <div className="absolute inset-0 bg-bleu/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-3 sm:top-4 right-3 sm:right-4 flex space-x-1 sm:space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    className="p-1.5 sm:p-2 bg-bleu text-white rounded-full shadow hover:bg-[#ff767a] transition-colors duration-200"
                    aria-label="Voir le projet"
                  >
                    <Eye size={16} className="sm:w-5 sm:h-5" />
                  </button>
                  <button
                    className="p-1.5 sm:p-2 bg-bleu text-white rounded-full shadow hover:bg-[#ff767a] transition-colors duration-200"
                    aria-label="Voir le code"
                  >
                    <Github size={16} className="sm:w-5 sm:h-5" />
                  </button>
                  <button
                    className="p-1.5 sm:p-2 bg-bleu text-white rounded-full shadow hover:bg-[#ff767a] transition-colors duration-200"
                    aria-label="Lien externe"
                  >
                    <ExternalLink size={16} className="sm:w-5 sm:h-5" />
                  </button>
                </div>
              </div>
              <div className="p-4 sm:p-6 flex-1 flex flex-col">
                <h3 className="text-base sm:text-xl font-bold mb-2 sm:mb-3 text-dark group-hover:text-bleu transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm text-dark/70 mb-3 sm:mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 sm:px-3 py-1 bg-sand text-dark/80 rounded-full text-xs sm:text-sm border border-sand"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <button
                  className="mt-auto bg-bleu hover:bg-[#ff767a] text-white font-bold px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow transition-all duration-200 text-sm sm:text-base"
                  onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Me contacter
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;

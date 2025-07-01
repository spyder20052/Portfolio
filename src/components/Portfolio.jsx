import React, { useState } from 'react';
import { Eye, Github, ExternalLink, Figma } from 'lucide-react';
import { motion } from 'framer-motion';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [galleryImages, setGalleryImages] = useState([]);
  const [galleryIndex, setGalleryIndex] = useState(0);
  const [zoomed, setZoomed] = useState(false);

  const categories = [
    { id: 'all', name: 'Tous' },
    { id: 'web', name: 'Web' },
    { id: 'mobile', name: 'Mobile' },
    { id: 'affiche', name: 'Affiche' }
  ];

  const projects = [
    {
      id: 1,
      title: 'ArbitraChain',
      description: 'Il s\'agit d\'une plateforme en ligne pour automatiser l\'arbitrage en ligne fonctionnant grace à l\'ia',
      category: 'web',
      image: 'Arbitra/Sign-dark.webp',
      technologies: ['Figma', 'Canva', 'Pinterest', 'Youtube pour la documentation'],
      featured: true,
      github: 'https://arbitrachain.com/',
      figma: 'https://www.figma.com/proto/b8TkVP7lMw4LAY9gOsnQi2/ArbitraChain?node-id=31-2&t=fgSWQafFTUAIM2VK-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=31%3A2',
      external: 'https://arbitrachain.com/',
      gallery: [
        'Arbitra/Accueil.webp',
        'Arbitra/Log-dark.webp',
        'Arbitra/Tarif.webp',
        'Arbitra/Newsletter.webp',
        'Arbitra/Sign-dark.webp',
        'Arbitra/Dash-dark.webp',
        'Arbitra/Contact.webp',
        'Arbitra/type.webp'
      ]
    },
    {
      id: 2,
      title: 'Crispy',
      description: 'Site de restauration destiné à une marque de Fast-Food Crispy pour gerer ses ventes en ligne',
      category: 'web',
      image: 'Crispy/crispy.webp',
      technologies: ['Figma', 'Canva', 'Pinterest', 'Youtube pour la documentation'],
      featured: true,
      figma: 'https://www.figma.com/proto/xSiBjZ3JN99ihmTEbOb0z4/resto?node-id=6-174&t=Yed49kabdS1fRalB-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1',
      external: 'https://app-mobile-fitness.com',
      gallery: [
        'Crispy/crispy.webp',
        'Crispy/Desktop2.webp',
        'Crispy/Desktop3.webp'
      ]
    },
    {
      id: 3,
      title: 'NextGen',
      description: "Landing Page d'un projet personnel que je me suis amusé à faire sur figma pour me familiariser avec le prototypage",
      category: 'web',
      image: 'NextGen/4.webp',
      technologies: ['Figma', 'Canva', 'Pinterest', 'Youtube pour la documentation'],
      featured: true,
      figma: 'https://www.figma.com/proto/Dud3EhOiK2vT00HF5B7qNS/Untitled?node-id=45-939&t=Yed49kabdS1fRalB-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1',
      external: 'https://app-mobile-fitness.com',
      gallery: [
        'NextGen/1.webp',
        'NextGen/2.webp',
        'NextGen/3.webp',
        'NextGen/4.webp',
        'NextGen/5.webp'
      ]
    },
    {
      id: 4,
      title: 'Portfolio\'s Feller',
      description: 'Maquette figma du portfolio d\'un expert en cybersécurité',
      category: 'web',
      image: 'Feller/portfolio.webp',
      technologies: ['Figma', 'Illustrator', 'Photoshop', 'Branding'],
      featured: false,
      figma: 'https://www.figma.com/proto/g9GDjXwHXcm5GZ2OgAkvLY/Portfolio-Feller?node-id=10-2&t=KY4dffIM1YGICvuh-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1',
      gallery: [
        'Feller/portfolio.webp'
      ]
    },
    {
      id: 5,
      title: 'Astro',
      description: 'Site web pour une startup de developpement web',
      category: 'web',
      image: 'Astro/home.webp',
      technologies: ['Figma', 'Canva', 'Pinterest', 'Youtube pour la documentation'],
      featured: false,
      figma: 'https://www.figma.com/proto/Dud3EhOiK2vT00HF5B7qNS/Untitled?node-id=10-497&t=Yed49kabdS1fRalB-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1',
      gallery: [
        'Astro/home.webp'
      ]
    },
    {
      id: 6,
      title: 'Zitawi',
      description: 'J\'ai réaliser une refonte total du menu du FastFood Zitawi pour rendre leur menu plus gourmand',
      category: 'affiche',
      image: 'File/1.webp',
      technologies: ['Figma', 'Canva', 'Pinterest'],
      featured: false,
      gallery: [
        'File/1.webp',
        'File/2.webp',
        'File/3.webp',
        'File/4.webp'
      ]
    },
    {
      id: 7,
      title: 'Future Studio',
      description: 'J\'ai réaliser des logos engagants pour le Future Studio leader de l\'innovation autour de la tech au Bénin',
      category: 'affiche',
      image: 'File/1_.webp',
      technologies: ['Figma', 'Colors', 'Canva', 'Branding'],
      featured: false,
      gallery: [
        'File/1_.webp',
        'File/2_.webp',
        'File/3_.webp',
        'File/4_.webp',
        'File/5_.webp'
      ]
    },
    {
      id: 8,
      title: 'Snaki',
      description: 'Affiche de présentation des bubbles tea de la marque snaki',
      category: 'affiche',
      image: 'File/bubble.webp',
      technologies: ['Figma', 'Canva', 'Pinterest', 'Youtube pour la documentation'],
      featured: false,
      gallery: [
        'File/bubble.webp',
        'Snaki/1.webp',
        'Snaki/2.webp',
        'Snaki/3.webp',
        'Snaki/4.webp',
        'Snaki/5.webp',
        'Snaki/6.webp',
        'Snaki/7.webp',
        'Snaki/8.webp',
        'Snaki/9.webp',
        'Snaki/10.webp',
        'Snaki/11.webp'
      ]
    },
    {
      id: 9,
      title: 'Netflix',
      description: 'J\'ai réaliser pour une entreprise de vente en ligne Lumora une affiche pour promouvoir son service de vente d\'abonnement Netflix',
      category: 'affiche',
      image: '/File/netflix.webp',
      technologies: ['Figma', 'Canva', 'Pinterest', 'Youtube pour la documentation'],
      featured: false,
      gallery: [
        '/File/netflix.webp'
      ]
    }
  ];

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  const handleOpenGallery = (project) => {
    setGalleryImages(project.gallery || []);
    setGalleryIndex(0);
    setGalleryOpen(true);
  };

  const handleCloseGallery = () => {
    setGalleryOpen(false);
    setGalleryImages([]);
    setGalleryIndex(0);
    setZoomed(false);
  };

  const handlePrevImage = () => {
    setGalleryIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setGalleryIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
  };

  const handleImageClick = () => {
    setZoomed((z) => !z);
  };

  const handleDownloadGallery = async (project) => {
    if (!project.gallery || project.gallery.length === 0) return;
    const zip = new JSZip();
    const folder = zip.folder(project.title.replace(/\s+/g, '_'));
    // Téléchargement des images et ajout au zip
    await Promise.all(
      project.gallery.map(async (url, idx) => {
        try {
          const response = await fetch(url);
          const blob = await response.blob();
          const ext = blob.type.split('/')[1] || 'webp';
          folder.file(`image_${idx + 1}.${ext}`, blob);
        } catch (e) {
          // Ignore l'image si erreur
        }
      })
    );
    zip.generateAsync({ type: 'blob' }).then((content) => {
      saveAs(content, `${project.title.replace(/\s+/g, '_')}_galerie.zip`);
    });
  };

  return (
    <section id="portfolio" className="py-12 sm:py-24 relative overflow-hidden" style={{ fontFamily: 'Montserrat, Arial, sans-serif' }}>
      {/* Modale galerie d'images */}
      {galleryOpen && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/70">
          <div className="relative bg-white rounded-2xl shadow-lg max-w-2xl w-full p-4 sm:p-8 flex flex-col items-center">
            <button onClick={handleCloseGallery} className="absolute top-2 right-2 text-dark bg-sand rounded-full p-2 hover:bg-bleu hover:text-white transition-all">✕</button>
            {galleryImages.length > 0 && (
              <>
                <div className="flex items-center justify-center w-full h-[60vh] mb-4">
                  <img
                    src={galleryImages[galleryIndex]}
                    alt="Aperçu détaillé"
                    className={`max-h-full w-auto rounded-xl shadow transition-transform duration-300 cursor-zoom-in ${zoomed ? 'scale-150 cursor-zoom-out z-10' : ''}`}
                    style={{ objectFit: 'cover', objectPosition: 'top', transition: 'transform 0.3s' }}
                    onClick={handleImageClick}
                    loading="lazy"
                  />
                </div>
                <div className="flex items-center justify-center gap-4 mb-2">
                  <button onClick={handlePrevImage} className="bg-sand text-dark rounded-full p-2 hover:bg-bleu hover:text-white transition-all">◀</button>
                  <span className="text-dark/70 text-sm">{galleryIndex + 1} / {galleryImages.length}</span>
                  <button onClick={handleNextImage} className="bg-sand text-dark rounded-full p-2 hover:bg-bleu hover:text-white transition-all">▶</button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
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
        transition={{ duration: 0.3, ease: "easeOut" }}
        viewport={{ once: false }}
      >
        Mon préféré
      </motion.span>
      <motion.span 
        className="absolute right-6 sm:right-10 top-1/2 text-dark text-base sm:text-xl font-[Caveat,cursive] rotate-[7deg] pointer-events-none select-none"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        viewport={{ once: false }}
      >
        À découvrir !
      </motion.span>
      <motion.span 
        className="absolute left-1/2 bottom-4 sm:bottom-8 -translate-x-1/2 text-bleu text-base sm:text-xl font-[Caveat,cursive] rotate-[-8deg] pointer-events-none select-none"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        viewport={{ once: false }}
      >
        Scroll pour voir plus
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
            Mon <span className="text-bleu">Portfolio</span>
          </motion.h2>
          <motion.p 
            className="text-sm sm:text-base md:text-xl text-dark/70 max-w-full sm:max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
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
          transition={{ duration: 0.3, ease: "easeOut" }}
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
          transition={{ duration: 0.4, ease: "easeOut" }}
          viewport={{ once: false }}
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-white rounded-2xl sm:rounded-3xl shadow-md hover:shadow-lg transition-all overflow-hidden flex flex-col"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              viewport={{ once: false }}
            >
              <div className="relative overflow-hidden group">
                <img
                  className="w-full h-48 sm:h-64 object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  alt={project.title}
                  src={project.image}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-bleu/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-3 sm:top-4 right-3 sm:right-4 flex space-x-1 sm:space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    className="p-1.5 sm:p-2 bg-bleu text-white rounded-full shadow hover:bg-[#ff767a] transition-colors duration-200"
                    aria-label="Voir le projet"
                    onClick={() => handleOpenGallery(project)}
                  >
                    <Eye size={16} className="sm:w-5 sm:h-5" />
                  </button>
                  {['web', 'mobile'].includes(project.category) && project.github && (
                    <button
                      className="p-1.5 sm:p-2 bg-bleu text-white rounded-full shadow hover:bg-[#ff767a] transition-colors duration-200"
                      aria-label="Voir le code sur GitHub"
                      onClick={() => window.open(project.github, '_blank')}
                    >
                      <Github size={16} className="sm:w-5 sm:h-5" />
                    </button>
                  )}
                  {project.category === 'web' && project.figma && (
                    <button
                      className="p-1.5 sm:p-2 bg-bleu text-white rounded-full shadow hover:bg-[#ff767a] transition-colors duration-200"
                      aria-label="Voir le projet sur Figma"
                      onClick={() => window.open(project.figma, '_blank')}
                    >
                      <Figma size={16} className="sm:w-5 sm:h-5" />
                    </button>
                  )}
                  <button
                    className="p-1.5 sm:p-2 bg-bleu text-white rounded-full shadow hover:bg-[#ff767a] transition-colors duration-200"
                    aria-label="Télécharger la galerie"
                    onClick={() => handleDownloadGallery(project)}
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

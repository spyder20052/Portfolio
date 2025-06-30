import React from 'react';
import { Heart, ArrowUp, Github, Linkedin, Mail, MapPin, Phone, Code, Instagram } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'Accueil', href: '#hero' },
    { name: 'À propos', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' }
  ];

  const services = [
    'Développement Web',
    'Applications Mobiles',
    'UI/UX Design',
    'Consulting Tech'
  ];

  const socialLinks = [
    { icon: Github, name: 'GitHub', color: 'hover:text-bleu' },
    { icon: Linkedin, name: 'LinkedIn', color: 'hover:text-bleu' },
    { icon: Instagram, name: 'Instagram', color: 'hover:text-bleu' }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative py-8 sm:py-14 border-t border-sand bg-cream" style={{ fontFamily: 'Montserrat, Arial, sans-serif' }}>
      <div className="max-w-6xl mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-10">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <span className="text-xl sm:text-2xl font-extrabold text-dark mb-3 sm:mb-4 block">Spynel KOUTON</span>
            <p className="text-xs sm:text-sm text-dark/70 mb-4 sm:mb-6 leading-relaxed">
              Créateur d'expériences digitales exceptionnelles. Passionné par l'innovation et la technologie, je transforme vos idées en réalité numérique.
            </p>
            <div className="flex space-x-2 sm:space-x-3 mt-2">
              {socialLinks.map((social) => (
                <button
                  key={social.name}
                  className={`w-8 h-8 sm:w-10 sm:h-10 bg-white border border-sand rounded-full flex items-center justify-center text-dark/60 transition-all duration-200 shadow-sm ${social.color}`}
                  aria-label={social.name}
                >
                  <social.icon size={16} className="sm:w-5 sm:h-5" />
                </button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold text-dark mb-3 sm:mb-4">Navigation</h3>
            <ul className="space-y-1 sm:space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-dark/70 hover:text-bleu transition-colors duration-200 text-xs sm:text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold text-dark mb-3 sm:mb-4">Services</h3>
            <ul className="space-y-1 sm:space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-dark/70 text-xs sm:text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold text-dark mb-3 sm:mb-4">Contact</h3>
            <div className="space-y-1 sm:space-y-2">
              <div className="flex items-center space-x-2 sm:space-x-3 text-dark/70">
                <MapPin size={14} className="sm:w-4 sm:h-4" />
                <span className="text-xs sm:text-sm">Cotonou, Bénin</span>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3 text-dark/70">
                <Phone size={14} className="sm:w-4 sm:h-4" />
                <span className="text-xs sm:text-sm">+229 01 53 30 58 96</span>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3 text-dark/70">
                <Mail size={14} className="sm:w-4 sm:h-4" />
                <span className="text-xs sm:text-sm">kspynel@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-sand pt-4 sm:pt-7 flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4 text-dark/50 text-xs sm:text-sm">
          <div className="flex items-center gap-1 sm:gap-2">
            <span>Fait avec</span>
            <Heart size={14} className="sm:w-4 sm:h-4 text-bleu fill-current" />
            <span>et beaucoup de café</span>
            <Code size={14} className="sm:w-4 sm:h-4 text-bleu" />
          </div>
          <p>© 2025 Portfolio. Tous droits réservés.</p>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 bg-bleu hover:bg-[#ff767a] rounded-full text-white transition-all duration-200 shadow"
            aria-label="Remonter en haut"
          >
            <ArrowUp size={14} className="sm:w-[18px] sm:h-[18px]" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
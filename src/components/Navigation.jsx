import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Accueil', href: '#hero' },
    { name: 'À propos', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-cream/95 shadow-lg py-2 sm:py-3' : 'bg-transparent py-3 sm:py-5'
      }`}
      style={{ fontFamily: 'Montserrat, Arial, sans-serif' }}
    >
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <div
          className="text-[#595bc2] text-lg sm:text-2xl font-extrabold tracking-tight cursor-pointer text-dark select-none"
          onClick={() => scrollToSection('#hero')}
        >
          Spynel <span className="text-[#595bc2]">KOUTON.</span>
        </div>
        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6 sm:gap-8">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className="text-dark hover:text-bleu font-medium transition-colors duration-200 px-2 py-1 rounded-md focus:outline-none text-sm sm:text-base"
              style={{ fontFamily: 'Montserrat, Arial, sans-serif' }}
            >
              {item.name}
            </button>
          ))}
          <button
            onClick={() => scrollToSection('#contact')}
            className="bg-bleu hover:bg-[#ff767a] text-white font-bold px-4 sm:px-6 py-2 rounded-full shadow transition-all duration-200 ml-2 text-sm sm:text-base"
            style={{ fontFamily: 'Montserrat, Arial, sans-serif' }}
          >
            Contactez-moi
          </button>
        </div>
        {/* Mobile menu button */}
        <button
          className="md:hidden text-dark p-1 sm:p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} className="sm:w-7 sm:h-7" /> : <Menu size={24} className="sm:w-7 sm:h-7" />}
        </button>
      </div>
      {/* Mobile nav */}
      {isOpen && (
        <div className="md:hidden bg-cream/95 shadow-lg rounded-b-xl sm:rounded-b-2xl px-4 sm:px-6 pt-3 sm:pt-4 pb-4 sm:pb-6 mt-2 mx-2 flex flex-col gap-3 sm:gap-4 animate-fade-in-down">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className="text-dark hover:text-bleu font-medium text-base sm:text-lg transition-colors duration-200 text-left px-2 py-2 rounded-md"
              style={{ fontFamily: 'Montserrat, Arial, sans-serif' }}
            >
              {item.name}
            </button>
          ))}
          <button
            onClick={() => scrollToSection('#contact')}
            className="bg-bleu hover:bg-[#ff767a] text-white font-bold px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow transition-all duration-200 mt-2 text-sm sm:text-base"
            style={{ fontFamily: 'Montserrat, Arial, sans-serif' }}
          >
            Contactez-moi
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
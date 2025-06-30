import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp, Home, User, Briefcase, FolderOpen, Mail } from 'lucide-react';

const FloatingNavigation = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navItems = [
    { id: 'hero', icon: Home, label: 'Accueil' },
    { id: 'about', icon: User, label: 'À propos' },
    { id: 'services', icon: Briefcase, label: 'Services' },
    { id: 'portfolio', icon: FolderOpen, label: 'Portfolio' },
    { id: 'contact', icon: Mail, label: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsVisible(scrollY > 300);

      // Detect active section
      const sections = navItems.map(item => item.id);
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
    </AnimatePresence>
  );
};

export default FloatingNavigation;
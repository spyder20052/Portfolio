import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp, ChevronUp } from 'lucide-react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const toggleVisibility = () => {
      const scrolled = document.documentElement.scrollTop;
      const maxHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = (scrolled / maxHeight) * 100;
      
      setScrollProgress(progress);
      setIsVisible(scrolled > 300);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-8 right-8 z-50"
        >
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="relative w-14 h-14 bg-purple-600 hover:bg-purple-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
          >
            {/* Progress ring */}
            <svg className="absolute inset-0 w-full h-full transform -rotate-90" viewBox="0 0 56 56">
              <circle
                cx="28"
                cy="28"
                r="26"
                stroke="rgba(255,255,255,0.2)"
                strokeWidth="2"
                fill="none"
              />
              <motion.circle
                cx="28"
                cy="28"
                r="26"
                stroke="rgba(255,255,255,0.8)"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeDasharray={163.36} // 2 * π * 26
                strokeDashoffset={163.36 - (163.36 * scrollProgress) / 100}
                transition={{ duration: 0.1 }}
              />
            </svg>
            
            {/* Icon */}
            <motion.div
              animate={{ y: [0, -2, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ChevronUp size={24} className="group-hover:scale-110 transition-transform duration-200" />
            </motion.div>

            {/* Tooltip */}
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              whileHover={{ opacity: 1, x: 0 }}
              className="absolute right-full mr-3 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg whitespace-nowrap pointer-events-none"
            >
              Retour en haut
              <div className="absolute top-1/2 -right-1 transform -translate-y-1/2 w-2 h-2 bg-gray-900 rotate-45" />
            </motion.div>
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
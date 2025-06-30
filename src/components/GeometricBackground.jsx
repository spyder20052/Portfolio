import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Terminal, Database, Cpu, Zap, Palette } from 'lucide-react';

const GeometricBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section>
      {/* Fond minimaliste */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          {/* Grand cercle flou pastel */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full bg-[#595bc2]/20 blur-3xl" style={{zIndex:1}} />
          {/* Dégradé radial doux */}
          <div className="absolute left-0 top-0 w-full h-full" style={{background: 'radial-gradient(circle at 70% 30%, #ff767a22 0%, transparent 70%)', zIndex:2}} />
        </div>
        {/* Éléments géométriques flottants */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-16 left-1/4 w-6 h-6 rounded-[20%] bg-[#595bc2] opacity-30" />
          <div className="absolute top-10 right-20 w-4 h-4 rounded-[20%] bg-[#595bc2] opacity-30" />
          <div className="absolute top-1/3 right-1/4 w-4 h-4 rounded-[30%] bg-[#ff767a] opacity-40" />
          <div className="absolute bottom-24 left-1/3 w-3 h-3 rounded-[40%] bg-[#595bc2] opacity-30" />
          <div className="absolute bottom-24 left-10 w-10 h-10 rounded-[20%] bg-[#595bc2] opacity-20" />
          <div className="absolute bottom-10 right-1/3 w-5 h-5 rounded-[25%] bg-[#ff767a] opacity-30" />
        </div>
    </section>
  );
};

export default GeometricBackground;

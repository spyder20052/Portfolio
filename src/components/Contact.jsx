import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import { toast } from './ui/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send(
      'service_gng2y07',
      'template_5hroqmo',
      {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: 'kspynel@gmail.com',
      },
      'ijknwo-iSK1lYmOlz'
    )
    .then((result) => {
      toast({
        title: 'Message envoyé !',
        description: 'Merci pour votre message, je vous répondrai rapidement.',
        variant: 'default',
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, (error) => {
      toast({
        title: 'Erreur lors de l\'envoi',
        description: 'Une erreur est survenue. Veuillez réessayer.',
        variant: 'destructive',
      });
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'kspynel@gmail.com',
      description: 'Envoyez-moi un email'
    },
    {
      icon: Phone,
      title: 'WhatsApp',
      value: '+229 01 43 20 22 39',
      description: 'Ecrivez-moi directement'
    },
    {
      icon: MapPin,
      title: 'Localisation',
      value: 'Cotonou, Bénin',
      description: 'Rencontrons-nous'
    }
  ];

  const socialLinks = [
    { icon: Github, name: 'GitHub', url: 'https://github.com/spyder20052' },
    { icon: Linkedin, name: 'LinkedIn', url: 'https://www.linkedin.com/in/spynel-kouton-756444273/' },
    { icon: Instagram, name: 'Instagram', url: 'https://www.instagram.com/spynelstudio?igsh=MWdycDFoNDc2ZHBtYQ%3D%3D&utm_source=qr' }
  ];

  return (
    <section id="contact" className="py-12 sm:py-24 relative overflow-hidden" style={{ fontFamily: 'Montserrat, Arial, sans-serif' }}>
      {/* Background minimaliste Contact */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {/* Bulles de dialogue flottantes */}
        <motion.div
          className="absolute left-[10%] top-[20%] w-8 h-8 border-2 border-[#595bc2]/20 rounded-full"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute right-[15%] top-[30%] w-6 h-6 bg-[#ff767a]/20 rounded-full"
          animate={{ y: [0, -12, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />
        
        {/* Enveloppes flottantes */}
        <motion.div
          className="absolute left-[25%] bottom-[30%] text-[#595bc2]/15"
          animate={{ rotate: [0, 10, 0], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        >
          <Mail size={18} />
        </motion.div>
        <motion.div
          className="absolute right-[30%] bottom-[20%] text-[#ff767a]/15"
          animate={{ rotate: [0, -8, 0], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        >
          <Mail size={16} />
        </motion.div>
        
        {/* Halo de communication en haut à droite */}
        <div className="absolute right-[-80px] top-[-60px] w-[180px] h-[180px] rounded-full bg-[#595bc2]/15 blur-3xl" />
        {/* Halo rose en bas à gauche */}
        <div className="absolute left-[-60px] bottom-[-40px] w-[150px] h-[150px] rounded-full bg-[#ff767a]/15 blur-2xl" />
      </div>
      
      {/* Annotations manuscrites */}
      <motion.span 
        className="absolute left-4 sm:left-8 top-4 sm:top-8 text-bleu text-lg sm:text-2xl font-[Caveat,cursive] rotate-[-8deg] pointer-events-none select-none"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        viewport={{ once: false }}
      >
        Contacte-moi !
      </motion.span>
      <motion.span 
        className="absolute right-6 sm:right-10 top-1/2 text-dark text-base sm:text-xl font-[Caveat,cursive] rotate-[10deg] pointer-events-none select-none"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        viewport={{ once: false }}
      >
        C'est gratuit
      </motion.span>
      <motion.span 
        className="absolute left-1/2 bottom-4 sm:bottom-8 -translate-x-1/2 text-bleu text-base sm:text-xl font-[Caveat,cursive] rotate-[-6deg] pointer-events-none select-none"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        viewport={{ once: false }}
      >
        Réponse rapide
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
            Contactez-<span className="text-bleu">moi</span>
          </motion.h2>
          <motion.p 
            className="text-sm sm:text-base md:text-xl text-dark/70 max-w-full sm:max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            viewport={{ once: false }}
          >
            Vous avez un projet en tête ? Une question ? N'hésitez pas à me contacter. Je serais ravi de discuter de vos idées et de voir comment nous pouvons travailler ensemble.
          </motion.p>
        </motion.div>
        <motion.div 
          className="grid lg:grid-cols-2 gap-6 sm:gap-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          viewport={{ once: false }}
        >
          {/* Contact Info & Socials */}
          <motion.div 
            className="space-y-4 sm:space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            viewport={{ once: false }}
          >
            <motion.div 
              className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-8 shadow-md"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              viewport={{ once: false }}
            >
              <h3 className="text-lg sm:text-2xl font-bold mb-4 sm:mb-6 text-bleu">Informations de contact</h3>
              <div className="space-y-3 sm:space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div 
                    key={info.title} 
                    className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 rounded-xl sm:rounded-2xl hover:bg-sand/60 transition-colors duration-200"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    viewport={{ once: false }}
                  >
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-bleu/10 rounded-lg sm:rounded-xl flex items-center justify-center">
                        <info.icon size={20} className="sm:w-6 sm:h-6 text-bleu" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-dark text-sm sm:text-base">{info.title}</h4>
                      <p className="text-dark/80 text-xs sm:text-sm">{info.value}</p>
                      <p className="text-dark/60 text-xs">{info.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            {/* Social Links */}
            <motion.div 
              className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-8 shadow-md"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              viewport={{ once: false }}
            >
              <h3 className="text-lg sm:text-2xl font-bold mb-4 sm:mb-6 text-bleu">Suivez-moi</h3>
              <div className="flex space-x-3 sm:space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 sm:p-4 bg-bleu/10 rounded-xl sm:rounded-2xl text-bleu hover:bg-bleu hover:text-white transition-all duration-200 shadow"
                    aria-label={social.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    viewport={{ once: false }}
                  >
                    <social.icon size={20} className="sm:w-6 sm:h-6" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            viewport={{ once: false }}
          >
            <motion.form 
              onSubmit={handleSubmit} 
              className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-8 shadow-md space-y-4 sm:space-y-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              viewport={{ once: false }}
            >
              <h3 className="text-lg sm:text-2xl font-bold mb-4 sm:mb-6 text-bleu">Envoyez-moi un message</h3>
              <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label htmlFor="name" className="block text-dark/80 mb-1 sm:mb-2 font-medium text-sm sm:text-base">Nom complet</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-sand/40 border border-sand rounded-lg sm:rounded-xl text-dark placeholder-dark/40 focus:outline-none focus:border-bleu transition-colors duration-200 text-sm sm:text-base"
                    placeholder="Votre nom"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-dark/80 mb-1 sm:mb-2 font-medium text-sm sm:text-base">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-sand/40 border border-sand rounded-lg sm:rounded-xl text-dark placeholder-dark/40 focus:outline-none focus:border-bleu transition-colors duration-200 text-sm sm:text-base"
                    placeholder="votre@email.com"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-dark/80 mb-1 sm:mb-2 font-medium text-sm sm:text-base">Sujet</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-sand/40 border border-sand rounded-lg sm:rounded-xl text-dark placeholder-dark/40 focus:outline-none focus:border-bleu transition-colors duration-200 text-sm sm:text-base"
                  placeholder="Sujet du message"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-dark/80 mb-1 sm:mb-2 font-medium text-sm sm:text-base">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-sand/40 border border-sand rounded-lg sm:rounded-xl text-dark placeholder-dark/40 focus:outline-none focus:border-bleu transition-colors duration-200 text-sm sm:text-base"
                  placeholder="Votre message..."
                  rows={4}
                  required
                />
              </div>
              <motion.button
                type="submit"
                className="w-full bg-bleu hover:bg-[#ff767a] text-white font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-full shadow transition-all duration-200 text-sm sm:text-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                viewport={{ once: false }}
              >
                Envoyer le message
              </motion.button>
            </motion.form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

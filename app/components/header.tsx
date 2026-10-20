'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/lib/language-context';
import { translations, t } from '@/lib/translations';
import { Menu, X, Globe, Instagram } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const WHATSAPP_URL = 'https://wa.me/message/6VEZEWR2PWGWI1';
const INSTAGRAM_URL = 'https://www.instagram.com/a.bit.more5';
const FACEBOOK_URL = 'https://www.facebook.com/share/1CYTU2HK1g/';

const navItems = ['home', 'proposals', 'corporate', 'about', 'gallery', 'contact'] as const;

export function Header() {
  const { lang, toggleLang } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMenuOpen(false);
    setTimeout(() => {
      if (id === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
      const el = document.getElementById(id);
      if (el) {
        const headerHeight = 96;
        const top = el.getBoundingClientRect().top + window.scrollY - headerHeight;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    }, 300);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 pt-[env(safe-area-inset-top)] ${
      scrolled ?
      'bg-white/95 backdrop-blur-md shadow-sm' :
      'bg-transparent'}`
      }>
      
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-24 sm:h-28" style={{ height: "79px" }}>
          {/* Logo */}
          <button onClick={() => scrollToSection('home')} className="relative w-44 h-[5.5rem] sm:w-56 sm:h-28 flex-shrink-0">
            <Image
              src="/images/logo.png"
              alt="A Bit More Logo"
              fill
              className="object-contain"
              priority />
            
          </button>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navItems?.map?.((key: string) =>
            <button
              key={key}
              onClick={() => scrollToSection(key)}
              className={`text-sm font-medium tracking-wide transition-colors duration-300 ${
              scrolled ? 'text-gray-700 hover:text-[#D4AF37]' : 'text-white/90 hover:text-white'}`
              }>
              
                {t((translations?.nav as any)?.[key], lang)}
              </button>
            ) ?? []}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-3">
            {/* Social icons - desktop */}
            <div className="hidden lg:flex items-center gap-2">
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className={`p-1.5 rounded-full transition-colors ${scrolled ? 'text-gray-600 hover:text-[#D4AF37]' : 'text-white/80 hover:text-white'}`}>
                <Instagram size={18} />
              </a>
              <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" className={`p-1.5 rounded-full transition-colors ${scrolled ? 'text-gray-600 hover:text-[#D4AF37]' : 'text-white/80 hover:text-white'}`}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
              </a>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className={`p-1.5 rounded-full transition-colors ${scrolled ? 'text-gray-600 hover:text-[#D4AF37]' : 'text-white/80 hover:text-white'}`}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
              </a>
            </div>

            {/* Language toggle */}
            <button
              onClick={toggleLang}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium tracking-wide border transition-all duration-300 ${
              scrolled ?
              'border-[#D4AF37]/30 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white' :
              'border-white/40 text-white hover:bg-white/20'}`
              }>
              
              <Globe size={14} />
              {lang === 'he' ? 'EN' : 'עב'}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`lg:hidden p-2 rounded-md transition-colors ${scrolled ? 'text-gray-700' : 'text-white'}`}>
              
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen &&
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="lg:hidden bg-white/98 backdrop-blur-md border-t border-gray-100">
          
            <div className="max-w-[1200px] mx-auto px-4 py-4 flex flex-col gap-1">
              {navItems?.map?.((key: string) =>
            <button
              key={key}
              onClick={() => scrollToSection(key)}
              className="text-left py-3 px-4 text-gray-700 hover:text-[#D4AF37] hover:bg-[#F7F3ED] rounded-md transition-colors text-sm font-medium">
              
                  {t((translations?.nav as any)?.[key], lang)}
                </button>
            ) ?? []}
              <div className="flex items-center gap-3 pt-3 px-4 border-t border-gray-100 mt-2">
                <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="p-2 text-gray-600 hover:text-[#D4AF37]"><Instagram size={20} /></a>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="p-2 text-gray-600 hover:text-[#D4AF37]">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
                </a>
              </div>
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </header>);

}
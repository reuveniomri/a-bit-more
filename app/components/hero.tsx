'use client';

import Image from 'next/image';
import { useLanguage } from '@/lib/language-context';
import { translations, t } from '@/lib/translations';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const WHATSAPP_URL = 'https://wa.me/message/6VEZEWR2PWGWI1';

export function Hero() {
  const { lang } = useLanguage();

  return (
    <section id="home" className="relative h-screen min-h-[600px] max-h-[1000px] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/event-01.jpg"
          alt="Luxury beach proposal setup at sunset in Thailand"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-[900px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          {/* Logo */}
          <div className="relative w-72 h-36 sm:w-[450px] sm:h-[225px] mx-auto mb-8">
            <Image
              src="/images/logo.png"
              alt="A Bit More"
              fill
              className="object-contain brightness-0 invert"
              priority
            />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-tight tracking-tight mb-6"
        >
          {t(translations?.hero?.title, lang)}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#D4AF37] text-white font-medium text-sm tracking-widest uppercase rounded-sm hover:bg-[#c5a030] transition-all duration-300 hover:shadow-lg hover:shadow-[#D4AF37]/20"
          >
            {t(translations?.hero?.cta, lang)}
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => document.getElementById('about')?.scrollIntoView?.({ behavior: 'smooth' })}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown size={28} />
        </motion.div>
      </motion.button>
    </section>
  );
}

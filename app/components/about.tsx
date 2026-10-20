'use client';

import Image from 'next/image';
import { useLanguage } from '@/lib/language-context';
import { translations, t } from '@/lib/translations';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Sparkles } from 'lucide-react';

export function About() {
  const { lang } = useLanguage();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="about" className="py-20 sm:py-28 bg-white overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: lang === 'he' ? 40 : -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative aspect-[4/5] rounded-sm overflow-hidden shadow-lg order-2 lg:order-1"
          >
            <Image
              src="/images/event-05.jpg"
              alt="Elegant event setup by A Bit More in Thailand"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: lang === 'he' ? -40 : 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <div className="flex items-center gap-2 mb-4">
              <Sparkles size={18} className="text-[#D4AF37]" />
              <span className="text-[#D4AF37] text-sm font-medium tracking-widest uppercase">
                {lang === 'he' ? 'מי אנחנו' : 'About Us'}
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-gray-900 leading-tight mb-6">
              {t(translations?.about?.title, lang)}
            </h2>
            <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
              {t(translations?.about?.text, lang)}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

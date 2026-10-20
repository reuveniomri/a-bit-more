'use client';

import Image from 'next/image';
import { useLanguage } from '@/lib/language-context';
import { translations, t } from '@/lib/translations';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Heart, Check, Sparkles } from 'lucide-react';

const WHATSAPP_URL = 'https://wa.me/message/6VEZEWR2PWGWI1';

export function Proposals() {
  const { lang } = useLanguage();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [stylesRef, stylesInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="proposals" className="py-20 sm:py-28 bg-[#F7F3ED] overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* Section header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-[700px] mx-auto mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Heart size={18} className="text-[#D4AF37]" />
            <span className="text-[#D4AF37] text-sm font-medium tracking-widest uppercase">
              {lang === 'he' ? 'הצעות נישואין' : 'Proposals'}
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-gray-900 leading-tight mb-4">
            {t(translations?.proposals?.title, lang)}
          </h2>
          <p className="font-serif text-xl sm:text-2xl text-[#D4AF37] italic mb-6">
            {t(translations?.proposals?.subtitle, lang)}
          </p>
          <p className="text-gray-600 leading-relaxed">
            {t(translations?.proposals?.description, lang)}
          </p>
        </motion.div>

        {/* What's included */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-[800px] mx-auto mb-20"
        >
          <h3 className="font-serif text-2xl sm:text-3xl text-gray-900 text-center mb-8">
            {t(translations?.proposals?.included, lang)}
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {translations?.proposals?.items?.map?.((item: any, i: number) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                className="flex items-start gap-3 p-4 bg-white/80 rounded-sm shadow-sm"
              >
                <Check size={18} className="text-[#D4AF37] mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 text-sm leading-relaxed">
                  {t(item, lang)}
                </span>
              </motion.div>
            )) ?? []}
          </div>
          <p className="text-center text-[#D4AF37] text-sm mt-6 italic">
            {t(translations?.proposals?.moreText, lang)}
          </p>
        </motion.div>

        {/* Design styles */}
        <motion.div ref={stylesRef}>
          <h3 className="font-serif text-2xl sm:text-3xl text-gray-900 text-center mb-10">
            {t(translations?.proposals?.stylesTitle, lang)}
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {translations?.proposals?.styles?.map?.((style: any, i: number) => {
              const info = style?.[lang] ?? style?.en ?? { name: '', desc: '' };
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={stylesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  className="group cursor-pointer"
                >
                  <div className="relative aspect-[3/4] rounded-sm overflow-hidden mb-4 shadow-md">
                    <Image
                      src={style?.image ?? '/images/event-01.jpg'}
                      alt={info?.name ?? 'Design style'}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <h4 className="font-serif text-xl text-gray-900 mb-1">
                    {info?.name ?? ''}
                  </h4>
                  <p className="text-gray-500 text-sm">
                    {info?.desc ?? ''}
                  </p>
                </motion.div>
              );
            }) ?? []}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={stylesInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-14"
        >
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#D4AF37] text-white font-medium text-sm tracking-widest uppercase rounded-sm hover:bg-[#c5a030] transition-all duration-300 hover:shadow-lg hover:shadow-[#D4AF37]/20"
          >
            <Sparkles size={16} />
            {t(translations?.proposals?.cta, lang)}
          </a>
        </motion.div>
      </div>
    </section>
  );
}

'use client';

import Image from 'next/image';
import { useLanguage } from '@/lib/language-context';
import { translations, t } from '@/lib/translations';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Building2, Palette, Settings } from 'lucide-react';

const WHATSAPP_URL = 'https://wa.me/message/6VEZEWR2PWGWI1';

const serviceIcons = [Palette, Settings];

export function Corporate() {
  const { lang } = useLanguage();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="corporate" className="py-20 sm:py-28 bg-white overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: lang === 'he' ? 40 : -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <Building2 size={18} className="text-[#D4AF37]" />
              <span className="text-[#D4AF37] text-sm font-medium tracking-widest uppercase">
                {lang === 'he' ? 'אירועים עסקיים' : 'Corporate'}
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-gray-900 leading-tight mb-4">
              {t(translations?.corporate?.title, lang)}
            </h2>
            <p className="font-serif text-xl text-[#D4AF37] italic mb-6">
              {t(translations?.corporate?.subtitle, lang)}
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              {t(translations?.corporate?.description, lang)}
            </p>

            {/* Services */}
            <div className="space-y-4 mb-8">
              {translations?.corporate?.services?.map?.((svc: any, i: number) => {
                const info = svc?.[lang] ?? svc?.en ?? { title: '', desc: '' };
                const Icon = serviceIcons?.[i] ?? Settings;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 15 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.15 }}
                    className="flex items-start gap-4 p-5 bg-[#F7F3ED] rounded-sm"
                  >
                    <Icon size={22} className="text-[#D4AF37] mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-serif text-lg text-gray-900 mb-1">{info?.title ?? ''}</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{info?.desc ?? ''}</p>
                    </div>
                  </motion.div>
                );
              }) ?? []}
            </div>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#D4AF37] text-white font-medium text-sm tracking-widest uppercase rounded-sm hover:bg-[#c5a030] transition-all duration-300 hover:shadow-lg hover:shadow-[#D4AF37]/20"
            >
              {t(translations?.corporate?.cta, lang)}
            </a>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: lang === 'he' ? -40 : 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative aspect-[4/5] rounded-sm overflow-hidden shadow-lg"
          >
            <Image
              src="/images/event-10.jpg"
              alt="Corporate event production by A Bit More in Thailand"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

'use client';

import { useLanguage } from '@/lib/language-context';
import { translations, t } from '@/lib/translations';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MessageCircle, Mail, Instagram } from 'lucide-react';

const WHATSAPP_URL = 'https://wa.me/message/6VEZEWR2PWGWI1';
const INSTAGRAM_URL = 'https://www.instagram.com/a.bit.more5';

export function Contact() {
  const { lang } = useLanguage();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="contact" className="py-20 sm:py-28 bg-white overflow-hidden">
      <div className="max-w-[700px] mx-auto px-4 sm:px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Mail size={18} className="text-[#D4AF37]" />
            <span className="text-[#D4AF37] text-sm font-medium tracking-widest uppercase">
              {lang === 'he' ? 'צור קשר' : 'Contact'}
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-gray-900 leading-tight mb-3">
            {t(translations?.contact?.title, lang)}
          </h2>
          <p className="text-gray-500 max-w-[600px] mx-auto">
            {t(translations?.contact?.subtitle, lang)}
          </p>
        </motion.div>

        {/* WhatsApp CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col items-center text-center p-10 bg-[#F7F3ED] rounded-sm"
        >
          <p className="text-gray-600 text-lg mb-6 font-serif">
            {lang === 'he'
              ? 'נשמח לשמוע מכם ולעזור לכם ליצור את הרגע המושלם'
              : 'We\'d love to hear from you and help create the perfect moment'
            }
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-4 bg-[#D4AF37] text-white font-medium text-sm tracking-widest uppercase rounded-sm hover:bg-[#c5a030] transition-all duration-300 hover:shadow-lg hover:shadow-[#D4AF37]/20 mb-8"
          >
            <MessageCircle size={20} />
            {t(translations?.contact?.whatsapp, lang)}
          </a>

          <div className="flex items-center gap-4 pt-6 border-t border-gray-200 w-full justify-center">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-500 hover:text-[#D4AF37] transition-colors text-sm"
            >
              <Instagram size={18} />
              @a.bit.more5
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

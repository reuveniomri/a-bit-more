'use client';

import { useState, useCallback } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/lib/language-context';
import { translations, t } from '@/lib/translations';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { X, ChevronLeft, ChevronRight, Camera } from 'lucide-react';

const galleryDescriptions = [
  'Beach sunset proposal with floral arrangement',
  'Romantic dinner setup on the shore',
  'Circle design proposal at golden hour',
  'Candlelit pathway to proposal spot',
  'Elegant Thai style event decor',
  'Champagne celebration on the beach',
  'Heart shaped floral arrangement sunset',
  'Fairy light decorated proposal archway',
  'Intimate beachfront dining experience',
  'Corporate gala event in Thailand',
  'Tropical garden proposal setup',
  'Marry Me illuminated sign on beach',
  'Luxury poolside event decoration',
  'Sunset cliff proposal arrangement',
  'White and gold floral cascade',
  'Private island celebration setup',
  'Romantic rose petal walkway',
  'Beachfront conference dinner event',
  'Lantern lit evening proposal',
  'Custom designed unique proposal',
  'Panoramic ocean view celebration',
  'Thai villa decorated for event',
  'Fireworks celebration on beach',
  'Waterfront natural flower design',
  'Crystal clear water proposal spot',
  'Mountain view event production',
  'Seaside cocktail reception setup',
  'Heart design with candles at dusk',
  'Romantic hilltop dining experience',
  'Floral arch on sandy beach',
  'Starlit dinner under palm trees',
  'Grand finale celebration moment',
];

const allImages = Array.from({ length: 32 }, (_, i) => ({
  src: `/images/event-${String(i + 1).padStart(2, '0')}.jpg`,
  alt: `Gallery: ${galleryDescriptions?.[i] ?? `Event photo ${i + 1}`}`,
}));

export function Gallery() {
  const { lang } = useLanguage();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);

  const visibleImages = showAll ? allImages : allImages?.slice?.(0, 12) ?? [];

  const openLightbox = useCallback((index: number) => setLightboxIndex(index), []);
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const prev = useCallback(() => setLightboxIndex((p: number | null) => (p !== null && p > 0 ? p - 1 : (allImages?.length ?? 1) - 1)), []);
  const next = useCallback(() => setLightboxIndex((p: number | null) => (p !== null && p < (allImages?.length ?? 1) - 1 ? p + 1 : 0)), []);

  return (
    <section id="gallery" className="py-20 sm:py-28 bg-[#F7F3ED] overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Camera size={18} className="text-[#D4AF37]" />
            <span className="text-[#D4AF37] text-sm font-medium tracking-widest uppercase">
              {lang === 'he' ? 'גלריה' : 'Gallery'}
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-gray-900 leading-tight mb-3">
            {t(translations?.gallery?.title, lang)}
          </h2>
          <p className="text-gray-500">
            {t(translations?.gallery?.subtitle, lang)}
          </p>
        </motion.div>

        {/* Gallery grid - masonry style */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-3 sm:gap-4">
          {visibleImages?.map?.((img: any, i: number) => (
            <motion.div
              key={img?.src ?? i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: Math.min(i * 0.05, 0.6) }}
              className="mb-3 sm:mb-4 break-inside-avoid group cursor-pointer"
              onClick={() => openLightbox(showAll ? i : i)}
            >
              <div className="relative overflow-hidden rounded-sm shadow-sm">
                <div className={`relative ${
                  i % 5 === 0 ? 'aspect-[3/4]' :
                  i % 5 === 1 ? 'aspect-square' :
                  i % 5 === 2 ? 'aspect-[4/5]' :
                  i % 5 === 3 ? 'aspect-[3/4]' :
                  'aspect-[4/3]'
                }`}>
                  <Image
                    src={img?.src ?? '/images/event-01.jpg'}
                    alt={img?.alt ?? 'Event photo'}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
              </div>
            </motion.div>
          )) ?? []}
        </div>

        {/* Show more / less */}
        {(allImages?.length ?? 0) > 12 && (
          <div className="text-center mt-10">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-8 py-3 border border-[#D4AF37] text-[#D4AF37] font-medium text-sm tracking-widest uppercase rounded-sm hover:bg-[#D4AF37] hover:text-white transition-all duration-300"
            >
              {showAll
                ? (lang === 'he' ? 'הצג פחות' : 'Show Less')
                : (lang === 'he' ? 'הצג את כל הגלריה' : 'View Full Gallery')
              }
            </button>
          </div>
        )}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
            onClick={closeLightbox}
          >
            <button
              onClick={(e: React.MouseEvent) => { e?.stopPropagation?.(); closeLightbox(); }}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white/70 hover:text-white z-10 p-2"
            >
              <X size={28} />
            </button>
            <button
              onClick={(e: React.MouseEvent) => { e?.stopPropagation?.(); prev(); }}
              className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 text-white/70 hover:text-white z-10 p-2"
            >
              <ChevronLeft size={36} />
            </button>
            <button
              onClick={(e: React.MouseEvent) => { e?.stopPropagation?.(); next(); }}
              className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 text-white/70 hover:text-white z-10 p-2"
            >
              <ChevronRight size={36} />
            </button>
            <div className="relative w-[90vw] h-[80vh] max-w-[1200px]">
              <Image
                src={allImages?.[lightboxIndex]?.src ?? '/images/event-01.jpg'}
                alt={allImages?.[lightboxIndex]?.alt ?? 'Event photo'}
                fill
                className="object-contain"
                sizes="90vw"
                quality={95}
              />
            </div>
            <div className="absolute bottom-4 text-white/50 text-sm">
              {(lightboxIndex ?? 0) + 1} / {allImages?.length ?? 0}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

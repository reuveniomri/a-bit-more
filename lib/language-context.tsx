'use client';

import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
import type { Language } from './translations';

interface LanguageContextType {
  lang: Language;
  toggleLang: () => void;
  dir: 'rtl' | 'ltr';
}

const LanguageContext = createContext<LanguageContextType>({
  lang: 'he',
  toggleLang: () => {},
  dir: 'rtl',
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>('he');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = typeof window !== 'undefined' ? localStorage?.getItem?.('abm-lang') : null;
    if (saved === 'en' || saved === 'he') {
      setLang(saved);
    }
  }, []);

  useEffect(() => {
    if (mounted) {
      document.documentElement.setAttribute('dir', lang === 'he' ? 'rtl' : 'ltr');
      document.documentElement.setAttribute('lang', lang);
      localStorage?.setItem?.('abm-lang', lang);
    }
  }, [lang, mounted]);

  const toggleLang = useCallback(() => {
    setLang((prev: Language) => (prev === 'he' ? 'en' : 'he'));
  }, []);

  const dir = lang === 'he' ? 'rtl' : 'ltr';

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, dir }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}

'use client';

import { LanguageProvider } from '@/lib/language-context';
import { Header } from './header';
import { Hero } from './hero';
import { About } from './about';
import { Proposals } from './proposals';
import { Corporate } from './corporate';
import { Gallery } from './gallery';
import { Contact } from './contact';
import { Footer } from './footer';
import { WhatsAppFab } from './whatsapp-fab';

export function LandingPage() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white overflow-x-hidden w-full">
        <Header />
        <main>
          <Hero />
          <About />
          <Proposals />
          <Corporate />
          <Gallery />
          <Contact />
        </main>
        <Footer />
      </div>
      <WhatsAppFab />
    </LanguageProvider>
  );
}

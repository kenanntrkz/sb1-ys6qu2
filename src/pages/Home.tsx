import React, { useEffect } from 'react';
import { Instagram, Phone, Mail } from 'lucide-react';
import { SocialLink } from '../components/SocialLink';
import { PageTransition } from '../components/PageTransition';

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <PageTransition>
      <header className="min-h-screen flex flex-col justify-center items-center relative px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072')] bg-cover bg-center opacity-10 scale-105 hover:scale-100 transition-transform duration-1000"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/80 to-white"></div>
        
        <div className="container mx-auto max-w-4xl z-10 text-center">
          <div className="space-y-6 fade-in">
            <div className="relative inline-block">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-6 animate-gradient split-text text-black">
                <div className="flex flex-wrap justify-center gap-x-4">
                  <div className="flex">
                    <span className="inline-block hover:scale-110 transition-transform cursor-default" style={{ animationDelay: '0.1s' }}>K</span>
                    <span className="inline-block hover:scale-110 transition-transform cursor-default" style={{ animationDelay: '0.2s' }}>e</span>
                    <span className="inline-block hover:scale-110 transition-transform cursor-default" style={{ animationDelay: '0.3s' }}>n</span>
                    <span className="inline-block hover:scale-110 transition-transform cursor-default" style={{ animationDelay: '0.4s' }}>a</span>
                    <span className="inline-block hover:scale-110 transition-transform cursor-default" style={{ animationDelay: '0.5s' }}>n</span>
                  </div>
                  <div className="flex">
                    <span className="inline-block hover:scale-110 transition-transform cursor-default" style={{ animationDelay: '0.7s' }}>T</span>
                    <span className="inline-block hover:scale-110 transition-transform cursor-default" style={{ animationDelay: '0.8s' }}>Ü</span>
                    <span className="inline-block hover:scale-110 transition-transform cursor-default" style={{ animationDelay: '0.9s' }}>R</span>
                    <span className="inline-block hover:scale-110 transition-transform cursor-default" style={{ animationDelay: '1.0s' }}>K</span>
                    <span className="inline-block hover:scale-110 transition-transform cursor-default" style={{ animationDelay: '1.1s' }}>Ö</span>
                    <span className="inline-block hover:scale-110 transition-transform cursor-default" style={{ animationDelay: '1.2s' }}>Z</span>
                  </div>
                </div>
              </h1>
              <div className="absolute -inset-4 bg-gradient-to-r from-black/5 to-black/5 blur-3xl -z-10"></div>
            </div>
            <p className="text-lg sm:text-xl md:text-2xl text-black/80 mb-8 font-light tracking-wide">
              Web Tasarımcı, Yazılımcı & SolidWorks Uzmanı
            </p>
            <div className="flex gap-4 sm:gap-6 justify-center mb-12">
              <SocialLink href="https://instagram.com/kenanntrkz" icon={Instagram} label="Instagram" />
              <SocialLink href="https://wa.me/905309490193" icon={Phone} label="WhatsApp" />
              <SocialLink href="mailto:kenantrkz@hotmail.com" icon={Mail} label="Email" />
            </div>
          </div>
        </div>
      </header>
    </PageTransition>
  );
}
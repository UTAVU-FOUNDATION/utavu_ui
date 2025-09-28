import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play } from 'lucide-react';

const Hero: React.FC = () => {
  const purpleBlobRef = useRef<HTMLDivElement | null>(null);
  const greenBlobRef = useRef<HTMLDivElement | null>(null);
  const pulseCoreRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let rafId: number;
    const animate = () => {
      const scrollY = window.scrollY || 0;
      if (purpleBlobRef.current) {
        const f = scrollY * 0.08;
        purpleBlobRef.current.style.transform = `translate3d(${f * 0.4}px, ${f * -0.25}px,0)`;
      }
      if (greenBlobRef.current) {
        const f = scrollY * 0.08;
        greenBlobRef.current.style.transform = `translate3d(${f * -0.35}px, ${f * 0.3}px,0)`;
      }
      if (pulseCoreRef.current) {
        const t = Date.now() * 0.0015;
        const scale = 1 + Math.sin(t) * 0.04;
        const glow = 6 + (Math.sin(t * 2) + 1) * 6;
        pulseCoreRef.current.style.transform = `scale(${scale})`;
        pulseCoreRef.current.style.boxShadow = `0 0 ${glow}px rgba(138,43,226,0.45), 0 0 ${glow * 1.3}px rgba(50,205,50,0.35)`;
        pulseCoreRef.current.style.filter = `brightness(${1 + Math.sin(t*1.5)*0.08})`;
      }
      rafId = requestAnimationFrame(animate);
    };
    rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, []);
  const trustedLogos = [
    'University of Nairobi',
    'USAID',
    'World Bank',
    'Gates Foundation',
    'African Development Bank',
    'Google.org'
  ];

  return (
  <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-28">
      {/* Enhanced Layered Background */}
      <div className="hero-background-wrapper">
        <div className="hero-gradient-layer" />
        <div className="hero-soft-glow" />
        <div className="hero-noise-layer" />
        <div className="hero-overlay" />
      </div>

      {/* Decorative SVG Shapes */}
      <div className="absolute inset-0 z-[3]" style={{ pointerEvents: 'none' }}>
        {/* Purple blob */}
  <div ref={purpleBlobRef} className="absolute top-20 right-5 lg:right-10 w-48 lg:w-64 h-48 lg:h-64 opacity-15 lg:opacity-20 decorative-blob will-change-transform">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <path fill="url(#purpleGradient)" d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,88.5,-0.9C87,14.5,81.4,29,72.8,40.8C64.2,52.6,52.6,61.7,39.4,67.5C26.2,73.3,11.4,75.8,-2.9,80.2C-17.2,84.6,-34.4,90.9,-48.8,86.4C-63.2,81.9,-74.8,66.6,-81.9,49.8C-89,33,-91.6,14.7,-89.7,-2.8C-87.8,-20.3,-81.4,-37,-71.6,-50.8C-61.8,-64.6,-48.6,-75.5,-34.1,-82.4C-19.6,-89.3,-3.8,-92.2,10.4,-87.1C24.6,-82,36.2,-68.9,44.7,-76.4Z" transform="translate(100 100)" />
            <defs>
              <linearGradient id="purpleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="var(--utavu-purple)" />
                <stop offset="100%" stopColor="var(--utavu-purple-light)" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        
        {/* Green blob */}
  <div ref={greenBlobRef} className="absolute bottom-20 left-5 lg:left-10 w-32 lg:w-48 h-32 lg:h-48 opacity-10 lg:opacity-15 decorative-blob will-change-transform">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <path fill="url(#greenGradient)" d="M39.8,-67.7C50.1,-59.4,56.4,-45.2,62.8,-31.1C69.2,-17,75.7,-3,76.8,11.8C77.9,26.6,73.6,42.2,64.9,54.4C56.2,66.6,43.1,75.4,28.7,79.9C14.3,84.4,-1.4,84.6,-16.8,80.2C-32.2,75.8,-47.3,66.8,-58.2,53.4C-69.1,40,-75.8,22.2,-77.2,3.8C-78.6,-14.6,-74.7,-33.6,-66.2,-49.2C-57.7,-64.8,-44.6,-77,-29.4,-84.7C-14.2,-92.4,3.1,-95.6,18.9,-90.8C34.7,-86,49,-73.2,39.8,-67.7Z" transform="translate(100 100)" />
            <defs>
              <linearGradient id="greenGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="var(--utavu-green)" />
                <stop offset="100%" stopColor="var(--utavu-green-light)" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      <div className="container-custom hero-content-elevated">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center relative">
          {/* Left Column - Content */}
          <div className="space-y-9 hero-fade-in">
            <div className="space-y-7">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight hero-blur-pop">
                Utavu Foundation
                <span className="block">
                  <span className="highlight-green">Research</span> & 
                  <span className="highlight-purple"> Innovation</span>
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 leading-relaxed max-w-xl hero-fade-in-delayed">
                Supporting research, prototyping and social innovation that solves local problems at scale.
              </p>
              
              <p className="text-base sm:text-lg text-gray-600 italic hero-fade-in-delayed" style={{animationDelay:'180ms'}}>
                Utavu: enabling ideas to grow
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-5 hero-fade-in" style={{animationDelay:'260ms'}}>
              <Link
                to="/contact"
                className="btn-primary flex items-center justify-center gap-2 group shadow-lg !bg-gradient-to-r !from-utavu-purple !to-utavu-green focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-utavuPurple/30"
              >
                <span className="relative z-10">Partner with Us</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                to="/focus-areas"
                className="btn-secondary flex items-center justify-center gap-2 group bg-white/70 backdrop-blur border border-utavuPurple/40 text-utavuPurple hover:text-white hover:border-transparent focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-utavuGreen/30"
              >
                <span className="relative z-10">Explore Focus Areas</span>
                <Play className="w-4 h-4" />
              </Link>
            </div>

            {/* Trusted Partners */}
            <div className="pt-10 hero-fade-in" style={{animationDelay:'340ms'}}>
              <p className="text-sm text-gray-500 mb-4 font-medium">Trusted by leading organizations</p>
              <div className="flex flex-wrap items-center gap-6 opacity-60">
                {trustedLogos.map((logo, index) => (
                  <div 
                    key={index}
                    className="text-sm font-medium text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
                  >
                    {logo}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative hero-fade-in-delayed" style={{animationDelay:'220ms'}}>
            <div className="bg-white/70 backdrop-blur-sm rounded-xl shadow-subtle p-8 lg:p-6 lg:pr-5 lg:pl-5 lg:py-5 transition-all duration-300 border border-white/30 lg:scale-[0.92] lg:max-w-sm">
              <div className="aspect-square relative bg-gradient-to-br from-utavuGreen/20 via-white/30 to-utavuPurple/20 rounded-lg flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 animate-gradientShift-subtle opacity-40" />
                <div className="text-center space-y-4 lg:space-y-3">
                  <div className="w-24 h-24 lg:w-20 lg:h-20 bg-gradient-to-br from-utavuGreen to-utavuPurple rounded-full flex items-center justify-center mx-auto relative">
                    <div ref={pulseCoreRef} className="w-12 h-12 lg:w-10 lg:h-10 bg-white rounded-full flex items-center justify-center" style={{transition:'all .6s ease'}}>
                      <div className="w-6 h-6 lg:w-5 lg:h-5 bg-gradient-to-br from-utavuGreen to-utavuPurple rounded-full shadow-lg"></div>
                    </div>
                  </div>
                  <div className="space-y-2 lg:space-y-1">
                    <h3 className="text-lg lg:text-base font-semibold text-gray-900">Innovation Hub</h3>
                    <p className="text-gray-600 text-sm lg:text-xs">Where ideas transform into solutions</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements (subtle) */}
            <div className="absolute -top-4 -right-4 w-14 h-14 lg:w-12 lg:h-12 bg-utavuPurple/90 rounded-full flex items-center justify-center shadow-md animate-float-subtle">
              <div className="w-7 h-7 lg:w-6 lg:h-6 bg-white rounded-full"></div>
            </div>

            <div className="absolute -bottom-4 -left-4 w-10 h-10 lg:w-9 lg:h-9 bg-utavuGreen/90 rounded-full shadow-md animate-float-subtle" />
          </div>
        </div>
      </div>

      {/* Multi-wave Curvy Divider (seamless) */}
      <div className="absolute bottom-0 left-0 right-0 z-[4] pointer-events-none">
        <svg viewBox="0 0 1440 260" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-40 lg:h-48 block">
          <defs>
            <linearGradient id="dividerGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(138,43,226,0.18)" />
              <stop offset="50%" stopColor="rgba(50,205,50,0.18)" />
              <stop offset="100%" stopColor="rgba(138,43,226,0.18)" />
            </linearGradient>
          </defs>
          <path d="M0 120 C 180 60 360 60 540 120 C 720 180 900 180 1080 120 C 1200 80 1320 80 1440 120 L1440 260 L0 260 Z" fill="url(#dividerGradient)" opacity="0.55" />
          <path d="M0 150 C 200 90 400 90 600 150 C 800 210 1000 210 1200 150 C 1320 115 1380 125 1440 150 L1440 260 L0 260 Z" fill="url(#dividerGradient)" opacity="0.35" />
            <path d="M0 180 C 220 130 440 130 660 180 C 880 230 1100 230 1320 180 C 1380 165 1410 170 1440 180 L1440 260 L0 260 Z" fill="url(#dividerGradient)" opacity="0.25" />
        </svg>
        {/* White fade to blend into next section background */}
        <div className="absolute bottom-0 left-0 right-0 h-10 pointer-events-none bg-gradient-to-b from-white/0 to-white" />
      </div>
    </section>
  );
};

export default Hero;

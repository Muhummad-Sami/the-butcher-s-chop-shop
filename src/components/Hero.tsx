import React from 'react';
import { ArrowUpRight, ChevronDown, Star, MapPin, Scissors } from 'lucide-react';
import { BUSINESS_INFO, IMAGES } from '../data/barberData';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-[#0B0B0C] overflow-hidden border-b border-[#1E1E22]">
      {/* Background Image with Dark Scrim & Lighting */}
      <div className="absolute inset-0 z-0">
        <img
          src={IMAGES.hero}
          alt="Master barber performing sharp precision cut at The Butcher's Chop Shop Manchester"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center filter brightness-[0.42] contrast-[1.12]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0C] via-[#0B0B0C]/60 to-transparent" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#0B0B0C]/40 to-[#0B0B0C]/90" />
      </div>

      {/* Decorative vertical guide line */}
      <div className="hidden lg:block absolute left-12 top-0 bottom-0 w-px bg-[#26262B]/50" />
      <div className="hidden lg:block absolute right-12 top-0 bottom-0 w-px bg-[#26262B]/50" />

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center flex flex-col items-center">
        {/* Subtle Brand Kicker */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#18181B]/80 border border-[#2E2E33] text-xs text-[#C9A96E] mb-6 backdrop-blur-sm">
          <Scissors className="w-3.5 h-3.5" />
          <span className="tracking-widest uppercase font-semibold text-[11px]">Manchester City Centre</span>
          <span className="text-[#3F3F46]">·</span>
          <span className="text-[#D4D4D8]">8 St Ann's Square</span>
        </div>

        {/* Primary Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-white tracking-tight uppercase leading-[0.95] max-w-4xl text-balance font-display">
          Sharp Cuts. <br />
          <span className="text-[#EDE8DF] font-light italic">Manchester Style.</span>
        </h1>

        {/* Subheading */}
        <p className="mt-6 text-lg sm:text-xl text-[#A1A1AA] max-w-2xl text-balance font-normal leading-relaxed">
          {BUSINESS_INFO.subheading}
        </p>

        {/* Call to Actions */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <a
            href={BUSINESS_INFO.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-xs sm:text-sm uppercase tracking-widest font-semibold text-[#0B0B0C] bg-[#C9A96E] hover:bg-[#D8BD87] rounded transition-all transform hover:-translate-y-0.5 shadow-lg shadow-[#C9A96E]/10"
          >
            <span>Book an Appointment</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>

          <a
            href="#services"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-xs sm:text-sm uppercase tracking-widest font-semibold text-[#EDE8DF] bg-[#17171A] hover:bg-[#202024] border border-[#2D2D33] hover:border-[#3E3E48] rounded transition-all"
          >
            <span>Explore Services</span>
          </a>
        </div>

        {/* Trust Markers Bar */}
        <div className="mt-14 pt-8 border-t border-[#222226]/80 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-[#A1A1AA]">
          <div className="flex items-center gap-2">
            <div className="flex text-[#C9A96E]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#C9A96E]" />
              ))}
            </div>
            <span className="font-semibold text-white font-mono tabular-nums">{BUSINESS_INFO.googleRating} ★</span>
            <span className="text-[#52525B]">·</span>
            <span>{BUSINESS_INFO.reviewCount} Google Reviews</span>
          </div>

          <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-[#C9A96E]" />
            <span>St Ann's Square, Manchester</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[#D4D4D8]">Live Booking via Slick</span>
          </div>
        </div>
      </div>

      {/* Down Scroll Indicator */}
      <a
        href="#about"
        aria-label="Scroll to About section"
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 text-[#71717A] hover:text-[#C9A96E] transition-colors p-2"
      >
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </a>
    </section>
  );
};

import React from 'react';
import { MapPin, Scissors, Sparkles, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { BUSINESS_INFO, IMAGES } from '../data/barberData';

export const About: React.FC = () => {
  const coreValues = [
    {
      title: 'Experienced Barbers',
      description: 'A dedicated team skilled in classic British grooming and contemporary street styling.',
    },
    {
      title: 'Attention to Detail',
      description: 'Meticulous consultation, zero-rush execution, sharp lineups, and crisp fade gradients.',
    },
    {
      title: 'Modern Barbering',
      description: 'Combining traditional razor techniques with modern texturing, foil fades, and grooming care.',
    },
    {
      title: 'Premium Customer Experience',
      description: 'A relaxed, welcoming shop atmosphere focused on client comfort, craft, and consistency.',
    },
  ];

  return (
    <section id="about" className="py-24 bg-[#0E0E10] border-b border-[#1E1E22] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Composition */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-lg overflow-hidden border border-[#27272A] aspect-[4/3] sm:aspect-square bg-[#141416]">
              <img
                src={IMAGES.interior}
                alt="The Butcher's Chop Shop interior stations and styling chairs in Manchester"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover filter brightness-[0.88] contrast-[1.08] hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0C] via-transparent to-transparent opacity-80" />
              
              {/* Overlay Location Stamp */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded bg-[#111114]/90 border border-[#2E2E33] backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded bg-[#C9A96E]/10 border border-[#C9A96E]/30 flex items-center justify-center text-[#C9A96E] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-[#A1A1AA]">City-Centre Location</p>
                    <p className="text-sm font-semibold text-white">8 St Ann's Square, Manchester</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Subtle decorative accent card */}
            <div className="hidden sm:block absolute -top-4 -right-4 w-28 h-28 border-r border-t border-[#C9A96E]/30 pointer-events-none" />
          </div>

          {/* Right Column: Editorial Copy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#C9A96E] font-semibold">
              <Scissors className="w-3.5 h-3.5" />
              <span>About The Chop Shop</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight uppercase leading-tight font-display text-balance">
              Precision Barbering in the Heart of Manchester
            </h2>

            <p className="text-base sm:text-lg text-[#A1A1AA] leading-relaxed">
              Located at 8 St Ann's Square, The Butcher's Chop Shop is a professional Manchester barber shop built on high standards of grooming, sharp craftsmanship, and an unpretentious, welcoming vibe.
            </p>

            <p className="text-sm sm:text-base text-[#8E8E93] leading-relaxed">
              Whether you need a skin fade, an executive classic haircut, or precision beard sculpting, our barbers take the time to consult, tailor, and execute each cut to perfection. Every seat in the shop is dedicated to quality craftsmanship and attentive service.
            </p>

            {/* Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {coreValues.map((val) => (
                <div key={val.title} className="p-4 rounded bg-[#141417] border border-[#242428] hover:border-[#333338] transition-colors">
                  <div className="flex items-center gap-2 mb-1.5 text-white font-medium text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#C9A96E] shrink-0" />
                    <span>{val.title}</span>
                  </div>
                  <p className="text-xs text-[#A1A1AA] leading-relaxed">{val.description}</p>
                </div>
              ))}
            </div>

            {/* Action Link */}
            <div className="pt-2 flex items-center gap-4">
              <a
                href={BUSINESS_INFO.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#C9A96E] hover:text-[#DFCA98] transition-colors"
              >
                <span>Check live chair availability</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

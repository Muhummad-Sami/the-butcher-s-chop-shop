import React from 'react';
import { MapPin, Navigation, Compass, Phone, ArrowUpRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/barberData';

export const Location: React.FC = () => {
  return (
    <section id="location" className="py-24 bg-[#0E0E10] border-b border-[#1E1E22] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#C9A96E] font-semibold mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>Finding The Shop</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight uppercase font-display">
            Location & Directions
          </h2>
          <p className="mt-2 text-[#A1A1AA] text-sm sm:text-base">
            Conveniently situated in historic St Ann's Square in central Manchester, steps away from King Street, Deansgate, and Exchange Square.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Exact Address & Info Card */}
          <div className="lg:col-span-5 bg-[#141418] border border-[#27272F] rounded-lg p-8 sm:p-10 flex flex-col justify-between">
            <div className="space-y-6">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#C9A96E]">
                  Official Address
                </span>
                <h3 className="text-2xl font-bold text-white uppercase font-display mt-1">
                  {BUSINESS_INFO.name}
                </h3>
              </div>

              {/* Exact address lines as requested */}
              <div className="space-y-1.5 text-base sm:text-lg text-[#E4E4E7] font-medium border-l-2 border-[#C9A96E] pl-4 py-1">
                <p>8 St Ann's Square</p>
                <p>Manchester M2 7EA</p>
                <p className="text-[#A1A1AA]">United Kingdom</p>
              </div>

              {/* Contact Reference */}
              <div className="pt-4 border-t border-[#23232A] space-y-2">
                <p className="text-xs uppercase tracking-wider text-[#71717A]">Direct Phone Line</p>
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="inline-flex items-center gap-2 text-white hover:text-[#C9A96E] transition-colors font-mono text-base font-semibold"
                >
                  <Phone className="w-4 h-4 text-[#C9A96E]" />
                  <span>{BUSINESS_INFO.phone}</span>
                </a>
              </div>

              {/* Transit & Area Info */}
              <div className="p-4 rounded bg-[#1A1A20] border border-[#26262F] text-xs text-[#A1A1AA] space-y-1">
                <p className="font-semibold text-white">Central Manchester Access</p>
                <p>Near St Ann's Church, walking distance from St Peter's Square & Victoria Metrolink stations.</p>
              </div>
            </div>

            {/* Get Directions CTA */}
            <div className="mt-8 pt-6 border-t border-[#23232A]">
              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs sm:text-sm uppercase tracking-widest font-semibold text-[#0B0B0C] bg-[#C9A96E] hover:bg-[#D8BD87] rounded transition-all shadow-md"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Directions</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Interactive Map Visual Placeholder */}
          <div className="lg:col-span-7 bg-[#121215] border border-[#24242B] rounded-lg overflow-hidden relative min-h-[380px] flex flex-col items-center justify-center group">
            {/* Styled Dark Street Grid Graphic */}
            <div className="absolute inset-0 bg-[#111114] opacity-90">
              <svg className="w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="street-grid" width="80" height="80" patternUnits="userSpaceOnUse">
                    <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#666" strokeWidth="1" />
                    <line x1="0" y1="40" x2="80" y2="40" stroke="#444" strokeWidth="0.5" strokeDasharray="4 4" />
                    <line x1="40" y1="0" x2="40" y2="80" stroke="#444" strokeWidth="0.5" strokeDasharray="4 4" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#street-grid)" />
              </svg>
              
              {/* Street Arteries styling for Manchester */}
              <div className="absolute top-1/3 left-0 right-0 h-3 bg-[#202026] -rotate-6 transform" />
              <div className="absolute top-0 bottom-0 left-1/2 w-4 bg-[#23232A] rotate-12 transform" />
              <div className="absolute bottom-1/4 left-0 right-0 h-4 bg-[#1E1E24] rotate-3 transform" />
            </div>

            {/* Radial glow */}
            <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#0B0B0C]/40 to-[#0B0B0C]" />

            {/* Map Pin Marker */}
            <div className="relative z-10 flex flex-col items-center text-center p-6 max-w-sm">
              <div className="relative mb-3">
                <div className="w-12 h-12 rounded-full bg-[#C9A96E]/20 border border-[#C9A96E] flex items-center justify-center text-[#C9A96E] animate-bounce">
                  <MapPin className="w-6 h-6 fill-[#C9A96E] text-[#0B0B0C]" />
                </div>
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-2 bg-black/60 rounded-full blur-xs" />
              </div>

              <div className="p-3.5 rounded-lg bg-[#18181D]/95 border border-[#33333C] backdrop-blur-md shadow-xl">
                <p className="text-xs uppercase tracking-wider font-semibold text-[#C9A96E]">
                  St Ann's Square Pinpoint
                </p>
                <p className="text-sm font-bold text-white mt-0.5">
                  8 St Ann's Square, Manchester
                </p>
                <p className="text-[11px] text-[#A1A1AA] mt-1">
                  M2 7EA · Central Retail & Dining Quarter
                </p>
              </div>

              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1.5 text-xs text-[#C9A96E] hover:text-[#E2CE9F] font-semibold bg-[#111114]/90 px-3 py-1.5 rounded border border-[#2D2D35] hover:border-[#C9A96E] transition-colors"
              >
                <span>Open in Google Maps</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Corner Badge */}
            <div className="absolute bottom-3 right-3 text-[10px] text-[#71717A] bg-[#0E0E11]/80 px-2 py-1 rounded border border-[#222228] font-mono">
              53.4820° N, 2.2461° W
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

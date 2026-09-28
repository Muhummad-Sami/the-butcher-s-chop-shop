import React, { useState } from 'react';
import { ArrowUpRight, Clock, Scissors, CalendarCheck } from 'lucide-react';
import { SERVICES, BUSINESS_INFO } from '../data/barberData';

export const Services: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'cuts' | 'beards' | 'combos' | 'styling'>('all');

  const filteredServices = activeFilter === 'all'
    ? SERVICES
    : SERVICES.filter((s) => s.category === activeFilter);

  const filterTabs = [
    { id: 'all', label: 'All Services' },
    { id: 'cuts', label: 'Haircuts & Fades' },
    { id: 'beards', label: 'Beard Grooming' },
    { id: 'combos', label: 'Combos' },
    { id: 'styling', label: 'Styling' },
  ] as const;

  return (
    <section id="services" className="py-24 bg-[#0B0B0C] border-b border-[#1E1E22] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#C9A96E] font-semibold mb-3">
              <Scissors className="w-3.5 h-3.5" />
              <span>Menu of Craft</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight uppercase font-display">
              Services & Grooming
            </h2>
            <p className="mt-2 text-[#A1A1AA] text-sm sm:text-base max-w-xl">
              From signature skin fades to hot towel beard grooming. Book in advance through our online schedule to secure your slot.
            </p>
          </div>

          {/* Interactive filter tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-[#141416] border border-[#26262B] rounded-lg overflow-x-auto max-w-full">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded transition-colors whitespace-nowrap ${
                  activeFilter === tab.id
                    ? 'bg-[#C9A96E] text-[#0B0B0C] font-semibold shadow-sm'
                    : 'text-[#A1A1AA] hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service, index) => (
            <div
              key={service.id}
              className="group bg-[#121215] border border-[#222227] hover:border-[#3A3A42] rounded-lg overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1"
            >
              {/* Service Visual Thumbnail */}
              <div className="relative aspect-[16/9] overflow-hidden bg-[#18181C]">
                <img
                  src={service.image}
                  alt={service.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover filter brightness-[0.75] contrast-[1.05] group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121215] via-transparent to-transparent" />
                
                {/* Duration indicator */}
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded bg-[#0B0B0C]/80 border border-[#27272A] text-[11px] font-mono text-[#D4D4D8] flex items-center gap-1 backdrop-blur-sm">
                  <Clock className="w-3 h-3 text-[#C9A96E]" />
                  <span>{service.duration}</span>
                </div>
              </div>

              {/* Service Info */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <h3 className="text-xl font-bold text-white tracking-wide uppercase font-display group-hover:text-[#C9A96E] transition-colors">
                      {service.name}
                    </h3>
                    <span className="text-xs font-mono text-[#71717A] shrink-0">
                      0{index + 1}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Price & Action Row */}
                <div className="pt-4 border-t border-[#222227] flex items-center justify-between gap-4">
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-[#71717A] block">Pricing & Slots</span>
                    <span className="text-xs font-medium text-[#C9A96E]">
                      {service.priceNote}
                    </span>
                  </div>

                  <a
                    href={BUSINESS_INFO.bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs uppercase tracking-wider font-semibold text-white bg-[#1F1F24] hover:bg-[#C9A96E] hover:text-[#0B0B0C] border border-[#2E2E35] rounded transition-all"
                  >
                    <span>Book</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Booking Note Box */}
        <div className="mt-12 p-6 rounded-lg bg-[#141418] border border-[#26262D] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start sm:items-center gap-3">
            <div className="w-9 h-9 rounded bg-[#C9A96E]/10 border border-[#C9A96E]/20 flex items-center justify-center text-[#C9A96E] shrink-0 mt-0.5 sm:mt-0">
              <CalendarCheck className="w-4 h-4" />
            </div>
            <div>
              <p className="text-sm font-semibold text-white">Appointments & Walk-in Inquiries</p>
              <p className="text-xs text-[#A1A1AA]">
                Live chair availability, real-time barber calendars, and service selection are managed directly via Slick.
              </p>
            </div>
          </div>
          <a
            href={BUSINESS_INFO.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-5 py-2.5 text-xs uppercase tracking-wider font-semibold text-[#0B0B0C] bg-[#C9A96E] hover:bg-[#D8BD87] rounded transition-colors whitespace-nowrap shrink-0"
          >
            <span>Open Slick Booking</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};

import React from 'react';
import { Phone, Calendar, ArrowUpRight, Scissors, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '../data/barberData';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-[#0E0E10] border-b border-[#1E1E22] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="p-8 sm:p-14 rounded-xl bg-[#141418] border border-[#272730] flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
          
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#C9A96E] font-semibold">
              <Scissors className="w-3.5 h-3.5" />
              <span>Get In Touch</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight uppercase font-display leading-tight">
              Bookings & Inquiries
            </h2>

            <p className="text-sm sm:text-base text-[#A1A1AA] leading-relaxed">
              Have a question regarding service details or schedule flexibility? Give the shop a ring or book directly into our live chair system.
            </p>

            {/* Direct Phone Highlight */}
            <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-4 text-sm">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded bg-[#C9A96E]/10 border border-[#C9A96E]/20 flex items-center justify-center text-[#C9A96E] shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-[#71717A] block">Shop Telephone</span>
                  <a
                    href={`tel:${BUSINESS_INFO.phoneRaw}`}
                    className="text-lg font-bold text-white hover:text-[#C9A96E] font-mono tracking-tight transition-colors"
                  >
                    {BUSINESS_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="hidden sm:block h-8 w-px bg-[#26262F]" />

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded bg-[#1A1A22] border border-[#2A2A33] flex items-center justify-center text-[#A1A1AA] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-[#71717A] block">Location</span>
                  <span className="text-sm font-medium text-[#E4E4E7]">8 St Ann's Square, Manchester</span>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons: "Call Now" and "Book Appointment" */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto shrink-0">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-xs sm:text-sm uppercase tracking-widest font-semibold text-white bg-[#1C1C22] hover:bg-[#25252D] border border-[#31313A] rounded transition-all whitespace-nowrap"
            >
              <Phone className="w-4 h-4 text-[#C9A96E]" />
              <span>Call Now</span>
            </a>

            <a
              href={BUSINESS_INFO.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-xs sm:text-sm uppercase tracking-widest font-semibold text-[#0B0B0C] bg-[#C9A96E] hover:bg-[#D8BD87] rounded transition-all whitespace-nowrap shadow-lg shadow-[#C9A96E]/20"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};

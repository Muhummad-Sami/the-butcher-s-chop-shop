import React from 'react';
import { ArrowUpRight, Calendar, ShieldCheck, Clock } from 'lucide-react';
import { BUSINESS_INFO, IMAGES } from '../data/barberData';

export const BookingCallout: React.FC = () => {
  return (
    <section className="py-20 bg-[#0B0B0C] border-b border-[#1E1E22] relative overflow-hidden">
      {/* Background Graphic Accents */}
      <div className="absolute inset-0 z-0 opacity-15">
        <img
          src={IMAGES.fade}
          alt="Sharp cut texture"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover filter blur-sm"
        />
        <div className="absolute inset-0 bg-[#0B0B0C]/85" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-14 rounded-xl bg-[#131317]/90 border border-[#2B2B33] backdrop-blur-md shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
          
          <div className="space-y-4 max-w-xl text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#C9A96E] font-semibold">
              <Calendar className="w-3.5 h-3.5" />
              <span>Direct Scheduling</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight uppercase font-display leading-tight">
              Ready for your next cut?
            </h2>

            <p className="text-sm sm:text-base text-[#A1A1AA] leading-relaxed">
              Book real-time chair availability with our Manchester barbers. Fast, convenient online scheduling via our official Slick booking partner.
            </p>

            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs text-[#71717A] pt-2">
              <span className="flex items-center gap-1.5 text-[#D4D4D8]">
                <ShieldCheck className="w-4 h-4 text-[#C9A96E]" />
                Instant Confirmation
              </span>
              <span className="text-[#3F3F46]">·</span>
              <span className="flex items-center gap-1.5 text-[#D4D4D8]">
                <Clock className="w-4 h-4 text-[#C9A96E]" />
                Live Barber Schedules
              </span>
            </div>
          </div>

          <div className="shrink-0 flex flex-col items-center gap-3 w-full sm:w-auto">
            <a
              href={BUSINESS_INFO.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-xs sm:text-sm uppercase tracking-widest font-semibold text-[#0B0B0C] bg-[#C9A96E] hover:bg-[#D8BD87] rounded transition-all transform hover:-translate-y-0.5 shadow-lg shadow-[#C9A96E]/20"
            >
              <span>Book Appointment</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <p className="text-[11px] text-[#71717A]">
              Powered by Slick Booking Engine
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

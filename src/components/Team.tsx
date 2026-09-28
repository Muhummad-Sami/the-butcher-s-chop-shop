import React from 'react';
import { Users, Info, Scissors, ArrowUpRight } from 'lucide-react';
import { TEAM_MEMBERS, BUSINESS_INFO } from '../data/barberData';

export const Team: React.FC = () => {
  return (
    <section id="team" className="py-24 bg-[#0E0E10] border-b border-[#1E1E22] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#C9A96E] font-semibold mb-3">
            <Users className="w-3.5 h-3.5" />
            <span>Behind The Chairs</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight uppercase font-display">
            The Barbers
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#A1A1AA]">
            Master craftsmen dedicated to precision lines, clean scissor cuts, and personalized consultations.
          </p>
        </div>

        {/* Team Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TEAM_MEMBERS.map((member, index) => (
            <div
              key={member.id}
              className="group bg-[#131316] border border-[#24242A] hover:border-[#3D3D45] rounded-lg overflow-hidden transition-all duration-300"
            >
              {/* Portrait Frame */}
              <div className="relative aspect-square overflow-hidden bg-[#18181D]">
                <img
                  src={member.image}
                  alt={`${member.title} ${index + 1}`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover filter brightness-[0.8] contrast-[1.05] group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#131316] via-[#131316]/30 to-transparent" />
                
                {/* Station Badge */}
                <div className="absolute top-4 left-4 px-2.5 py-1 rounded bg-[#0B0B0C]/80 border border-[#2E2E33] text-[11px] font-mono text-[#D4D4D8] backdrop-blur-sm">
                  Chair 0{index + 1}
                </div>
              </div>

              {/* Profile Details */}
              <div className="p-6">
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <h3 className="text-xl font-bold text-white tracking-wide uppercase font-display">
                    {member.title}
                  </h3>
                  <Scissors className="w-4 h-4 text-[#C9A96E]" />
                </div>

                <p className="text-xs font-semibold text-[#C9A96E] uppercase tracking-wider mb-3">
                  {member.specialty}
                </p>

                <p className="text-xs text-[#A1A1AA] leading-relaxed mb-6">
                  {member.experienceHighlight}
                </p>

                <a
                  href={BUSINESS_INFO.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 text-xs uppercase tracking-wider font-semibold text-white bg-[#1A1A1F] hover:bg-[#C9A96E] hover:text-[#0B0B0C] border border-[#2D2D35] rounded transition-all"
                >
                  <span>Select on Slick</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Demo Replacement Note Callout */}
        <div className="mt-12 p-4 rounded-lg bg-[#141418] border border-[#2E2E36] flex items-start gap-3 text-xs text-[#A1A1AA] max-w-3xl mx-auto">
          <Info className="w-4 h-4 text-[#C9A96E] shrink-0 mt-0.5" />
          <p>
            <strong className="text-white font-medium">Concept Note:</strong> Placeholder profiles shown above. These barber profiles, portraits, bios, and individual Slick direct booking links will be customized with The Butcher's Chop Shop's active barbers upon launch.
          </p>
        </div>

      </div>
    </section>
  );
};

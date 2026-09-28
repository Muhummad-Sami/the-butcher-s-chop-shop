import React, { useState } from 'react';
import { Sparkles, X, ExternalLink } from 'lucide-react';

export const ConceptBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <aside aria-label="Demo Concept Notice" className="bg-[#141416] border-b border-[#27272A] text-xs text-[#A1A1AA] py-2 px-4 relative z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="inline-flex items-center gap-1 font-semibold text-[#C9A96E] tracking-wider uppercase text-[11px]">
            <Sparkles className="w-3.5 h-3.5" />
            Website Concept / Demo
          </span>
          <span className="hidden sm:inline text-[#3F3F46]">|</span>
          <span className="text-[#D4D4D8]">
            Interactive redesign proposal for <strong className="text-white font-medium">The Butcher's Chop Shop</strong> (8 St Ann's Square, Manchester)
          </span>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="https://v2-book.getslick.com/salon/6176"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-1 text-[#C9A96E] hover:text-[#DFCA98] transition-colors"
          >
            <span>Live Slick Booking</span>
            <ExternalLink className="w-3 h-3" />
          </a>
          <button
            onClick={() => setIsVisible(false)}
            aria-label="Dismiss banner"
            className="text-[#71717A] hover:text-white p-1 rounded transition-colors"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </aside>
  );
};

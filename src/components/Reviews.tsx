import React from 'react';
import { Star, MessageSquareQuote, ExternalLink, CheckCircle } from 'lucide-react';
import { BUSINESS_INFO, REVIEW_THEMES } from '../data/barberData';

export const Reviews: React.FC = () => {
  return (
    <section id="reviews" className="py-24 bg-[#0E0E10] border-b border-[#1E1E22] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#C9A96E] font-semibold mb-3">
              <MessageSquareQuote className="w-3.5 h-3.5" />
              <span>Google Feedback Themes</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight uppercase font-display">
              Verified Client Reviews
            </h2>
            <p className="mt-2 text-[#A1A1AA] text-sm sm:text-base max-w-xl">
              Authentic highlights and themes extracted directly from the business listing's verified Google reviews in Manchester.
            </p>
          </div>

          {/* Aggregate Rating Scoreboard */}
          <div className="flex items-center gap-4 p-4 rounded-lg bg-[#141418] border border-[#27272F] shrink-0">
            <div className="text-right">
              <div className="flex items-center justify-end gap-1 text-[#C9A96E]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#C9A96E]" />
                ))}
              </div>
              <p className="text-xs text-[#A1A1AA] mt-1 font-mono">{BUSINESS_INFO.reviewCount} Google Reviews</p>
            </div>
            <div className="h-10 w-px bg-[#26262B]" />
            <div className="text-3xl font-extrabold text-white font-mono tracking-tight">
              {BUSINESS_INFO.googleRating}
              <span className="text-[#C9A96E] text-2xl font-serif">★</span>
            </div>
          </div>
        </div>

        {/* Review Themes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REVIEW_THEMES.map((item, idx) => (
            <div
              key={item.id}
              className="p-6 rounded-lg bg-[#121215] border border-[#222227] hover:border-[#383842] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-[#C9A96E]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#C9A96E]" />
                    ))}
                  </div>
                  <span className="text-[11px] font-mono text-[#71717A]">
                    Theme 0{idx + 1}
                  </span>
                </div>

                <blockquote className="text-lg font-bold text-white font-display mb-3">
                  "{item.theme}"
                </blockquote>

                <p className="text-xs text-[#A1A1AA] leading-relaxed">
                  {item.subtext}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#1F1F24] flex items-center justify-between text-[11px] text-[#71717A]">
                <span className="flex items-center gap-1 text-[#D4D4D8]">
                  <CheckCircle className="w-3 h-3 text-[#C9A96E]" />
                  Verified Google Listing Theme
                </span>
                <span className="font-mono">Manchester</span>
              </div>
            </div>
          ))}

          {/* Summary / Call to Action Card */}
          <div className="p-6 rounded-lg bg-[#15151A] border border-[#2D2D36] flex flex-col justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-[#C9A96E] mb-2">
                100% Authentic Feedback
              </p>
              <h3 className="text-xl font-bold text-white font-display mb-3">
                Experience The Service Firsthand
              </h3>
              <p className="text-xs text-[#A1A1AA] leading-relaxed">
                Consistent 4.8-star satisfaction across 167+ Manchester clients. Explore full customer feedback on Google Maps.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-[#23232A]">
              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 text-xs uppercase tracking-wider font-semibold text-white bg-[#22222A] hover:bg-[#2C2C36] border border-[#34343E] rounded transition-colors"
              >
                <span>View all reviews on Google</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* View all on Google button line */}
        <div className="mt-12 text-center">
          <a
            href={BUSINESS_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-[#C9A96E] hover:text-[#E2CE9F] font-semibold underline underline-offset-4 transition-colors"
          >
            <span>View all reviews on Google</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};

import React from 'react';
import { ArrowUpRight, Phone, MapPin, Instagram as InstagramIcon, Star, Scissors } from 'lucide-react';
import { BUSINESS_INFO } from '../data/barberData';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#08080A] text-[#A1A1AA] border-t border-[#1C1C20] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#1E1E24]">
          
          {/* Brand & Identity */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#" className="text-xl sm:text-2xl font-bold tracking-tight text-white uppercase font-display block">
              {BUSINESS_INFO.name}
            </a>
            <p className="text-xs sm:text-sm text-[#8E8E93] max-w-sm leading-relaxed">
              Premium barbering in the heart of Manchester. Sharp cuts, skin fades, and precision beard grooming at 8 St Ann's Square.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-[#C9A96E]">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#C9A96E]" />
                ))}
              </div>
              <span className="font-mono text-white font-semibold">{BUSINESS_INFO.googleRating} ★</span>
              <span className="text-[#52525B]">·</span>
              <span>{BUSINESS_INFO.reviewCount} Google Reviews</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#D4D4D8]">Explore</p>
            <ul className="space-y-2 text-xs">
              <li><a href="#about" className="hover:text-white transition-colors">About The Shop</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Services & Pricing</a></li>
              <li><a href="#team" className="hover:text-white transition-colors">The Barbers</a></li>
              <li><a href="#gallery" className="hover:text-white transition-colors">Cut Gallery</a></li>
              <li><a href="#reviews" className="hover:text-white transition-colors">Client Reviews</a></li>
              <li><a href="#location" className="hover:text-white transition-colors">Location & Map</a></li>
            </ul>
          </div>

          {/* Location & Telephone */}
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#D4D4D8]">Location & Contact</p>
            <div className="space-y-2 text-xs">
              <div className="flex items-start gap-2 text-[#C4C4C8]">
                <MapPin className="w-3.5 h-3.5 text-[#C9A96E] shrink-0 mt-0.5" />
                <span>
                  8 St Ann's Square<br />
                  Manchester M2 7EA<br />
                  United Kingdom
                </span>
              </div>
              <div className="pt-1 flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#C9A96E] shrink-0" />
                <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="hover:text-white font-mono transition-colors">
                  {BUSINESS_INFO.phone}
                </a>
              </div>
            </div>
          </div>

          {/* Booking & Social Channels */}
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#D4D4D8]">External Channels</p>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a
                  href={BUSINESS_INFO.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[#C9A96E] hover:text-[#DFCA98] font-medium transition-colors"
                >
                  <Scissors className="w-3.5 h-3.5" />
                  <span>Slick Online Booking</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href={BUSINESS_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  <InstagramIcon className="w-3.5 h-3.5 text-[#C9A96E]" />
                  <span>Instagram Profile</span>
                  <ArrowUpRight className="w-3 h-3 text-[#52525B]" />
                </a>
              </li>
              <li>
                <a
                  href={BUSINESS_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  <Star className="w-3.5 h-3.5 text-[#C9A96E]" />
                  <span>Google Reviews Listing</span>
                  <ArrowUpRight className="w-3 h-3 text-[#52525B]" />
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Discreet Demo Concept Label */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#71717A]">
          <p>© {currentYear} {BUSINESS_INFO.name}. All rights reserved.</p>

          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C9A96E]" />
            <span className="text-[11px] text-[#A1A1AA]">
              Demo Concept · Prepared for The Butcher's Chop Shop
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};

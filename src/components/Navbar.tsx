import React, { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/barberData';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Team', href: '#team' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Location', href: '#location' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#0B0B0C]/90 backdrop-blur-md border-b border-[#222226]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#"
            className="text-xl sm:text-2xl font-bold tracking-tight text-white hover:text-[#C9A96E] transition-colors whitespace-nowrap font-display"
          >
            {BUSINESS_INFO.name}
          </a>

          {/* Zone 2: Clean text navigation links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-[#A1A1AA] hover:text-[#EDE8DF] transition-colors relative py-1 hover:border-b hover:border-[#C9A96E]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1-2 primary actions */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="text-xs uppercase tracking-wider text-[#A1A1AA] hover:text-white transition-colors px-2 py-1 font-medium whitespace-nowrap"
            >
              0161 839 8850
            </a>
            <a
              href={BUSINESS_INFO.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 text-xs uppercase tracking-wider font-semibold text-[#0B0B0C] bg-[#C9A96E] hover:bg-[#D8BD87] rounded transition-colors whitespace-nowrap shadow-sm"
            >
              <span>Book Appointment</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile hamburger toggle */}
          <div className="flex items-center gap-2 sm:hidden">
            <a
              href={BUSINESS_INFO.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 text-xs uppercase tracking-wider font-semibold text-[#0B0B0C] bg-[#C9A96E] rounded whitespace-nowrap"
            >
              Book
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#A1A1AA] hover:text-white rounded focus:outline-none"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#121214] border-b border-[#27272A] px-6 py-6 space-y-4">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-[#E4E4E7] hover:text-[#C9A96E] py-1 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-4 border-t border-[#27272A] flex flex-col gap-3">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="text-center py-2.5 text-xs uppercase tracking-wider font-semibold text-white border border-[#2E2E33] rounded hover:border-[#3E3E44] transition-colors"
            >
              Call {BUSINESS_INFO.phone}
            </a>
            <a
              href={BUSINESS_INFO.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-center py-2.5 text-xs uppercase tracking-wider font-semibold text-[#0B0B0C] bg-[#C9A96E] hover:bg-[#D8BD87] rounded transition-colors"
            >
              Book Appointment (Slick)
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

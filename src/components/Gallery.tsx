import React, { useState } from 'react';
import { Camera, Maximize2, X, ChevronLeft, ChevronRight, Scissors } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/barberData';
import type { GalleryItem } from '../types';

export const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = ['All', 'Haircuts', 'Fades', 'Beard work', 'Interior'];

  const filteredItems = selectedCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextImage = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
  };

  const prevImage = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
  };

  return (
    <section id="gallery" className="py-24 bg-[#0B0B0C] border-b border-[#1E1E22] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#C9A96E] font-semibold mb-3">
              <Camera className="w-3.5 h-3.5" />
              <span>Visual Showcase</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight uppercase font-display">
              The Craft Gallery
            </h2>
            <p className="mt-2 text-[#A1A1AA] text-sm sm:text-base max-w-xl">
              A curated look into our daily chair work, sharp skin fades, hot-towel beard trims, and shop aesthetic at St Ann's Square.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  setLightboxIndex(null);
                }}
                className={`px-3.5 py-1.5 text-xs font-medium rounded transition-colors whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-[#C9A96E] text-[#0B0B0C] font-semibold shadow-sm'
                    : 'bg-[#151518] text-[#A1A1AA] hover:text-white border border-[#27272D]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => openLightbox(index)}
              className="group relative aspect-[4/3] rounded-lg overflow-hidden border border-[#222228] bg-[#141418] cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover filter brightness-[0.85] contrast-[1.05] group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0C] via-[#0B0B0C]/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Hover Overlay Details */}
              <div className="absolute inset-0 p-5 flex flex-col justify-between opacity-90 group-hover:opacity-100">
                <div className="flex justify-between items-start">
                  <span className="text-[11px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-[#0B0B0C]/80 border border-[#2A2A30] text-[#C9A96E]">
                    {item.category}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-[#18181D]/80 border border-[#2E2E36] flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-white group-hover:text-[#C9A96E] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-[#71717A] mt-0.5">Click to view high-res</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && filteredItems[lightboxIndex] && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Image gallery lightbox"
          className="fixed inset-0 z-50 bg-[#0B0B0C]/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          onClick={closeLightbox}
        >
          <div
            className="relative max-w-4xl w-full max-h-[90vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 p-2 text-[#A1A1AA] hover:text-white transition-colors"
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Main Lightbox Image */}
            <div className="relative w-full rounded-lg overflow-hidden border border-[#27272A] bg-black">
              <img
                src={filteredItems[lightboxIndex].image}
                alt={filteredItems[lightboxIndex].title}
                referrerPolicy="no-referrer"
                className="w-full max-h-[75vh] object-contain mx-auto"
              />
            </div>

            {/* Captions & Counter */}
            <div className="w-full mt-4 flex items-center justify-between text-xs text-[#A1A1AA]">
              <div>
                <p className="text-white font-medium text-sm">{filteredItems[lightboxIndex].title}</p>
                <p className="text-[#C9A96E] uppercase tracking-wider text-[11px]">{filteredItems[lightboxIndex].category}</p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={prevImage}
                  className="p-2 rounded bg-[#17171A] border border-[#2A2A30] hover:text-white transition-colors"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <span className="font-mono">
                  {lightboxIndex + 1} / {filteredItems.length}
                </span>
                <button
                  onClick={nextImage}
                  className="p-2 rounded bg-[#17171A] border border-[#2A2A30] hover:text-white transition-colors"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

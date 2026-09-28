import React from 'react';
import { Instagram as InstagramIcon, ArrowUpRight, Heart, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO, IMAGES } from '../data/barberData';

export const Instagram: React.FC = () => {
  const posts = [
    {
      id: 'post-1',
      image: IMAGES.fade,
      caption: 'Skin fade lineup and textured crown work at 8 St Ann’s Square.',
      likes: '142',
      comments: '18',
    },
    {
      id: 'post-2',
      image: IMAGES.beard,
      caption: 'Beard architecture & hot towel razor edging. Sharp for the weekend.',
      likes: '198',
      comments: '24',
    },
    {
      id: 'post-3',
      image: IMAGES.hero,
      caption: 'Master craft scissor sessions in Manchester city centre.',
      likes: '235',
      comments: '31',
    },
    {
      id: 'post-4',
      image: IMAGES.interior,
      caption: 'Atmosphere in the shop today. Belmont chairs primed.',
      likes: '176',
      comments: '12',
    },
  ];

  return (
    <section className="py-24 bg-[#0B0B0C] border-b border-[#1E1E22] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#C9A96E] font-semibold mb-3">
              <InstagramIcon className="w-3.5 h-3.5" />
              <span>Social Showcase</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight uppercase font-display">
              Follow the Chop Shop
            </h2>
            <p className="mt-2 text-[#A1A1AA] text-sm sm:text-base">
              Latest cuts, shop vibes, and daily updates directly from our Manchester chairs.
            </p>
          </div>

          <a
            href={BUSINESS_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs uppercase tracking-wider font-semibold text-white bg-[#16161A] hover:bg-[#202026] border border-[#2D2D35] hover:border-[#C9A96E] rounded transition-all whitespace-nowrap"
          >
            <InstagramIcon className="w-4 h-4 text-[#C9A96E]" />
            <span>{BUSINESS_INFO.instagramHandle}</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#71717A]" />
          </a>
        </div>

        {/* Instagram Post Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {posts.map((post) => (
            <a
              key={post.id}
              href={BUSINESS_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square rounded-lg overflow-hidden bg-[#151518] border border-[#222227] hover:border-[#3D3D48] transition-all"
            >
              <img
                src={post.image}
                alt="The Butcher's Chop Shop Instagram post"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover filter brightness-[0.8] contrast-[1.05] group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0C] via-[#0B0B0C]/30 to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />

              {/* Top Handle Badge */}
              <div className="absolute top-3 left-3 text-[11px] font-mono text-[#D4D4D8] bg-[#0B0B0C]/80 px-2 py-0.5 rounded border border-[#2A2A30] backdrop-blur-xs">
                @thebutcherschopshop
              </div>

              {/* Bottom Caption & Stats on Hover */}
              <div className="absolute inset-x-0 bottom-0 p-4 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                <p className="text-xs text-[#E4E4E7] line-clamp-2 leading-snug mb-3">
                  {post.caption}
                </p>

                <div className="flex items-center gap-4 text-xs font-mono text-[#A1A1AA] pt-2 border-t border-[#26262D]">
                  <span className="flex items-center gap-1">
                    <Heart className="w-3.5 h-3.5 text-[#C9A96E]" />
                    {post.likes}
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageCircle className="w-3.5 h-3.5 text-[#A1A1AA]" />
                    {post.comments}
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};

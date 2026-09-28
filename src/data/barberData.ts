import heroImage from '@/src/assets/images/barber_hero_cinematic_1790627097170.jpg';
import fadeImage from '@/src/assets/images/barber_fade_service_1790627119847.jpg';
import beardImage from '@/src/assets/images/barber_beard_service_1790627135710.jpg';
import interiorImage from '@/src/assets/images/barber_interior_space_1790627149230.jpg';
import portraitImage from '@/src/assets/images/barber_team_portrait_1790627161953.jpg';

import type { ServiceItem, BarberProfile, ReviewTheme, GalleryItem } from '../types';

export const BUSINESS_INFO = {
  name: "The Butcher's Chop Shop",
  tagline: "Sharp Cuts. Manchester Style.",
  subheading: "Premium barbering in the heart of Manchester.",
  address: {
    line1: "8 St Ann's Square",
    city: "Manchester",
    postcode: "M2 7EA",
    country: "United Kingdom",
    full: "8 St Ann's Square, Manchester M2 7EA, United Kingdom",
  },
  phone: "+44 161 839 8850",
  phoneRaw: "+441618398850",
  bookingUrl: "https://v2-book.getslick.com/salon/6176",
  instagramUrl: "https://www.instagram.com/thebutcherschopshop/?hl=en",
  instagramHandle: "@thebutcherschopshop",
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=The+Butcher%27s+Chop+Shop+8+St+Ann%27s+Square+Manchester+M2+7EA",
  googleRating: "4.8",
  reviewCount: "167",
};

export const IMAGES = {
  hero: heroImage,
  fade: fadeImage,
  beard: beardImage,
  interior: interiorImage,
  team: portraitImage,
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'haircut',
    name: 'Haircut',
    category: 'cuts',
    description: 'Precision scissor and clipper cut tailored to your hair structure, finished with neck taper and styled to finish.',
    duration: '45 mins',
    priceNote: 'Book to check availability',
    image: fadeImage,
  },
  {
    id: 'skin-fade',
    name: 'Skin Fade',
    category: 'cuts',
    description: 'Ultra-clean taper or foil skin fade blended seamlessly with scissor texturing on top and sharp line work.',
    duration: '45 mins',
    priceNote: 'Book to check availability',
    image: fadeImage,
  },
  {
    id: 'beard-trim',
    name: 'Beard Trim',
    category: 'beards',
    description: 'Detailed beard sculpting, cheek and neckline definition with straight razor edging and conditioning treatment.',
    duration: '30 mins',
    priceNote: 'Book to check availability',
    image: beardImage,
  },
  {
    id: 'hair-and-beard',
    name: 'Hair & Beard',
    category: 'combos',
    description: 'The complete grooming experience combining a full precision haircut or fade with comprehensive beard shaping.',
    duration: '60 mins',
    priceNote: 'Book to check availability',
    image: heroImage,
  },
  {
    id: 'styling',
    name: 'Styling',
    category: 'styling',
    description: 'Consultation, wash, blow dry and tailored product application for events, weekend evenings, or everyday refinement.',
    duration: '30 mins',
    priceNote: 'Book to check availability',
    image: interiorImage,
  },
];

export const TEAM_MEMBERS: BarberProfile[] = [
  {
    id: 'barber-1',
    title: 'Barber Profile',
    specialty: 'Skin Fades & Modern Scissor Work',
    experienceHighlight: 'Specialist in low/mid/high fades, sharp foil finishes, and textured crops.',
    image: portraitImage,
  },
  {
    id: 'barber-2',
    title: 'Barber Profile',
    specialty: 'Beard Architecture & Traditional Shaves',
    experienceHighlight: 'Master of hot towel straight razor edging, beard re-shaping, and facial grooming.',
    image: portraitImage,
  },
  {
    id: 'barber-3',
    title: 'Barber Profile',
    specialty: 'Classic Scissor Cuts & Precision Styling',
    experienceHighlight: 'Dedicated to timeless British barbering, tapers, and personalized consultations.',
    image: portraitImage,
  },
];

export const REVIEW_THEMES: ReviewTheme[] = [
  {
    id: 'theme-1',
    theme: 'Great barbers and service',
    subtext: 'Highlighted across client feedback for professional demeanor, effortless consultations, and consistent delivery.',
  },
  {
    id: 'theme-2',
    theme: 'Attention to detail',
    subtext: 'Noted repeatedly for razor-sharp lineups, flawless fade transitions, and meticulous finish.',
  },
  {
    id: 'theme-3',
    theme: 'Great atmosphere',
    subtext: 'Praised for a welcoming, relaxed city-centre shop environment in the historic St Ann’s Square.',
  },
  {
    id: 'theme-4',
    theme: 'Friendly staff',
    subtext: 'Clients frequently compliment the warm, unpretentious hospitality from arrival to departure.',
  },
  {
    id: 'theme-5',
    theme: 'Excellent haircut',
    subtext: 'The recurring verdict from Manchester regulars and visitors seeking top-tier barber craft.',
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Precision Scissor & Foil Work',
    category: 'Haircuts',
    image: heroImage,
  },
  {
    id: 'gal-2',
    title: 'Clean Low Skin Fade',
    category: 'Fades',
    image: fadeImage,
  },
  {
    id: 'gal-3',
    title: 'Beard Sculpting & Hot Towel Treatment',
    category: 'Beard work',
    image: beardImage,
  },
  {
    id: 'gal-4',
    title: 'Shop Stations & Vintage Belmont Chairs',
    category: 'Interior',
    image: interiorImage,
  },
  {
    id: 'gal-5',
    title: 'Signature Haircut with Textured Matte Top',
    category: 'Haircuts',
    image: fadeImage,
  },
  {
    id: 'gal-6',
    title: 'Beard Lineup with Straight Razor Edging',
    category: 'Beard work',
    image: beardImage,
  },
];

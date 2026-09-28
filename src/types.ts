export interface ServiceItem {
  id: string;
  name: string;
  category: 'cuts' | 'beards' | 'combos' | 'styling';
  description: string;
  duration: string;
  image: string;
  priceNote: string;
}

export interface BarberProfile {
  id: string;
  title: string;
  specialty: string;
  experienceHighlight: string;
  image: string;
}

export interface ReviewTheme {
  id: string;
  theme: string;
  subtext: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Haircuts' | 'Fades' | 'Beard work' | 'Interior';
  image: string;
}

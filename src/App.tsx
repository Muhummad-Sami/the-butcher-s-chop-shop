import React from 'react';
import { ConceptBanner } from './components/ConceptBanner';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Team } from './components/Team';
import { Gallery } from './components/Gallery';
import { Reviews } from './components/Reviews';
import { BookingCallout } from './components/BookingCallout';
import { Location } from './components/Location';
import { Instagram } from './components/Instagram';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0B0B0C] text-[#E8E6E1] flex flex-col font-sans selection:bg-[#C9A96E]/20 selection:text-[#EDE8DF]">
      {/* Discreet Demo Concept Banner */}
      <ConceptBanner />

      {/* Top Bar Navigation */}
      <Navbar />

      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. About Section */}
        <About />

        {/* 3. Services Section */}
        <Services />

        {/* 4. Barber / Team Section */}
        <Team />

        {/* 5. Gallery Section */}
        <Gallery />

        {/* 6. Reviews Section */}
        <Reviews />

        {/* 7. Booking Callout */}
        <BookingCallout />

        {/* 8. Location Section */}
        <Location />

        {/* 9. Instagram Section */}
        <Instagram />

        {/* 10. Contact Section */}
        <Contact />
      </main>

      {/* 11. Footer */}
      <Footer />
    </div>
  );
}

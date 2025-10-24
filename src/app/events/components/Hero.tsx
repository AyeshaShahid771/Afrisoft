"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <header className="relative h-[56vh] md:h-[76vh] w-full overflow-hidden bg-deep-navy">
      <Image
        src="/event.jpg"
        alt="Events hero"
        fill
        className="object-cover"
        sizes="100vw"
        priority
      />
      {/* Subtle bottom gradient for text legibility; keeps image colors intact */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10 pointer-events-none" />
      {/* Top-aligned overlay so heading appears higher on all viewports */}
      <div className="absolute inset-0 z-20 flex items-start">
        <div className="container mx-auto px-4 pt-8 md:pt-20 relative">
          {/* Absolutely position the heading to move it higher while keeping the paragraph in normal flow */}
          <h1 className="absolute left-0 top-0 translate-y-10 md:-translate-y 14 translate-x-4 md:translate-x-8 text-4xl md:text-6xl font-extrabold text-[#ffff] max-w-4xl">
            Events
          </h1>
          <div className="pt-20 md:pt-28">
            {/* Subheading removed as requested */}
          </div>
        </div>
      </div>
    </header>
  );
}

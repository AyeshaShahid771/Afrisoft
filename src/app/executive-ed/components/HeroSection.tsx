"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative h-auto md:h-[60vh] min-h-[300px] md:min-h-[400px] overflow-hidden">
      <div className="absolute inset-0 bg-deep-navy/20 md:bg-deep-navy/70 z-10"></div>
      <Image
        src="/heroo.jpg"
        alt="Executive Education"
        fill
        className="object-cover md:opacity-100 opacity-90"
        sizes="100vw"
        priority
      />
      <div className="absolute inset-0 z-20 flex items-center">
        <div className="container mx-auto max-w-6xl px-4">
          <h1 className="transform -translate-y-12 md:-translate-y-32 text-3xl md:text-6xl font-bold text-white mb-3 max-w-3xl">
            Executive Education
          </h1>
          {/* underline removed per request */}
          {/* descriptive paragraph removed per request */}
        </div>
      </div>
    </section>
  );
}

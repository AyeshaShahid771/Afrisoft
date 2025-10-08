"use client";

import Image from "next/image";

export default function ImpactSection() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-row gap-16 items-center">
          <div className="w-1/2 relative">
            <div className="absolute -top-6 -left-6 w-full h-full border border-royal-blue/30 -z-10 pointer-events-none"></div>
            <div className="relative h-[220px] md:h-[450px] overflow-hidden z-10">
              <Image
                src="/impact.jpg"
                alt="AI Leaders Network"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
          <div className="w-1/2">
            <h2 className="text-2xl md:text-4xl font-bold text-deep-navy mb-4">Our Impact</h2>
            <div className="h-0.5 w-24 bg-royal-blue mb-8"></div>
            <p className="text-sm md:text-lg text-gray-700 mb-6 leading-relaxed">
              Our executive education programs go beyond theory. We help
              executives and organizations apply AI immediately to
              decision-making, strategy, and transformation.
            </p>
            <p className="text-sm md:text-lg text-gray-700 leading-relaxed">
              Join our programs to become part of a growing network of AI-ready
              leaders shaping the future of the region.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

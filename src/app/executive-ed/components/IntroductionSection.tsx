"use client";

import Image from "next/image";
// ...existing code...

export default function IntroductionSection() {
  return (
    <section className="py-12 px-4 md:py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-row flex-nowrap items-center gap-4 md:gap-16">
          <div className="w-1/2 md:w-1/2 order-2 md:order-1 text-left">
            <h2 className="text-xl md:text-3xl font-bold text-deep-navy mb-4 md:mb-6">
              Excellence in AI Education
            </h2>
            <div className="mx-auto md:mx-0 h-0.5 w-20 md:w-24 bg-royal-blue mb-6 md:mb-8"></div>
            <p className="text-xs md:text-lg text-gray-700 mb-6 md:mb-8 leading-relaxed">
              At Afrisoft AI Consultants, we design executive education programs
              that prepare leaders, managers, and decision-makers to thrive in
              the age of artificial intelligence. Our programs are built around
              real-world challenges and inspired by the case-study methods used
              at leading business schools.
            </p>
            {/* CTA removed per request - keeping content concise */}
          </div>
          <div className="w-1/2 md:w-1/2 order-1 md:order-2">
            <div className="relative h-[180px] md:h-[450px] overflow-hidden">
              <Image
                src="/intro.jpg"
                alt="Executive AI Education"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute -bottom-8 -right-8 w-36 h-36 bg-pale-blue opacity-20 rounded-full md:-bottom-10 md:-right-10 md:w-40 md:h-40"></div>
              <div className="absolute -top-8 -left-8 w-24 h-24 bg-royal-blue opacity-10 rounded-full md:-top-10 md:-left-10 md:w-32 md:h-32"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

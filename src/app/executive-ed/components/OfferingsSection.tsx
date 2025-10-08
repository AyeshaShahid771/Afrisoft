"use client";

import Image from "next/image";

export default function OfferingsSection() {
  return (
    <section id="offerings" className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-xl md:text-4xl font-bold text-deep-navy mb-4">
            What We Offer
          </h2>
          <div className="h-0.5 w-24 bg-royal-blue mx-auto"></div>
        </div>

        {/* AI Bootcamp */}
        <div className="mb-16">
          <div className="flex flex-row items-center gap-16">
            <div className="w-[45%] relative">
              <div className="relative h-[220px] md:h-[400px] overflow-hidden">
                <div className="absolute inset-0 border border-royal-blue/20"></div>
                <Image
                  src="/bootcamp.jpg"
                  alt="AI Bootcamp"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 45vw"
                />
              </div>
            </div>
            <div className="w-[55%]">
              <h3 className="text-xl md:text-3xl font-bold text-royal-blue mb-4">
                AI Bootcamp
              </h3>
              <div className="h-0.5 w-16 bg-royal-blue mb-6"></div>
              <p className="text-sm md:text-lg text-gray-700 leading-relaxed">
                Intensive, hands-on training programs covering the latest tools,
                technologies, and strategies in AI. Our bootcamps are designed
                to rapidly build practical knowledge and skills that can be
                immediately applied in your organization.
              </p>
            </div>
          </div>
        </div>

        {/* Case Study Sessions */}
        <div className="mb-16">
          <div className="flex flex-row-reverse items-center gap-16">
            <div className="w-[45%] relative">
              <div className="relative h-[220px] md:h-[400px] overflow-hidden">
                <div className="absolute inset-0 border border-royal-blue/20"></div>
                <Image
                  src="/case.jpg"
                  alt="Case Study Sessions"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 45vw"
                />
              </div>
            </div>
            <div className="w-[55%]">
              <h3 className="text-xl md:text-3xl font-bold text-royal-blue mb-4">
                Case Study Sessions
              </h3>
              <div className="h-0.5 w-16 bg-royal-blue mb-6"></div>
              <p className="text-sm md:text-lg text-gray-700 leading-relaxed">
                Harvard-style discussions based on real industry problems,
                helping executives learn through practical examples. These
                sessions foster critical thinking and collaborative
                problem-solving in AI implementation.
              </p>
            </div>
          </div>
        </div>

        {/* Custom Programs */}
        <div className="mb-16">
          <div className="flex flex-row items-center gap-16">
            <div className="w-[45%] relative">
              <div className="relative h-[220px] md:h-[400px] overflow-hidden">
                <div className="absolute inset-0 border border-royal-blue/20"></div>
                <Image
                  src="/class.jpg"
                  alt="Custom Programs"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 45vw"
                />
              </div>
            </div>
            <div className="w-[55%]">
              <h3 className="text-xl md:text-3xl font-bold text-royal-blue mb-4">
                Custom Programs
              </h3>
              <div className="h-0.5 w-16 bg-royal-blue mb-6"></div>
              <p className="text-sm md:text-lg text-gray-700 leading-relaxed">
                Tailored courses designed for government agencies, corporations,
                and organizations in the GCC. We understand regional contexts
                and align our custom programs with specific organizational
                challenges and goals.
              </p>
            </div>
          </div>
        </div>

        {/* Workshops and Seminars */}
        <div>
          <div className="flex flex-row-reverse items-center gap-16">
            <div className="w-[45%] relative">
              <div className="relative h-[220px] md:h-[400px] overflow-hidden">
                <div className="absolute inset-0 border border-royal-blue/20"></div>
                <Image
                  src="/program.jpg"
                  alt="Workshops and Seminars"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 45vw"
                />
              </div>
            </div>
            <div className="w-[55%]">
              <h3 className="text-xl md:text-3xl font-bold text-royal-blue mb-4">
                Workshops and Seminars
              </h3>
              <div className="h-0.5 w-16 bg-royal-blue mb-6"></div>
              <p className="text-sm md:text-lg text-gray-700 leading-relaxed">
                Short, focused sessions on AI governance, digital twins,
                recommender systems, and human-centered AI. Perfect for busy
                executives who need to quickly grasp specific AI concepts and
                applications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

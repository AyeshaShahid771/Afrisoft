"use client";

import React from "react";

export default function Testimonials() {
  return (
    <section className="bg-pale-blue/20 py-16 md:py-24 px-4 md:px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-2xl md:text-3xl font-bold text-deep-navy mb-16 text-center">
          A world-class learning experience that energizes
          <br className="hidden md:block" /> aspiring and established
          changemakers
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <div className="bg-white p-8 shadow-sm">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-deep-navy mb-2">
                Breakthrough learning
              </h3>
              <p className="text-gray-700">
                "Afrisoft AI's executive program transformed our approach to AI
                implementation. The case studies were directly relevant to our
                industry challenges, and we left with actionable plans we could
                execute immediately."
              </p>
            </div>
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-royal-blue/20 mr-4"></div>
              <div>
                <div className="font-semibold text-deep-navy">
                  Sarah Al-Mohammadi
                </div>
                <div className="text-sm text-gray-600">
                  CIO, Regional Finance Group
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 shadow-sm">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-deep-navy mb-2">
                Holistic support
              </h3>
              <p className="text-gray-700">
                "The program's balance between technical depth and strategic
                vision was perfect. Our leadership team gained both the
                confidence and knowledge to drive AI-powered transformation
                across our organization."
              </p>
            </div>
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-royal-blue/20 mr-4"></div>
              <div>
                <div className="font-semibold text-deep-navy">
                  Mohammed Al-Harbi
                </div>
                <div className="text-sm text-gray-600">
                  Director of Innovation, Government Agency
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white p-8 shadow-sm">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-deep-navy mb-2">
                Powerful connections
              </h3>
              <p className="text-gray-700">
                "Beyond the excellent content, the network we've built through
                Afrisoft AI's program has been invaluable. We're now
                collaborating with organizations we met during the sessions on
                joint AI initiatives."
              </p>
            </div>
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-royal-blue/20 mr-4"></div>
              <div>
                <div className="font-semibold text-deep-navy">
                  Fatima Al-Sulaiman
                </div>
                <div className="text-sm text-gray-600">
                  Head of Digital Strategy, Energy Corporation
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 shadow-sm">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-deep-navy mb-2">
                Intentional diversity
              </h3>
              <p className="text-gray-700">
                "The diverse perspectives in our cohort enriched the learning
                experience tremendously. Afrisoft AI created an environment
                where executives from different sectors could share challenges
                and solutions unique to the GCC region."
              </p>
            </div>
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-royal-blue/20 mr-4"></div>
              <div>
                <div className="font-semibold text-deep-navy">
                  Khalid Al-Qasimi
                </div>
                <div className="text-sm text-gray-600">
                  SVP of Technology, Healthcare Provider
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

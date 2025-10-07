"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function CoreOfferings() {
  return (
    <section id="core-offerings" className="bg-white py-16 md:py-24 px-4 md:px-6 overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        {/* Header Section with Intro Text */}
        <div className="mb-12 md:mb-16 text-center">
          <p className="text-royal-blue font-medium mb-4">WHAT WE DO</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-deep-navy mb-6">
            Our Core Offerings
          </h2>
          <p className="text-gray-700 text-lg md:text-xl mx-auto md:w-3/4 leading-relaxed">
            Afrisoft AI delivers boardroom-level advisory disguised as training,
            giving your executives both knowledge and a transformation plan.
          </p>
        </div>

        {/* Main Content - 3 Column Layout */}
        <div className="grid grid-cols-3 gap-2 md:gap-8 lg:gap-16">
          {/* Card 1 - Executive Education */}
          <div className="group overflow-hidden transition-all duration-300">
            <div className="aspect-square relative overflow-hidden rounded-lg">
              <Image
                src="/1.png"
                alt="Executive Education"
                fill
                className="object-cover z-10"
              />
            </div>
            <div className="mt-2 md:mt-4 text-center">
              <h3 className="text-sm md:text-xl lg:text-2xl font-bold text-deep-navy mb-1 md:mb-3">
                Executive Education
              </h3>
              <p className="text-gray-700 text-xs md:text-sm lg:text-base">
                Harvard-style case-based AI training programs for executives,
                policymakers, and decision-makers.
              </p>
            </div>
          </div>

          {/* Card 2 - AI Consultancy */}
          <div className="group overflow-hidden transition-all duration-300">
            <div className="aspect-square relative overflow-hidden rounded-lg">
              <Image
                src="/2.png"
                alt="AI Consultancy"
                fill
                className="object-cover z-10"
              />
            </div>
            <div className="mt-2 md:mt-4 text-center">
              <h3 className="text-sm md:text-xl lg:text-2xl font-bold text-deep-navy mb-1 md:mb-3">
                AI Consultancy
              </h3>
              <p className="text-gray-700 text-xs md:text-sm lg:text-base">
                Tailored strategies in AI governance, digital twins, and
                recommender systems for organizations seeking sustainable
                growth.
              </p>
            </div>
          </div>

          {/* Card 3 - Research and Innovation */}
          <div className="group overflow-hidden transition-all duration-300">
            <div className="aspect-square relative overflow-hidden rounded-lg">
              <Image
                src="/3.png"
                alt="Research and Innovation"
                fill
                className="object-cover z-10"
              />
            </div>
            <div className="mt-2 md:mt-4 text-center">
              <h3 className="text-sm md:text-xl lg:text-2xl font-bold text-deep-navy mb-1 md:mb-3">
                Research and Innovation
              </h3>
              <p className="text-gray-700 text-xs md:text-sm lg:text-base">
                Collaborations with universities and corporations to drive
                impactful, human-centered AI research.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="bg-deep-navy text-white">
      {/* Main Hero Section */}
      <div className="relative">
        {/* Dark Overlay and Background Pattern */}
        <div className="absolute inset-0 bg-[url('/people.png')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-deep-navy via-deep-navy/95 to-deep-navy"></div>

        {/* Content Container */}
        <div className="relative z-10 container mx-auto max-w-6xl py-16 md:py-24 px-4 md:px-6">
          {/* Main Headline */}
          <div className="max-w-4xl mb-12 md:mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
              Executive Education for the AI Era
            </h1>

            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed max-w-3xl font-light">
              From executive education boot camps to AI-powered research
              consultancy, we enable leaders and organizations to thrive in the
              age of intelligent systems.
            </p>
          </div>

          {/* Image Showcase - Similar to Harvard Business School layout */}
          <div className="w-screen relative left-[calc(-50vw+50%)] right-[calc(-50vw+50%)] max-w-none px-4 md:px-8 xl:px-12">
            <div className="flex flex-row gap-2 md:gap-4">
              {/* Left Image */}
              <div className="w-[30%] md:w-[30%] xl:w-[30%]">
                <div className="relative h-40 sm:h-60 md:h-96 lg:h-[30rem] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>
                  <Image
                    src="/h1.jpg"
                    alt="Executive Education"
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>

              {/* Center Image - Wider but same height */}
              <div className="w-[40%] md:w-[40%] xl:w-[40%]">
                <div className="relative h-40 sm:h-60 md:h-96 lg:h-[30rem] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>
                  <Image
                    src="/h2.jpg"
                    alt="AI Consulting"
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>

              {/* Right Image */}
              <div className="w-[30%] md:w-[30%] xl:w-[30%]">
                <div className="relative h-40 sm:h-60 md:h-96 lg:h-[30rem] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>
                  <Image
                    src="/h3.jpg"
                    alt="Leadership Training"
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Statement Section */}
      <div className="container mx-auto max-w-6xl px-4 md:px-6 pb-16 md:pb-24">
        <div className="pt-8 md:pt-10">
          {/* Main statement */}
          <div className="text-center mb-16 relative">
            <div className="bg-gradient-to-r from-royal-blue to-azure-blue h-1 w-24 md:w-32 mx-auto mb-8"></div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-light tracking-wide mb-2 leading-tight text-white">
              Afrisoft AI Executive Education delivers
            </h2>
            <p className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 text-white">
              Elite, outcome-driven courses for today's leaders
            </p>
          </div>

          {/* Three column highlight */}
          <div className="grid grid-cols-3 gap-2 md:gap-x-6 mt-12">
            {/* Column 1 */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-royal-blue to-azure-blue mb-3 md:mb-6">
                <svg
                  className="w-5 h-5 md:w-7 md:h-7"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22 10V15C22 20 20 22 15 22H9C4 22 2 20 2 15V9C2 4 4 2 9 2H14"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M22 10H18C15 10 14 9 14 6V2L22 10Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="text-base md:text-xl lg:text-2xl font-medium mb-1 md:mb-3">
                Premium Venues
              </h3>
              <p className="text-xs md:text-base text-white/70">
                Conducted directly in executive offices or premium venues, our
                programs deliver unparalleled learning experiences.
              </p>
            </div>

            {/* Column 2 */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-royal-blue to-azure-blue mb-3 md:mb-6">
                <svg
                  className="w-5 h-5 md:w-7 md:h-7"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 2V22"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 12H22"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="text-base md:text-xl lg:text-2xl font-medium mb-1 md:mb-3">
                Cutting-Edge Topics
              </h3>
              <p className="text-xs md:text-base text-white/70">
                Generative AI, Large Language Models, Digital Twins, and
                strategic AI implementation for real-world challenges.
              </p>
            </div>

            {/* Column 3 */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-royal-blue to-azure-blue mb-3 md:mb-6">
                <svg
                  className="w-5 h-5 md:w-7 md:h-7"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 16.01C14.2091 16.01 16 14.2191 16 12.01C16 9.80089 14.2091 8.01001 12 8.01001C9.79086 8.01001 8 9.80089 8 12.01C8 14.2191 9.79086 16.01 12 16.01Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 12.01C2 7.59003 5.58 4.01001 10 4.01001C12.26 4.01001 14.31 4.94 15.8 6.44001C17.28 7.94001 18.2 9.98003 18.2 12.24C18.2 16.66 14.62 20.24 10.2 20.24C7.94 20.24 5.89 19.31 4.4 17.81C2.92 16.31 2 14.27 2 12.01Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="text-base md:text-xl lg:text-2xl font-medium mb-1 md:mb-3">
                Tangible Outcomes
              </h3>
              <p className="text-xs md:text-base text-white/70">
                AI roadmaps, ready-to-use toolkits, and executive certificates
                that showcase innovation leadership.
              </p>
            </div>
          </div>

          {/* Bottom statement */}
          <div className="mt-16 md:mt-20 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-royal-blue/20 to-azure-blue/20 blur-xl"></div>
            <div className="relative bg-white/5 backdrop-blur-sm py-8 px-6 md:py-10 md:px-12 border-l-4 border-royal-blue">
              <p className="text-base md:text-lg font-light text-white leading-relaxed">
                With flexible formats from half-day workshops to 5-day
                immersions, we ensure executives gain the
                <span className="font-medium"> strategic vision </span>
                and
                <span className="font-medium"> practical tools </span>
                to implement AI immediately within their organizations across
                <span className="italic">
                  {" "}
                  oil & gas, healthcare, government, and finance{" "}
                </span>
                sectors.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

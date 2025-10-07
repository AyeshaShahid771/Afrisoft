"use client";

import React from "react";
import { Button } from "@/components/ui/button";

export default function VisionSection() {
  return (
    <section className="bg-white py-16 md:py-24 px-4 md:px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left column - Vision text */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-deep-navy mb-6">
              Our Vision
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              At Afrisoft AI Consultants, our vision is to make artificial
              intelligence accessible, ethical, and impactful for every
              organization. We believe AI should not only deliver efficiency and
              growth but also empower people, create opportunities, and build
              trust.
            </p>

            <h3 className="text-xl font-bold text-deep-navy mb-5">
              We aim to:
            </h3>
            <ul className="space-y-6 mb-8">
              <li className="flex items-start">
                <div className="mr-4 pt-1">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-royal-blue"
                  >
                    <path
                      d="M7.75 12L10.25 14.5L16.25 8.5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      opacity="0.5"
                    />
                  </svg>
                </div>
                <p className="text-gray-700">
                  Educate leaders and professionals so they can confidently
                  apply AI in their fields.
                </p>
              </li>
              <li className="flex items-start">
                <div className="mr-4 pt-1">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-royal-blue"
                  >
                    <path
                      d="M7.75 12L10.25 14.5L16.25 8.5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      opacity="0.5"
                    />
                  </svg>
                </div>
                <p className="text-gray-700">
                  Transform organizations in the GCC and beyond with
                  human-centered AI strategies.
                </p>
              </li>
              <li className="flex items-start">
                <div className="mr-4 pt-1">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-royal-blue"
                  >
                    <path
                      d="M7.75 12L10.25 14.5L16.25 8.5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      opacity="0.5"
                    />
                  </svg>
                </div>
                <p className="text-gray-700">
                  Promote responsible AI practices that ensure fairness,
                  transparency, and sustainability.
                </p>
              </li>
              <li className="flex items-start">
                <div className="mr-4 pt-1">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-royal-blue"
                  >
                    <path
                      d="M7.75 12L10.25 14.5L16.25 8.5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      opacity="0.5"
                    />
                  </svg>
                </div>
                <p className="text-gray-700">
                  Bridge the gap between cutting-edge AI research and real-world
                  business challenges.
                </p>
              </li>
            </ul>

            <p className="text-lg text-gray-700 italic border-l-4 border-royal-blue pl-4 py-1">
              Our ultimate goal is to help shape a future where AI drives
              innovation, inclusion, and long-term prosperity for businesses,
              governments, and communities.
            </p>
          </div>

          {/* Right column - Image or graphic */}
          <div className="relative bg-deep-navy text-white p-12 rounded-lg overflow-hidden min-h-[450px] flex flex-col justify-center">
            {/* Background image with opacity */}
            <div
              className="absolute inset-0 opacity-15"
              style={{
                backgroundImage: 'url("/people.png")',
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            ></div>

            {/* Content */}
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-6">
                AI Solutions for Organizations
              </h3>
              <p className="mb-8">
                We collaborate with leading organizations to deliver tailored AI
                education that supports strategic business goals. Our programs
                for organizations help drive executive-level decision-making
                with AI insights that transform strategy and operations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

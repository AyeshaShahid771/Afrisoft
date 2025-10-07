"use client";

import React from "react";

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="bg-pale-blue/20 py-0 px-4 md:px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-xl md:text-3xl font-bold text-deep-navy mb-6 md:mb-8 text-center">
          Why Choose Us
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 md:gap-8">
          {/* Item 1 */}
          <div className="bg-white p-3 sm:p-6 md:p-8 rounded-lg shadow-sm transform transition-transform hover:scale-[1.02] hover:shadow-md">
            <div className="mb-2 sm:mb-4 text-royal-blue">
              <svg
                width="28"
                height="28"
                className="sm:w-10 sm:h-10"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  opacity="0.2"
                />
                <path
                  d="M12 22C14.6522 22 17.1957 20.9464 19.0711 19.0711C20.9464 17.1957 22 14.6522 22 12C22 9.34784 20.9464 6.8043 19.0711 4.92893C17.1957 3.05357 14.6522 2 12 2"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  opacity="0.6"
                />
                <path
                  d="M13 7.5C13 8.05228 12.5523 8.5 12 8.5C11.4477 8.5 11 8.05228 11 7.5C11 6.94772 11.4477 6.5 12 6.5C12.5523 6.5 13 6.94772 13 7.5Z"
                  fill="currentColor"
                />
                <path
                  d="M13 16.5C13 17.0523 12.5523 17.5 12 17.5C11.4477 17.5 11 17.0523 11 16.5C11 15.9477 11.4477 15.5 12 15.5C12.5523 15.5 13 15.9477 13 16.5Z"
                  fill="currentColor"
                />
                <path
                  d="M7.5 13C8.05228 13 8.5 12.5523 8.5 12C8.5 11.4477 8.05228 11 7.5 11C6.94772 11 6.5 11.4477 6.5 12C6.5 12.5523 6.94772 13 7.5 13Z"
                  fill="currentColor"
                />
                <path
                  d="M16.5 13C17.0523 13 17.5 12.5523 17.5 12C17.5 11.4477 17.0523 11 16.5 11C15.9477 11 15.5 11.4477 15.5 12C15.5 12.5523 15.9477 13 16.5 13Z"
                  fill="currentColor"
                />
                <path
                  d="M9 9L11 11"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M13 13L15 15"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M9 15L11 13"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M13 11L15 9"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-deep-navy mb-2 sm:mb-3">
              Regional Expertise
            </h3>
            <p className="text-xs sm:text-sm md:text-base text-gray-700">
              Expertise in AI transformation and digital readiness, focused on
              the GCC.
            </p>
          </div>

          {/* Item 2 */}
          <div className="bg-white p-3 sm:p-6 md:p-8 rounded-lg shadow-sm transform transition-transform hover:scale-[1.02] hover:shadow-md">
            <div className="mb-2 sm:mb-4 text-royal-blue">
              <svg
                width="28"
                height="28"
                className="sm:w-9 sm:h-9"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  opacity="0.4"
                />
                <path
                  d="M7.99998 3H8.99998C7.04998 8.84 7.04998 15.16 8.99998 21H7.99998"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15 3C16.95 8.84 16.95 15.16 15 21"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3 16V15C8.84 16.95 15.16 16.95 21 15V16"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3 8.99998C8.84 7.04998 15.16 7.04998 21 8.99998"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-deep-navy mb-2 sm:mb-3">
              Academic Leadership
            </h3>
            <p className="text-xs sm:text-sm md:text-base text-gray-700">
              Backed by PhD-level leadership and international collaborations.
            </p>
          </div>

          {/* Item 3 */}
          <div className="bg-white p-3 sm:p-6 md:p-8 rounded-lg shadow-sm transform transition-transform hover:scale-[1.02] hover:shadow-md">
            <div className="mb-2 sm:mb-4 text-royal-blue">
              <svg
                width="28"
                height="28"
                className="sm:w-9 sm:h-9"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 2V5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16 2V5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3.5 9.08997H20.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  opacity="0.4"
                />
                <path
                  d="M15.6947 13.7H15.7037"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15.6947 16.7H15.7037"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M11.9955 13.7H12.0045"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M11.9955 16.7H12.0045"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.29431 13.7H8.30329"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.29431 16.7H8.30329"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-deep-navy mb-2 sm:mb-3">
              Practical Approach
            </h3>
            <p className="text-xs sm:text-sm md:text-base text-gray-700">
              Practical, industry-driven case studies and real-world
              problem-solving.
            </p>
          </div>

          {/* Item 4 */}
          <div className="bg-white p-3 sm:p-6 md:p-8 rounded-lg shadow-sm transform transition-transform hover:scale-[1.02] hover:shadow-md">
            <div className="mb-2 sm:mb-4 text-royal-blue">
              <svg
                width="28"
                height="28"
                className="sm:w-10 sm:h-10"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Circle background */}
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  opacity="0.15"
                />

                {/* Central person */}
                <circle
                  cx="12"
                  cy="9"
                  r="2.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path
                  d="M12 12.5V17.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path
                  d="M9.5 15H14.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />

                {/* Left person */}
                <circle
                  cx="6"
                  cy="10"
                  r="1.8"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  opacity="0.8"
                />
                <path
                  d="M6 12.5V16"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  opacity="0.8"
                />
                <path
                  d="M4 14H8"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  opacity="0.8"
                />

                {/* Right person */}
                <circle
                  cx="18"
                  cy="10"
                  r="1.8"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  opacity="0.8"
                />
                <path
                  d="M18 12.5V16"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  opacity="0.8"
                />
                <path
                  d="M16 14H20"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  opacity="0.8"
                />

                {/* Connection lines */}
                <path
                  d="M9 9.5L7.5 10"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeDasharray="0.5 1"
                />
                <path
                  d="M15 9.5L16.5 10"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeDasharray="0.5 1"
                />

                {/* Flag/Banner element */}
                <path d="M12 4.5V2.5" stroke="currentColor" strokeWidth="1.5" />
                <path
                  d="M12 2.5C14.5 2.5 17 3.5 17 3.5V6.5C17 6.5 14.5 5.5 12 5.5C9.5 5.5 7 6.5 7 6.5V3.5C7 3.5 9.5 2.5 12 2.5Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  fill="none"
                />
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-deep-navy mb-2 sm:mb-3">
              Regional Alignment
            </h3>
            <p className="text-xs sm:text-sm md:text-base text-gray-700">
              Strategic partnership with regional initiatives and commitment to
              advancing Saudi Vision 2030 priorities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  // Function for smooth scrolling to element
  const scrollToSection = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  return (
    <footer className="bg-deep-navy text-white pt-0 pb-10 px-4 md:px-6 -mt-1">
      <div className="container mx-auto max-w-6xl">
        <hr className="border-white/10 mb-8" />

        <div className="pb-8 mb-6">
          <div className="flex flex-col md:flex-row justify-between w-full">
            <div className="flex flex-col items-center mb-6 md:mb-0 md:items-start">
              <div className="bg-deep-navy rounded overflow-hidden mb-4">
                <Image
                  src="/logo.png"
                  alt="Afrisoft Logo"
                  width={80}
                  height={30}
                  className="object-contain"
                  quality={100}
                  priority
                />
              </div>
              <div className="flex flex-col items-center md:items-start">
                <a
                  href="https://www.linkedin.com/in/ahmad-hassan-afridi-ph-d-46276521?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-sm text-white/75 hover:text-pale-blue"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-4 h-4 mr-2"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                  Afrisoft AI Consultants
                </a>
                <a
                  href="mailto:ahmad.afridi@gmail.com"
                  className="flex items-center text-sm text-white/75 hover:text-pale-blue mt-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-4 h-4 mr-2"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </svg>
                  info@afrisoftai.com
                </a>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8 md:gap-16 lg:gap-24 md:mt-8">
              <div className="flex flex-col items-center md:items-start md:w-32 md:pt-1">
                <h3 className="font-bold text-sm mb-3 uppercase tracking-wider text-center md:text-left">
                  Programs
                </h3>
                <div className="mb-3 text-center md:text-left">
                  <p className="text-sm text-white/80 leading-tight">
                    Conferences Seminar and
                  </p>
                  <p className="text-sm text-white/80 leading-tight">
                    Workshops
                  </p>
                </div>
                <ul className="space-y-2 text-sm text-white/70 text-center md:text-left">
                  <li>
                    <Link href="/executive-ed" className="hover:text-pale-blue">
                      Executive Education
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/research-consultancy"
                      className="hover:text-pale-blue whitespace-nowrap"
                    >
                      Research Consultancy
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col items-center md:items-start md:w-32 md:pt-1">
                <h3 className="font-bold text-sm mb-3 uppercase tracking-wider text-center md:text-left">
                  About
                </h3>
                <ul className="space-y-2 text-sm text-white/70 text-center md:text-left">
                  <li>
                    <a
                      href="#core-offerings"
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection("core-offerings");
                      }}
                      className="hover:text-pale-blue cursor-pointer"
                    >
                      Our Core Offering
                    </a>
                  </li>
                  <li>
                    <a
                      href="#why-choose-us"
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection("why-choose-us");
                      }}
                      className="hover:text-pale-blue cursor-pointer"
                    >
                      Why Choose Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-sm text-white/70">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="mb-4 md:mb-0 text-center md:text-left">
              © {new Date().getFullYear()} Afrisoft AI Consultants. All rights
              reserved.
            </p>

            <div className="flex items-center">
              <Link href="/privacy" className="hover:text-pale-blue">
                Privacy Policy
              </Link>
              <span className="mx-2 text-white/40">·</span>
              <Link href="/terms" className="hover:text-pale-blue">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

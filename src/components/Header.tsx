"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="bg-deep-navy w-full py-2 md:py-3 px-4 md:px-10 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center -ml-2 md:-ml-8">
          <Link href="/" className="flex items-center z-20">
            <Image
              src="/logo.png"
              alt="Afrisoft Logo"
              width={60}
              height={30}
              className="object-contain py-0 md:w-[240px] md:h-[80px]"
              priority
              quality={100}
            />
          </Link>
        </div>

        <NavigationMenu>
          <NavigationMenuList className="hidden md:flex space-x-6">
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className="text-white hover:text-pale-blue">
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/executive-ed" legacyBehavior passHref>
                <NavigationMenuLink className="text-white hover:text-pale-blue">
                  Executive Ed
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/research-consultancy" legacyBehavior passHref>
                <NavigationMenuLink className="text-white hover:text-pale-blue">
                  Research Consultancy
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/clients" legacyBehavior passHref>
                <NavigationMenuLink className="text-white hover:text-pale-blue">
                  Our Clients
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/events" legacyBehavior passHref>
                <NavigationMenuLink className="text-white hover:text-pale-blue">
                  Events
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/contact" legacyBehavior passHref>
                <NavigationMenuLink className="text-white hover:text-pale-blue">
                  Contact Us
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/about" legacyBehavior passHref>
                <NavigationMenuLink className="text-white hover:text-pale-blue">
                  About
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile menu button */}
        <div className="md:hidden z-20">
          <button 
            className="text-white p-2" 
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu overlay */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 bg-deep-navy z-10 md:hidden flex flex-col items-center justify-center">
            <nav className="flex flex-col items-center space-y-6">
              <Link 
                href="/" 
                className="text-white text-lg font-medium hover:text-pale-blue"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/executive-ed" 
                className="text-white text-lg font-medium hover:text-pale-blue"
                onClick={() => setMobileMenuOpen(false)}
              >
                Executive Ed
              </Link>
              <Link 
                href="/research-consultancy" 
                className="text-white text-lg font-medium hover:text-pale-blue"
                onClick={() => setMobileMenuOpen(false)}
              >
                Research Consultancy
              </Link>
              <Link 
                href="/clients" 
                className="text-white text-lg font-medium hover:text-pale-blue"
                onClick={() => setMobileMenuOpen(false)}
              >
                Our Clients
              </Link>
              <Link 
                href="/events" 
                className="text-white text-lg font-medium hover:text-pale-blue"
                onClick={() => setMobileMenuOpen(false)}
              >
                Events
              </Link>
              <Link 
                href="/contact" 
                className="text-white text-lg font-medium hover:text-pale-blue"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact Us
              </Link>
              <Link 
                href="/about" 
                className="text-white text-lg font-medium hover:text-pale-blue"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

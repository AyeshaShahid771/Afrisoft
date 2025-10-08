"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Import modular section components
import HeroSection from "./components/HeroSection";
import IntroductionSection from "./components/IntroductionSection";
import OfferingsSection from "./components/OfferingsSection";
import WhyChooseUsSection from "./components/WhyChooseUsSection";
import ImpactSection from "./components/ImpactSection";
import DownloadSection from "./components/DownloadSection";

// Page title and description are handled in layout.tsx
export default function ExecutiveEducation() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        <HeroSection />
        <IntroductionSection />
        <OfferingsSection />
        <WhyChooseUsSection />
        <ImpactSection />
        <DownloadSection />
      </main>

      <Footer />
    </div>
  );
}

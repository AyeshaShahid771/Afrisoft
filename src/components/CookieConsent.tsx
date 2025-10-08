"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    // Check if user has already given consent
    const consentGiven = localStorage.getItem("cookieConsent");
    if (!consentGiven) {
      setShowConsent(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "true");
    setShowConsent(false);
  };

  const declineCookies = () => {
    // In this case we still need to store the preference
    localStorage.setItem("cookieConsent", "false");
    setShowConsent(false);

    // You would normally disable any non-essential cookies/tracking here
  };

  if (!showConsent) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-deep-navy text-white p-4 shadow-lg z-50">
      <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm md:text-base">
          <p>
            This website uses necessary cookies to ensure you get the best
            experience.{" "}
            <Link href="/privacy" className="underline hover:text-pale-blue">
              Learn more
            </Link>
          </p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={declineCookies}
            className="px-4 py-2 text-sm bg-transparent border border-white hover:bg-white hover:text-deep-navy rounded transition-colors"
          >
            Decline
          </button>
          <button
            onClick={acceptCookies}
            className="px-4 py-2 text-sm bg-royal-blue hover:bg-azure-blue text-white rounded transition-colors"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}

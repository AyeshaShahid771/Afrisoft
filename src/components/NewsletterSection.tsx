"use client";

import React from "react";
import Link from "next/link";

export default function NewsletterSection() {
  return (
    <section className="bg-deep-navy text-white pt-10 pb-0 px-4 md:px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center pb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Stay Connected
          </h2>
          <p className="max-w-2xl mx-auto text-white/80 mb-5">
            Join our mailing list to receive updates on upcoming programs, AI
            insights, and exclusive events.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3 bg-royal-blue hover:bg-azure-blue text-white rounded-md font-semibold transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}

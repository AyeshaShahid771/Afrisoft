import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Terms of Service | Afrisoft AI Consultants",
  description:
    "Terms of Service for Afrisoft AI Consultants - Learn about the conditions governing the use of our website and services.",
};

export default function TermsOfService() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-12 px-4 md:px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-bold text-deep-navy mb-8">
            Terms of Service
          </h1>

          <div className="prose max-w-none">
            <p className="text-lg mb-6">Last updated: October 7, 2025</p>

            <h2 className="text-2xl font-bold mb-4 mt-8">1. Introduction</h2>
            <p>
              Welcome to Afrisoft AI Consultants. These terms and conditions
              outline the rules and regulations for the use of Afrisoft AI
              Consultants' website.
            </p>
            <p>
              By accessing this website, we assume you accept these terms and
              conditions in full. If you disagree with these terms and
              conditions, you must not use our website.
            </p>

            <h2 className="text-2xl font-bold mb-4 mt-8">
              2. Intellectual Property
            </h2>
            <p>
              Unless stated otherwise, Afrisoft AI Consultants and/or its
              licensors own the intellectual property rights for all material on
              this website. All intellectual property rights are reserved. You
              may view and/or print pages from this website for your own
              personal use, subject to restrictions set in these terms and
              conditions.
            </p>
            <p>You must not:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>Republish material from this website</li>
              <li>Sell, rent, or sub-license material from this website</li>
              <li>Reproduce, duplicate, or copy material from this website</li>
              <li>Redistribute content from this website</li>
            </ul>

            <h2 className="text-2xl font-bold mb-4 mt-8">3. Disclaimer</h2>
            <p>
              The materials on Afrisoft AI Consultants' website are provided on
              an 'as is' basis. Afrisoft AI Consultants makes no warranties,
              expressed or implied, and hereby disclaims and negates all other
              warranties, including without limitation, implied warranties or
              conditions of merchantability, fitness for a particular purpose,
              or non-infringement of intellectual property.
            </p>

            <h2 className="text-2xl font-bold mb-4 mt-8">4. Limitations</h2>
            <p>
              In no event shall Afrisoft AI Consultants or its suppliers be
              liable for any damages (including, without limitation, damages for
              loss of data or profit, or due to business interruption) arising
              out of the use or inability to use the materials on Afrisoft AI
              Consultants' website, even if Afrisoft AI Consultants or an
              authorized representative has been notified orally or in writing
              of the possibility of such damage.
            </p>

            <h2 className="text-2xl font-bold mb-4 mt-8">
              5. Links to Other Websites
            </h2>
            <p>
              Our website may contain links to external websites that are not
              provided or maintained by us. We do not guarantee the accuracy,
              relevance, timeliness, or completeness of any information on these
              external websites.
            </p>

            <h2 className="text-2xl font-bold mb-4 mt-8">
              6. Modifications to Terms
            </h2>
            <p>
              Afrisoft AI Consultants may revise these terms of use for its
              website at any time without notice. By using this website, you are
              agreeing to be bound by the current version of these terms of
              service.
            </p>

            <h2 className="text-2xl font-bold mb-4 mt-8">7. Governing Law</h2>
            <p>
              These terms and conditions are governed by and construed in
              accordance with the laws, and you irrevocably submit to the
              exclusive jurisdiction of the courts in that location.
            </p>

            <h2 className="text-2xl font-bold mb-4 mt-8">
              8. Contact Information
            </h2>
            <p>
              If you have any questions about these Terms of Service, please
              contact us at:
            </p>
            <p className="mb-6">
              Email: ahmad.afridi@gmail.com
              <br />
              Afrisoft AI Consultants
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

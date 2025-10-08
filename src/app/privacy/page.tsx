import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Privacy Policy | Afrisoft AI Consultants",
  description:
    "Privacy Policy for Afrisoft AI Consultants - Learn how we protect your data and comply with GDPR regulations.",
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-12 px-4 md:px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-bold text-deep-navy mb-8">
            Privacy Policy
          </h1>

          <div className="prose max-w-none">
            <p className="text-lg mb-6">Last updated: October 7, 2025</p>

            <h2 className="text-2xl font-bold mb-4 mt-8">1. Introduction</h2>
            <p>
              Afrisoft AI Consultants ("we", "our", or "us") respects your
              privacy and is committed to protecting your personal data. This
              privacy policy will inform you about how we look after your
              personal data when you visit our website and tell you about your
              privacy rights and how the law protects you.
            </p>

            <h2 className="text-2xl font-bold mb-4 mt-8">2. Data We Collect</h2>
            <p>We collect minimal personal information through our website:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>
                Technical data including IP address, browser type and version,
                time zone setting and location, operating system and platform
              </li>
              <li>
                Usage data including information about how you use our website
              </li>
            </ul>

            <h2 className="text-2xl font-bold mb-4 mt-8">
              3. How We Use Your Data
            </h2>
            <p>We use your data to:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>
                Administer and protect our website (troubleshooting, data
                analysis, testing, system maintenance)
              </li>
              <li>Improve our website and user experience</li>
              <li>Measure the effectiveness of our content</li>
            </ul>

            <h2 className="text-2xl font-bold mb-4 mt-8">4. Cookies</h2>
            <p>
              We use necessary cookies to ensure our website functions properly.
              These cookies are essential for the basic functionality of our
              website and cannot be disabled.
            </p>

            <h2 className="text-2xl font-bold mb-4 mt-8">5. Your Rights</h2>
            <p>Under GDPR, you have the following rights:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>Right to access your personal data</li>
              <li>
                Right to rectification if your personal data is inaccurate
              </li>
              <li>Right to erasure of your personal data</li>
              <li>Right to restrict processing of your personal data</li>
              <li>Right to data portability</li>
              <li>Right to object to processing of your personal data</li>
            </ul>

            <h2 className="text-2xl font-bold mb-4 mt-8">
              6. Third-Party Links
            </h2>
            <p>
              Our website may include links to third-party websites. Clicking on
              those links may allow third parties to collect or share data about
              you. We do not control these third-party websites and are not
              responsible for their privacy statements.
            </p>

            <h2 className="text-2xl font-bold mb-4 mt-8">7. Data Security</h2>
            <p>
              We have implemented appropriate security measures to prevent your
              personal data from being accidentally lost, used or accessed in an
              unauthorized way, altered or disclosed. We limit access to your
              personal data to those employees, agents, contractors and other
              third parties who have a business need to know.
            </p>

            <h2 className="text-2xl font-bold mb-4 mt-8">
              8. Contact Information
            </h2>
            <p>
              If you have any questions about this privacy policy or our privacy
              practices, please contact us at:
            </p>
            <p className="mb-6">
              Email: ahmad.afridi@gmail.com
              <br />
              Afrisoft AI Consultants
            </p>

            <h2 className="text-2xl font-bold mb-4 mt-8">
              9. Changes to This Policy
            </h2>
            <p>
              We may update our privacy policy from time to time. We will notify
              you of any changes by posting the new privacy policy on this page
              and updating the "last updated" date.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

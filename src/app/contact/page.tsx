import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ContactCard from "./components/ContactCard";

function ContactHero() {
  return (
    <section className="bg-gradient-to-r from-[#071a4b] to-[#0b57a6] text-white py-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold">Get in touch</h2>
        <p className="mt-4 text-sm md:text-lg opacity-90 max-w-2xl mx-auto">
          We’re happy to chat about consultation, course and guidance.
        </p>
      </div>
    </section>
  );
}

export const metadata = {
  title: "Contact Us — Afrisoft",
};

export default function ContactPage() {
  return (
    <>
      <Header />

      <main className="bg-white md:min-h-screen">
        <ContactHero />

        <section className="mx-auto max-w-5xl px-6 py-8 md:py-12 grid grid-cols-2 gap-6">
          <ContactCard
            title="Email Us"
            subtitle="Get in contact — we’re happy to discuss consultation, courses, and guidance."
            href="mailto:info@afrisoftai.com"
            accent="from-[#0b57a6] to-[#071a4b]"
            ariaLabel="Email Afrisoft"
            icon={
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8 mr-4"
              >
                <rect
                  width="20"
                  height="16"
                  x="2"
                  y="4"
                  rx="2"
                  stroke="#071a4b"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
                <path
                  d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"
                  stroke="#071a4b"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
              </svg>
            }
          >
            info@afrisoftai.com
          </ContactCard>

          <ContactCard
            title="Connect on LinkedIn"
            subtitle="Find our team and company page"
            href="https://www.linkedin.com/in/ahmad-hassan-afridi-ph-d-46276521/"
            external
            accent="from-[#071a4b] to-[#0b57a6]"
            ariaLabel="Ahmad Hassan Afridi LinkedIn"
            icon={
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8 mr-4"
              >
                <path
                  d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
                  stroke="#071a4b"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
                <rect x="2" y="9" width="4" height="12" fill="#071a4b" />
                <circle cx="4" cy="4" r="2" fill="#071a4b" />
              </svg>
            }
          >
            linkedin.com/in/ahmad-hassan-afridi-ph-d-46276521
          </ContactCard>
        </section>
      </main>

      <Footer />
    </>
  );
}

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "./components/Hero";
import Expertise from "./components/Expertise";
import Offerings from "./components/Offerings";
import WhyPartner from "./components/WhyPartner";
import CTA from "./components/CTA";

export const metadata = {
  title: "Research Consultancy | Afrisoft AI Consultants",
  description:
    "Human-Centred AI research consultancy, policy advisory, custom studies, and training.",
};

export default function ResearchConsultancyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow bg-white text-gray-900">
        <Hero />

        {/* Expertise — full width section */}
        <section className="container mx-auto max-w-6xl px-4 py-12">
          <Expertise />
        </section>

        {/* Offerings — stacked below Expertise */}
        <section className="container mx-auto max-w-6xl px-4 py-12 border-t border-gray-100">
          <Offerings />
        </section>

        <WhyPartner />

        <CTA />
      </main>

      <Footer />
    </div>
  );
}

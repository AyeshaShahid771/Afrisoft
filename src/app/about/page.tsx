import Header from "../../components/Header";
import Footer from "../../components/Footer";
import AboutHero from "./components/AboutHero";
import History from "./components/History";
import Founders from "./components/Founders";

export const metadata = {
  title: "About — Afrisoft AI Consultants",
};

export default function AboutPage() {
  return (
    <>
      <Header />

      <main className="bg-white">
        <AboutHero />
        <History />
        <Founders />

        <section className="bg-gradient-to-r from-[#071a4b] to-[#0b57a6] text-white py-12">
          <div className="container mx-auto px-6 text-center">
            <h3 className="text-xl md:text-2xl font-bold">Looking ahead</h3>
            <p className="mt-3 max-w-3xl mx-auto opacity-90">
              Afrisoft will continue to publish research, run executive
              education, and build partnerships that bring ethical, practical AI
              to organizations across the GCC and beyond.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

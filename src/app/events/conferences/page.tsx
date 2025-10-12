import Header from "../../../components/Header";
import Hero from "../components/Hero";
import Footer from "../../../components/Footer";

export const metadata = {
  title: "Conferences, Seminars & Workshops — Afrisoft Events",
};

export default function ConferencesPage() {
  return (
    <>
      <Header />
      <Hero />

      <div className="px-4 md:px-6 lg:px-12 xl:px-16">
        <main className="container mx-auto pt-4 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
            {/* On mobile show content first (left) and image second (right). On md keep original grid columns. */}
            <aside className="order-2 md:order-1 md:col-span-5">
              <div className="sticky top-24">
                <div className="overflow-hidden rounded-3xl shadow-2xl border border-white/5">
                  <img
                    src="/image.jpeg"
                    alt="Event hero"
                    className="w-full h-[240px] md:h-[700px] object-cover"
                  />
                </div>
              </div>
            </aside>

            {/* Right: content column (on mobile we force it to appear first/left) */}
            <div className="order-1 md:order-2 md:col-span-7 flex flex-col gap-6">
              <div className="bg-white/95 p-10 rounded-3xl shadow-xl border border-white/5">
                <span className="text-sm text-royal-blue font-medium">
                  Event Brief
                </span>
                <h1 className="mt-3 text-2xl md:text-5xl font-extrabold text-deep-navy leading-tight">
                  UET Session: AI in Civil Engineering
                </h1>
                <p className="mt-4 text-sm md:text-lg text-gray-700 leading-relaxed max-w-3xl">
                  Peshawar, September 30, 2025 — The University of Engineering
                  and Technology (UET) hosted an insightful session with
                  experienced civil engineers from the C&W Department, focusing
                  on the transformative role of Artificial Intelligence (AI) in
                  civil engineering practices.
                </p>

                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 md:p-6 bg-white rounded-2xl shadow-sm border-l-4 border-royal-blue">
                    <h4 className="font-semibold text-deep-navy text-base md:text-lg">
                      Discussion highlights
                    </h4>
                    <p className="mt-2 text-sm md:text-base text-gray-700">
                      The discussion explored how AI can revolutionize the
                      sector, from smarter design processes and predictive
                      maintenance to enhanced infrastructure management and
                      long-term sustainability. Participants highlighted the
                      opportunities for data-driven decision-making, reduced
                      costs, and improved public safety.
                    </p>
                  </div>

                  <div className="p-4 md:p-6 bg-white rounded-2xl shadow-sm">
                    <h4 className="font-semibold text-deep-navy text-base md:text-lg">
                      Next steps
                    </h4>
                    <p className="mt-2 text-sm md:text-base text-gray-700">
                      The session underscored the openness of civil engineers to
                      embrace innovation, signaling a strong willingness to
                      bridge the gap between conventional practices and modern
                      AI-driven approaches. Moving forward, the collaboration
                      aims to identify pilot projects, conduct specialized
                      workshops, and explore practical pathways to embed AI
                      within civil engineering processes in Pakistan.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Full-bleed elegant offerings band */}
        <section className="pt-6 md:pt-0 mt-0 bg-transparent pb-16">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 items-stretch">
              <div className="transform hover:-translate-y-2 transition rounded-2xl overflow-hidden shadow-2xl">
                <div className="bg-gradient-to-r from-[#0b57a6] to-[#071a4b] p-4 md:p-6 text-white w-full flex flex-col justify-center items-center text-center min-h-[180px] md:min-h-[300px] ring-1 ring-white/10">
                  <h3 className="text-lg md:text-2xl font-extrabold text-white">
                    Workshops
                  </h3>
                  <p className="mt-2 text-sm md:text-base text-white">
                    Hands-on sessions to build practical skills for your team.
                  </p>
                </div>
              </div>

              <div className="transform hover:-translate-y-2 transition rounded-2xl overflow-hidden shadow-2xl">
                <div className="bg-gradient-to-r from-[#0b57a6] to-[#071a4b] p-4 md:p-6 text-white w-full flex flex-col justify-center items-center text-center min-h-[180px] md:min-h-[300px] ring-1 ring-white/10">
                  <h3 className="text-lg md:text-2xl font-extrabold text-white">
                    Seminars
                  </h3>
                  <p className="mt-2 text-sm md:text-base text-white">
                    Focused talks on ethics, governance and sector-specific
                    opportunities.
                  </p>
                </div>
              </div>

              <div className="transform hover:-translate-y-2 transition rounded-2xl overflow-hidden shadow-2xl col-span-2 md:col-span-1">
                <div className="bg-gradient-to-r from-[#0b57a6] to-[#071a4b] p-4 md:p-6 text-white w-full flex flex-col justify-center items-center text-center min-h-[180px] md:min-h-[300px] ring-1 ring-white/10">
                  <h3 className="text-lg md:text-2xl font-extrabold text-white">
                    Executive Programs
                  </h3>
                  <p className="mt-2 text-sm md:text-base text-white">
                    Custom executive education for leadership and strategic
                    teams.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}

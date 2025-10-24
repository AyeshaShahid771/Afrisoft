import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="container mx-auto px-4 py-6 md:py-16">
      <div className="flex flex-row items-center gap-4 md:grid md:grid-cols-12 md:items-center md:gap-8">
        <div className="flex-1 min-w-0 pr-3 md:col-span-7">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold leading-tight">
            Afrisoft AI Consultants
          </h1>
          <p className="mt-3 text-sm md:text-lg text-slate-600 max-w-xl">
            Research-led AI consultancy — executive education, applied research
            and ethical, human-centered AI for organisations.
          </p>

          <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-lg">
            <div className="bg-gradient-to-r from-[#0b57a6] to-[#071a4b] text-white px-3 py-2 rounded-lg shadow">
              <h4 className="font-semibold text-sm">Founded</h4>
              <p className="text-xs opacity-90">
                2023 — Research & industry bridge
              </p>
            </div>

            <div className="bg-white border px-3 py-2 rounded-lg shadow">
              <h4 className="font-semibold text-sm">Focus</h4>
              <p className="text-xs opacity-90">
                Executive education · Health digital twins · Recommenders
              </p>
            </div>
          </div>
        </div>

        <div className="flex-shrink-0 md:col-span-5 flex justify-end">
          <div className="w-36 h-48 sm:w-44 sm:h-56 md:w-96 md:h-96 lg:w-[520px] lg:h-[520px] rounded-xl overflow-hidden ring-4 ring-white/60 shadow-lg">
            <Image
              src="/profile.jpeg"
              alt="Dr Ahmad Hassan Afridi"
              width={720}
              height={720}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

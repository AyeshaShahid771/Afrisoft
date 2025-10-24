import Image from "next/image";

export default function ContactHero() {
  return (
    <section className="bg-gradient-to-r from-[#071a4b] to-[#0b57a6] text-white py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-7 text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold">
              Get in touch
            </h2>
            <p className="mt-3 text-xs sm:text-sm md:text-lg opacity-90 max-w-2xl mx-auto md:mx-0">
              We’re happy to discuss consultations, courses, and guidance.
            </p>
          </div>

          <div className="md:col-span-5 flex justify-center md:justify-end">
            <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-72 md:h-72 rounded-xl overflow-hidden ring-4 ring-white/60 shadow-lg">
              <Image
                src="/h1.jpg"
                alt="Contact us"
                width={720}
                height={720}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

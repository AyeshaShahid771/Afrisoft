import Image from "next/image";

export default function Hero() {
  return (
  <header className="relative w-full py-12 md:py-16 lg:py-20 bg-deep-navy">
      <div className="container mx-auto max-w-4xl px-6 text-center">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
          Research Consultancy for Human‑Centred AI
        </h1>

        <p className="mt-6 text-sm md:text-base text-white/95 max-w-3xl mx-auto">
          Afrisoft combine academic rigour and practical experience to make AI systems that are transparent, fair and trusted by people. From research collaboration and user studies to policy advisory and digital twins — we help organisations deploy responsible AI.
        </p>
      </div>
    </header>
  );
}

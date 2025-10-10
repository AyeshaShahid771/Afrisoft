import Image from "next/image";

export default function CTA() {
  return (
    <section className="container mx-auto max-w-6xl px-4 py-12">
      <div className="bg-deep-navy text-white rounded-lg p-8 md:p-12 flex flex-col md:flex-row items-center gap-6">
        <div className="flex-1">
          <h3 className="text-xl md:text-2xl font-bold mb-2">
            Ready to collaborate?
          </h3>
          <p className="text-white/90 mb-4">
            Contact us to discuss research partnerships, bespoke studies, or
            training programs.
          </p>
          {/* Buttons removed per request */}
        </div>
        <div className="w-[220px] md:w-[320px]">
          <Image
            src="/contact.jpeg"
            alt="Research Consultancy"
            width={600}
            height={420}
            className="object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}

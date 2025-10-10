import Image from "next/image";

export default function Offerings() {
  const offerings = [
    {
      title: "Research Collaboration",
      body: "With universities, think tanks, and government agencies on HCAI-focused projects.",
    },
    {
      title: "Custom Studies & Experiments",
      body: "To test AI systems with real users, ensuring compliance with international best practices.",
    },
    {
      title: "Policy & Ethics Advisory",
      body: "For governments and organizations developing national or corporate AI strategies.",
    },
    {
      title: "Training & Knowledge Transfer",
      body: "On HCAI methods, frameworks, and case studies for research labs, NGOs, and private companies.",
    },
  ];

  return (
    <section className="research-offerings">
      <div className="bg-white/60 backdrop-blur-sm rounded-xl">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start">
            <div className="col-span-1 md:col-span-5 md:order-2 md:col-start-8">
              <div className="w-full">
                <img src="/offer.jpg" alt="Research imagery" className="w-full h-[220px] md:h-[420px] object-cover rounded-2xl mb-6 md:mb-0" />
              </div>
            </div>

            <div className="col-span-1 md:col-span-7 md:order-1">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-1 h-10 bg-royal-blue rounded" />
                <h3 className="text-3xl font-extrabold text-deep-navy">What We Offer</h3>
              </div>

              <p className="text-sm md:text-base text-gray-700 mb-6">We work with partners across academia, government, and industry to deliver research, policy and training that helps organisations develop responsible AI practices.</p>

              <div className="space-y-8">
                {offerings.map((o, idx) => (
                  <div key={o.title}>
                    <h4 className="font-semibold text-deep-navy text-lg">{o.title}</h4>
                    <p className="mt-2 text-base text-gray-700">{o.body}</p>
                    {idx < offerings.length - 1 && <hr className="mt-8 border-gray-100" />}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

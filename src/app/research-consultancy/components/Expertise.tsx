import Image from "next/image";

export default function Expertise() {
  const items = [
    {
      title: "Transparency & Explainability",
      body: "Designing AI systems that can be understood by end-users and stakeholders.",
      icon: (
        <svg className="w-6 h-6 text-royal-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 3C7.03 3 3 7.03 3 12s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9z" />
        </svg>
      ),
    },
    {
      title: "Fairness & Bias Reduction",
      body: "Identifying and mitigating algorithmic bias to support ethical and inclusive decision-making.",
      icon: (
        <svg className="w-6 h-6 text-royal-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2-1.343-2-3-2z" />
          <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M12 3v2" />
        </svg>
      ),
    },
    {
      title: "User Experience & Trust",
      body: "Studying how users interact with AI systems, and building solutions that foster trust, control, and positive adoption.",
      icon: (
        <svg className="w-6 h-6 text-royal-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M12 12c2.21 0 4-1.79 4-4S14.21 4 12 4 8 5.79 8 8s1.79 4 4 4z" />
          <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M6 20v-1a4 4 0 014-4h4a4 4 0 014 4v1" />
        </svg>
      ),
    },
    {
      title: "Digital Twins & Personalized AI",
      body: "Exploring user-centric AI in healthcare, smart cities, and industry, focusing on personalization and sustainability.",
      icon: (
        <svg className="w-6 h-6 text-royal-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M3 12h18M12 3v18" />
        </svg>
      ),
    },
  ];

  return (
  <section id="expertise" className="-mt-8 w-full">
      <div className="w-full bg-royal-blue/5 backdrop-blur-sm py-0">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="bg-white rounded-2xl p-6 md:p-12 shadow-xl">
            <div className="grid grid-cols-2 md:grid-cols-2 gap-8 items-start">
              <div>
                <h2 className="text-xl md:text-4xl font-extrabold text-deep-navy">Our Expertise</h2>
                <p className="mt-4 text-sm md:text-base text-gray-700 max-w-3xl">We design human-centred AI that is explainable, fair and trusted. Below are the research areas where we focus our work.</p>

                <div className="mt-8 space-y-8">
              <div className="flex items-start gap-6">
                <div>
                  <h3 className="text-base md:text-xl font-semibold text-deep-navy">Transparency & Explainability</h3>
                  <p className="mt-2 text-sm md:text-base text-gray-700">Designing AI systems that can be understood by end-users and stakeholders.</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div>
                  <h3 className="text-base md:text-xl font-semibold text-deep-navy">Fairness & Bias Reduction</h3>
                  <p className="mt-2 text-sm md:text-base text-gray-700">Identifying and mitigating algorithmic bias to support ethical and inclusive decision-making.</p>
                </div>
              </div>

              

              <div className="flex items-start gap-6">
                <div>
                  <h3 className="text-base md:text-xl font-semibold text-deep-navy">Digital Twins & Personalized AI</h3>
                  <p className="mt-2 text-sm md:text-base text-gray-700">Exploring user-centric AI in healthcare, smart cities, and industry, focusing on personalization and sustainability.</p>
                </div>
              </div>
                </div>
              </div>

              <div className="flex justify-end md:justify-end items-start">
                <div className="rounded-xl shadow-lg md:rounded-none md:shadow-none md:overflow-visible md:h-auto">
                  <img src="/expertise.jpeg" alt="Team" className="w-full md:w-[420px] md:h-[420px] object-contain md:rounded-none block" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

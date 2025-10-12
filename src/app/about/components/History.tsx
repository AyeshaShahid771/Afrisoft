import Image from "next/image";

const timeline = [
  {
    year: "2023",
    title: "Conceived by Dr. Ahmad Hassan Afridi",
    bullets: [
      "Idea formed after PhD in Human & Technology (Tampere University)",
      "Mission: bridge academic AI research with industry practice",
    ],
  },
  {
    year: "2024",
    title: "Brand & Early Initiatives",
    bullets: [
      "Afrisoft brand established; focus on ethical, human-centered AI",
      "Early work: recommender systems, healthcare digital twins, executive AI education",
    ],
  },
  {
    year: "Programs",
    title: "Executive Education & Training",
    bullets: [
      "5-day Harvard-style bootcamps for decision-makers",
      "Topics: AI ethics, generative AI, digital transformation, sustainability",
    ],
  },
  {
    year: "Consultancy",
    title: "Research-driven Applied Work",
    bullets: [
      "AI governance frameworks and LLM-powered recommenders",
      "Projects: TwinCare (breast cancer recommender) and S-RACK algorithm",
    ],
  },
  {
    year: "Future",
    title: "Aspirations",
    bullets: [
      "Become a leading AI consultancy across the GCC",
      "Organize international conferences, publish whitepapers, form strategic partnerships",
    ],
  },
];

export default function History() {
  return (
    <section className="container mx-auto px-6 py-12">
      <h3 className="text-xl md:text-2xl font-bold mb-6">History</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {timeline.map((item) => (
          <div key={item.title} className="relative bg-white border rounded-lg p-4 shadow-sm">
            <div className="absolute -top-3 right-4">
              <div className="bg-gradient-to-r from-[#0b57a6] to-[#071a4b] text-white px-2 py-0.5 rounded-full text-xs font-semibold">{item.year}</div>
            </div>

            <h4 className="font-semibold text-sm">{item.title}</h4>

            <ul className="mt-2 space-y-1 text-xs text-slate-600">
              {item.bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-2">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" className="mt-1 flex-shrink-0 text-[#0b57a6]">
                    <circle cx="12" cy="12" r="8" stroke="#0b57a6" strokeWidth="1.5" fill="#0b57a6" />
                  </svg>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

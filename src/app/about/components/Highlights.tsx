import Image from "next/image";

const cards = [
  { title: "Executive Education", desc: "5-day bootcamps for leaders" },
  {
    title: "Applied Research",
    desc: "Health digital twins & recommender systems",
  },
  { title: "Consultancy", desc: "AI governance and LLM solutions" },
];

export default function Highlights() {
  return (
    <section className="container mx-auto px-6 py-8">
      <h3 className="text-2xl font-bold mb-6">Highlights</h3>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {cards.map((c) => (
          <div key={c.title} className="bg-white rounded-xl shadow p-4 border">
            <h4 className="font-bold">{c.title}</h4>
            <p className="text-sm opacity-90 mt-2">{c.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

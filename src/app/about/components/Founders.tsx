const founders = [
  {
    name: "Dr. Ahmad Hassan Afridi",
    role: "Founder — PhD (Human & Technology)",
  },
  {
    name: "Dr. Fakhar E Alam Khan",
    role: "Co-founder — KFUPM, Saudi Arabia",
  },
];

export default function Founders() {
  return (
    <section className="container mx-auto px-6 py-8">
      <h3 className="text-xl font-semibold mb-4">Founders</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {founders.map((f) => (
          <div key={f.name} className="bg-white rounded-lg p-4 shadow-sm">
            <h4 className="font-semibold text-sm">{f.name}</h4>
            <p className="text-xs opacity-90 mt-1">{f.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

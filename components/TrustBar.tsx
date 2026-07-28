const markers = [
  { k: "Free", v: "Automation audit" },
  { k: "UK-wide", v: "Remote & in person" },
  { k: "AI + automation", v: "Not just software setup" },
  { k: "Senior only", v: "No juniors, no outsourcing" },
];

export default function TrustBar() {
  return (
    <section className="bg-white border-b border-gray-100 py-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6">
        {markers.map((m) => (
          <div key={m.k} className="text-center lg:text-left">
            <p className="font-extrabold text-[#25272C] text-base tracking-tight">{m.k}</p>
            <p className="text-sm text-[#6B7280]">{m.v}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

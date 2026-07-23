const steps = [
  {
    n: "1",
    title: "Discovery",
    body: "We spend time understanding how your business works — where the gaps are, what's being done manually that shouldn't be, and what a good system looks like for you.",
  },
  {
    n: "2",
    title: "Build",
    body: "We design and build your monday.com system. You're involved throughout. Nothing gets delivered that doesn't make sense to your team.",
  },
  {
    n: "3",
    title: "Ongoing",
    body: "Once you're live, we're available to maintain it, improve it, and build on it as your business evolves. Most clients stay with us on a monthly retainer.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-white py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs font-bold section-label text-[#0FA284] uppercase mb-4">Simple process. Real results.</p>
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#25272C] mb-20">
          Three steps from broken to working.
        </h2>
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-10">
          {/* Connecting line on desktop */}
          <div className="hidden md:block absolute top-7 left-[16.66%] right-[16.66%] h-px bg-gradient-to-r from-[#0FA284]/20 via-[#0FA284]/50 to-[#0FA284]/20 z-0" />
          {steps.map((s) => (
            <div key={s.n} className="relative z-10 flex flex-col items-start md:items-center text-left md:text-center group">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#25272C] to-[#3a3d45] text-white flex items-center justify-center font-extrabold text-xl mb-6 shrink-0 shadow-xl shadow-black/25 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                {s.n}
              </div>
              <h3 className="font-bold text-[#25272C] text-2xl mb-3 tracking-tight">{s.title}</h3>
              <p className="text-[#374151] text-[15px] leading-relaxed max-w-sm">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

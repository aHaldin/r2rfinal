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
    <section id="how-it-works" className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs font-semibold tracking-widest text-[#7C35BE] uppercase mb-3">Simple process. Real results.</p>
        <h2 className="text-3xl md:text-4xl font-bold text-[#1B2D50] mb-16">Three steps from broken to working.</h2>
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Connecting line on desktop */}
          <div className="hidden md:block absolute top-6 left-[16.66%] right-[16.66%] h-0.5 bg-[#E5E7EB] z-0" />
          {steps.map((s) => (
            <div key={s.n} className="relative z-10 flex flex-col items-start md:items-center text-left md:text-center">
              <div className="w-12 h-12 rounded-full bg-[#1B2D50] text-white flex items-center justify-center font-bold text-lg mb-4 shrink-0">
                {s.n}
              </div>
              <h3 className="font-bold text-[#1B2D50] text-xl mb-2">{s.title}</h3>
              <p className="text-[#374151] text-sm leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

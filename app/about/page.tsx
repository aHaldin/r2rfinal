import FinalCTA from "@/components/FinalCTA";

export const metadata = {
  title: "About | Road2Resolve",
};

const values = [
  { title: "Straight talking", body: "We tell you what you need, not what sounds impressive." },
  { title: "Built to last", body: "We don't build systems and disappear. We build things your team will actually use." },
  { title: "No fluff", body: "Every hour we spend on your business is focused on something that moves the needle." },
];

export default function AboutPage() {
  return (
    <>
      <section className="hero-glow text-white py-24 md:py-28 px-6 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern pointer-events-none" />
        <div className="max-w-6xl mx-auto relative">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-5 animate-fade-up">About Road2Resolve</h1>
          <p className="text-gray-300 text-lg md:text-xl animate-fade-up-1">A small team. A clear focus. Real results.</p>
        </div>
      </section>

      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#25272C] mb-6">Why we started Road2Resolve</h2>
            <div className="space-y-4 text-[#374151] leading-relaxed">
              <p>
                We kept seeing the same problem: good businesses being held back by operational chaos. Leads going cold, handovers being missed, teams working in silos. The fix usually isn&apos;t complicated — it just needs someone who knows what they&apos;re doing to build it properly.
              </p>
              <p>
                Road2Resolve is based in Folkestone, Kent. We work with clients across the UK, remotely and in person, on everything from a single audit to a fully embedded monthly partnership.
              </p>
              <p>
                We&apos;re a small team, and we like it that way. Every client works directly with us. Nothing gets outsourced or handed to a junior.
              </p>
            </div>
          </div>
          <div className="hero-glow rounded-3xl aspect-square flex items-center justify-center shadow-2xl shadow-black/25 relative overflow-hidden">
            <div className="absolute inset-0 grid-pattern pointer-events-none" />
            <div className="text-center px-8 relative">
              <p className="text-7xl font-extrabold text-white mb-2 tracking-tight">R²</p>
              <p className="text-xs text-gray-400 tracking-widest uppercase">Road2Resolve</p>
              <p className="text-xs text-gray-500 mt-2">Folkestone, Kent</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F5F7F6] py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-[#25272C] mb-8">How we work</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((v) => (
              <div key={v.title} className="card-lift bg-white rounded-2xl p-8 border border-gray-200/80 shadow-sm">
                <h3 className="font-bold text-[#25272C] text-xl mb-3 tracking-tight">{v.title}</h3>
                <p className="text-[#374151] text-sm leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}

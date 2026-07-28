import Button from "./Button";

export default function AboutTeaser() {
  return (
    <section className="bg-white py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-xs font-bold section-label text-[#0FA284] uppercase mb-4">Why Road2Resolve exists</p>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#25272C] mb-6">
            Built by people who have run the operations, not just advised on them.
          </h2>
          <p className="text-[#374151] text-lg leading-relaxed mb-6">
            Road2Resolve started because we kept seeing the same thing: good businesses held back by admin nobody should still be doing by hand. Leads going cold, teams working in silos, spreadsheets holding the whole thing together.
          </p>
          <p className="text-[#374151] text-lg leading-relaxed mb-8">
            The technology to fix it already exists and is cheaper than another admin hire. Most businesses just need someone to work out what to automate first and build it properly.
          </p>
          <Button href="/about" variant="outline">More about us</Button>
        </div>
        <div className="hero-glow rounded-3xl aspect-square flex items-center justify-center relative overflow-hidden shadow-2xl shadow-black/25">
          <div className="absolute inset-0 grid-pattern pointer-events-none" />
          <div className="text-center px-8 relative">
            <p className="text-7xl font-extrabold text-white mb-2 tracking-tight">R²</p>
            <p className="text-xs text-gray-300 section-label uppercase">AI &amp; Business Automation</p>
          </div>
        </div>
      </div>
    </section>
  );
}

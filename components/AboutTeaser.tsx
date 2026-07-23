import Button from "./Button";

export default function AboutTeaser() {
  return (
    <section className="bg-white py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#25272C] mb-6">
            Built by people who&apos;ve seen the problem first-hand.
          </h2>
          <p className="text-[#374151] text-lg leading-relaxed mb-8">
            Road2Resolve was started because we kept seeing good businesses held back by the same operational problems. Leads going cold. Teams working in silos. Nothing joined up. We fix that.
          </p>
          <Button href="/about" variant="outline">More about us</Button>
        </div>
        <div className="hero-glow rounded-3xl aspect-square flex items-center justify-center relative overflow-hidden shadow-2xl shadow-black/25">
          <div className="absolute inset-0 grid-pattern pointer-events-none" />
          <div className="text-center px-8 relative">
            <p className="text-7xl font-extrabold text-white mb-2 tracking-tight">R²</p>
            <p className="text-xs text-gray-300 section-label uppercase">Road2Resolve</p>
          </div>
        </div>
      </div>
    </section>
  );
}

import Button from "./Button";

export default function AboutTeaser() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B2D50] mb-4">Built by people who&apos;ve seen the problem first-hand.</h2>
          <p className="text-[#374151] leading-relaxed mb-6">
            Road2Resolve was started because we kept seeing good businesses held back by the same operational problems. Leads going cold. Teams working in silos. Nothing joined up. We fix that.
          </p>
          <Button href="/about" variant="outline">More about us</Button>
        </div>
        <div className="bg-[#1B2D50] rounded-lg aspect-square flex items-center justify-center">
          <div className="text-center px-8">
            <p className="text-4xl font-bold text-white mb-1">R²</p>
            <p className="text-xs text-gray-400 tracking-widest uppercase">Road2Resolve</p>
          </div>
        </div>
      </div>
    </section>
  );
}

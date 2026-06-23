import Button from "./Button";

export default function AboutTeaser() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B2D50] mb-4">We&apos;re Andre and Jasmin.</h2>
          <p className="text-[#374151] leading-relaxed mb-6">
            A husband and wife team based in Folkestone, Kent. We started Road2Resolve because we kept seeing good businesses held back by the same operational problems. We fix them.
          </p>
          <Button href="/about" variant="outline">More about us</Button>
        </div>
        <div className="bg-[#F4F6FA] rounded-lg aspect-square flex items-center justify-center">
          <p className="text-[#6B7280] text-sm">Photo coming soon</p>
        </div>
      </div>
    </section>
  );
}

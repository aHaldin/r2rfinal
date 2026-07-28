import { capacity } from "@/lib/config";

export default function WhyFive() {
  return (
    <section className="bg-white py-24 md:py-28 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex items-center justify-center gap-2.5 mb-8">
          {Array.from({ length: capacity.total }).map((_, i) => (
            <span
              key={i}
              className={`w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center font-bold text-sm ${
                i < capacity.total - capacity.open
                  ? "bg-[#25272C] text-white"
                  : "bg-[#B8F7E4] text-[#25272C] border-2 border-[#25272C]/10 animate-pulse"
              }`}
            >
              {i < capacity.total - capacity.open ? "●" : "○"}
            </span>
          ))}
        </div>
        <p className="text-xs font-bold section-label text-[#0FA284] uppercase mb-4">Why we cap it at {capacity.total}</p>
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#25272C] mb-6">
          We only work with {capacity.total} clients at a time.
        </h2>
        <p className="text-[#374151] text-lg leading-relaxed max-w-2xl mx-auto mb-4">
          Not because we couldn&apos;t take more — because embedded means embedded. When you call, we know your system, because we built it and we&apos;re in it every week. That doesn&apos;t scale past {capacity.total}, and we&apos;re not going to pretend it does.
        </p>
        <p className="text-[#25272C] text-lg font-bold">
          Right now, {capacity.open} {capacity.open === 1 ? "spot is" : "spots are"} open.
        </p>
      </div>
    </section>
  );
}

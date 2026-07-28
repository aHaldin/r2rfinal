import { testimonials } from "@/lib/trust";

export default function Testimonials() {
  if (testimonials.length === 0) return null;

  return (
    <section className="bg-white py-20 md:py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <p className="text-xs font-bold section-label text-[#0FA284] uppercase mb-4">What clients say</p>
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#25272C] mb-12">
          In their words.
        </h2>
        <div className={"grid gap-6 " + (testimonials.length === 1 ? "max-w-3xl" : "md:grid-cols-2 lg:grid-cols-3")}>
          {testimonials.map((t) => (
            <figure key={t.name} className="bg-[#F5F7F6] border border-gray-200/80 rounded-2xl p-8">
              <div className="text-4xl leading-none text-[#0FA284] mb-4" aria-hidden="true">&ldquo;</div>
              <blockquote className="text-[#374151] text-lg leading-relaxed mb-6">{t.quote}</blockquote>
              <figcaption className="text-sm">
                <span className="font-bold text-[#25272C]">{t.name}</span>
                <span className="text-[#6B7280]">
                  {" — "}{t.role}{t.company ? ", " + t.company : ""}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

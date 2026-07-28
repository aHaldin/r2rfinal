import JsonLd from "./JsonLd";

export type QA = { q: string; a: string };

export default function FAQ({ items, heading = "Frequently asked questions" }: { items: QA[]; heading?: string }) {
  return (
    <section className="bg-white py-20 md:py-28 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#25272C] mb-12">{heading}</h2>
        <div className="divide-y divide-gray-200 border-t border-gray-200">
          {items.map((item) => (
            <details key={item.q} className="group py-6">
              <summary className="flex items-center justify-between gap-6 cursor-pointer list-none">
                <h3 className="font-bold text-[#25272C] text-lg tracking-tight">{item.q}</h3>
                <span className="text-[#0FA284] text-2xl shrink-0 transition-transform group-open:rotate-45" aria-hidden="true">+</span>
              </summary>
              <p className="text-[#374151] leading-relaxed mt-4 pr-10">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: items.map((i) => ({
            "@type": "Question",
            name: i.q,
            acceptedAnswer: { "@type": "Answer", text: i.a },
          })),
        }}
      />
    </section>
  );
}

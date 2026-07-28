export default function PageHero({
  eyebrow,
  title,
  sub,
}: {
  eyebrow?: string;
  title: string;
  sub: string;
}) {
  return (
    <section className="hero-glow text-white py-24 md:py-28 px-6 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern pointer-events-none" />
      <div className="max-w-7xl mx-auto relative">
        {eyebrow && (
          <p className="text-xs font-bold section-label text-[#B8F7E4] uppercase mb-4 animate-fade-up">{eyebrow}</p>
        )}
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-5 max-w-4xl animate-fade-up-1">{title}</h1>
        <p className="text-gray-300 text-lg md:text-xl max-w-2xl leading-relaxed animate-fade-up-2">{sub}</p>
      </div>
    </section>
  );
}

const steps = [
  { n: "01", title: "Discovery", body: "We sit down with you and find out how the business actually runs — not how the org chart says it runs. Free, and no obligation to go further." },
  { n: "02", title: "Business process mapping", body: "We map every step, handoff and manual task, then show you exactly where the hours are going and what it is costing you." },
  { n: "03", title: "Automation strategy", body: "A prioritised plan: what to automate first for the biggest return, what to leave alone, and what it will take to get there." },
  { n: "04", title: "Implementation", body: "We build it. AI, automations, integrations, dashboards and systems — configured around your business, not a template." },
  { n: "05", title: "Training", body: "Your team is shown how everything works, in plain English, so the system gets used properly from day one." },
  { n: "06", title: "Continuous improvement", body: "Businesses change. We stay on to refine, extend and add automations as new bottlenecks appear." },
];

export default function HowWeWork() {
  return (
    <section id="how-we-work" className="bg-[#F5F7F6] py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <p className="text-xs font-bold section-label text-[#0FA284] uppercase mb-4">How we work</p>
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#25272C] mb-6">
          A clear process, from first conversation to continuous improvement.
        </h2>
        <p className="text-[#374151] text-lg max-w-2xl mb-16 leading-relaxed">
          You always know what happens next, what it costs, and what you are getting.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {steps.map((s) => (
            <div key={s.n} className="group">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-4xl font-extrabold text-[#B8F7E4] tracking-tight">{s.n}</span>
                <span className="h-px flex-1 bg-gradient-to-r from-[#0FA284]/40 to-transparent" />
              </div>
              <h3 className="font-bold text-[#25272C] text-xl mb-3 tracking-tight">{s.title}</h3>
              <p className="text-[#374151] text-[15px] leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

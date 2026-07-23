import { Search, Settings, Users } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Search,
    title: "Systems Consulting",
    body: "Not sure where to start? We audit your current setup, map your workflows, and give you a clear picture of what needs fixing and in what order.",
    link: "See consulting services →",
  },
  {
    icon: Settings,
    title: "Operations Build",
    body: "We build your monday.com system from scratch — boards, automations, integrations, and dashboards — scoped to your business and delivered ready to use.",
    link: "See build packages →",
  },
  {
    icon: Users,
    title: "Embedded Partner",
    body: "For businesses that want an ongoing operations partner. We maintain and evolve your systems every month as your business grows and changes.",
    link: "See retainer options →",
  },
];

export default function ServicesOverview() {
  return (
    <section id="services" className="bg-[#F5F7F6] py-24 md:py-32 px-6 relative overflow-hidden">
      <div
        className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full opacity-[0.06] pointer-events-none"
        style={{ background: "radial-gradient(circle, #0FA284 0%, transparent 70%)" }}
      />
      <div className="max-w-6xl mx-auto relative">
        <p className="text-xs font-bold section-label text-[#0FA284] uppercase mb-4">How we fix it</p>
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#25272C] max-w-3xl mb-16">
          We design and build monday.com systems tailored to the way your business actually works.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="card-lift bg-white rounded-2xl p-8 shadow-sm border border-gray-100 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#0FA284] to-[#B8F7E4]" />
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0FA284] to-[#5ce0bd] flex items-center justify-center mb-6 shadow-lg shadow-teal-500/25">
                <s.icon className="text-white" size={22} />
              </div>
              <h3 className="font-bold text-[#25272C] text-xl mb-3 tracking-tight">{s.title}</h3>
              <p className="text-[#374151] text-[15px] leading-relaxed mb-6">{s.body}</p>
              <Link
                href="/services"
                className="text-[#0FA284] text-sm font-bold inline-flex items-center gap-1 group-hover:gap-2 transition-all"
              >
                {s.link}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

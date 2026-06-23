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
    <section id="services" className="bg-[#F4F6FA] py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs font-semibold tracking-widest text-[#7C35BE] uppercase mb-3">How we fix it</p>
        <h2 className="text-3xl md:text-4xl font-bold text-[#1B2D50] max-w-3xl mb-12">
          We design and build monday.com systems tailored to the way your business actually works.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="bg-white border-l-4 border-[#7C35BE] rounded-lg p-6 shadow-sm">
              <s.icon className="text-[#7C35BE] mb-4" size={28} />
              <h3 className="font-bold text-[#1B2D50] text-lg mb-2">{s.title}</h3>
              <p className="text-[#374151] text-sm leading-relaxed mb-4">{s.body}</p>
              <Link href="/services" className="text-[#7C35BE] text-sm font-semibold hover:underline">{s.link}</Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

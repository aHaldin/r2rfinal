import { Bot, Workflow, LineChart } from "lucide-react";
import Link from "next/link";

const pillars = [
  {
    icon: Bot,
    title: "AI that does the work",
    body: "Drafting, summarising, qualifying, answering. We put AI to work on the tasks that eat your team's day, inside the tools they already use.",
    link: { href: "/ai-automation", label: "Explore AI automation" },
  },
  {
    icon: Workflow,
    title: "Automation that connects everything",
    body: "Your CRM, inbox, forms, finance and project tools working as one system. Information moves on its own — no copying, no chasing, no gaps.",
    link: { href: "/services", label: "See automation services" },
  },
  {
    icon: LineChart,
    title: "Operations built to scale",
    body: "We map how your business actually runs, fix what is broken, and build the systems and dashboards that let you grow without adding admin.",
    link: { href: "/services#consulting", label: "See operations consulting" },
  },
];

export default function ServicesOverview() {
  return (
    <section id="services" className="bg-[#F5F7F6] py-24 md:py-32 px-6 relative overflow-hidden">
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full opacity-[0.07] pointer-events-none" style={{ background: "radial-gradient(circle, #0FA284 0%, transparent 70%)" }} />
      <div className="max-w-7xl mx-auto relative">
        <p className="text-xs font-bold section-label text-[#0FA284] uppercase mb-4">What we do</p>
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#25272C] max-w-3xl mb-6">
          We eliminate repetitive work so your team can focus on growing the business.
        </h2>
        <p className="text-[#374151] text-lg max-w-2xl mb-16 leading-relaxed">
          Three things, done properly. The software is just how we get there.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((s) => (
            <div key={s.title} className="card-lift bg-white rounded-2xl p-8 shadow-sm border border-gray-100 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#0FA284] to-[#B8F7E4]" />
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0FA284] to-[#35c9a3] flex items-center justify-center mb-6 shadow-lg shadow-teal-500/25">
                <s.icon className="text-white" size={22} aria-hidden="true" />
              </div>
              <h3 className="font-bold text-[#25272C] text-xl mb-3 tracking-tight">{s.title}</h3>
              <p className="text-[#374151] text-[15px] leading-relaxed mb-6">{s.body}</p>
              <Link href={s.link.href} className="text-[#0FA284] text-sm font-bold inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                {s.link.label} <span aria-hidden="true">→</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

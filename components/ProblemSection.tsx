import { TrendingDown, AlertCircle, Eye } from "lucide-react";

const problems = [
  {
    icon: TrendingDown,
    title: "Leads going cold",
    body: "Your sales team is following up on things that should already be moving. Nobody's sure what stage a deal is at or who's supposed to be doing what.",
  },
  {
    icon: AlertCircle,
    title: "Ops finding out too late",
    body: "Sales wins a contract. Operations finds out three days later in a WhatsApp message. The handover is a mess every single time.",
  },
  {
    icon: Eye,
    title: "No real visibility",
    body: "You ask for an update and someone has to go check a spreadsheet, a notebook, or their email. There's no single place where everything lives.",
  },
];

export default function ProblemSection() {
  return (
    <section id="problem" className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs font-semibold tracking-widest text-[#7C35BE] uppercase mb-3">Sound familiar?</p>
        <h2 className="text-3xl md:text-4xl font-bold text-[#1B2D50] max-w-2xl mb-12">
          You&apos;re growing — but your operations aren&apos;t keeping up.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {problems.map((p) => (
            <div key={p.title} className="bg-[#F4F6FA] border border-gray-200 rounded-lg p-6">
              <p.icon className="text-[#1B2D50] mb-4" size={28} />
              <h3 className="font-bold text-[#1B2D50] text-lg mb-2">{p.title}</h3>
              <p className="text-[#374151] text-sm leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

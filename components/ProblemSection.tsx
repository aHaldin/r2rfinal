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
    <section id="problem" className="bg-white py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs font-bold section-label text-[#0FA284] uppercase mb-4">Sound familiar?</p>
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#25272C] max-w-2xl mb-16">
          You&apos;re growing — but your operations aren&apos;t keeping up.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {problems.map((p) => (
            <div
              key={p.title}
              className="card-lift bg-gradient-to-b from-[#F5F7F6] to-white border border-gray-200/80 rounded-2xl p-8"
            >
              <div className="w-12 h-12 rounded-xl bg-[#25272C] flex items-center justify-center mb-6 shadow-lg shadow-black/15">
                <p.icon className="text-white" size={22} />
              </div>
              <h3 className="font-bold text-[#25272C] text-xl mb-3 tracking-tight">{p.title}</h3>
              <p className="text-[#374151] text-[15px] leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

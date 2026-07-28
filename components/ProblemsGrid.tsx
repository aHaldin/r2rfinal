import { FileSpreadsheet, TrendingDown, Copy, Unplug, BarChart3, Repeat } from "lucide-react";

const problems = [
  { icon: FileSpreadsheet, title: "Too much admin", body: "Your team spends hours a week on work a system should be doing for them." },
  { icon: TrendingDown, title: "Leads falling through the cracks", body: "Enquiries go cold because nobody is sure whose job it is to follow up." },
  { icon: Copy, title: "Duplicate work", body: "The same information gets typed into three different places by three different people." },
  { icon: Unplug, title: "Disconnected software", body: "Your CRM, inbox, spreadsheets and finance tools do not talk to each other." },
  { icon: BarChart3, title: "Poor reporting", body: "Pulling a simple number takes half a day and nobody fully trusts the answer." },
  { icon: Repeat, title: "Repetitive manual tasks", body: "Copy, paste, chase, repeat. Every week. Work that could run itself." },
];

export default function ProblemsGrid() {
  return (
    <section id="problems" className="bg-white py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <p className="text-xs font-bold section-label text-[#0FA284] uppercase mb-4">Problems we solve</p>
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#25272C] max-w-3xl mb-6">
          You are growing — but your operations are eating the growth.
        </h2>
        <p className="text-[#374151] text-lg max-w-2xl mb-16 leading-relaxed">
          Most businesses do not have a people problem. They have a process problem.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((p) => (
            <div key={p.title} className="card-lift bg-gradient-to-b from-[#F5F7F6] to-white border border-gray-200/80 rounded-2xl p-7">
              <div className="w-11 h-11 rounded-xl bg-[#25272C] flex items-center justify-center mb-5">
                <p.icon className="text-[#B8F7E4]" size={20} aria-hidden="true" />
              </div>
              <h3 className="font-bold text-[#25272C] text-lg mb-2.5 tracking-tight">{p.title}</h3>
              <p className="text-[#374151] text-[15px] leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

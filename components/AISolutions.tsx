import Link from "next/link";
import Button from "./Button";

const solutions = [
  { title: "AI email drafting", body: "Replies and follow-ups written for your team in your tone of voice, ready to review and send." },
  { title: "AI proposal generation", body: "Turn a scoping call into a first-draft proposal in minutes instead of an evening." },
  { title: "AI meeting summaries", body: "Every call summarised with decisions and actions pushed straight into your task system." },
  { title: "AI customer support", body: "Common questions answered instantly and accurately, with anything complex handed to a human." },
  { title: "AI knowledge bases", body: "One place your team can ask a question and get the right answer from your own documents." },
  { title: "AI document search", body: "Find the clause, the quote or the file across years of documents by asking in plain English." },
  { title: "AI lead qualification", body: "Enquiries scored and routed automatically so your team spends time on the ones worth having." },
  { title: "AI reporting", body: "Plain-English summaries of what changed this week and what needs your attention." },
];

export default function AISolutions() {
  return (
    <section id="ai" className="hero-glow text-white py-24 md:py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern pointer-events-none" />
      <div className="max-w-7xl mx-auto relative">
        <div className="max-w-3xl mb-16">
          <p className="text-xs font-bold section-label text-[#B8F7E4] uppercase mb-4">AI solutions</p>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6">
            AI, explained in terms of what it actually does for you.
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Not chatbots for the sake of it. These are the AI applications we build most often for growing businesses — each one removing a specific job somebody currently does by hand.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {solutions.map((s) => (
            <div key={s.title} className="card-lift glass rounded-2xl p-6">
              <h3 className="font-bold text-white text-[17px] mb-2.5 tracking-tight">{s.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row gap-5 items-start">
          <Button href="/ai-automation" variant="white">Explore AI automation</Button>
          <Link href="/contact" className="text-white font-semibold text-base inline-flex items-center gap-2 hover:gap-3 transition-all pt-3.5">
            Or book a free audit <span className="text-[#B8F7E4]" aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

import FinalCTA from "@/components/FinalCTA";

export const metadata = {
  title: "About | Road2Resolve",
};

const values = [
  { title: "Straight talking", body: "We tell you what you need, not what sounds impressive." },
  { title: "Built to last", body: "We don't build systems and disappear. We build things your team will actually use." },
  { title: "No fluff", body: "Every hour we spend on your business is focused on something that moves the needle." },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-[#1B2D50] text-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Road2Resolve</h1>
          <p className="text-gray-300 text-lg">A small team. A clear focus. Real results.</p>
        </div>
      </section>

      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B2D50] mb-6">We&apos;re Andre and Jasmin.</h2>
            <div className="space-y-4 text-[#374151] leading-relaxed">
              <p>
                Road2Resolve is a husband and wife team based in Folkestone, Kent. Andre leads business development and client relationships. Jasmin is our monday.com specialist — she builds the systems.
              </p>
              <p>
                We started Road2Resolve because we kept seeing the same problem: good businesses being held back by operational chaos. Leads going cold, handovers being missed, teams working in silos. The fix usually isn&apos;t complicated — it just needs someone who knows what they&apos;re doing to build it properly.
              </p>
              <p>
                We&apos;re a small team, and we like it that way. Every client works directly with us. Nothing gets outsourced or handed to a junior.
              </p>
            </div>
          </div>
          <div className="bg-[#F4F6FA] rounded-lg aspect-square flex items-center justify-center">
            <p className="text-[#6B7280] text-sm">Photo coming soon</p>
          </div>
        </div>
      </section>

      <section className="bg-[#F4F6FA] py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1B2D50] mb-8">How we work</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="font-bold text-[#1B2D50] text-lg mb-2">{v.title}</h3>
                <p className="text-[#374151] text-sm leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}

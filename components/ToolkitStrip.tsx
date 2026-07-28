import Link from "next/link";

const tools = [
  { name: "OpenAI", href: "/services#openai" },
  { name: "Make.com", href: "/services#make" },
  { name: "Zapier", href: "/services#zapier" },
  { name: "monday.com", href: "/monday-com-consultant" },
  { name: "Google Workspace", href: "/services#workspace" },
  { name: "Microsoft 365", href: "/services#workspace" },
];

export default function ToolkitStrip() {
  return (
    <section className="bg-white pt-16 pb-4 px-6">
      <div className="max-w-7xl mx-auto">
        <p className="text-center text-sm text-[#6B7280] mb-8">
          We build with the tools your business already trusts
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {tools.map((t) => (
            <Link
              key={t.name}
              href={t.href}
              className="tool-chip border border-gray-200 rounded-xl px-5 py-3 text-sm font-bold text-[#25272C] bg-white hover:text-[#0FA284]"
            >
              {t.name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/config";

const services = [
  { href: "/ai-automation", label: "AI Business Automation" },
  { href: "/services#workflow", label: "Workflow Optimisation" },
  { href: "/services#consulting", label: "Operations Consulting" },
  { href: "/services#crm", label: "CRM Implementation" },
  { href: "/services#dashboards", label: "Business Dashboards" },
];

const platforms = [
  { href: "/monday-com-consultant", label: "monday.com Consultant" },
  { href: "/services#make", label: "Make.com Automation" },
  { href: "/services#zapier", label: "Zapier Integrations" },
  { href: "/services#openai", label: "OpenAI Integration" },
  { href: "/services#workspace", label: "Google & Microsoft 365" },
];

const company = [
  { href: "/about", label: "About" },
  { href: "/industries", label: "Industries" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/services#pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
];

function Column({ title, items }: { title: string; items: { href: string; label: string }[] }) {
  return (
    <div>
      <p className="text-sm font-bold text-[#25272C] mb-4">{title}</p>
      <ul className="space-y-2.5">
        {items.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="text-sm text-[#374151] hover:text-[#0FA284] transition-colors">{l.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#F5F7F6]">
      <div className="h-1 w-full bg-gradient-to-r from-[#25272C] via-[#0FA284] to-[#B8F7E4]" />
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10">
        <div className="col-span-2">
          <Image src="/images/logo.png" alt="Road2Resolve" height={56} width={56} className="h-14 w-auto object-contain mb-3" />
          <p className="text-sm text-[#374151] leading-relaxed max-w-xs mb-5">
            We help growing businesses eliminate repetitive work with AI, automation and modern business systems.
          </p>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#374151] hover:text-[#0FA284] transition-colors group"
          >
            <span className="w-8 h-8 rounded-lg bg-white border border-gray-200 flex items-center justify-center group-hover:border-[#0FA284] group-hover:bg-[#0FA284] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="currentColor" className="text-[#25272C] group-hover:text-white transition-colors" aria-hidden="true">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/>
              </svg>
            </span>
            Follow us on LinkedIn
          </a>
        </div>
        <Column title="Services" items={services} />
        <Column title="Platforms" items={platforms} />
        <Column title="Company" items={company} />
      </div>
      <div className="max-w-7xl mx-auto px-6 pb-12">
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
          <p className="text-xs text-[#6B7280]">© 2026 Road2Resolve Ltd. All rights reserved.</p>
          <p className="text-xs text-[#6B7280]">
            {site.location} · <a href={"mailto:" + site.email} className="hover:text-[#0FA284] transition-colors">{site.email}</a>
          </p>
        </div>
      </div>
    </footer>
  );
}

import Image from "next/image";
import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#F4F6FA]">
      <div className="h-1 bg-[#7C35BE] w-full" />
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <Image src="/images/logo.png" alt="Road2Resolve" height={40} width={160} className="h-10 w-auto object-contain mb-2" />
          <p className="text-xs text-[#6B7280] tracking-widest uppercase mt-1 mb-4">Digital Operations Consultancy</p>
          <a
            href="https://www.linkedin.com/company/road2resolve-ltd"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-[#374151] hover:text-[#7C35BE] transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/>
            </svg>
            Follow us on LinkedIn
          </a>
        </div>
        <div>
          <p className="text-sm font-semibold text-[#1B2D50] mb-3">Quick Links</p>
          <ul className="space-y-2">
            {links.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-sm text-[#374151] hover:text-[#7C35BE] transition-colors">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold text-[#1B2D50] mb-3">Contact</p>
          <p className="text-sm text-[#374151] mb-1">
            <a href="mailto:info@road2resolve.digital" className="hover:text-[#7C35BE] transition-colors">info@road2resolve.digital</a>
          </p>
          <p className="text-sm text-[#374151] mb-6">Folkestone, Kent</p>
          <p className="text-xs text-[#6B7280]">© 2026 Road2Resolve Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

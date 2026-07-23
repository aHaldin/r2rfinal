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
    <footer className="bg-[#F5F7F6] relative">
      <div className="h-1 w-full bg-gradient-to-r from-[#25272C] via-[#0FA284] to-[#B8F7E4]" />
      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <Image src="/images/logo.png" alt="Road2Resolve" height={40} width={160} className="h-10 w-auto object-contain mb-3" />
          <p className="text-xs text-[#6B7280] section-label uppercase mt-1 mb-5">Digital Operations Consultancy</p>
          <a
            href="https://www.linkedin.com/company/road2resolve-ltd"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#374151] hover:text-[#0FA284] transition-colors group"
          >
            <span className="w-8 h-8 rounded-lg bg-white border border-gray-200 flex items-center justify-center group-hover:border-[#0FA284] group-hover:bg-[#0FA284] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="currentColor" className="text-[#25272C] group-hover:text-white transition-colors">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/>
              </svg>
            </span>
            Follow us on LinkedIn
          </a>
        </div>
        <div>
          <p className="text-sm font-bold text-[#25272C] mb-4">Quick Links</p>
          <ul className="space-y-3">
            {links.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-sm text-[#374151] hover:text-[#0FA284] hover:translate-x-0.5 transition-all inline-block">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-bold text-[#25272C] mb-4">Contact</p>
          <p className="text-sm text-[#374151] mb-2">
            <a href="mailto:info@road2resolve.digital" className="hover:text-[#0FA284] transition-colors font-medium">info@road2resolve.digital</a>
          </p>
          <p className="text-sm text-[#374151] mb-8">Folkestone, Kent</p>
          <p className="text-xs text-[#6B7280]">© 2026 Road2Resolve Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

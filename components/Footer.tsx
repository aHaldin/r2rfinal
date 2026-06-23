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
          <p className="text-xs text-[#6B7280] tracking-widest uppercase mt-1">Digital Operations Consultancy</p>
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
          <p className="text-xs text-[#6B7280]">© 2025 Road2Resolve Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

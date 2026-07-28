"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "./Button";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/services", label: "Services" },
  { href: "/ai-automation", label: "AI Automation" },
  { href: "/monday-com-consultant", label: "monday.com" },
  { href: "/industries", label: "Industries" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/about", label: "About" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="sticky top-0 z-50 bg-white/85 backdrop-blur-xl border-b border-gray-200/70">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between gap-6">
        <Link href="/" className="transition-opacity hover:opacity-80 shrink-0" aria-label="Road2Resolve home">
          <Image src="/images/logo.png" alt="Road2Resolve — AI & Business Automation Consultancy" height={64} width={64} className="h-16 w-auto object-contain" priority />
        </Link>
        <div className="hidden lg:flex items-center gap-7">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="text-sm font-semibold text-[#374151] hover:text-[#0FA284] transition-colors whitespace-nowrap">
              {l.label}
            </Link>
          ))}
          <Button href="/contact" variant="primary" className="whitespace-nowrap">Free Automation Audit</Button>
        </div>
        <button className="lg:hidden text-[#25272C] p-1" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden bg-white/97 backdrop-blur-xl border-t border-gray-200/70 px-6 py-6 flex flex-col gap-5">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="text-base font-semibold text-[#374151] hover:text-[#0FA284] transition-colors" onClick={() => setOpen(false)}>
              {l.label}
            </Link>
          ))}
          <Button href="/contact" variant="primary" className="text-center mt-1">Free Automation Audit</Button>
        </div>
      )}
    </nav>
  );
}

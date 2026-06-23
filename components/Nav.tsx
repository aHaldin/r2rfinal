"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "./Button";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-[#E5E7EB]">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/">
          <Image src="/images/logo.png" alt="Road2Resolve" height={48} width={180} className="h-12 w-auto object-contain" priority />
        </Link>
        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="text-sm font-medium text-[#374151] hover:text-[#7C35BE] transition-colors">
              {l.label}
            </Link>
          ))}
          <Button href="/contact" variant="primary">Get in Touch</Button>
        </div>
        {/* Mobile hamburger */}
        <button className="md:hidden text-[#1B2D50]" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-[#E5E7EB] px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="text-sm font-medium text-[#374151] hover:text-[#7C35BE]" onClick={() => setOpen(false)}>
              {l.label}
            </Link>
          ))}
          <Button href="/contact" variant="primary" className="text-center">Get in Touch</Button>
        </div>
      )}
    </nav>
  );
}

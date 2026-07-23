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
    <nav className="sticky top-0 z-50 bg-white/85 backdrop-blur-xl border-b border-gray-200/70 shadow-sm shadow-gray-100/50">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="transition-opacity hover:opacity-80">
          <Image src="/images/logo.png" alt="Road2Resolve" height={64} width={64} className="h-16 w-auto object-contain" priority />
        </Link>
        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-9">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-semibold text-[#374151] hover:text-[#0FA284] transition-colors relative group"
            >
              {l.label}
              <span className="absolute -bottom-1.5 left-0 w-0 h-0.5 bg-[#0FA284] rounded-full group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
          <Button href="/contact" variant="primary">Get in Touch</Button>
        </div>
        {/* Mobile hamburger */}
        <button className="md:hidden text-[#25272C] p-1" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>
      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-gray-200/70 px-6 py-6 flex flex-col gap-5">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-base font-semibold text-[#374151] hover:text-[#0FA284] transition-colors"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <Button href="/contact" variant="primary" className="text-center mt-1">Get in Touch</Button>
        </div>
      )}
    </nav>
  );
}

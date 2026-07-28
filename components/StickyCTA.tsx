"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function StickyCTA() {
  const [show, setShow] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 900);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Never show on the pages where it would be redundant or in the way.
  if (pathname === "/contact" || pathname === "/thank-you") return null;

  return (
    <div
      className={
        "lg:hidden fixed bottom-0 left-0 right-0 z-40 p-4 bg-white/95 backdrop-blur-xl border-t border-gray-200 transition-transform duration-300 " +
        (show ? "translate-y-0" : "translate-y-full")
      }
    >
      <Link
        href="/contact"
        className="block w-full text-center bg-[#B8F7E4] text-[#25272C] font-bold py-3.5 rounded-lg shadow-lg active:scale-[0.99] transition-transform"
      >
        Book a Free Automation Audit
      </Link>
    </div>
  );
}

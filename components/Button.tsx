import Link from "next/link";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "outline" | "white";
  className?: string;
}

export default function Button({ href, children, variant = "primary", className = "" }: ButtonProps) {
  const base =
    "inline-block px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-300 cursor-pointer active:scale-[0.98]";
  const variants = {
    primary:
      "bg-[#B8F7E4] text-[#25272C] hover:bg-[#a2f0d8] shadow-lg shadow-teal-500/25 hover:shadow-xl hover:shadow-teal-500/30 hover:-translate-y-0.5",
    outline:
      "border-2 border-[#25272C] text-[#25272C] hover:bg-[#25272C] hover:text-white hover:-translate-y-0.5",
    white:
      "bg-[#B8F7E4] text-[#25272C] hover:bg-[#a2f0d8] shadow-lg hover:shadow-xl hover:-translate-y-0.5",
  };
  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}

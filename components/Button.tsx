import Link from "next/link";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "outline" | "white";
  className?: string;
}

export default function Button({ href, children, variant = "primary", className = "" }: ButtonProps) {
  const base = "inline-block px-6 py-3 rounded-md font-semibold text-sm transition-all duration-200 cursor-pointer";
  const variants = {
    primary: "bg-[#7C35BE] text-white hover:bg-[#6a2da0]",
    outline: "border-2 border-[#1B2D50] text-[#1B2D50] hover:bg-[#1B2D50] hover:text-white",
    white: "bg-white text-[#7C35BE] hover:bg-gray-100",
  };
  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}

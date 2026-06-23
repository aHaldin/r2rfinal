import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Road2Resolve",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

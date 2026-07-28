import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { site } from "@/lib/config";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "AI & Business Automation Consultancy UK | Road2Resolve",
    template: "%s | Road2Resolve",
  },
  description:
    "We help growing UK businesses eliminate repetitive work with AI, automation and smart business systems. Book a free automation audit.",
  keywords: [
    "AI business automation",
    "automation consultancy",
    "business automation consultant UK",
    "workflow automation",
    "operations consultant",
    "CRM consultant",
    "business systems consultant",
    "AI consultant",
    "process automation",
    "digital transformation",
    "monday.com consultant",
    "monday.com implementation",
    "monday.com partner",
    "Make.com consultant",
    "Zapier consultant",
    "OpenAI integration",
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: site.url,
    siteName: site.name,
    title: "AI & Business Automation Consultancy UK | Road2Resolve",
    description:
      "We help growing UK businesses eliminate repetitive work with AI, automation and smart business systems. Book a free automation audit.",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI & Business Automation Consultancy UK | Road2Resolve",
    description:
      "We help growing UK businesses eliminate repetitive work with AI, automation and smart business systems.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB">
      <body className={`${inter.variable} antialiased`}>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-white focus:text-[#25272C] focus:px-4 focus:py-2 focus:rounded-lg focus:font-bold"
        >
          Skip to content
        </a>
        <Nav />
        <main id="main">{children}</main>
        <Footer />
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "@id": site.url + "/#organization",
            name: site.name,
            legalName: "Road2Resolve Ltd",
            url: site.url,
            email: site.email,
            description:
              "AI and business automation consultancy helping growing UK businesses eliminate repetitive work through AI, automation, workflow optimisation and modern business systems.",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Folkestone",
              addressRegion: "Kent",
              addressCountry: "GB",
            },
            areaServed: { "@type": "Country", name: "United Kingdom" },
            sameAs: [site.linkedin],
            knowsAbout: [
              "AI Business Automation",
              "Workflow Automation",
              "Business Process Mapping",
              "Operations Consulting",
              "CRM Implementation",
              "monday.com Implementation",
              "Make.com Automation",
              "Zapier Integrations",
              "OpenAI Integration",
            ],
            makesOffer: [
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI Business Automation" } },
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "monday.com Implementation" } },
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Operations Consulting" } },
            ],
          }}
        />
      </body>
    </html>
  );
}

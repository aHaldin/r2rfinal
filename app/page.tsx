import type { Metadata } from "next";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import ClientLogos from "@/components/ClientLogos";
import ToolkitStrip from "@/components/ToolkitStrip";
import ProblemsGrid from "@/components/ProblemsGrid";
import ServicesOverview from "@/components/ServicesOverview";
import WorkflowDiagram from "@/components/WorkflowDiagram";
import HowWeWork from "@/components/HowWeWork";
import CaseStudyTeaser from "@/components/CaseStudyTeaser";
import Testimonials from "@/components/Testimonials";
import Capacity from "@/components/Capacity";
import FounderSection from "@/components/FounderSection";
import FinalCTA from "@/components/FinalCTA";

export const metadata: Metadata = {
  title: "Business Automation & AI Consultancy UK | Road2Resolve",
  description:
    "We help growing UK businesses save time by removing manual work with AI, automation and joined-up business systems. Book a free 30-minute automation audit.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ClientLogos />
      <ProblemsGrid />
      <ServicesOverview />
      <WorkflowDiagram />
      <HowWeWork />
      <ToolkitStrip />
      <CaseStudyTeaser />
      <Testimonials />
      <Capacity />
      <FounderSection />
      <FinalCTA />
    </>
  );
}

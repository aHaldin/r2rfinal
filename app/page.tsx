import type { Metadata } from "next";
import Hero from "@/components/Hero";
import ToolkitStrip from "@/components/ToolkitStrip";
import ProblemsGrid from "@/components/ProblemsGrid";
import ServicesOverview from "@/components/ServicesOverview";
import AISolutions from "@/components/AISolutions";
import WorkflowDiagram from "@/components/WorkflowDiagram";
import HowWeWork from "@/components/HowWeWork";
import IndustriesSection from "@/components/IndustriesSection";
import WhyFive from "@/components/WhyFive";
import CaseStudyTeaser from "@/components/CaseStudyTeaser";
import AboutTeaser from "@/components/AboutTeaser";
import FinalCTA from "@/components/FinalCTA";

export const metadata: Metadata = {
  title: "AI & Business Automation Consultancy UK | Road2Resolve",
  description:
    "We help growing UK businesses eliminate repetitive work with AI, automation and smart business systems. Book a free automation audit and find out what is slowing your business down.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <Hero />
      <ToolkitStrip />
      <ProblemsGrid />
      <ServicesOverview />
      <AISolutions />
      <WorkflowDiagram />
      <HowWeWork />
      <IndustriesSection />
      <WhyFive />
      <CaseStudyTeaser />
      <AboutTeaser />
      <FinalCTA />
    </>
  );
}

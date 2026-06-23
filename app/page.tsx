import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import ServicesOverview from "@/components/ServicesOverview";
import HowItWorks from "@/components/HowItWorks";
import CaseStudyTeaser from "@/components/CaseStudyTeaser";
import TestimonialPlaceholder from "@/components/TestimonialPlaceholder";
import AboutTeaser from "@/components/AboutTeaser";
import FinalCTA from "@/components/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <ProblemSection />
      <ServicesOverview />
      <HowItWorks />
      <CaseStudyTeaser />
      <TestimonialPlaceholder />
      <AboutTeaser />
      <FinalCTA />
    </>
  );
}

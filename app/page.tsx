import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import ServicesOverview from "@/components/ServicesOverview";
import HowItWorks from "@/components/HowItWorks";
import WhyFive from "@/components/WhyFive";
import CaseStudyTeaser from "@/components/CaseStudyTeaser";
import AboutTeaser from "@/components/AboutTeaser";
import FinalCTA from "@/components/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <ProblemSection />
      <ServicesOverview />
      <HowItWorks />
      <WhyFive />
      <CaseStudyTeaser />
      <AboutTeaser />
      <FinalCTA />
    </>
  );
}

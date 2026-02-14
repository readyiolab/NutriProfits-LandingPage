import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import WhoIsItFor from "@/components/landing/WhoIsItFor";
import ProblemSection from "@/components/landing/ProblemSection";
import SolutionSection from "@/components/landing/SolutionSection";
import HowItWorks from "@/components/landing/HowItWorks";
import SetupRoadmap from "@/components/landing/SetupRoadmap";
import KeyBenefits from "@/components/landing/KeyBenefits";
import BuiltForGrowth from "@/components/landing/BuiltForGrowth";
import EarningsEstimator from "@/components/landing/EarningsEstimator";
import PricingSection from "@/components/landing/PricingSection";
import FAQSection from "@/components/landing/FAQSection";
import LeadSection from "@/components/landing/LeadSection";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <WhoIsItFor />
        <ProblemSection />
        <SolutionSection />
        <HowItWorks />
        <SetupRoadmap />
        <KeyBenefits />
        <BuiltForGrowth />
        <EarningsEstimator />
        <PricingSection />
        <FAQSection />
        <LeadSection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;


import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import BenefitsStrip from "@/components/BenefitsStrip";
import HowItWorks from "@/components/HowItWorks";
import DemoSection from "@/components/DemoSection";
import CaseStudies from "@/components/CaseStudies";
import Integrations from "@/components/Integrations";
import PricingSection from "@/components/PricingSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <BenefitsStrip />
      <HowItWorks />
      <DemoSection />
      <CaseStudies />
      <Integrations />
      <PricingSection />
      <Footer />
    </div>
  );
};

export default Index;

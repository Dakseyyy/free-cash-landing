import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import ReviewsSection from "@/components/ReviewsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">

      <main>
        <HeroSection />
        <StatsSection />
        <HowItWorksSection />
        <ReviewsSection />
        <CTASection />
      </main>

    </div>
  );
};

export default Index;

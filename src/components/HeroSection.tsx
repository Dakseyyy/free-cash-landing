import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { useSearchParams } from "react-router-dom"; // Essential import

const HeroSection = () => {
  const [searchParams] = useSearchParams();

  // 1. Get Snapchat ID from URL (e.g., ?ScCid=555)
  const snapClickId = searchParams.get("ScCid") || searchParams.get("sc_click_id") || "";

  // 2. Add it to 'aff_sub' (The "Backpack" for Gloffers)
  const affiliateLink = `https://quickflarehit.com/cf/click/2`;

  

  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/20 rounded-full blur-3xl" />

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted border border-border mb-8 animate-fade-up">
            <Sparkles className="w-4 h-4 text-secondary" />
            <span className="text-sm font-medium">$5M+ paid out to real users</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 animate-fade-up animation-delay-200">
            Get Paid to{" "}
            <span className="gradient-text">Take Surveys</span>{" "}
            & Play Games
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto animate-fade-up animation-delay-400">
            Join millions earning real cash rewards. Average users earn their first $5 in just 5 minutes.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up animation-delay-600">
            <a
              href={affiliateLink}
              target="_blank"
              rel="noopener noreferrer"

            >
              <Button variant="hero" size="xl">
                Get Started
                <ArrowRight className="w-5 h-5" />
              </Button>
            </a>
          </div>

          {/* Social Proof Section */}
          <div className="mt-12 flex items-center justify-center gap-2 animate-fade-up animation-delay-600">
            <div className="flex items-center gap-1 ml-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <svg key={i} className="w-4 h-4 text-secondary fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="text-sm text-muted-foreground ml-2">4.9/5 from 38,000+ reviews</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
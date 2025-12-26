import { Button } from "@/components/ui/button";
import { ArrowRight, Gift } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24">
      <div className="container">
        <div className="relative rounded-3xl overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20" />
          <div className="absolute inset-0 bg-card/80 backdrop-blur-sm" />

          {/* Glow effects */}
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/30 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-secondary/30 rounded-full blur-3xl" />

          <div className="relative z-10 px-8 py-16 md:py-24 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 border border-secondary/30 mb-6">
              <Gift className="w-5 h-5 text-secondary" />
              
            </div>

            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black mb-6 max-w-3xl mx-auto">
              Ready to Start{" "}
              <span className="gradient-text">Earning Cash?</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
              Join over 2 million users already earning. Your first $5 is just 5 minutes away.
            </p>

            <a
              href="https://gloffers.org/aff_c?offer_id=3273&aff_id=158638"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="hero" size="xl" className="w-full sm:w-auto">
                Claim Your $5 Bonus
                <ArrowRight className="w-5 h-5" />
              </Button>
            </a>

            <p className="mt-6 text-sm text-muted-foreground">
              No credit card required • Instant signup • Cash out anytime
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

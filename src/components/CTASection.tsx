import { Button } from "@/components/ui/button";
import { ArrowRight, Gift } from "lucide-react";
import { useSearchParams } from "react-router-dom";

// ⚠️ YOUR TIKTOK CONFIG
const TIKTOK_ACCESS_TOKEN = "155f3abb53fe684ccc8c2c219885e190e42e6a1c"; 
const TIKTOK_PIXEL_ID = "D62DNO3C77UDCQ157CLG";

const CTASection = () => {
  const [searchParams] = useSearchParams();
  
  // 1. Get the ttclid from the TikTok URL
  const ttclid = searchParams.get("ttclid");

  // 2. Construct the Affiliate Link
  const baseUrl = "https://gloffers.org/aff_c?offer_id=2691&aff_id=158638";
  // We send ttclid as 'aff_sub' so the network can send it back to our /tracking server
  const affiliateLink = ttclid 
    ? `${baseUrl}&aff_sub=${ttclid}&ttclid=${ttclid}` 
    : baseUrl;

  // 3. Direct Browser-to-TikTok API Call
  const handleButtonClick = async () => {
    const eventPayload = {
      event_source: "web",
      event_source_id: TIKTOK_PIXEL_ID, 
      data: [
        {
          event: "ViewContent",
          event_time: Math.floor(Date.now() / 1000),
          event_id: crypto.randomUUID(), 
          user: {
            ttclid: ttclid || null 
          }
        }
      ]
    };

    try {
      await fetch("https://business-api.tiktok.com/open_api/v1.3/event/track/", {
        method: "POST",
        headers: {
          "Access-Token": TIKTOK_ACCESS_TOKEN,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(eventPayload),
      });
      console.log("TikTok event sent successfully");
    } catch (error) {
      console.error("Failed to send TikTok event", error);
    }
  };

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
              <span className="text-sm font-medium text-secondary">Limited Time Offer</span>
            </div>

            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black mb-6 max-w-3xl mx-auto">
              Ready to Start{" "}
              <span className="gradient-text">Earning Cash?</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
              Join over 2 million users already earning. Your first $5 is just 5 minutes away.
            </p>

            <a
              href={affiliateLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleButtonClick}
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
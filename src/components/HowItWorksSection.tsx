import { UserPlus, ListChecks, Wallet, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    step: "01",
    title: "Sign Up For Free",
    description: "Create your account in seconds and instantly start earning!",
  },
  {
    icon: ListChecks,
    step: "02",
    title: "Complete Tasks",
    description: "Take surveys, play games, complete surveys, or try new apps. Choose what you enjoy!",
  },
  {
    icon: Wallet,
    step: "03",
    title: "Get Paid",
    description: "Cash out via PayPal, crypto, or gift cards. No minimum withdrawal!",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-24">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-4">
            How It <span className="gradient-text">Works</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Start earning in three simple steps. It's really that easy.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connector line */}
         
          
          {steps.map((item, index) => (
            <div key={item.step} className="relative">
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-6">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg glow-box">
                    <item.icon className="w-10 h-10 text-primary-foreground" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-secondary text-secondary-foreground font-bold text-sm flex items-center justify-center">
                    {item.step}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
              {index < steps.length - 1 && (
                <ArrowRight className="hidden md:block absolute top-20 -right-4 w-8 h-8 text-primary" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;

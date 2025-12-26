import { DollarSign, Clock, Users, Star } from "lucide-react";

const stats = [
  
  {
    icon: Clock,
    value: "7 min",
    label: "To First Cashout",
    description: "The average time before your first cashout",
  },
  {
    icon: Users,
    value: "10M+",
    label: "Downloads",
    description: "Join the huge community today.",
  },
  {
    icon: Star,
    value: "4.9/5",
    label: "User Rating",
    description: "38,000+ reviews",
  },
];

const StatsSection = () => {
  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/50 to-transparent" />
      <div className="container relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="group relative p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:glow-box"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <stat.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="text-3xl md:text-4xl font-black gradient-text mb-1">
                {stat.value}
              </div>
              <div className="text-foreground font-semibold mb-1">{stat.label}</div>
              <div className="text-sm text-muted-foreground">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;

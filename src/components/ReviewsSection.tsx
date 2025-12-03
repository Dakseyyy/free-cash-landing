import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Sarah M.",
    avatar: "S",
    rating: 5,
    text: "I was skeptical at first, but I've already earned over $200 in just two weeks! The surveys are actually interesting.",
    earned: "$247",
  },
  {
    name: "James K.",
    avatar: "J",
    rating: 5,
    text: "Love the game offers! Got paid $15 just for trying out a mobile game I ended up really enjoying.",
    earned: "$892",
  },
  {
    name: "Maria L.",
    avatar: "M",
    rating: 5,
    text: "Instant PayPal payments are a game changer. No waiting around for weeks like other sites.",
    earned: "$1,340",
  },
];

const ReviewsSection = () => {
  return (
    <section id="reviews" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-1 mb-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} className="w-6 h-6 text-secondary fill-current" />
            ))}
          </div>
          <h2 className="text-3xl md:text-5xl font-black mb-4">
            Loved by <span className="gradient-text">38,000+</span> Users
          </h2>
          <p className="text-muted-foreground text-lg">
            Don't just take our word for it. Here's what real users say.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div
              key={review.name}
              className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 relative group"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/20" />
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-primary-foreground font-bold">
                  {review.avatar}
                </div>
                <div>
                  <div className="font-semibold">{review.name}</div>
                  <div className="flex items-center gap-1">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star key={i} className="w-3 h-3 text-secondary fill-current" />
                    ))}
                  </div>
                </div>
                <div className="ml-auto">
                  <div className="text-xs text-muted-foreground">Earned</div>
                  <div className="font-bold gradient-text">{review.earned}</div>
                </div>
              </div>
              <p className="text-muted-foreground">{review.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;

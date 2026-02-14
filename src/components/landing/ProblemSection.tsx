import {
  Monitor,
  ShoppingCart,
  Link2,
  Share2,
  Wrench,
  Package,
  Headphones,
} from "lucide-react";
import problemImage from "@/assets/problem-image.jpg";

const problems = [
  { icon: Monitor, text: "Setting up a website feels confusing" },
  { icon: ShoppingCart, text: "Shopify-style setups feel like running a store" },
  { icon: Link2, text: "Affiliate links look unprofessional and scattered" },
  { icon: Share2, text: "Social media platforms control your reach" },
  { icon: Wrench, text: "Too many tools, no clear path" },
  { icon: Package, text: "Product planning, inventory, payments feel overwhelming" },
  { icon: Headphones, text: "Delivery & customer service add stress" },
];

const ProblemSection = () => {
  return (
    <section className="relative bg-background py-20 md:py-28 overflow-hidden">
      <div className="pointer-events-none absolute -right-40 top-20 h-80 w-80 rounded-full bg-destructive/5 blur-3xl" />
      <div className="container relative mx-auto px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-destructive/10 px-4 py-1.5 text-xs font-medium text-destructive">
              The struggle is real
            </div>
            <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
              Why most people don't start{" "}
              <span className="text-destructive">(or quit early)</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Starting an online health business sounds great — until you hit these walls.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {problems.map((p, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 rounded-xl border border-border/80 bg-card p-4 shadow-sm transition-all duration-200 hover:shadow-card-hover hover:border-destructive/20 hover:-translate-y-0.5"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-destructive/10">
                    <p.icon className="h-4 w-4 text-destructive" />
                  </div>
                  <span className="text-xs font-medium text-foreground">{p.text}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative flex justify-center">
            <div className="absolute inset-0 -m-4 rounded-3xl bg-destructive/5 blur-2xl" />
            <img
              src={problemImage}
              alt="Person overwhelmed with complex online business setup"
              className="relative h-auto w-full max-w-lg rounded-2xl border border-border/50 shadow-xl"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;

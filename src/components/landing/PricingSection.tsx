import { Button } from "@/components/ui/button";
import { Check, ArrowRight, Star } from "lucide-react";

const features = [
  "Full website access",
  "Back office customization",
  "Blog access",
  "Email signup capture",
  "Training material",
  "Hosting + updates",
];

const PricingSection = () => {
  return (
    <section id="pricing" className="relative bg-background py-20 md:py-28 overflow-hidden">
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            Simple, Transparent Pricing
          </h2>
          <p className="mx-auto mt-4 max-w-md text-muted-foreground">
            One plan, everything included. No hidden fees, no surprises.
          </p>
        </div>
        <div className="mx-auto mt-14 max-w-md">
          <div className="relative rounded-2xl border-2 border-primary bg-card shadow-glow overflow-hidden">
            {/* Top gradient bar */}
            <div className="h-1.5 gradient-primary" />

            {/* Popular badge */}
            <div className="absolute right-4 top-6">
              <div className="flex items-center gap-1 rounded-full gradient-primary px-3 py-1 text-xs font-medium text-primary-foreground shadow-md">
                <Star className="h-3 w-3" />
                Best Value
              </div>
            </div>

            <div className="p-8 pt-6">
              <h3 className="font-display text-2xl font-semibold text-foreground">Yearly Access</h3>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="font-display text-6xl font-bold gradient-text">$199</span>
                <span className="text-lg text-muted-foreground"> / year</span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">That's just ~$16.58/month</p>

              <div className="my-8 h-px bg-border" />

              <ul className="space-y-4">
                {features.map((f, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="flex h-5 w-5 items-center justify-center rounded-full gradient-primary shadow-sm">
                      <Check className="h-3 w-3 text-primary-foreground" />
                    </div>
                    <span className="text-sm text-foreground">{f}</span>
                  </li>
                ))}
              </ul>

              <Button asChild size="lg" className="mt-8 w-full gradient-primary border-0 text-base shadow-lg shadow-primary/25 transition-all hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5">
                <a href="#pricing">
                  Get Yearly Access
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>

              <p className="mt-4 text-center text-xs text-muted-foreground">
                Cancel anytime. No long-term lock-in.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;

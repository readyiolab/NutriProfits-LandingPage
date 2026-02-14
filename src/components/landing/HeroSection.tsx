import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden gradient-hero py-20 md:py-32">
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />

      <div className="container relative mx-auto px-4">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="max-w-xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-medium text-primary">
              <Sparkles className="h-3.5 w-3.5" />
              Ready-made health business website
            </div>
            <h1 className="font-display text-4xl font-bold leading-[1.1] text-foreground md:text-5xl lg:text-6xl">
              Launch your own health business website —{" "}
              <span className="gradient-text">already set up.</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground md:text-xl">
              A ready-made website with products, blog, and training. No inventory. No delivery.
              No tech hassle. Just personalize and promote.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Button asChild size="lg" className="gradient-primary border-0 px-8 text-base shadow-lg shadow-primary/25 transition-all hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5">
                <a href="#pricing">
                  Get Yearly Access
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <a
                href="#how-it-works"
                className="group flex items-center gap-1 text-sm font-medium text-primary underline-offset-4 hover:underline"
              >
                See how it works
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>
            <div className="mt-8 flex items-center gap-3 rounded-xl border border-border/50 bg-card/50 px-4 py-3 shadow-sm">
              <div className="h-2 w-2 rounded-full bg-success animate-pulse" />
              <p className="text-xs text-muted-foreground">
                Not MLM. No recruitment. No guaranteed income.
              </p>
            </div>
          </div>
          <div className="relative">
            {/* Glow behind image */}
            <div className="absolute inset-0 -m-4 rounded-3xl bg-primary/10 blur-2xl" />
            <div className="relative overflow-hidden rounded-2xl border border-border/50 shadow-2xl shadow-primary/10">
              <img
                src={heroImage}
                alt="Professional health business website displayed on a laptop"
                className="h-auto w-full object-cover"
                loading="eager"
              />
              {/* Glass overlay badge */}
              <div className="absolute bottom-4 left-4 glass rounded-lg border border-white/20 px-4 py-2 shadow-lg">
                <p className="text-xs font-medium text-foreground">✨ Your website, ready in 15 min</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

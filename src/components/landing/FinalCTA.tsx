import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Clock, Heart } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="relative overflow-hidden gradient-primary py-20 md:py-28">
      {/* Decorative circles */}
      <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-white/5" />
      <div className="pointer-events-none absolute -bottom-16 -right-16 h-48 w-48 rounded-full bg-white/5" />
      <div className="pointer-events-none absolute left-1/3 top-10 h-32 w-32 rounded-full bg-white/3" />

      <div className="container relative mx-auto px-4 text-center">
        <h2 className="font-display text-3xl font-bold text-primary-foreground md:text-4xl lg:text-5xl">
          Build something you actually own.
        </h2>
        <p className="mx-auto mt-6 max-w-lg text-lg text-primary-foreground/80 md:text-xl">
          A simple, ready-made website to promote health products professionally — with blog +
          training included.
        </p>
        <Button
          asChild
          size="lg"
          variant="secondary"
          className="mt-10 px-10 text-base font-semibold shadow-xl shadow-black/10 transition-all hover:-translate-y-0.5 hover:shadow-2xl"
        >
          <a href="#pricing">
            Launch Your Website Today
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </Button>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-8 text-sm text-primary-foreground/70">
          <span className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10">
              <Shield className="h-4 w-4" />
            </div>
            Cancel anytime
          </span>
          <span className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10">
              <Clock className="h-4 w-4" />
            </div>
            Setup in 15 minutes
          </span>
          <span className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10">
              <Heart className="h-4 w-4" />
            </div>
            No tech skills needed
          </span>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;

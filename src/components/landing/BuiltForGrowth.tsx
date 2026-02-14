import { TrendingUp, Layers, Eye, BarChart3 } from "lucide-react";
import growthImage from "@/assets/growth-image.jpg";

const growthPoints = [
  { icon: Layers, text: "Add blog posts as you learn" },
  { icon: Eye, text: "Expand your product selections" },
  { icon: BarChart3, text: "Build an audience that trusts you" },
];

const BuiltForGrowth = () => {
  return (
    <section className="relative bg-background py-20 md:py-28 overflow-hidden">
      <div className="pointer-events-none absolute -left-32 bottom-0 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
      <div className="container relative mx-auto px-4">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary">
              <TrendingUp className="h-3.5 w-3.5" />
              Scale at your pace
            </div>
            <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
              Not locked in.{" "}
              <span className="gradient-text">Built to grow.</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              As your confidence grows, your website grows with you. You stay in control of what
              appears on your site and how you present your recommendations.
            </p>
            <div className="mt-8 space-y-4">
              {growthPoints.map((point, i) => (
                <div key={i} className="flex items-center gap-4 rounded-xl border border-border/80 bg-card p-4 shadow-sm transition-all hover:shadow-card-hover hover:-translate-y-0.5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg gradient-primary shadow-sm">
                    <point.icon className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{point.text}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative flex justify-center">
            <div className="absolute inset-0 -m-6 rounded-3xl bg-primary/8 blur-2xl" />
            <img
              src={growthImage}
              alt="Growth illustration showing progress and expansion"
              className="relative h-auto w-full max-w-md rounded-2xl border border-primary/10 shadow-xl"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuiltForGrowth;

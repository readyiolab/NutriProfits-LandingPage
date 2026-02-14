import { Check, ArrowRight } from "lucide-react";
import solutionImage from "@/assets/solution-image.jpg";

const highlights = [
  "Professional design, already built",
  "Products handled by our partner",
  "Focus on your brand & content",
];

const SolutionSection = () => {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/3" />
      <div className="container relative mx-auto px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative flex justify-center lg:order-1">
            <div className="absolute inset-0 -m-4 rounded-3xl bg-primary/8 blur-2xl" />
            <img
              src={solutionImage}
              alt="Person working easily on a clean health business website"
              className="relative h-auto w-full max-w-lg rounded-2xl border border-primary/10 shadow-xl"
              loading="lazy"
            />
          </div>
          <div className="lg:order-0">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary">
              The solution
            </div>
            <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
              A ready-made business website{" "}
              <span className="gradient-text">you can grow into</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              You get a professional website that's already designed and ready to use. Products are
              handled by our partner. You focus only on your brand, content, and promotion.
            </p>
            <div className="mt-8 space-y-3">
              {highlights.map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full gradient-primary shadow-sm">
                    <Check className="h-3.5 w-3.5 text-primary-foreground" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-5 py-2.5 text-sm font-medium text-primary shadow-sm">
              <ArrowRight className="h-4 w-4" />
              Start simple. Expand when you're ready.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;

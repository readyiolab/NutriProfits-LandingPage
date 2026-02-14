import { Check, X } from "lucide-react";

const forItems = [
  "People who want a simple side-income / online business setup without tech",
  "Anyone who prefers promotion and relationships over operations",
  "Creators, wellness enthusiasts, and professionals who want a branded website",
];

const notForItems = [
  '"Get rich quick" seekers',
  "Anyone expecting guaranteed income without effort",
  "Anyone wanting to manage inventory, shipping, or customer support",
];

const WhoIsItFor = () => {
  return (
    <section className="gradient-section py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            Is This Right for You?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
            We believe in transparency. Here's exactly who this is — and isn't — for.
          </p>
        </div>
        <div className="mx-auto mt-14 grid max-w-4xl gap-8 md:grid-cols-2">
          {/* For card */}
          <div className="group relative rounded-2xl border border-primary/20 bg-card p-8 shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1">
            <div className="absolute inset-x-0 top-0 h-1 rounded-t-2xl gradient-primary" />
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                <Check className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground">This is for you</h3>
            </div>
            <div className="space-y-5">
              {forItems.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Check className="h-3 w-3 text-primary" />
                  </div>
                  <span className="text-sm leading-relaxed text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
          {/* Not for card */}
          <div className="group relative rounded-2xl border border-destructive/15 bg-card p-8 shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1">
            <div className="absolute inset-x-0 top-0 h-1 rounded-t-2xl bg-destructive/60" />
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-destructive/10">
                <X className="h-5 w-5 text-destructive" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground">This is NOT for you</h3>
            </div>
            <div className="space-y-5">
              {notForItems.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-destructive/10">
                    <X className="h-3 w-3 text-destructive" />
                  </div>
                  <span className="text-sm leading-relaxed text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoIsItFor;

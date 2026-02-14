import {
  Globe,
  Package,
  Palette,
  FileText,
  Mail,
  GraduationCap,
  TruckIcon,
} from "lucide-react";

const benefits = [
  { icon: Globe, title: "Ready-made website", desc: "No tech setup required — everything is built for you" },
  { icon: Package, title: "Products available", desc: "Curated health products through our partner program" },
  { icon: Palette, title: "Full personalization", desc: "Your logo, brand colors, contact info & social links" },
  { icon: FileText, title: "Built-in blog", desc: "Publish content for long-term organic growth" },
  { icon: Mail, title: "Email signup", desc: "Capture leads and stay connected with your audience" },
  { icon: GraduationCap, title: "Training included", desc: "Promotion strategies, content ideas & marketing basics" },
  { icon: TruckIcon, title: "No inventory or shipping", desc: "Partner handles fulfillment, delivery & support" },
];

const KeyBenefits = () => {
  return (
    <section id="benefits" className="gradient-section py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            Everything You Need, <span className="gradient-text">Built In</span>
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
            No hunting for plugins, tools, or services. It's all included from day one.
          </p>
        </div>
        <div className="mx-auto mt-14 grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b, i) => (
            <div
              key={i}
              className="group flex flex-col rounded-2xl border border-border/80 bg-card p-6 shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 hover:border-primary/20"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/15">
                <b.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-4 font-display text-base font-semibold text-foreground">
                {b.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyBenefits;

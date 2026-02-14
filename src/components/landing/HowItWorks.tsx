import {
  UserPlus,
  Handshake,
  Settings,
  Megaphone,
  PenTool,
  DollarSign,
  Globe,
} from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    title: "Sign up with us",
    desc: "Activate your ready-made website. Design, hosting, and the structure are already set up.",
  },
  {
    icon: Handshake,
    title: "Register with our partner (free)",
    desc: "Create a free affiliate account with our product partner Nutriprofit to get your personal affiliate links.",
  },
  {
    icon: Settings,
    title: "Personalize your site (10–15 min)",
    desc: "Update your name, logo, contact details, social media links, affiliate links, and choose which products to show.",
  },
  {
    icon: Megaphone,
    title: "Promote anywhere",
    desc: "Share via WhatsApp, Telegram, Instagram, Facebook, YouTube, email, newsletters, or offline.",
  },
  {
    icon: PenTool,
    title: "Write blogs to attract visitors",
    desc: "Use the built-in blog for health topics, wellness tips, and product education to build trust organically.",
  },
  {
    icon: DollarSign,
    title: "Sell & earn commissions",
    desc: "Customers are redirected to the official Nutriprofit product page with your affiliate tracking. Earn up to 45% commission.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="relative bg-background py-20 md:py-28 overflow-hidden">
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary">
            Simple 6-step process
          </div>
          <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            How It Works
          </h2>
          <p className="mt-4 text-muted-foreground">
            Six simple steps from sign-up to earning commissions.
          </p>
        </div>
        <div className="mx-auto mt-14 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, i) => (
            <div
              key={i}
              className="group relative rounded-2xl border border-border/80 bg-card p-7 shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 hover:border-primary/25"
            >
              {/* Step number background */}
              <div className="pointer-events-none absolute right-4 top-4 font-display text-5xl font-bold text-primary/[0.06]">
                {i + 1}
              </div>
              <div className="relative mb-5 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl gradient-primary text-primary-foreground text-sm font-bold shadow-md shadow-primary/20">
                  {i + 1}
                </div>
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/8">
                  <step.icon className="h-4.5 w-4.5 text-primary" />
                </div>
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <div className="flex items-center gap-3 rounded-2xl border border-primary/15 bg-primary/5 px-6 py-4 shadow-sm">
            <Globe className="h-5 w-5 text-primary" />
            <p className="text-sm text-muted-foreground">
              <strong className="text-foreground">Global selling:</strong> Promote from anywhere
              and sell to customers across multiple countries.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

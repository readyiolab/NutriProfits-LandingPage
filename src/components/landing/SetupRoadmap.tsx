import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard,
  Palette,
  FolderTree,
  Package,
  FileText,
  HelpCircle,
  Layout,
  Settings,
  Globe,
  CheckCircle2,
  Lightbulb,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";

import guideLogin from "@/assets/guide-login.jpg";
import guideBranding from "@/assets/guide-branding.jpg";
import guideProducts from "@/assets/guide-products.jpg";
import guideContent from "@/assets/guide-content.jpg";
import guideDomain from "@/assets/guide-domain.jpg";

const steps = [
  {
    id: 1,
    title: "First Login",
    icon: LayoutDashboard,
    image: guideLogin,
    desc: "Access your backoffice dashboard using your registered credentials.",
    content: (
      <div className="grid gap-5 md:grid-cols-2">
        <div className="rounded-xl border border-border bg-background p-5">
          <p className="mb-2 text-sm font-semibold text-foreground">Login URL</p>
          <code className="block rounded-lg bg-muted px-3 py-2 text-xs text-primary break-all">
            https://your-subdomain.nutriprofits.com/backoffice
          </code>
          <div className="mt-4 space-y-2 text-sm text-muted-foreground">
            <p><strong className="text-foreground">Email:</strong> Your registered email</p>
            <p><strong className="text-foreground">Password:</strong> Your password</p>
          </div>
        </div>
        <div className="rounded-xl border border-border bg-background p-5">
          <p className="mb-3 text-sm font-semibold text-foreground">Checklist</p>
          <ul className="space-y-2.5">
            {["Open login URL", "Enter credentials", "Click Login", "View Dashboard"].map((item) => (
              <li key={item} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" /> {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    ),
  },
  {
    id: 2,
    title: "Site Branding",
    icon: Palette,
    image: guideBranding,
    desc: "Establish your visual identity with logo, colors, and favicon.",
    content: (
      <div className="grid gap-3 sm:grid-cols-2">
        {[
          { l: "Site Name", d: "Your store name (e.g., GreenLife Stores)" },
          { l: "Logo", d: "PNG/JPG (Max 2MB)" },
          { l: "Primary Color", d: "Main brand color" },
          { l: "Secondary Color", d: "Accent color" },
        ].map((item) => (
          <div key={item.l} className="flex items-start gap-3 rounded-xl border border-border bg-background p-4 transition-all hover:border-primary/25 hover:shadow-sm">
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
            <div>
              <p className="text-sm font-medium text-foreground">{item.l}</p>
              <p className="text-xs text-muted-foreground">{item.d}</p>
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: 3,
    title: "Categories",
    icon: FolderTree,
    image: guideProducts,
    desc: "Organize your products into easy-to-browse categories.",
    content: (
      <div className="space-y-3">
        {[
          { n: 1, t: "Add New Category", d: "Click the + Add button in the Categories page." },
          { n: 2, t: "Fill Details", d: "Name is required. Image is recommended for better visuals." },
          { n: 3, t: "Save", d: "Your category is now ready for products." },
        ].map((s) => (
          <div key={s.n} className="flex items-start gap-4 rounded-xl border border-border bg-background p-4 transition-all hover:border-primary/25">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full gradient-primary text-sm font-bold text-primary-foreground shadow-md shadow-primary/20">{s.n}</div>
            <div>
              <p className="text-sm font-semibold text-foreground">{s.t}</p>
              <p className="text-xs text-muted-foreground mt-0.5">{s.d}</p>
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: 4,
    title: "Products",
    icon: Package,
    image: guideProducts,
    desc: "Add your health products with all essential details.",
    content: (
      <div className="overflow-x-auto rounded-xl border border-border">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border bg-muted/50">
              <th className="px-4 py-3 text-left font-medium text-foreground">Field</th>
              <th className="px-4 py-3 text-left font-medium text-foreground">Requirement</th>
              <th className="px-4 py-3 text-left font-medium text-foreground">Note</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {[
              ["Product Name", "Required", "Use clear, descriptive names"],
              ["Price", "Required", "Set competitive pricing"],
              ["Image", "Required", "High quality, square ratio"],
              ["Category", "Required", "Organize for discovery"],
            ].map(([f, r, n]) => (
              <tr key={f} className="text-muted-foreground">
                <td className="px-4 py-3 font-medium text-foreground">{f}</td>
                <td className="px-4 py-3">
                  <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">{r}</span>
                </td>
                <td className="px-4 py-3">{n}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    ),
  },
  {
    id: 5,
    title: "Page Content",
    icon: FileText,
    image: guideContent,
    desc: "Customize your About, Contact, Product, and Category pages.",
    content: (
      <div className="grid gap-3 sm:grid-cols-2">
        {[
          { title: "About Content", desc: "Tell your story, mission, and vision." },
          { title: "Contact Info", desc: "Add email, phone, address, and map." },
          { title: "Product Page", desc: "Customize layouts and hero sections." },
          { title: "Category Page", desc: "Set up banners and descriptions." },
        ].map((page) => (
          <div key={page.title} className="rounded-xl border border-border bg-background p-4 transition-all hover:border-primary/25 hover:shadow-sm">
            <div className="flex items-center gap-2 mb-1">
              <FileText className="h-4 w-4 text-primary" />
              <p className="text-sm font-semibold text-foreground">{page.title}</p>
            </div>
            <p className="text-xs text-muted-foreground">{page.desc}</p>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: 6,
    title: "FAQs",
    icon: HelpCircle,
    image: guideContent,
    desc: "Add frequently asked questions to help your customers.",
    content: (
      <div className="flex items-start gap-3 rounded-xl border border-primary/15 bg-primary/5 p-5">
        <Lightbulb className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
        <p className="text-sm text-muted-foreground">
          <strong className="text-foreground">Pro Tip:</strong> Good FAQs can reduce support inquiries by up to 30%. Include shipping times, return policies, and product usage tips.
        </p>
      </div>
    ),
  },
  {
    id: 7,
    title: "Footer",
    icon: Layout,
    image: guideContent,
    desc: "Configure the bottom section of your website.",
    content: (
      <div className="grid gap-3 sm:grid-cols-3">
        {["Company Description", "Social Media Links", "Copyright Text"].map((item) => (
          <div key={item} className="flex items-center gap-3 rounded-xl border border-border bg-background p-4 transition-all hover:border-primary/25">
            <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
            <span className="text-sm text-foreground font-medium">{item}</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: 8,
    title: "Settings",
    icon: Settings,
    image: guideBranding,
    desc: "Configure general site settings to match your target audience.",
    content: (
      <div className="grid gap-3 sm:grid-cols-2">
        {[
          { l: "Timezone", d: "Set to your customers' region" },
          { l: "Currency", d: "Match your target market" },
          { l: "Language", d: "Primary language preference" },
          { l: "SEO Metadata", d: "Titles, descriptions for search" },
        ].map((item) => (
          <div key={item.l} className="flex items-start gap-3 rounded-xl border border-border bg-background p-4 transition-all hover:border-primary/25">
            <Settings className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
            <div>
              <p className="text-sm font-medium text-foreground">{item.l}</p>
              <p className="text-xs text-muted-foreground">{item.d}</p>
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: 9,
    title: "Custom Domain",
    icon: Globe,
    image: guideDomain,
    desc: "Connect your own domain name for a professional look.",
    content: (
      <div className="grid gap-5 md:grid-cols-2">
        <div className="rounded-xl border border-border bg-background p-5">
          <p className="mb-3 text-sm font-semibold text-foreground">DNS Configuration</p>
          <p className="mb-3 text-xs text-muted-foreground">Add these records at your registrar</p>
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-xs">
              <thead>
                <tr className="border-b border-border bg-muted/50">
                  <th className="px-3 py-2 text-left font-medium text-foreground">Type</th>
                  <th className="px-3 py-2 text-left font-medium text-foreground">Name</th>
                  <th className="px-3 py-2 text-left font-medium text-foreground">Value</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-muted-foreground">
                <tr>
                  <td className="px-3 py-2 font-medium text-foreground">CNAME</td>
                  <td className="px-3 py-2">www</td>
                  <td className="px-3 py-2 break-all">your-subdomain.nutriprofits.com</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-medium text-foreground">A</td>
                  <td className="px-3 py-2">@</td>
                  <td className="px-3 py-2">[System IP Address]</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="rounded-xl border border-border bg-background p-5">
          <p className="mb-3 text-sm font-semibold text-foreground">Setup Process</p>
          <div className="space-y-4">
            {[
              { n: 1, t: "Add Domain", d: "Enter domain in settings" },
              { n: 2, t: "Configure DNS", d: "Update registrar records" },
              { n: 3, t: "Verify", d: "Wait 24-48h for propagation" },
            ].map((s) => (
              <div key={s.n} className="flex items-start gap-3">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">{s.n}</div>
                <div>
                  <p className="text-sm font-medium text-foreground">{s.t}</p>
                  <p className="text-xs text-muted-foreground">{s.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
  },
];

const SetupRoadmap = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [direction, setDirection] = useState(0);

  const goTo = (idx: number) => {
    setDirection(idx > activeStep ? 1 : -1);
    setActiveStep(idx);
  };

  const next = () => {
    if (activeStep < steps.length - 1) {
      setDirection(1);
      setActiveStep((p) => p + 1);
    }
  };

  const prev = () => {
    if (activeStep > 0) {
      setDirection(-1);
      setActiveStep((p) => p - 1);
    }
  };

  const current = steps[activeStep];
  const Icon = current.icon;

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? 80 : -80, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? -80 : 80, opacity: 0 }),
  };

  return (
    <section id="setup-guide" className="relative bg-background py-20 md:py-28 overflow-hidden">
      {/* Decorative */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="pointer-events-none absolute -right-40 top-20 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
      <div className="pointer-events-none absolute -left-40 bottom-20 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />

      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary">
            <Sparkles className="h-3.5 w-3.5" />
            9-step setup guide
          </div>
          <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            Setup <span className="gradient-text">Roadmap</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Follow this step-by-step guide to get your store completely set up and ready for launch.
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          className="mx-auto mt-12 max-w-5xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <div className="overflow-x-auto pb-2 scrollbar-hide">
            <div className="flex items-center gap-1.5 rounded-2xl border border-border bg-card p-1.5 min-w-max">
              {steps.map((step, idx) => {
                const StepIcon = step.icon;
                const isActive = activeStep === idx;
                return (
                  <button
                    key={step.id}
                    onClick={() => goTo(idx)}
                    className={`relative flex items-center gap-2 rounded-xl px-3 py-2.5 text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                      isActive
                        ? "text-primary-foreground shadow-lg shadow-primary/25"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 gradient-primary rounded-xl"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                      />
                    )}
                    <span className="relative flex items-center gap-2">
                      <StepIcon className="h-4 w-4" />
                      <span className="hidden sm:inline">{step.title}</span>
                      <span className="sm:hidden">{step.id}</span>
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Content Area */}
        <div className="mx-auto mt-8 max-w-5xl">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={activeStep}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="rounded-3xl border border-border/80 bg-card shadow-card overflow-hidden"
            >
              {/* Image + Header */}
              <div className="grid md:grid-cols-5">
                <div className="relative md:col-span-2 h-48 md:h-auto overflow-hidden">
                  <img
                    src={current.image}
                    alt={current.title}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:via-transparent md:to-card" />
                  {/* Step badge */}
                  <div className="absolute top-4 left-4 flex h-12 w-12 items-center justify-center rounded-2xl gradient-primary text-primary-foreground text-lg font-bold shadow-lg shadow-primary/30">
                    {current.id}
                  </div>
                </div>

                <div className="md:col-span-3 p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-2">
                    <Icon className="h-5 w-5 text-primary" />
                    <h3 className="font-display text-2xl font-bold text-foreground">
                      {current.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground mb-6">{current.desc}</p>

                  {/* Step-specific content */}
                  {current.content}
                </div>
              </div>

              {/* Navigation footer */}
              <div className="flex items-center justify-between border-t border-border px-6 py-4 md:px-8">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={prev}
                  disabled={activeStep === 0}
                  className="gap-1.5"
                >
                  <ChevronLeft className="h-4 w-4" />
                  Previous
                </Button>

                {/* Progress dots */}
                <div className="hidden sm:flex items-center gap-1.5">
                  {steps.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => goTo(idx)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        idx === activeStep
                          ? "w-6 gradient-primary"
                          : idx < activeStep
                          ? "w-2 bg-primary/40"
                          : "w-2 bg-border"
                      }`}
                    />
                  ))}
                </div>

                <span className="sm:hidden text-xs text-muted-foreground font-medium">
                  {activeStep + 1} / {steps.length}
                </span>

                {activeStep < steps.length - 1 ? (
                  <Button
                    size="sm"
                    onClick={next}
                    className="gap-1.5 gradient-primary border-0 shadow-md shadow-primary/20"
                  >
                    Next
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                ) : (
                  <Button
                    size="sm"
                    className="gap-1.5 gradient-primary border-0 shadow-md shadow-primary/20"
                  >
                    Get Started
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Help CTA */}
        <motion.div
          className="mx-auto mt-12 max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="rounded-2xl border border-primary/15 bg-primary/5 p-6 md:p-8">
            <h3 className="font-display text-xl font-semibold text-foreground">Need Extra Help?</h3>
            <p className="mx-auto mt-2 max-w-lg text-sm text-muted-foreground">
              Our support team is available to assist you with any questions or technical issues during setup.
            </p>
            <Button className="mt-5 gradient-primary border-0 shadow-md shadow-primary/20">
              Contact Support <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SetupRoadmap;

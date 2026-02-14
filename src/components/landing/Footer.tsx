import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <span className="font-display text-xl font-bold gradient-text">HealthBiz</span>
          <div className="flex gap-8 text-sm text-muted-foreground">
            <a href="#how-it-works" className="transition-colors hover:text-foreground">How It Works</a>
            <a href="#benefits" className="transition-colors hover:text-foreground">Benefits</a>
            <a href="#pricing" className="transition-colors hover:text-foreground">Pricing</a>
            <a href="#faq" className="transition-colors hover:text-foreground">FAQ</a>
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-8 text-center text-xs text-muted-foreground">
          <p className="flex items-center justify-center gap-1">
            © {new Date().getFullYear()} HealthBiz. Made with <Heart className="h-3 w-3 text-destructive" /> All rights reserved.
          </p>
          <p className="mt-2 text-muted-foreground/70">Not MLM. No guaranteed income.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

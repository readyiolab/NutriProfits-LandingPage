import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    q: "Is this Shopify or ecommerce?",
    a: "No. You don't manage inventory, shipping, or customer support. You only promote.",
  },
  {
    q: "Is this MLM?",
    a: "No recruitment. No downlines. No pressure selling.",
  },
  {
    q: "Do I need technical skills?",
    a: "No. It's ready-made. You only update your profile and affiliate links.",
  },
  {
    q: "Do you guarantee income?",
    a: "No. Earnings depend on your efforts, audience, and promotion.",
  },
  {
    q: "Who handles payment, delivery, and support?",
    a: "Our partner (Nutriprofit) handles payment, delivery, and customer support.",
  },
  {
    q: "How do I earn?",
    a: "When customers purchase via your affiliate-tracked links, commissions are credited as per the partner program.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="gradient-section py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary">
            <HelpCircle className="h-3.5 w-3.5" />
            Common questions
          </div>
          <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="mx-auto mt-14 max-w-2xl">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="rounded-2xl border border-border/80 bg-card px-6 shadow-sm transition-shadow data-[state=open]:shadow-card-hover data-[state=open]:border-primary/20"
              >
                <AccordionTrigger className="text-left font-medium text-foreground hover:no-underline py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

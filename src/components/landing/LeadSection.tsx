import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, CheckCircle } from "lucide-react";

const LeadSection = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative bg-background py-20 md:py-28 overflow-hidden">
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />

      <div className="container relative mx-auto px-4">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* Left copy */}
          <div className="max-w-lg">
            <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
              Have Questions? <span className="gradient-text">Let's Talk.</span>
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Whether you're curious about how it works, want a quick demo, or just need some guidance — drop us a message and we'll get back to you within 24 hours.
            </p>
            <div className="mt-8 space-y-4">
              {[
                "No pressure, no sales pitch",
                "Get personalized answers",
                "Learn if this is right for you",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full gradient-primary">
                    <CheckCircle className="h-3.5 w-3.5 text-primary-foreground" />
                  </div>
                  <span className="text-sm text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right form */}
          <div className="rounded-2xl border border-border/80 bg-card p-8 shadow-card">
            {submitted ? (
              <div className="flex flex-col items-center py-12 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full gradient-primary shadow-lg shadow-primary/25">
                  <CheckCircle className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="mt-6 font-display text-2xl font-bold text-foreground">
                  Message Sent!
                </h3>
                <p className="mt-2 text-muted-foreground">
                  We'll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-foreground">Name</label>
                    <Input
                      required
                      maxLength={100}
                      placeholder="Your name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="bg-background"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-foreground">Phone</label>
                    <Input
                      type="tel"
                      maxLength={20}
                      placeholder="Your phone (optional)"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="bg-background"
                    />
                  </div>
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-foreground">Email</label>
                  <Input
                    required
                    type="email"
                    maxLength={255}
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="bg-background"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-foreground">Message</label>
                  <Textarea
                    required
                    maxLength={1000}
                    placeholder="How can we help you?"
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="bg-background"
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full gradient-primary border-0 text-base shadow-lg shadow-primary/25 transition-all hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5"
                >
                  Send Message
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadSection;

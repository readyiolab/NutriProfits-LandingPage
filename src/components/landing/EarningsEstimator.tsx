import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Calculator, TrendingUp, DollarSign, Target } from "lucide-react";

const presets = [
  { label: "Starter", orders: 10, desc: "Personal network" },
  { label: "Consistent", orders: 30, desc: "Content + sharing" },
  { label: "Growth", orders: 60, desc: "Content + audience" },
];

const commissionRates = [10, 20, 30, 45];

const EarningsEstimator = () => {
  const [aov, setAov] = useState(80);
  const [rate, setRate] = useState(20);
  const [orders, setOrders] = useState(10);

  const monthly = aov * (rate / 100) * orders;
  const yearly = monthly * 12;
  const breakEvenOrders = Math.ceil(199 / (aov * (rate / 100)));

  return (
    <section className="relative gradient-section py-20 md:py-28 overflow-hidden">
      <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <div className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary">
              <Calculator className="h-3.5 w-3.5" />
              Planning tool
            </div>
            <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
              Earnings Estimator
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-sm text-muted-foreground">
              Estimate your potential commission based on your own assumptions. Actual earnings
              depend on your effort, audience, traffic, product mix, and partner terms.
            </p>
          </div>

          <div className="mt-12 rounded-2xl border border-primary/15 bg-card p-8 shadow-card">
            <div className="space-y-7">
              {/* Presets */}
              <div>
                <Label className="mb-3 block text-xs font-medium uppercase tracking-wider text-muted-foreground">Quick presets</Label>
                <div className="flex flex-wrap gap-2">
                  {presets.map((p) => (
                    <Button
                      key={p.label}
                      variant={orders === p.orders ? "default" : "outline"}
                      size="sm"
                      onClick={() => setOrders(p.orders)}
                      className={orders === p.orders ? "gradient-primary border-0 shadow-md shadow-primary/20" : ""}
                    >
                      {p.label} ({p.orders}/mo)
                    </Button>
                  ))}
                </div>
              </div>

              {/* AOV */}
              <div>
                <Label className="text-sm font-medium">Average Order Value ($)</Label>
                <Input
                  type="number"
                  min={1}
                  value={aov}
                  onChange={(e) => setAov(Math.max(1, Number(e.target.value)))}
                  className="mt-2 max-w-[180px] border-border/80 shadow-sm"
                />
              </div>

              {/* Commission Rate */}
              <div>
                <Label className="text-sm font-medium">Commission Rate: <span className="gradient-text font-bold">{rate}%</span></Label>
                <Slider
                  className="mt-3"
                  min={10}
                  max={45}
                  step={5}
                  value={[rate]}
                  onValueChange={([v]) => setRate(v)}
                />
                <div className="mt-2 flex justify-between text-xs text-muted-foreground">
                  {commissionRates.map((r) => (
                    <span key={r} className={r === rate ? "font-bold text-primary" : ""}>{r}%</span>
                  ))}
                </div>
              </div>

              {/* Orders */}
              <div>
                <Label className="text-sm font-medium">Orders per Month</Label>
                <Input
                  type="number"
                  min={1}
                  value={orders}
                  onChange={(e) => setOrders(Math.max(1, Number(e.target.value)))}
                  className="mt-2 max-w-[180px] border-border/80 shadow-sm"
                />
              </div>

              {/* Results */}
              <div className="grid gap-4 rounded-2xl border border-primary/15 bg-gradient-to-br from-primary/5 to-primary/10 p-6 sm:grid-cols-3">
                <div className="text-center">
                  <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15">
                    <DollarSign className="h-5 w-5 text-primary" />
                  </div>
                  <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Monthly</p>
                  <p className="mt-1 font-display text-2xl font-bold text-primary md:text-3xl">
                    ${monthly.toLocaleString()}
                  </p>
                </div>
                <div className="text-center">
                  <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15">
                    <TrendingUp className="h-5 w-5 text-primary" />
                  </div>
                  <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Yearly</p>
                  <p className="mt-1 font-display text-2xl font-bold text-primary md:text-3xl">
                    ${yearly.toLocaleString()}
                  </p>
                </div>
                <div className="text-center">
                  <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-foreground/10">
                    <Target className="h-5 w-5 text-foreground" />
                  </div>
                  <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Break-even</p>
                  <p className="mt-1 font-display text-2xl font-bold text-foreground">
                    ~{breakEvenOrders} orders
                  </p>
                  <p className="text-xs text-muted-foreground">to cover $199/yr</p>
                </div>
              </div>

              <div className="rounded-xl border border-warning/20 bg-warning/5 p-4 text-xs text-muted-foreground">
                <strong className="text-foreground">⚠️ Disclaimer:</strong> This calculator provides examples for planning only.
                Actual earnings vary and are not guaranteed.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EarningsEstimator;

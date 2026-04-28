import { Reveal } from "./Reveal";
import { Plus } from "lucide-react";

const placeholders = [
  "Engineering Lead",
  "Product Designer",
  "AI Engineer",
  "Full-Stack Engineer",
  "Delivery Manager",
  "QA Engineer",
  "Growth Strategist",
];

export function Team() {
  return (
    <section id="team" className="relative py-32 border-t hairline">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-primary">
                The Team
              </div>
              <h2 className="mt-4 text-4xl font-semibold leading-[1.05] md:text-5xl">
                Small team. <span className="text-gradient-teal">Heavy craft.</span>
              </h2>
            </div>
            <p className="max-w-md text-sm text-muted-foreground">
              A focused group of builders, designers, and operators — assembling
              quietly, shipping loudly.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {/* Founder card — featured */}
          <Reveal>
            <article
              className="group relative col-span-1 sm:col-span-2 lg:col-span-2 lg:row-span-2 flex h-full min-h-[320px] flex-col justify-between overflow-hidden rounded-2xl p-8 lg:p-10"
              style={{
                background:
                  "radial-gradient(ellipse at top right, oklch(0.84 0.16 195 / 0.18), transparent 60%), linear-gradient(180deg, oklch(0.22 0.014 240), oklch(0.18 0.012 240))",
                border: "1px solid oklch(0.84 0.16 195 / 0.25)",
                boxShadow: "var(--shadow-elevated)",
              }}
            >
              <div
                aria-hidden
                className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full blur-3xl"
                style={{
                  background:
                    "radial-gradient(circle, oklch(0.84 0.16 195 / 0.35), transparent 70%)",
                }}
              />
              <div className="relative">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-[10px] uppercase tracking-wider text-primary">
                  <span className="h-1 w-1 rounded-full bg-primary animate-pulse" />
                  Founder
                </span>
              </div>

              <div className="relative mt-10">
                <div className="flex items-center gap-5">
                  <div
                    className="flex h-20 w-20 items-center justify-center rounded-2xl text-2xl font-semibold text-primary-foreground"
                    style={{ background: "var(--gradient-accent)" }}
                  >
                    MS
                  </div>
                  <div>
                    <h3 className="text-3xl font-semibold tracking-tight">
                      Mayank Sharma
                    </h3>
                    <div className="mt-1 text-sm text-primary">
                      Chief Executive Officer
                    </div>
                  </div>
                </div>
                <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
                  Leads strategy, product, and delivery across the firm.
                  Operates close to the build — and even closer to the client.
                </p>
              </div>
            </article>
          </Reveal>

          {placeholders.map((role, i) => (
            <Reveal key={role} delay={0.1 + i * 0.04}>
              <article className="group relative flex h-full min-h-[200px] flex-col justify-between overflow-hidden rounded-2xl surface-glass p-6 transition-all duration-500 hover:border-primary/20">
                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border hairline bg-white/[0.02] text-muted-foreground/60">
                    <Plus className="h-4 w-4" strokeWidth={1.5} />
                  </div>
                  <span className="text-[10px] uppercase tracking-wider text-muted-foreground/60">
                    Joining soon
                  </span>
                </div>
                <div>
                  <div className="text-xs text-muted-foreground/50">— —</div>
                  <h3 className="mt-1 text-base font-semibold text-foreground/80">
                    {role}
                  </h3>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

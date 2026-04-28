import { Reveal } from "./Reveal";

const steps = [
  {
    n: "01",
    t: "Discovery",
    d: "We dig into the business, the users, and the constraints — before proposing any solution.",
  },
  {
    n: "02",
    t: "Scoping",
    d: "Tight, honest scopes with clear deliverables, timelines, and success metrics. No surprises.",
  },
  {
    n: "03",
    t: "Design & Architecture",
    d: "Interfaces and systems designed in parallel — so what we ship is both usable and durable.",
  },
  {
    n: "04",
    t: "Agile Build",
    d: "Short cycles, weekly demos, transparent progress. You see the product grow with you.",
  },
  {
    n: "05",
    t: "QA & Launch",
    d: "Hardened, tested, and shipped with care. Launch is a milestone, not a finish line.",
  },
  {
    n: "06",
    t: "Support & Scale",
    d: "We stay engaged — improving, scaling, and evolving the product as the business grows.",
  },
];

export function Process() {
  return (
    <section id="process" className="relative py-32 border-t hairline">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="text-xs uppercase tracking-[0.3em] text-primary">
            How We Work
          </div>
          <h2 className="mt-4 max-w-2xl text-4xl font-semibold leading-[1.05] md:text-5xl">
            A process built for clarity,
            <br />
            <span className="text-gradient-teal">speed, and trust.</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl surface-glass md:grid-cols-2 lg:grid-cols-3">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.05}>
              <div className="relative h-full bg-background/40 p-8 transition-colors hover:bg-white/[0.03]">
                <div className="flex items-baseline gap-3">
                  <span className="font-display text-4xl font-semibold text-primary/70">
                    {s.n}
                  </span>
                  <span className="h-px flex-1 bg-hairline" />
                </div>
                <h3 className="mt-5 text-xl font-semibold tracking-tight">
                  {s.t}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {s.d}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

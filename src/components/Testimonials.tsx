import { Reveal } from "./Reveal";

const quotes = [
  {
    name: "Avinash Kharabe",
    role: "Founder, Streak-E",
    quote:
      "They understood the product before writing a single line of code. The execution has been sharp, calm, and consistently ahead of schedule.",
  },
  {
    name: "Vinay Dalvi",
    role: "Owner, PG Operations",
    quote:
      "Our day-to-day got dramatically smoother. The system fits how we actually work — not how a generic tool wants us to work.",
  },
  {
    name: "Anil Bharne",
    role: "Owner, Hotel The Tree",
    quote:
      "Hospitality software usually feels heavy. This team delivered something our front desk can actually love using.",
  },
  {
    name: "Kandice Alcide",
    role: "Founder, Trevollet AI",
    quote:
      "They translated a messy AI vision into a focused, shippable product. Genuine partners — not just a vendor.",
  },
];

export function Testimonials() {
  return (
    <section className="relative py-32 border-t hairline">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-[0.3em] text-primary">
              Trusted by Operators & Founders
            </div>
            <h2 className="mt-4 text-4xl font-semibold leading-[1.05] md:text-5xl">
              Outcomes, in their words.
            </h2>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {quotes.map((q, i) => (
            <Reveal key={q.name} delay={i * 0.08}>
              <figure
                className="relative h-full rounded-2xl surface-glass p-8 md:p-10"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <span
                  aria-hidden
                  className="absolute -top-2 left-8 text-7xl leading-none text-primary/30 select-none font-display"
                >
                  “
                </span>
                <blockquote className="text-lg leading-relaxed text-foreground/90">
                  {q.quote}
                </blockquote>
                <figcaption className="mt-8 flex items-center gap-3 border-t hairline pt-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary ring-1 ring-primary/30">
                    {q.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <div className="text-sm font-semibold">{q.name}</div>
                    <div className="text-xs text-muted-foreground">
                      {q.role}
                    </div>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

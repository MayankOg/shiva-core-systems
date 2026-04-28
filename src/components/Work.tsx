import { Reveal } from "./Reveal";
import { Lock } from "lucide-react";

const projects = [
  {
    name: "PG Management System",
    client: "Vinay Dalvi",
    status: "Active Build",
    tags: ["SaaS", "Operations", "Web"],
    desc: "An end-to-end management platform for PG and co-living operators — tenants, billing, occupancy, and staff workflows in one system.",
  },
  {
    name: "Hotel PMS — The Tree",
    client: "Anil Bharne",
    status: "In Progress",
    tags: ["PMS", "Hospitality", "Web"],
    desc: "A property management suite tailored for boutique hotels: reservations, housekeeping, rate plans, and a clean front-desk experience.",
  },
  {
    name: "Trevollet AI",
    client: "Kandice Alcide",
    status: "In Progress",
    tags: ["AI", "Travel", "Mobile"],
    desc: "An AI-powered travel advisor that turns scattered planning into a single, intelligent itinerary — built around real traveler intent.",
  },
  {
    name: "Streak-E",
    client: "Avinash Kharabe",
    status: "Active Build",
    tags: ["Social", "Rewards", "Mobile"],
    desc: "A Snapchat-style rewarding app where streaks become value — engagement mechanics paired with a tasteful reward economy.",
  },
  {
    name: "Dare or Date",
    client: "Confidential",
    status: "Coming Soon",
    tags: ["Dating", "Social", "Mobile"],
    desc: "A dating app with a twist — built around playful dares that turn matches into moments worth remembering.",
  },
];

const statusStyles: Record<string, string> = {
  "Active Build": "text-primary border-primary/40 bg-primary/5",
  "In Progress": "text-amber-300 border-amber-400/30 bg-amber-400/5",
  "Coming Soon": "text-violet-300 border-violet-400/30 bg-violet-400/5",
  Delivered: "text-emerald-300 border-emerald-400/30 bg-emerald-400/5",
};

export function Work() {
  return (
    <section id="work" className="relative py-32 border-t hairline">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-primary">
                Selected Work
              </div>
              <h2 className="mt-4 text-4xl font-semibold leading-[1.05] md:text-5xl">
                Products in motion.
              </h2>
            </div>
            <p className="max-w-md text-sm text-muted-foreground">
              A look at what we're currently building with our partners. Some
              products are confidential, in active development, or not yet
              publicly deployed.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.06}>
              <article
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl surface-glass p-7 transition-all duration-500 hover:-translate-y-1 hover:border-primary/30"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                {/* Top decorative gradient */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-x-0 top-0 h-px"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, oklch(0.84 0.16 195 / 0.6), transparent)",
                  }}
                />

                <div className="flex items-center justify-between">
                  <span
                    className={`rounded-full border px-2.5 py-1 text-[10px] uppercase tracking-wider ${statusStyles[p.status]}`}
                  >
                    {p.status}
                  </span>
                  {p.client === "Confidential" ? (
                    <span className="inline-flex items-center gap-1 text-[10px] uppercase tracking-wider text-muted-foreground">
                      <Lock className="h-3 w-3" /> Confidential
                    </span>
                  ) : (
                    <span className="text-[10px] uppercase tracking-wider text-muted-foreground">
                      with {p.client}
                    </span>
                  )}
                </div>

                <h3 className="mt-6 text-2xl font-semibold tracking-tight">
                  {p.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {p.desc}
                </p>

                <div className="mt-auto pt-6 flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border hairline px-2.5 py-1 text-[11px] text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

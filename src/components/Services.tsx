import { Reveal } from "./Reveal";
import {
  Database,
  Rocket,
  Layers,
  Sparkles,
  PenTool,
  LineChart,
} from "lucide-react";

const services = [
  {
    icon: Database,
    title: "CRM Implementation & Customization",
    desc: "Tailored CRM systems that map to how your business actually runs — from pipeline to post-sale, deployed without the bloat.",
  },
  {
    icon: Rocket,
    title: "Startup MVP Development",
    desc: "From validated idea to shippable product in weeks. We compress the path between vision and the first paying customer.",
  },
  {
    icon: Layers,
    title: "Full-Stack App Development",
    desc: "Production-grade web and mobile applications, architected to scale with your team, traffic, and roadmap.",
  },
  {
    icon: Sparkles,
    title: "AI-Powered Solutions",
    desc: "Practical AI features that move metrics — assistants, automations, and intelligent workflows wired into your product.",
  },
  {
    icon: PenTool,
    title: "UI / UX Design",
    desc: "Interfaces that earn trust on first use. Considered systems, clean motion, and decisions backed by user behavior.",
  },
  {
    icon: LineChart,
    title: "Support & Scaling",
    desc: "We don't disappear at launch. Ongoing engineering, observability, and growth support as your product matures.",
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <Reveal>
              <div className="text-xs uppercase tracking-[0.3em] text-primary">
                Services
              </div>
              <h2 className="mt-4 text-4xl font-semibold leading-[1.05] md:text-5xl">
                A consultancy that ships,
                <br />
                <span className="text-gradient-teal">not just slides.</span>
              </h2>
              <p className="mt-6 max-w-md text-muted-foreground">
                We work end-to-end across business systems and product builds —
                anchored in measurable outcomes, not output.
              </p>
            </Reveal>
          </div>

          <div className="md:col-span-7">
            <div className="grid gap-px overflow-hidden rounded-2xl surface-glass sm:grid-cols-2">
              {services.map((s, i) => {
                const Icon = s.icon;
                return (
                  <Reveal key={s.title} delay={i * 0.05}>
                    <div className="group relative h-full bg-background/40 p-7 transition-colors hover:bg-white/[0.03]">
                      <Icon
                        className="h-5 w-5 text-primary transition-transform duration-500 group-hover:scale-110"
                        strokeWidth={1.5}
                      />
                      <h3 className="mt-5 text-base font-semibold tracking-tight">
                        {s.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {s.desc}
                      </p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

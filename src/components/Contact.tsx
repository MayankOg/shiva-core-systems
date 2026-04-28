import { Reveal } from "./Reveal";
import { Mail, MapPin, ArrowUpRight } from "lucide-react";
import { useState } from "react";

const projectTypes = [
  "CRM Implementation",
  "Startup MVP",
  "Full-Stack App",
  "AI Solution",
  "UI / UX Design",
  "Other",
];

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="relative py-32 border-t hairline overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[800px] -translate-x-1/2 blur-3xl"
        style={{
          background:
            "radial-gradient(ellipse, oklch(0.84 0.16 195 / 0.18), transparent 70%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <div className="text-xs uppercase tracking-[0.3em] text-primary">
                Contact
              </div>
              <h2 className="mt-4 text-4xl font-semibold leading-[1.05] md:text-5xl">
                Let's build something
                <br />
                <span className="text-gradient-teal">worth shipping.</span>
              </h2>
              <p className="mt-6 max-w-md text-muted-foreground">
                Tell us about the problem you're solving. We'll respond within
                two business days with a clear next step.
              </p>

              <div className="mt-10 space-y-5">
                <a
                  href="mailto:shivancrconsultants1@gmail.com"
                  className="group flex items-start gap-4 rounded-xl surface-glass p-4 hover:border-primary/30 transition-colors"
                >
                  <Mail className="h-5 w-5 mt-0.5 text-primary" strokeWidth={1.5} />
                  <div>
                    <div className="text-[11px] uppercase tracking-wider text-muted-foreground">
                      Email
                    </div>
                    <div className="text-sm font-medium">
                      shivancrconsultants1@gmail.com
                    </div>
                  </div>
                  <ArrowUpRight className="ml-auto h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
                <div className="flex items-start gap-4 rounded-xl surface-glass p-4">
                  <MapPin className="h-5 w-5 mt-0.5 text-primary" strokeWidth={1.5} />
                  <div>
                    <div className="text-[11px] uppercase tracking-wider text-muted-foreground">
                      Office
                    </div>
                    <div className="text-sm font-medium">
                      12 9th Oro Avenue, Life Republic
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={0.1}>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="rounded-2xl surface-glass p-6 md:p-10"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                {submitted ? (
                  <div className="py-12 text-center">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/15 text-primary">
                      ✓
                    </div>
                    <h3 className="mt-5 text-2xl font-semibold">
                      Message received.
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      We'll be in touch within two business days.
                    </p>
                  </div>
                ) : (
                  <div className="grid gap-5 md:grid-cols-2">
                    <Field label="Name" name="name" placeholder="Your full name" />
                    <Field
                      label="Email"
                      name="email"
                      type="email"
                      placeholder="you@company.com"
                    />
                    <Field
                      label="Company"
                      name="company"
                      placeholder="Company or project name"
                    />
                    <div>
                      <Label>Project type</Label>
                      <select
                        required
                        name="projectType"
                        className="mt-2 w-full rounded-lg border hairline bg-white/[0.02] px-3.5 py-3 text-sm text-foreground focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/40 transition"
                        defaultValue=""
                      >
                        <option value="" disabled>
                          Select one
                        </option>
                        {projectTypes.map((p) => (
                          <option key={p} value={p} className="bg-background">
                            {p}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="md:col-span-2">
                      <Label>Message</Label>
                      <textarea
                        required
                        name="message"
                        rows={5}
                        placeholder="Tell us about what you're building..."
                        className="mt-2 w-full resize-none rounded-lg border hairline bg-white/[0.02] px-3.5 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/40 transition"
                      />
                    </div>
                    <div className="md:col-span-2 flex items-center justify-between">
                      <p className="text-xs text-muted-foreground">
                        We typically respond within 48 hours.
                      </p>
                      <button
                        type="submit"
                        className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-[0_0_30px_-10px_var(--teal-glow)] hover:shadow-[0_0_50px_-5px_var(--teal-glow)] transition-shadow"
                      >
                        Send Message
                        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </button>
                    </div>
                  </div>
                )}
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <label className="text-[11px] uppercase tracking-wider text-muted-foreground">
      {children}
    </label>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <Label>{label}</Label>
      <input
        required
        type={type}
        name={name}
        placeholder={placeholder}
        className="mt-2 w-full rounded-lg border hairline bg-white/[0.02] px-3.5 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/40 transition"
      />
    </div>
  );
}

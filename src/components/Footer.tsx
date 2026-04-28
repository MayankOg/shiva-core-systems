export function Footer() {
  return (
    <footer className="relative border-t hairline py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-primary shadow-[0_0_12px_var(--teal-glow)]" />
              <span className="font-display text-lg font-semibold tracking-tight">
                Shiva NCR Consultants
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              A consultancy delivering CRM systems for SMBs and full-stack
              products for startups. Value first. Solutions follow.
            </p>
          </div>

          <FooterCol
            title="Navigate"
            items={[
              { label: "Services", href: "#services" },
              { label: "Work", href: "#work" },
              { label: "Process", href: "#process" },
              { label: "Team", href: "#team" },
              { label: "Contact", href: "#contact" },
            ]}
          />
          <FooterCol
            title="Services"
            items={[
              { label: "CRM Implementation", href: "#services" },
              { label: "Startup MVP", href: "#services" },
              { label: "Full-Stack Apps", href: "#services" },
              { label: "AI Solutions", href: "#services" },
              { label: "UI / UX Design", href: "#services" },
            ]}
          />
          <div className="md:col-span-2">
            <div className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              Get in touch
            </div>
            <a
              href="mailto:shivancrconsultants1@gmail.com"
              className="mt-3 block text-sm text-foreground hover:text-primary transition-colors break-all"
            >
              shivancrconsultants1@gmail.com
            </a>
          </div>
        </div>

        <div className="mt-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-t hairline pt-6">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Shiva NCR Consultants. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            12 9th Oro Avenue, Life Republic
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  items,
}: {
  title: string;
  items: { label: string; href: string }[];
}) {
  return (
    <div className="md:col-span-2">
      <div className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
        {title}
      </div>
      <ul className="mt-3 space-y-2">
        {items.map((i) => (
          <li key={i.label}>
            <a
              href={i.href}
              className="text-sm text-foreground/80 hover:text-primary transition-colors"
            >
              {i.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

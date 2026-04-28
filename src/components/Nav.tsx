import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const links = [
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#process", label: "Process" },
  { href: "#team", label: "Team" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4"
    >
      <nav
        className={`flex items-center gap-2 rounded-full border transition-all duration-500 ${
          scrolled
            ? "border-hairline bg-background/70 backdrop-blur-xl px-2 py-2 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.6)]"
            : "border-transparent bg-transparent px-2 py-2"
        }`}
      >
        <a href="#top" className="flex items-center gap-2 px-4 py-1.5">
          <span className="h-2 w-2 rounded-full bg-primary shadow-[0_0_12px_var(--teal-glow)]" />
          <span className="font-display text-sm font-semibold tracking-tight">
            Shiva NCR
          </span>
        </a>
        <div className="hidden md:flex items-center">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-4 py-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="ml-1 rounded-full bg-primary text-primary-foreground px-4 py-1.5 text-sm font-medium hover:opacity-90 transition-opacity"
        >
          Start a Project
        </a>
      </nav>
    </motion.header>
  );
}

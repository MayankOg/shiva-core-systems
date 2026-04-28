import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Work } from "@/components/Work";
import { Testimonials } from "@/components/Testimonials";
import { Process } from "@/components/Process";
import { Team } from "@/components/Team";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shiva NCR Consultants — Value First. Solutions Follow." },
      {
        name: "description",
        content:
          "A modern consultancy delivering CRM systems for SMBs and full-stack products for startups. Value first. Solutions follow.",
      },
      { property: "og:title", content: "Shiva NCR Consultants" },
      {
        property: "og:description",
        content:
          "CRM systems for SMBs and full-stack products for startups. Value first. Solutions follow.",
      },
    ],
    links: [
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Services />
      <Work />
      <Testimonials />
      <Process />
      <Team />
      <Contact />
      <Footer />
    </main>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { Contact } from "@/components/sections/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Full-Stack Developer — Portfolio" },
      { name: "description", content: "Portfolio of a full-stack developer specializing in React, Next.js and FastAPI. Bilingual (EN/FA) with dark and light themes." },
      { property: "og:title", content: "Full-Stack Developer — Portfolio" },
      { property: "og:description", content: "React, Next.js, FastAPI. Building fast, reliable web products." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </main>
  );
}

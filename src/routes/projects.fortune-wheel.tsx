import { createFileRoute, Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { ArrowLeft, PlayCircle, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { Github as GithubIcon } from "@/components/icons";
import { projects } from "@/content/profile";

export const Route = createFileRoute("/projects/fortune-wheel")({
  head: () => ({
    meta: [
      { title: "Fortune Wheel — Full-Stack Case Study" },
      {
        name: "description",
        content:
          "A Persian RTL prize wheel built with Django, React, TypeScript, PostgreSQL, and Docker.",
      },
      { property: "og:title", content: "Fortune Wheel — Full-Stack Case Study" },
      {
        property: "og:description",
        content:
          "Server-authoritative awards, atomic coupon redemption, idempotent spins, and resilient recovery.",
      },
      { property: "og:url", content: "/projects/fortune-wheel" },
    ],
    links: [{ rel: "canonical", href: "/projects/fortune-wheel" }],
  }),
  component: FortuneWheelPage,
});

function FortuneWheelPage() {
  const { t } = useTranslation();
  const project = projects.find((item) => item.slug === "fortune-wheel")!;
  const highlights = t("fortuneWheel.highlights", { returnObjects: true }) as string[];

  return (
    <main className="pt-32 pb-24 relative">
      <div className="container-x max-w-4xl">
        <Link
          to="/"
          hash="projects"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-cyan-400 transition mb-10"
        >
          <ArrowLeft className="size-4 rtl:rotate-180" />
          {t("fortuneWheel.back")}
        </Link>

        <motion.header initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <p className="font-mono text-xs uppercase tracking-widest text-cyan-400">
            {t("fortuneWheel.eyebrow")}
          </p>
          <h1 className="mt-3 text-4xl sm:text-5xl font-bold">
            <span className="text-gradient-neon">{t(project.titleKey)}</span>
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted-foreground">
            {t("fortuneWheel.summary")}
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href={project.github!}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-linear-to-r from-cyan-500 to-blue-500 px-4 py-2 text-sm font-medium text-white transition hover:opacity-90"
            >
              <GithubIcon className="size-4" />
              {t("fortuneWheel.source")}
            </a>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md border border-border bg-black/5 px-2.5 py-1 text-xs font-mono text-muted-foreground dark:bg-white/5"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.header>

        {project.image && (
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-12 overflow-hidden rounded-2xl glass-card"
          >
            <img
              src={project.image}
              alt={t(project.titleKey)}
              className="w-full aspect-video object-cover"
            />
          </motion.section>
        )}

        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="mt-6 overflow-hidden rounded-2xl border border-dashed border-cyan-500/35 bg-cyan-500/5"
        >
          <div className="flex aspect-video flex-col items-center justify-center gap-3 p-8 text-center">
            <div className="grid size-16 place-items-center rounded-full border border-cyan-500/30 bg-cyan-500/10">
              <PlayCircle className="size-8 text-cyan-400" />
            </div>
            <h2 className="text-xl font-semibold">{t("fortuneWheel.video_soon")}</h2>
            <p className="max-w-md text-sm text-muted-foreground">{t("fortuneWheel.video_hint")}</p>
          </div>
        </motion.section>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <CaseSection title={t("fortuneWheel.overview_title")} delay={0.2}>
            {t("fortuneWheel.overview")}
          </CaseSection>
          <CaseSection title={t("fortuneWheel.architecture_title")} delay={0.25}>
            {t("fortuneWheel.architecture")}
          </CaseSection>
        </div>

        <CaseSection title={t("fortuneWheel.quality_title")} delay={0.3} className="mt-6">
          {t("fortuneWheel.quality")}
        </CaseSection>

        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="mt-6 rounded-2xl glass-card p-6"
        >
          <h2 className="text-xl font-semibold">{t("fortuneWheel.highlights_title")}</h2>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {highlights.map((highlight) => (
              <li
                key={highlight}
                className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground"
              >
                <ShieldCheck className="mt-0.5 size-4 shrink-0 text-cyan-400" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </motion.section>
      </div>
    </main>
  );
}

function CaseSection({
  title,
  children,
  delay,
  className = "",
}: {
  title: string;
  children: React.ReactNode;
  delay: number;
  className?: string;
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className={`rounded-2xl glass-card p-6 ${className}`}
    >
      <h2 className="text-xl font-semibold mb-3">{title}</h2>
      <p className="text-muted-foreground leading-relaxed">{children}</p>
    </motion.section>
  );
}

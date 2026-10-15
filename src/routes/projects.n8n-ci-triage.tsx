import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, ExternalLink, Sparkles, Workflow } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Github as GithubIcon } from "@/components/icons";
import { projects } from "@/content/profile";

export const Route = createFileRoute("/projects/n8n-ci-triage")({
  head: () => ({
    meta: [
      { title: "n8n CI Triage — Backend & Automation Case Study" },
      {
        name: "description",
        content:
          "GitHub Actions triage with n8n, FastAPI, PostgreSQL, validated AI explanations, GitHub Issues, and Telegram failure and recovery notifications.",
      },
      { property: "og:title", content: "n8n CI Triage — Backend & Automation Case Study" },
      {
        property: "og:description",
        content:
          "Evidence-based CI triage with optional structured AI advice, persistent processing, incident deduplication, and verified recovery notifications.",
      },
      { property: "og:url", content: "/projects/n8n-ci-triage" },
    ],
    links: [{ rel: "canonical", href: "/projects/n8n-ci-triage" }],
  }),
  component: CiTriagePage,
});

function CiTriagePage() {
  const { t } = useTranslation();
  const project = projects.find((item) => item.slug === "n8n-ci-triage")!;
  const highlights = t("ciTriage.highlights", { returnObjects: true }) as string[];
  const steps = ["receive", "process", "publish"] as const;

  return (
    <main className="pt-32 pb-24 relative">
      <div className="container-x max-w-4xl">
        <Link
          to="/"
          hash="projects"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-cyan-400 transition mb-10"
        >
          <ArrowLeft className="size-4 rtl:rotate-180" />
          {t("ciTriage.back")}
        </Link>

        <motion.header initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <p className="font-mono text-xs uppercase tracking-widest text-cyan-400">
            {t("ciTriage.eyebrow")}
          </p>
          <h1 className="mt-3 text-4xl sm:text-5xl font-bold">
            <span className="text-gradient-neon">{t(project.titleKey)}</span>
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted-foreground">
            {t("ciTriage.summary")}
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href={project.github!}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-linear-to-r from-cyan-500 to-blue-500 px-4 py-2 text-sm font-medium text-white transition hover:opacity-90"
            >
              <GithubIcon className="size-4" />
              {t("ciTriage.source")}
            </a>
            <a
              href={`${project.github}/issues/3`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg glass-card px-4 py-2 text-sm font-medium hover:border-cyan-500/40 transition"
            >
              <ExternalLink className="size-4" />
              {t("ciTriage.incident")}
            </a>
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md border border-border bg-black/5 px-2.5 py-1 text-xs font-mono text-muted-foreground dark:bg-white/5"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.header>

        <figure className="mt-10 overflow-hidden rounded-2xl glass-card">
          <img
            src={project.image}
            alt={t("ciTriage.cover_alt")}
            width={1200}
            height={640}
            className="w-full h-auto"
          />
        </figure>

        <section className="mt-6 rounded-2xl glass-card p-6">
          <h2 className="text-xl font-semibold mb-3">{t("ciTriage.overview_title")}</h2>
          <p className="text-muted-foreground leading-relaxed">{t("ciTriage.overview")}</p>
        </section>

        <section className="mt-6 rounded-2xl glass-card p-6">
          <h2 className="text-xl font-semibold mb-5 flex items-center gap-2">
            <Workflow className="size-5 shrink-0 text-cyan-400" />
            {t("ciTriage.flow_title")}
          </h2>
          <ol className="grid gap-6 md:grid-cols-3">
            {steps.map((step, index) => (
              <li key={step}>
                <span className="font-mono text-sm text-cyan-400" aria-hidden="true">
                  0{index + 1}
                </span>
                <h3 className="mt-2 font-semibold">{t(`ciTriage.flow.${step}.title`)}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {t(`ciTriage.flow.${step}.desc`)}
                </p>
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-6 rounded-2xl glass-card p-6">
          <h2 className="text-xl font-semibold flex items-center gap-2">
            <Sparkles className="size-5 shrink-0 text-cyan-400" />
            {t("ciTriage.ai_title")}
          </h2>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            {t("ciTriage.ai_description")}
          </p>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
            {t("ciTriage.ai_scope")}
          </p>
          <a
            href={`${project.github}/issues/4`}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-cyan-400 hover:underline"
          >
            {t("ciTriage.ai_evidence")}
            <ExternalLink className="size-4" />
          </a>
        </section>

        <section className="mt-6 rounded-2xl glass-card p-6">
          <h2 className="text-xl font-semibold">{t("ciTriage.highlights_title")}</h2>
          <ul className="mt-5 grid gap-4 sm:grid-cols-2">
            {highlights.map((highlight) => (
              <li
                key={highlight}
                className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground"
              >
                <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-cyan-400" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-6 rounded-2xl glass-card p-6">
          <h2 className="text-xl font-semibold mb-3">{t("ciTriage.validation_title")}</h2>
          <p className="text-muted-foreground leading-relaxed">{t("ciTriage.validation")}</p>
          <a
            href={`${project.github}/blob/main/docs/validation.md`}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-cyan-400 hover:underline"
          >
            {t("ciTriage.validation_link")}
            <ExternalLink className="size-4" />
          </a>
        </section>
      </div>
    </main>
  );
}

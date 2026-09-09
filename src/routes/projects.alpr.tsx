import { createFileRoute, Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { ArrowLeft, ShieldCheck } from "lucide-react";
import { projects } from "@/content/profile";

export const Route = createFileRoute("/projects/alpr")({
  head: () => ({
    meta: [
      { title: "ALPR — Professional Experience" },
      {
        name: "description",
        content:
          "Selected engineering contributions to an employer-owned, team-developed computer vision platform.",
      },
      { property: "og:title", content: "ALPR — Professional Experience" },
      {
        property: "og:description",
        content:
          "A non-confidential overview of selected engineering contributions to a team-developed ALPR platform.",
      },
      { property: "og:url", content: "/projects/alpr" },
    ],
    links: [{ rel: "canonical", href: "/projects/alpr" }],
  }),
  component: AlprPage,
});

function AlprPage() {
  const { t } = useTranslation();

  const alprProject = projects.find((project) => project.slug === "alpr");

  const stack = ["FastAPI", "Python", "OpenCV", "React", "TypeScript", "WebSockets"];

  return (
    <main className="pt-32 pb-24 relative">
      <div className="container-x max-w-3xl">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-cyan-400 transition mb-10"
        >
          <ArrowLeft className="size-4 rtl:rotate-180" />
          {t("alpr.back")}
        </Link>

        <p className="font-mono text-xs uppercase tracking-widest text-cyan-400">
          {t("alpr.eyebrow")}
        </p>
        <h1 className="mt-3 text-4xl sm:text-5xl font-bold">
          <span className="text-gradient-neon">{t("projects.items.alpr.title")}</span>
        </h1>

        {alprProject?.image && (
          <section className="mt-12 glass-card rounded-2xl overflow-hidden">
            <img
              src={alprProject.image}
              alt={t("projects.items.alpr.title")}
              className="w-full aspect-video object-cover"
            />
          </section>
        )}

        <section className="mt-6 rounded-2xl border border-cyan-500/25 bg-cyan-500/5 p-5">
          <div className="flex items-start gap-3">
            <ShieldCheck className="mt-0.5 size-5 shrink-0 text-cyan-400" />
            <div>
              <h2 className="font-semibold">{t("alpr.disclosure_title")}</h2>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                {t("alpr.disclosure")}
              </p>
            </div>
          </div>
        </section>

        <section className="mt-12 glass-card rounded-2xl p-6">
          <h2 className="text-xl font-semibold mb-3">{t("alpr.overview_title")}</h2>
          <p className="text-muted-foreground leading-relaxed">{t("alpr.overview")}</p>
        </section>

        <section className="mt-6 glass-card rounded-2xl p-6">
          <h2 className="text-xl font-semibold mb-3">{t("alpr.stack_title")}</h2>
          <div className="flex flex-wrap gap-2">
            {stack.map((s) => (
              <span
                key={s}
                className="px-2.5 py-1 rounded-md bg-black/5 dark:bg-white/5 border border-border text-xs font-mono text-muted-foreground hover:text-cyan-400 transition"
              >
                {s}
              </span>
            ))}
          </div>
        </section>

        <section className="mt-6 glass-card rounded-2xl p-6">
          <h2 className="text-xl font-semibold mb-3">{t("alpr.challenges_title")}</h2>
          <p className="text-muted-foreground leading-relaxed">{t("alpr.challenges")}</p>
        </section>

        <section className="mt-6 glass-card rounded-2xl p-6">
          <h2 className="text-xl font-semibold mb-3">{t("alpr.result_title")}</h2>
          <p className="text-muted-foreground leading-relaxed">{t("alpr.result")}</p>
        </section>
      </div>
    </main>
  );
}

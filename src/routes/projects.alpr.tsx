import { createFileRoute, Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { ArrowLeft } from "lucide-react";
import { projects } from "@/content/profile";

export const Route = createFileRoute("/projects/alpr")({
  head: () => ({
    meta: [
      { title: "ALPR — Case Study" },
      { name: "description", content: "Automatic License Plate Recognition system built with FastAPI, OpenCV and a React dashboard." },
      { property: "og:title", content: "ALPR — Case Study" },
      { property: "og:description", content: "Full-stack ALPR system with FastAPI inference and React dashboard." },
      { property: "og:url", content: "/projects/alpr" },
    ],
    links: [{ rel: "canonical", href: "/projects/alpr" }],
  }),
  component: AlprPage,
});

function AlprPage() {
  const { t } = useTranslation();
  
  // پیدا کردن دیتای پروژه ALPR برای گرفتن لینک ویدیو
  const alprProject = projects.find(p => p.slug === "alpr");
  
  const stack = ["FastAPI", "Python", "OpenCV", "React", "TypeScript", "WebSockets"];
  
  return (
    <main className="pt-32 pb-24 relative">
      <div className="container-x max-w-3xl">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-cyan-400 transition mb-10">
          <ArrowLeft className="size-4 rtl:rotate-180" />
          {t("alpr.back")}
        </Link>

        <p className="font-mono text-xs uppercase tracking-widest text-cyan-400">Case Study</p>
        <h1 className="mt-3 text-4xl sm:text-5xl font-bold">
          <span className="text-gradient-neon">{t("projects.items.alpr.title")}</span>
        </h1>

     
        {/* Video Player Section */}
        {alprProject?.videoUrl && (
          <section className="mt-12 glass-card rounded-2xl overflow-hidden relative w-full aspect-video bg-black/40">
            {alprProject.videoUrl.includes("youtube.com") || alprProject.videoUrl.includes("youtu.be") ? (
              <iframe
              
                src={alprProject.videoUrl.replace("watch?v=", "embed/").replace("youtu.be/", "youtube.com/embed/")}
                title="ALPR Demo"
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <video
                src={alprProject.videoUrl}
                controls
                className="absolute inset-0 w-full h-full object-cover"
              />
            )}
          </section>
        )}

        <section className="mt-12 glass-card rounded-2xl p-6">
          <h2 className="text-xl font-semibold mb-3">{t("alpr.overview_title")}</h2>
          <p className="text-muted-foreground leading-relaxed">{t("alpr.overview")}</p>
        </section>

        <section className="mt-6 glass-card rounded-2xl p-6">
          <h2 className="text-xl font-semibold mb-3">{t("alpr.stack_title")}</h2>
          <div className="flex flex-wrap gap-2">
            {stack.map((s) => (
              <span key={s} className="px-2.5 py-1 rounded-md bg-black/5 dark:bg-white/5 border border-border text-xs font-mono text-muted-foreground hover:text-cyan-400 transition">{s}</span>
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
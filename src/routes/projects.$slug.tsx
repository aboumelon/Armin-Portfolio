import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { ArrowLeft, ExternalLink, PlayCircle } from "lucide-react";
import { motion } from "framer-motion";
import { Github as GithubIcon } from "@/components/icons";
import { projects } from "@/content/profile";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = projects.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Project not found" }, { name: "robots", content: "noindex" }],
      };
    }
    const { project } = loaderData;
    return {
      meta: [
        { title: `${project.slug} — Case Study` },
        { name: "description", content: `Case study for ${project.slug}.` },
        { property: "og:title", content: `${project.slug} — Case Study` },
      ],
    };
  },
  notFoundComponent: ProjectNotFound,
  errorComponent: ProjectNotFound,
  component: ProjectDetailPage,
});

function ProjectNotFound() {
  return (
    <main className="pt-32 pb-24 relative">
      <div className="container-x max-w-3xl text-center">
        <h1 className="text-3xl font-bold mb-4">
          <span className="text-gradient-neon">Project not found</span>
        </h1>
        <Link to="/" className="text-cyan-400 hover:underline">
          ← Back to home
        </Link>
      </div>
    </main>
  );
}

function ProjectDetailPage() {
  const { project } = Route.useLoaderData();
  const { t } = useTranslation();

  return (
    <main className="pt-32 pb-24 relative">
      <div className="container-x max-w-4xl">
        <Link
          to="/"
          hash="projects"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-cyan-400 transition mb-10"
        >
          <ArrowLeft className="size-4 rtl:rotate-180" />
          {t("project.back", "Back to projects")}
        </Link>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <p className="font-mono text-xs uppercase tracking-widest text-cyan-400">
            {t("project.eyebrow", "Case Study")}
          </p>
          <h1 className="mt-3 text-4xl sm:text-5xl font-bold">
            <span className="text-gradient-neon">{t(project.titleKey)}</span>
          </h1>
          <p className="mt-5 text-muted-foreground text-lg leading-relaxed max-w-3xl">
            {t(project.descKey)}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-linear-to-r from-cyan-500 to-blue-500 text-white text-sm font-medium hover:opacity-90 transition"
              >
                <GithubIcon className="size-4" />
                {t("project.view_github", "View on GitHub")}
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg glass-card text-sm font-medium hover:border-cyan-500/40 transition"
              >
                <ExternalLink className="size-4" />
                {t("project.live_demo", "Live demo")}
              </a>
            )}
          </div>
        </motion.div>

        {/* Demo video section (Only renders if videoUrl exists) */}
        {project.videoUrl && (
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-12 glass-card rounded-2xl overflow-hidden"
          >
            <div className="relative w-full aspect-video bg-black/40">
              {project.videoUrl.includes("youtube.com") ||
              project.videoUrl.includes("youtu.be") ||
              project.videoUrl.includes("vimeo.com") ? (
                <iframe
                  src={project.videoUrl
                    .replace("watch?v=", "embed/")
                    .replace("youtu.be/", "youtube.com/embed/")}
                  title={t(project.titleKey)}
                  className="absolute inset-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <video
                  src={project.videoUrl}
                  controls
                  poster={project.image}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              )}
            </div>
          </motion.section>
        )}

        {!project.videoUrl && project.image && (
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-12 glass-card rounded-2xl overflow-hidden"
          >
            <img
              src={project.image}
              alt={t(project.titleKey)}
              className="w-full h-auto"
            />
          </motion.section>
        )}

        {/* Tech stack */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-6 glass-card rounded-2xl p-6"
        >
          <h2 className="text-xl font-semibold mb-4">{t("project.stack", "Tech Stack")}</h2>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag: string) => (
              <span
                key={tag}
                className="px-3 py-1.5 rounded-md bg-black/5 dark:bg-white/5 border border-border text-xs font-mono text-muted-foreground hover:text-cyan-400 hover:border-cyan-500/40 transition"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.section>

        {/* Overview */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-6 glass-card rounded-2xl p-6"
        >
          <h2 className="text-xl font-semibold mb-3">{t("project.overview", "Overview")}</h2>
          <p className="text-muted-foreground leading-relaxed">{t(project.descKey)}</p>
        </motion.section>
      </div>
    </main>
  );
}

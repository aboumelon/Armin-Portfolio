import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Shield, ExternalLink } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { Github as GithubIcon } from "@/components/icons";
import { projects } from "@/content/profile";

export function Projects() {
  const { t } = useTranslation();
  const featured = projects.find((p) => p.featured)!;
  const others = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 scroll-mt-20">
      <div className="container-x">
        <SectionHeader title={t("projects.title")} subtitle={t("projects.subtitle")} />

        {/* Featured */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <div className="group relative glass-card rounded-2xl overflow-hidden hover:border-cyan-500/40 transition-all">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Image */}
              <Link to="/projects/$slug" params={{ slug: featured.slug }} className="relative block overflow-hidden bg-black/30 aspect-[16/10] lg:aspect-auto">
                {featured.image && (
                  <img
                    src={featured.image}
                    alt={t(featured.titleKey)}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 via-transparent to-purple-500/10 pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-r from-background/40 to-transparent lg:bg-gradient-to-l pointer-events-none" />
              </Link>

              {/* Content */}
              <div className="relative p-8 flex flex-col justify-center">
                <div className="absolute -top-24 -right-24 size-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
                <div className="relative">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-cyan-500/15 to-blue-500/15 border border-cyan-500/30 mb-4">
                    <Shield className="size-3.5 text-cyan-400" />
                    <span className="text-xs font-medium text-cyan-500 dark:text-cyan-300">{t("projects.featured_badge")}</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-3">{t(featured.titleKey)}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-5">{t(featured.descKey)}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {featured.tags.map((tag) => (
                      <span key={tag} className="px-2.5 py-1 rounded-md bg-black/5 dark:bg-white/5 border border-border text-xs font-mono text-muted-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap items-center gap-4">
                    <Link to="/projects/$slug" params={{ slug: featured.slug }} className="inline-flex items-center gap-1.5 text-sm font-medium text-cyan-400 hover:gap-2.5 transition-all">
                      {t("projects.view_case")}
                      <ArrowUpRight className="size-4" />
                    </Link>
                    {featured.github && (
                      <a href={featured.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition">
                        <GithubIcon className="size-4" /> GitHub
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Others */}
        <h3 className="text-xl font-semibold mb-5">{t("projects.other_title")}</h3>
        <div className="grid md:grid-cols-2 gap-4">
          {others.map((p, i) => (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Link
                to="/projects/$slug"
                params={{ slug: p.slug }}
                className="group glass-card rounded-2xl p-6 hover:border-cyan-500/40 transition-all block h-full"
              >
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h4 className="text-lg font-semibold">{t(p.titleKey)}</h4>
                  <ArrowUpRight className="size-5 text-muted-foreground group-hover:text-cyan-400 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition" />
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{t(p.descKey)}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {p.tags.map((tag) => (
                    <span key={tag} className="px-2 py-0.5 rounded-md bg-black/5 dark:bg-white/5 border border-border text-xs font-mono text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  {p.github && (
                    <span className="inline-flex items-center gap-1.5 hover:text-foreground transition">
                      <GithubIcon className="size-3.5" /> Code
                    </span>
                  )}
                  {p.demo && (
                    <span className="inline-flex items-center gap-1.5 hover:text-foreground transition">
                      <ExternalLink className="size-3.5" /> Live demo
                    </span>
                  )}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

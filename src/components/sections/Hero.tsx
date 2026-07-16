import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { ArrowRight, Send } from "lucide-react";
import { Github, Linkedin } from "@/components/icons";
import { profile } from "@/content/profile";

export function Hero() {
  const { t } = useTranslation();
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 grid-bg opacity-60 pointer-events-none" />
      <div className="container-x relative py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto text-center space-y-8"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30"
          >
            <span className="size-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-sm text-cyan-500 dark:text-cyan-300 font-medium">{t("hero.badge")}</span>
          </motion.div>

          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
            >
              <span className="bg-gradient-to-r from-foreground via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {t("hero.title")}
              </span>
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-2xl md:text-3xl text-muted-foreground font-light"
            >
              {t("hero.subtitle")}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            >
              {t("hero.description")}
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <a
              href="#projects"
              className="group relative px-7 py-3.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-semibold text-white overflow-hidden transition-all hover:shadow-[0_0_40px_-5px_rgba(6,182,212,0.6)]"
            >
              <span className="relative z-10 flex items-center gap-2">
                {t("hero.cta_primary")}
                <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform rtl:rotate-180 rtl:group-hover:-translate-x-1" />
              </span>
            </a>
            <a
              href="#contact"
              className="px-7 py-3.5 rounded-xl font-semibold bg-accent border border-border hover:border-cyan-500/50 transition-all"
            >
              {t("hero.cta_secondary")}
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="flex items-center justify-center gap-3 pt-2"
          >
            {[
              { href: profile.github, Icon: Github, label: "GitHub" },
              { href: profile.linkedin, Icon: Linkedin, label: "LinkedIn" },
              { href: profile.telegram, Icon: Send, label: "Telegram" },
            ].map(({ href, Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="p-3 rounded-lg bg-accent border border-border hover:border-cyan-500/40 hover:text-cyan-400 transition-all text-muted-foreground"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

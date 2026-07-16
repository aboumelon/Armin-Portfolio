import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { SectionHeader } from "./SectionHeader";
import { skills, allTech } from "@/content/profile";

export function Skills() {
  const { t } = useTranslation();
  const categories = [
    { key: "frontend", items: skills.frontend, gradient: "from-cyan-400 to-cyan-600", text: "text-cyan-400" },
    { key: "backend", items: skills.backend, gradient: "from-blue-400 to-blue-600", text: "text-blue-400" },
    { key: "tools", items: skills.tools, gradient: "from-purple-400 to-purple-600", text: "text-purple-400" },
  ];
  return (
    <section id="skills" className="py-24 scroll-mt-20">
      <div className="container-x">
        <SectionHeader title={t("skills.title")} subtitle={t("skills.subtitle")} />
        <div className="grid md:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="glass-card rounded-2xl p-6"
            >
              <h3 className="text-lg font-semibold text-center mb-6">{t(`skills.${cat.key}`)}</h3>
              <div className="space-y-4">
                {cat.items.map((s, idx) => (
                  <div key={s.name}>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-sm font-medium">{s.name}</span>
                      <span className={`text-xs font-mono ${cat.text}`}>{s.level}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-black/10 dark:bg-white/5 overflow-hidden border border-border">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${s.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 + idx * 0.07, ease: "easeOut" }}
                        className={`h-full rounded-full bg-gradient-to-r ${cat.gradient} shadow-[0_0_10px_rgba(6,182,212,0.4)]`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 text-center"
        >
          <h3 className="text-xl font-semibold mb-6">{t("skills.tech_title")}</h3>
          <div className="flex flex-wrap justify-center gap-2 max-w-3xl mx-auto">
            {allTech.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 rounded-lg bg-black/5 dark:bg-white/5 border border-border text-sm text-muted-foreground hover:border-cyan-500/40 hover:text-cyan-400 transition-all"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

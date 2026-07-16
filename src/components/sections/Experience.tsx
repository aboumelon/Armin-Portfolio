import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { SectionHeader } from "./SectionHeader";
import { experience } from "@/content/profile";

export function Experience() {
  const { t } = useTranslation();
  return (
    <section id="experience" className="py-24 scroll-mt-20">
      <div className="container-x">
        <SectionHeader title={t("experience.title")} subtitle={t("experience.subtitle")} />
        <h3 className="text-xl font-bold text-center mb-8">{t("experience.timeline")}</h3>

        <div className="space-y-5 max-w-4xl mx-auto">
          {experience.map((e, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative glass-card rounded-2xl p-6 md:p-8 hover:border-cyan-500/40 transition-all"
            >
              <div className="flex flex-col md:flex-row gap-5">
                <div className="md:w-48 shrink-0">
                  <div className="inline-flex px-3 py-1.5 rounded-full bg-linear-to-r from-cyan-500/15 to-blue-500/15 border border-cyan-500/30">
                    <span className="text-xs font-semibold text-cyan-500 dark:text-cyan-300 font-mono">{e.year}</span>
                  </div>
                  <h4 className="text-lg font-bold mt-3">{t(e.roleKey)}</h4>
                  <p className="text-muted-foreground text-sm mt-1">{t(e.companyKey)}</p>
                </div>
                <div className="flex-1">
                  <p className="text-foreground/80 text-sm leading-relaxed">{t(e.descKey)}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

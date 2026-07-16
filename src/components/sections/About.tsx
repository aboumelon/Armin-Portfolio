import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Code2, Server, Cpu, Layers } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

export function About() {
  const { t } = useTranslation();
  const items = [
    { icon: Code2, titleKey: "about.frontend", descKey: "about.frontend_desc" },
    { icon: Server, titleKey: "about.backend", descKey: "about.backend_desc" },
    { icon: Cpu, titleKey: "about.realtime", descKey: "about.realtime_desc" },
    { icon: Layers, titleKey: "about.fullstack", descKey: "about.fullstack_desc" },
  ];
  return (
    <section id="about" className="relative py-24 scroll-mt-20">
      <div className="container-x">
        <SectionHeader title={t("about.title")} subtitle={t("about.subtitle")} />
        <div className="grid lg:grid-cols-2 gap-6">
          {items.map((it, i) => {
            const Icon = it.icon;
            return (
              <motion.div
                key={it.titleKey}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative glass-card rounded-2xl p-6 hover:border-cyan-500/40 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl border border-cyan-500/20 group-hover:border-cyan-500/40 transition-colors">
                    <Icon className="size-6 text-cyan-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">{t(it.titleKey)}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{t(it.descKey)}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

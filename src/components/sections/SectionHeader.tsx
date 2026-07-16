import { motion } from "framer-motion";

export function SectionHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mb-14"
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-4">
        <span className="text-gradient-neon">{title}</span>
      </h2>
      <div className="w-20 h-1 mx-auto rounded-full bg-linear-to-r from-cyan-400 to-blue-500" />
      {subtitle && (
        <p className="mt-5 text-muted-foreground text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}

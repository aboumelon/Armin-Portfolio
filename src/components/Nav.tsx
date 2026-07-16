import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, Moon, Sun, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useTheme } from "@/hooks/useTheme";
import { useLocale } from "@/hooks/useLocale";

export function Nav() {
  const { t } = useTranslation();
  const { theme, toggle: toggleTheme } = useTheme();
  const { lang, toggle: toggleLang } = useLocale();
  const [open, setOpen] = useState(false);

  const items = [
    { label: t("nav.home"), href: "#hero" },
    { label: t("nav.about"), href: "#about" },
    { label: t("nav.skills"), href: "#skills" },
    { label: t("nav.projects"), href: "#projects" },
    { label: t("nav.experience"), href: "#experience" },
    { label: t("nav.contact"), href: "#contact" },
  ];

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/80 border-b border-border"
    >
      <div className="container-x flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2">
          <div className="size-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold text-sm">
            FS
          </div>
          <span className="hidden sm:inline font-semibold tracking-tight">{t("nav.brand")}</span>
        </Link>

        <nav className="hidden md:flex items-center gap-7 text-sm">
          {items.map((it) => (
            <a key={it.href} href={it.href} className="text-muted-foreground hover:text-cyan-400 transition-colors font-medium">
              {it.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 rounded-lg bg-accent hover:opacity-80 border border-border"
          >
            {theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
          </button>
          <button
            onClick={toggleLang}
            aria-label="Toggle language"
            className="p-2 rounded-lg bg-accent hover:opacity-80 border border-border flex items-center gap-1"
          >
            <Globe className="size-4" />
            <span className="text-xs font-mono uppercase">{lang}</span>
          </button>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className="md:hidden p-2 rounded-lg bg-accent hover:opacity-80 border border-border"
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl"
          >
            <div className="container-x py-4 space-y-1">
              {items.map((it) => (
                <a
                  key={it.href}
                  href={it.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 text-muted-foreground hover:text-cyan-400 transition-colors"
                >
                  {it.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

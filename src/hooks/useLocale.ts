import { useEffect, useState } from "react";
import i18n from "@/i18n";

type Lang = "en" | "fa";

export function useLocale() {
  const [lang, setLang] = useState<Lang>("en");

  useEffect(() => {
    const stored = (localStorage.getItem("lang") as Lang | null) ?? "en";
    setLang(stored);
    i18n.changeLanguage(stored);
    document.documentElement.lang = stored;
    document.documentElement.dir = stored === "fa" ? "rtl" : "ltr";
  }, []);

  const toggle = () => {
    const next: Lang = lang === "en" ? "fa" : "en";
    setLang(next);
    localStorage.setItem("lang", next);
    i18n.changeLanguage(next);
    document.documentElement.lang = next;
    document.documentElement.dir = next === "fa" ? "rtl" : "ltr";
  };

  return { lang, toggle };
}

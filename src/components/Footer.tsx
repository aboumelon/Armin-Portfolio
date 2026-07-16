import { useTranslation } from "react-i18next";

export function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="border-t border-border">
      <div className="container-x py-6 text-center">
        <p className="text-sm text-muted-foreground/70">{t("contact.footer")}</p>
      </div>
    </footer>
  );
}

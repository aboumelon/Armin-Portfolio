import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Mail, MapPin, Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { Github } from "@/components/icons";

import { SectionHeader } from "./SectionHeader";
import { profile } from "@/content/profile";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mkodvnod";

type Status = "idle" | "sending" | "success" | "error";

export function Contact() {
  const { t } = useTranslation();
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    setStatus("sending");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      form.reset();
      setStatus("success");
    } catch (err) {
      console.error("Contact form submit failed:", err);
      setStatus("error");
    }
  }

  const sending = status === "sending";

  return (
    <section id="contact" className="py-24 scroll-mt-20">
      <div className="container-x">
        <SectionHeader title={t("contact.title")} subtitle={t("contact.subtitle")} />

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">{t("contact.getintouch")}</h3>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-linear-to-br from-cyan-500/20 to-blue-500/20">
                    <Mail className="size-5 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-muted-foreground mb-1">
                      {t("contact.email")}
                    </p>
                    <a
                      href={`mailto:${profile.email}`}
                      className="hover:text-cyan-400 transition-colors break-all"
                    >
                      {profile.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-linear-to-br from-cyan-500/20 to-blue-500/20">
                    <MapPin className="size-5 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-muted-foreground mb-1">
                      {t("contact.location")}
                    </p>
                    <p>{t("contact.location_value")}</p>
                  </div>
                </div>

                <div className="pt-5 border-t border-border">
                  <p className="text-xs font-semibold text-muted-foreground mb-3">
                    {t("contact.connect")}
                  </p>
                  <div className="flex gap-2">
                    {[
                      { href: profile.github, Icon: Github, label: "GitHub" },
                      { href: profile.telegram, Icon: Send, label: "Telegram" },
                    ].map(({ href, Icon, label }) => (
                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={label}
                        className="p-3 rounded-lg bg-black/5 dark:bg-white/5 border border-border hover:border-cyan-500/40 hover:text-cyan-400 transition-all text-muted-foreground"
                      >
                        <Icon className="size-5" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl p-6 bg-linear-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/30">
              <h4 className="text-lg font-semibold mb-2">{t("contact.opportunities")}</h4>
              <p className="text-sm text-foreground/70 leading-relaxed">
                {t("contact.opportunities_desc")}
              </p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="glass-card rounded-2xl p-8 space-y-5"
          >
            <h3 className="text-2xl font-bold mb-2">{t("contact.form.title")}</h3>

            <div className="grid md:grid-cols-2 gap-4">
              <Field
                label={t("contact.form.name")}
                id="name"
                name="name"
                placeholder={t("contact.form.name_placeholder")}
                required
              />
              <Field
                label={t("contact.email")}
                id="email"
                name="email"
                type="email"
                placeholder={t("contact.form.email_placeholder")}
                required
              />
            </div>
            <Field
              label={t("contact.form.subject")}
              id="subject"
              name="subject"
              placeholder={t("contact.form.subject_placeholder")}
            />
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-muted-foreground mb-2"
              >
                {t("contact.form.message")}
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                required
                placeholder={t("contact.form.message_placeholder")}
                className="w-full px-4 py-3 rounded-xl bg-white dark:bg-white/5 border border-border focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/40 focus:outline-none transition resize-none"
              />
            </div>

            {status === "success" && (
              <div
                role="status"
                className="flex items-start gap-2 rounded-xl border border-emerald-500/40 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-500"
              >
                <CheckCircle2 className="size-5 shrink-0" />
                <span>{t("contact.form.success")}</span>
              </div>
            )}
            {status === "error" && (
              <div
                role="alert"
                className="flex items-start gap-2 rounded-xl border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-500"
              >
                <AlertCircle className="size-5 shrink-0" />
                <span>{t("contact.form.error")}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={sending}
              className="w-full group relative px-6 py-3.5 rounded-xl font-semibold text-white bg-linear-to-r from-cyan-500 to-blue-600 hover:shadow-[0_0_40px_-5px_rgba(6,182,212,0.6)] transition-all disabled:opacity-60 disabled:cursor-not-allowed"
            >
              <span className="flex items-center justify-center gap-2">
                {sending ? (
                  <>
                    {t("contact.form.sending")}
                    <Loader2 className="size-4 animate-spin" />
                  </>
                ) : (
                  <>
                    {t("contact.form.send")}
                    <Send className="size-4 rtl:rotate-180 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
                  </>
                )}
              </span>
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({
  id,
  name,
  label,
  placeholder,
  type = "text",
  required = false,
}: {
  id: string;
  name: string;
  label: string;
  placeholder: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-muted-foreground mb-2">
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full px-4 py-3 rounded-xl bg-white dark:bg-white/5 border border-border focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/40 focus:outline-none transition"
      />
    </div>
  );
}

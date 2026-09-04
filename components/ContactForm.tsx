"use client";

import { useState } from "react";
import { motion } from "framer-motion";

type State = "idle" | "sending" | "sent";

export default function ContactForm() {
  const [state, setState] = useState<State>("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.email || !form.message) return;
    setState("sending");
    // Fallback: open mail client. No storage, no external services.
    const body = encodeURIComponent(
      `Name: ${form.name}\nTelefon: ${form.phone}\n\n${form.message}`
    );
    const subject = encodeURIComponent(
      `Terminanfrage · ${form.name || "Website"}`
    );
    window.location.href = `mailto:info@fzgtechstaudt.de?subject=${subject}&body=${body}`;
    setTimeout(() => setState("sent"), 400);
  }

  const field =
    "w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3.5 text-[15px] text-white placeholder-white/35 outline-none transition focus:border-signal/60 focus:bg-white/[0.05]";

  return (
    <motion.form
      onSubmit={onSubmit}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="glass rounded-3xl p-5 md:p-8"
    >
      <div className="grid gap-4 md:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-[11px] uppercase tracking-[0.2em] text-white/50">
            Name
          </span>
          <input
            type="text"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="Max Mustermann"
            className={field}
          />
        </label>
        <label className="block">
          <span className="mb-2 block text-[11px] uppercase tracking-[0.2em] text-white/50">
            Telefon
          </span>
          <input
            type="tel"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            placeholder="0681 …"
            className={field}
          />
        </label>
      </div>

      <label className="mt-4 block">
        <span className="mb-2 block text-[11px] uppercase tracking-[0.2em] text-white/50">
          E-Mail
        </span>
        <input
          type="email"
          required
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          placeholder="ihre@email.de"
          className={field}
        />
      </label>

      <label className="mt-4 block">
        <span className="mb-2 block text-[11px] uppercase tracking-[0.2em] text-white/50">
          Nachricht
        </span>
        <textarea
          required
          rows={5}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          placeholder="Ihr Fahrzeug, gewünschte Leistung, Wunschtermin …"
          className={field + " resize-none"}
        />
      </label>

      <div className="mt-6 flex flex-col-reverse items-stretch gap-4 md:flex-row md:items-center md:justify-between">
        <p className="text-[12px] leading-relaxed text-white/45">
          Mit dem Absenden willigen Sie in die Verarbeitung Ihrer Angaben zur
          Beantwortung Ihrer Anfrage ein.
        </p>
        <button
          type="submit"
          disabled={state === "sending"}
          className="group inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-xl bg-signal px-5 py-3 text-[15px] font-semibold text-black shadow-signal transition hover:bg-signal-soft disabled:opacity-60 md:w-auto"
        >
          {state === "sent" ? "Danke!" : state === "sending" ? "Wird geöffnet …" : "Nachricht senden"}
          <svg viewBox="0 0 24 24" className="h-4 w-4 transition group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14" />
            <path d="M13 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </motion.form>
  );
}

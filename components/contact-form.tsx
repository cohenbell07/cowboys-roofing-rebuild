"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const SERVICES = [
  "Roof inspection",
  "Roof replacement",
  "Storm / hail damage",
  "Siding",
  "Gutters",
  "Windows",
  "Commercial roofing",
  "Other",
];

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Without a Formspree / backend wired up yet, fall back to mailto.
    const fd = new FormData(e.currentTarget);
    const subject = encodeURIComponent(
      `New inspection request — ${fd.get("name") || "Unnamed"}`
    );
    const body = encodeURIComponent(
      [
        `Name: ${fd.get("name") || ""}`,
        `Phone: ${fd.get("phone") || ""}`,
        `Email: ${fd.get("email") || ""}`,
        `Address: ${fd.get("address") || ""}`,
        `Service: ${fd.get("service") || ""}`,
        ``,
        `Message:`,
        `${fd.get("message") || ""}`,
      ].join("\n")
    );
    window.location.href = `mailto:info@cowboysroofing.ca?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  return (
    <div className="bg-steel-900 rounded-2xl p-8 lg:p-10 ring-1 ring-white/5">
      <AnimatePresence mode="wait">
        {!submitted ? (
          <motion.form
            key="form"
            onSubmit={handleSubmit}
            className="space-y-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Your name" name="name" required autoComplete="name" />
              <Field label="Phone" name="phone" type="tel" required autoComplete="tel" />
            </div>
            <Field label="Email" name="email" type="email" required autoComplete="email" />
            <Field label="Property address" name="address" required autoComplete="street-address" />

            <div>
              <label
                htmlFor="service"
                className="block text-xs uppercase tracking-[0.15em] text-steel-400 mb-2 font-semibold"
              >
                What do you need?
              </label>
              <select
                id="service"
                name="service"
                required
                defaultValue=""
                className="w-full bg-steel-950/80 border border-white/15 hover:border-white/30 focus:border-rope-500 focus:outline-none focus:ring-4 focus:ring-rope-500/20 text-white placeholder:text-steel-500 rounded-md px-4 py-3 text-sm transition"
              >
                <option value="" disabled>
                  Select a service…
                </option>
                {SERVICES.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-xs uppercase tracking-[0.15em] text-steel-400 mb-2 font-semibold"
              >
                Tell us more <span className="text-steel-600 normal-case tracking-normal">(optional)</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full bg-steel-950/80 border border-white/15 hover:border-white/30 focus:border-rope-500 focus:outline-none focus:ring-4 focus:ring-rope-500/20 text-white placeholder:text-steel-500 rounded-md px-4 py-3 text-sm transition"
                placeholder="Hail damage, leaking, age of roof, anything else we should know."
              />
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-rope-600 hover:bg-rope-700 text-white text-sm font-bold uppercase tracking-wider px-7 py-4 rounded-md transition shadow-lg shadow-rope-600/20"
            >
              Send my request
              <svg className="w-3.5 h-3.5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>

            <p className="text-xs text-steel-500 leading-relaxed">
              We&apos;ll be in touch within one business day. We never share your info,
              ever.
            </p>
          </motion.form>
        ) : (
          <motion.div
            key="thanks"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-10"
          >
            <div className="display text-rope-400 text-5xl mb-3">✓</div>
            <h3 className="display text-white text-3xl mb-2">Request sent.</h3>
            <p className="text-steel-400 max-w-sm mx-auto">
              Your email client should have opened with your message ready to send.
              If not, call us at <a href="tel:18449917663" className="text-rope-400 underline">(844) 991-ROOF</a>.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-xs uppercase tracking-[0.15em] text-steel-400 mb-2 font-semibold"
      >
        {label} {required && <span className="text-rope-500">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className="w-full bg-steel-950/80 border border-white/15 hover:border-white/30 focus:border-rope-500 focus:outline-none focus:ring-4 focus:ring-rope-500/20 text-white placeholder:text-steel-500 rounded-md px-4 py-3 text-sm transition"
      />
    </div>
  );
}

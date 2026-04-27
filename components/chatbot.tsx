"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";

const SUGGESTED = [
  "Do I have hail damage?",
  "How long does a roof replacement take?",
  "Can I get a quote without an inspection?",
  "Do you handle insurance claims?",
];

export function Chatbot() {
  const [open, setOpen] = useState(false);
  const reduced = useReducedMotion();

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 print:hidden">
      <AnimatePresence initial={false}>
        {open && (
          <motion.aside
            key="panel"
            role="dialog"
            aria-label="Roof Helper chat assistant — demo preview"
            initial={reduced ? { opacity: 0 } : { opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduced ? { opacity: 0 } : { opacity: 0, y: 16, scale: 0.96 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="absolute bottom-16 sm:bottom-20 right-0 w-[calc(100vw-2rem)] sm:w-[380px] max-w-[420px] bg-white rounded-2xl shadow-2xl shadow-steel-950/40 ring-1 ring-steel-200 overflow-hidden flex flex-col"
            style={{ maxHeight: "min(560px, calc(100vh - 7rem))" }}
          >
            {/* Header */}
            <div className="relative bg-gradient-to-br from-steel-950 via-steel-900 to-steel-950 px-5 pt-5 pb-4">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-rope-700 via-rope-500 to-rope-700" />
              <div className="flex items-start gap-3">
                <div className="shrink-0 relative">
                  <div className="w-10 h-10 rounded-full bg-rope-600 flex items-center justify-center display text-xl text-white">
                    R
                  </div>
                  <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-400 ring-2 ring-steel-900" aria-label="Online" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <h3 className="display text-white text-xl tracking-wide">ROOF HELPER</h3>
                    <span className="text-[9px] uppercase tracking-[0.2em] text-rope-300 bg-rope-500/20 border border-rope-500/30 px-1.5 py-0.5 rounded-sm font-bold">
                      Demo
                    </span>
                  </div>
                  <p className="text-steel-300 text-xs mt-0.5">
                    Cowboys&apos; AI assistant · usually replies instantly
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close Roof Helper"
                  className="w-8 h-8 -mr-1 -mt-1 inline-flex items-center justify-center rounded-md text-steel-300 hover:text-white hover:bg-white/5"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                    <line x1="6" y1="6" x2="18" y2="18" />
                    <line x1="6" y1="18" x2="18" y2="6" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Body */}
            <div className="flex-1 overflow-y-auto px-5 py-5 bg-steel-50" style={{ backgroundColor: "#f8fafc" }}>
              <div className="flex items-end gap-2 mb-3">
                <div className="w-7 h-7 rounded-full bg-rope-600 flex items-center justify-center display text-sm text-white shrink-0">R</div>
                <div className="bg-white rounded-2xl rounded-bl-sm px-4 py-3 text-[14px] text-steel-800 shadow-sm ring-1 ring-steel-100 max-w-[85%]">
                  Hey 👋 I&apos;m the Cowboys Roof Helper. I can answer questions
                  about your roof, our services, or help you book a free
                  inspection. What&apos;s going on?
                </div>
              </div>

              <div className="ml-9 mt-4 mb-2 text-[10px] uppercase tracking-[0.2em] text-steel-500 font-bold">
                Suggested
              </div>
              <div className="ml-9 flex flex-col items-start gap-2">
                {SUGGESTED.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => {}}
                    className="text-left text-[13px] text-rope-700 bg-white hover:bg-rope-50 hover:border-rope-300 border border-rope-200 rounded-full px-3.5 py-1.5 transition"
                    style={{ backgroundColor: "white" }}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Input */}
            <div className="px-4 py-3 border-t border-steel-200 bg-white">
              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex items-center gap-2"
              >
                <input
                  type="text"
                  disabled
                  placeholder="Demo only — not connected yet"
                  className="flex-1 bg-steel-100 text-steel-500 text-sm rounded-full px-4 py-2.5 border border-steel-200 placeholder:text-steel-400 cursor-not-allowed"
                />
                <button
                  type="submit"
                  disabled
                  aria-label="Send (disabled in demo)"
                  className="w-10 h-10 rounded-full bg-steel-200 text-steel-400 inline-flex items-center justify-center cursor-not-allowed"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M2.5 11.5L21.5 3l-8.5 19-2.5-8.5-8-2z" />
                  </svg>
                </button>
              </form>
              <p className="text-[10px] text-steel-400 text-center mt-2">
                Preview of an AI assistant we can wire up. Not yet live.
              </p>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Trigger */}
      <motion.button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close Roof Helper chat" : "Open Roof Helper chat"}
        aria-expanded={open}
        whileHover={reduced ? undefined : { y: -2 }}
        whileTap={reduced ? undefined : { scale: 0.96 }}
        className="group relative inline-flex items-center gap-2.5 bg-rope-600 hover:bg-rope-700 text-white pl-3 pr-4 py-3 rounded-full shadow-2xl shadow-rope-600/40 transition"
      >
        <span className="relative w-7 h-7 rounded-full bg-white/15 flex items-center justify-center shrink-0">
          <AnimatePresence mode="wait" initial={false}>
            {open ? (
              <motion.svg
                key="x"
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.18 }}
                className="w-3.5 h-3.5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
              >
                <line x1="6" y1="6" x2="18" y2="18" />
                <line x1="6" y1="18" x2="18" y2="6" />
              </motion.svg>
            ) : (
              <motion.svg
                key="chat"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.18 }}
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 3C6.48 3 2 6.92 2 11.6c0 1.92.79 3.7 2.13 5.13-.21 1.04-.85 2.71-1.4 3.51-.18.27.06.62.38.55.99-.21 2.61-.65 3.93-1.43 1.49.62 3.16.96 4.96.96 5.52 0 10-3.92 10-8.6S17.52 3 12 3z" />
              </motion.svg>
            )}
          </AnimatePresence>
        </span>
        <span className="text-sm font-bold uppercase tracking-wider whitespace-nowrap">
          {open ? "Close" : "Roof Helper"}
        </span>
        {!open && (
          <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-flag-500 ring-2 ring-white" />
        )}
      </motion.button>
    </div>
  );
}

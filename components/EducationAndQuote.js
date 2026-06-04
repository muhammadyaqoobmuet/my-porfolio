import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ─── cross / corner tick mark ─── */
function CrossMark() {
  return (
    <div className="relative flex size-3 items-center justify-center">
      <div className="absolute h-px w-full bg-zinc-300 dark:bg-zinc-600 pointer-events-none" />
      <div className="absolute h-full w-px bg-zinc-300 dark:bg-zinc-600 pointer-events-none" />
    </div>
  );
}

function GradCapIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-5 opacity-40" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
    </svg>
  );
}

export default function EducationAndQuote() {
  return (
    <div className="mx-auto w-full max-w-3xl">
      {/* ── Education panel ── */}
      <section className="border-x border-gray-100 dark:border-zinc-800 bg-white dark:bg-black overflow-visible relative">
        <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2"><CrossMark /></div>
        <div className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2"><CrossMark /></div>
        
        <header className="px-5 py-3 border-b border-gray-100 dark:border-zinc-800">
          <h2 className="font-mono text-xl font-bold text-gray-900 dark:text-gray-100 tracking-tight uppercase">
            Education
          </h2>
        </header>
        <div className="flex flex-col">
          {/* University */}
          <div className="p-6 border-b border-gray-50 dark:border-zinc-900/50 relative">
             <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2 mb-1">
                    <div className="h-1.5 w-1.5 rounded-full bg-zinc-400" />
                    <h3 className="font-bold text-sm text-gray-900 dark:text-gray-100 tracking-tight">Mehran University of Engineering & Technology</h3>
                </div>
                <div className="bg-gray-50/50 dark:bg-zinc-900/30 p-4 rounded-xl border border-gray-100 dark:border-zinc-800 flex items-center justify-between">
                   <div className="flex items-center gap-4">
                      <div className="size-10 rounded-xl bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center border border-gray-200 dark:border-zinc-700">
                        <GradCapIcon />
                      </div>
                      <div className="flex flex-col gap-0.5">
                        <span className="text-sm font-bold text-gray-800 dark:text-zinc-100">Bachelor of Engineering</span>
                        <span className="text-xs text-zinc-500 font-mono tracking-tight underline decoration-zinc-800/10 underline-offset-4">Software Engineering · 2022 — 2026</span>
                      </div>
                   </div>
                </div>
             </div>
          </div>
          {/* College */}
          <div className="p-6 relative">
             <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2 mb-1">
                    <div className="h-1.5 w-1.5 rounded-full bg-zinc-400" />
                    <h3 className="font-bold text-sm text-gray-900 dark:text-gray-100 tracking-tight">GDC Nasirabad</h3>
                </div>
                <div className="bg-gray-50/50 dark:bg-zinc-900/30 p-4 rounded-xl border border-gray-100 dark:border-zinc-800 flex items-center justify-between">
                   <div className="flex items-center gap-4">
                      <div className="size-10 rounded-xl bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center border border-gray-200 dark:border-zinc-700">
                        <GradCapIcon />
                      </div>
                      <div className="flex flex-col gap-0.5">
                        <span className="text-sm font-bold text-gray-800 dark:text-zinc-100">Intermediate</span>
                        <span className="text-xs text-zinc-500 font-mono tracking-tight underline decoration-zinc-800/10 underline-offset-4">Pre-Engineering · 2020 — 2022</span>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* ── local divider ── */}
      <div
        className="relative flex h-6 w-full border-x border-gray-200 dark:border-zinc-800"
        style={{
          background: "repeating-linear-gradient(315deg, rgba(161,161,170,0.25) 0, rgba(161,161,170,0.25) 1px, transparent 0, transparent 50%) 0 0 / 10px 10px",
        }}
      />

      {/* ── Quote panel (THE END) ── */}
      <section className="border-x border-b border-gray-100 dark:border-zinc-800 bg-white dark:bg-black overflow-hidden relative mb-24">
        {/* corner ticks */}
        <div className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2"><CrossMark /></div>
        <div className="absolute bottom-0 right-0 -translate-x-1/2 translate-y-1/2"><CrossMark /></div>

        <div className="p-16 flex flex-col items-center justify-center text-center gap-6">
           <svg viewBox="0 0 24 24" className="size-10 text-zinc-200 dark:text-zinc-800" fill="currentColor">
              <path d="M14.017 21L14.017 18C14.017 15.238 16.255 13 19.017 13L21.017 13L21.017 21L14.017 21ZM5.017 21L5.017 18C5.017 15.238 7.255 13 10.017 13L12.017 13L12.017 21L5.017 21ZM14.017 10L14.017 7C14.017 4.238 16.255 2 19.017 2L21.017 2L21.017 10L14.017 10ZM5.017 10L5.017 7C5.017 4.238 7.255 2 10.017 2L12.017 2L12.017 10L5.017 10Z" />
           </svg>
           <blockquote className="max-w-xl">
              <p className="text-xl sm:text-2xl font-bold italic text-gray-800 dark:text-gray-100 tracking-tight leading-snug">
                "I was not born with a whole lot of natural talent... but I work hard and I never give up."
              </p>
           </blockquote>
           <div className="flex items-center gap-4 w-full justify-center">
              <div className="h-px w-10 bg-zinc-100 dark:bg-zinc-800" />
              <cite className="font-mono text-xs font-bold uppercase tracking-[0.3em] text-zinc-400 not-italic">ROCK LEE</cite>
              <div className="h-px w-10 bg-zinc-100 dark:bg-zinc-800" />
           </div>
        </div>
      </section>
    </div>
  );
}

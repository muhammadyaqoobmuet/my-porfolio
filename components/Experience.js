import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ExternalLink } from "lucide-react";

/* ── reusable hatch divider (same as ProfileHeader) ── */
function HatchDivider() {
  return (
    <div
      className="relative flex h-6 w-full border-x border-gray-200 dark:border-zinc-800"
      style={{
        background:
          "repeating-linear-gradient(315deg, rgba(161,161,170,0.25) 0, rgba(161,161,170,0.25) 1px, transparent 0, transparent 50%) 0 0 / 10px 10px",
      }}
    />
  );
}

/* ── single experience entry ── */
function ExperienceItem({ exp, isLast }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`pl-4 pr-3 sm:pl-5 sm:pr-4 py-4 ${
        isLast ? "" : "border-b border-gray-200 dark:border-zinc-800"
      }`}
    >
      {/* top row: icon + role + chevron */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full text-left group"
        aria-expanded={open}
      >
        <div className="flex items-start gap-3">
          {/* dot marker */}
          <span className="mt-1.5 flex size-2 shrink-0 rounded-full bg-zinc-300 dark:bg-zinc-600" />

          <div className="flex flex-1 flex-col gap-0.5 min-w-0">
            {/* role */}
            <div className="flex items-center justify-between gap-2">
              <h3 className="font-mono text-sm font-semibold text-gray-900 dark:text-gray-100 leading-snug">
                {exp.role}
              </h3>
              <ChevronDown
                className={`size-4 shrink-0 text-gray-400 dark:text-zinc-500 transition-transform duration-200 ${
                  open ? "rotate-180" : ""
                }`}
                aria-hidden="true"
              />
            </div>

            {/* company + period */}
            <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 font-mono text-xs text-gray-500 dark:text-zinc-500">
              <a
                href={exp.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="hover:text-gray-800 dark:hover:text-zinc-200 transition-colors inline-flex items-center gap-0.5"
              >
                {exp.company}
                <ExternalLink className="size-2.5 ml-0.5" />
              </a>
              <span aria-hidden="true">·</span>
              <span>{exp.period}</span>
              {exp.location && (
                <>
                  <span aria-hidden="true">·</span>
                  <span>{exp.location}</span>
                </>
              )}
            </div>
          </div>
        </div>

        {/* short description always visible */}
        {exp.description && (
          <p className="mt-2 ml-5 font-mono text-xs text-gray-500 dark:text-zinc-500 leading-relaxed italic">
            {exp.description}
          </p>
        )}
      </button>

      {/* expandable highlights */}
      <AnimatePresence initial={false}>
        {open && exp.highlights && exp.highlights.length > 0 && (
          <motion.div
            key="details"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <ul className="mt-4 ml-5 space-y-2.5">
              {exp.highlights.map((h, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -6 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                  className="flex gap-2.5 font-mono text-xs text-gray-600 dark:text-zinc-400 leading-relaxed"
                >
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-gray-400 dark:bg-zinc-600" />
                  {h}
                </motion.li>
              ))}
            </ul>

            {/* certificate / project links */}
            {(exp.certificateUrl || exp.projectUrl) && (
              <div className="mt-4 ml-5 flex flex-wrap gap-2">
                {exp.certificateUrl && (
                  <a
                    href={exp.certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 rounded-lg border border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 px-2.5 py-1 font-mono text-xs text-emerald-600 dark:text-emerald-400 hover:bg-gray-50 dark:hover:bg-zinc-800 transition-colors"
                  >
                    Certificate <ExternalLink className="size-2.5" />
                  </a>
                )}
                {exp.projectUrl && (
                  <a
                    href={exp.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 rounded-lg border border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 px-2.5 py-1 font-mono text-xs text-purple-600 dark:text-purple-400 hover:bg-gray-50 dark:hover:bg-zinc-800 transition-colors"
                  >
                    Project <ExternalLink className="size-2.5" />
                  </a>
                )}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ── main section ── */
export default function Experience() {
  const experiences = [
    {
      role: "Software Engineer Intern",
      company: "10Pearls",
      companyUrl: "https://10pearls.com/",
      location: "Remote",
      period: "Apr 2026 – Jun 2026",
      description:
        "Developed '10P Note Management System', a full-stack MERN application equipped with semantic search and AI insights.",
      certificateUrl:
        "https://drive.google.com/file/d/1NopBQu6UwQfZBq-tg39dcMCVPuWNr40I/view?usp=sharing",
      projectUrl:
        "https://github.com/muhammadyaqoobmuet/myaqoob-mern-10pshine/tree/develop",
      highlights: [
        "Built a full-stack MERN + TypeScript note management system in a monorepo covering 10+ REST API endpoints with JWT authentication, Zod validation, and role-based session management.",
        "Developed an AI-powered RAG pipeline using LangChain, Google Gemini, and MongoDB Atlas Vector Search, enabling semantic querying across user notes with context-aware responses.",
        "Achieved 80%+ test coverage writing unit and integration tests with Vitest; reduced code smells.",
        "Implemented structured backend logging with Winston and centralized error handling; integrated TipTap rich text editor and TanStack Query for a responsive React 19 frontend.",
      ],
    },
    {
      role: "Software Engineer — Intern",
      company: "DS Digitals",
      companyUrl: "https://dsdigitals.de/",
      location: "Remote",
      period: "Aug 2025 – Dec 2025",
      description:
        "German Digital Agency specializing in high-performance web solutions.",
      highlights: [
        "Developed and maintained full-stack web applications for international business clients using React, Node.js, and PostgreSQL, ensuring robust error handling.",
        "Built multilingual, responsive UIs with Tailwind CSS that improved client engagement through better UX and faster page load times.",
        "Collaborated with European stakeholders to gather requirements, iterate on designs, and ship features on schedule in an agile environment.",
        "Deployed projects on Vercel with custom domain configuration and proper Google Search Console indexing.",
      ],
    },
  ];

  return (
    <section className="mx-auto w-full max-w-3xl">
      {/* ── panel header ── */}
      <div className="border-x border-gray-200 dark:border-zinc-800">
        <header className="px-5 py-3 border-b border-gray-200 dark:border-zinc-800">
          <h2 className="font-mono text-2xl font-semibold text-gray-900 dark:text-gray-100 tracking-tight">
            Experience
          </h2>
        </header>

        {/* ── entries ── */}
        <div>
          {experiences.map((exp, i) => (
            <ExperienceItem
              key={i}
              exp={exp}
              isLast={i === experiences.length - 1}
            />
          ))}
        </div>
      </div>

      {/* ── hatch divider at bottom ── */}
      <HatchDivider />
    </section>
  );
}

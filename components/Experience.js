import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, MapPin, Calendar, ExternalLink, ChevronDown, ChevronUp } from "lucide-react";

const ExperienceItem = ({ experience }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <motion.div
      layout
      className="group relative p-6 bg-zinc-50/50 dark:bg-zinc-900/50 rounded-2xl border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300"
    >
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <Briefcase className="w-4 h-4 text-zinc-500" />
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              {experience.role}
            </h3>
          </div>

          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-zinc-600 dark:text-zinc-400">
            <a
              href={experience.companyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium hover:text-blue-500 transition-colors flex items-center gap-1"
            >
              {experience.company}
              <ExternalLink className="w-3 h-3" />
            </a>
            {experience.location && (
              <>
                <span className="text-zinc-300 dark:text-zinc-700 mx-1">•</span>
                <div className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5" />
                  {experience.location}
                </div>
              </>
            )}
            {experience.period && (
              <>
                <span className="text-zinc-300 dark:text-zinc-700 mx-1">•</span>
                <div className="flex items-center gap-1 font-medium text-zinc-500">
                  <Calendar className="w-3.5 h-3.5" />
                  {experience.period}
                </div>
              </>
            )}
          </div>
        </div>

        {experience.highlights && experience.highlights.length > 0 && (
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-xs font-semibold text-zinc-600 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-700 transition-colors self-start"
          >
            {showDetails ? (
              <>
                Hide Details <ChevronUp className="w-3 h-3" />
              </>
            ) : (
              <>
                View Details <ChevronDown className="w-3 h-3" />
              </>
            )}
          </button>
        )}
      </div>

      {experience.description && (
        <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400 italic leading-relaxed max-w-2xl">
          {experience.description}
        </p>
      )}

      <AnimatePresence>
        {showDetails && experience.highlights && experience.highlights.length > 0 && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="mt-6 pt-6 border-t border-zinc-200 dark:border-zinc-800">
              <ul className="space-y-3">
                {experience.highlights.map((highlight, index) => (
                  <motion.li
                    key={index}
                    initial={{ x: -10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.05 }}
                    className="flex gap-3 text-sm text-zinc-700 dark:text-zinc-300"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0 shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
                    <span className="leading-relaxed">{highlight}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const Experience = () => {
  const experiences = [
    {
      role: "MERN Stack Intern",
      company: "10Pearls",
      companyUrl: "https://10pearls.com/",
      location: "Remote",
      period: "current", // No dates stuff
      description: "getting hands on with real industry workflows and team work .",
      highlights: [
        "Developing scalable web applications using MongoDB, Express.js, React, and Node.js.",
        "Collaborating with cross-functional teams to design, build, and deploy new features.",
        "Participating in code reviews and adhering to best practices for maintainability and performance.",
      ],
    },
    {
      role: "Software Engineer — Intern",
      company: "DS Digitals",
      companyUrl: "https://dsdigitals.de/",
      location: "Remote",
      period: "Aug 2025 – Dec",
      description: "German Digital Agency specializing in high-performance web solutions.",
      highlights: [
        "Developed and maintained full-stack web applications for international business clients using React, Node.js, and PostgreSQL, ensuring robust error handling.",
        "Built multilingual, responsive UIs with Tailwind CSS that improved client engagement through better UX and faster page load times.",
        "Collaborated with European stakeholders to gather requirements, iterate on designs, and ship features on schedule in an agile environment.",
        "Deployed projects on Vercel with custom domain configuration and proper Google Search Console indexing.",
      ],
    },
  ];

  return (
    <section className="py-8">
      <h2 className="font-serif text-2xl font-bold mb-6 text-gray-900 dark:text-zinc-100 italic">
        Experience
      </h2>

      <div className="flex flex-col gap-4">
        {experiences.map((exp, index) => (
          <ExperienceItem key={index} experience={exp} />
        ))}
      </div>
    </section>
  );
};

export default Experience;

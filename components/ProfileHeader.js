import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import useSWR from "swr";
import fetcher from "@/lib/fetcher";

/* ─── cross / corner tick mark ─── */
function CrossMark() {
  return (
    <div className="relative flex size-3 items-center justify-center">
      <div className="absolute h-px w-full bg-zinc-400 dark:bg-zinc-600 pointer-events-none" />
      <div className="absolute h-full w-px bg-zinc-400 dark:bg-zinc-600 pointer-events-none" />
    </div>
  );
}

/* ─── tiny helper: the hatched stripe divider ─── */
function HatchDivider() {
  const { theme } = useTheme();
  return (
    <div
      className="relative flex h-6 w-full border-x border-zinc-200 dark:border-zinc-800"
      style={{
        background:
          theme === 'dark'
            ? "repeating-linear-gradient(315deg, rgba(161,161,170,0.25) 0, rgba(161,161,170,0.25) 1px, transparent 0, transparent 50%) 0 0 / 10px 10px"
            : "repeating-linear-gradient(315deg, rgba(113,113,122,0.15) 0, rgba(113,113,122,0.15) 1px, transparent 0, transparent 50%) 0 0 / 10px 10px",
      }}
    />
  );
}

export default function ProfileHeader() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  // ── Live Views Logic ──
  const { data } = useSWR("/api/views/home", fetcher);
  const views = data ? parseInt(data.total) : 0;
  const baseViews = 253; // Requested default offset

  useEffect(() => {
    setMounted(true);
    // Increment views on mount
    fetch("/api/views/home", {
      method: "POST",
    });
  }, []);

  if (!mounted) return null;

  return (
    <div className="mx-auto w-full max-w-3xl">
      {/* ── top dot grid banner ── */}
      <div className="relative border-x border-t border-zinc-200 dark:border-zinc-800 mt-[-8px]">
        <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2"><CrossMark /></div>
        <div className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2"><CrossMark /></div>

        <div
          className="h-32 w-full"
          style={{
            backgroundImage: theme === 'dark'
              ? 'radial-gradient(circle, #e5e7eb 0.75px, transparent 0.75px)'
              : 'radial-gradient(circle, #9ca3af 0.75px, transparent 0.75px)',
            backgroundSize: '16px 16px',
            opacity: theme === 'dark' ? 0.3 : 0.45
          }}
        />
      </div>

      {/* ── Profile Card ── */}
      <div className="relative flex items-center border-x border-y border-zinc-200 dark:border-zinc-800 bg-white dark:bg-black overflow-visible shadow-sm">
        <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2"><CrossMark /></div>
        <div className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2"><CrossMark /></div>
        <div className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2"><CrossMark /></div>
        <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2"><CrossMark /></div>

        <div className="absolute top-3 right-4 flex items-center gap-1.5 font-mono text-[10px] text-gray-400 dark:text-zinc-600">
           <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-3.5">
             <path d="M2.458 12C2.458 12 6.458 4 12.458 4C18.458 4 22.458 12 22.458 12C22.458 12 18.458 20 12.458 20C6.458 20 2.458 12 2.458 12Z" />
             <circle cx="12.458" cy="12" r="3" />
           </svg>
           <span>{(baseViews + views).toLocaleString()}</span>
        </div>

        <div className="shrink-0 p-4 sm:p-6 pr-2 sm:pr-6">
          <div className="relative size-20 sm:size-32 md:size-40 overflow-hidden rounded-2xl border-2 sm:border-4 border-gray-50 dark:border-zinc-900 bg-zinc-100 dark:bg-zinc-800 shadow-xl select-none ring-1 ring-black/5">
            <Image src="/devimage.png" alt="Muhammad Yaqoob" layout="fill" objectFit="cover" className="select-none" unoptimized />
          </div>
        </div>

        <div className="flex flex-1 flex-col justify-center gap-1 pr-4 py-6 sm:py-8">
          <div className="flex items-center gap-1.5 flex-wrap">
            <h1 className="font-bold text-xl sm:text-2xl md:text-4xl text-gray-900 dark:text-gray-100 tracking-tight leading-none uppercase">
              Muhammad Yaqoob
            </h1>
            <VerifiedBadge />
          </div>
          <div className="h-6 overflow-hidden">
            <AnimatePresence mode="wait">
              <RotatingHeadline key={mounted ? "headline" : "none"} />
            </AnimatePresence>
          </div>
          <div className="flex items-center gap-1.5 flex-wrap font-mono text-[10px] sm:text-xs text-gray-400 dark:text-zinc-500 mt-1">
             <div className="flex items-center gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="whitespace-nowrap">Idle</span>
             </div>
             <span className="text-zinc-300 dark:text-zinc-800">•</span>
             <span className="whitespace-nowrap">Currently building</span>
          </div>
        </div>
      </div>

      <HatchDivider />

      {/* ── About section ── */}
      <section className="border-x border-zinc-200 dark:border-zinc-800 bg-white dark:bg-black overflow-visible">
        <header className="px-5 py-3 border-b border-zinc-200 dark:border-zinc-800">
          <h2 className="font-mono text-xl font-bold text-gray-900 dark:text-gray-100 tracking-tight uppercase">About Me</h2>
        </header>
        <div className="p-6">
          <p className="font-mono text-sm leading-relaxed text-gray-600 dark:text-zinc-400">
            I&apos;m a builder who&apos;s still figuring things out, but doing it by creating along the way. I thrive at the intersection of AI and real-world impact—engineering systems that scale, experimenting with LLMs, and turning abstract ideas into tangible reality. My technical foundation is built on Next.js, TypeScript, and Node.js, backed by experience in distributed architectures using Redis and RabbitMQ. I’m equally comfortable in the trenches of deployment, managing robust infrastructure via Docker, Nginx, and automated CI/CD pipelines.
          </p>
        </div>
      </section>

      <HatchDivider />

      {/* ── Connect section (Contact) ── */}
      <section className="border-x border-zinc-200 dark:border-zinc-800 bg-white dark:bg-black overflow-visible">
        <header className="px-5 py-3 border-b border-zinc-200 dark:border-zinc-800">
          <h2 className="font-mono text-xl font-bold text-gray-900 dark:text-gray-100 tracking-tight uppercase">Connect</h2>
        </header>
        <div className="p-6 flex flex-wrap items-center justify-center sm:justify-start gap-3">
          <SocialChip type="github" href="https://github.com/muhammadyaqoobmuet" label="GitHub" icon={<GithubIcon />} />
          <SocialChip type="linkedin" href="https://www.linkedin.com/in/muhammad-yaqoob-59971625b/" label="LinkedIn" icon={<LinkedinIcon />} />
          <SocialChip type="twitter" href="https://x.com/jackub_halepoto" label="Twitter" icon={<TwitterIcon />} />
          <SocialChip type="email" href="mailto:yaqoobahmed45700@gmail.com" label="Mail" icon={<MailIcon />} />
          <SocialChip type="resume" href="/resume/myaqoob_resume.pdf" label="Resume" icon={<ResumeIcon />} />
        </div>
      </section>
    </div>
  );
}

function VerifiedBadge() { return <svg viewBox="0 0 24 24" className="size-4 sm:size-6 text-blue-500 fill-current shrink-0"><path d="M22.25 12c0-1.43-.88-2.67-2.19-3.34.46-1.39.2-2.9-.81-3.91s-2.52-1.27-3.91-.81c-.67-1.31-1.91-2.19-3.34-2.19s-2.67.88-3.33 2.19c-1.4-.46-2.91-.2-3.92.81s-1.26 2.52-.8 3.91c-1.31.67-2.2 1.91-2.2 3.34s.89 2.67 2.2 3.34c-.46 1.39-.21 2.9.8 3.91s2.52 1.26 3.91.81c.67 1.31 1.91 2.19 3.34 2.19s2.67-.88 3.33-2.19c1.4.47 2.91.2 3.92-.81s1.26-2.52.8-3.91c1.31-.67 2.19-1.91 2.19-3.34zm-11.71 4.2L6.8 12.46l1.41-1.42 2.26 2.26 4.8-5.23 1.47 1.35-6.2 6.78z" /></svg>; }

function SocialChip({ type, href, label, icon }) {
  const [isHovered, setIsHovered] = useState(false);
  
  const cardData = {
    github: {
      username: "muhammadyaqoobmuet",
      bio: "Software Engineer. Building at the intersection of AI and real-world impact.",
      cta: "Follow",
      stats: "1.2k+ contributions"
    },
    linkedin: {
      username: "muhammadyaqoob",
      bio: "Full Stack Engineer | Next.js, Distributed Systems & Infrastructure.",
      cta: "Connect",
      stats: "500+ connections"
    },
    twitter: {
      username: "jackub_halepoto",
      bio: "Software Engineering student. Exploring LLMs and building systems.",
      cta: "Follow",
      stats: "Join the journey"
    }
  };

  const data = cardData[type];

  return (
    <div className="relative z-[100]" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <a href={href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 h-8 px-3 rounded-xl border border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:bg-gray-50 dark:hover:bg-zinc-800 transition-all text-gray-700 dark:text-zinc-300">
        {icon}<span className="text-xs font-medium">{label}</span>
      </a>
      <AnimatePresence>
        {isHovered && data && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: -10 }} 
            animate={{ opacity: 1, scale: 1, y: 0 }} 
            exit={{ opacity: 0, scale: 0.95, y: -10 }} 
            className="absolute top-full left-0 mt-3 z-[200] origin-top-left"
          >
            <div className="w-72 overflow-hidden rounded-2xl border border-gray-100 dark:border-zinc-800 bg-white dark:bg-zinc-950 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] dark:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] p-4 ring-1 ring-black/5 dark:ring-white/5">
                 <div className="flex items-start justify-between mb-3">
                    <div className="relative size-14 overflow-hidden rounded-full border-2 border-gray-50 dark:border-zinc-900 shadow-sm">
                       <Image 
                         src={
                           type === "twitter" ? "https://pbs.twimg.com/profile_images/1942495208559505408/Ftrd7J8b_400x400.jpg" :
                           type === "linkedin" ? "https://media.licdn.com/dms/image/v2/D4D03AQEHIIcFlprpBA/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1709578344316?e=1782345600&v=beta&t=TMBBeI6C28QgrtNMFckmO758lzwamwjxsnBYYiuJLy0" :
                           "https://github.com/muhammadyaqoobmuet.png"
                         } 
                         alt="Avatar" 
                         layout="fill" 
                         unoptimized 
                       />
                    </div>
                    <div className="flex flex-col items-end">
                       <button className="h-7 px-4 rounded-full bg-black dark:bg-white text-white dark:text-black text-[10px] font-bold uppercase tracking-wider hover:opacity-80 transition-opacity">
                          {data.cta}
                       </button>
                    </div>
                 </div>
                 <div className="space-y-1">
                    <h4 className="text-sm font-bold text-gray-900 dark:text-white leading-none tracking-tight">Muhammad Yaqoob</h4>
                    <p className="text-[11px] text-gray-500 dark:text-zinc-500 font-mono">@{data.username}</p>
                 </div>
                 <p className="mt-2.5 text-[12px] leading-relaxed text-gray-600 dark:text-zinc-400">
                    {data.bio}
                 </p>
                 <div className="mt-3 pt-3 border-t border-gray-50 dark:border-zinc-900 flex items-center justify-between text-[10px] font-mono text-zinc-400 dark:text-zinc-500">
                    <span>{data.stats}</span>
                    <div className="flex items-center gap-1">
                       <span className="size-1 rounded-full bg-zinc-300 dark:bg-zinc-800" />
                       {type}
                    </div>
                 </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function RotatingHeadline() {
  const titles = ["Full Stack Engineer", "Always learning", "Trying to do better"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % titles.length);
    }, 4500); 
    return () => clearInterval(timer);
  }, [titles.length]);

  return (
    <div className="h-6 relative overflow-hidden w-full">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          className="absolute left-0 top-0 flex items-center h-full"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.02,
              },
            },
            exit: {
               transition: {
                staggerChildren: 0.015,
                staggerDirection: -1
              }
            }
          }}
        >
          {titles[index].split("").map((char, i) => (
            <motion.span
              key={`${index}-${i}`}
              variants={{
                hidden: { y: 15, opacity: 0, filter: "blur(4px)" },
                visible: { y: 0, opacity: 1, filter: "blur(0px)" },
                exit: { y: -15, opacity: 0, filter: "blur(4px)" }
              }}
              transition={{
                duration: 0.5,
                ease: [0.215, 0.61, 0.355, 1], // Very buttery out-cubic variant
              }}
              className="font-mono text-[13px] sm:text-base text-gray-500 dark:text-zinc-400 whitespace-pre inline-block"
            >
              {char}
            </motion.span>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

function GithubIcon() { return <svg viewBox="0 0 24 24" className="size-3.5" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>; }
function LinkedinIcon() { return <svg viewBox="0 0 24 24" className="size-3.5" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>; }
function TwitterIcon() { return <svg viewBox="0 0 24 24" className="size-3.5" fill="currentColor"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>; }
function MailIcon() { return <svg viewBox="0 0 24 24" className="size-3.5" fill="currentColor"><path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 8.138h-18.745l5.479-8.133zm8.171-1.259l4.653-3.771v9.397l-4.653-5.626z"/></svg>; }
function ResumeIcon() { return <svg viewBox="0 0 24 24" className="size-3.5" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.414a4 4 0 00-5.656-5.656l-6.415 6.414a6 6 0 108.486 8.486L20.5 13" /></svg>; }

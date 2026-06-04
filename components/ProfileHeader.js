import Image from "next/image";
import Link from "next/link";

/* ─── tiny helper: the hatched stripe divider ─── */
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

/* ─── cross / corner tick mark ─── */
function CrossMark() {
  return (
    <div className="relative flex size-3 items-center justify-center">
      <div className="absolute h-px w-full bg-zinc-300 dark:bg-zinc-600" />
      <div className="absolute h-full w-px bg-zinc-300 dark:bg-zinc-600" />
    </div>
  );
}

export default function ProfileHeader() {
  return (
    <div className="mx-auto w-full max-w-3xl">

      {/* ── profile card row ── */}
      <div className="relative flex border-x border-gray-200 dark:border-zinc-800">
        {/* corner ticks */}
        <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2">
          <CrossMark />
        </div>
        <div className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2">
          <CrossMark />
        </div>

        {/* Avatar */}
        <div className="w-[38%] shrink-0 p-3 sm:w-auto sm:shrink-0 sm:p-5">
          <div className="aspect-square h-auto w-full rounded-xl border border-gray-200 dark:border-zinc-700 p-1 transition duration-300 hover:brightness-90 sm:size-32">
            <div className="relative aspect-square h-auto w-full overflow-hidden rounded-lg">
              <Image
                src="/devimage.png"
                alt="Muhammad Yaqoob"
                layout="fill"
                objectFit="cover"
                className="select-none rounded-lg"
                unoptimized
              />
            </div>
          </div>
        </div>

        {/* Info */}
        <div className="flex flex-1 flex-col justify-center gap-1 pl-2 pr-3 sm:pl-4 sm:pr-5 py-4">
          {/* Name row */}
          <div className="flex items-center gap-2 pt-1 pb-1">
            <h1 className="font-bold text-xl leading-none sm:text-3xl text-gray-900 dark:text-gray-100 tracking-tight">
              Muhammad Yaqoob
            </h1>
          </div>

          {/* Role subtitle */}
          <p className="font-mono text-sm leading-snug text-gray-500 dark:text-zinc-400">
            Full Stack Developer
          </p>

          {/* Status indicator */}
          <span className="flex min-h-4 items-center gap-1.5 font-mono text-xs text-gray-400 dark:text-zinc-500 mt-1">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400 animate-pulse" />
            <span>Available for opportunities</span>
          </span>

          {/* Social links */}
          <div className="flex flex-wrap items-center gap-2 mt-3">
            <SocialChip
              href="https://github.com/muhammadyaqoobmuet"
              label="GitHub"
              icon={
                <svg viewBox="0 0 496 512" className="size-[13px]" fill="currentColor">
                  <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8z"/>
                </svg>
              }
            />
            <SocialChip
              href="https://www.linkedin.com/in/muhammad-yaqoob-59971625b/"
              label="LinkedIn"
              icon={
                <svg viewBox="0 0 448 512" className="size-[13px]" fill="currentColor">
                  <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/>
                </svg>
              }
            />
            <SocialChip
              href="https://x.com/jackub_halepoto"
              label="Twitter"
              icon={
                <svg viewBox="0 0 512 512" className="size-[13px]" fill="currentColor">
                  <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/>
                </svg>
              }
            />
            <SocialChip
              href="mailto:yaqoobahmed45700@gmail.com"
              label="Email"
              icon={
                <svg viewBox="0 0 512 512" className="size-[13px]" fill="currentColor">
                  <path d="M437.332 80H74.668C51.199 80 32 99.198 32 122.667v266.666C32 412.802 51.199 432 74.668 432h362.664C460.801 432 480 412.802 480 389.333V122.667C480 99.198 460.801 80 437.332 80zM432 170.667L256 288 80 170.667V128l176 117.333L432 128v42.667z"/>
                </svg>
              }
            />
            <SocialChip
              href="/resume/myaqoob_resume.pdf"
              label="Resume"
              icon={
                <svg viewBox="0 0 448 512" className="size-[13px]" fill="currentColor">
                  <path d="M364.2 83.8c-24.4-24.4-64-24.4-88.4 0l-184 184c-42.1 42.1-42.1 110.3 0 152.4s110.3 42.1 152.4 0l152-152c10.9-10.9 28.7-10.9 39.6 0s10.9 28.7 0 39.6l-152 152c-64 64-167.6 64-231.6 0s-64-167.6 0-231.6l184-184c46.3-46.3 121.3-46.3 167.6 0s46.3 121.3 0 167.6l-176 176c-28.6 28.6-75 28.6-103.6 0s-28.6-75 0-103.6l144-144c10.9-10.9 28.7-10.9 39.6 0s10.9 28.7 0 39.6l-144 144c-6.7 6.7-6.7 17.7 0 24.4s17.7 6.7 24.4 0l176-176c24.4-24.4 24.4-64 0-88.4z"/>
                </svg>
              }
            />
          </div>
        </div>
      </div>

      {/* ── hatch divider ── */}
      <HatchDivider />

      {/* ── About panel ── */}
      <section
        className="border-x border-gray-200 dark:border-zinc-800"
        id="about"
      >
        {/* panel header */}
        <header className="px-5 py-3 border-b border-gray-200 dark:border-zinc-800">
          <h2 className="font-mono text-2xl font-semibold text-gray-900 dark:text-gray-100 tracking-tight">
            About
          </h2>
        </header>

        {/* panel body */}
        <div className="p-5">
          <ul className="font-mono text-sm leading-relaxed text-gray-600 dark:text-zinc-400 space-y-3 list-disc list-outside pl-4">
            <li>
              Full Stack Developer building  web applications with{" "}
              <strong className="text-gray-800 dark:text-zinc-200 font-medium">Next.js</strong>,{" "}
              <strong className="text-gray-800 dark:text-zinc-200 font-medium">Node.js</strong>, and{" "}
              <strong className="text-gray-800 dark:text-zinc-200 font-medium">Redis and rabbitmq</strong> — focused on scalability, performance, and clean architecture.
            </li>
             <li>
              im currently learning system designs and data modeling {" "}
              <strong className="text-gray-800 dark:text-zinc-200 font-medium">along aws services </strong> — that will help me to struct clean architecture.
            </li>
            <li>
              I've developed projects like{" "}
              <a href="https://zhrnuty.netlify.app/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 text-gray-800 dark:text-zinc-200 hover:text-black dark:hover:text-white transition-colors">
                Zhurnuty
              </a>{" "}
              (AI PDF summarizer),{" "}
              <a href="https://shadow-proximatychat.netlify.app/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 text-gray-800 dark:text-zinc-200 hover:text-black dark:hover:text-white transition-colors">
                Shadow
              </a>{" "}
              (anonymous chat), and{" "}
              <a href="https://codeflow-roastfriends-argfg2a0fwgygeh4.eastasia-01.azurewebsites.net/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 text-gray-800 dark:text-zinc-200 hover:text-black dark:hover:text-white transition-colors">
                CodeFlow
              </a>{" "}
              (real-time collaborative coding)
            </li>
            <li>
              Hackathon enthusiast — ranked <strong className="text-gray-800 dark:text-zinc-200 font-medium">17th out of 1,000+</strong> teams at Hack for Humanity 2025 with{" "}
              <a href="https://devpost.com/software/campushub-bjqhvu" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 text-gray-800 dark:text-zinc-200 hover:text-black dark:hover:text-white transition-colors">
                CampusHub
              </a>.
            </li>
          </ul>
        </div>
      </section>

      {/* ── bottom hatch divider ── */}
      <HatchDivider />
    </div>
  );
}

/* ─── Social chip pill ─── */
function SocialChip({ href, label, icon }) {
  return (
    <a
      href={href}
      target={href.startsWith("mailto") ? undefined : "_blank"}
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 h-8 px-3 rounded-xl border border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:bg-gray-50 dark:hover:bg-zinc-800 hover:border-gray-300 dark:hover:border-zinc-700 shadow-sm hover:shadow-md transition-all duration-200 select-none text-gray-700 dark:text-zinc-300"
    >
      {icon}
      <span className="text-xs font-medium leading-none">{label}</span>
    </a>
  );
}

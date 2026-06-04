import Container from "@/components/Container";
import Link from "next/link";
import BlogPost from "@/components/BlogPost";
import ProjectCard from "@/components/ProjectCard";
import Experience from "@/components/Experience";
import ProfileHeader from "@/components/ProfileHeader";
import EducationAndQuote from "@/components/EducationAndQuote";
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const projects = [
    {
      title: "CodeFlow",
      description: "A real-time collaborative coding platform featuring live audio calls, code synchronization, and chat using WebRTC and Socket.io.",
      href: "https://codeflow-roastfriends-argfg2a0fwgygeh4.eastasia-01.azurewebsites.net/",
      tags: ["React", "WebRTC", "Socket.io"],
      githubUrl: "https://github.com/muhammadyaqoobmuet/CodeFlow",
      imgUrl: "https://zgcfthkjlo.ufs.sh/f/mCFHu5O1Sdh1HswGvf3ECvweUK4GzTJYF9ylkoQIfxBr6uLO",
      date: "02.2026",
    },
    {
      title: "SHADOW | Anonymous Chat",
      description: "An anonymous, location-based chat app where real talk happens. No accounts. No personal data. Just raw thoughts, dropped where you are.",
      href: "https://shadow-proximatychat.netlify.app/",
      tags: ["Next.js", "Socket.IO", "MongoDB", "Redis", "Express"],
      githubUrl: "https://github.com/muhammadyaqoobmuet/Shadow-StayAnonymous",
      imgUrl: "https://zgcfthkjlo.ufs.sh/f/mCFHu5O1Sdh16T4xDtMdECGfumLFH8xkj0DrPnhSeO9BIXga",
      date: "12.2025",
    },
    {
      title: "Zhurnuty",
      description: "AI-powered PDF summarization tool built with Next.js 15, Langchain, and Gemini AI. Features secure auth via Clerk.",
      href: "https://zhrnuty.netlify.app/",
      githubUrl: "https://github.com/muhammadyaqoobmuet/Zhrnuty",
      tags: ["Next.js 15", "Gemini AI", "Langchain", "PostgreSQL", "Clerk"],
      imgUrl: "https://zgcfthkjlo.ufs.sh/f/mCFHu5O1Sdh1W1LrsJkkqKg2HXxS9ZFW5pdb0lRJCmINueyz",
      date: "01.2026",
    },
    {
      title: "DS Digitals",
      description: "Built and deployed a high-performance website for a German software agency. Handled production setup, SEO optimization, and Google Search Console integration.",
      href: "https://dsdigitals.de/",
      tags: ["Next.js", "TypeScript", "Resend"],
      imgUrl: "https://zgcfthkjlo.ufs.sh/f/mCFHu5O1Sdh11hVXUCqDU69zwmuHEBQOV8cZdbqK7CspLXgJ",
      date: "08.2025",
    },
  ];

  return (
    <Container>
      <div
        className="transition-all duration-[800ms] ease-out"
        style={{
          filter: isLoaded ? "blur(0px)" : "blur(40px)",
          opacity: isLoaded ? 1 : 0.3,
        }}
      >
        {/* 1. Header (Profile card contains Header, About, Connect) */}
        <div className="pt-6">
          <ProfileHeader />
        </div>

        {/* 2. Experience (exp) */}
        <div className="mt-8">
          <Experience />
        </div>

        <HatchDivider />

        {/* 3. Recent Blogs (blog) */}
        <section className="mx-auto w-full max-w-3xl border-x border-gray-200 dark:border-zinc-800">
          <header className="px-5 py-3 border-b border-gray-200 dark:border-zinc-800">
            <h2 className="font-mono text-2xl font-semibold text-gray-900 dark:text-gray-100 tracking-tight">
              Recent Blogs
            </h2>
          </header>
          
          <div className="flex flex-col">
            <BlogPost
              title="Ace the Javascript Interview"
              summary="Practical questions and patterns to help you master your next technical interview."
              slug="ace-the-javascript-interview"
            />
            <BlogPost
              title="Mastering React Query"
              summary="A deep dive into fetching, caching, and syncing server state in React applications."
              slug="react-qurey"
            />
          </div>

          <div className="px-5 py-3 border-t border-gray-200 dark:border-zinc-800">
            <Link href="/blog">
              <a className="inline-flex items-center text-sm font-mono text-gray-500 hover:text-gray-900 dark:hover:text-gray-100 transition-colors">
                View All Blogs <ArrowRight className="ml-1.5 size-3.5" />
              </a>
            </Link>
          </div>
        </section>

        <HatchDivider />

        {/* 4. Selected Work (work) */}
        <section id="projects" className="mx-auto w-full max-w-3xl border-x border-gray-200 dark:border-zinc-800 scroll-mt-24">
          <header className="flex items-center justify-between px-5 py-3 border-b border-gray-200 dark:border-zinc-800">
            <h2 className="font-mono text-2xl font-semibold text-gray-900 dark:text-gray-100 tracking-tight">
              Selected Work
            </h2>
            <Link href="/projects">
              <a className="font-mono text-[10px] uppercase tracking-wider px-2.5 py-1 bg-gray-100 dark:bg-zinc-800 text-gray-600 dark:text-zinc-400 rounded border border-gray-200 dark:border-zinc-700 hover:bg-gray-200 dark:hover:bg-zinc-700 transition-colors">
                See All
              </a>
            </Link>
          </header>

          <div className="p-5 grid grid-cols-1 md:grid-cols-2 gap-4">
            {projects.map((project, idx) => (
              <ProjectCard key={idx} {...project} />
            ))}
          </div>

          <div className="px-5 py-3 border-t border-gray-200 dark:border-zinc-800">
             <Link href="/projects">
              <a className="inline-flex items-center text-sm font-mono text-gray-500 hover:text-gray-900 dark:hover:text-gray-100 transition-colors">
                Browse Archive <ArrowRight className="ml-1.5 size-3.5" />
              </a>
            </Link>
          </div>
        </section>

        <HatchDivider />

        {/* 5. Education & Quote (this section) */}
        <div className="mb-16">
          <EducationAndQuote />
        </div>
      </div>
    </Container>
  );
}

/* ─── locally used divider ─── */
function HatchDivider() {
  return (
    <div
      className="mx-auto w-full max-w-3xl relative flex h-6 border-x border-gray-200 dark:border-zinc-800"
      style={{
        background:
          "repeating-linear-gradient(315deg, rgba(161,161,170,0.25) 0, rgba(161,161,170,0.25) 1px, transparent 0, transparent 50%) 0 0 / 10px 10px",
      }}
    />
  );
}

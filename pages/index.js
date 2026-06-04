import Container from "@/components/Container";
import Link from "next/link";
import BlogPost from "@/components/BlogPost";
import ProjectCard from "@/components/ProjectCard";
import JourneyList from "@/components/JourneyList";
import TechStack from "@/components/TechStack";
import Experience from "@/components/Experience";
import ProfileHeader from "@/components/ProfileHeader";
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

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
      priority: true,
    },
    {
      title: "SHADOW | Anonymous Chat",
      description: "An anonymous, location-based chat app where real talk happens. No accounts. No personal data. Just raw thoughts, dropped where you are.",
      href: "https://shadow-proximatychat.netlify.app/",
      tags: ["Next.js", "Socket.IO", "MongoDB", "Redis", "Express"],
      githubUrl: "https://github.com/muhammadyaqoobmuet/Shadow-StayAnonymous",
      imgUrl: "https://zgcfthkjlo.ufs.sh/f/mCFHu5O1Sdh16T4xDtMdECGfumLFH8xkj0DrPnhSeO9BIXga",
      priority: true,
    },
    {
      title: "Zhurnuty",
      description: "AI-powered PDF summarization tool built with Next.js 15, Langchain, and Gemini AI. Features secure auth via Clerk.",
      href: "https://zhrnuty.netlify.app/",
      githubUrl: "https://github.com/muhammadyaqoobmuet/Zhrnuty",
      tags: ["Next.js 15", "Gemini AI", "Langchain", "PostgreSQL", "Clerk"],
      imgUrl: "https://zgcfthkjlo.ufs.sh/f/mCFHu5O1Sdh1W1LrsJkkqKg2HXxS9ZFW5pdb0lRJCmINueyz",
    },
    {
      title: "DS Digitals",
      description: "Built and deployed a high-performance website for a German software agency. Handled production setup, SEO optimization, and Google Search Console integration.",
      href: "https://dsdigitals.de/",
      tags: ["Next.js", "TypeScript", "Resend"],
      imgUrl: "https://zgcfthkjlo.ufs.sh/f/mCFHu5O1Sdh11hVXUCqDU69zwmuHEBQOV8cZdbqK7CspLXgJ",
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
        {/* ── Profile card (jdhruv.dev-style) ── */}
        <div className="pt-6 pb-2">
          <ProfileHeader />
        </div>

        {/* ── Rest of page sections ── */}
        <div className="flex flex-col gap-24 my-16">
          <Experience />

          {/* Recent Blogs */}
          <section>
            <h2 className="font-serif text-3xl font-semibold mb-8 text-gray-900 dark:text-gray-100">
              Recent Blogs
            </h2>
            <div className="flex flex-col gap-2">
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
              <Link href="/blog">
                <a className="inline-flex items-center mt-4 text-sm font-medium text-gray-500 hover:text-gray-900 dark:hover:text-gray-100 transition-colors">
                  See All Blogs <ArrowRight className="ml-1 w-4 h-4" />
                </a>
              </Link>
            </div>
          </section>

          {/* Selected Work */}
          <section id="projects" className="scroll-mt-24">
            <div className="flex items-center justify-between mb-10">
              <h2 className="font-serif text-3xl font-semibold text-gray-900 dark:text-gray-100">
                Selected Work
              </h2>
              <Link href="/projects">
                <a className="px-4 py-2 text-sm font-medium bg-gray-100 dark:bg-zinc-800 text-gray-900 dark:text-gray-100 rounded-lg hover:bg-gray-200 dark:hover:bg-zinc-700 transition-all border border-transparent active:scale-95">
                  Show All Projects
                </a>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project, idx) => (
                <ProjectCard key={idx} {...project} />
              ))}
            </div>

            <Link href="/projects">
              <a className="inline-flex items-center mt-8 text-sm text-gray-500 hover:text-gray-900 dark:hover:text-gray-100 transition-colors">
                See all projects <ArrowRight className="ml-1 w-4 h-4" />
              </a>
            </Link>
          </section>

          <section>
            <JourneyList />
          </section>

          <section>
            <TechStack />
          </section>
        </div>
      </div>
    </Container>
  );
}

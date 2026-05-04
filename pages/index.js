import Container from "@/components/Container";
import Link from "next/link";
import BlogPost from "@/components/BlogPost";
import ProjectCard from "@/components/ProjectCard";
import JourneyList from "@/components/JourneyList";
import TechStack from "@/components/TechStack";
import Experience from "@/components/Experience";
import { ArrowRight, Download, ChevronDown } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger the blur-to-focus animation after component mounts
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

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
      tags: ["Next.js", "Socket.IO", "MongoDB", "Redis","Express"],
      githubUrl: "https://github.com/muhammadyaqoobmuet/Shadow-StayAnonymous",
      imgUrl: "https://zgcfthkjlo.ufs.sh/f/mCFHu5O1Sdh16T4xDtMdECGfumLFH8xkj0DrPnhSeO9BIXga",
      priority: true,
    },
    {
      title: "Zhurnuty",
      description: "AI-powered PDF summarization tool built with Next.js 15, Langchain, and Gemini AI. Features secure auth via Clerk.",
      href: "https://zhrnuty.netlify.app/",
      githubUrl: "https://github.com/muhammadyaqoobmuet/Zhrnuty",
      tags: ["Next.js 15", "Gemini AI", "Langchain","PostgreSQL","Clerk"],
      imgUrl: "https://zgcfthkjlo.ufs.sh/f/mCFHu5O1Sdh1W1LrsJkkqKg2HXxS9ZFW5pdb0lRJCmINueyz",
    },
    {
      title: "DS Digitals",
      description: "Built and deployed a high-performance website for a German software agency. Handled production setup, SEO optimization, and Google Search Console integration for organic growth.",
      href: "https://dsdigitals.de/",
      tags: ["Next.js", "TypeScript", "Resend"],
      imgUrl: "https://zgcfthkjlo.ufs.sh/f/mCFHu5O1Sdh11hVXUCqDU69zwmuHEBQOV8cZdbqK7CspLXgJ",
    }
  ];

  const displayedProjects = projects.slice(0, 4);

  return (
    <Container>
      <div
        className="transition-all duration-[800ms] ease-out"
        style={{
          filter: isLoaded ? 'blur(0px)' : 'blur(40px)',
          opacity: isLoaded ? 1 : 0.3,
        }}
      >
      {/* Hero Section */}
      <div className="flex flex-col-reverse md:flex-row justify-between items-start pt-20 pb-16">
        <div className="flex flex-col items-start max-w-xl text-left">
            <h1 className="font-serif text-5xl md:text-6xl font-bold tracking-tight mb-4 text-gray-900 dark:text-gray-100">
            Muhammad Yaqoob
            </h1>
            <h2 className="text-gray-700 dark:text-gray-200 text-xl font-semibold mb-6">
                Full-Stack Developer
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg leading-relaxed">
            I build scalable, high-performance web applications using Next.js and Node.js, I use Redis where caching and performance really matter, and design systems that stay fast and reliable as they grow.
            </p>

            <div className="flex flex-wrap gap-4 items-center pt-8">
                <motion.a
                  href="#projects"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="group relative inline-flex items-center gap-2.5 px-8 py-3.5 rounded-xl bg-zinc-900 dark:bg-white/[0.08] text-white dark:text-zinc-100 font-medium tracking-tight transition-all duration-300 border border-zinc-800 dark:border-white/10 backdrop-blur-md shadow-xl hover:shadow-zinc-500/10 dark:hover:shadow-white/5 overflow-hidden"
                >
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="relative z-10">Show Projects</span>
                    <ChevronDown className="relative z-10 w-4 h-4 transition-transform group-hover:translate-y-0.5 opacity-80" />
                </motion.a>

                <motion.a
                  href="/resume/myaqoob_resume.pdf"
                  download
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="group relative inline-flex items-center gap-2.5 px-8 py-3.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/50 text-zinc-700 dark:text-zinc-300 font-medium tracking-tight transition-all duration-300 backdrop-blur-sm hover:bg-zinc-50 dark:hover:bg-zinc-800/50 hover:text-zinc-900 dark:hover:text-zinc-100 shadow-sm"
                >
                    <Download className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 opacity-70 group-hover:opacity-100" />
                    <span>Download CV</span>
                </motion.a>
            </div>
        </div>

        {/* Profile Photo */}
        <div className="relative w-[170px] h-[150px] mb-8 md:mb-0 md:ml-8">
            <a href="https://twitter.com/jackub_halepoto" target="_blank" rel="noopener noreferrer" className="block w-full h-full relative">
                <Image
                src="/devimage.png"
                alt="Muhammad Yaqoob"
                layout="fill"
                objectFit="cover"
                className="rounded-sm border-2 border-gray-100 dark:border-zinc-800 shadow-lg cursor-pointer hover:opacity-90 transition-opacity"
                />
            </a>
        </div>
      </div>

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
                    See All Blogs <ArrowRight className="ml-1 w-4 h-4"/>
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
                {displayedProjects.map((project, idx) => (
                    <ProjectCard key={idx} {...project} />
                ))}
            </div>


            <Link href="/projects">
                <a className="inline-flex items-center mt-8 text-sm text-gray-500 hover:text-gray-900 dark:hover:text-gray-100 transition-colors">
                    See all projects <ArrowRight className="ml-1 w-4 h-4" />
                </a>
            </Link>
        </section>



          {/* About Me / Journey (Moved to bottom) + TechStack */}
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

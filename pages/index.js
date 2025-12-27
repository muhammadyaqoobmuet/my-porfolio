import Container from "@/components/Container";
import Link from "next/link";
import BlogPost from "@/components/BlogPost";
import ProjectCard from "@/components/ProjectCard";
import JourneyList from "@/components/JourneyList";
import TechStack from "@/components/TechStack";
import Contact from "@/components/Contact";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger the blur-to-focus animation after component mounts
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

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

            <div className="flex gap-4">
                <Link href="/projects">
                    <a className="inline-flex items-center text-gray-900 dark:text-gray-100 font-medium hover:underline underline-offset-4 decoration-gray-400">
                        View Work <ArrowRight className="ml-2 w-4 h-4"/>
                    </a>
                </Link>
                <Link href="mailto:yaqoobahmed45700@gmail.com">
                    <a className="inline-flex items-center text-gray-600 dark:text-gray-400 font-medium hover:text-gray-900 dark:hover:text-gray-100 transition-colors">
                        Contact Me
                    </a>
                </Link>
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

          {/* Recent Blogs (Moved up) */}
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
          <section id="projects">
              <h2 className="font-serif text-3xl font-semibold mb-8 text-gray-900 dark:text-gray-100">
                Selected Work
              </h2>
              <div className="flex flex-col gap-6">
                <ProjectCard
                  title="CodeFlow"
                  description="A real-time collaborative coding platform featuring live video/audio calls, code synchronization, and chat using WebRTC and Socket.io."
                  href="https://codeflow-roastfriends-argfg2a0fwgygeh4.eastasia-01.azurewebsites.net/"
                  tags={["React", "WebRTC", "Socket.io"]}
                  imgUrl="/project-photos/codeflow.png"
                />
                <ProjectCard
                  title="Zhurnuty"
                  description="AI-powered PDF summarization tool built with Next.js 15, Langchain, and Gemini AI. Features secure auth via Clerk."
                  href="https://zhrnuty.netlify.app/"
                  tags={["Next.js 15", "Gemini AI", "Langchain"]}
                  imgUrl="/project-photos/zhrnuty.png"
                />
                <ProjectCard
                  title="DS Digitals"
                  description="Built and deployed a high-performance website for a German software agency. Handled production setup, SEO optimization, and Google Search Console integration for organic growth."
                  href="https://dsdigitals.de/"
                  tags={["Next.js", "TypeScript", "Resend"]}
                  imgUrl="/project-photos/dsdigitals.png"
                />
              </div>
               <Link href="/projects">
                <a className="inline-flex items-center mt-8 text-sm text-gray-500 hover:text-gray-900 dark:hover:text-gray-100 transition-colors">
                    See all projects <ArrowRight className="ml-1 w-4 h-4"/>
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

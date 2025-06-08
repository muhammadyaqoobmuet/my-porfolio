import Container from "@/components/Container";
import Link from "next/link";
import BlogPost from "@/components/BlogPost";
import ProjectCard from "@/components/ProjectCard";
import Timeline from "@/components/Timeline";
import Contact from "@/components/Contact";

import { LIGHT_COLORS } from "@/lib/constants";

import { shuffleArray } from "@/lib/shuffleArray";
import { useEffect, useState } from "react";
import { useIsFontReady } from "@/lib/useIsFontReady";

import { useTheme } from "next-themes";
import Talks from "@/components/Talks";
import Header from "@/components/Header";

export default function Home() {
  const [colors, setColors] = useState([]);

  let tempInterval;

  const isFontReady = useIsFontReady();
  const { theme, setTheme } = useTheme();

  const play = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    setColors(shuffleArray(LIGHT_COLORS));
  }, []);

  return (
    <Container
      title="Muhammad Yaqoob -Full Stack Developer, "
      description="Full-Stack developer, JavaScript enthusiast, Freelancer, I love building products and web apps that impact millions of lives."
    >
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <Header />
        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 text-black dark:text-white">
          Recent Blogs
        </h3>
        <BlogPost
          title="Ace the Javascript Interview - Practical questions to help you clear your next interview"
          summary="Ace your next Javascript Interview - Practice these topics in depth with examples and code snippets."
          slug="ace-the-javascript-interview"
        />
        <BlogPost
          title="Mastering React Query – Fetching, Caching, and Syncing Data Like a Pro"
          summary="React Query makes handling server state easy and powerful. Learn how to use it for fetching, caching, synchronizing, and updating data in your apps"
          slug="react-qurey"
        />
        <Link href="/blog">
          <a
            type="button"
            className="flex items-center text-sm my-4 mx-auto px-4 py-2 rounded-md font-medium text-gray-900 dark:text-gray-100"
          >
            See All Blogs
            <svg
              className="h-4 w-4 ml-1"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </a>
        </Link>

        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black dark:text-white">
          Projects
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ProjectCard
            title="Zhurnuty - AI PDF Summarizer"
            description="Next.js 15 app for PDF summarization with TypeScript. Features Clerk authentication (Passkey, GitHub, Google), Langchain for smart PDF parsing & chunking (up to 8MB), and Gemini AI for accurate summaries."
            href="https://zhurnuty.vercel.app"
            icon="zhurnuty"
            tags={[
              "Next.js 15",
              "TypeScript",
              "Gemini AI",
              "Clerk",
              "TailwindCSS",
              "Chrome Extension",
            ]}
          />
          <ProjectCard
            title="TellMe - Anonymous Feedback"
            description="Anonymous messaging app with 200+ active users. Features NextAuth with email verification, server-side rendering, and prioritizes privacy with smooth UX. Production-ready application."
            href="https://tellme-app.vercel.app"
            icon="tellme"
            tags={["Next.js", "TypeScript", "NextAuth", "SSR", "Production"]}
          />
          <ProjectCard
            title="CampusHub - Resource Sharing"
            description="Award-winning hackathon project (17th/1000+ teams). Frontend built with React, React Query, Shadcn UI, Tailwind CSS, and Framer Motion. Features JWT auth integration and multi-filter search interface."
            href="https://campushub-frontend.vercel.app"
            icon="campushub"
            tags={["React", "React Query", "Shadcn UI", "Framer Motion", "JWT"]}
          />

          <ProjectCard
            title="Master REST APIs"
            description="A comprehensive REST API project demonstrating CRUD operations, authentication, middleware, and best practices for building scalable backend services."
            href="https://github.com/muhammadyaqoobmuet/Master-REST-APIs"
            icon="masterrestapis"
            tags={["Node.js", "Express.js", "MongoDB", "REST API", "Authentication"]}
          />

          <ProjectCard
            title="ShopSphere API"
            description="E-commerce backend API with user authentication, product management, cart functionality, and order processing. Built with modern Node.js practices."
            href="https://github.com/muhammadyaqoobmuet/shopsphere-api"
            icon="shopsphereapi"
            tags={["Node.js", "Express.js", "MongoDB", "E-commerce", "JWT"]}
          />
        </div>
        <Link href="/projects">
          <a
            type="button"
            className="flex items-center text-sm my-4 mx-auto px-4 py-2 rounded-md font-medium text-gray-900 dark:text-gray-100"
          >
            See More
            <svg
              className="h-4 w-4 ml-1"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </a>
        </Link>

        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black dark:text-white">
          Upcoming Projects
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ProjectCard
            title="Furstation Dumb"
            description="A website where users can freely write down their negative thoughts or feelings. Using AI, the site reads their message and responds with a personalized, positive affirmation to help them feel better. It's a supportive space to release negativity and receive kindness in return—like a small, comforting boost whenever someone needs it."
            href="#"
            icon="furstationdumb"
            tags={["NextJS", "Tailwind", "Langchain", "Clerk", "Gemini AI"]}
          />

          <ProjectCard
            title="VSCode Resume"
            description="A VSCode themed resume for all the web developers out there. A UI which looks exactly like a React file-system based VSCode window with create and update operations."
            href="#"
            icon="vscode"
          />
          <ProjectCard
            title="More projects coming soon.."
            description="I get ideas all day 🙄, All of them are updated here as soon as I start working on them."
            href="#"
            icon="more"
          />
        </div>


        <Timeline />
        <Contact />
      </div>
    </Container>
  );
}

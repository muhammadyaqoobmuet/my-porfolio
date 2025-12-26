import React from "react";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import Container from "@/components/Container";

const ProjectCard = ({ title, description, href, githubUrl, tags }) => {
  return (
    <div className="group flex flex-col justify-between p-6 -mx-6 rounded-lg hover:bg-gray-50 dark:hover:bg-zinc-800/50 transition-all duration-300">
      <div className="flex flex-col">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-serif text-xl font-medium text-gray-900 dark:text-gray-100 group-hover:text-custom-gray dark:group-hover:text-gray-300 transition-colors">
            {title}
          </h3>
          <div className="flex gap-4">
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
                aria-label="View Source"
              >
                <Github className="w-5 h-5" />
              </a>
            )}
            {href && href !== "#" && (
                <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
                    aria-label="View Project"
                >
                    <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" />
                </a>
            )}
          </div>
        </div>

        <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm md:text-base leading-relaxed">
          {description}
        </p>
      </div>

      <div className="flex flex-wrap gap-2 mt-auto">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="text-xs font-medium text-gray-500 dark:text-gray-500 font-mono"
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default function Projects() {
  return (
    <Container
      title="Projects – Muhammad Yaqoob"
      description="Projects that I've built from scratch, upcoming projects, learned from courses and projects that I'm proud of.">

      <div className="flex flex-col justify-center items-start pt-24 pb-16">
        <h1 className="font-serif text-4xl md:text-5xl font-bold tracking-tight mb-6 text-gray-900 dark:text-gray-100">
          Projects
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-16 max-w-2xl text-lg leading-relaxed">
           A collection of projects I've built while learning and exploring full-stack development. Each project represents a milestone in my journey.
        </p>

        <section className="w-full mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
            <ProjectCard
              title="CodeFlow"
              description="A Live Code Collab Platform with features like sync code, live calls, audio call, voice chats, messages and with help of sockets io and webrtc a deep dive in sockets and webrtc creating stun servers and reducing latency."
              href="https://codeflow-roastfriends-argfg2a0fwgygeh4.eastasia-01.azurewebsites.net/"
              tags={["React", "JavaScript", "SocketsIo", "App Router", "WebRtc"]}
            />

            <ProjectCard
              title="DS Digitals"
              description="Built and deployed the website for a Germany-based software agency, handling domain configuration, production setup, and search engine integration. Implemented core service pages and a blog system optimized for SEO, and configured Google Search Console to support indexing, performance tracking, and organic traffic growth."
              href="https://dsdigitals.de/"
              tags={["Next.js", "TypeScript", "App Router", "Resend"]}
            />

            <ProjectCard
              title="Zhurnuty - AI Summarizer"
              description="Next.js 15 app for PDF summarization with TypeScript. Features Clerk authentication (Passkey, GitHub, Google), Langchain for smart PDF parsing & chunking (up to 8MB), and Gemini AI for accurate summaries."
              href="https://zhrnuty.netlify.app/"
              githubUrl="https://github.com/muhammadyaqoobmuet/Zhrnuty"
              tags={["Next.js 15", "TypeScript", "Gemini AI", "Clerk"]}
            />

            <ProjectCard
              title="TellMe"
              description="Anonymous messaging app with 200+ active users. Features NextAuth with email verification, server-side rendering, and prioritizes privacy with smooth UX. Production-ready application."
              href="https://tellme-eta.vercel.app/"
              githubUrl="https://github.com/muhammadyaqoobmuet/tellme-"
              tags={["Next.js", "TypeScript", "NextAuth", "SSR"]}
            />

            <ProjectCard
              title="CampusHub"
              description="Award-winning hackathon project. Frontend built with React, React Query, Shadcn UI, Tailwind CSS, and Framer Motion. Features JWT auth integration and multi-filter search interface."
              href="https://spectacular-basbousa-69c83b.netlify.app/"
              githubUrl="https://github.com/muhammadyaqoobmuet/resource-share-platform"
              tags={["React", "React Query", "Shadcn UI", "Framer Motion"]}
            />

             <ProjectCard
              title="ShopSphere API"
              description="E-commerce backend API with user authentication, product management, cart functionality, and order processing. Built with modern Node.js practices."
              githubUrl="https://github.com/muhammadyaqoobmuet/shopsphere-api"
              tags={["Node.js", "Express.js", "MongoDB", "E-commerce"]}
            />
          </div>
        </section>

        <div className="text-center w-full">
            <a
              href="https://github.com/muhammadyaqoobmuet"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-gray-900 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-300 transition-colors font-medium"
            >
              <Github className="w-5 h-5 mr-3" />
              View more on GitHub
            </a>
        </div>
      </div>
    </Container>
  );
}
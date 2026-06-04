import React, { useState } from "react";
import Container from "@/components/Container";
import ProjectCard from "@/components/ProjectCard";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Github } from "lucide-react";

const fullStackProjects = [
  {
    title: "CodeFlow",
    description: "A real-time collaborative coding platform featuring live audio calls, code synchronization, and chat using WebRTC and Socket.io.",
    href: "https://codeflow-roastfriends-argfg2a0fwgygeh4.eastasia-01.azurewebsites.net/",
    githubUrl: "https://github.com/muhammadyaqoobmuet/CodeFlow",
    tags: ["React", "WebRTC", "Socket.io"],
    imgUrl: "https://zgcfthkjlo.ufs.sh/f/mCFHu5O1Sdh1HswGvf3ECvweUK4GzTJYF9ylkoQIfxBr6uLO",
    date: "02.2026",
  },
  {
    title: "SHADOW | Anonymous Chat",
    description: "An anonymous, location-based chat app where real talk happens. No accounts. No personal data. Just raw thoughts, dropped where you are.",
    href: "https://shadow-proximatychat.netlify.app/",
    githubUrl: "https://github.com/muhammadyaqoobmuet/Shadow-StayAnonymous",
    tags: ["Next.js", "Socket.IO", "MongoDB", "Redis", "Express"],
    imgUrl: "https://zgcfthkjlo.ufs.sh/f/mCFHu5O1Sdh16T4xDtMdECGfumLFH8xkj0DrPnhSeO9BIXga",
    date: "12.2025",
  },
  {
    title: "Zhurnuty - AI Summarizer",
    description: "AI-powered PDF summarization tool built with Next.js 15, Langchain, and Gemini AI. Features secure auth via Clerk.",
    href: "https://zhrnuty.netlify.app/",
    githubUrl: "https://github.com/muhammadyaqoobmuet/Zhrnuty",
    tags: ["Next.js 15", "Gemini AI", "Langchain", "PostgreSQL", "Clerk"],
    imgUrl: "https://zgcfthkjlo.ufs.sh/f/mCFHu5O1Sdh1W1LrsJkkqKg2HXxS9ZFW5pdb0lRJCmINueyz",
    date: "01.2026",
  },
  {
      title: "DS Digitals",
      description: "Built and deployed a high-performance website for a German software agency. Handled production setup, SEO optimization.",
      href: "https://dsdigitals.de/",
      tags: ["Next.js", "TypeScript", "Resend"],
      imgUrl: "https://zgcfthkjlo.ufs.sh/f/mCFHu5O1Sdh11hVXUCqDU69zwmuHEBQOV8cZdbqK7CspLXgJ",
      date: "08.2025",
  },
  {
    title: "TellMe",
    description: "An anonymous feedback platform where people can send and receive anonymous messages.",
    href: "https://tellfeedback.netlify.app/",
    githubUrl: "https://github.com/muhammadyaqoobmuet/tellme-",
    tags: ["Next.js", "TypeScript", "NextAuth", "MongoDB"],
    imgUrl: "https://zgcfthkjlo.ufs.sh/f/mCFHu5O1Sdh1fjHdL6IWrS4nCqzHXymxThY12ROQwI9dEjgZ",
    date: "05.2025",
  },
  {
    title: "CampusHub",
    description: "A resource sharing platform for college students. Won 17th place at Hack for Humanity 2025.",
    href: "https://spectacular-basbousa-69c83b.netlify.app/",
    githubUrl: "https://github.com/muhammadyaqoobmuet/resource-share-platform",
    tags: ["React", "React Query", "Shadcn UI", "Framer Motion"],
    imgUrl: "https://zgcfthkjlo.ufs.sh/f/mCFHu5O1Sdh15sypfdb31TCOL7KIlyAh0VkNGf6UucRzjrwB",
    date: "02.2025",
  },
];

const backendProjects = [
  {
    title: "SocialMesh Architecture",
    description: "A backend system with multiple services that communicate with each other using message queues (RabbitMQ).",
    githubUrl: "https://github.com/muhammadyaqoobmuet/Microservices--SocialMesh-Architecture",
    tags: ["Microservices", "RabbitMQ", "Redis", "Docker", "Node.js"],
    date: "11.2025",
  },
  {
    title: "Product Catalog API",
    description: "A REST API for managing products with validation, authentication, and testing using Prisma and Zod.",
    githubUrl: "https://github.com/muhammadyaqoobmuet/prisma-typescript-api-suite",
    tags: ["Node.js", "TypeScript", "Prisma", "Express", "JWT"],
    date: "10.2025",
  },
  {
    title: "ProductivityPro",
    description: "A task management app with a GraphQL backend. Users can create projects, add tasks, and track progress.",
    githubUrl: "https://github.com/muhammadyaqoobmuet/graphql-zod-nextjs",
    tags: ["Next.js", "GraphQL", "Prisma", "Apollo"],
    date: "09.2025",
  },
  {
    title: "ShopSphere API",
    description: "An e-commerce API with products, inventory tracking, user roles, and image hosting.",
    githubUrl: "https://github.com/muhammadyaqoobmuet/shopsphere-api",
    tags: ["Node.js", "Express", "MongoDB", "JWT", "Cloudinary"],
    date: "07.2025",
  },
  {
    title: "Books Management API",
    description: "An API for a library system. Users can upload books, search, and manage a collection.",
    githubUrl: "https://github.com/muhammadyaqoobmuet/shopsphere-api",
    tags: ["Node.js", "REST API", "JWT", "Multer", "Cloudinary"],
    date: "06.2025",
  },
  {
    title: "Redis Caching Layer",
    description: "A caching system using Redis to make database queries faster for a restaurant data app.",
    githubUrl: "https://github.com/muhammadyaqoobmuet/Zod-Powered-Redis-API-Layer",
    tags: ["Redis", "Node.js", "Zod", "TypeScript"],
    date: "05.2025",
  },
  {
    title: "RelateWise API",
    description: "An API that uses AI to give relationship advice. Built to explore AI integration in backends.",
    tags: ["Express", "Gemini AI", "Node.js"],
    date: "04.2025",
  },
  {
    title: "Pizza Palace API",
    description: "A backend for a pizza delivery app with order management, inventory tracking, and email alerts.",
    githubUrl: "https://github.com/muhammadyaqoobmuet/pizza-palace",
    tags: ["Node.js", "Express", "MongoDB"],
    date: "03.2025",
  },
];

const goProjects = [
  {
    title: "Basics GO",
    description: "Learning Go by building small projects. Focused on understanding Go basics and how to write concurrent programs.",
    githubUrl: "https://github.com/muhammadyaqoobmuet/GO",
    tags: ["Go", "Golang", "Concurrency"],
    date: "2026",
  },
];

const tabs = [
  { id: "fullstack", label: "Full Stack" },
  { id: "backend", label: "Backend" },
  { id: "go", label: "Go (Golang)" },
];

export default function Projects() {
  const [activeTab, setActiveTab] = useState("fullstack");

  const currentProjects = activeTab === "fullstack" 
    ? fullStackProjects 
    : activeTab === "backend" 
    ? backendProjects 
    : goProjects;

  const hideImages = activeTab === "backend" || activeTab === "go";

  return (
    <Container
      title="Projects – Muhammad Yaqoob"
      description="A showcase of full-stack applications, backend systems, and ongoing learning experiences.">

      <div className="mx-auto w-full max-w-3xl pt-24 pb-24">
        {/* Header Panel */}
        <section className="border-x border-gray-200 dark:border-zinc-800">
           <header className="px-6 py-10 border-b border-gray-200 dark:border-zinc-800">
              <h1 className="font-mono text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
                The Archive
              </h1>
              <p className="mt-4 text-base text-gray-500 dark:text-zinc-500 leading-relaxed max-w-2xl font-mono">
                A rigorous documentation of my software engineering projects, focusing on distributed systems, full-stack architecture, and learning-driven development.
              </p>
           </header>

           {/* Tabs */}
           <div className="px-6 py-4 border-b border-gray-200 dark:border-zinc-800 flex flex-wrap gap-3 bg-gray-50/30 dark:bg-zinc-900/10">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 rounded-lg font-mono text-[10px] uppercase tracking-[0.15em] transition-all border ${
                    activeTab === tab.id
                      ? "bg-gray-900 text-white border-gray-900 dark:bg-zinc-100 dark:text-black dark:border-zinc-100 shadow-lg shadow-gray-200 dark:shadow-none"
                      : "bg-white text-gray-500 border-gray-200 hover:border-gray-400 dark:bg-zinc-950 dark:text-zinc-500 dark:border-zinc-800 dark:hover:border-zinc-700"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
           </div>

           {/* Projects Grid */}
           <div className="p-5 min-h-[500px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                  {currentProjects.map((project, idx) => (
                    <ProjectCard 
                        key={project.title} 
                        {...project} 
                        hideImage={hideImages}
                    />
                  ))}
                </motion.div>
              </AnimatePresence>
           </div>

           {/* Footer Action */}
           <footer className="px-5 py-4 border-t border-gray-200 dark:border-zinc-800 bg-gray-50/50 dark:bg-zinc-900/20">
              <a
                href="https://github.com/muhammadyaqoobmuet"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm font-mono text-gray-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors"
              >
                <Github className="size-4 mr-2" />
                Explore more on GitHub <ArrowRight className="ml-1.5 size-3" />
              </a>
           </footer>
        </section>

        {/* corner ticks */}
        <div className="relative border-x border-b border-gray-200 dark:border-zinc-800 h-6 flex items-center justify-center">
            <div
              className="absolute inset-0"
              style={{
                background:
                  "repeating-linear-gradient(315deg, rgba(161,161,170,0.2) 0, rgba(161,161,170,0.2) 1px, transparent 0, transparent 50%) 0 0 / 10px 10px",
              }}
            />
        </div>
      </div>
    </Container>
  );
}

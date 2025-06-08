import React from "react";
import { ExternalLink, Github, Database, ShoppingCart, FileText, Code, Globe } from "lucide-react";
import Container from "@/components/Container";

const ProjectCard = ({ title, description, href, githubUrl, icon: Icon, tags, isLive }) => {
  return (

    <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg transition-shadow duration-200">
      <div className="flex items-center mb-3">
        <Icon className="w-8 h-8 text-blue-500 mr-3" />
        <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">{title}</h3>
      </div>

      <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">
        {description}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex gap-3">
        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
          >
            <Github className="w-4 h-4 mr-1" />
            Code
          </a>
        )}

        {href && href !== "#" && (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 transition-colors"
          >
            <ExternalLink className="w-4 h-4 mr-1" />
            {isLive ? "Live Demo" : "View"}
          </a>
        )}
      </div>
    </div>
  );
};

const Contact = () => (
  <div className="mt-16 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
      Let's work together
    </h3>
    <p className="text-gray-600 dark:text-gray-400 mb-4">
      I'm always interested in new opportunities and collaborations.
    </p>
    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
      Get in Touch
    </button>
  </div>
);

export default function projects() {
  return (
    <Container
      title="Projects – Muhammad Yaqoob"
      description="Projects that I've built from scratch, upcoming projects, learned from courses and projects that I'm proud of.">

      <div className="max-w-4xl mx-auto p-6">
        <div className="mb-16">
          <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
            Projects
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg">
            A collection of projects I've built while learning and exploring full-stack development.
            Each project represents a step in my journey from frontend basics to MERN stack applications.
          </p>

          <h2 className="font-bold text-2xl md:text-3xl tracking-tight mb-6 text-black dark:text-white">
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <ProjectCard
              title="Zhurnuty - AI PDF Summarizer"
              description="Next.js 15 app for PDF summarization with TypeScript. Features Clerk authentication (Passkey, GitHub, Google), Langchain for smart PDF parsing & chunking (up to 8MB), and Gemini AI for accurate summaries."
              href="https://zhurnuty.vercel.app"
              githubUrl="https://github.com/muhammadyaqoobmuet/zhurnuty"
              icon={FileText}
              tags={["Next.js 15", "TypeScript", "Gemini AI", "Clerk", "Langchain"]}
              isLive={true}
            />

            <ProjectCard
              title="TellMe - Anonymous Feedback"
              description="Anonymous messaging app with 200+ active users. Features NextAuth with email verification, server-side rendering, and prioritizes privacy with smooth UX. Production-ready application."
              href="https://tellme-app.vercel.app"
              githubUrl="https://github.com/muhammadyaqoobmuet/tellme"
              icon={Globe}
              tags={["Next.js", "TypeScript", "NextAuth", "SSR", "Production"]}
              isLive={true}
            />

            <ProjectCard
              title="CampusHub - Resource Sharing"
              description="Award-winning hackathon project (17th/1000+ teams). Frontend built with React, React Query, Shadcn UI, Tailwind CSS, and Framer Motion. Features JWT auth integration and multi-filter search interface."
              href="https://campushub-frontend.vercel.app"
              githubUrl="https://github.com/muhammadyaqoobmuet/campushub-frontend"
              icon={ShoppingCart}
              tags={["React", "React Query", "Shadcn UI", "Framer Motion", "JWT"]}
              isLive={true}
            />
          </div>

          <h2 className="font-bold text-2xl md:text-3xl tracking-tight mb-6 text-black dark:text-white">
            Backend & API Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <ProjectCard
              title="Master REST APIs"
              description="A comprehensive REST API project demonstrating CRUD operations, authentication, middleware, and best practices for building scalable backend services."
              githubUrl="https://github.com/muhammadyaqoobmuet/Master-REST-APIs"
              icon={Database}
              tags={["Node.js", "Express.js", "MongoDB", "REST API", "Authentication"]}
            />

            <ProjectCard
              title="ShopSphere API"
              description="E-commerce backend API with user authentication, product management, cart functionality, and order processing. Built with modern Node.js practices."
              githubUrl="https://github.com/muhammadyaqoobmuet/shopsphere-api"
              icon={ShoppingCart}
              tags={["Node.js", "Express.js", "MongoDB", "E-commerce", "JWT"]}
            />
          </div>



          <h2 className="font-bold text-2xl md:text-3xl tracking-tight mb-6 text-black dark:text-white">
            Upcoming Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <ProjectCard
              title="Furstation Dumb"
              description="a website where users can dump their negative thoughts and get a positive affirmation using AI"
              href="#"
              icon={Code}
              tags={["Next.js", "TypeScript", "Tailwind CSS", "Shadcn UI", "Clerk", "Langchain"]}
            />

            <ProjectCard
              title="Manifest ME"
              description="a website where users manifest with ai and ai will give them reminders to manifest their goals"
              href="#"
              icon={Code}
              tags={["Next.js", "TypeScript", "Tailwind CSS", "Shadcn UI", "Clerk", "Gemini AI", "Langchain", "PostgresSQL"]}
            />
          </div>

          <div className="text-center mb-12">
            <a
              href="https://github.com/muhammadyaqoobmuet"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              <Github className="w-5 h-5 mr-2" />
              View All Projects on GitHub
            </a>
          </div>

          <Contact />
        </div>
      </div>
    </Container>
  );
}
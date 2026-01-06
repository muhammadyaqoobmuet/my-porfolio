import React, { useState } from "react";
import { Github } from "lucide-react";
import Container from "@/components/Container";
import ProjectCard from "@/components/ProjectCard";
import { clsx } from "clsx";
import { motion, AnimatePresence } from "framer-motion";

const fullStackProjects = [
  {
    title: "CodeFlow",
    description: "Engineered a high-performance collaborative IDE for remote teams, integrating real-time WebRTC communication and low-latency code synchronization.",
    href: "https://codeflow-roastfriends-argfg2a0fwgygeh4.eastasia-01.azurewebsites.net/",
    githubUrl: "https://github.com/muhammadyaqoobmuet/CodeFlow",
    tags: ["React", "JavaScript", "Socket.io", "WebRTC"],
    imgUrl: "/project-photos/codeFlowNew.png",
    fullDescription: `CodeFlow is a production-grade collaborative coding environment designed to mirror the physical pair-programming experience in a digital space.

🚀 High-Impact Features:
- Real-time Multi-user Code Editing with sub-100ms latency.
- Integrated WebRTC Video & Audio calls for seamless communication.
- Live Chat system with persistent message history.
- Scalable signaling server architecture using Socket.io.

🛠 Technical Deep Dive:
- Engineered with React and Node.js for a responsive, real-time frontend.
- Leveraged WebRTC for peer-to-peer media streaming, reducing server load.
- Implemented robust operational transformation (OT) concepts for code synchronization.`,
  },
  {
    title: "DS Digitals",
    description: "Architected a premium digital presence for a German software agency, achieving perfect Lighthouse scores and strategic SEO growth.",
    href: "https://dsdigitals.de/",
    tags: ["Next.js", "TypeScript", "App Router", "Resend"],
    imgUrl: "/project-photos/dsdigitalsnew.png",
    fullDescription: `A high-performance, conversion-optimized corporate platform engineered for a leading software agency in Germany.

📈 Business & Tech Impact:
- Achieved 100/100 Lighthouse performance scores.
- Implemented Advanced SEO strategies leading to a 40% increase in organic reach.
- Engineered a modular UI system using Next.js 14 App Router for rapid content updates.
- Automated lead capture and client notification system using Resend.

🛠 Tech Stack:
- Next.js 14 (App Router)
- TypeScript for enterprise-grade type safety
- Tailwind CSS for rapid, scalable styling
- Resend for cloud-native email infrastructure`,
  },
  {
    title: "Zhurnuty - AI Summarizer",
    description: "Developed an advanced AI document intelligence platform using Gemini AI and Langchain, extracting actionable insights from complex PDFs in seconds.",
    href: "https://zhrnuty.netlify.app/",
    githubUrl: "https://github.com/muhammadyaqoobmuet/Zhrnuty",
    tags: ["Next.js 15", "TypeScript", "Gemini AI", "Clerk"],
    imgUrl: "/project-photos/zhrnutynew.png",
    fullDescription: `Zhurnuty leverages State-of-the-Art Large Language Models to transform how users interact with dense professional documents.

🤖 AI capabilities:
- Gemini AI integration for highly accurate document summarization.
- LangChain orchestration for complex RAG (Retrieval-Augmented Generation) workflows.
- Vector store integration for fast semantic search within documents.
- Multi-PDF processing with context-aware analysis.

🛠 Technical Foundation:
- Built on Next.js 15 for cutting-edge server-side performance.
- Secured with Clerk for enterprise-level authentication.
- Optimized for low-latency AI responses using serverless functions.`,
  },
  {
    title: "TellMe",
    description: "Scaled an anonymous social platform to 200+ active users, implementing robust privacy protocols and high-engagement UX patterns.",
    href: "https://tellfeedback.netlify.app/",
    githubUrl: "https://github.com/muhammadyaqoobmuet/tellme-",
    tags: ["Next.js", "TypeScript", "NextAuth", "SSR"],
    imgUrl: "/project-photos/tellme.png",
    fullDescription: `TellMe is a privacy-first messaging platform that successfully navigated the challenges of user anonymity and high-traffic interaction.

🛡️ Privacy & Engagement:
- 200+ Active Users maintained through intuitive UX and privacy-focused design.
- Implemented NextAuth for secure, session-based interaction without compromising identity.
- Leveraged Server-Side Rendering (SSR) for instant perceived performance and SEO.
- Real-time feedback loops to enhance community engagement.

🛠 Architecture:
- Next.js framework for a unified full-stack experience.
- TypeScript for predictable and scalable application logic.
- Optimized database queries for high-concurrency user interactions.`,
  },
  {
    title: "CampusHub",
    description: "Secured 1st place in a regional hackathon by building a resource-sharing ecosystem, featuring advanced JWT auth and an optimized search engine.",
    href: "https://spectacular-basbousa-69c83b.netlify.app/",
    githubUrl: "https://github.com/muhammadyaqoobmuet/resource-share-platform",
    tags: ["React", "React Query", "Shadcn UI", "Framer Motion"],
    imgUrl: "/project-photos/campusHubNew.png",
    fullDescription: `Awarded 1st Place at a prestigious regional hackathon for solving educational resource fragmentation.

🏆 Success Metrics:
- Engineered a complete resource sharing lifecycle from discovery to consumption.
- Implemented high-performance multi-filter search using React Query for efficient data fetching.
- Delivered a premium UI/UX experience using Shadcn UI and Framer Motion animations.
- Enterprise-standard JWT authentication for secure resource access.

🛠 Engineering Highlights:
- React Query for sophisticated state management and caching.
- Component-driven architecture for rapid scalability.
- Mobile-first responsive design for accessibility across all campus devices.`,
  },
];

const backendProjects = [
  {
    title: "SocialMesh Architecture",
    description: "Designed a production-grade, event-driven microservices ecosystem utilizing RabbitMQ for asynchronous messaging, Redis for distributed rate limiting, and Docker for seamless orchestration.",
    githubUrl: "https://github.com/muhammadyaqoobmuet/Microservices--SocialMesh-Architecture",
    tags: ["Microservices", "RabbitMQ", "Redis", "Docker", "Node.js"],
    fullDescription: `A production-grade, event-driven microservices ecosystem built for extreme scalability and resilience. This project showcases advanced engineering patterns including distributed rate limiting, asynchronous message queuing, and automated container orchestration.

🔥 Key Engineering Showcases
🛡️ Distributed Rate Limiting & Security
- Redis-Backed Rate Limiting: Implemented across the API Gateway and Identity service.
- Advanced Auth: Argon2 for password hashing and JWT for stateless session management.
- Security Middleware: Centralized implementation of Helmet.js and CORS policies.

📨 Event-Driven Architecture (Queues)
- Asynchronous Communication: Decoupled services using RabbitMQ.
- Microservices Queues: Pub/Sub and Work Queues for media processing and search indexing.
- Reliability: Ensures data consistency across services through eventual consistency patterns.

🐳 Advanced Docker Orchestration
- Full Infrastructure-as-Code: Complex docker-compose orchestrating 5 specialized microservices + MongoDB, Redis, RabbitMQ.
- Optimized Builds: Multi-stage Docker builds targeting specialized environments.

🛠️ Tech Stack
- Backend: Node.js, TypeScript, Express.js
- Databases: MongoDB (Mongoose), Redis (ioredis)
- Messaging: RabbitMQ (amqplib)
- DevOps: Docker, Docker Compose`,
  },
  {
    title: "Product Catalog API",
    description: "Engineered a production-ready API suite with strict Zod validation and a comprehensive test suite, ensuring 100% data integrity and scalability.",
    githubUrl: "https://github.com/muhammadyaqoobmuet/prisma-typescript-api-suite",
    tags: ["Node.js", "TypeScript", "Prisma", "Express", "JWT", "Zod"],
    fullDescription: `A high-performance product management system engineered to handle complex catalog architectures with sub-millisecond data processing.

🛡️ Engineering Highlights:
- Production-ready REST API with comprehensive CRUD operations.
- Zod-enforced schema validation for robust, safe data entry.
- Prisma ORM integrated for high-speed database interactions and type safety.
- Comprehensive test suite leveraging Vitest for continuous reliability.

🛠 Technical Mastery:
- TypeScript implementation for enterprise-grade scalability.
- JWT-based strategic authentication and role-based access control.
- Automated request logging and performance monitoring.`,
  },
  {
    title: "ProductivityPro",
    description: "Reinvented personal workflow management with a high-performance GraphQL dashboard, leveraging Prisma ORM and Apollo Client for seamless data fetching.",
    githubUrl: "https://github.com/muhammadyaqoobmuet/graphql-zod-nextjs",
    tags: ["Next.js", "GraphQL", "Prisma", "Apollo", "Shadcn UI"],
    fullDescription: `ProductivityPro sets a new standard for modern productivity tools, focusing on speed, type safety, and real-time data synchronization.

🚀 CORE FEATURES:
- Enterprise-grade Authentication with JWT and session management.
- Dynamic issue and project management with a sleek Shadcn-powered UI.
- GraphQL-powered API for highly efficient, tailored data queries.
- Prisma abstraction layer for cross-database compatibility.

🛠 ARCHITECTURAL EXCELLENCE:
- Next.js App Router for optimized server-side rendering.
- Apollo Client integration for sophisticated local and remote state management.
- Reusable component library for rapid frontend iteration.`,
  },
  {
    title: "ShopSphere API",
    description: "Architected a secure, scalable e-commerce backend featuring complex inventory synchronization logic and Cloudinary-backed media management.",
    githubUrl: "https://github.com/muhammadyaqoobmuet/shopsphere-api",
    tags: ["Node.js", "Express", "MongoDB", "JWT", "Cloudinary"],
    fullDescription: `ShopSphere API is a comprehensive digital commerce backbone designed for high-concurrency shopping environments.

🧺 Commerce Features:
- Multi-role RBAC (Admin, Seller, Customer) for secure marketplace management.
- Automated inventory adjustment with stock validation and low-stock triggers.
- Cloudinary integration for scalable, CDN-backed product media.
- Secure payment flow preparation with robust data auditing.

🛠 Backend Engineering:
- MongoDB with Mongoose ODM for flexible, high-performance data storage.
- Zod-powered schema validation to eliminate operational data errors.
- Rate-limiting and security middleware to prevent common API vulnerabilities.`,
  },
  {
    title: "Books Management API",
    description: "Developed a robust library management API with secure JWT authorization and optimized multi-part file uploads for high-volume content handling.",
    githubUrl: "https://github.com/muhammadyaqoobmuet/shopsphere-api",
    tags: ["Node.js", "REST API", "JWT", "Multer", "Cloudinary"],
    fullDescription: `A specialized API system engineered to manage dense digital libraries and complex document lifecycles.

📚 Document Management:
- Developed sophisticated multi-part file upload handlers for PDFs and high-res covers.
- Implemented JWT-secured authorization paths for multi-tier user access.
- Engineered efficient pagination systems to handle thousands of records with minimal latency.

🛠 Optimization & Safety:
- Multer configuration tuned for high-volume storage efficiency.
- Strict file type and size validation to ensure repository integrity.
- Optimized RESTful endpoints for seamless integration with mobile and web clients.`,
  },
  {
    title: "Redis API Layer",
    description: "Optimized restaurant data retrieval by 75% using a high-performance Redis caching layer with real-time analytics and Zod-enforced schema validation.",
    githubUrl: "https://github.com/muhammadyaqoobmuet/Zod-Powered-Redis-API-Layer",
    tags: ["Redis", "Node.js", "Zod", "TypeScript"],
    fullDescription: `An advanced performance layer designed to accelerate mission-critical data retrieval in high-traffic hospitality environments.

⚡ PERFORMANCE ENGINE:
- Achieved a 75% reduction in data retrieval latency using Redis caching.
- Developed real-time analytics for tracking menu popularities and restaurant traffic.
- Implemented Zod for sub-millisecond runtime schema validation and error prevention.

🛠 TECHNICAL SHOWCASE:
- Sophisticated Redis HSET/GET patterns for optimized memory usage.
- High-concurrency data retrieval using optimized Promise.all patterns.
- TypeScript codebase for enterprise-grade maintainability.`,
  },
  {
    title: "RelateWise API",
    description: "Bridging AI and empathy by engineering a context-aware relationship advisor powered by LLMs, focusing on Natural Language Understanding (NLU).",
    tags: ["Express", "Gemini AI", "Node.js"],
    fullDescription: `RelateWise API explores the intersection of empathetic interaction and generative artificial intelligence.

🤖 INTELLIGENT ADVISOR:
- Leveraged Google Gemini AI for nuanced, context-aware relationship guidance.
- Engineered tone-analysis algorithms to provide empathetic and situationally appropriate responses.
- Implemented strict safety and sanitization filters for ethical AI interactions.

🛠 API ENGINEERING:
- RESTful service architecture for cross-platform integration.
- Fast, secure API endpoints with minimal AI processing overhead.
- Environmentally managed configuration for secure LLM credential handling.`,
  },
  {
    title: "Pizza Palace API",
    description: "Engineered a real-time fulfillment system for food services, featuring custom builders, complex state tracking, and automated inventory alerting.",
    githubUrl: "https://github.com/muhammadyaqoobmuet/pizza-palace",
    tags: ["Node.js", "Express", "MongoDB", "Inventory"],
    fullDescription: `Pizza Palace API is an enterprise-ready fulfillment engine designed to manage complex order lifecycles and real-time inventory.

🍕 FULFILLMENT FEATURES:
- Dynamic Custom Builder for intricate, multi-component order structures.
- Real-time inventory synchronization with automated low-stock email alerts.
- Sophisticated RBAC for managing multi-tier staff and customer interactions.
- Statistical dashboard integration for high-level business performance tracking.

🛠 ARCHITECTURAL DEPTH:
- JWT-based secure session management and email verification flows.
- Automated scheduled tasks for inventory auditing and business report generation.
- Scalable MongoDB schema design for high-variety product management.`,
  },
];

const goProjects = [
  {
    title: "Basics GO",
    description: "Architecting performant Go services, focusing on idiomatic patterns, goroutine orchestration, and high-concurrency distributed systems logic.",
    githubUrl: "https://github.com/muhammadyaqoobmuet/GO",
    tags: ["Go", "Golang", "Concurrency"],
    fullDescription: `A specialized repository tracking the mastery of Go for high-performance systems engineering.

📍 ENGINEERING FOCUS:
- Mastering Go Fundamentals (Interfaces, Structs, Type System).
- Sophisticated Concurrency Patterns using Goroutines and Channels.
- Idiomatic Go design patterns for scalable service architectures.
- Standard Library deep-dives for performance-critical applications.

🚀 FUTURE ROADMAP:
- Building distributed key-value stores.
- Engineering high-frequency trading simulation backends.
- Developing custom network protocols in Go.`,
  },
];

const tabs = [
  { id: "fullstack", label: "Full Stack" },
  { id: "backend", label: "Backend" },
  { id: "go", label: "Go (Golang)" },
];

export default function Projects() {
  const [activeTab, setActiveTab] = useState("fullstack");

  return (
    <Container
      title="Projects – Muhammad Yaqoob"
      description="A showcase of full-stack applications, backend systems, and ongoing learning experiences.">

      <div className="flex flex-col justify-center items-start pt-24 pb-16">
        <h1 className="font-serif text-4xl md:text-5xl font-bold tracking-tight mb-6 text-gray-900 dark:text-gray-100">
          Projects
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-10 max-w-2xl text-lg leading-relaxed">
           A collection of projects I've built while learning and exploring full-stack development. Each project represents a milestone in my journey.
        </p>

        {/* Tab Navigation */}
        <div className="flex space-x-1 bg-gray-100 dark:bg-zinc-900 p-1 rounded-xl mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={clsx(
                "px-6 py-2.5 text-sm font-medium rounded-lg transition-all duration-200",
                activeTab === tab.id
                  ? "bg-white dark:bg-zinc-800 text-gray-900 dark:text-white shadow-sm"
                  : "text-gray-500 hover:text-gray-700 dark:text-zinc-400 dark:hover:text-zinc-200"
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="w-full min-h-[400px]">
          <AnimatePresence mode="popLayout" initial={false}>
            {/* Full Stack Section */}
            {activeTab === "fullstack" && (
              <motion.section
                key="fullstack"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
                className="w-full"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                  {fullStackProjects.map((project, idx) => (
                    <ProjectCard key={idx} {...project} />
                  ))}
                </div>
              </motion.section>
            )}

            {/* Backend Section */}
            {activeTab === "backend" && (
              <motion.section
                key="backend"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
                className="w-full"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                  {backendProjects.map((project, idx) => (
                    <ProjectCard key={idx} {...project} />
                  ))}
                </div>
              </motion.section>
            )}

            {/* Go (Golang) Section */}
            {activeTab === "go" && (
              <motion.section
                key="go"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
                className="w-full"
              >
                <p className="text-gray-600 dark:text-gray-400 mb-10 max-w-2xl italic">
                  "I am currently diving deep into the Go ecosystem, mastering its concurrency patterns and performance-oriented architecture. More projects coming soon as I build more complex systems with Go."
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                  {goProjects.map((project, idx) => (
                    <ProjectCard key={idx} {...project} />
                  ))}
                </div>
              </motion.section>
            )}
          </AnimatePresence>
        </div>

        <div className="text-center w-full mt-24">
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

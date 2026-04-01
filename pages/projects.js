import React, { useState } from "react";
import { Github } from "lucide-react";
import Container from "@/components/Container";
import ProjectCard from "@/components/ProjectCard";
import { clsx } from "clsx";
import { motion, AnimatePresence } from "framer-motion";

const fullStackProjects = [
  {
    title: "CodeFlow",
    description: "A collaborative code editor where multiple users can edit code together in real-time with voice calls",
    href: "https://codeflow-roastfriends-argfg2a0fwgygeh4.eastasia-01.azurewebsites.net/",
    githubUrl: "https://github.com/muhammadyaqoobmuet/CodeFlow",
    tags: ["React", "JavaScript", "Socket.io", "WebRTC"],
    imgUrl: "https://zgcfthkjlo.ufs.sh/f/mCFHu5O1Sdh1HswGvf3ECvweUK4GzTJYF9ylkoQIfxBr6uLO",
    priority: true,
    fullDescription: `CodeFlow is a collaborative coding environment where remote teammates can write code together.

Key Features:
- Real-time code editing for multiple users
-  audio calls built-in
- Live chat for quick communication
- Uses Socket.io to sync changes between users

Tech Stack:
- React for the frontend
- Node.js for the backend
- WebRTC for video/audio calls
- Socket.io for real-time communication`,
  },
  {
    title: "SHADOW | Anonymous Chat",
    description: "An anonymous chat app where users can find and join chat rooms based on their location without creating an account.",
    href: "https://shadow-proximatychat.netlify.app/",
    githubUrl: "https://github.com/muhammadyaqoobmuet/Shadow-StayAnonymous",
    tags: ["Next.js", "Socket.IO", "MongoDB", "Redis"],
    imgUrl: "https://zgcfthkjlo.ufs.sh/f/mCFHu5O1Sdh16T4xDtMdECGfumLFH8xkj0DrPnhSeO9BIXga",
    priority: true,
    fullDescription: `SHADOW is an anonymous chat platform focused on local conversations. Users can discover chat rooms near them without signing up.

Key Features:
- No account needed - join with a random ID
- Find chat rooms within your area
- Messages disappear after 24 hours
- No user data is stored permanently

Tech Stack:
- Next.js for frontend and backend
- MongoDB to store rooms and messages
- Redis to manage active users
- Socket.IO for real-time chat`,
  },
  {
    title: "DS Digitals",
    description: "A website for a software agency in Germany. Focused on clean design, fast loading, and good SEO.",
    href: "https://dsdigitals.de/",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Resend"],
    imgUrl: "https://zgcfthkjlo.ufs.sh/f/mCFHu5O1Sdh11hVXUCqDU69zwmuHEBQOV8cZdbqK7CspLXgJ",
    fullDescription: `A professional website for a German software agency | this was my freelance work and contract based job for that company.

Key Features:
- Clean, modern design
- Fast page load times
- Search engine optimized
- Email contact system for leads

Tech Stack:
- Next.js for the website
- TypeScript for type safety
- Tailwind CSS for styling
- Resend for sending emails`,
  },
  {
    title: "Zhurnuty - AI Summarizer",
    description: "An app that uses AI to summarize PDF documents. Upload a PDF and get a quick summary of its contents.",
    href: "https://zhrnuty.netlify.app/",
    githubUrl: "https://github.com/muhammadyaqoobmuet/Zhrnuty",
    tags: ["Next.js", "TypeScript", "Gemini AI", "Clerk"],
    imgUrl: "https://zgcfthkjlo.ufs.sh/f/mCFHu5O1Sdh1W1LrsJkkqKg2HXxS9ZFW5pdb0lRJCmINueyz",
    fullDescription: `Zhurnuty helps users understand documents faster by using AI to summarize them.

Key Features:
- Upload PDF files
- Get AI-generated summaries
- Search within documents
- User authentication

Tech Stack:
- Next.js for the app
- Gemini AI for summarization
- Clerk for user login
- TypeScript for type safety`,
  },
  {
    title: "TellMe",
    description: "An anonymous feedback platform where people can send and receive anonymous messages.",
    href: "https://tellfeedback.netlify.app/",
    githubUrl: "https://github.com/muhammadyaqoobmuet/tellme-",
    tags: ["Next.js", "TypeScript", "NextAuth", "MongoDB"],
    imgUrl: "https://zgcfthkjlo.ufs.sh/f/mCFHu5O1Sdh1fjHdL6IWrS4nCqzHXymxThY12ROQwI9dEjgZ",
    fullDescription: `TellMe is a simple platform for sharing anonymous feedback with friends.

Key Features:
- Create a profile with a unique link
- Friends can send you anonymous messages
- View all messages in one place
- Easy to share your link

Tech Stack:
- Next.js for full-stack development
- TypeScript for safer code
- NextAuth for user authentication
- MongoDB for data storage`,
  },
  {
    title: "CampusHub",
    description: "A resource sharing platform for college students. Won 1st place at a regional hackathon.",
    href: "https://spectacular-basbousa-69c83b.netlify.app/",
    githubUrl: "https://github.com/muhammadyaqoobmuet/resource-share-platform",
    tags: ["React", "React Query", "Shadcn UI", "Framer Motion"],
    imgUrl: "https://zgcfthkjlo.ufs.sh/f/mCFHu5O1Sdh15sypfdb31TCOL7KIlyAh0VkNGf6UucRzjrwB",
    fullDescription: `CampusHub helps college students share and find resources like notes, books, and study materials.

Key Features:
- Search for resources by subject or topic
- Filter results to find what you need
- Share your own study materials
- User authentication for security

Tech Stack:
- React for the interface
- React Query for managing data
- Shadcn UI for components
- Framer Motion for animations`,
  },
];

const backendProjects = [
  {
    title: "SocialMesh Architecture",
    description: "A backend system with multiple services that communicate with each other using message queues. Includes rate limiting and caching.",
    githubUrl: "https://github.com/muhammadyaqoobmuet/Microservices--SocialMesh-Architecture",
    tags: ["Microservices", "RabbitMQ", "Redis", "Docker", "Node.js"],
    priority: true,
    fullDescription: `SocialMesh is a practice project exploring how to build backend systems with multiple independent services.

Key Features:
- Multiple services working together
- RabbitMQ for services to send messages to each other
- Redis to store frequently used data
- Docker containers to run everything

Tech Stack:
- Node.js for each service
- Express.js for APIs
- RabbitMQ for messaging
- Redis for caching
- MongoDB for database
- Docker for deployment`,
  },
  {
    title: "Product Catalog API",
    description: "A REST API for managing products with validation, authentication, and testing.",
    githubUrl: "https://github.com/muhammadyaqoobmuet/prisma-typescript-api-suite",
    tags: ["Node.js", "TypeScript", "Prisma", "Express", "JWT"],
    fullDescription: `Product Catalog API provides endpoints for creating, reading, updating, and deleting products.

Key Features:
- Create and manage products
- User authentication with JWT
- Input validation with Zod
- Automated tests for reliability

Tech Stack:
- Node.js and Express for the API
- TypeScript for type safety
- Prisma as the database layer
- Zod for data validation
- JWT for authentication`,
  },
  {
    title: "ProductivityPro",
    description: "A task management app with a GraphQL backend. Users can create projects, add tasks, and track progress.",
    githubUrl: "https://github.com/muhammadyaqoobmuet/graphql-zod-nextjs",
    tags: ["Next.js", "GraphQL", "Prisma", "Apollo"],
    fullDescription: `ProductivityPro helps users organize their tasks and projects in one place.

Key Features:
- Create projects and add tasks
- Mark tasks as complete
- View all your work in a dashboard
- User login and authentication

Tech Stack:
- Next.js for frontend and backend
- GraphQL for flexible data queries
- Prisma for database management
- Apollo Client on frontend`,
  },
  {
    title: "ShopSphere API",
    description: "An e-commerce API with products, inventory tracking, user roles (admin, seller, customer), and image hosting.",
    githubUrl: "https://github.com/muhammadyaqoobmuet/shopsphere-api",
    tags: ["Node.js", "Express", "MongoDB", "JWT", "Cloudinary"],
    fullDescription: `ShopSphere API provides the backend for an online store with multiple sellers and buyers.

Key Features:
- Product listings with images
- Inventory management
- Different user roles (admin, seller, customer)
- User authentication

Tech Stack:
- Node.js and Express
- MongoDB for product and order data
- Cloudinary for storing product images
- JWT for user authentication`,
  },
  {
    title: "Books Management API",
    description: "An API for a library system. Users can upload books, search, and manage a collection.",
    githubUrl: "https://github.com/muhammadyaqoobmuet/shopsphere-api",
    tags: ["Node.js", "REST API", "JWT", "Multer", "Cloudinary"],
    fullDescription: `Books Management API handles storing and retrieving books for a digital library.

Key Features:
- Upload book PDFs and cover images
- Search and filter books
- User authentication
- Organize books by categories

Tech Stack:
- Node.js and Express
- Multer for file uploads
- Cloudinary for storing files
- JWT for authentication`,
  },
  {
    title: "Redis Caching Layer",
    description: "A caching system using Redis to make database queries faster for a restaurant data app.",
    githubUrl: "https://github.com/muhammadyaqoobmuet/Zod-Powered-Redis-API-Layer",
    tags: ["Redis", "Node.js", "Zod", "TypeScript"],
    fullDescription: `This project demonstrates how to use Redis to improve app performance by caching frequently accessed data.

Key Features:
- Cache popular menu items
- Track what's being ordered
- Faster data retrieval
- Automatic data validation

Tech Stack:
- Node.js with Express
- Redis for caching
- Zod for validation
- TypeScript for type safety`,
  },
  {
    title: "RelateWise API",
    description: "An API that uses AI to give relationship advice. Built to explore how to work with AI models in a backend.",
    tags: ["Express", "Gemini AI", "Node.js"],
    fullDescription: `RelateWise API is a practice project for using Google's Gemini AI in a Node.js backend.

Key Features:
- Chat with an AI advisor
- Get relationship suggestions
- Filter unsafe responses
- Simple REST API

Tech Stack:
- Node.js and Express
- Google Gemini AI API
- TypeScript for better code quality`,
  },
  {
    title: "Pizza Palace API",
    description: "A backend for a pizza delivery app with order management, inventory tracking, and email alerts.",
    githubUrl: "https://github.com/muhammadyaqoobmuet/pizza-palace",
    tags: ["Node.js", "Express", "MongoDB"],
    fullDescription: `Pizza Palace API handles orders, ingredients, and customer management for a pizza shop.

Key Features:
- Create and track orders
- Manage pizza ingredients
- Send email alerts when stock is low
- Different user roles (admin, employee, customer)

Tech Stack:
- Node.js and Express
- MongoDB for data storage
- JWT for user authentication
- Nodemailer for sending emails`,
  },
];

const goProjects = [
  {
    title: "Basics GO",
    description: "Learning Go by building small projects. Focused on understanding Go basics and how to write concurrent programs.",
    githubUrl: "https://github.com/muhammadyaqoobmuet/GO",
    tags: ["Go", "Golang", "Concurrency"],
    priority: true,
    fullDescription: `A collection of Go projects while learning the language and its patterns.

Topics Covered:
- Go fundamentals (variables, functions, structs)
- Interfaces and type system
- Goroutines and channels for concurrent programming
- Working with packages and modules

Future Goals:
- Build a simple web service
- Create a command-line tool
- Explore Go's standard library more`,
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

import React from "react";
import Image from "next/image";
import { ArrowRight, Globe, Github } from "lucide-react";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiPostgresql,
  SiPrisma,
  SiGit,
  SiDocker,
  SiPython,
  SiJavascript,
  SiRedis,
  SiPostman,
  SiSocketdotio,
  SiGithubactions,
  SiGoogle,
  SiOpenai,
  SiReactquery,
  SiShadcnui,
  SiFramer,
  SiClerk,
} from "react-icons/si";

// Helper to map string tags to icon data
const getTechDetails = (tag) => {
  const normalizedTag = tag.toLowerCase().replace(/[\s\.]/g, "");
  const techMap = {
    react: { icon: SiReact, color: "text-blue-500", name: "React" },
    nextjs: { icon: SiNextdotjs, color: "text-white", name: "Next.js" },
    nextjs15: { icon: SiNextdotjs, color: "text-white", name: "Next.js 15" },
    typescript: { icon: SiTypescript, color: "text-blue-600", name: "TypeScript" },
    node: { icon: SiNodedotjs, color: "text-green-500", name: "Node.js" },
    nodejs: { icon: SiNodedotjs, color: "text-green-500", name: "Node.js" },
    mongodb: { icon: SiMongodb, color: "text-green-600", name: "MongoDB" },
    express: { icon: SiExpress, color: "text-white", name: "Express.js" },
    expressjs: { icon: SiExpress, color: "text-white", name: "Express.js" },
    tailwind: { icon: SiTailwindcss, color: "text-cyan-400", name: "Tailwind CSS" },
    tailwindcss: { icon: SiTailwindcss, color: "text-cyan-400", name: "Tailwind CSS" },
    postgresql: { icon: SiPostgresql, color: "text-blue-400", name: "PostgreSQL" },
    prisma: { icon: SiPrisma, color: "text-white", name: "Prisma" },
    git: { icon: SiGit, color: "text-orange-500", name: "Git" },
    docker: { icon: SiDocker, color: "text-blue-500", name: "Docker" },
    python: { icon: SiPython, color: "text-yellow-400", name: "Python" },
    javascript: { icon: SiJavascript, color: "text-yellow-400", name: "JavaScript" },
    redis: { icon: SiRedis, color: "text-red-500", name: "Redis" },
    socket: { icon: SiSocketdotio, color: "text-white", name: "Socket.io" },
    socketio: { icon: SiSocketdotio, color: "text-white", name: "Socket.io" },
    geminiai: { icon: SiGoogle, color: "text-blue-400", name: "Gemini AI" },
    langchain: { image: "/logos/langchain-color.svg", name: "LangChain" },
    resend: { icon: SiJavascript, color: "text-white", name: "Resend" },
    webrtc: { image: "/logos/webrtc-svgrepo-com.svg", name: "WebRTC" },
    reactquery: { icon: SiReactquery, color: "text-red-400", name: "React Query" },
    shadcnui: { icon: SiShadcnui, color: "text-white", name: "Shadcn UI" },
    framermotion: { icon: SiFramer, color: "text-purple-500", name: "Framer Motion" },
    clerk: { image: "/logos/idC1jR8p-G_logos.jpeg", name: "Clerk" },
  };

  return techMap[normalizedTag] || { icon: null, color: "text-gray-400", name: tag };
};

export default function ProjectCard({
  title,
  description,
  href,
  githubUrl,
  tags,
  imgUrl,
}) {
  return (
    <div className="group flex flex-col bg-[#111111] dark:bg-[#111111] rounded-3xl overflow-hidden border border-zinc-800 hover:border-zinc-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl">
      {/* Image Section */}
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          src={imgUrl}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="group-hover:scale-105 transition-transform duration-500 ease-out"
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent opacity-80" />
      </div>

      {/* Content Section */}
      <div className="flex flex-col flex-grow p-6 pt-4">
        {/* Header: Title + Links */}
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-2xl font-semibold text-white tracking-tight">
            {title}
          </h3>
          <div className="flex gap-3">
            {href && (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-white transition-colors p-2 hover:bg-zinc-800 rounded-full"
              >
                <Globe className="w-5 h-5" />
              </a>
            )}
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-white transition-colors p-2 hover:bg-zinc-800 rounded-full"
                aria-label="GitHub Repo"
              >
                <Github className="w-5 h-5" />
              </a>
            )}
            {!githubUrl && (
               <div className="text-zinc-600 cursor-not-allowed p-2" aria-label="Private Repo">
                  <Github className="w-5 h-5" />
               </div>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="text-zinc-400 text-[15px] leading-relaxed mb-6 line-clamp-3">
          {description}
        </p>

        {/* Technologies - Icons Only */}
        <div className="mt-auto">
          <div className="flex flex-wrap gap-3">
            {tags?.map((tag) => {
              const { icon: Icon, image, color, name } = getTechDetails(tag);

              if (image) {
                return (
                  <div
                    key={tag}
                    className="rounded-full p-2 mb-1 relative w-9 h-9 flex items-center justify-center"
                    title={name}
                  >
                     <Image
                        src={image}
                        alt={name}
                        width={20}
                        height={20}
                        className="object-contain" // Ensures aspect ratio is maintained
                     />
                  </div>
                );
              }

              if (!Icon) return null;
              return (
                <div
                  key={tag}
                  className="rounded-full  p-2"
                  title={name}
                >
                  <Icon className={`w-5 h-5 ${color}`} />
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer: Status + Link */}
        <div className="mt-auto pt-4 border-t border-zinc-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-medium text-zinc-400">
              All Systems Operational
            </span>
          </div>

          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-sm font-medium text-zinc-400 hover:text-white transition-colors group-hover:translate-x-1 duration-300"
          >
            View Details <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}

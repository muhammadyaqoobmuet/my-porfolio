import { SiReact, SiNextdotjs, SiTypescript, SiNodedotjs, SiMongodb, SiExpress, SiTailwindcss, SiPostgresql, SiPrisma, SiGit, SiDocker, SiPython, SiJavascript, SiRedis, SiPostman, SiSocketdotio, SiGithubactions } from "react-icons/si";

const TechStack = () => {
  const stack = [
    { name: "TailwindCSS", icon: SiTailwindcss, color: "text-cyan-400" },
    { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
    { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
    { name: "React", icon: SiReact, color: "text-blue-500" },
    { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
    { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
    { name: "Express.js", icon: SiExpress, color: "text-white" },
    { name: "MongoDB", icon: SiMongodb, color: "text-green-600" },
    { name: "Prisma", icon: SiPrisma, color: "text-white" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-400" },
    { name: "NeonDB", icon: SiPostgresql, color: "text-green-400" },
    { name: "NextAuth", icon: SiNextdotjs, color: "text-purple-500" },
    { name: "Zod", icon: SiTypescript, color: "text-blue-800" },
    { name: "Zustand", icon: SiReact, color: "text-yellow-700" },
    { name: "Redis", icon: SiRedis, color: "text-red-500" },
    { name: "Docker", icon: SiDocker, color: "text-blue-500" },
    { name: "WebSocket", icon: SiSocketdotio, color: "text-white" },
    { name: "CI/CD", icon: SiGithubactions, color: "text-blue-400" },
    { name: "Turborepo", icon: SiNextdotjs, color: "text-red-500" },
    { name: "Langchain", icon: SiPython, color: "text-green-300" },
    { name: "MCP", icon: SiNodedotjs, color: "text-blue-300" },
    { name: "Postman", icon: SiPostman, color: "text-orange-500" },
    { name: "Git", icon: SiGit, color: "text-orange-500" },
  ];

  return (
    <div className="flex flex-col gap-6 mt-16">
      <h3 className="font-serif text-2xl font-bold text-gray-900 dark:text-gray-100">
        Skills & Tools
      </h3>
      <div className="flex flex-wrap gap-2">
        {stack.map((item) => (
          <div
            key={item.name}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 text-sm font-medium text-gray-800 dark:text-gray-200"
          >
            <item.icon className={`w-4 h-4 ${item.color}`} />
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;

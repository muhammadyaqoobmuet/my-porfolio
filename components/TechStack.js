import React from "react";
import { SiReact, SiNextdotjs, SiTypescript, SiNodedotjs, SiMongodb, SiExpress, SiTailwindcss, SiPostgresql, SiPrisma, SiGit, SiDocker, SiPython } from "react-icons/si";

const TechStack = () => {
  const stack = [
    { name: "React", icon: SiReact, color: "text-blue-500" },
    { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
    { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
    { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
    { name: "Express", icon: SiExpress, color: "text-white" },
    { name: "MongoDB", icon: SiMongodb, color: "text-green-600" },
    { name: "Tailwind", icon: SiTailwindcss, color: "text-cyan-400" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-400" },
    { name: "Prisma", icon: SiPrisma, color: "text-white" },
    { name: "Git", icon: SiGit, color: "text-orange-500" },
    { name: "Docker", icon: SiDocker, color: "text-blue-500" },
    { name: "Python", icon: SiPython, color: "text-yellow-500" },
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

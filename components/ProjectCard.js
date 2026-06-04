import Image from "next/image";
import { Github, ExternalLink, Cpu, Layers, Server, Code } from "lucide-react";

export default function ProjectCard({
  title,
  description,
  href,
  githubUrl,
  tags,
  imgUrl,
  date = "2026",
  hideImage = false,
}) {
  const getIcon = () => {
    if (tags?.some(t => t.toLowerCase().includes('go'))) return <Code className="size-12 text-blue-500/40" />;
    if (tags?.some(t => t.toLowerCase().includes('backend'))) return <Server className="size-12 text-emerald-500/40" />;
    if (tags?.some(t => t.toLowerCase().includes('microservices'))) return <Layers className="size-12 text-indigo-500/40" />;
    return <Cpu className="size-12 text-zinc-400/40" />;
  };

  return (
    <div className="group flex flex-col rounded-2xl border border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 overflow-hidden transition-all duration-300 hover:border-gray-400 dark:hover:border-zinc-700 shadow-sm hover:shadow-xl">
      {/* Visual Area */}
      <div className="p-3">
        <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-gray-100 dark:border-zinc-900 bg-zinc-50 dark:bg-zinc-900">
          {!hideImage && imgUrl ? (
            <Image
              src={imgUrl}
              alt={title}
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-500 group-hover:scale-110"
              unoptimized
            />
          ) : (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-zinc-900 dark:to-zinc-950">
               {/* Decorative Pattern background */}
               <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.07]" 
                  style={{ backgroundImage: `radial-gradient(#000 0.5px, transparent 0.5px)`, backgroundSize: '12px 12px' }} 
               />
               <div className="relative z-10 transition-transform duration-500 group-hover:scale-110">
                  {getIcon()}
               </div>
               <span className="mt-2 text-[10px] font-mono uppercase tracking-[0.2em] text-gray-400 dark:text-zinc-600">
                  Technical System
               </span>
            </div>
          )}
        </div>
      </div>

      {/* Content Area */}
      <div className="flex flex-col flex-1 px-5 pt-2 pb-5">
        <div className="flex items-center justify-between gap-3 mb-3">
          <h3 className="font-bold text-lg text-gray-900 dark:text-white tracking-tight leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {title}
          </h3>
          <span className="font-mono text-[10px] bg-gray-100 dark:bg-zinc-800 px-2 py-0.5 rounded text-gray-500 dark:text-zinc-500 shrink-0">
            {date}
          </span>
        </div>

        <p className="text-sm text-gray-600 dark:text-zinc-400 line-clamp-3 mb-6 leading-relaxed">
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-8 mt-auto">
          {tags?.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-lg border border-gray-100 dark:border-zinc-800/50 bg-gray-50/50 dark:bg-zinc-900/50 text-[10px] font-mono text-gray-500 dark:text-zinc-500 transition-colors hover:border-gray-200 dark:hover:border-zinc-700"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action Footer */}
        <div className="pt-4 border-t border-dashed border-gray-200 dark:border-zinc-800 flex items-center gap-4">
          {href && (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline"
            >
              Live Link <ExternalLink className="size-3" />
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-semibold text-gray-700 dark:text-zinc-300 hover:text-black dark:hover:text-white transition-colors"
            >
              Code <Github className="size-3.5" />
            </a>
          )}
          {!href && !githubUrl && (
             <span className="text-[10px] font-mono text-gray-400 italic">Internal Project / Source Private</span>
          )}
        </div>
      </div>
    </div>
  );
}

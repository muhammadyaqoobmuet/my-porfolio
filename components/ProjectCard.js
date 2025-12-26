import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function ProjectCard({ title, description, href, tags, imgUrl }) {

  if (imgUrl) {
    return (
        <a
          className="group relative flex flex-col h-96 md:h-[28rem] w-full overflow-hidden rounded-3xl border border-gray-200 dark:border-zinc-800 transition-all duration-500 hover:shadow-xl hover:border-zinc-700"
          href={href}
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* Image Section - Top Half on Desktop */}
          <div className="absolute inset-0 z-0 md:relative md:h-[55%] md:w-full md:z-auto overflow-hidden">
             {/* Gradient for Mobile Only */}
             <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-10 md:hidden" />

             <Image
               src={imgUrl}
               alt={title}
               layout="fill"
               objectFit="cover"
               className="transform transition-transform duration-700 ease-out group-hover:scale-105"
             />
          </div>

          {/* Content Section - Bottom Half on Desktop */}
          <div className="relative z-20 flex flex-col justify-end md:justify-start h-full md:h-[45%] p-6 md:p-8 md:bg-[#111111] md:w-full md:border-t md:border-zinc-800 transition-colors">

             {/* Title Row */}
             <div className="flex justify-between items-start mb-4">
                <h4 className="text-3xl md:text-2xl font-serif font-bold text-white tracking-tight drop-shadow-md md:drop-shadow-none">
                    {title}
                </h4>

                {/* Arrow Icon */}
                <div className="hidden md:flex p-2 rounded-full border border-zinc-700/50 bg-zinc-800/50 text-zinc-400 group-hover:text-white group-hover:border-zinc-600 transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                </div>
             </div>

             {/* Description */}
             <p className="text-gray-300 md:text-zinc-400 text-sm md:text-sm leading-relaxed font-medium md:font-normal drop-shadow-sm md:drop-shadow-none md:line-clamp-3 mb-6">
               {description}
             </p>

             {/* Tags */}
             {tags && (
                <div className="flex flex-wrap gap-2 mt-auto">
                  {tags.map((tag) => (
                    <span key={tag} className="px-2.5 py-1 text-[10px] uppercase tracking-wider font-semibold rounded-md bg-white/10 md:bg-zinc-800/80 text-white md:text-zinc-300 border border-white/10 md:border-zinc-700/50 shadow-sm backdrop-blur-sm">
                      {tag}
                    </span>
                  ))}
                </div>
             )}
          </div>
        </a>
    );
  }

  return (
    <a
      className="group flex flex-col justify-between p-6 bg-zinc-50 dark:bg-zinc-900/50 rounded-xl border border-gray-200 dark:border-zinc-800 hover:border-gray-300 dark:hover:border-zinc-700 transition-all duration-300 hover:shadow-md"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="flex flex-col">
        <div className="flex justify-between items-start">
            <h4 className="text-xl font-bold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {title}
            </h4>
            <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors" />
        </div>
        <p className="mt-3 text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
          {description}
        </p>
      </div>

      {tags && (
        <div className="flex flex-wrap gap-2 mt-6">
            {tags.map((tag) => (
                <span key={tag} className="px-2 py-1 text-xs font-medium rounded-md bg-gray-100 dark:bg-zinc-800 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-zinc-700">
                    {tag}
                </span>
            ))}
        </div>
      )}
    </a>
  );
}

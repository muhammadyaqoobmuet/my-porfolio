import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function ProjectCard({ title, description, href, tags, imgUrl }) {

  if (imgUrl) {
    return (
        <a
          className="group flex flex-col justify-between p-6 md:p-0 bg-zinc-50 dark:bg-zinc-900/50 md:bg-transparent rounded-xl md:rounded-3xl border border-gray-200 dark:border-zinc-800 hover:border-gray-300 dark:hover:border-zinc-700 transition-all duration-300 md:duration-500 hover:shadow-md md:hover:shadow-xl md:overflow-hidden md:h-[28rem]"
          href={href}
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* Image Section - Hidden on Mobile, Visible on Desktop */}
          <div className="hidden md:block md:relative md:h-[50%] lg:h-[48%] md:w-full overflow-hidden">
             <Image
               src={imgUrl}
               alt={title}
               layout="fill"
               objectFit="cover"
               className="transform transition-transform duration-700 ease-out group-hover:scale-105"
             />
          </div>

          {/* Content Section - Clean Typography on Mobile, Dark Background on Desktop */}
          <div className="flex flex-col md:h-[50%] lg:h-[52%] md:p-6 lg:p-8 md:bg-[#111111] md:border-t md:border-zinc-800 transition-colors">

             {/* Title Row */}
             <div className="flex justify-between items-start mb-3 md:mb-3 lg:mb-4">
                <h4 className="text-xl md:text-xl lg:text-2xl font-serif font-bold text-gray-900 dark:text-gray-100 md:text-white tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 md:group-hover:text-white transition-colors">
                    {title}
                </h4>

                {/* Arrow Icon */}
                <div className="flex md:hidden p-1.5 text-gray-400 group-hover:text-blue-500 transition-colors">
                    <ArrowUpRight className="w-5 h-5" />
                </div>
                <div className="hidden md:flex p-2 rounded-full border border-zinc-700/50 bg-zinc-800/50 text-zinc-400 group-hover:text-white group-hover:border-zinc-600 transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                </div>
             </div>

             {/* Description */}
             <p className="text-gray-600 dark:text-gray-400 md:text-zinc-400 text-sm leading-relaxed mb-4 md:mb-4 lg:mb-6">
               {description}
             </p>

             {/* Tags */}
             {tags && (
                <div className="flex flex-wrap gap-2 mt-auto">
                  {tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 text-xs md:text-[10px] font-medium md:font-semibold uppercase tracking-wider rounded-md bg-gray-100 dark:bg-zinc-800 md:bg-zinc-800/80 text-gray-600 dark:text-gray-300 md:text-zinc-300 border border-gray-200 dark:border-zinc-700 md:border-zinc-700/50 md:shadow-sm">
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

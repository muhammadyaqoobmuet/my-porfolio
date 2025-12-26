import { ArrowUpRight } from "lucide-react";

export default function ProjectCard({ title, description, href, tags, imgUrl }) {

  if (imgUrl) {
    return (
        <a
          className="group relative flex flex-col justify-end p-8 md:p-10 h-[28rem] w-full overflow-hidden rounded-3xl border border-gray-200 dark:border-zinc-800 transition-all duration-700 hover:shadow-2xl"
          href={href}
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* Background Image with Parallax-like feel */}
          <div className="absolute inset-0 z-0">
             <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10 opacity-100 transition-opacity duration-500" />
             <img
               src={imgUrl}
               alt={title}
               className="w-full h-full object-cover transform transition-transform duration-[1.5s] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105 will-change-transform"
             />
          </div>

          <div className="relative z-20 flex flex-col gap-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-500 ease-out">
             <div className="flex justify-between items-end border-b border-white/10 pb-4 mb-2">
                <h4 className="text-3xl md:text-4xl font-serif font-bold text-white tracking-wide shadow-black drop-shadow-lg">
                    {title}
                </h4>
                <div className="p-3 bg-white/10 backdrop-blur-md rounded-full text-white opacity-0 group-hover:opacity-100 group-hover:scale-100 scale-75 transition-all duration-500 ease-out border border-white/20">
                    <ArrowUpRight className="w-5 h-5" />
                </div>
             </div>

             <p className="text-gray-200 text-sm md:text-base leading-relaxed max-w-xl font-medium drop-shadow-md pr-4">
               {description}
             </p>

             {tags && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 text-[10px] uppercase tracking-widest font-bold rounded-full bg-white/5 backdrop-blur-xl text-white border border-white/10 shadow-[0_4px_10px_rgba(0,0,0,0.2)] hover:bg-white/20 transition-colors">
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

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { parseISO, format } from "date-fns";

export default function BlogPost({ title, summary, slug, publishedAt, index }) {
  // Format the index to 01, 02 style
  const formattedIndex = (index + 1).toString().padStart(2, '0');
  
  return (
    <Link href={`/blog/${slug}`}>
      <a className="group relative flex items-center justify-between px-6 py-8 sm:px-12 border-b border-zinc-100 dark:border-zinc-900 last:border-0 hover:bg-gray-50/50 dark:hover:bg-zinc-900/30 transition-all duration-300">
        <div className="flex items-start gap-6 sm:gap-10">
          {/* Index Number */}
          <span className="font-mono text-[10px] text-gray-400 dark:text-zinc-600 mt-1 md:mt-1.5 shrink-0">
             {formattedIndex}
          </span>

          <div className="flex flex-col gap-2 max-w-xl">
             <div className="flex items-center gap-3">
                <h4 className="text-lg sm:text-2xl font-bold text-gray-900 dark:text-gray-100 tracking-tight leading-tight group-hover:text-black dark:group-hover:text-white transition-colors">
                  {title}
                </h4>
             </div>
             
             {summary && (
               <p className="text-xs sm:text-sm text-gray-500 dark:text-zinc-500 leading-relaxed max-w-md line-clamp-2">
                 {summary}
               </p>
             )}

             {publishedAt && (
                <div className="font-mono text-[9px] uppercase tracking-widest text-gray-400 dark:text-zinc-600 mt-2">
                   {format(parseISO(publishedAt), "MMMM dd, yyyy")}
                </div>
             )}
          </div>
        </div>

        <div className="shrink-0 ml-4">
           <div className="flex size-8 sm:size-10 items-center justify-center rounded-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-black group-hover:border-black dark:group-hover:border-white group-hover:bg-black dark:group-hover:bg-white transition-all duration-300">
              <ChevronRight className="size-4 text-gray-400 dark:text-zinc-600 group-hover:text-white dark:group-hover:text-black transition-colors" />
           </div>
        </div>
      </a>
    </Link>
  );
}

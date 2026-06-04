import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function BlogPost({ title, summary, slug }) {
  return (
    <Link href={`/blog/${slug}`}>
      <a className="flex items-start gap-3 px-5 py-3.5 border-b border-gray-200 dark:border-zinc-800 last:border-0 group hover:bg-gray-50 dark:hover:bg-zinc-900/60 transition-colors">
        {/* dot */}
        <span className="mt-1.5 flex size-2 shrink-0 rounded-full bg-zinc-300 dark:bg-zinc-600" />

        <div className="flex flex-1 flex-col gap-0.5 min-w-0">
          <h4 className="font-mono text-sm font-semibold text-gray-900 dark:text-gray-100 leading-snug group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors">
            {title}
          </h4>
          <p className="font-mono text-xs text-gray-500 dark:text-zinc-500 leading-relaxed">
            {summary}
          </p>
        </div>

        <ArrowRight className="size-4 shrink-0 mt-1 text-gray-400 dark:text-zinc-600 opacity-0 group-hover:opacity-100 transition-opacity" />
      </a>
    </Link>
  );
}

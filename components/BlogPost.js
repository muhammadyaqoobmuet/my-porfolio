import Link from "next/link";

const BlogPost = ({ title, summary, slug }) => {
  return (
    <Link href={`/blog/${slug}`}>
      <a className="w-full flex flex-col p-6 my-2 bg-zinc-100 dark:bg-zinc-900 rounded-lg border border-gray-200 dark:border-zinc-800 hover:border-gray-300 dark:hover:border-zinc-700 transition-all duration-300 group">
        <h4 className="text-lg md:text-xl font-bold mb-2 text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {title}
        </h4>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm md:text-base">
          {summary}
        </p>
      </a>
    </Link>
  );
};

export default BlogPost;

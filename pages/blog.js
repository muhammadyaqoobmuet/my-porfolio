import { useState } from "react";
import Container from "@/components/Container";
import BlogPost from "@/components/BlogPost";
import { getAllFilesFrontMatter } from "@/lib/mdx";
import { Search } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter("blog");
  return { props: { posts } };
}

/* ─── tiny helper: the hatched stripe divider ─── */
function HatchDivider() {
  const { theme } = useTheme();
  return (
    <div
      className="relative flex h-6 w-full border-x border-zinc-200 dark:border-zinc-800"
      style={{
        background:
          theme === 'dark'
            ? "repeating-linear-gradient(315deg, rgba(161,161,170,0.25) 0, rgba(161,161,170,0.25) 1px, transparent 0, transparent 50%) 0 0 / 10px 10px"
            : "repeating-linear-gradient(315deg, rgba(113,113,122,0.15) 0, rgba(113,113,122,0.15) 1px, transparent 0, transparent 50%) 0 0 / 10px 10px",
      }}
    />
  );
}

export default function Blog({ posts }) {
  const [searchValue, setSearchValue] = useState("");
  
  const filteredBlogPosts = posts
    .sort(
      (a, b) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
    )
    .filter((frontMatter) =>
      frontMatter.title.toLowerCase().includes(searchValue.toLowerCase()) ||
      frontMatter.summary?.toLowerCase().includes(searchValue.toLowerCase())
    );

  const featuredPosts = filteredBlogPosts.slice(0, 2);
  const otherPosts = filteredBlogPosts.slice(2);

  return (
    <Container
      title="Writing – Muhammad Yaqoob"
      description="Thoughts on software development, engineering systems, and technical blueprints."
    >
      <div className="mx-auto w-full max-w-3xl pt-16">
        
        {/* ── Page Header ── */}
        <section className="relative border-x border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-black p-8 sm:p-12 overflow-hidden">
           <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none select-none">
              <span className="font-mono text-9xl font-black">BLOG</span>
           </div>
           
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             className="relative z-10"
           >
             <div className="flex items-center gap-2 mb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-gray-400 dark:text-zinc-500">
                <span className="h-px w-8 bg-zinc-200 dark:bg-zinc-800" />
                <span>Editorial & Thoughts</span>
             </div>
             
             <h1 className="font-bold text-4xl sm:text-6xl text-gray-900 dark:text-gray-100 tracking-tighter uppercase mb-6 leading-none">
                Writing
             </h1>
             
             <p className="font-mono text-xs sm:text-sm text-gray-500 dark:text-zinc-400 max-w-lg leading-relaxed">
                Documentation of my learning process, technical deep-dives, and blueprints for systems that scale.
             </p>
           </motion.div>
        </section>

        <HatchDivider />

        {/* ── Search Bar ── */}
        <div className="relative border-x border-y border-zinc-200 dark:border-zinc-800 bg-gray-50/50 dark:bg-zinc-900/10 p-4 sm:p-6">
           <div className="relative group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-gray-400 dark:text-zinc-600 transition-colors group-focus-within:text-black dark:group-focus-within:text-white" />
              <input
                aria-label="Search articles"
                type="text"
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder="Search technical archives..."
                className="w-full bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl py-3 pl-11 pr-4 text-sm font-mono placeholder:text-gray-400 dark:placeholder:text-zinc-700 focus:outline-none focus:ring-2 focus:ring-zinc-100 dark:focus:ring-zinc-800 transition-all shadow-sm"
              />
              <div className="absolute right-4 top-1/2 -translate-y-1/2 hidden sm:flex items-center gap-1.5 pointer-events-none">
                 <span className="font-mono text-[10px] text-gray-400 dark:text-zinc-600 uppercase">Found {filteredBlogPosts.length}</span>
              </div>
           </div>
        </div>

        <HatchDivider />

        {/* ── Posts List ── */}
        <section className="border-x border-zinc-200 dark:border-zinc-800 bg-white dark:bg-black pb-20">
          {!filteredBlogPosts.length ? (
            <div className="p-12 text-center">
              <p className="font-mono text-xs text-gray-400 dark:text-zinc-600">No records matching your query were found.</p>
            </div>
          ) : (
            <div className="flex flex-col">
               {filteredBlogPosts.map((post, idx) => (
                 <BlogPost key={post.title} {...post} index={idx} />
               ))}
            </div>
          )}
        </section>
      </div>
    </Container>
  );
}

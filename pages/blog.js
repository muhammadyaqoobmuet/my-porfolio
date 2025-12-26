import { useState } from "react";
import Container from "@/components/Container";
import BlogPost from "@/components/BlogPost";
import { getAllFilesFrontMatter } from "@/lib/mdx";
import { Search } from "lucide-react";

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter("blog");
  return { props: { posts } };
}

export default function Blog({ posts }) {
  const [searchValue, setSearchValue] = useState("");
  const filteredBlogPosts = posts
    .sort(
      (a, b) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
    )
    .filter((frontMatter) =>
      frontMatter.title.toLowerCase().includes(searchValue.toLowerCase())
    );

  return (
    <Container
      title="Writing – Muhammad Yaqoob"
      description="Thoughts on Software Development, Programming, and Tech."
    >
      <div className="flex flex-col justify-center items-start pt-24 pb-16">
        <h1 className="font-serif text-4xl md:text-5xl font-bold tracking-tight mb-6 text-gray-900 dark:text-gray-100">
          Writing
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-10 max-w-xl text-lg leading-relaxed">
           Thoughts on software development, programming, and technology. I write about what I learn and build.
        </p>

        <div className="relative w-full max-w-xl mb-16">
          <input
            aria-label="Search articles"
            type="text"
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Search articles"
            className="px-4 py-3 pl-12 border border-gray-200 dark:border-zinc-800 rounded-md bg-white dark:bg-zinc-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-zinc-700 w-full transition-all"
          />
          <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-400 dark:text-gray-500" />
        </div>

        <div className="flex flex-col w-full">
            {!filteredBlogPosts.length && (
            <p className="text-gray-600 dark:text-gray-400 mb-4">
                No posts found.
            </p>
            )}
            {filteredBlogPosts.map((frontMatter) => (
            <BlogPost key={frontMatter.title} {...frontMatter} />
            ))}
        </div>

      </div>
    </Container>
  );
}

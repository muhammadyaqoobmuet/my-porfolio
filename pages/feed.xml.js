import { getAllFilesFrontMatter } from "@/lib/mdx";
import RSS from "rss";

export async function getServerSideProps({ res }) {
  const feed = new RSS({
    title: "Manu Arora",
    site_url: "https://yaqoobhalepoto.engineer",
    feed_url: "https://yaqoobhalepoto.engineer/feed.xml",
  });

  const posts = await getAllFilesFrontMatter("blog");
  const filteredBlogPosts = posts.sort(
    (a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
  );
  filteredBlogPosts.map((post) => {
    feed.item({
      title: post.title,
      url: `https://yaqoobhalepoto.engineer/blog/${post.slug}`,
      date: post.publishedAt,
      description: post.summary,
    });
  });

  res.setHeader("Content-Type", "text/xml");
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=1200, stale-while-revalidate=600"
  );
  res.write(feed.xml({ indent: true }));
  res.end();

  return {
    props: {},
  };
}

export default function RSSFeed() {
  return null;
}

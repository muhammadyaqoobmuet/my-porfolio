import Head from "next/head";

export default function OpenGraphMeta({
  image = "/opengraph.png",
  title = "Muhammad Yaqoob",
  description = "Full-Stack developer, JavaScript enthusiast, Freelancer and a Learner.",
  url = "https://yaqoobhalepoto.engineer",
}) {
  return (
    <Head>
      {/* Open Graph Meta Tags */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={title} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content={description} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={description} />
    </Head>
  );
}

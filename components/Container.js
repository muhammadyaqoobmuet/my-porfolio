import Head from "next/head";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import NextLink from "next/link";
import { useTheme } from "next-themes";

import Footer from "@/components/Footer";

import { AnimatePresence, motion } from "framer-motion";

export default function Container(props) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // After mounting, we have access to the theme
  useEffect(() => setMounted(true), []);
  let [hoveredIndex, setHoveredIndex] = useState(null);

  const { children, ...customMeta } = props;
  const router = useRouter();

  // Enhanced meta configuration
  const meta = {
    title: "Muhammad Yaqoob",
    description: `Full-Stack developer, JavaScript enthusiast, Freelancer and a Learner.`,
    image: "https://yaqoobhalepoto.engineer/og-image.jpg", // Default OG image
    type: "website",
    siteName: "Muhammad Yaqoob",
    twitterHandle: "@jackub_halepoto", // Replace with your actual handle
    author: "Muhammad Yaqoob",
    keywords: "Full-Stack Developer, JavaScript, React, Next.js, Freelancer, Web Development",
    ...customMeta, // Custom meta will override defaults
  };

  // Construct full URL
  const url = `https://yaqoobhalepoto.engineer${router.asPath}`;

  // Construct full title
  const fullTitle = meta.title === "Muhammad Yaqoob" ? meta.title : `${meta.title} | Muhammad Yaqoob`;

  const links = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Blog",
      link: "/blog",
    },
    {
      name: "Snippets",
      link: "/snippets",
    },
    {
      name: "Resources",
      link: "/resources",
    },
    {
      name: "Projects",
      link: "/projects",
    },
  ];

  const mobileLinks = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Projects",
      link: "/projects",
    },
    {
      name: "Blog",
      link: "/blog",
    },
    {
      name: "Snippets",
      link: "/snippets",
    },
    {
      name: "Resources",
      link: "/resources",
    },
    {
      name: "Freelancing",
      link: "/freelance",
    },
    {
      name: "Box Shadows",
      link: "/boxshadows",
    },
    {
      name: "FreeCodeCamp",
      link: "/freecodecamp",
    },
  ];

  return (
    <div className="bg-white dark:bg-zinc-900">
      <Head>
        {/* Basic Meta Tags */}
        <title>{fullTitle}</title>
        <meta name="description" content={meta.description} />
        <meta name="keywords" content={meta.keywords} />
        <meta name="author" content={meta.author} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="follow, index" />

        {/* Canonical URL */}
        <link rel="canonical" href={url} />

        {/* Open Graph Tags */}
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content={meta.siteName} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={meta.image} />
        <meta property="og:image:alt" content={meta.description} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={meta.twitterHandle} />
        <meta name="twitter:creator" content={meta.twitterHandle} />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        <meta name="twitter:image:alt" content={meta.description} />

        {/* Article specific meta (for blog posts) */}
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
        {meta.tags && (
          <meta property="article:tag" content={meta.tags} />
        )}

        {/* Additional SEO Tags */}
        <meta name="theme-color" content="#0d9488" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Muhammad Yaqoob",
              "url": "https://yaqoobhalepoto.engineer",
              "description": meta.description,
              "jobTitle": "Full-Stack Developer",
              "sameAs": [
                // Add your social media profiles here
                "https://twitter.com/your_handle",
                "https://linkedin.com/in/your-profile",
                "https://github.com/your-username"
              ]
            })
          }}
        />
      </Head>

      <nav className="sticky-nav flex justify-between items-center max-w-4xl w-full p-8 mt-0 mb-0 md:mt-4 md:mb-10  mx-auto bg-white dark:bg-zinc-900 bg-opacity-60">
        <a href="#skip" className="sr-only focus:not-sr-only">
          Skip to content
        </a>
        <button
          aria-label="Toggle Dark Mode"
          type="button"
          className="group rounded-full bg-white/90 px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-zinc-900/90 dark:ring-teal-500/50 dark:hover:ring-white/20"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {mounted && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              stroke="currentColor"
              className="h-4 w-4 text-gray-800 dark:text-teal-500"
            >
              {theme === "dark" ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              )}
            </svg>
          )}
        </button>
        <div className="hidden sm:block rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-900/90 dark:text-zinc-200 dark:ring-white/10">
          <Desktop
            links={links}
            hoveredIndex={hoveredIndex}
            setHoveredIndex={setHoveredIndex}
            router={router}
          />
        </div>
        <div className="block sm:hidden" links={mobileLinks}>
          <Mobile links={mobileLinks} />
        </div>
      </nav>

      <main
        id="skip"
        className="flex flex-col justify-center bg-white dark:bg-zinc-900 px-8 text-gray-900 dark:text-gray-100 antialiased"
      >
        {children}
        <Footer />
      </main>
    </div>
  );
}

// Mobile and Desktop components remain the same
export const Mobile = ({ links }) => {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const dropIn = {
    hidden: {
      y: "-4vh",
      opacity: 0,
    },
    visible: {
      y: "0",
      opacity: 1,
      transition: {
        duration: 0.1,
        type: "spring",
        damping: 25,
        stiffness: 500,
      },
    },
    exit: {
      y: "4vh",
      opacity: 0,
    },
  };
  const handleClick = (link) => {
    setOpen(false);
    router.push(link);
  };

  useEffect(() => {
    console.log("open value", open);
  }, [open]);

  return (
    <div className="w-full flex flex-row items-center space-x-2">
      <button
        onClick={() => handleClick(links[0].link)}
        className="relative rounded-lg px-1 py-1 sm:px-4 sm:py-2 text-sm text-gray-700 dark:text-gray-200 transition-all delay-150 hover:text-gray-900 dark:hover:text-gray-900"
      >
        {links[0]?.name}
      </button>
      <button
        onClick={() => handleClick(links[1].link)}
        className="relative rounded-lg px-1 py-1 sm:px-4 sm:py-2 text-sm text-gray-700 dark:text-gray-200 transition-all delay-150 hover:text-gray-900 dark:hover:text-gray-900"
      >
        {links[1]?.name}
      </button>

      <button
        onClick={() => setOpen(!open)}
        className="p-2 rounded-md bg-gray-200 dark:bg-gray-800"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6 text-black dark:text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
      <AnimatePresence
        initial={false}
        exitBeforeEnter
        onExitComplete={() => null}
      >
        {open && (
          <motion.div
            variants={dropIn}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute inset-x-0 mx-auto top-20 flex flex-col w-[90%]   p-4 rounded-lg shadow-xl z-[999] bg-white dark:bg-gray-800 divide-y dark:divide-gray-700"
          >
            {[...links].splice(2).map((el) => (
              <button
                key={el?.link}
                onClick={() => handleClick(el.link)}
                className="relative font-bold px-1 py-4 sm:px-4 sm:py-2 text-sm text-gray-700 dark:text-gray-200 transition-all delay-150 hover:text-gray-900 dark:hover:text-gray-900 text-left"
              >
                <AnimatePresence>
                  <span className="relative z-10">{el.name}</span>
                </AnimatePresence>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const Desktop = ({ links, hoveredIndex, setHoveredIndex, router }) => {
  return (
    <>
      {links.map((navLink, index) => (
        <NextLink key={index} href={navLink.link}>
          <a
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="relative rounded-lg px-3 inline-block py-2 text-sm text-gray-700 dark:text-gray-200 transition-all delay-150 hover:text-gray-900 dark:hover:text-gray-900"
          >
            <AnimatePresence>
              {hoveredIndex === index && (
                <motion.span
                  className="absolute inset-0  transform bg-gray-50 dark:bg-zinc-900"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { duration: 0.15 } }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15, delay: 0.2 },
                  }}
                />
              )}
            </AnimatePresence>

            <span
              className={`relative z-10 ${router.asPath === navLink.link
                ? "text-teal-600"
                : "text-gray-600 dark:text-gray-50"
                }`}
            >
              {navLink.name}
            </span>
            {router.asPath === navLink.link && (
              <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-blue-500/0 via-blue-500/40 to-blue-500/0 dark:from-blue-400/0 dark:via-blue-400/40 dark:to-blue-400/0"></span>
            )}
          </a>
        </NextLink>
      ))}
    </>
  );
};
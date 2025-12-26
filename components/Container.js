import Head from "next/head";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import NextLink from "next/link";
import { useTheme } from "next-themes";
import Footer from "@/components/Footer";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Container(props) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // After mounting, we have access to the theme
  useEffect(() => setMounted(true), []);

  const { children, ...customMeta } = props;

  const meta = {
    title: "Muhammad Yaqoob",
    description: `Senior Full Stack Developer specializing in clean, scalable web applications.`,
    image: "/static/opengraph.png",
    type: "website",
    siteName: "Muhammad Yaqoob",
    twitterHandle: "@jackub_halepoto",
    ...customMeta,
  };

  const fullTitle =
    meta.title === "Muhammad Yaqoob"
      ? meta.title
      : `${meta.title} | Muhammad Yaqoob`;

  return (
    <div className="bg-custom-light dark:bg-custom-dark min-h-screen text-gray-900 dark:text-gray-100 font-sans transition-colors duration-300">
      <Head>
        <title>{fullTitle}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={meta.description} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content={meta.siteName} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={meta.twitterHandle} />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>

      <nav className="relative flex justify-between items-center max-w-3xl w-full mx-auto px-4 py-8 md:p-8 md:pt-12 z-[100]">
        {/* Logo / Home */}
        <NextLink href="/">
          <a className="font-serif font-bold text-xl tracking-tight hover:text-custom-gray transition-colors">
            M. Yaqoob
          </a>
        </NextLink>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          <NavItem href="/projects" text="Projects" router={router} />
          <NavItem href="/snippets" text="Snippets" router={router} />
          <NavItem href="/resources" text="Resources" router={router} />
          <NavItem href="/blog" text="Writing" router={router} />
          <NavItem href="mailto:yaqoobahmed45700@gmail.com" text="Contact" router={router} />

          {/* Theme Toggle */}
          <button
            aria-label="Toggle Dark Mode"
            type="button"
            className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 dark:hover:bg-custom-border-dark transition-colors"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {mounted && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                className="w-4 h-4 text-gray-800 dark:text-gray-200"
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
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="flex md:hidden items-center gap-4 ml-auto">
            <button
            aria-label="Toggle Dark Mode"
            type="button"
            className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 dark:hover:bg-custom-border-dark transition-colors"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {mounted && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                className="w-4 h-4 text-gray-800 dark:text-gray-200"
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
            <button
                className="p-2 text-gray-900 dark:text-gray-100"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
                {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.1 }}
                className="md:hidden absolute top-20 left-0 right-0 z-[100] px-4 mx-4"
            >
                <div className="flex flex-col gap-2 p-4 rounded-xl bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 shadow-2xl">
                    <MobileNavItem href="/projects" text="Projects" router={router} />
                    <MobileNavItem href="/snippets" text="Snippets" router={router} />
                    <MobileNavItem href="/resources" text="Resources" router={router} />
                    <MobileNavItem href="/blog" text="Writing" router={router} />
                    <MobileNavItem href="mailto:yaqoobahmed45700@gmail.com" text="Contact" router={router} />
                </div>
            </motion.div>
        )}
      </AnimatePresence>

      <main className="flex flex-col justify-center max-w-3xl mx-auto px-4 md:px-8 w-full">
        {children}
        <Footer />
      </main>
    </div>
  );
}

function NavItem({ href, text, router }) {
  const isActive = router.asPath === href;

  return (
    <NextLink href={href}>
      <a
        className={`${
          isActive
            ? "text-gray-900 dark:text-gray-100 font-semibold"
            : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
        } transition-all`}
      >
        {text}
      </a>
    </NextLink>
  );
}

function MobileNavItem({ href, text, router }) {
  const isActive = router.asPath === href;

  return (
    <NextLink href={href}>
      <a
        className={`${
          isActive
            ? "text-gray-900 dark:text-gray-100 font-semibold bg-gray-100 dark:bg-zinc-800"
            : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
        } block px-4 py-2 rounded-md transition-all`}
      >
        {text}
      </a>
    </NextLink>
  );
}

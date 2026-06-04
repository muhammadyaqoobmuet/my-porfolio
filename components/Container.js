import Head from "next/head";
import { useRouter } from "next/router";
import { useState, useEffect, useCallback, useRef } from "react";
import NextLink from "next/link";
import { useTheme } from "next-themes";
import Footer from "@/components/Footer";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Sun, Moon, Search, ChevronDown } from "lucide-react";
import CommandPalette from "@/components/CommandPalette";

export default function Container(props) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const router = useRouter();
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [isMoreMenuOpen, setIsMoreMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showThemeTooltip, setShowThemeTooltip] = useState(false);
  const clickSoundRef = useRef(null);

  useEffect(() => {
    setMounted(true);
    // Preload audio for instant playback
    const audio = new Audio("/mp3Sounds/clickableSound.mp3");
    audio.preload = "auto";
    audio.volume = 0.5;
    clickSoundRef.current = audio;
  }, []);

  const playClickSound = useCallback(() => {
    if (clickSoundRef.current) {
      clickSoundRef.current.currentTime = 0;
      clickSoundRef.current.play().catch(() => {});
    }
  }, []);

  const handleThemeToggle = useCallback(() => {
    const next = theme === "dark" ? "light" : "dark";
    playClickSound();

    if (document.startViewTransition) {
      document.startViewTransition(() => setTheme(next));
    } else {
      setTheme(next);
    }
  }, [theme, setTheme, playClickSound]);

  // "T" keyboard shortcut to toggle theme
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (
        e.key === "t" || e.key === "T"
      ) {
        // Ignore if typing in an input, textarea, or contenteditable
        const tag = e.target.tagName;
        if (tag === "INPUT" || tag === "TEXTAREA" || e.target.isContentEditable) return;
        // Ignore if command palette is open
        if (isCommandPaletteOpen) return;
        e.preventDefault();
        handleThemeToggle();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleThemeToggle, isCommandPaletteOpen]);

  const { children, ...customMeta } = props;

  const meta = {
    title: "Muhammad Yaqoob",
    description: `Full Stack Developer building clean, scalable web applications.`,
    image: "/static/opengraph.png",
    type: "website",
    siteName: "Muhammad Yaqoob",
    ...customMeta,
  };

  const moreLinks = [
    { href: "/blog", text: "Writing" },
    { href: "/resources", text: "Resources" },
    { href: "/snippets", text: "Snippets" },
  ];

  const fullTitle =
    meta.title === "Muhammad Yaqoob"
      ? meta.title
      : `${meta.title} | Muhammad Yaqoob`;

  return (
    <div className="bg-white dark:bg-[#000] min-h-screen text-gray-900 dark:text-gray-100 font-sans overflow-x-hidden">

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
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
      </Head>

      <CommandPalette 
        isOpen={isCommandPaletteOpen} 
        setIsOpen={setIsCommandPaletteOpen} 
      />

      <header className="sticky top-0 z-[150] w-full border-b border-gray-100 dark:border-zinc-800 bg-white/70 dark:bg-black/70 backdrop-blur-md">
        <nav className="mx-auto flex h-16 max-w-3xl items-center justify-between px-5">
          <NextLink href="/">
            <a className="font-mono text-xl font-black tracking-tighter text-gray-900 dark:text-white uppercase transition-opacity hover:opacity-80">
              MY
            </a>
          </NextLink>

          <div className="hidden md:flex items-center gap-8 h-full">
            <NavItem href="/" text="Home" router={router} />
            <NavItem href="/projects" text="Projects" router={router} />
            
            <div 
              className="relative h-full flex items-center"
              onMouseEnter={() => setIsMoreMenuOpen(true)}
              onMouseLeave={() => setIsMoreMenuOpen(false)}
            >
              <button 
                className="flex items-center gap-1.5 text-gray-500 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors text-sm font-medium h-full"
              >
                 <span>More</span>
                 <ChevronDown size={14} className={`mt-0.5 transition-transform duration-200 ${isMoreMenuOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {isMoreMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className="absolute top-full left-[-20%] w-40 pointer-events-auto"
                  >
                    <div className="bg-white dark:bg-zinc-900 border border-gray-100 dark:border-zinc-800 rounded-xl shadow-2xl overflow-hidden p-1 mt-1">
                      {moreLinks.map((link) => (
                          <NextLink href={link.href} key={link.href}>
                            <a className="block px-3 py-2 text-xs font-mono uppercase tracking-wide text-gray-500 dark:text-zinc-400 hover:bg-gray-50 dark:hover:bg-zinc-800 hover:text-black dark:hover:text-white rounded-lg transition-colors">
                                {link.text}
                            </a>
                          </NextLink>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-4">
             {/* Command Palette Trigger */}
             <button
               onClick={() => setIsCommandPaletteOpen(true)}
               className="group flex items-center gap-2 rounded-full border border-gray-100 dark:border-zinc-800 bg-gray-50/50 dark:bg-zinc-900/30 pl-3 pr-3 py-1.5 transition-all hover:border-gray-300 dark:hover:border-zinc-700"
             >
                <Search size={14} className="text-gray-400 dark:text-zinc-500" />
                <span className="text-xs font-medium text-gray-400 dark:text-zinc-500 md:hidden">Search</span>
                <div className="hidden md:flex items-center gap-1.5">
                   <span className="font-mono text-[10px] bg-gray-200/50 dark:bg-zinc-800 px-1.5 py-0.5 rounded text-gray-500 dark:text-zinc-500">Ctrl</span>
                   <span className="font-mono text-[10px] bg-gray-200/50 dark:bg-zinc-800 px-1.5 py-0.5 rounded text-gray-500 dark:text-zinc-500">K</span>
                </div>
             </button>

             <div className="h-4 w-px bg-gray-200 dark:bg-zinc-800 mx-1" />

             {/* Theme toggle with tooltip */}
             <div 
               className="relative"
               onMouseEnter={() => setShowThemeTooltip(true)}
               onMouseLeave={() => setShowThemeTooltip(false)}
             >
               <button
                 onClick={handleThemeToggle}
                 aria-label="Toggle theme"
                 className="p-2 text-gray-400 dark:text-zinc-500 hover:text-gray-900 dark:hover:text-white transition-colors rounded-lg hover:bg-gray-100 dark:hover:bg-zinc-800/60"
               >
                  {mounted && (theme === "dark" ? <Sun size={18} /> : <Moon size={18} />)}
               </button>
               <AnimatePresence>
                 {showThemeTooltip && (
                   <motion.div
                     initial={{ opacity: 0, y: 4 }}
                     animate={{ opacity: 1, y: 0 }}
                     exit={{ opacity: 0, y: 4 }}
                     transition={{ duration: 0.15 }}
                     className="absolute top-full left-1/2 -translate-x-1/2 mt-2 whitespace-nowrap pointer-events-none z-[200]"
                   >
                     <div className="bg-gray-900 dark:bg-zinc-100 text-white dark:text-zinc-900 text-[10px] font-mono px-2.5 py-1.5 rounded-lg shadow-lg flex items-center gap-1.5">
                       <span>Toggle theme</span>
                       <span className="px-1 py-px rounded bg-white/20 dark:bg-black/10 text-[9px] font-bold">T</span>
                     </div>
                   </motion.div>
                 )}
               </AnimatePresence>
             </div>
             
             <div className="relative md:hidden">
              <button
                  className={`p-2 rounded-xl transition-all ${mobileMenuOpen ? 'bg-gray-100 dark:bg-zinc-800 text-black dark:text-white' : 'text-gray-500 dark:text-zinc-400 hover:bg-gray-50 dark:hover:bg-zinc-900'}`}
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                  {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>

              <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        className="absolute top-full right-0 mt-2 w-48 z-[160] pointer-events-auto"
                    >
                        <div className="bg-white dark:bg-zinc-900 border border-gray-100 dark:border-zinc-800 rounded-2xl shadow-2xl overflow-hidden p-2 ring-1 ring-black/5">
                            <div className="flex flex-col gap-1">
                                <MobileNavItem href="/" text="Home" onClick={() => setMobileMenuOpen(false)} />
                                <MobileNavItem href="/projects" text="Projects" onClick={() => setMobileMenuOpen(false)} />
                                <div className="h-px bg-gray-100 dark:bg-zinc-800 my-1 mx-2" />
                                <MobileNavItem href="/blog" text="Writing" onClick={() => setMobileMenuOpen(false)} />
                                <MobileNavItem href="/resources" text="Resources" onClick={() => setMobileMenuOpen(false)} />
                                <MobileNavItem href="/snippets" text="Snippets" onClick={() => setMobileMenuOpen(false)} />
                            </div>
                        </div>
                    </motion.div>
                )}
              </AnimatePresence>
             </div>
          </div>
        </nav>
      </header>

      <main className="mx-auto w-full max-w-3xl px-5 py-8 md:py-12 min-h-[calc(100vh-64px)]">
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
            : "text-gray-600 dark:text-zinc-400 hover:text-black dark:hover:text-white"
        } transition-all text-sm font-medium h-full flex items-center`}
      >
        {text}
      </a>
    </NextLink>
  );
}

function MobileNavItem({ href, text, onClick }) {
  return (
    <NextLink href={href}>
      <a
        onClick={onClick}
        className="block px-3 py-2 text-sm font-mono uppercase tracking-wide text-gray-500 dark:text-zinc-400 hover:bg-gray-50 dark:hover:bg-zinc-800 hover:text-black dark:hover:text-white rounded-xl transition-colors"
      >
        {text}
      </a>
    </NextLink>
  );
}

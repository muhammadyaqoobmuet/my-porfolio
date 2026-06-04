import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Home, Book, Folder, Star, Sun, Moon, User, X } from "lucide-react";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";

const actions = [
  { id: "home", label: "Home", icon: <Home size={18} />, href: "/" },
  { id: "projects", label: "Projects", icon: <Folder size={18} />, href: "/projects" },
  { id: "blog", label: "Blogs", icon: <Book size={18} />, href: "/blog" },
  { id: "favs", label: "Favourites", icon: <Star size={18} />, href: "/resources" },
  { id: "theme", label: "Toggle theme", icon: <Sun size={18} />, shortcut: "T", isToggle: true },
  { id: "avatar", label: "Toggle avatar", icon: <User size={18} />, shortcut: "P" },
];

export default function CommandPalette({ isOpen, setIsOpen }) {
  const [query, setQuery] = useState("");
  const router = useRouter();
  const { theme, setTheme } = useTheme();

  const filteredActions = actions.filter((action) =>
    action.label.toLowerCase().includes(query.toLowerCase())
  );

  const handleAction = useCallback((action) => {
    if (action.href) {
      router.push(action.href);
      setIsOpen(false);
    } else if (action.id === "theme") {
      const next = theme === "dark" ? "light" : "dark";
      // Play click sound
      try {
        const audio = new Audio("/mp3Sounds/clickableSound.mp3");
        audio.volume = 0.5;
        audio.play().catch(() => {});
      } catch (_) {}
      if (document.startViewTransition) {
        document.startViewTransition(() => setTheme(next));
      } else {
        setTheme(next);
      }
      setIsOpen(false);
    }
  }, [router, setTheme, theme, setIsOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [setIsOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[200]"
          />

          {/* Modal Container */}
          <div className="fixed inset-0 z-[210] flex items-start justify-center pt-[15vh] px-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="w-full max-w-lg pointer-events-auto"
            >
            <div className="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-2xl shadow-2xl overflow-hidden ring-1 ring-black/5 dark:ring-white/5">
              {/* Search Header */}
              <div className="relative flex items-center px-4 py-4 border-b border-gray-100 dark:border-zinc-800">
                <Search className="text-gray-400 dark:text-zinc-500 mr-3" size={20} />
                <input
                  autoFocus
                  placeholder="Type a command or search..."
                  className="w-full bg-transparent outline-none text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-zinc-600 text-sm"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && filteredActions.length > 0) {
                      handleAction(filteredActions[0]);
                    }
                  }}
                />
                <button 
                   onClick={() => setIsOpen(false)}
                   className="p-1 rounded-md hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors"
                >
                   <X size={16} className="text-gray-400" />
                </button>
              </div>

              {/* Actions List */}
              <div className="max-h-96 overflow-y-auto p-2">
                 <div className="px-2 py-1.5 text-[10px] font-mono uppercase tracking-widest text-gray-400 dark:text-zinc-500">
                    Navigation
                 </div>
                 {filteredActions.map((action) => (
                    <button
                      key={action.id}
                      onClick={() => handleAction(action)}
                      className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-gray-50 dark:hover:bg-zinc-800/60 transition-colors group"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-gray-400 dark:text-zinc-500 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                           {action.icon}
                        </span>
                        <span className="text-sm font-medium text-gray-700 dark:text-zinc-300 group-hover:text-gray-900 dark:group-hover:text-white">
                           {action.label}
                        </span>
                      </div>
                      {action.shortcut && (
                         <span className="font-mono text-[10px] px-1.5 py-0.5 rounded border border-gray-200 dark:border-zinc-800 text-gray-400 dark:text-zinc-600">
                            {action.shortcut}
                         </span>
                      )}
                    </button>
                 ))}
              </div>

              {/* Footer */}
              <div className="px-4 py-3 bg-gray-50/50 dark:bg-zinc-900/50 border-t border-gray-100 dark:border-zinc-800 flex items-center justify-between">
                 <div className="flex items-center gap-2">
                    <span className="font-bold text-xs">MY</span>
                 </div>
                 <div className="flex items-center gap-4 text-[10px] font-mono text-gray-400 dark:text-zinc-500">
                    <div className="flex items-center gap-1">
                       Go to Page <span className="px-1 py-0.5 rounded bg-gray-200 dark:bg-zinc-800">↵</span>
                    </div>
                    <div className="flex items-center gap-1">
                       Exit <span className="px-1 py-0.5 rounded bg-gray-200 dark:bg-zinc-800">Esc</span>
                    </div>
                 </div>
              </div>
            </div>
          </motion.div>
        </div>
      </>
    )}
    </AnimatePresence>
  );
}

import Link from "next/link";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

function CrossMark() {
  return (
    <div className="relative size-3 flex items-center justify-center">
      <div className="absolute w-px h-full bg-gray-200 dark:bg-zinc-800" />
      <div className="absolute h-px w-full bg-gray-200 dark:bg-zinc-800" />
    </div>
  );
}

function HatchDivider() {
  return (
    <div
      className="h-6 w-full border-x border-gray-200 dark:border-zinc-800"
      style={{
        background:
          "repeating-linear-gradient(315deg, rgba(161,161,170,0.15) 0, rgba(161,161,170,0.15) 1px, transparent 0, transparent 50%) 0 0 / 10px 10px",
      }}
    />
  );
}

export default function Footer() {
  return (
    <footer className="mt-24 pb-12">
      {/* ── Connect Panel ── */}
      <section className="relative border-x border-t border-gray-100 dark:border-zinc-800 bg-gray-50/30 dark:bg-zinc-900/10">
        <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2"><CrossMark /></div>
        <div className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2"><CrossMark /></div>
        
        <div className="px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="font-mono text-xl font-bold text-gray-900 dark:text-white tracking-tight uppercase">Connect</h3>
            <p className="text-xs text-gray-500 font-mono mt-1">Found a bug or want to collaborate?</p>
          </div>
          
          <div className="flex items-center gap-4">
             <SocialIcon href="https://github.com/muhammadyaqoobmuet" icon={<Github size={18} />} />
             <SocialIcon href="https://x.com/jackub_halepoto" icon={<Twitter size={18} />} />
             <SocialIcon href="https://www.linkedin.com/in/muhammad-yaqoob-59971625b/" icon={<Linkedin size={18} />} />
             <SocialIcon href="mailto:yaqoobahmed45700@gmail.com" icon={<Mail size={18} />} />
          </div>
        </div>
      </section>

      <HatchDivider />

      {/* ── Main Footer Info ── */}
      <div className="relative border-x border-y border-gray-100 dark:border-zinc-800 py-12 px-6 grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
        <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2"><CrossMark /></div>
        <div className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2"><CrossMark /></div>
        <div className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2"><CrossMark /></div>
        <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2"><CrossMark /></div>

        {/* Brand */}
        <div className="flex flex-col gap-2">
          <Link href="/">
             <a className="font-mono text-2xl font-black tracking-tighter text-gray-900 dark:text-white uppercase transition-opacity hover:opacity-70">
               MY<span className="text-blue-500">.</span>ENGINEER
             </a>
          </Link>
          <p className="text-xs font-mono text-gray-400 dark:text-zinc-500 leading-relaxed max-w-[200px]">
             Built with precision using Next.js & Framer Motion. 
          </p>
        </div>

        {/* Navigation - Centered */}
        <div className="flex flex-col md:items-center gap-4">
           <h4 className="font-mono text-[10px] uppercase tracking-[0.3em] text-gray-400 dark:text-zinc-600 mb-2">Navigation</h4>
           <nav className="flex flex-col md:items-center gap-2 text-sm font-medium text-gray-600 dark:text-zinc-400">
             <Link href="/"><a className="hover:text-black dark:hover:text-white transition-colors">Home</a></Link>
             <Link href="/projects"><a className="hover:text-black dark:hover:text-white transition-colors">Projects</a></Link>
             <Link href="/blog"><a className="hover:text-black dark:hover:text-white transition-colors">Writing</a></Link>
             <Link href="/resources"><a className="hover:text-black dark:hover:text-white transition-colors">Resources</a></Link>
           </nav>
        </div>

        {/* Metadata - Right Aligned */}
        <div className="flex flex-col md:items-end gap-4">
           <h4 className="font-mono text-[10px] uppercase tracking-[0.3em] text-gray-400 dark:text-zinc-600 mb-2">System Status</h4>
           <div className="flex flex-col md:items-end gap-1 font-mono text-[10px] text-gray-500 dark:text-zinc-500">
             <span>LOCAL TIME: {new Date().toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' })} UTC+5</span>
             <span>STATUS: STABLE</span>
             <span className="mt-2 text-gray-400 dark:text-zinc-600 uppercase tracking-widest leading-loose">
               &copy; {new Date().getFullYear()} MUHAMMAD YAQOOB
             </span>
           </div>
        </div>
      </div>

      {/* ── Bottom Dot Grid ── */}
      <div className="relative border-x border-b border-gray-100 dark:border-zinc-800">
        <div className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2"><CrossMark /></div>
        <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2"><CrossMark /></div>
        
        <div 
          className="h-12 w-full opacity-20" 
          style={{ 
            backgroundImage: 'radial-gradient(circle, #a1a1aa 0.5px, transparent 0.5px)', 
            backgroundSize: '16px 16px'
          }} 
        />
      </div>
    </footer>
  );
}

function SocialIcon({ href, icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-2.5 rounded-xl border border-gray-100 dark:border-zinc-800 hover:border-gray-300 dark:hover:border-zinc-600 bg-white dark:bg-zinc-900 transition-all hover:scale-110 shadow-sm text-gray-600 dark:text-zinc-400 hover:text-black dark:hover:text-white"
    >
      {icon}
    </a>
  );
}

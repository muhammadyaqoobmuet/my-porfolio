import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaWhatsapp } from "react-icons/fa";

const SocialLink = ({ href, icon: Icon, label, color }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-3 px-5 py-3 rounded-full bg-zinc-50 dark:bg-zinc-900/50 hover:bg-white dark:hover:bg-zinc-800 transition-all duration-300 border border-zinc-100 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-600 hover:shadow-sm group"
  >
    <Icon className={`w-5 h-5 ${color} transition-transform group-hover:scale-110`} />
    <span className="text-sm font-medium text-zinc-600 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-100">{label}</span>
  </a>
);

const FooterLink = ({ href, label }) => (
    <Link href={href}>
        <a className="text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors text-[15px] font-medium tracking-tight hover:underline underline-offset-4 decoration-zinc-300 dark:decoration-zinc-700">
            {label}
        </a>
    </Link>
);

export default function Footer() {
  return (
    <footer className="w-full max-w-6xl mx-auto pt-10 md:pt-24 pb-10 md:pb-16 px-6 md:px-0 mt-8">

        {/* Top: Connect w ith Me (Horizontal Row) */}
        <div className="w-full mb-10 md:mb-20 flex flex-col items-start">
            <h3 className="font-serif text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-8 tracking-tight">
                Connect with Me
            </h3>
            <div className="flex flex-wrap gap-4">
                <SocialLink href="https://github.com/muhammadyaqoobmuet" icon={FaGithub} label="GitHub" color="text-zinc-900 dark:text-white" />
                <SocialLink href="https://www.linkedin.com/in/muhammad-yaqoob-59971625b/" icon={FaLinkedin} label="LinkedIn" color="text-blue-600" />
                <SocialLink href="https://twitter.com/jackub_halepoto" icon={FaTwitter} label="Twitter" color="text-sky-500" />
                <SocialLink href="https://wa.me/923483314202" icon={FaWhatsapp} label="WhatsApp" color="text-green-500" />
                <SocialLink href="mailto:yaqoobahmed45700@gmail.com" icon={FaEnvelope} label="Email" color="text-red-500" />
            </div>
        </div>

        <div className="border-t border-zinc-100 dark:border-zinc-800 pt-10 md:pt-16 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-0">

            {/* Column 1: Resources */}
            <div className="flex flex-col gap-8">
                 <div>
                     <h4 className="font-bold text-lg text-zinc-900 dark:text-zinc-100 mb-6 tracking-tight">
                        Resources
                    </h4>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-3 gap-x-12 max-w-2xl">
                        <FooterLink href="/snippets" label="Snippets" />
                        <FooterLink href="/resources" label="Resources" />
                        <FooterLink href="/demos" label="Demos" />
                        <FooterLink href="/design-inspiration" label="Inspiration" />
                    </div>
                 </div>
            </div>

            {/* Column 2: Copyright & Quick Links */}
            <div className="flex flex-col md:items-end justify-between gap-8 h-full">
                 <div className="flex flex-col md:text-right">
                    <h3 className="font-serif text-xl font-bold text-zinc-900 dark:text-zinc-100 tracking-tight">
                        Muhammad Yaqoob
                    </h3>
                    <p className="text-zinc-500 dark:text-zinc-400 text-sm mt-2 font-medium">
                        Full-Stack Developer
                    </p>
                 </div>

                 <div className="flex flex-wrap md:justify-end gap-x-8 gap-y-2 text-sm font-medium text-zinc-500 dark:text-zinc-400">
                    <Link href="/"><a className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">Home</a></Link>
                    <Link href="/projects"><a className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">Projects</a></Link>
                    <Link href="/blog"><a className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">Blog</a></Link>
                 </div>

                 <p className="text-zinc-400 dark:text-zinc-600 text-xs md:text-right mt-auto tracking-wide uppercase font-semibold">
                    © {new Date().getFullYear()} Muhammad Yaqoob
                </p>
            </div>

        </div>
    </footer>
  );
}

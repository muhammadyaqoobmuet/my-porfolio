import Link from "next/link";
import NowPlaying from "@/components/NowPlaying";

const ExternalLink = ({ href, children }) => (
  <a
    className="text-gray-500 hover:text-gray-600 transition"
    target="_blank"
    rel="noopener noreferrer"
    href={href}
  >
    {children}
  </a>
);

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center items-start max-w-2xl mx-auto w-full mb-8">
      <NowPlaying />
      <hr className="w-full border-1 border-gray-200 dark:border-gray-800 mb-8" />
      <div className="w-full max-w-2xl grid grid-cols-1 gap-4 pb-16 sm:grid-cols-3">
        <div className="flex flex-col space-y-4">
          <Link href="/">
            <a className="text-gray-500 hover:text-gray-600 transition">Home</a>
          </Link>
          <Link href="/blog">
            <a className="text-gray-500 hover:text-gray-600 transition">Blog</a>
          </Link>
          <Link href="/dashboard">
            <a className="text-gray-500 hover:text-gray-600 transition">
              Dashboard
            </a>
          </Link>
          <Link href="/projects">
            <a className="text-gray-500 hover:text-gray-600 transition">
              Projects
            </a>
          </Link>
          <Link href="/links">
            <a className="text-gray-500 hover:text-gray-600 transition">
              Links
            </a>
          </Link>
        </div>
        <div className="flex flex-col space-y-4">
          <ExternalLink href="https://github.com/muhammadyaqoobmuet">
            GitHub
          </ExternalLink>
          <ExternalLink href="https://www.linkedin.com/in/muhammad-yaqoob-59971625b/">
            LinkedIn
          </ExternalLink>
          <ExternalLink href="https://twitter.com/jackub_halepoto">
            Twitter
          </ExternalLink>
          <ExternalLink href="https://www.instagram.com/yaqoob_halepoto">
            Instagram
          </ExternalLink>
          <Link href="/freelance">
            <a className="text-gray-500 hover:text-gray-600 transition">
              Freelancing
            </a>
          </Link>
          {/* <ExternalLink href="https://www.youtube.com/channel/UCZMli3czZnd1uoc1ShTouQw">
            YouTube
          </ExternalLink> */}
        </div>
        <div className="flex flex-col space-y-4">
          <Link href="/snippets">
            <a className="text-gray-500 hover:text-gray-600 transition">
              Snippets
            </a>
          </Link>

          <Link href="/resources">
            <a className="text-gray-500 hover:text-gray-600 transition">
              Resources
            </a>
          </Link>
          <Link href="/demos">
            <a className="text-gray-500 hover:text-gray-600 transition">
              Live Demos
            </a>
          </Link>
          <Link href="/freecodecamp">
            <a className="text-gray-500 hover:text-gray-600 transition">
              freeCodeCamp
            </a>
          </Link>
          <Link href="/boxshadows">
            <a className="text-gray-500 hover:text-gray-600 transition">
              Box Shadows
            </a>
          </Link>
          <Link href="/design-inspiration">
            <a className="text-gray-500 hover:text-gray-600 transition">
              Design Inspiration
            </a>
          </Link>
        </div>
      </div>
      <p className="flex flex-row text-gray-400 items-center">
        Find me on
        <a href="https://twitter.com/jackub_halepoto" target="__blank">
          {/* <img src="/logos/tailwind.svg" className="h-6 w-6 mx-1" /> */}
          <svg viewBox="0 0 24 24" aria-hidden="true" class="h-4 w-4 mx-1">
            <g>
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
            </g>
          </svg>
        </a>{" "}
      </p>
      <p className="flex flex-row text-gray-400 items-center mt-2">
        Portfolio inspired by OG{" "}
        <a href="https://leerob.io" className="ml-1" target="__blank">
          Lee Robk👑
        </a>
      </p>
    </footer>
  );
}

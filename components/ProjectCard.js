import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { FileTextIcon, ServerIcon } from "lucide-react";
import { MdNetworkWifi2Bar } from "react-icons/md";

export default function ProjectCard({ title, description, href, icon, tags }) {
  // const tags = ["GitHub", "React", "JamStack"];
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function onMouseMove({ currentTarget, clientX, clientY }) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }
  return (
    <a
      className="group mb-4 hover:shadow-lg rounded-xl  transition duration-200 relative border border-slate-200 dark:border-slate-700 w-full"
      href={href}
      aria-label={title}
      target="_blank"
      rel="noopener noreferrer"
      onMouseMove={onMouseMove}
    >
      <HoverPattern mouseX={mouseX} mouseY={mouseY} />

      <div className="relative h-full">
        <span className="absolute w-[40%] -bottom-px right-px h-px bg-gradient-to-r from-blue-500/0 via-blue-500/40 to-blue-500/0 dark:from-blue-400/0 dark:via-blue-400/40 dark:to-blue-400/0"></span>
        <span className="absolute w-px -left-px top-[50%] h-[40%] bg-gradient-to-b from-blue-500/0 via-blue-500/40 to-blue-500/0 dark:from-blue-400/0 dark:via-blue-400/40 dark:to-blue-400/0"></span>

        <div className="  flex flex-col items-start  dark:border-gray-800 rounded p-4 relative">
          {/* */}

          <div className="my-4">
            {icon === "zhurnuty" && (
              <FileTextIcon className="w-8 h-8" />
            )}
            {icon === "tellme" && (
              <div className="h-8 w-8 ml-2 mr-4">
                {/*  
              className="h-8 w-8 min-w-lg text-gray-900 dark:text-gray-100"
            */}

                <svg
                  width="260"
                  height="260"
                  viewBox="0 0 260 260"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 min-w-lg text-gray-900 dark:text-gray-100 "
                >
                  <rect width="260" height="260" rx="11" fill="#FBBF24" />
                  <path
                    d="M76.3492 60.7143C76.3492 57.9529 78.5878 55.7143 81.3492 55.7143H260V107.302H81.3492C78.5878 107.302 76.3492 105.063 76.3492 102.302V60.7143Z"
                    fill="white"
                  />
                  <rect
                    x="156.825"
                    y="260"
                    width="156.825"
                    height="51.5873"
                    transform="rotate(-90 156.825 260)"
                    fill="white"
                  />
                </svg>
              </div>
            )}
            {icon === "campushub" && (
              <div className="h-8 w-8 ml-2 mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  />
                </svg>
              </div>
            )}
            {icon === "shopsphereapi" && (
              // <svg
              //   width="204"
              //   height="20"
              //   viewBox="0 0 204 99"
              //   fill="none"
              //   className="h-10 w-10 mr-4  min-w-lg flex-shrink-0"
              //   xmlns="http://www.w3.org/2000/svg"
              // >
              //   <rect width="204" height="99" rx="21" fill="none" />
              //   <path
              //     d="M15.2109 55.7564L44.2109 68.5263V60.1847L24.6236 52.3168V51.946L44.2109 44.0781V35.7365L15.2109 48.5064V55.7564ZM156.313 24.8409H148.754L135.16 75.3438H142.719L156.313 24.8409ZM191.25 55.7564V48.5064L162.25 35.7365V44.0781L181.837 51.946V52.3168L162.25 60.1847V68.5263L191.25 55.7564Z"
              //     fill="#007EF3"
              //   />
              //   <path
              //     d="M60.3587 69L63.4893 59.3814H78.7102L81.8409 69H91.3977L76.8565 26.8182H65.3636L50.8018 69H60.3587ZM65.755 52.4197L70.9453 36.4574H71.2749L76.4652 52.4197H65.755ZM131.71 41.5859C130.536 31.8438 123.163 26.2415 113.4 26.2415C102.257 26.2415 93.7509 34.1094 93.7509 47.9091C93.7509 61.6676 102.113 69.5767 113.4 69.5767C124.213 69.5767 130.742 62.3885 131.71 54.6236L122.689 54.5824C121.845 59.093 118.302 61.6882 113.544 61.6882C107.139 61.6882 102.793 56.9304 102.793 47.9091C102.793 39.1349 107.077 34.13 113.606 34.13C118.487 34.13 122.009 36.9517 122.689 41.5859H131.71Z"
              //     fill="#000000"
              //   />
              // </svg>

              <ServerIcon className="w-8 h-8" />
            )}
            {icon === "masterrestapis" && (
              <div className="h-8 w-8 ml-2 mr-4">
                <MdNetworkWifi2Bar className="w-8 h-8" />
              </div>
            )}
            {icon === "gba" && (
              <div className="h-8 w-8 ml-2 mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 min-w-lg text-gray-900 dark:text-gray-100"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  />
                </svg>
              </div>
            )}
            {icon === "devmedium" && (
              <div className="h-8 w-8 ml-2 mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 min-w-lg text-gray-900 dark:text-gray-100"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                  />
                </svg>
              </div>
            )}
            {icon === "github" && (
              <div className="h-8 w-8 ml-2 mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 min-w-lg text-gray-900 dark:text-gray-100"
                  fill="none"
                  viewBox="0 0 20 20"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  />
                </svg>
              </div>
            )}
            {icon === "ipl" && (
              <div className="h-8 w-8 ml-2 mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 min-w-lg text-gray-900 dark:text-gray-100"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  />
                </svg>
              </div>
            )}
            {icon === "music" && (
              <div className="h-8 w-8 ml-2 mr-4">
                <span className="sr-only">Music Streaming Application</span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 min-w-lg text-gray-900 dark:text-gray-100"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
                  />
                </svg>
              </div>
            )}
            {icon == "placeholdertech" && (
              <div className="h-8 w-8 ml-2 mr-4">
                <span className="sr-only">PlaceholderTech</span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 min-w-lg text-gray-900 dark:text-gray-100"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  />
                </svg>
              </div>
            )}
            {icon == "play" && (
              <div className="h-8 w-8 ml-2 mr-4">
                <span className="sr-only">Play Placeholdertech</span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 min-w-lg text-gray-900 dark:text-gray-100"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  />
                </svg>
              </div>
            )}
            {icon == "fastfeedback" && (
              <div className="h-8 w-8 ml-2 mr-4">
                <span className="sr-only">Feedmeback</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 min-w-sm text-gray-900 dark:text-gray-100"
                  viewBox="0 0 46 32"
                >
                  <path
                    d="M19.557.113C11.34.32 9.117 8.757 9.03 12.95c1.643-2.67 4.62-3.08 6.931-3.08 2.825.085 10.27.205 17.458 0C40.61 9.663 44.802 3.28 46 .112c-5.391-.085-18.228-.205-26.443 0zM14.422 14.234C3.332 14.234-.468 24.76.045 31.948c3.594-6.418 7.617-7.53 9.243-7.445h6.675c5.956 0 11.039-6.846 12.836-10.27H14.422z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            )}

            {icon == "vscode" && (
              <div className="h-8 w-8 ml-2 mr-4">
                <span className="sr-only">Vscode Resume</span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 min-w-sm text-gray-900 dark:text-gray-100"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
                </svg>
              </div>
            )}
            {icon === "code" && (
              <div className="h-8 w-8 ml-2 mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 min-w-sm text-gray-900 dark:text-gray-100"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
            )}
            {icon == "more" && (
              <div className="h-8 w-8 ml-2 mr-4">
                <span className="sr-only">Vscode Resume</span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </div>
            )}
          </div>
          <div>
            {icon == "more" && (
              <>
                <h4 className="text-lg font-bold tracking-tight text-gray-400 dark:text-gray-100">
                  {title}
                </h4>
                <p className="leading-7 text-gray-500 dark:text-gray-300">
                  {description}
                </p>
              </>
            )}

            {icon != "more" && (
              <>
                <h4 className="text-xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
                  {title}
                </h4>
                <p className="leading-6 pt-4 text-gray-700 dark:text-gray-300">
                  {description}
                </p>
                <div className="pt-4 flex md:flex-row flex-wrap">
                  {tags?.map((tag, idx) => (
                    <p
                      key={idx}
                      className={`leading-5 mb-2 dark:border dark:border-zinc-700 text-gray-700 dark:text-gray-300 dark:bg-transparent rounded-md text-xs italic bg-gray-50  mr-2 px-1`}
                    >
                      {tag}
                    </p>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </a>
  );
}

function HoverPattern({ mouseX, mouseY, ...gridProps }) {
  let maskImage = useMotionTemplate`radial-gradient(300px at ${mouseX}px ${mouseY}px, white, transparent)`;
  let style = { maskImage, WebkitMaskImage: maskImage };

  return (
    <div className="pointer-events-none">
      <motion.div
        className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-100/50 to-teal-100/50 opacity-0 transition duration-300 group-hover:opacity-100 dark:from-[#202D2E] dark:to-[#303428]"
        style={style}
      />
      <motion.div
        className="absolute inset-0 rounded-xl opacity-0 mix-blend-overlay transition duration-300 group-hover:opacity-100"
        style={style}
      ></motion.div>
    </div>
  );
}

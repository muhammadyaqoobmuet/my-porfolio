import { Fragment, useState } from "react";
import Image from "next/image";
import { ArrowRight, Globe, Github, X } from "lucide-react";
import { Dialog, Transition } from "@headlessui/react";
import { getTechDetails } from "@/lib/tech-icons";
import { clsx } from "clsx";


export default function ProjectCard({
  title,
  description,
  href,
  githubUrl,
  tags,
  imgUrl,
  fullDescription,
  priority = false,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <div className="group flex flex-col bg-[#111111] dark:bg-[#111111] rounded-3xl overflow-hidden border border-zinc-800 hover:border-zinc-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl">
        {/* Image Section */}
        {imgUrl && (
          <div className="relative h-64 w-full overflow-hidden bg-zinc-800">
            <Image
              src={imgUrl}
              alt={title}
              layout="fill"
              objectFit="cover"
              className={clsx(
                "transition-all duration-700 ease-in-out",
                isLoading ? "scale-110 blur-xl grayscale" : "scale-100 blur-0 grayscale-0 group-hover:scale-105"
              )}
              onLoadingComplete={() => setIsLoading(false)}
              priority={priority}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              quality={85}
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent opacity-80" />
          </div>
        )}

        {/* Content Section */}
        <div className="flex flex-col flex-grow p-6 pt-4">
          {/* Microservices Badge Area - Fixed height to ensure alignment */}
          <div className="h-7 mb-4">
            {tags?.includes("Microservices") ? (
              <span className="inline-flex items-center px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-[10px] font-bold text-blue-400 uppercase tracking-wider">
                Microservices
              </span>
            ) : null}
          </div>

          {/* Header Area */}
          <div className="flex justify-between items-start mb-3 min-h-[64px]">
            <h3 className="text-2xl font-semibold text-white tracking-tight leading-tight pt-1">
              {title}
            </h3>
            <div className="flex gap-2">
              {href && (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-white transition-colors p-2 hover:bg-zinc-800 rounded-full"
                >
                  <Globe className="w-5 h-5" />
                </a>
              )}
              {githubUrl && (
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-white transition-colors p-2 hover:bg-zinc-800 rounded-full"
                  aria-label="GitHub Repo"
                >
                  <Github className="w-5 h-5" />
                </a>
              )}
              {!githubUrl && (
                <div className="text-zinc-600 p-2" aria-label="Private Repo">
                  <Github className="w-5 h-5" />
                </div>
              )}
            </div>
          </div>

          {/* Description - Fixed height for vertical alignment */}
          <div className="min-h-[72px] mb-6">
            <p className="text-zinc-400 text-[15px] leading-relaxed line-clamp-3">
              {description}
            </p>
          </div>

          {/* Technologies - Icons Only */}
          <div className="mt-auto">
            <div className="flex flex-wrap gap-3">
              {tags?.map((tag) => {
                const { icon: Icon, image, color, name } = getTechDetails(tag);

                if (name === "Microservices") return null;

                if (image) {
                  return (
                    <div
                      key={tag}
                      className="rounded-full p-2 mb-1 relative w-9 h-9 flex items-center justify-center"
                      title={name}
                    >
                       <Image
                          src={image}
                          alt={name}
                          width={20}
                          height={20}
                          className="object-contain"
                       />
                    </div>
                  );
                }

                if (!Icon) return null;
                return (
                  <div
                    key={tag}
                    className="rounded-full  p-2"
                    title={name}
                  >
                    <Icon className={`w-5 h-5 ${color}`} />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Footer: Status + Link */}
          <div className="mt-auto pt-4 border-t border-zinc-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-medium text-zinc-400">
                All Systems Operational
              </span>
            </div>

            {fullDescription ? (
              <button
                onClick={() => setIsOpen(true)}
                className="flex items-center gap-1 text-sm font-medium text-zinc-400 hover:text-white transition-colors group-hover:translate-x-1 duration-300"
              >
                View Details <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
                href && (
                    <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-sm font-medium text-zinc-400 hover:text-white transition-colors group-hover:translate-x-1 duration-300"
                    >
                        View Project <ArrowRight className="w-4 h-4" />
                    </a>
                )
            )}
          </div>
        </div>
      </div>

      {/* Modal for Full Description */}
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={() => setIsOpen(false)}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/80 backdrop-blur-sm" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-3xl transform overflow-hidden rounded-3xl bg-[#111111] border border-zinc-800 p-8 text-left align-middle shadow-xl transition-all">
                  <div className="flex justify-between items-center mb-6">
                    <Dialog.Title
                      as="h3"
                      className="text-3xl font-bold text-white tracking-tight"
                    >
                      {title}
                    </Dialog.Title>
                    <button
                      onClick={() => setIsOpen(false)}
                      className="p-2 hover:bg-zinc-800 rounded-full text-zinc-400 hover:text-white transition-colors"
                    >
                      <X className="w-6 h-6" />
                    </button>
                  </div>

                  <div className="mt-4 space-y-6">
                    {imgUrl && (
                        <div className="relative h-64 w-full rounded-2xl overflow-hidden border border-zinc-800">
                            <Image
                                src={imgUrl}
                                alt={title}
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>
                    )}

                    <div className="prose prose-invert max-w-none">
                      <div className="grid grid-cols-1 gap-4 text-zinc-300 leading-relaxed whitespace-pre-wrap">
                        {fullDescription}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-4 pt-6 border-t border-zinc-800">
                        {href && (
                            <a
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full font-bold hover:bg-zinc-200 transition-colors"
                            >
                                <Globe className="w-5 h-5" /> Visit Website
                            </a>
                        )}
                        {githubUrl && (
                            <a
                                href={githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-6 py-3 bg-zinc-800 text-white rounded-full font-bold hover:bg-zinc-700 transition-colors"
                            >
                                <Github className="w-5 h-5" /> View Source
                            </a>
                        )}
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

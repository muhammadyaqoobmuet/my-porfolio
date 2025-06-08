import Container from "@/components/Container";
import { FreelanceCard } from "@/components/FreelanceCard";
import Link from "next/link";

export default function Freelance() {
  return (
    <Container
      title="Freelancing – Muhammad Yaqoob"
      description="Freelance projects and SaaS application that I've developed."
    >
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-4 w-full">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Freelancing
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-10 hidden md:block">
          I love building products and web apps for humans. 👑 <br />
          Most of my projects come from my website. However, I'm also a Top
          Rated Freelancer on{" "}
          <a
            className="font-bold text-[#15A800]"
            href="https://www.upwork.com/freelancers/~014a5c558658a1f530"
          >
            Upwork
          </a>{" "}

          .
        </p>
        <h2 className="font-bold text-2xl md:text-3xl tracking-tight mb-6 text-black dark:text-white">
          Featured Projects
        </h2>

        <FreelanceCard
          href={`https://tellme-eta.vercel.app/`}
          techStack={["Next.js", "TailwindCSS", "React", , "Vercel"]}
          title="TellMe"
          image={`/freelance/tellme.png`}
          descriptions={[
            "a platform for getting links and reciving anonymous messages",

          ]}
        />
        <FreelanceCard
          href={`https://zhrnuty.vercel.app/`}
          techStack={[
            "Next.js",
            "TailwindCSS",
            "React",
            "Server Components",
            "Vercel",
          ]}
          title="Zhrnuty Ai PDF Summarizer"
          image={`/freelance/zhrnuty.png`}
          descriptions={[
            "Created the to transform pdf into consie reel summary .",
            "Used the legendary useGravity SaaS boilerplate to kickstart the project.",
          ]}
        />
        <FreelanceCard
          href={`https://myapp-campushub.vercel.app/`}
          image={`/freelance/campushub.png`}
          techStack={[
            "Next.js",
            "TailwindCSS",
            "React",
            "React Qurey"
          ]}
          title="CampusHub"
          descriptions={[
            "Complete website for sharing resources within campus with admin dashboard",
            "used postgre sql with docker and api monitor to avoid api sleep",
          ]}
        />

        <a
          href="https://www.upwork.com/freelancers/~014a5c558658a1f530"
          target="__blank"
          className="text-gray-500 dark:text-gray-300  rounded-md flex flex-row space-x-2 items-center mb-10"
        >
          <p>See all of my freelance projects</p>
          <svg
            className="h-8 w-8 dark:text-white text-gray-500 transform rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M7 16l-4-4m0 0l4-4m-4 4h18"
            />
          </svg>
        </a>

        <h2 className="font-bold text-2xl md:text-3xl tracking-tight mb-6 mt-6 text-black dark:text-white">
          Featured SaaS Applications
        </h2>

        <FreelanceCard
          href={`https://myapp-campushub.vercel.app/`}
          techStack={["Next.js", "TailwindCSS", "React", "MongoDB", "Vercel"]}
          title="CampusHub"
          image={`/freelance/campushub.png`}
          descriptions={[
            "Complete website for sharing resources within campus with admin dashboard",
            "used postgre sql with docker and api monitor to avoid api sleep",
            " Accomodates 150+ production ready components ready to be embedded.",
          ]}
        />


        <Link href="/projects">
          <a className="text-gray-500 dark:text-gray-300  rounded-md flex flex-row space-x-2 items-center mb-10">
            <p>See all of my Projects</p>
            <svg
              className="h-8 w-8 dark:text-white text-gray-500 transform rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M7 16l-4-4m0 0l4-4m-4 4h18"
              />
            </svg>
          </a>
        </Link>
      </div>
    </Container>
  );
}

import Head from 'next/head';
import Container from '@/components/Container';

export default function AboutYaqoobHalepoto() {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Yaqoob Halepoto",
        "alternateName": "Muhammad Yaqoob Halepoto",
        "jobTitle": "Software Engineer",
        "url": "https://www.yaqoobhalepoto.engineer/",
        "image": "https://www.yaqoobhalepoto.engineer/_next/image?url=%2Fdevimage.png&w=1920&q=75",
        "sameAs": [
            "https://github.com/muhammadyaqoobmuet",
            "https://www.linkedin.com/in/muhammad-yaqoob-59971625b/",
            "https://x.com/jackub_halepoto"
        ],
        "description": "Yaqoob Halepoto is a Software Engineer passionate about building modern web applications and APIs using React, Next.js, Express, and MongoDB. Specializing in full-stack development with a focus on clean architecture and user experience.",
        "knowsAbout": [
            "React",
            "Next.js",
            "JavaScript",
            "TypeScript",
            "Node.js",
            "Express.js",
            "MongoDB",
            "Redis",
            "GraphQL",
            "Docker",
            "Microservices",
            "Full Stack Development",
            "API Development",
            "Authentication Systems"
        ],
        "hasOccupation": {
            "@type": "Occupation",
            "name": "Software Engineer",
            "occupationalCategory": "Software Development",
            "skills": "React, Next.js, Express, MongoDB, Redis, GraphQL, Docker, Microservices, JavaScript, TypeScript"
        }
    };

    return (
        <Container>
            <Head>
                <title>Who is Yaqoob Halepoto? | Software Engineer Portfolio</title>
                <meta
                    name="description"
                    content="Who is Yaqoob Halepoto? Learn about Yaqoob Halepoto, a Software Engineer specializing in React, Next.js, Express, and MongoDB. Discover his background, skills, and projects."
                />
                <meta name="keywords" content="Yaqoob Halepoto, Muhammad Yaqoob Halepoto, Software Engineer, React Developer, Next.js Developer, Full Stack Developer, GraphQL Developer, Docker, Redis, Microservices, JavaScript, TypeScript" />
                <meta property="og:title" content="Who is Yaqoob Halepoto? | Software Engineer Portfolio" />
                <meta property="og:description" content="Learn about Yaqoob Halepoto, a Software Engineer specializing in React, Next.js, Express, and MongoDB." />
                <meta property="og:image" content="https://muhammadyaqoobmuet.vercel.app/devimage.png" />
                <meta property="og:url" content="https://muhammadyaqoobmuet.vercel.app/about-yaqoob-halepoto" />
                <meta property="og:type" content="profile" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@jackub_halepoto" />
                <meta name="twitter:creator" content="@jackub_halepoto" />
                <link rel="canonical" href="https://muhammadyaqoobmuet.vercel.app/about-yaqoob-halepoto" />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
                />
            </Head>

            <div className="max-w-4xl mx-auto py-8 px-4">
                {/* Main Heading */}
                <h1 className="text-4xl md:text-5xl font-bold text-custom-black dark:text-white mb-8 font-geist">
                    Who is Yaqoob Halepoto?
                </h1>

                {/* Introduction */}
                <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
                    <p className="text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed">
                        Yaqoob Halepoto (Muhammad Yaqoob Halepoto) is a passionate <strong>Software Engineer</strong> who specializes in building modern, scalable web applications and APIs. With expertise in <strong>React</strong>, <strong>Next.js</strong>, <strong>Express</strong>, <strong>MongoDB</strong>, <strong>Redis</strong>, <strong>GraphQL</strong>, and <strong>Docker</strong>, Yaqoob creates full-stack solutions that prioritize clean architecture, optimal user experience, and robust authentication systems. His experience with <strong>microservices architecture</strong> enables him to build scalable, maintainable applications.
                    </p>
                </div>

                {/* Background Section */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-custom-black dark:text-white mb-6 font-geist">
                        Background
                    </h2>
                    <div className="text-zinc-700 dark:text-zinc-300 space-y-4">
                        <p>
                            Yaqoob Halepoto has established himself as a skilled full-stack developer with a strong foundation in modern web technologies. His journey in software engineering is marked by a commitment to building applications that solve real-world problems and enhance user experiences.
                        </p>
                        <p>
                            With hands-on experience in projects like <strong>Zhrnuty</strong> (AI PDF Summarizer), <strong>TellMe</strong>, and <strong>CampusHub</strong>, Yaqoob has demonstrated his ability to create innovative solutions that have helped over 200+ users. His work has been recognized in hackathons, including ranking <strong>17th out of 1000+ teams</strong> at Hack for Humanity 2025.
                        </p>
                        <p>
                            Yaqoob's expertise extends to authentication systems, having worked extensively with <strong>Clerk</strong>, <strong>NextAuth</strong>, and <strong>JWT</strong> to build secure and seamless user authentication experiences. He also has experience with <strong>Redis</strong> for caching and session management, <strong>GraphQL</strong> for efficient data fetching, and <strong>Docker</strong> for containerization and deployment. His knowledge of <strong>microservices architecture</strong> allows him to design and implement scalable, distributed systems.
                        </p>
                    </div>
                </section>

                {/* Skills Section */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-custom-black dark:text-white mb-6 font-geist">
                        Technical Skills
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <h3 className="text-xl font-semibold text-custom-black dark:text-white mb-4">Frontend Technologies</h3>
                            <ul className="space-y-2 text-zinc-700 dark:text-zinc-300">
                                <li>• React.js & React Hooks</li>
                                <li>• Next.js 15 (App Router & Pages Router)</li>
                                <li>• TypeScript & JavaScript (ES6+)</li>
                                <li>• Tailwind CSS & CSS3</li>
                                <li>• Framer Motion (Animations)</li>
                                <li>• Responsive Web Design</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-custom-black dark:text-white mb-4">Backend & Database</h3>
                            <ul className="space-y-2 text-zinc-700 dark:text-zinc-300">
                                <li>• Node.js & Express.js</li>
                                <li>• MongoDB & Mongoose ODM</li>
                                <li>• Redis (Caching & Session Management)</li>
                                <li>• GraphQL API Development</li>
                                <li>• RESTful API Development</li>
                                <li>• Authentication Systems (JWT, OAuth)</li>
                                <li>• Clerk & NextAuth Integration</li>
                                <li>• Database Design & Optimization</li>
                            </ul>
                        </div>
                    </div>
                    <div className="mt-8">
                        <h3 className="text-xl font-semibold text-custom-black dark:text-white mb-4">DevOps & Architecture</h3>
                        <ul className="grid md:grid-cols-3 gap-2 text-zinc-700 dark:text-zinc-300">
                            <li>• Docker & Containerization</li>
                            <li>• Microservices Architecture</li>
                            <li>• Vercel Deployment</li>
                            <li>• Git & GitHub</li>
                            <li>• API Integration</li>
                            <li>• Performance Optimization</li>
                        </ul>
                    </div>
                    <div className="mt-8">
                        <h3 className="text-xl font-semibold text-custom-black dark:text-white mb-4">AI & Additional Technologies</h3>
                        <ul className="grid md:grid-cols-3 gap-2 text-zinc-700 dark:text-zinc-300">
                            <li>• Langchain</li>
                            <li>• Gemini AI</li>
                            <li>• Machine Learning Integration</li>
                            <li>• WebSocket Communication</li>
                            <li>• Real-time Applications</li>
                            <li>• Cloud Services</li>
                        </ul>
                    </div>
                </section>

                {/* Projects Highlight */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-custom-black dark:text-white mb-6 font-geist">
                        Notable Projects
                    </h2>
                    <div className="space-y-6">
                        <div className="border border-zinc-200 dark:border-zinc-700 rounded-lg p-6">
                            <h3 className="text-xl font-semibold text-custom-black dark:text-white mb-2">Zhrnuty - AI PDF Summarizer</h3>
                            <p className="text-zinc-700 dark:text-zinc-300 mb-4">
                                An intelligent PDF summarization tool that helps users quickly extract key insights from documents using AI technology. Built with Next.js and Langchain for seamless document processing.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">Next.js</span>
                                <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm">AI Integration</span>
                                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm">Langchain</span>
                                <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 rounded-full text-sm">Gemini AI</span>
                            </div>
                            <div className="flex flex-wrap gap-3">
                                <a
                                    href="https://zhrnuty.vercel.app/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm font-medium"
                                >
                                    🚀 Live Demo
                                </a>
                                <a
                                    href="https://github.com/muhammadyaqoobmuet"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center px-4 py-2 bg-zinc-600 text-white rounded-lg hover:bg-zinc-700 transition-colors duration-200 text-sm font-medium"
                                >
                                    📂 Source Code
                                </a>
                            </div>
                        </div>

                        <div className="border border-zinc-200 dark:border-zinc-700 rounded-lg p-6">
                            <h3 className="text-xl font-semibold text-custom-black dark:text-white mb-2">CampusHub - Resource Share Platform For Campus</h3>
                            <p className="text-zinc-700 dark:text-zinc-300 mb-4">
                                A comprehensive campus management solution featured on Devpost, designed to streamline university operations and student experiences. Ranked 17th out of 1000+ teams at Hack for Humanity 2025.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">React</span>
                                <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 rounded-full text-sm">MongoDB</span>
                                <span className="px-3 py-1 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 rounded-full text-sm">Express.js</span>
                                <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm">Node.js</span>
                            </div>
                            <div className="flex flex-wrap gap-3">
                                <a
                                    href="https://myapp-campushub.vercel.app/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm font-medium"
                                >
                                    🚀 Live Demo
                                </a>
                                <a
                                    href="https://devpost.com/software/campushub-bjqhvu"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors duration-200 text-sm font-medium"
                                >
                                    🏆 Devpost
                                </a>
                                <a
                                    href="https://github.com/muhammadyaqoobmuet"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center px-4 py-2 bg-zinc-600 text-white rounded-lg hover:bg-zinc-700 transition-colors duration-200 text-sm font-medium"
                                >
                                    📂 Source Code
                                </a>
                            </div>
                        </div>

                        <div className="border border-zinc-200 dark:border-zinc-700 rounded-lg p-6">
                            <h3 className="text-xl font-semibold text-custom-black dark:text-white mb-2">CodeFlow - Developer Collaboration Platform</h3>
                            <p className="text-zinc-700 dark:text-zinc-300 mb-4">
                                A collaborative platform for developers to share code, manage projects, and streamline development workflows. Features real-time collaboration and project management tools.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">React</span>
                                <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm">Node.js</span>
                                <span className="px-3 py-1 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 rounded-full text-sm">Express.js</span>
                                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm">Real-time</span>
                            </div>
                            <div className="flex flex-wrap gap-3">
                                <a
                                    href="https://code-flow-a7559b152722.herokuapp.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm font-medium"
                                >
                                    🚀 Live Demo
                                </a>
                                <a
                                    href="https://github.com/muhammadyaqoobmuet"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center px-4 py-2 bg-zinc-600 text-white rounded-lg hover:bg-zinc-700 transition-colors duration-200 text-sm font-medium"
                                >
                                    📂 Source Code
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Connect Section */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-custom-black dark:text-white mb-6 font-geist">
                        Connect with Yaqoob Halepoto
                    </h2>
                    <p className="text-zinc-700 dark:text-zinc-300 mb-6">
                        Interested in collaborating or learning more about Yaqoob's work? Connect through these platforms:
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <a
                            href="https://github.com/muhammadyaqoobmuet"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-6 py-3 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-lg hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors duration-200 font-medium"
                        >
                            GitHub Profile
                        </a>
                        <a
                            href="https://www.linkedin.com/in/muhammad-yaqoob-59971625b/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
                        >
                            LinkedIn
                        </a>
                        <a
                            href="https://x.com/jackub_halepoto"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-6 py-3 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition-colors duration-200 font-medium"
                        >
                            Twitter/X
                        </a>
                    </div>
                </section>

                {/* FAQ Section for SEO */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-custom-black dark:text-white mb-6 font-geist">
                        Frequently Asked Questions
                    </h2>
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-xl font-semibold text-custom-black dark:text-white mb-2">What does Yaqoob Halepoto specialize in?</h3>
                            <p className="text-zinc-700 dark:text-zinc-300">
                                Yaqoob Halepoto specializes in full-stack web development with expertise in React, Next.js, Express.js, and MongoDB. He focuses on building scalable web applications, authentication systems, and AI-integrated solutions.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-custom-black dark:text-white mb-2">What technologies does Yaqoob Halepoto work with?</h3>
                            <p className="text-zinc-700 dark:text-zinc-300">
                                Yaqoob Halepoto works with a comprehensive tech stack including React, Next.js, Express.js, MongoDB, Redis, GraphQL, Docker, and microservices architecture. He also has experience with JavaScript, TypeScript, authentication systems, and AI integrations using Langchain and Gemini AI.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-custom-black dark:text-white mb-2">Has Yaqoob Halepoto won any competitions?</h3>
                            <p className="text-zinc-700 dark:text-zinc-300">
                                Yes, Yaqoob Halepoto ranked 17th out of 1000+ teams at Hack for Humanity 2025, demonstrating his problem-solving skills and technical expertise in competitive programming environments.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Call to Action */}
                <section className="bg-zinc-50 dark:bg-zinc-800 rounded-lg p-8 text-center">
                    <h2 className="text-2xl font-bold text-custom-black dark:text-white mb-4 font-geist">
                        Ready to Work with Yaqoob Halepoto?
                    </h2>
                    <p className="text-zinc-700 dark:text-zinc-300 mb-6">
                        Whether you're looking for a skilled software engineer for your team or need help with a web development project, Yaqoob is ready to bring his expertise to your next venture.
                    </p>
                    <a
                        href="/"
                        className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium text-lg"
                    >
                        View Portfolio & Contact
                    </a>
                </section>
            </div>
        </Container>
    );
}

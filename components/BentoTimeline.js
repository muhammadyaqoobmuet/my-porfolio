import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code, Database, Globe, GraduationCap, Cpu, Layers, Layout, Server, BookOpen, Terminal, ChevronDown } from "lucide-react";

const TimelineItem = ({ title, description, icon: Icon }) => (
  <div className="flex gap-4 mb-8 relative">
    {/* Blue Dot Line */}
    <div className="flex flex-col items-center top-1.5 relative">
        <div className="w-3 h-3 bg-blue-500 rounded-full z-10 shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
        <div className="w-px h-full bg-zinc-800 absolute top-3 -bottom-8" />
    </div>

    <div className="flex-1 pb-2">
        <div className="flex items-center gap-2 mb-2">
            <h4 className="font-sans font-medium text-zinc-100 text-lg">
                {title}
            </h4>
            {Icon && <Icon className="w-4 h-4 text-zinc-500" />}
        </div>
        <p className="text-zinc-400 text-sm leading-relaxed max-w-2xl">
            {description}
        </p>
    </div>
  </div>
);

const Section = ({ year, items }) => (
  <div className="mb-12 last:mb-0">
    <h3 className="font-serif text-xl font-bold text-white mb-6 pl-0">
        {year}
    </h3>
    <div className="pl-2">
        {items.map((item, idx) => (
            <TimelineItem key={idx} {...item} />
        ))}
    </div>
  </div>
);

const BentoTimeline = () => {
  const [showEarly, setShowEarly] = useState(false);

  const events = {
    2025: [
        { title: "MERN Stack Development", description: "Deep dive into MongoDB and Express.js, building complete full-stack applications with proper database integration.", icon: Database },
        { title: "Advanced Database Work", description: "Learning database design patterns, queries, and working with complex data relationships.", icon: Server }
    ],
    2024: [
        { title: "React & Node.js Journey", description: "Started learning React for frontend development and Node.js for backend. Built my first full-stack applications.", icon: Code },
        { title: "MERN Stack Exploration", description: "Began exploring the MERN stack (MongoDB, Express.js, React, Node.js) and understanding how all pieces fit together.", icon: Layers },
        { title: "Database Fundamentals", description: "Started learning database concepts and working with MongoDB for data storage and retrieval.", icon: Database }
    ],
    2023: [
        { title: "Web Development Fundamentals", description: "Mastered HTML and CSS basics, learned Tailwind CSS for efficient styling.", icon: Globe },
        { title: "JavaScript Foundation", description: "Focused on JavaScript fundamentals - DOM manipulation, functions, async programming, and ES6+ features.", icon: Terminal },
        { title: "Responsive Design", description: "Learned to create responsive websites using CSS Grid, Flexbox, and Tailwind CSS utilities.", icon: Layout }
    ],
    2022: [
        { title: "University Achievement", description: "Secured 3rd position in Larkana Division NED entrance exam and 3rd position in District MUET. Selected Software Engineering as my field of study.", icon: GraduationCap },
        { title: "CS50 - The Foundation", description: "Started my programming journey with Harvard's CS50 course, learning fundamental computer science concepts.", icon: BookOpen },
        { title: "Programming Fundamentals", description: "Learned C++ programming, basic algorithms, and data structures through CS50. Built my first simple programs.", icon: Cpu },
        { title: "Web Development Discovery", description: "Got introduced to HTML, CSS, and JavaScript. Created my first static websites and fell in love with web development.", icon: Globe },
        { title: "University Begins", description: "Started my Software Engineering degree and began exploring the vast world of programming.", icon: GraduationCap }
    ]
  };

  const earlyEvents = {
      2021: [
          { title: "University Preparation", description: "Focused on entrance exam preparation while completing intermediate studies.", icon: BookOpen },
          { title: "First Exposure to Programming", description: "Started learning basic programming concepts and got curious about software development.", icon: Terminal }
      ],
      2020: [
          { title: "Academic Focus", description: "Concentrated on intermediate studies while exploring career options in technology.", icon: BookOpen }
      ]
  };

  return (
    <div className="w-full py-20 max-w-3xl">
      <h2 className="ml-2 px-2 font-serif text-3xl font-bold mb-16 text-zinc-100">
        My Journey in Software Engineering
      </h2>

      <Section year="2025" items={events[2025]} />
      <Section year="2024" items={events[2024]} />
      <Section year="2023" items={events[2023]} />
      <Section year="2022" items={events[2022]} />

      <AnimatePresence>
        {showEarly && (
            <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden"
            >
                <div className="pt-8 border-t border-zinc-800">
                    <Section year="2021" items={earlyEvents[2021]} />
                    <Section year="2020" items={earlyEvents[2020]} />
                </div>
            </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setShowEarly(!showEarly)}
        className="flex items-center gap-2 text-sm font-medium text-zinc-500 hover:text-zinc-300 transition-colors mt-8 mx-auto"
      >
        {showEarly ? "Show Less" : "See Earlier Years"}
        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${showEarly ? "rotate-180" : ""}`} />
      </button>

    </div>
  );
};

export default BentoTimeline;

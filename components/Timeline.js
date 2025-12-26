import React from "react";
import { motion } from "framer-motion";

const TimelineData = [
  {
    year: "2025",
    steps: [
      {
        title: "MERN Stack Development ",
        description: "Deep dive into MongoDB and Express.js, building complete full-stack applications with proper database integration."
      },
      {
        title: "Advanced Database Work ",
        description: "Learning database design patterns, queries, and working with complex data relationships."
      }
    ]
  },
  {
    year: "2024",
    steps: [
      {
        title: "React & Node.js Journey 💻",
        description: "Started learning React for frontend development and Node.js for backend. Built my first full-stack applications."
      },
      {
        title: "MERN Stack Exploration 🔧",
        description: "Began exploring the MERN stack (MongoDB, Express.js, React, Node.js) and understanding how all pieces fit together."
      },
      {
        title: "Database Fundamentals ",
        description: "Started learning database concepts and working with MongoDB for data storage and retrieval."
      }
    ]
  },
  {
    year: "2023",
    steps: [
      {
        title: "Web Development Fundamentals ",
        description: "Mastered HTML and CSS basics, learned Tailwind CSS for efficient styling."
      },
      {
        title: "JavaScript Foundation ",
        description: "Focused on JavaScript fundamentals - DOM manipulation, functions, async programming, and ES6+ features."
      },
      {
        title: "Responsive Design ",
        description: "Learned to create responsive websites using CSS Grid, Flexbox, and Tailwind CSS utilities."
      }
    ]
  },
  {
    year: "2022",
    steps: [
      {
        title: "University Achievement ",
        description: "Secured 3rd position in Larkana Division NED entrance exam and 3rd position in District MUET. Selected Software Engineering as my field of study."
      },
      {
        title: "CS50 - The Foundation ",
        description: "Started my programming journey with Harvard's CS50 course, learning fundamental computer science concepts."
      },
      {
        title: "Programming Fundamentals ",
        description: "Learned C++ programming, basic algorithms, and data structures through CS50. Built my first simple programs."
      },
      {
        title: "Web Development Discovery ",
        description: "Got introduced to HTML, CSS, and JavaScript. Created my first static websites and fell in love with web development."
      },
      {
        title: "University Begins ",
        description: "Started my Software Engineering degree and began exploring the vast world of programming."
      }
    ]
  },
  {
    year: "2021",
    steps: [
      {
        title: "University Preparation ",
        description: "Focused on entrance exam preparation while completing intermediate studies."
      },
      {
        title: "First Exposure to Programming ",
        description: "Started learning basic programming concepts and got curious about software development."
      }
    ]
  },
  {
    year: "2020",
    steps: [
      {
        title: "Academic Focus ",
        description: "Concentrated on intermediate studies while exploring career options in technology."
      }
    ]
  }
];

const TimelineCard = ({ data, index }) => {
  return (
    <div className="relative pl-8 md:pl-0">
        {/* Hidden on mobile, visible on desktop as proper alternating timeline or simple aligned */}
        <div className="md:hidden absolute left-2 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-zinc-800"></div>

      <div className="mb-12 relative z-10">
        <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
        >
            <h3 className="font-serif text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100 flex items-center">
                <span className="w-4 h-4 rounded-full bg-blue-500 mr-4 md:mr-0 md:absolute md:-left-[9px] hidden md:block outline outline-4 outline-white dark:outline-black"></span>
                <span className="md:hidden w-4 h-4 rounded-full bg-blue-500 absolute -left-[5px] outline outline-4 outline-white dark:outline-black"></span>
                {data.year}
            </h3>
        </motion.div>

        <div className="space-y-8">
            {data.steps.map((step, idx) => (
                <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 * idx }}
                    className="relative pl-0 md:pl-8 border-l-2 border-transparent md:border-gray-100 md:dark:border-zinc-800"
                >
                    <h4 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">
                        {step.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-base">
                        {step.description}
                    </p>
                </motion.div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default function Timeline() {
  return (
    <div className="max-w-3xl mx-auto w-full py-16 relative">
        {/* Vertical Line for Desktop */}
        <div className="hidden md:block absolute left-[3px] top-6 bottom-0 w-0.5 bg-gray-200 dark:bg-zinc-800"></div>

        <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-serif text-3xl md:text-5xl font-bold mb-16 text-gray-900 dark:text-gray-100 pl-8 md:pl-0"
        >
            My Journey in Software Engineering
        </motion.h2>

      <div className="flex flex-col">
        {TimelineData.map((data, index) => (
          <TimelineCard key={index} data={data} index={index} />
        ))}
      </div>
    </div>
  );
}
import { useState } from "react";

const Divider = () => {
  return (
    <div className="border border-gray-200 dark:border-gray-600 w-full my-8" />
  );
};

const Year = ({ children }) => {
  return (
    <h3 className="text-lg md:text-xl font-bold mb-4 tracking-tight text-gray-900 dark:text-gray-100">
      {children}
    </h3>
  );
};

const Step = ({ title, children }) => {
  return (
    <li className="mb-4 ml-2">
      <div className="flex items-center mb-2">
        <div className="w-3 h-3 bg-blue-500 rounded-full mr-3 flex-shrink-0"></div>
        <p className="font-medium text-gray-900 dark:text-gray-100">{title}</p>
      </div>
      {children && (
        <p className="text-gray-700 dark:text-gray-400 ml-6">{children}</p>
      )}
    </li>
  );
};

const FullTimeline = () => (
  <>
    <Divider />
    <Year>2021</Year>
    <ul>
      <Step title="University Preparation 📚">
        Focused on entrance exam preparation while completing intermediate studies.
      </Step>
      <Step title="First Exposure to Programming 💻">
        Started learning basic programming concepts and got curious about software development.
      </Step>
    </ul>
    <Divider />
    <Year>2020</Year>
    <ul>
      <Step title="Academic Focus 🎯">
        Concentrated on intermediate studies while exploring career options in technology.
      </Step>
    </ul>
  </>
);

export default function Timeline() {
  const [isShowingFullTimeline, showFullTimeline] = useState(false);

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black dark:text-white">
        My Journey in Software Engineering
      </h3>

      <Year>2025</Year>
      <ul>
        <Step title="MERN Stack Development 🚀">
          Deep dive into MongoDB and Express.js, building complete full-stack applications with proper database integration.
        </Step>
        <Step title="Advanced Database Work 🗄️">
          Learning database design patterns, queries, and working with complex data relationships.
        </Step>
      </ul>

      <Divider />

      <Year>2024</Year>
      <ul>
        <Step title="React & Node.js Journey 💻">
          Started learning React for frontend development and Node.js for backend. Built my first full-stack applications.
        </Step>
        <Step title="MERN Stack Exploration 🔧">
          Began exploring the MERN stack (MongoDB, Express.js, React, Node.js) and understanding how all pieces fit together.
        </Step>
        <Step title="Database Fundamentals 🗃️">
          Started learning database concepts and working with MongoDB for data storage and retrieval.
        </Step>
      </ul>

      <Divider />

      <Year>2023</Year>
      <ul>
        <Step title="Web Development Fundamentals 🌐">
          Mastered HTML and CSS basics, learned Tailwind CSS for efficient styling.
        </Step>
        <Step title="JavaScript Foundation 💡">
          Focused on JavaScript fundamentals - DOM manipulation, functions, async programming, and ES6+ features.
        </Step>
        <Step title="Responsive Design 📱">
          Learned to create responsive websites using CSS Grid, Flexbox, and Tailwind CSS utilities.
        </Step>
      </ul>

      <Divider />

      <Year>2022</Year>
      <ul>
        <Step title="University Achievement 🏆">
          Secured 3rd position in Larkana Division NED entrance exam and 3rd position in District MUET.
          Selected Software Engineering as my field of study.
        </Step>
        <Step title="CS50 - The Foundation 🎓">
          Started my programming journey with Harvard's CS50 course, learning fundamental computer science concepts.
        </Step>
        <Step title="Programming Fundamentals 💡">
          Learned C++ programming, basic algorithms, and data structures through CS50. Built my first simple programs.
        </Step>
        <Step title="Web Development Discovery 🌐">
          Got introduced to HTML, CSS, and JavaScript. Created my first static websites and fell in love with web development.
        </Step>
        <Step title="University Begins 🎯">
          Started my Software Engineering degree and began exploring the vast world of programming.
        </Step>
      </ul>

      {isShowingFullTimeline ? (
        <FullTimeline />
      ) : (
        <button
          type="button"
          className="flex items-center text-sm my-4 mx-auto px-4 py-2 rounded-md font-medium text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          onClick={() => showFullTimeline(true)}
        >
          See Earlier Years
          <svg
            className="h-4 w-4 ml-1"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      )}

      <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
        <p className="text-sm text-blue-700 dark:text-blue-300">
          <strong>Current Focus:</strong> Deepening my MERN stack knowledge and building more complex database-driven applications while continuing my Software Engineering studies.
        </p>
      </div>
    </div>
  );
}
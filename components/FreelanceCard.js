import React from "react";
import Image from "next/image";

export const FreelanceCard = ({
  href,
  image,
  title,
  descriptions,
  techStack,
}) => {
  return (
    <div className="grid md:grid-cols-2 gap-4 mx-auto mb-12">
      <a href={href} target="__blank" className="relative w-full h-64 md:w-80 md:h-52 mb-4 inline-block">
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-xl shadow-xl hover:opacity-90 transition-opacity"
        />
      </a>
      <div>
        <a
          href={href}
          target="__blank"
          className="font-bold text-2xl mb-2 inline-block"
        >
          {title}
        </a>
        {descriptions.map((el) => (
          <p key={el} className="text-gray-500 dark:text-gray-300 text-sm mb-2">
            {el}
          </p>
        ))}
        <p className="text-gray-700 dark:text-gray-200 text-sm font-bold mt-4 mb-1">
          Tech Stack
        </p>
        <div className="flex flex-row flex-wrap">
          {techStack.map((el) => (
            <p
              key={el}
              className="text-gray-500 dark:text-gray-300 text-sm mb-2 mr-2"
            >
              {el}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

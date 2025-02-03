import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

const skills = [
  {
    icon: "react",
    name: "React.js",
  },
  {
    icon: "next",
    name: "Next.js",
  },
  {
    icon: "typescript",
    name: "Typescript",
  },
  {
    icon: "javascript",
    name: "Javascript",
  },
  {
    icon: "hono",
    name: "Hono.js",
  },
  {
    icon: "node",
    name: "Node.js",
  },
  {
    icon: "mongodb",
    name: "MongoDB",
  },
  {
    icon: "prisma",
    name: "Prisma",
  },
  {
    icon: "docker",
    name: "Docker",
  },
  {
    icon: "kubernetes",
    name: "Kubernetes",
  },
  {
    icon: "aws",
    name: "AWS",
  },
];

const Skills = () => {
  return (
    <div className="flex flex-wrap justify-center">
      {skills.map((skill, i) => (
        <div
          key={i}
          className="px-3 py-1 border border-gray-200 mx-2 my-1 rounded-full flex gap-1 items-center text-sm"
        >
          <Image
            src={`/svg/${skill.icon}.svg`}
            alt="icon"
            width={100}
            height={100}
            className={cn(
              skill.icon === "kubernetes" || skill.icon === "react"
                ? "animate-spin-slow"
                : "",
              "h-3 w-3"
            )}
          />
          {skill.name}
        </div>
      ))}
    </div>
  );
};

export default Skills;
// animate-spin-slow

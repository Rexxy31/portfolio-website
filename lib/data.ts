  import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import blogImg from "@/public/blog.png";


export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "APS College of Engineering",
    location: "Bangalore",
    description:
      "I graduated after 4 years of bachelors degree in Information Science and Engineering.",
    icon: React.createElement(LuGraduationCap),
    date: "2022",
  },
  // {
  //   title: "Front-End Developer",
  //   location: "Orlando, FL",
  //   description:
  //     "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
  //   icon: React.createElement(CgWorkAlt),  
  //   date: "2022 - 2023",
  // },
  {
    title: "Software Survey Consultant",
    location: "Bangalore",
    description:
      "I currently work as software consultant for SSLR, Government of Karnataka. The work is python scripting but for the majority its Non IT.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "ZeroDay",
    description:
      "I maintain a weekly blog where I share my insights on the cybersecurity techniques and tools I've acquired throughout the week. I developed this web app.",
    tags: ["React", "Next.js", "GraphQL", "Tailwindcss"],
    imageUrl: blogImg,
  },
  
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "GraphQL",
  "PostgreSQL",
  "Python",
  "Framer Motion",
] as const;

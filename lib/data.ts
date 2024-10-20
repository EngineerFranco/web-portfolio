import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { RiNodejsLine } from "react-icons/ri";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import devFrancoBlogImg from "@/public/blog.png"
import { FaJava } from "react-icons/fa";
import { BiLogoJavascript } from "react-icons/bi";




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
    title: "Computer Engineering",
    location: "Bulacan State University, Philippines",
    description:
      "I graduated after 5 years of studying. I found a job as a software engineer.",
    icon: React.createElement(LuGraduationCap),
    date: "2016 - 2020",
  },
  {
    title: "Associate Software Engineer",
    location: "Eastwood, Philippines",
    description:
      "I worked as a software developer for almost 2 years. I also upskilled to the full stack.",
    icon: React.createElement(FaJava),
    date: "2021 - 2022",
  },
  {
    title: "Freelance Developer",
    location: "Remote",
    description:
      "I'm now a NodeJS developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(BiLogoJavascript),
    date: "2023 - present",
  },
  {
    title: "NodeJS Developer",
    location: "Makati, Philippines",
    description:
      "I'm now a NodeJS developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(RiNodejsLine),
    date: "2023 - present",
  },
] as const;

export const projectsData = [  {
    title: "DevFranco Blog",
    description:
      "I develop my own blog website. Admin can manage the views, comments, users, and comments. Inspired by social media platforms like facebook",
    tags: ["Node.js", "React.js", "Express", "MongoDB", "Firebase", "Tailwind"],
    imageUrl: devFrancoBlogImg,
    href:"https://devfrancoblog.onrender.com/"
  },
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
    href:"https://devfrancoblog.onrender.com/"
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
    href:"https://devfrancoblog.onrender.com/"
  },

] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Node.js",
  "Express",
  "RESTful API",
  "JWT",
  "Bcrypt",
  "PostgreSQL",
  "MSSQL",
  "MongoDB",
  "React",
  "Tailwind",
  "Bootstrap",
  "Redux",
  "Flowbite",
  "Context API",
  "Framer Motion",
  "Vercel",
  "Render",
  "Next.js",
  "OAuth",
  "Git",
  "Github",
  "Trello",
  "Java",
  "Spring boot",

] as const;
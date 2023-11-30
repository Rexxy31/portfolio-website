"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After graduating with a degree in{" "}
        <span className="font-medium">Information Science and Engineering </span>in 2022, I decided to pursue my
        passion for programming. But unlucky i could not land a job in{" "}
        <span className="font-medium">full-stack web development</span>.{" "}
        I persisted in pursuing my dream, honing my web development skills through platforms like YouTube and Udemy when i was unemployed. 
        <br />
        Simultaneously, I delved into the captivating world of Cybersecurity, exploring both offensive attacks and defensive strategies on the internet.
        <br />
        My core stack
        is{" "} 
        <span className="font-medium">
          React, Next.js, Node.js, and GraphQL
        </span>
        . I am also familiar with TypeScript. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, and playing with my dog.
      </p>
    </motion.section>
  );
}

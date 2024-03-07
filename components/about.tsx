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
      <SectionHeading>Know Me More</SectionHeading>
      <p className="mb-3">
        I'm a Full-Stack Web Developer{" "}
        <span className="font-medium"> proficient</span>, in building both the
        front end and back end of websites.{" "}
        <span className="font-medium">My favorite part of programming</span>{" "}
        <span className="italic"></span> is the problem-solving aspect. I{" "}
        <span className="underline">enjoy</span> the feeling of resolving issus
        and problems. My core stack is{" "}
        <span className="font-medium">
          React, Tailwind CSS, Node.js, and MySQL
        </span>
        . I am always looking to learn new technologies. I am currently looking
        for a <span className="font-medium">full-time position</span> as a{" "}
        <span className=" font-extrabold">Frontend developer.</span>
      </p>

      <p>
        <span className="italic">My proficiency extends beyond coding </span>as
        I possess the capability to analyze user and consumer needs
        meticulously. This ensures that the content I generate not only serves
        functional purposes but also offers substantial value and accessibility.
      </p>
    </motion.section>
  );
}
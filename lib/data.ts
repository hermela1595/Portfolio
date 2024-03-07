
import React from "react";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import apple from "@/public/apple.png";
import netflix from "@/public/netflix2.jpg";
import amazon from "@/public/amazon.png";
import evangadi from "@/public/evangadi3.jpeg"
import atglobal from "@/public/atglobal.jpg"
import garagelogo from "@/public/garage-logo.png";


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
    title: "Education",
    location: "Evangadi Tech",
    description:
      "I completed Evangadi Tech's FULL STACK WEB DEVELOPMENT program in October 2023, mastering front-end technologies like JavaScript and React JS, back-end technologies including Node JS and Express, and database management with MySQL. I also gained proficiency in Git version control and cloud deployment using Firebase and AWS. This program has equipped me with the skills needed to succeed as a full-stack developer.",
    // Evangadi Tech's immersive learning environment, hands-on projects, and collaborative approach have been instrumental in my growth. The curriculum's practical focus allowed me to grasp both front-end and back-end technologies, while group projects enhanced my teamwork and problem-solving skills.",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  // {
  //   title: "Data Entery",
  //   location: "YENAI PROPERTIES LLC",
  //   description:
  //     "As a dedicated Data Entry Specialist at YENAI PROPERTIES LLC, I played a pivotal role in maintaining the accuracy and integrity of critical data within the company's databases. My responsibilities encompassed a range of tasks that demanded precision, attention to detail, and a commitment to maintaining high-quality standards. Conducted efficient and error-free data entry tasks, ensuring the integrity of essential information. Regularly audited databases to identify and rectify discrepancies, contributing to a consistently reliable dataset. Collaborated with cross-functional teams to streamline data processes and enhance overall efficiency. Prioritized and managed workload to meet tight deadlines without compromising accuracy.",
  //   icon: React.createElement(CgWorkAlt),
  //   date: "2022 - present",
  // },
  {
    title: "Work Experience",
    location: "Wahington, DC",
    description:
      "With 20 years in retail, I've excelled as an Assistant Store Manager at Marshalls, focusing on operational excellence, team leadership, and customer satisfaction. I've driven store performance, optimized operations, and enhanced customer experiences through strategic initiatives, leading to improved staff efficiency and increased productivity.",
    icon: React.createElement(FaReact),
    date: "2001 - 2022",
  },
] as const;

export const projectsData = [
  {
    title: "Abe Garage",
    description:
      "This Garage Management System is driven by the MERN stack. It offers role-based access control for Employees, Customers, Administrators, and other designated user categories.",
    tags: ["React", "Javascript", "Node", "Bootstrap", "MySQL"],
    imageUrl: garagelogo,
    linkURL: "https://github.com/hermela1595/Abe-Garage-App",
  },
  {
    title: "AT Import | Export",
    description:
      "The website combines React JavaScript for dynamic elements, Tailwind CSS for efficient styling, and supports English, Arabic, and Chinese languages.",
    tags: ["React", "Javascript", "Node", "Tailwind"],
    imageUrl: atglobal,
    linkURL: "https://www.at-import-export.com/",
  },
  {
    title: "Evangadi Forum",
    description:
      "A complete Q&A platform allowing users to create accounts, log in, post questions or answers, and review shared content.",
    tags: ["React", "Javascript", "Node", "Tailwind", "MySQL"],
    imageUrl: evangadi,
    linkURL: "https://github.com/hermela1595/Final-EvangadiForum",
  },
  {
    title: "Apple Clone",
    description:
      "I constructed an Apple replica application, building API Integration and React Routing, enhancing the functionality and navigation of the platform. ",
    tags: ["React", "Bootstrap", "Css", "Sql", "Node"],
    imageUrl: apple,
    linkURL:
      "https://654db327bea46923be3a572e--dreamy-scone-ba290c.netlify.app/",
  },
  {
    title: "Netflix Clone",
    description:
      "I've integrated the latest Netflix features and kept the design in line with the brand's ethos.",
    tags: [
      "React",
      "Node",
      "Bootstrap",
      "css",
      "Javascript",
      "Firebase Database",
    ],
    imageUrl: netflix,
    linkURL: "https://netflix-clone-feb5d.web.app/",
  },
  {
    title: "Amazon Clone",
    description:
      "I use the following technologies: React, a JavaScript library designed for constructing user interfaces, and Firebase, a backend platform.",
    tags: ["React", "Jsx", "Node", "Tailwind", "Firebase Database"],
    imageUrl: amazon,
    linkURL: "https://project-d9df7.web.app/",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "Tailwind",
  "Bootstrap",
  "JavaScript",
  "Jquery",
  "React",
  "Node.js",
  "Node/NPM",
  "Express",
  "MySQL",
  "REST API/CRUD",
  "WordPress",
  "Git/GitHub",
  "Debugging",
  "Deployment",
] as const;

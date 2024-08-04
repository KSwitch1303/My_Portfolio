"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Crypto Convo",
    description: "Web3 video conferencing application",
    image: "/images/projects/2.png",
    tag: ["All", "React"],
    gitUrl: "/",
    previewUrl: "https://cryptoconvo.vercel.app/",
  },  
  {
    id: 2,
    title: "Not Whot",
    description: "An Online player vs player stake and win card game",
    image: "/images/projects/3.png",
    tag: ["All", "React"],
    gitUrl: "https://github.com/KSwitch1303/notWhot",
    previewUrl: "https://notwhot.vercel.app/",
  },
  {
    id: 3,
    title: "Not Whot - Backend",
    description: "An Online player vs player stake and win card game",
    image: "/images/projects/3.png",
    tag: ["All", "NodeJS"],
    gitUrl: "https://github.com/KSwitch1303/notWhot-server",
    previewUrl: "https://notwhot.vercel.app/",
  },
  {
    id: 6,
    title: "Language Translation NPM Package",
    description: "A node package that allows you to write JavaScript code in any of the three major languages in Nigeria",
    image: "/images/projects/6.png",
    tag: ["All", "NodeJS"],
    gitUrl: "https://github.com/KSwitch1303/nigerian-language-package",
    previewUrl: "https://github.com/KSwitch1303/nigerian-language-package",
  },
  {
    id: 4,
    title: "School MS",
    description: "An Online School Management System",
    image: "/images/projects/4.png",
    tag: ["All", "React"],
    gitUrl: "https://github.com/KSwitch1303/school-MS-frontend",
    previewUrl: "https://school-ms-frontend.vercel.app/",
  },
  {
    id: 5,
    title: "School MS - Backend",
    description: "An Online School Management System",
    image: "/images/projects/4.png",
    tag: ["All", "NodeJS"],
    gitUrl: "https://github.com/KSwitch1303/School-Management-System",
    previewUrl: "https://school-ms-frontend.vercel.app/",
  },
  {
    id: 5,
    title: "Bank Loan Page",
    description: "A site to help banks make loan application easier",
    image: "/images/projects/5.png",
    tag: ["All", "React", "NodeJS"],
    gitUrl: "https://github.com/KSwitch1303/FAMFB_LOAN_SITE",
    previewUrl: "https://famfb-loan.vercel.app/",
  },
  {
    id: 7,
    title: "Task Management System",
    description: "An online task management system for companies",
    image: "/images/projects/7.png",
    tag: ["All", "PHP"],
    gitUrl: "https://github.com/KSwitch1303/Task_Management_System-LAMP-",
    previewUrl: "https://github.com/KSwitch1303/Task_Management_System-LAMP-",
  },
  {
    id: 8,
    title: "Online Auction Web App",
    description: "An online auction web application",
    image: "/images/projects/8.png",
    tag: ["All", "PHP"],
    gitUrl: "https://github.com/KSwitch1303/auction-system",
    previewUrl: "https://github.com/KSwitch1303/auction-system",
  },
  {
    id: 9,
    title: "Credit Default Prediction",
    description: "A credit default prediction script",
    image: "/images/projects/9.png",
    tag: ["All", "Python"],
    gitUrl: "https://github.com/KSwitch1303/creditDefaultPrediction",
    previewUrl: "https://github.com/KSwitch1303/creditDefaultPrediction",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="React"
          isSelected={tag === "React"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="PHP"
          isSelected={tag === "PHP"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="NodeJS"
          isSelected={tag === "NodeJS"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Python"
          isSelected={tag === "Python"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;

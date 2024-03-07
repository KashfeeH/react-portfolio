import React from "react";
import styles from "../Projects/Projects_all.module.css";
import projects from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard";

const Projects_all = () => {
  return (
    <section className={styles.container} id="projects">
      <div className={styles.projects}>
        {projects.map((project, id) => {
          return <ProjectCard key={id} project={project} />;
        })}
      </div>
    </section>
  )
}

export default Projects_all

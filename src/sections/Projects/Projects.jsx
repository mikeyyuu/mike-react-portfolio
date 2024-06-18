import React from "react";
import styles from "./ProjectsStyles.module.css";
import ProjectCard from "../../common/ProjectCard";
import viberr from "../../assets/viberr.png";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="section-title">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard src={viberr} link="#" h3="Viberr" p="Streaming App" />
        <ProjectCard src={viberr} link="#" h3="Viberr" p="Streaming App" />
        <ProjectCard src={viberr} link="#" h3="Viberr" p="Streaming App" />
        <ProjectCard src={viberr} link="#" h3="Viberr" p="Streaming App" />
      </div>
    </section>
  );
}

export default Projects;

import classNames from "classnames";
import React from "react";
import styles from "./styles.module.scss";
import { ProjectCard } from "@/app/components/ProjectCard";
import { PortfolioConfig } from "@/app/types/config";

const Projects = ({ pages }: PortfolioConfig) => {
  return (
    <div className={classNames(styles["projects"], "page")} id="projects">
      <h2 className={styles["projects__title"]}>My Projects</h2>
      <div className={styles["projects__grid"]}>
        {pages.projects.map((project, index) => (
          <ProjectCard
            key={project.name}
            title={project.name}
            description={project.description}
            url={project.url}
            reverse={index % 2 !== 0}
          />
        ))}
      </div>
    </div>
  );
};

export { Projects };

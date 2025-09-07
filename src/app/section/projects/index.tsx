"use client";

import classNames from "classnames";
import React from "react";
import styles from "./styles.module.scss";
import { ProjectCard } from "@/app/components/ProjectCard";
import { PortfolioConfig } from "@/app/types/config";
import { KeenSlider } from "@/app/components/KeenSlider";
import { useMediaQuery } from "@/app/hooks/useMediaQuery";

const Projects = ({ pages }: PortfolioConfig) => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <div className={classNames(styles["projects"], "page")} id="projects">
      <h2 className={styles["projects__title"]}>My Projects</h2>
      <div className={styles["projects__slider"]}>
        <KeenSlider
          items={pages.projects.map((project) => ({
            id: project.name,
            content: (
              <ProjectCard
                title={project.name}
                description={project.description}
                url={project.url}
                reverse={false}
              />
            ),
          }))}
          slidesPerView={isMobile ? 1 : 3}
          spacing={24}
          loop
          showArrows
          showDots
        />
      </div>
    </div>
  );
};

export { Projects };

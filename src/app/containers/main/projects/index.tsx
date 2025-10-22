"use client";

import classNames from "classnames";
import React from "react";
import styles from "./styles.module.scss";
import { ProjectCard } from "@/app/components/ProjectCard";
import { PortfolioConfig } from "@/app/types/config";
import { KeenSlider } from "@/app/components/KeenSlider";

const Projects = ({ data }: { data: Pick<PortfolioConfig, "pages"> }) => {
  const { pages } = data;
  return (
    <div className={classNames(styles["projects"], "page")} id="projects">
      <h2 className={styles["projects__title"]}>My Projects</h2>
      <div className={styles["projects__slider"]}>
        <KeenSlider
          items={pages.projects.map((project) => ({
            id: project.name,
            content: <ProjectCard title={""} {...project} />,
          }))}
          slidesPerView={1}
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

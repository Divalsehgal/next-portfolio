"use client";

import classNames from "classnames";
import React from "react";
import styles from "./styles.module.scss";
import { PortfolioConfig } from "@/app/types/config";
import ExperienceCard from "@/app/components/ExperienceCard";
import { KeenSlider } from "@/app/components/KeenSlider";
import { useMediaQuery } from "@/app/hooks/useMediaQuery";

const iconMap: Record<string, string> = {
  Ingenio: "IconJavascript",
  Freelance: "IconNodejs",
};

const Experience = ({ data }: { data: Pick<PortfolioConfig, "pages"> }) => {
  const isTablet = useMediaQuery("(min-width: 768px)");
  const { pages } = data;
  const experienceItems =
    pages?.experience?.map((exp) => ({
      id: exp.company,
      content: (
        <ExperienceCard
          designation={exp.role}
          company={exp.company}
          duration={exp.duration}
          description={exp.details.join("\n")}
          icon={iconMap[exp.company]}
        />
      ),
    })) || [];

  return (
    <div className={classNames(styles["experience"], "page")} id="experience">
      <h2 className={styles["experience__title"]}>Experience</h2>
      <div className={styles["experience__slider"]}>
        <KeenSlider
          items={experienceItems}
          slidesPerView={isTablet ? 2 : 1}
          spacing={24}
          loop
          showArrows
          showDots
        />
      </div>
    </div>
  );
};

export { Experience };

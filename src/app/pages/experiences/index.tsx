import classNames from "classnames";
import React from "react";
import styles from "./styles.module.scss"; // Adjust the path as necessary
import { PortfolioConfig } from "@/app/types/config";
import ExperienceCard from "@/app/components/ExperienceCard";

const iconMap: Record<string, string> = {
  Ingenio: "IconJavascript",
  Freelance: "IconNodejs",
};

const Experience = ({ pages }: PortfolioConfig) => {
  return (
    <div className={classNames(styles["experience"], "page")} id="experience">
      <h1>My Experiences</h1>
      {pages?.experience?.map((exp) => (
        <ExperienceCard
          key={exp.company}
          designation={exp.role}
          company={exp.company}
          duration={exp.duration}
          description={exp.details.join("\n")}
          icon={iconMap[exp.company]}
        />
      ))}
    </div>
  );
};

export { Experience };

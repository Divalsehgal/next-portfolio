import classNames from "classnames";
import React from "react";
import styles from "./styles.module.scss";
import { PortfolioConfig } from "@/app/types/config";
import { SkillCard } from "@/app/components/SkillCard";
import * as Icons from "@/app/components/Icons/components";

type IconName = keyof typeof Icons;

const getIconForSkill = (skill: string): IconName => {
  // Remove .js and convert to PascalCase
  const iconName = ("Icon" + skill
    .replace(".js", "")
    .split(/[-\s.]/)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join("")) as IconName;

  // Return the iconName if it exists in our Icons, otherwise return a default
  return Icons[iconName] ? iconName : "IconNodejs";
};

const Skills = ({ pages }: PortfolioConfig) => {
  return (
    <div className={classNames(styles["skills"], "page")} id="skills">
      <h2 className={styles["skills__title"]}>Skills</h2>
      <div className={styles["skills__grid"]}>
        {pages.skills.map((skill) => (
          <SkillCard 
            key={skill}
            name={skill}
            icon={getIconForSkill(skill)}
          />
        ))}
      </div>
    </div>
  );
};

export { Skills };

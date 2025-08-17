import React from "react";
import styles from "./styles.module.scss";
import { Icon, IconName } from "../Icons/Icon";

export interface SkillCardProps {
  icon: IconName;
  name: string;
}

/**
 * Non-interactive square card with centered icon and skill name below.
 */
export const SkillCard: React.FC<SkillCardProps> = ({ icon, name }) => {
  return (
    <div className={styles["skill-card"]}>
      <div className={styles["skill-card__icon"]}>
        <Icon name={icon} size={48} aria-label={name} />
      </div>
      <div className={styles["skill-card__name"]}>{name}</div>
    </div>
  );
};

export default SkillCard;

import React from "react";
import styles from "./styles.module.scss";
import Icon from "../Icons/Icon";

export interface ExperienceCardProps {
  designation: string;
  company: string;
  duration: string;
  description: string;
  icon: string;
}
const ExperienceCard = ({
  designation,
  company,
  duration,
  description,
  icon,
}: ExperienceCardProps) => {
  return (
    <article className={styles["experience-card"]}>
      {/* header */}
      <div className={styles["experience-card__header"]}>
        <div className={styles["experience-card__details"]}>
          <div className={styles["experience-card__icon-container"]}>
            <Icon
              name={icon}
              size={40}
              className={styles["experience-card__company-icon"]}
            />
          </div>

          <div>
            <h2>
              <span>{designation} </span>
              <span>at</span>
              <span>&nbsp;{company}</span>
            </h2>
          </div>
        </div>

        <span>{duration}</span>
      </div>
      {/* description */}
      <div className={styles["experience-card__content"]}>
        <p>{description}</p>
      </div>
    </article>
  );
};

export default ExperienceCard;

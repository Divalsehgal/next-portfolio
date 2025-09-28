import React from "react";
import classNames from "classnames";
import styles from "./styles.module.scss";
import Image from "next/image";

export interface ProjectCardProps {
  /**
   * Project title
   */
  title: string;
  /**
   * Project description
   */
  description: string;
  /**
   * Project image URL
   */
  imageUrl?: string;
  /**
   * GitHub repository URL
   */
  githubUrl?: string;
  /**
   * Live demo URL
   */
  url?: string;
  /**
   * Technologies used in the project
   */
  technologies?: string[];
  /**
   * Whether to reverse the layout (image on left or right)
   */
  reverse?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageUrl,
  githubUrl,
  url,
  technologies = [],
}) => {
  return (
    <div
      className={classNames(
        styles["project-card"],
        //reverse && styles["project-card--reverse"]
      )}
    >
      <div className={styles["project-card__content"]}>
        <h3 className={styles["project-card__title"]}>{title}</h3>
        <p className={styles["project-card__description"]}>{description}</p>

        {technologies.length > 0 && (
          <div className={styles["project-card__technologies"]}>
            {technologies.map((tech) => (
              <span key={tech} className={styles["project-card__tech-tag"]}>
                {tech}
              </span>
            ))}
          </div>
        )}

        <div className={styles["project-card__links"]}>
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles["project-card__link"]}
            >
              GitHub
            </a>
          )}
          {url && (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles["project-card__link"]}
            >
              Live Demo
            </a>
          )}
        </div>
      </div>

      <div className={styles["project-card__image-container"]}>
        <Image
          src={
            imageUrl ||
            "https://fastly.picsum.photos/id/11/2500/1667.jpg?hmac=xxjFJtAPgshYkysU_aqx2sZir-kIOjNR9vx0te7GycQ"
          }
          alt={`${title} project screenshot`}
          className={styles["project-card__image"]}
          layout="fill"
          priority={false}
        />
      </div>
    </div>
  );
};

export { ProjectCard };

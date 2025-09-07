import classNames from "classnames";
import React from "react";
import styles from "./styles.module.scss"; // Adjust the path as necessary
import Image from "next/image";
import { PortfolioConfig } from "@/app/types/config";
const About = ({ pages }: PortfolioConfig) => {
  return (
    <div className={classNames(styles["about"], "page")} id="about">
      <h1 className="heading--extrabold heading">About Me</h1>
      <div className={styles["about__content"]}>
        <div className={classNames(styles["about__hero"])}>
          <Image
            src="/about-me.svg"
            alt="About Me"
            height={200}
            width={200}
            priority
            objectPosition="center"
          />
        </div>
        <p className={classNames(styles["about__description"])}>
          {pages?.about?.description}
        </p>
      </div>
    </div>
  );
};

export { About };

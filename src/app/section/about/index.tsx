import classNames from "classnames";
import React from "react";
import styles from "./styles.module.scss"; // Adjust the path as necessary
import Image from "next/image";
import { PortfolioConfig } from "@/app/types/config";
const About = ({ data }: { data: Pick<PortfolioConfig, "pages"> }) => {
  const { pages } = data;
  return (
    <div className={classNames(styles["about"], "page")} id="about">
      <h2 className={styles["about__title"]}>About Me</h2>
      <div className={styles["about__container"]}>
        <div className={classNames(styles["about__hero"])}>
          <Image
            src="/about-me.svg"
            alt="About Me"
            height={400}
            width={400}
            priority
            objectPosition="center"
          />
        </div>
        <div className={classNames(styles["about__content"])}>
          <p>{pages?.about?.description}</p>
        </div>
      </div>
    </div>
  );
};

export { About };

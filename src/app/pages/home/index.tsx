import classNames from "classnames";
import React from "react";
import styles from "./styles.module.scss"; // Adjust the path as necessary
import Image from "next/image";
const Home = () => {
  return (
    <div className={classNames(styles["home"])} id="home">
        <div className={styles["home__hero-image"]}>
          <Image
            src="/home-background.svg"
            alt="Home Background"
            layout="fill"
            objectPosition="center"
            objectFit="contain"
          />
        </div>
        <div className={styles["home__hero-content"]}>
          <div className={styles["home__hero-content--line-one"]}>
            <h1 className="heading--outlined">Hello I'am</h1>
            <h1 className="heading--bold heading">Dival Sehgal</h1>
          </div>
          <div className={styles["home__hero-content--line-two"]}>
            <h1 className="heading--outlined">Front End Developer</h1>
            <h1 className="heading--regular">Based in India</h1>
          </div>
        </div>
      </div>
  );
};

export { Home };

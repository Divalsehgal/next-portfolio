import classNames from "classnames";
import React from "react";
import styles from "./styles.module.scss"; // Adjust the path as necessary
import Image from "next/image";
import Button from "@/app/components/Button";
import Icon from "@/app/components/Icons/Icon";
import { PortfolioConfig } from "@/app/types/config";
const Home = ({ name, title, about, pages }: PortfolioConfig) => {
  return (
    <div className={classNames(styles["home"], "page")} id="home">
      <div className={styles["home__hero-image-container"]}>
        <Image
          src="/home-background.svg"
          alt="Home Background"
          height={200}
          width={200}
          priority
          objectPosition="center"
        />
      </div>
      <div className={styles["home__right-panel"]}>
        <div className={styles["home__hero-content"]}>
          <div className={styles["home__hero-content--line-one"]}>
            <h1 className="heading--outlined">Hello I'am</h1>
            <h1 className="heading--extrabold heading">{name}</h1>
          </div>
          <div className={styles["home__hero-content--line-two"]}>
            <h1 className="heading--outlined">{title}</h1>
            <h1 className="heading--regular">Based in India</h1>
          </div>
          <p className={styles["home__hero-content--description"]}>{about}</p>
        </div>
        <div className={styles["home__socials"]}>
          {pages.socials.map((social) => (
            <Button
              key={social.name}
              variant="icon"
              leftIcon={<Icon name={social.icon} size={32} />}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export { Home };

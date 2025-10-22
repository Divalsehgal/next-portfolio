import classNames from "classnames";
import React from "react";
import styles from "./styles.module.scss"; // Adjust the path as necessary
import Image from "next/image";
import Button from "@/app/components/Button";
import Icon from "@/app/components/Icons/Icon";
import { PortfolioConfig } from "@/app/types/config";
const Home = ({ data }: { data: Pick<PortfolioConfig, "pages"> }) => {
  const { headline, name, subheadline, about } = data.pages.home;
  return (
    <div className={classNames(styles["home"], "page")} id="home">
      <div className={styles["home__hero-image-container"]}>
        <Image
          src="/hero.svg"
          alt="Home Background"
          height={150}
          width={150}
          priority
          objectPosition="center"
        />
      </div>
      <div className={styles["home__right-panel"]}>
        <div className={styles["home__hero-content"]}>
          <div className={styles["home__hero-content--line-one"]}>
            <h1 className="heading--outlined">{headline}</h1>
            <h1 className="heading--extrabold heading">{name}</h1>
          </div>
          <div className={styles["home__hero-content--line-two"]}>
            <h1 className="heading--outlined">{subheadline}</h1>
            <h2 className="heading--regular">Based in India</h2>
          </div>
          <p className={styles["home__hero-content--description"]}>{about}</p>
        </div>
        <div className={styles["home__socials"]}>
          {data.pages.socials.map((social) => {
            return (
            <Button
              key={social.name}
              className={styles["home__social-button"]}
              variant="icon"
              href={social.url}
              target={social.url.startsWith("mailto") ? undefined : "_blank"}
              rel={
                social.url.startsWith("mailto")
                  ? undefined
                  : "noopener noreferrer"
              }
              aria-label={`Visit ${social.name}`}
              leftIcon={<Icon name={social.name} size={32} />}
            />
          )})}
        </div>
      </div>
    </div>
  );
};

export { Home };

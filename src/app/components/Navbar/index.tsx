import React from "react";
import { StickyPanel } from "../StickyPanel/";
import styles from "./styles.module.scss";
import { PortfolioConfig } from "@/app/types/config";
const Navbar = ({navbar}:PortfolioConfig) => {
  return (
    <StickyPanel direction="top" offset={0} className={styles.navWrapper}>
      <nav className={styles["navbar"]} aria-label="Main navigation">
        <ul>
          {navbar.map((item) => (
            <li key={item.label}>
              <a href={item.url}>{item.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </StickyPanel>
  );
};

export { Navbar };

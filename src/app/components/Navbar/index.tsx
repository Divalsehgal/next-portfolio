import React from "react";
import { StickyPanel } from "../StickyPanel/";
import styles from "./styles.module.scss";

const NavbarItems=[
  {id:1, label:"About me", href:"#about"},
  {id:2, label:"Skills", href:"#skills"},
  {id:3, label:"Projects", href:"#projects"},
  {id:4, label:"Home", href:"/"}
]
const Navbar = () => {
  return (
    <StickyPanel direction="top" offset={0} className={styles.navWrapper}>
      <nav className={styles["navbar"]} aria-label="Main navigation">
        <ul>
          {NavbarItems.map((item) => (
            <li key={item.id}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </StickyPanel>
  );
};

export { Navbar };

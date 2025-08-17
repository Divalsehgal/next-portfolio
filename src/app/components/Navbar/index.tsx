'use client';
import React, { useRef } from "react";
import { StickyPanel } from "../StickyPanel/";
import styles from "./styles.module.scss";
import { PortfolioConfig } from "@/app/types/config";
const renderNavbarItems = (
  navbar: PortfolioConfig["navbar"],
  onLinkClick?: () => void
) => {
  return (
    <ul className={styles["navbar__modal-list"]}>
      {navbar.map((item) => (
        <li key={item.label} className={styles["navbar__modal-item"]}>
          <a href={item.url} onClick={onLinkClick}>
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  );
};
const Navbar = ({ navbar }: PortfolioConfig) => {
  const navToggleRef = useRef<HTMLInputElement>(null);
  // Handler to close modal on link click (mobile only)
  const handleMobileNavLinkClick = () => {
    if (navToggleRef.current) {
      navToggleRef.current.checked = false;
    }
  };
  return (
    <StickyPanel direction="top" offset={0} className={styles.navWrapper}>
      {/* Desktop Nav */}
      <nav className={styles["navbar"]} aria-label="Main navigation">
        {renderNavbarItems(navbar)}
      </nav>

      {/* Mobile Nav: Hamburger and Modal (pure CSS toggle) */}
      <input
        type="checkbox"
        id="nav-toggle"
        className={styles["navbar__toggle"]}
        aria-label="Open navigation menu"
        ref={navToggleRef}
      />
      <label
        htmlFor="nav-toggle"
        className={styles["navbar__burger"]}
        aria-controls="mobile-nav-modal"
        aria-expanded="false"
      >
        <span className={styles["navbar__burger-bar"]}></span>
        <span className={styles["navbar__burger-bar"]}></span>
        <span className={styles["navbar__burger-bar"]}></span>
        <span className={"visually-hidden"}>Open navigation menu</span>
      </label>
      <dialog
        className={styles["navbar__modal"]}
        id="mobile-nav-modal"
        aria-modal="true"
        tabIndex={-1}
      >
        <nav
          className={styles["navbar__modal-nav"]}
          aria-label="Mobile navigation"
        >
          {renderNavbarItems(navbar, handleMobileNavLinkClick)}
        </nav>
        <label htmlFor="nav-toggle" className={styles["navbar__modal-close"]}>
          <span className={"visually-hidden"}>Close navigation menu</span>
        </label>
      </dialog>
    </StickyPanel>
  );
};

export { Navbar };

import classNames from "classnames";
import React from "react";
import styles from "./styles.module.scss"; // Adjust the path as necessary
const About = () => {
  return (
    <div className={classNames(styles["about"],"page")} id="about">
      About section
    </div>
  );
};

export { About };

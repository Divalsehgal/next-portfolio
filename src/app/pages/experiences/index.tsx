import classNames from "classnames";
import React from "react";
import styles from "./styles.module.scss"; // Adjust the path as necessary
const Experience = () => {
  return (
    <div className={classNames(styles["experience"], "page")} id="experience">
      Experience section
    </div>
  );
};

export { Experience };

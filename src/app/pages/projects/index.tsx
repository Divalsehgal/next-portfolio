import classNames from "classnames";
import React from "react";
import styles from "./styles.module.scss"; // Adjust the path as necessary
const Projects = () => {
  return (
    <div className={classNames(styles["project"],'page')} id="projects">
      Projects section
    </div>
  );
};

export { Projects };

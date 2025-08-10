import React from "react";
import styles from "./styles.module.scss";

interface StickyPanelProps {
  children: React.ReactNode;
  direction?: "top" | "bottom"; // Where it sticks
  offset?: number; // Distance from top/bottom
  className?: string; // Extra styles
}

const StickyPanel = ({
  children,
  direction = "top",
  offset = 0,
  className = "",
}: StickyPanelProps) => {
  return (
    <div
      className={`${styles["sticky-panel"]} ${styles[direction]} ${className}`}
      style={{ [direction]: offset }}
    >
      {children}
    </div>
  );
};

export { StickyPanel };

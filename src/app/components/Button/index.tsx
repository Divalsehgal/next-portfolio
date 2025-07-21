import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames";
export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

const Button: React.FC<ButtonProps> = ({
  children,
  leftIcon,
  rightIcon,
  variant = "primary",
  className = "",
  ...rest
}) => {
  return (
    <button
      className={classNames([
        styles.button,
        styles[`button--${variant}`],
        className
      ])}
      {...rest}
    >
      {leftIcon && (
        <span className={styles["button__icon-left"]}>{leftIcon}</span>
      )}
      <span className={styles["button__content"]}>{children}</span>
      {rightIcon && (
        <span className={styles["button__icon-right"]}>{rightIcon}</span>
      )}
    </button>
  );
};

export default Button;

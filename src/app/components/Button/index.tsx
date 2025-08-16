import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames";
export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  /**
   * Variant of the button: 'primary', 'secondary', or 'icon' (icon-only)
   */
  variant?: "primary" | "secondary" | "icon";
  className?: string;
  /**
   * Accessible label for icon-only button
   */
  "aria-label"?: string;
};

const Button: React.FC<ButtonProps> = ({
  children,
  leftIcon,
  rightIcon,
  variant = "primary",
  className = "",
  ...rest
}) => {
  // Icon-only variant: render only icon, require aria-label
  if (variant === "icon") {
    const icon = leftIcon || rightIcon;
    return (
      <button
        className={classNames([
          styles.button,
          styles["button--icon"],
          className,
        ])}
        aria-label={rest["aria-label"]}
        {...rest}
      >
        {icon && icon}
      </button>
    );
  }
  return (
    <button
      className={classNames([
        styles.button,
        styles[`button--${variant}`],
        className,
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

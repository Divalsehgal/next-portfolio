import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames";
type CommonProps = {
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

type ButtonAsButton = CommonProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof CommonProps> & {
    href?: undefined;
  };

type ButtonAsAnchor = CommonProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof CommonProps> & {
    href: string;
  };

export type ButtonProps = ButtonAsButton | ButtonAsAnchor;

const Button = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>((props, ref) => {
  const {
    children,
    leftIcon,
    rightIcon,
    variant = "primary",
    className = "",
    href,
    ...rest
  } = props;

  const classes = classNames(
    styles["button"],
    variant === "icon" ? styles["button--icon"] : styles[`button--${variant}`],
    className
  );

  const content =
    variant === "icon" ? (
      leftIcon || rightIcon
    ) : (
      <>
        {leftIcon}
        {children}
        {rightIcon}
      </>
    );

  if (href) {
    return (
      <a
        ref={ref as React.RefObject<HTMLAnchorElement>}
        href={href}
        className={classes}
        {...(rest as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      ref={ref as React.RefObject<HTMLButtonElement>}
      className={classes}
      type="button"
      {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {content}
    </button>
  );
});

Button.displayName = "Button";

export default Button;

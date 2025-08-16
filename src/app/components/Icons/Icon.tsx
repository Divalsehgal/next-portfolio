import React from "react";
import * as Icons from "./components";

export type IconName = keyof typeof Icons;

export interface IconProps {
  /**
   * Name of the icon to render (e.g., 'IconJavascript')
   */
  name: string
  /**
   * Icon size in pixels
   */
  size?: number;
  /**
   * Additional className for styling
   */
  className?: string;
  /**
   * Accessible label for the icon
   */
  "aria-label"?: string;
}

/**
 * Renders a dynamic icon component by name.
 * @param {IconProps} props
 */
export const Icon = ({
  name,
  size = 24,
  className = "",
  "aria-label": ariaLabel,
}: IconProps) => {
  const IconComponent = Icons[name];
  if (!IconComponent) {
     
    console.warn(`Icon '${name}' does not exist.`);
    return null;
  }
  return (
    <IconComponent
      width={size}
      height={size}
      className={className}
      aria-label={ariaLabel || name}
      aria-hidden={ariaLabel ? undefined : true}
      focusable="false"
      style={{ width: size, height: size, display: "inline-block" }}
    />
  );
};

export default Icon;

import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import Button from "./"; // make sure this path is correct

import { IconJavascript, IconNodejs, IconReact } from "../Icons/components";

const iconOptions = {
  none: null,
  javascript: <IconJavascript height={20} width={20} color="white" />,
  nodejs: <IconNodejs height={20} width={20} color="white" />,
  react: <IconReact height={20} width={20} color="white" />,
};

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  argTypes: {
    onClick: { action: "clicked" },
    disabled: { control: "boolean" },
    variant: {
      control: "select",
      options: ["primary", "secondary", "icon"],
    },
    leftIcon: {
      control: "select",
      options: Object.keys(iconOptions),
      mapping: iconOptions,
      description:
        "Icon to display on the left (for icon variant, only leftIcon is used)",
    },
    rightIcon: {
      control: "select",
      options: Object.keys(iconOptions),
      mapping: iconOptions,
      description:
        "Icon to display on the right (for icon variant, only rightIcon is used if leftIcon is not set)",
    },
    children: { control: "text" },
    className: { control: "text" },
    "aria-label": {
      control: "text",
      description: "Accessible label for icon-only button",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

const render = (args: React.ComponentProps<typeof Button>) => (
  <Button {...args} />
);

export const Default: Story = {
  render,
  args: {
    children: "Click Me",
    disabled: false,
    variant: "primary",
    leftIcon: "none",
    rightIcon: "none",
  },
};

export const Disabled: Story = {
  render,
  args: {
    children: "Disabled",
    disabled: true,
    variant: "primary",
    leftIcon: "none",
    rightIcon: "none",
  },
};

export const Secondary: Story = {
  render,
  args: {
    children: "Secondary",
    disabled: false,
    variant: "secondary",
    leftIcon: "none",
    rightIcon: "none",
  },
};

export const IconOnly: Story = {
  render,
  args: {
    variant: "icon",
    leftIcon: "javascript",
    "aria-label": "React Icon Button",
  },
};

import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import Button from "./"; // make sure this path is correct

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  argTypes: {
    onClick: { action: "clicked" },
    disabled: { control: "boolean" },
    variant: {
      control: "select",
      options: ["primary", "secondary"],
    },
    children: { control: "text" },
    className: { control: "text" },
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
  },
};

export const Disabled: Story = {
  render,
  args: {
    children: "Disabled",
    disabled: true,
    variant: "primary",
  },
};

export const Secondary: Story = {
  render,
  args: {
    children: "Secondary",
    disabled: false,
    variant: "secondary",
  },
};

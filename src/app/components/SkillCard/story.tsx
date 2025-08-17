import React from "react";
import { SkillCard } from ".";
import type { Meta, StoryObj } from "@storybook/react";

const iconOptions = [
  "IconReact",
  "IconTypescript",
  "IconNodejs",
  "IconNextjs",
  "IconJavascript",
  "IconGoogle",
];

const meta: Meta<typeof SkillCard> = {
  title: "Components/SkillCard",
  component: SkillCard,
  tags: ["autodocs"],
  argTypes: {
    icon: {
      control: { type: "select" },
      options: iconOptions,
      description: "Icon to display in the card",
    },
    name: {
      control: "text",
      description: "Skill name",
    },
  },
};
export default meta;

type Story = StoryObj<typeof SkillCard>;

const render = (args: React.ComponentProps<typeof SkillCard>) => (
  <SkillCard {...args} />
);

export const Default: Story = {
  render,
  args: {
    icon: "IconReact",
    name: "ReactJS",
  },
};

export const Typescript: Story = {
  render,
  args: {
    icon: "IconTypescript",
    name: "TypeScript",
  },
};

export const Nodejs: Story = {
  render,
  args: {
    icon: "IconNodejs",
    name: "Node.js",
  },
};

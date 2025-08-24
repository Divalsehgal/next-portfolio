import type { Meta, StoryObj } from "@storybook/react";
import { ProjectCard } from "./index";

const meta: Meta<typeof ProjectCard> = {
  title: "Components/ProjectCard",
  component: ProjectCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ProjectCard>;

export const Default: Story = {
  args: {
    title: "Portfolio Website",
    description:
      "A modern portfolio website built with Next.js, TypeScript, and SCSS. Features responsive design, dark mode, and smooth animations.",
    imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    githubUrl: "https://github.com/username/project",
    liveUrl: "https://project-demo.com",
    technologies: ["Next.js", "TypeScript", "SCSS"],
  },
};

export const Reversed: Story = {
  args: {
    ...Default.args,
    reverse: true,
  },
};

export const WithoutLinks: Story = {
  args: {
    ...Default.args,
    githubUrl: undefined,
    liveUrl: undefined,
  },
};

export const LongDescription: Story = {
  args: {
    ...Default.args,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
};

import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import ExperienceCard from ".";
import { IconName } from "../Icons/Icon";
import * as Icons from "../Icons/components";

const meta: Meta<typeof ExperienceCard> = {
  title: "Components/ExperienceCard",
  component: ExperienceCard,
};

export default meta;

type Story = StoryObj<typeof ExperienceCard>;

const iconNames = Object.keys(Icons).filter((name) =>
  name.startsWith("Icon")
) as IconName[];

const ExperienceCardStory: React.FC<React.ComponentProps<typeof ExperienceCard>> = (args) => {
  const [selectedIcon, setSelectedIcon] = useState<IconName>(iconNames[0]);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 16,
        alignItems: "flex-start",
      }}
    >
      <label htmlFor="icon-select" style={{ fontWeight: 500 }}>
        Select Icon:
      </label>
      <select
        id="icon-select"
        value={selectedIcon}
        onChange={(e) => setSelectedIcon(e.target.value as IconName)}
        style={{ padding: 8, fontSize: 16, minWidth: 180 }}
      >
        {iconNames.map((name) => (
          <option key={name} value={name}>
            {name}
          </option>
        ))}
      </select>
      <ExperienceCard
        {...args}
        designation="Senior Software Engineer"
        company="Epam Systems"
        duration="April 2025 - Present"
        description="As a Senior Software Engineer at Google, I played a pivotal role in developing innovative solutions for Google's core search algorithms. Collaborating with a dynamic team of engineers, I contributed to the enhancement of search accuracy and efficiency, optimizing user experiences for millions of users worldwide."
        icon={selectedIcon}
      />
    </div>
  );
};

export const Default: Story = {
  render: (args) => <ExperienceCardStory {...args} />,
};

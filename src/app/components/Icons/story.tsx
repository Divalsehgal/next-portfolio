import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import * as Icons from "./components";
import Icon, { IconName } from "./Icon";

const iconNames = Object.keys(Icons).filter(
  (name) => name.startsWith("Icon") && name !== "Icon"
) as IconName[];

const meta: Meta<typeof Icon> = {
  title: "Components/Icons",
  component: Icon,
  argTypes: {
    name: {
      control: {
        type: "select",
        options: iconNames,
      },
      description: "Select icon name",
      defaultValue: iconNames[0],
    },
    size: {
      control: { type: "number", min: 8, max: 128, step: 4 },
      defaultValue: 40,
    },
  },
};

export default meta;

type Story = StoryObj<typeof Icon>;

const PlaygroundComponent: React.FC = () => {
  const [search, setSearch] = useState("");
  const filtered = iconNames.filter((name) =>
    name.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 24,
      }}
    >
      <input
        type="text"
        placeholder="Search icons..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ padding: 8, fontSize: 16, minWidth: 220, marginBottom: 8 }}
        aria-label="Search icons"
      />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 24,
          justifyContent: "center",
        }}
      >
        {filtered.length === 0 ? (
          <span style={{ color: "#888" }}>No icons found.</span>
        ) : (
          filtered.map((name) => (
            <div
              key={name}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                minWidth: 80,
              }}
            >
              <Icon name={name} size={40} />
              <span style={{ fontSize: 12, marginTop: 8 }}>{name}</span>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export const Playground: Story = {
  render: () => <PlaygroundComponent />,
};

export const AllIcons: Story = {
  render: () => (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 24 }}>
      {iconNames.map((name) => (
        <div
          key={name}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            minWidth: 80,
          }}
        >
          <Icon name={name} size={40} />
          <span style={{ fontSize: 12, marginTop: 8 }}>{name}</span>
        </div>
      ))}
    </div>
  ),
};

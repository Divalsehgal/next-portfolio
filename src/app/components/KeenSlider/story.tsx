import type { Meta, StoryObj } from "@storybook/react";
import { KeenSlider } from "./index";

const meta: Meta<typeof KeenSlider> = {
  title: "Components/KeenSlider",
  component: KeenSlider,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof KeenSlider>;

// Sample slide content component
const SampleSlide = ({ color, number }: { color: string; number: number }) => (
  <div
    style={{
      height: "200px",
      background: color,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "white",
      fontSize: "24px",
      fontWeight: "bold",
    }}
  >
    Slide {number}
  </div>
);

const sampleItems = [
  <SampleSlide key={1} color="#2563eb" number={1} />,
  <SampleSlide key={2} color="#7c3aed" number={2} />,
  <SampleSlide key={3} color="#db2777" number={3} />,
  <SampleSlide key={4} color="#ea580c" number={4} />,
  <SampleSlide key={5} color="#059669" number={5} />,
];

export const Default: Story = {
  args: {
    items: sampleItems,
    slidesPerView: 1,
    spacing: 15,
  },
};

export const MultipleSlides: Story = {
  args: {
    items: sampleItems,
    slidesPerView: 2,
    spacing: 20,
  },
};

export const WithLoop: Story = {
  args: {
    items: sampleItems,
    slidesPerView: 1,
    spacing: 15,
    loop: true,
  },
};

export const WithAutoplay: Story = {
  args: {
    items: sampleItems,
    slidesPerView: 1,
    spacing: 15,
    loop: true,
    autoplay: true,
  },
};

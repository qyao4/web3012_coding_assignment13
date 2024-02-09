// src/components/radio-button/RadioButton.stories.tsx
import React from "react";
import { Story, Meta } from "@storybook/react";
import RadioButton from "./RadioButton";

export default {
  title: "Components/RadioButton",
  component: RadioButton,
  argTypes: {
    label: { control: "text" },
    backgroundColor: { control: "color" },
    disabled: { control: "boolean" },
  },
} as Meta;

const Template: Story = (args) => (
  <RadioButton {...args} label="Radio Button" name="radio" />
);

export const Default = Template.bind({});
Default.args = {
  disabled: false,
  backgroundColor: "#f0f0f0",
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true,
};

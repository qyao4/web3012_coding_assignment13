// src/components/img/Img.stories.tsx
import React from "react";
import { Story, Meta } from "@storybook/react";
import Img from "./Img";
import { ImgProps } from "./Img.types";

export default {
  title: "Components/Img",
  component: Img,
} as Meta;

const Template: Story<ImgProps> = (args) => <Img {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: "logo192.png",
  alt: "logo192 of Image",
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true,
};

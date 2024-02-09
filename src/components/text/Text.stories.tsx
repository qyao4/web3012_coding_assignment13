// src/components/text/Text.stories.tsx
import React from 'react';
import { Story, Meta } from '@storybook/react';
import Text from './Text';
import { TextProps } from './Text.types';

export default {
  title: 'Components/Text',
  component: Text,
  argTypes: {
    content: { control: 'text' },
    disabled: { control: 'boolean' },
    backgroundColor: { control: 'color' }, // background
  },
} as Meta;

const Template: Story<TextProps> = (args) => <Text {...args} />;

export const Default = Template.bind({});
Default.args = {
  content: 'Default Text',
};

export const Disabled = Template.bind({});
Disabled.args = {
  content: 'Disabled Text',
  disabled: true,
};

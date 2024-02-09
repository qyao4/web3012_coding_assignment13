import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Button } from './index';
// import Button from './Button';
import { ButtonProps } from './Button.types';


export default {
  title: 'Components/Button', // Title in Storybook
  component: Button,
  argTypes: {
    text: { control: 'text' }, // text
    backgroundColor: { control: 'color' }, // background
    // ... more properties
  },
} as Meta;

// Template function to render the Button with props
const Template: Story<ButtonProps> = (args) => <Button {...args} />;

// Default button story
export const Default = Template.bind({});
// Describes a default button with "Click Me" text
Default.args = {
  text: 'Click Me',
  backgroundColor : 'green',
  disabled: false,
  // Function to execute on click, showing an alert for demo
  onClick: () => alert('Button Clicked!'),
};

// Disabled button story
export const Disabled = Template.bind({});
// Describes a button in a disabled state
Disabled.args = {
  text: 'Disabled Button',
  // backgroundColor: 'grey',
  disabled: true,
  onClick: () => alert('Disabled Button Clicked!'),
  // Simulating a disabled button by passing the disabled prop

};

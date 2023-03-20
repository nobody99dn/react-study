// Libraries
import React, { ComponentStory, ComponentMeta } from '@storybook/react';

// Components
import Button from './index';

// Styles
import '@assets/styles/App.css';
import '@assets/styles/variables.css';

// Types
import { ButtonVariants } from '@common-types/index';

export default {
  title: 'Components/Button',
  component: Button
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Button'
};

export const Primary = Template.bind({});
Primary.args = {
  children: 'Button',
  variant: ButtonVariants.Primary
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Button',
  variant: ButtonVariants.Secondary
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Button',
  isDisabled: true
};

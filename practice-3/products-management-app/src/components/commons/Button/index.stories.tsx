// Libraries
import React, { ComponentStory, ComponentMeta } from '@storybook/react';

// Components
import Button from './index';

// Styles
import '@assets/styles/App.css';
import '@assets/styles/variables.css';

// Constants
import { ButtonVariants } from '@constants/types';

export default {
  title: 'Components/Button',
  component: Button
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Button'
};

export const Primary = Template.bind({});
Primary.args = {
  title: 'Button',
  variant: ButtonVariants.Primary
};

export const Secondary = Template.bind({});
Secondary.args = {
  title: 'Button',
  variant: ButtonVariants.Secondary
};

export const Disabled = Template.bind({});
Disabled.args = {
  title: 'Button',
  isDisabled: true
};

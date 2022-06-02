import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button, ButtonVariants } from './index';

import '../../../assets/styles/App.css';
import '../../../assets/styles/variables.css';

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

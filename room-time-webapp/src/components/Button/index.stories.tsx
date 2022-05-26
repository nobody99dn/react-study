import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button, ButtonVariants } from './index';

import '../../variables.css';
import '../../App.css';

export default {
  title: 'Components/Button',
  component: Button,
  decorators: [
    (Story) => (
      <div style={{ backgroundColor: '#607d8b', padding: '10px 20px' }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    myAddon: {
      data: 'This data is passed to the addon'
    }
  }
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Button'
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Button',
  variant: ButtonVariants.Secondary
};

export const Outline = Template.bind({});
Outline.args = {
  children: 'Button',
  variant: ButtonVariants.Outline
};

export const Ghost = Template.bind({});
Ghost.args = {
  children: 'Button',
  variant: ButtonVariants.Ghost
};

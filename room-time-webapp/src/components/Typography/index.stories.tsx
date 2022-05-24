import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Typography } from './index';

import '../../variables.css';
import '../../App.css';

export default {
  title: 'Components/Typography',
  component: Typography
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = (args) => <Typography {...args} />;

export const Body1 = Template.bind({});
Body1.args = {
  children: 'Typography',
  theme: 'body1'
};

export const Body2 = Template.bind({});
Body2.args = {
  children: 'Typography',
  theme: 'body2'
};

export const Title = Template.bind({});
Title.args = {
  children: 'Typography',
  theme: 'title'
};

export const Caption = Template.bind({});
Caption.args = {
  children: 'Typography',
  theme: 'caption'
};

export const Outline = Template.bind({});
Outline.args = {
  children: 'Typography',
  theme: 'outline'
};

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Typography, ThemeTypes } from './index';

import '../../variables.css';
import '../../App.css';

export default {
  title: 'Components/Typography',
  component: Typography
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = (args) => <Typography {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Typography',
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Typography',
  theme: ThemeTypes.Secondary
};

export const Title = Template.bind({});
Title.args = {
  children: 'Typography',
  theme: ThemeTypes.Title
};

export const Caption = Template.bind({});
Caption.args = {
  children: 'Typography',
  theme: ThemeTypes.Caption
};

export const Outline = Template.bind({});
Outline.args = {
  children: 'Typography',
  theme: ThemeTypes.Outline
};

export const Highlight = Template.bind({});
Highlight.args = {
  children: 'Typography',
  theme: ThemeTypes.Highlight
};
